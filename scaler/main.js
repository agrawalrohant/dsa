var filename = "./Points on same line.js"; // Update the file name to debug here

var scalerModule = require(filename);

// Update the paramters to pass
var reuslt = scalerModule.solve(
  [
    48, 45, -3, 7, -25, 38, 2, 13, 13, 18, -44, 34, -27, -46, 48, -39, -41, -32,
    -16, 17, -6, 44, -28, -44, -6, -43, -16, 30, -3, -27, 32, 38, -26, 20, 4,
    -44, -37,
  ],
  [
    47, -42, 41, 22, -4, -35, -45, -22, 5, -20, 21, -13, 47, 32, -48, 47, 17,
    -23, 30, -30, 37, 42, 44, 23, 1, -40, -9, 34, -34, 49, 16, -35, 2, -19, 31,
    23, -37,
  ]
);

console.log(reuslt);
// from CMD run command "node main" or "node scaler/main" from outer folder
// TO Debug Play Launch Program, it will stop at debug point.
