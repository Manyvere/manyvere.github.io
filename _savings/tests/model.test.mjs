import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate, DEFAULT_INPUTS, DEFAULT_ASSUMPTIONS, inputError, estimateText, PROCESS, BASE_HOURS } from '../src/model.js';

const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 0.00001, `${actual} != ${expected}`);

test('scales the live Excel process to eight hours and includes the platform fee once', () => {
  close(PROCESS.reduce((sum, [, hours]) => sum + hours.reduce((a, b) => a + b, 0), 0), BASE_HOURS);
  const r = calculate(DEFAULT_INPUTS);
  close(r.hoursSavedPerWalkthrough, 5.051428571428571);
  close(r.hoursAfterPerWalkthrough, 2.9485714285714284);
  close(r.hoursSaved, 454.62857142857143);
  close(r.grossValue, 19733.936326530613);
  close(r.softwareCost, 12650);
  close(r.netValue, 7083.936326530613);
  assert.equal(r.breakEvenWalkthroughs, 38);
});

test('small firms can have a negative result; it is never hidden', () => {
  const r = calculate({ entities: 1, walkthroughs: 1, hours: 8 });
  close(r.netValue, -4865.734040816326);
  close(r.softwareCost, 5085);
});

test('lower assumed savings changes both time and value while prices remain fixed', () => {
  const standard = calculate(DEFAULT_INPUTS);
  const cautious = calculate(DEFAULT_INPUTS, { ...DEFAULT_ASSUMPTIONS, realization: 50 });
  close(cautious.hoursSaved, standard.hoursSaved / 2);
  close(cautious.grossValue, standard.grossValue / 2);
  assert.equal(cautious.softwareCost, standard.softwareCost);
  close(cautious.netValue, -2783.0318367346936);
});

for (const rates of [DEFAULT_ASSUMPTIONS.rates, [43, 54, 72]]) {
  test(`annual role breakdown reconciles at rates ${rates.join(' / ')}`, () => {
    for (const realization of [100, 50, 0]) {
      const r = calculate(DEFAULT_INPUTS, { ...DEFAULT_ASSUMPTIONS, rates, realization });
      assert.deepEqual(r.roles.map(role => role.name), ['Associate', 'Senior', 'Manager']);
      // Independent source totals: 5.125 / .325 / .075 recovered hours,
      // scaled from 8.75 to 8 staff hours, across 90 annual walkthroughs.
      const expectedHours = [421.7142857142857, 26.742857142857144, 6.171428571428572];
      r.roles.forEach((role, index) => {
        close(role.hoursSaved, expectedHours[index] * realization / 100);
        close(role.savedValue, expectedHours[index] * realization / 100 * rates[index]);
        assert.equal(role.rate, rates[index]);
      });
      close(r.roles.reduce((sum, role) => sum + role.hoursSaved, 0), r.hoursSaved);
      close(r.roles.reduce((sum, role) => sum + role.savedValue, 0), r.grossValue);
    }
  });
}

test('annual role breakdown follows both volume and staff time scaling', () => {
  const standard = calculate(DEFAULT_INPUTS);
  const scaled = calculate({ entities: 60, walkthroughs: 3, hours: 4 });
  scaled.roles.forEach((role, index) => {
    close(role.hoursSaved, standard.roles[index].hoursSaved);
    close(role.savedValue, standard.roles[index].savedValue);
  });
});

test('zero savings and no break-even remain meaningful finite values', () => {
  const r = calculate(DEFAULT_INPUTS, { ...DEFAULT_ASSUMPTIONS, realization: 0 });
  assert.equal(r.hoursSaved, 0);
  assert.equal(r.netValue, -12650);
  assert.equal(r.breakEvenWalkthroughs, null);
  assert.equal(r.returnMultiple, 0);
});

test('free pricing is supported without division by zero', () => {
  const r = calculate(DEFAULT_INPUTS, { ...DEFAULT_ASSUMPTIONS, fee: 0, platform: 0 });
  assert.equal(r.returnMultiple, null);
  assert.equal(r.netValue, r.grossValue);
});

test('volume and time changes scale benefits correctly, keeping annual platform cost fixed', () => {
  const r = calculate({ entities: 60, walkthroughs: 3, hours: 4 });
  close(r.hoursSaved, 454.62857142857143);
  close(r.softwareCost, 20300);
  close(r.grossValue, 19733.936326530613);
});

test('invalid inputs are rejected rather than silently corrected', () => {
  for (const value of ['', NaN, Infinity, -1, 0, 1.5, 1001]) assert.ok(inputError('entities', value));
  assert.equal(inputError('entities', 1000), '');
  assert.equal(inputError('walkthroughs', 10), '');
  assert.ok(inputError('walkthroughs', 11));
  assert.equal(inputError('hours', 1), '');
  assert.equal(inputError('hours', 8), '');
  assert.ok(inputError('hours', .25));
  assert.ok(inputError('hours', 4.75));
  assert.ok(inputError('hours', 8.25));
  assert.throws(() => calculate({ ...DEFAULT_INPUTS, hours: 8.25 }), RangeError);
  assert.throws(() => calculate({ ...DEFAULT_INPUTS, entities: '' }), RangeError);
  assert.throws(() => calculate(DEFAULT_INPUTS, { ...DEFAULT_ASSUMPTIONS, rates: [-1, 0, 0] }), RangeError);
});

test('download carries the assumptions and negative values through', () => {
  const inputs = { entities: 1, walkthroughs: 1, hours: 8 };
  const output = estimateText(inputs, DEFAULT_ASSUMPTIONS, calculate(inputs));
  assert.match(output, /−€4,866/);
  assert.match(output, /Annual platform fee: €5,000/);
  assert.match(output, /not measured or guaranteed/);
});

test('download shows role values, resulting reduction and decimal fees accurately', () => {
  const assumptions = { ...DEFAULT_ASSUMPTIONS, rates: [43, 54, 72], realization: 50, fee: 85.5, platform: 5000.25 };
  const output = estimateText(DEFAULT_INPUTS, assumptions, calculate(DEFAULT_INPUTS, assumptions));
  assert.match(output, /Resulting time reduction: 31\.57%/);
  assert.match(output, /Associate: 210\.86 hours × EUR 43\.0000\/hour = €9,066\.86/);
  assert.match(output, /Senior: 13\.37 hours × EUR 54\.0000\/hour = €722\.06/);
  assert.match(output, /Manager: 3\.09 hours × EUR 72\.0000\/hour = €222\.17/);
  assert.match(output, /Price per walkthrough: €85\.50/);
  assert.match(output, /Annual platform fee: €5,000\.25/);
  assert.match(output, /Share of assumed time reduction: 50%/);
});
