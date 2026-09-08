import test from 'node:test';
import assert from 'node:assert/strict';
import { positionToEntities, entitiesToPosition, ENTITY_SLIDER_STEPS } from '../src/slider.js';

test('the scale accelerates gently and gives larger counts enough space', () => {
  assert.deepEqual([0, .25, .5, .75, 1].map(p => positionToEntities(p * ENTITY_SLIDER_STEPS)), [1, 63, 251, 563, 1000]);
  assert.ok(entitiesToPosition(10) < .10 * ENTITY_SLIDER_STEPS);
  assert.ok(entitiesToPosition(100) > .30 * ENTITY_SLIDER_STEPS);
  assert.ok(entitiesToPosition(100) < .33 * ENTITY_SLIDER_STEPS);
});

test('every whole entity count can be restored to its exact slider value', () => {
  for (let value = 1; value <= 1000; value++) assert.equal(positionToEntities(entitiesToPosition(value)), value);
});

test('drag positions stay monotonic and inside the allowed range', () => {
  let previous = 1;
  for (let position = -10; position <= ENTITY_SLIDER_STEPS + 10; position++) {
    const value = positionToEntities(position);
    assert.ok(Number.isInteger(value) && value >= previous && value <= 1000);
    previous = value;
  }
  assert.equal(entitiesToPosition(0), 0);
  assert.equal(entitiesToPosition(1001), ENTITY_SLIDER_STEPS);
});
