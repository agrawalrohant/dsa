var filename = "./Continuous Sum Query.js"; // Update the file name to debug here

var scalerModule = require(filename);

// Update the paramters to pass
var reuslt = scalerModule.solve(5, [
  [1, 2, 10],
  [2, 3, 20],
  [2, 5, 25],
]);

console.log(reuslt);
// from CMD run command "node main" or "node scaler/main" from outer folder
