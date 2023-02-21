// question --> https://www.scaler.com/academy/mentee-dashboard/class/52318/assignment/problems/4035/?navref=cl_pb_nv_tb

// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  let A = parseInt(inputString[0]);
  main(A);
});

function main(A) {
  if (A == 0) {
    console.log(0);
    return;
  } else if (A < 3) {
    console.log(1);
    return;
  } else {
    let a = 1;
    let b = 1;
    let c = 1;
    for (let i = 0; i < A - 2; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    console.log(c);
  }
}
