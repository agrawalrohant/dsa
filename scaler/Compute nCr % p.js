// question -->https://www.scaler.com/academy/mentee-dashboard/class/41054/assignment/problems/4112

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let ans = 1;
    let fact = [1];
    for (let i = 1; i <= A; i++) {
      fact[i] = (fact[i - 1] * i) % C;
    }
    ans = BigInt(fact[A]);
    ans = (ans * power(BigInt(fact[B]), BigInt(C - 2), BigInt(C))) % BigInt(C);
    ans =
      (ans * power(BigInt(fact[A - B]), BigInt(C - 2), BigInt(C))) % BigInt(C);
    return Number(ans);
    function power(A, B, M) {
      A = A % M;
      let result = BigInt(1);
      while (B > BigInt(0)) {
        if (B & BigInt(1)) {
          result = (result * A) % M;
        }
        A = (A * A) % M;
        B = B >> BigInt(1);
      }
      return result;
    }
  },
};
