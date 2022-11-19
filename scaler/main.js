var filename = "./Merge Intervals.js"; // Update the file name to debug here

var scalerModule = require(filename);

// Update the paramters to pass
var reuslt = scalerModule.solve(
  [
    [3, 5],
    [8, 10],
  ],
  [1, 12]
);

console.log(reuslt);
// from CMD run command "node main" or "node scaler/main" from outer folder
// TO Debug Play Launch Program, it will stop at debug point.
