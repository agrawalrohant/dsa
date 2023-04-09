// question --> https://www.scaler.com/academy/mentee-dashboard/class/52296/assignment/problems/5715?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //param C : array of array of integers
  //return an integer
  solve: function (A, B, C) {
    let parent = new Array(A + 1);
    let allNodes = new Array(A + 1);
    for (let i = 0; i < A + 1; i++) {
      parent[i] = i;
      allNodes[i] = 1;
    }
    let map = new Map();
    for (let i = 0; i < B.length; i++) {
      let u = B[i][0];
      let v = B[i][1];
      map.set(u, 1);
      map.set(v, 1);
      union(u, v, parent, allNodes);
    }
    let flag = 0;
    for (let i = 0; i < C.length; i++) {
      let u = C[i][0];
      let v = C[i][1];
      if (map.has(u) || map.has(v)) flag = 1;
      union(u, v, parent, allNodes);
    }
    // If any overlapping Node between B abd C
    if (flag == 1) return 0;
    let count = 0;
    for (let i = 1; i <= A; i++) {
      if (parent[i] == i) count++;
    }
    return Number(BigInt(BigInt(1) << BigInt(count)) % BigInt(1000000007));
  },
};

function findRoot(a, parent, allNodes) {
  while (parent[a] != a) {
    parent[a] = parent[parent[a]];
    a = parent[a];
  }
  return a;
}

function union(a, b, parent, allNodes) {
  let ra = findRoot(a, parent, allNodes);
  let rb = findRoot(b, parent, allNodes);
  if (ra != rb) {
    if (allNodes[ra] <= allNodes[rb]) {
      parent[ra] = rb;
      allNodes[rb] += allNodes[ra];
    } else {
      parent[rb] = ra;
      allNodes[ra] += allNodes[rb];
    }
  }
}
