const fs = require("node:fs");

/**
 * We have 2 levels of callback functions:
 * 1st We pass the new Promise executor a fn that receives resolve & reject.
 *     this calls `fs.readFile` with the file path and another callback fn.
 * 2nd This fn is called by `fs.readFile` when it's done.
 *     It receives a possible error and the file contents.
 *     If we got an error we tell the promise to reject with the error.
 *     Otherwise we got the file contents, so we tell the promise to resolve with that.
 *
 */
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, contents) => {
      if (error) {
        reject(error);
      } else {
        resolve(contents);
      }
    });
  });
}

module.exports = { readFilePromise };
