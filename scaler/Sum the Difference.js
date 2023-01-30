// question --> https://www.scaler.com/academy/mentee-dashboard/class/41058/assignment/problems/453?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ans = 0;
    let mod = 1000000007;
    let max = 0;
    let min = 0;
    let N = A.length;
    A.sort((a, b) => a - b);
    for (let i = 0; i < N; i++) {
      min *= 2;
      min = (min + A[i]) % mod;
      let j = N - i - 1;
      max *= 2;
      max = (max + A[j]) % mod;
    }
    return (max - min + mod) % mod;
  },
};
