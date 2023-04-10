// question -->https://www.scaler.com/academy/mentee-dashboard/class/70590/homework/problems/6488/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //param C : array of array of integers
  //return an integer
  solve: function (A, B, C) {
    let parent = new Array(A + 1);
    let heigth = new Array(A + 1);
    for (let i = 0; i < A + 1; i++) {
      parent[i] = i;
      heigth[i] = 1;
    }
    let map = new Map();
    for (let i = 0; i < B.length; i++) {
      let u = B[i][0];
      let v = B[i][1];
      map.set(u, 1);
      map.set(v, 1);
      union(u, v, parent, heigth);
    }
    let flag = 0;
    for (let i = 0; i < C.length; i++) {
      let u = C[i][0];
      let v = C[i][1];
      if (map.has(u) || map.has(v)) flag = 1;
      union(u, v, parent, heigth);
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

function findRoot(a, parent, heigth) {
  while (parent[a] != a) {
    parent[a] = parent[parent[a]];
    a = parent[a];
  }
  return a;
}

function union(a, b, parent, heigth) {
  let ra = findRoot(a, parent, heigth);
  let rb = findRoot(b, parent, heigth);
  if (ra != rb) {
    if (heigth[ra] <= heigth[rb]) {
      parent[ra] = rb;
      heigth[rb] += heigth[ra];
    } else {
      parent[rb] = ra;
      heigth[ra] += heigth[rb];
    }
  }
}
