// question -->https://www.scaler.com/academy/mentee-dashboard/class/52328/assignment/problems/23/?navref=cl_pb_nv_tb

module.exports = {
  //param A : string
  //param B : array of strings
  //return an integer
  wordBreak: function (A, B) {
    let dp = new Array(A.length + 1);
    dp.fill(-1);
    dp[A.length] = 1;
    let set = new Set();
    for (let i = 0; i < B.length; i++) {
      set.add(B[i]);
    }

    function isWord(A, s, e) {
      let str = "";
      for (let i = s; i <= e; i++) {
        str += A[i];
      }
      if (set.has(str)) {
        return 1;
      } else {
        return 0;
      }
    }

    function findWordBreak(A, s) {
      if (dp[s] == -1) {
        let ans = 0;
        for (let i = s; i < A.length; i++) {
          if (isWord(A, s, i) && findWordBreak(A, i + 1)) {
            ans = 1;
            break;
          }
        }
        dp[s] = ans;
      }
      return dp[s];
    }

    return findWordBreak(A, 0);
  },
};
