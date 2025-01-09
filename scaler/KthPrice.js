// question -->https://www.scaler.com/academy/mentee-dashboard/class/41060/homework/problems/872

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let ans = -1;
    let e = A[0];
    let s = A[0];
    for (let i = 0; i < A.length; i++) {
      e = A[i] > e ? A[i] : e;
      s = s > A[i] ? A[i] : s;
    }
    while (s <= e) {
      let mid = BigInt(parseInt((s + e) / BigInt(2)));
      let lessThanMid = 0;
      for (let i = BigInt(0); i < A.length; i++) {
        if (A[i] <= mid) {
          lessThanMid++;
        }
      }
      if (BigInt(B) <= lessThanMid) {
        e = mid - BigInt(1);
        ans = mid;
      } else {
        s = mid + BigInt(1);
      }
    }
    return Number(ans);
  },
};
