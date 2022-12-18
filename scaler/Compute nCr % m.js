// question --> https://www.scaler.com/academy/mentee-dashboard/class/41054/assignment/problems/4111?navref=cl_tt_lst_nm

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let arr1 = new Array(A + 1);
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] = new Array(B + 1);
    }
    for (let i = 0; i <= A; i++) {
      for (let j = 0; j <= Math.min(i, B); j++) {
        if (j == 0 || j == i) {
          arr1[i][j] = 1;
        } else {
          arr1[i][j] = ((arr1[i - 1][j - 1] % C) + (arr1[i - 1][j] % C)) % C;
        }
      }
    }
    return arr1[A][B] % C;
  },
};
