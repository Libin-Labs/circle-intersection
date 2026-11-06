import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns two intersections', () => {
  assert.deepEqual(api.intersectCircles({ x: 0, y: 0, radius: 5 }, { x: 8, y: 0, radius: 5 }), [
    { x: 4, y: 3 },
    { x: 4, y: -3 },
  ]);
});
test('returns tangent point', () => {
  assert.deepEqual(api.intersectCircles({ x: 0, y: 0, radius: 1 }, { x: 2, y: 0, radius: 1 }), [
    { x: 1, y: 0 },
  ]);
});
test('returns empty when separate', () => {
  assert.deepEqual(api.intersectCircles({ x: 0, y: 0, radius: 1 }, { x: 3, y: 0, radius: 1 }), []);
});
test('returns empty for strict containment', () => {
  assert.deepEqual(api.intersectCircles({ x: 0, y: 0, radius: 5 }, { x: 1, y: 0, radius: 1 }), []);
});
test('returns null for coincident circles', () => {
  assert.equal(api.intersectCircles({ x: 0, y: 0, radius: 2 }, { x: 0, y: 0, radius: 2 }), null);
});
test('rejects negative radius', () => {
  assert.throws(
    () => api.intersectCircles({ x: 0, y: 0, radius: -1 }, { x: 1, y: 0, radius: 1 }),
    RangeError,
  );
});
