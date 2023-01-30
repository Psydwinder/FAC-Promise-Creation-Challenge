const fs = require("node:fs");

//The code defines a function readFilePromise which takes a file path as an argument and returns a Promise that:
function readFilePromise(filePath) {
  return new Promise((resolve, reject) =>{
    fs.readFile(filePath,(error,contents) =>{ //Returns the contents of a file using the fs.readFile method from the built-in fs module in Node.js.
      if (error) { //If the fs.readFile operation is successful, the contents of the file are passed to the resolve function to indicate that the Promise is fulfilled.
        reject (error);
      } else { //If there is an error reading the file, the error is passed to the reject function to indicate that the Promise is rejected.
        resolve(contents);
      }
    });
  });
}

//The Promise returned by readFilePromise can be used to perform asynchronous file reading in a way that can be easily composed with other asynchronous operations.
module.exports = { readFilePromise };
