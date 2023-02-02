// question --> https://www.scaler.com/academy/mentee-dashboard/class/52304/homework/problems/9384?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : array of strings
  //return a array of integers
  solve: function (A, B) {
    let root = new TrieNode();
    let ans = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] == 0) {
        insert(B[i]);
      } else {
        ans.push(find(B[i]));
      }
    }
    return ans;
    function insert(word) {
      curr = root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!curr.map.has(char)) {
          curr.map.set(char, new TrieNode());
        }
        curr.map.get(char).count++;
        curr = curr.map.get(char);
      }
      curr.isEnd = true;
    }

    function find(word) {
      curr = root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!curr.map.has(char)) {
          return 0;
        }
        curr = curr.map.get(char);
      }
      return curr.count;
    }
  },
};
class TrieNode {
  map;
  isEnd;
  count;
  constructor() {
    this.map = new Map();
    this.isEnd = false;
    this.count = 0;
  }
}
