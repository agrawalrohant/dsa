// question --> https://www.scaler.com/academy/mentee-dashboard/class/41052/homework/problems/5880/submissions

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    A.sort((a, b) => b - a);
    let ans = [A[0], A[1]];
    let map = new Map();
    let currGCD = this.findGCD(A[0], A[1]);
    map.set(currGCD, 2);
    for (let i = 2; i < A.length; i++) {
      if (map.has(A[i])) {
        if (map.get(A[i]) == 1) {
          // remove
          map.delete(A[i]);
        } else {
          map.set(A[i], map.get(A[i]) - 1);
        }
      } else {
        // add all gcd to Map
        for (let j = 0; j < ans.length; j++) {
          currGCD = this.findGCD(ans[j], A[i]);
          if (map.has(currGCD)) {
            map.set(currGCD, map.get(currGCD) + 2);
          } else {
            map.set(currGCD, 2);
          }
        }
        ans.push(A[i]);
      }
    }
    return ans;
  },
  findGCD: function (a, b) {
    if (b == 0) {
      return a;
    }
    return this.findGCD(b, a % b);
  },
};
