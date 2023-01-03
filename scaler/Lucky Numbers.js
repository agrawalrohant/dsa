// question -->https://www.scaler.com/academy/mentee-dashboard/class/41053/assignment/problems/1095?navref=cl_tt_lst_nm

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let spf = this.createSPF();
    let ans = 0;
    for (let x = 1; x <= A; x++) {
      let countOfPrimeFactors = 0;
      for (let i = 1; i * i <= x; i++) {
        if (x % i == 0) {
          // i is is factor
          if (this.isPrime(spf, i)) {
            countOfPrimeFactors++;
          }
          if (i * i != x) {
            //  x/i is also a factor
            if (this.isPrime(spf, x / i)) {
              countOfPrimeFactors++;
            }
          }
        }
      }
      if (countOfPrimeFactors == 2) {
        ans += 1;
      }
    }
    return ans;
  },
  isPrime: function (spf, N) {
    if (spf[N] > 2 || N == 1) {
      return false;
    } else {
      return true;
    }
  },
  createSPF: function () {
    let spf = new Array(50001);
    for (let i = 0; i < spf.length; i++) {
      spf[i] = 1;
    }
    for (let i = 2; i < spf.length; i++) {
      for (j = i; j < spf.length; j = j + i) {
        spf[j]++;
      }
    }
    return spf;
  },
};
