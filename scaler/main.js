var filename = "./Flip.js"; // Update the file name to debug here

var scalerModule = require(filename);

// Update the paramters to pass
var reuslt = scalerModule.flip("01010101011001011101010101010101010");

console.log(reuslt);
// from CMD run command "node main" or "node scaler/main" from outer folder
// TO Debug Play Launch Program, it will stop at debug point.
