var filename = "./Rotten Oranges.js"; // Update the file name to debug here

var scalerModule = require(filename);

let reuslt = scalerModule.solve([
  [2, 0, 2, 2, 2, 0, 2, 1, 1, 0],
  [0, 1, 2, 0, 2, 0, 0, 1, 0, 1],
  [0, 1, 1, 1, 2, 0, 1, 1, 2, 1],
  [2, 0, 2, 0, 1, 1, 2, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 2, 0, 2, 2],
  [0, 2, 1, 1, 2, 2, 0, 2, 1, 2],
  [2, 1, 0, 2, 0, 0, 0, 0, 1, 1],
  [2, 2, 0, 2, 2, 1, 1, 1, 2, 2],
]);

console.log("Result : " + reuslt);

// from CMD run command "node main" or "node scaler/main" from outer folder
// TO Debug Play Launch Program, it will stop at debug point.
