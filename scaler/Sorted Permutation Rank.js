// question --> https://www.scaler.com/academy/mentee-dashboard/class/41054/homework/problems/317/hints?navref=cl_pb_nv_tb
module.exports = {
  //param A : string
  //return an integer
  findRank: function (A) {
    let ans = 1;
    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        if (A[j] < A[i]) {
          ans += this.factorial(A.length - 1 - i) % 1000003;
        } else {
          continue;
        }
      }
    }
    return ans % 1000003;
  },
  factorial: function (N) {
    if (N == 0) {
      return 1;
    }
    return ((this.factorial(N - 1) % 1000003) * (N % 1000003)) % 1000003;
  },
};
