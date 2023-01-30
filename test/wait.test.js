const test = require("node:test");
const assert = require("node:assert");
const { wait } = require("../challenge/wait.js");

test("`wait` function works correctly", async () => {
  const start = Date.now();

  const result = wait(200);
  assert.ok(result instanceof Promise, "wait should return a promise");

  await result.catch(() => {
    assert.fail("wait should not return a promise that rejects");
  });

  const end = Date.now();
  const duration = end - start;

  // can't be too specific here as setTimeout is never exact
  assert.ok(duration > 199, "`wait(200)` should wait at least 200ms");
  assert.ok(duration < 250, "`wait(200)` shouldn't wait longer than ~200ms");
});
