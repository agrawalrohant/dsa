// question --> https://www.scaler.com/academy/mentee-dashboard/class/41063/homework/problems/275?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //return an integer
  colorful: function (A) {
    let set = new Set();
    A += "";
    for (let i = 0; i < A.length; i++) {
      let product = 1;
      for (let j = i; j < A.length; j++) {
        product *= parseInt(A[j]);
        if (set.has(product)) {
          return 0;
        } else {
          set.add(product);
        }
      }
    }
    return 1;
  },
};
