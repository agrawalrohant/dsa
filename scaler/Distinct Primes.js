// question --> https://www.scaler.com/academy/mentee-dashboard/class/41053/homework/problems/1857?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let spf = this.sieve(100000);
    let set = new Set();
    for (let i = 0; i < A.length; i++) {
      let N = A[i];
      if (spf[N]) {
        set.add(N);
      }
      for (let j = 1; j * j <= N; j++) {
        if (N % j == 0) {
          if (spf[j] && !set.has(j)) {
            set.add(j);
          }
          if (spf[N / j] && !set.has(N / j)) {
            set.add(N / j);
          }
        }
      }
    }
    return set.size;
  },
  sieve: function (A) {
    let N = A;
    let spf = new Array(N + 1);
    for (let i = 0; i < N; i++) {
      if (i == 0 || i == 1) {
        spf[i] = false;
      } else {
        spf[i] = true;
      }
    }
    for (i = 2; i * i <= N; i++) {
      if (spf[i]) {
        for (let j = i * i; j <= N; j = j + i) {
          spf[j] = false;
        }
      }
    }
    return spf;
  },
};
