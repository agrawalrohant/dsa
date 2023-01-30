module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    A.sort((a, b) => a - b);
    let N = A.length;
    let max = 0;
    let min = 0;
    let mod = 1000000007;
    for (let i = 0; i < N / 2; i++) {
      max = (max + (Math.abs(A[N - i - 1] - A[i]) % mod)) % mod;
    }
    for (let i = 0; i < N; i = i + 2) {
      min = (min + (Math.abs(A[i + 1] - A[i]) % mod)) % mod;
    }
    return [max, min];
  },
};
