// question -->https://www.scaler.com/academy/mentee-dashboard/class/52304/assignment/problems/9366/?navref=cl_pb_nv_tb
module.exports = {
  //param A : array of strings
  //param B : array of strings
  //return a array of integers
  solve: function (A, B) {
    let root = new TrieNode();
    for (let i = 0; i < A.length; i++) {
      insert(A[i]);
    }
    let ans = [];
    for (let i = 0; i < B.length; i++) {
      ans.push(search(B[i]));
    }
    return ans;

    function insert(word) {
      let curr = root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!curr.map.has(char)) {
          curr.map.set(char, new TrieNode());
        }
        curr = curr.map.get(char);
      }
      curr.isEnd = true;
    }
    function search(word) {
      let curr = root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!curr.map.has(char)) {
          return 0;
        }
        curr = curr.map.get(char);
      }
      if (curr.isEnd) {
        return 1;
      } else {
        return 0;
      }
    }
  },
};

class TrieNode {
  map;
  isEnd;
  constructor() {
    this.map = new Map();
    this.isEnd = false;
  }
}
