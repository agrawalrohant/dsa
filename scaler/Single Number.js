// question --> https://www.scaler.com/academy/mentee-dashboard/class/41049/assignment/problems/193?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
      answer = answer ^ parseInt(A[i]);
    }
    return answer;
  },
};
