// question -->https://www.scaler.com/academy/mentee-dashboard/class/41053/assignment/problems/297?navref=cl_tt_lst_nm

module.exports = {
  //param A : integer
  //return a array of integers
  primesum: function (A) {
    //let spf = this.sieve(A);
    for (let i = 2; i < A; i++) {
      if (this.isPrime(i) && this.isPrime(A - i)) {
        return [i, A - i];
      }
    }
  },
  isPrime(N) {
    for (let i = 2; i * i <= N; i++) {
      if (N % i == 0) {
        return false;
      }
    }
    return true;
  },
  sieve: function (A) {
    let N = A;
    let spf = new Array(N);
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
