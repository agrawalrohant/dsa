// question --> https://www.scaler.com/academy/mentee-dashboard/class/41051/homework/problems/4107?navref=cl_tt_nv
// Approach 1 - using Sieve of Eratosthenes
module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let spf = this.sieve();
    let ans = [];
    for (let i = 0; i < A.length; i++) {
      let count = 1;
      let temp = A[i];
      while (temp != 1) {
        let innerCount = 1;
        let pf = spf[temp];
        while (temp != 1 && temp % pf == 0) {
          innerCount++;
          temp = temp / pf;
        }
        count = count * innerCount;
      }
      ans.push(count);
    }
    return ans;
  },
  sieve: function () {
    let spf = new Array(1000005); // SMallext Prime Factors of 1000005 numbers
    for (let i = 0; i < 1000005; i++) {
      spf[i] = i;
    }
    for (let i = 2; i * i < 1000005; i++) {
      if (spf[i] == i) {
        for (let j = i * i; j < 1000005; j = j + i) {
          if (spf[j] == j) {
            spf[j] = i;
          }
        }
      }
    }
    return spf;
  },
};
// Aprroach 2
/*module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let ans = [];
    for (let i = 0; i < A.length; i++) {
      let N = A[i];
      let count = 0;
      for (let j = 1; j * j <= N; j++) {
        if (N % j == 0) {
          count++;
          if (j * j != N) {
            count++;
          }
        }
      }
      ans.push(count);
    }
    return ans;
  },
};*/
