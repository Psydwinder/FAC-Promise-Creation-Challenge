/**
 * Short fancy version:
 * ====================
 */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Long explicit version:
 * ======================
 * The `executor` function tells the `new Promise` constructor what to do.
 * It receives two callback functions, resolve & reject.
 * We decide when the promise should either resolve or reject by calling these.
 * In this case we wait for `ms` time, then tell the promise to resolve.
 * Since this operation can't fail we don't use the `reject` callback.
 */
function wait2(ms) {
  function executor(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, ms);
  }
  const myPromise = new Promise(executor);
  return myPromise;
}

module.exports = { wait };
