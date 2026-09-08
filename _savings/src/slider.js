import { LIMITS } from './model.js';

export const ENTITY_SLIDER_STEPS = 1000;
const { min, max } = LIMITS.entities;
const span = max - min;

export function positionToEntities(position) {
  const progress = Math.min(1, Math.max(0, position / ENTITY_SLIDER_STEPS));
  // Gentle acceleration: about 100 at one third, 250 halfway and 1000 at the end.
  return Math.round(min + span * progress * progress);
}

export function entitiesToPosition(value) {
  const clamped = Math.min(max, Math.max(min, value));
  return Math.sqrt((clamped - min) / span) * ENTITY_SLIDER_STEPS;
}
