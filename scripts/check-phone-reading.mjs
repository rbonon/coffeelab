import assert from 'node:assert/strict';
import { examples, weightValue, temperatureValue, ratioValue, ReadingWakeLock } from '../docs/assets/recipe-reading.mjs';
assert.ok(Math.abs(weightValue(400, 'oz') * 28.349523125 - 400) < 1e-9);
assert.equal(temperatureValue(0, 'F'), 32);
assert.equal(temperatureValue(100, 'F'), 212);
assert.equal(ratioValue(20, 200), 10);
assert.equal(ratioValue(20, 400), 20);
assert.equal(ratioValue(18, 36), 2);
assert.equal(ratioValue(undefined, 300), null);
assert.equal(examples.pour.steps.reduce((sum, step) => sum + step.add, 0), examples.pour.water);
assert.equal(examples.partial.dose, undefined);
for (const recipe of Object.values(examples)) {
  assert.equal(recipe.title.length, 2);
  for (const step of recipe.steps) { assert.equal(step.title.length, 2); assert.equal(step.text.length, 2); }
}
class Sentinel extends EventTarget {
  async release() { this.released = true; this.dispatchEvent(new Event('release')); }
}
let states = [];
const absent = new ReadingWakeLock(null, s => states.push(s));
await absent.start(); assert.equal(states.at(-1), 'unavailable');
const denied = new ReadingWakeLock({request: async () => { throw Error('denied'); }}, s => states.push(s));
await denied.start(); assert.equal(states.at(-1), 'failed');
let locks = [];
const normal = new ReadingWakeLock({request: async () => { const lock = new Sentinel(); locks.push(lock); return lock; }}, s => states.push(s));
await normal.start(); assert.equal(states.at(-1), 'active');
await locks[0].release(); assert.equal(states.at(-1), 'released');
await normal.acquire(); assert.equal(locks.length, 2); assert.equal(states.at(-1), 'active');
await normal.stop(); assert.ok(locks[1].released); assert.equal(states.at(-1), 'off');
let resolve;
const lateLock = new Sentinel();
const late = new ReadingWakeLock({request: () => new Promise(r => { resolve = r; })}, s => states.push(s));
const pending = late.start(); await late.stop(); resolve(lateLock); await pending;
assert.ok(lateLock.released); assert.equal(late.lock, null); assert.equal(states.at(-1), 'off');
console.log('PASS: bilingual fixtures, equivalent conversions, method ratio bases, and wake-lock lifecycle including late completion');
