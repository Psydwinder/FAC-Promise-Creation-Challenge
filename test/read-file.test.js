const test = require("node:test");
const assert = require("node:assert");
const path = require("node:path");
const { readFilePromise } = require("../challenge/read-file.js");

test("readFilePromise returns a promise that resolves with file contents", async () => {
  const testPath = path.join("challenge", "test.txt");
  const result = readFilePromise(testPath);

  assert.ok(
    result instanceof Promise,
    "readFilePromise should return a promise"
  );

  const contents = await result.catch((e) => {
    console.log("===", e);
    assert.fail("readFilePromise should not return a promise that rejects");
  });

  assert.equal(
    contents?.toString(),
    "hello",
    `readFilePromise("./test/txt") should be should be 'hello', received '${contents}'`
  );
});

test("readFilePromise rejects if an error occurs", async () => {
  const result = readFilePromise("notReal.psd");

  try {
    await result;
    assert.fail("Nonexistent file should cause readFilePromise to reject");
  } catch (error) {
    assert.ok(
      error instanceof Error,
      "readFilePromise should reject with an Error object"
    );
  }
});
