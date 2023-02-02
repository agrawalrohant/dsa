// question --> https://www.scaler.com/academy/mentee-dashboard/class/52304/assignment/problems/277?navref=cl_tt_nv

module.exports = {
  //param A : array of strings
  //return a array of strings
  prefix: function (A) {
    let root = new TrieNode();
    for (let i = 0; i < A.length; i++) {
      insert(A[i]);
    }
    let ans = [];
    for (let i = 0; i < A.length; i++) {
      ans.push(getPrefix(A[i]));
    }
    return ans;

    function getPrefix(value) {
      let characters = "";
      let curr = root;
      for (let i = 0; i < value.length; i++) {
        let char = value[i];
        if (!curr.map.has(char)) {
          return characters;
        }
        if (curr.map.size == 0 || curr.map.size == 1) {
          return characters;
        }
        characters += char;
        curr = curr.map.get(char);
      }
      return value;
    }

    function insert(value) {
      let curr = root;
      for (let i = 0; i < value.length; i++) {
        let char = value[i];
        if (!curr.map.has(char)) {
          curr.map.set(char, new TrieNode());
        }
        curr = curr.map.get(char);
      }
      curr.isEnd = true;
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
