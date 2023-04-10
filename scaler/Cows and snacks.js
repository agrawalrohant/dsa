// question -->https://www.scaler.com/academy/mentee-dashboard/class/70590/homework/problems/6580?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return an integer
  solve: function (A, B) {
    let ans = 0;
    let parent = new Array(A + 1);
    let heigth = new Array(A + 1);
    for (let i = 0; i <= A; i++) {
      // every one is their own parent
      parent[i] = i;
      // every ones height is 1
      heigth[i] = 1;
    }

    // iterate though all edges
    for (let i = 0; i < B.length; i++) {
      let u = B[i][0];
      let v = B[i][1];
      union(u, v);
    }

    return ans;

    function union(a, b) {
      let ra = findRoot(a);
      let rb = findRoot(b);
      if (ra != rb) {
        if (heigth[ra] <= heigth[rb]) {
          parent[ra] = rb;
          heigth[rb] += heigth[ra];
        } else {
          parent[rb] = ra;
          heigth[ra] += heigth[rb];
        }
      } else {
        ans++;
      }
    }

    function findRoot(a) {
      while (parent[a] != a) {
        parent[a] = parent[parent[a]];
        a = parent[a];
      }
      return a;
    }
  },
};
