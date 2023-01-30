function wait(ms) {
  const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve("done");}
      ,ms);
    });
    return promise;
  }

 
  
module.exports = { wait };
