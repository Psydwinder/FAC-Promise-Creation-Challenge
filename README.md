You may have _used_ promises provided by libraries or built-in functions before. For example:

```js
fetch("/test")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

But how do you _create_ your own promise objects?

## Creating promises

You can create your own promise objects with [`new Promise()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise). You have to pass in a function that defines when the promise will resolve or reject. This function is passed two arguments: `resolve` and `reject`. These are functions you call with the value you want to resolve/reject with.

For example:

```js
function doSomethingAsync() {
  const promise = new Promise((resolve, reject) => {
    // silly example: this will reject 50% of the time
    // in the real world you'd be doing some async task that might error
    if (Math.random() > 0.5) {
      reject("uh oh");
    } else {
      resolve("success!);
    }
  });
  return promise;
}
```

You could then use this just like any other promise-returning function:

```js
doSomethingAsync()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## Challenge one

You're going to create a promisified version of `setTimeout`, called `wait`. It should take a number of millliseconds to wait as an argument, set a timeout for that long, then resolve the promise.

It should be usable like this:

```js
wait(1000).then(() => console.log("done"));
// (after 1000ms) Logs: "done"
```

You can run the tests to check if your solution works:

```shell
npm run test:1
```

## Challenge two

You're going to create your own promisified wrapper of Node's [`fs.readFile`](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) method. It usually takes a callback to be run when it finishes its asynchronous task.

> **More recent versions of Node include an already-promisified version of the `fs` module that you can access via `require("node:fs/promises")`. In the real world you should probably just use this rather than implementing your own.**

Implement the `readFilePromise` function so that it returns a new promise. It should use `fs.readFile` to read whatever file path is passed in, then resolve with the result. It should reject with any error that occurred. For example:

```js
readFilePromise("./test.txt")
  .then((contents) => console.log(contents))
  .catch((error) => console.error(error));
```

You can run the tests to check if your solution works:

```shell
npm run test:2
```
