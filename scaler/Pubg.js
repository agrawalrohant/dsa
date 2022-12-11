// question -->https://www.scaler.com/academy/mentee-dashboard/class/41052/assignment/problems/9104?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let carry = A[0];
    for (let i = 1; i < A.length; i++) {
      carry = this.findGCD(A[i], carry);
    }
    return carry;
  },
  findGCD: function (a, b) {
    if (b == 0) {
      return a;
    }
    return this.findGCD(b, a % b);
  },
};
