// question --> https://www.scaler.com/academy/mentee-dashboard/class/41049/assignment/problems/189?navref=cl_tt_lst_nm

module.exports = {
  //param A : string
  //param B : string
  //return a strings
  addBinary: function (A, B) {
    let answer = "";
    let bigger = A;
    let smaller = B;
    if (B.length > A.length) {
      bigger = B;
      smaller = A;
    }
    let carry = 0;
    for (let i = 0; i < bigger.length; i++) {
      let currentSum = 0;
      if (smaller[smaller.length - 1 - i] >= 0) {
        currentSum =
          carry +
          parseInt(bigger[bigger.length - 1 - i]) +
          parseInt(smaller[smaller.length - 1 - i]);
      } else {
        currentSum = carry + parseInt(bigger[bigger.length - 1 - i]);
      }
      answer = (currentSum % 2) + answer;
      carry = Math.floor(currentSum / 2);
    }
    if (carry) {
      return carry + answer;
    }
    return answer;
  },
};
