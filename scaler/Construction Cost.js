// question -->https://www.scaler.com/academy/mentee-dashboard/class/70595/assignment/problems/9240/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return an integer
  solve: function (A, B) {
    let MOD = 1000000007;
    let ans = 0;
    let parent = [];
    let height = [];
    for (let i = 0; i <= A; i++) {
      parent[i] = i;
      height[i] = 1;
    }

    let wtEdges = [];
    for (let i = 0; i < B.length; i++) {
      wtEdges.push(new EdgeNode(B[i][0], B[i][1], B[i][2]));
    }
    wtEdges.sort((a, b) => {
      return a.weight - b.weight;
    });

    for (let i = 0; i < wtEdges.length; i++) {
      union(wtEdges[i].node1, wtEdges[i].node2, wtEdges[i].weight);
    }

    return ans;

    function union(a, b, wt) {
      let rootA = findRoot(a);
      let rootB = findRoot(b);
      if (rootA != rootB) {
        if (height[rootA] > height[rootB]) {
          parent[rootB] = rootA;
        } else if (height[rootA] < height[rootB]) {
          parent[rootA] = rootB;
        } else {
          parent[rootA] = rootB;
          height[rootB]++;
        }
        ans = ((ans % MOD) + (wt % MOD)) % MOD;
      }
    }

    function findRoot(a) {
      while (a != parent[a]) {
        parent[a] = parent[parent[a]];
        a = parent[a];
      }
      return a;
    }
  },
};
class EdgeNode {
  node1;
  node2;
  weight;
  constructor(n1, n2, wt) {
    this.node1 = n1;
    this.node2 = n2;
    this.weight = wt;
  }
}
