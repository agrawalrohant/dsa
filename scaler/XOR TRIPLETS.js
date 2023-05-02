// question --> https://www.scaler.com/academy/mentee-dashboard/class/52306/homework/problems/6288/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let count = 0;
    let MOD = 1000000000 + 7;
    let tries = new Tries();
    let xor = 0;
    tries.insert(xor, 0);
    for (let i = 0; i < A.length; i++) {
      xor = xor ^ A[i];
      let currSearch = tries.search(xor);
      if (currSearch != null) {
        count =
          ((count % MOD) + ((i * currSearch.count - currSearch.sum) % MOD)) %
          MOD;
        currSearch.count = currSearch.count + 1;
        currSearch.sum += i + 1;
      } else {
        tries.insert(xor, i + 1);
      }
    }
    return count;
  },
};

class Tries {
  root = new TrieNode();
  constructor() {}
  insert(num, index) {
    let curr = this.root;
    for (let i = 17; i >= 0; i--) {
      let char = num | (1 << i);
      if (!curr.map.has(char)) {
        curr.map.set(char, new TrieNode());
      }
      curr = curr.map.get(char);
    }
    curr.count = 1;
    curr.sum += index;
  }
  search(num) {
    let curr = this.root;
    for (let i = 17; i >= 0; i--) {
      let char = num | (1 << i);
      if (!curr.map.has(char)) {
        return null;
      }
      curr = curr.map.get(char);
    }
    return curr;
  }
}

class TrieNode {
  constructor() {
    this.map = new Map();
    this.count = 0;
    this.sum = 0;
  }
}
