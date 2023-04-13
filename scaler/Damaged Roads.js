module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let ans = 0;
    let MOD = 1000000007;
    // combine all edges 
    let allEdgesType = [];
    for (let i = 0; i < A.length; i++) {
      allEdgesType.push(new EdgeType(A[i], "A"));
    }
    for (let i = 0; i < B.length; i++) {
      allEdgesType.push(new EdgeType(B[i], "B"));
    }
    // sort as per cost
    allEdgesType.sort((a, b) => {
      return b.cost - a.cost;
    });
    // CityNodes = 0,0 to N,M
    let col = B.length + 1;
    let row = A.length + 1;
    while (allEdgesType.length != 0) {
      // pick min cost every time
      let curr = allEdgesType[allEdgesType.length - 1];
      if (curr.arrType == "A") {
        ans = (ans % MOD + (curr.cost * col) % MOD) % MOD;
        row--;
      } else {
        ans = (ans % MOD + (curr.cost * row) % MOD) % MOD;
        col--;
      }
      allEdgesType.pop();
    }
    return ans;
  },
};

class EdgeType {
  constructor(cost, arrType) {
    this.cost = cost;
    this.arrType = arrType;
  }
}
