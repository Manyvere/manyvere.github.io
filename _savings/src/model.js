// Source: live Savings worksheet, Lineage Business Model 2026, 7 September 2026.
// Rows 41–53. Role hours: associate, senior, manager. Rates retain source precision.
export const PROCESS = [
  ['Interview preparation', [.5, .5, 0], .5],
  ['Interview', [.5, .5, 0], 0],
  ['Process narrative', [.5, 0, 0], .8],
  ['Flowchart', [1, 0, 0], .8],
  ['Document requests', [.25, 0, 0], .7],
  ['Client document collection', [0, 0, 0], .5],
  ['Walkthrough evidence', [3, 0, 0], .85],
  ['Missing document requests', [.5, 0, 0], .7],
  ['Client supplementary documents', [0, 0, 0], .5],
  ['Complete walkthrough', [.5, 0, 0], .6],
  ['Senior review', [0, .25, 0], .3],
  ['Manager review', [0, 0, .25], .3],
  ['File in audit dossier', [.5, 0, 0], .6],
];

export const BASE_HOURS = 8.75;
export const DEFAULT_INPUTS = { entities: 30, walkthroughs: 3, hours: 8 };
export const DEFAULT_ASSUMPTIONS = {
  rates: [42.34285714285714, 53.48571428571429, 72.42857142857143],
  fee: 85,
  platform: 5000,
  realization: 100,
};

export const LIMITS = {
  entities: { min: 1, max: 1000, step: 1 },
  walkthroughs: { min: 1, max: 10, step: 1 },
  hours: { min: 1, max: 8, step: 1 },
};

export function inputError(field, value) {
  const limit = LIMITS[field];
  if (value === '' || value == null || !Number.isFinite(Number(value))) return 'Enter a number to continue.';
  const n = Number(value);
  if (n < limit.min || n > limit.max) return `Enter a value from ${limit.min} to ${limit.max.toLocaleString('en-GB')}.`;
  if (!Number.isInteger(n)) return 'Enter a whole number.';
  return '';
}

export function calculate(inputs, assumptions = DEFAULT_ASSUMPTIONS) {
  for (const key of Object.keys(LIMITS)) {
    const error = inputError(key, inputs[key]);
    if (error) throw new RangeError(`${key}: ${error}`);
  }
  const { rates, fee, platform, realization } = assumptions;
  if (!Array.isArray(rates) || rates.length !== 3 || rates.some(r => !Number.isFinite(r) || r < 0 || r > 1000)
    || !Number.isFinite(fee) || fee < 0 || fee > 10000 || !Number.isFinite(platform) || platform < 0 || platform > 1000000
    || !Number.isFinite(realization) || realization < 0 || realization > 100) throw new RangeError('Invalid calculation assumptions.');
  const count = Number(inputs.entities) * Number(inputs.walkthroughs);
  const scale = Number(inputs.hours) / BASE_HOURS;
  const factor = realization / 100;
  const steps = PROCESS.filter(([, hrs]) => hrs.some(Boolean)).map(([name, hrs, saving]) => {
    const before = hrs.reduce((sum, n) => sum + n, 0) * scale;
    const saved = before * saving * factor;
    const value = hrs.reduce((sum, n, i) => sum + n * rates[i], 0) * scale * saving * factor;
    return { name, before, after: before - saved, saved, value, saving: saving * factor };
  });
  const roles = ['Associate', 'Senior', 'Manager'].map((name, index) => {
    const hoursSaved = PROCESS.reduce((sum, [, hrs, saving]) => sum + hrs[index] * scale * saving * factor * count, 0);
    const rate = rates[index];
    return { name, hoursSaved, savedValue: hoursSaved * rate, rate };
  });
  const hoursSavedPerWalkthrough = steps.reduce((sum, s) => sum + s.saved, 0);
  const valuePerWalkthrough = steps.reduce((sum, s) => sum + s.value, 0);
  const hoursSaved = count * hoursSavedPerWalkthrough;
  const grossValue = count * valuePerWalkthrough;
  const usageCost = count * fee;
  const softwareCost = usageCost + platform;
  const netValue = grossValue - softwareCost;
  const marginPerWalkthrough = valuePerWalkthrough - fee;
  return {
    count, steps, roles, hoursBefore: count * Number(inputs.hours), hoursSaved,
    hoursAfter: count * Number(inputs.hours) - hoursSaved,
    hoursSavedPerWalkthrough, hoursAfterPerWalkthrough: Number(inputs.hours) - hoursSavedPerWalkthrough,
    reduction: hoursSavedPerWalkthrough / Number(inputs.hours),
    daysSaved: hoursSaved / 8, grossValue, usageCost, softwareCost, netValue,
    returnMultiple: softwareCost > 0 ? grossValue / softwareCost : null,
    breakEvenWalkthroughs: marginPerWalkthrough > 0 ? Math.ceil(platform / marginPerWalkthrough) : null,
  };
}

export const money = n => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n).replace('-', '−');
export const number = (n, digits = 0) => new Intl.NumberFormat('en-GB', { maximumFractionDigits: digits }).format(n);

export function estimateText(inputs, assumptions, result) {
  const preciseMoney = n => new Intl.NumberFormat('en-IE', {
    style: 'currency', currency: 'EUR', minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2,
  }).format(n).replace('-', '−');
  return [
    'LINEAGE — ANNUAL CAPACITY VALUE ESTIMATE',
    `Created ${new Date().toISOString().slice(0, 10)}`,
    '',
    `Client entities: ${inputs.entities}`,
    `Average walkthroughs per client: ${inputs.walkthroughs}`,
    `Team hours per walkthrough: ${inputs.hours}`,
    `Annual walkthroughs: ${result.count}`,
    '',
    `Hours freed up: ${number(result.hoursSaved, 2)}`,
    `Resulting time reduction: ${number(result.reduction * 100, 2)}%`,
    `Value of time: ${money(result.grossValue)}`,
    `Lineage usage: ${money(result.usageCost)}`,
    `Annual platform fee: ${preciseMoney(assumptions.platform)}`,
    `Net annual capacity value after Lineage fees: ${money(result.netValue)}`,
    '',
    'Annual value of freed time by role:',
    ...result.roles.map(role => `${role.name}: ${number(role.hoursSaved, 2)} hours × EUR ${role.rate.toFixed(4)}/hour = ${preciseMoney(role.savedValue)}`),
    '',
    `Hourly costs (associate / senior / manager): ${assumptions.rates.map(r => 'EUR ' + r.toFixed(4)).join(' / ')}`,
    `Price per walkthrough: ${preciseMoney(assumptions.fee)}`,
    `Share of assumed time reduction: ${assumptions.realization}%`,
    '',
    'These are model assumptions, not measured or guaranteed results. Pricing is indicative and excludes VAT.',
    'The estimate values freed capacity at internal staff costs. It is a cash saving only if your actual spending falls.',
    'Client invoice reductions and client-side time savings are excluded to avoid double counting.',
    'Implementation, training, discounts, price changes and financing costs are excluded.',
    'Source: Lineage Business Model 2026, Savings worksheet, viewed 7 September 2026.',
  ].join('\n');
}
