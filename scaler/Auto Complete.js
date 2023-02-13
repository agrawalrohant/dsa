// question --> https://www.scaler.com/academy/mentee-dashboard/class/52304/assignment/problems/9388?navref=cl_tt_nv

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function main() {
  // Write your code here
  // Use console.log to output the result
  //  console.log(inputString);
  let totalCases = parseInt(inputString[0]);
  for (let i = 0; i < totalCases; i++) {
    let NM = inputString[i * 4 + 1].split(" ");
    let N = parseInt(NM[0]);
    let M = parseInt(NM[1]);
    let A = inputString[i * 4 + 2].split(" ");
    let W = inputString[i * 4 + 3].split(" ");
    let root = new TrieNode();
    for (let i = 0; i < N; i++) {
      insert(A[i], root, i);
    }
    let B = inputString[i * 4 + 4].split(" ");
    let result = "";
    for (let i = 0; i < M; i++) {
      if (i == 0) {
        result = getWeightedSuggestions(B[i], root, A, W);
      } else {
        result = result + "\n" + getWeightedSuggestions(B[i], root, A, W);
      }
    }
    console.log(result);
  }
}

class TrieNode {
  map;
  isEnd;
  arr;
  constructor() {
    this.map = new Map();
    this.isEnd = false;
    this.arr = [];
  }
}

function insert(word, root, index) {
  let curr = root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!curr.map.has(char)) {
      curr.map.set(char, new TrieNode());
    }
    curr = curr.map.get(char);
    curr.arr.push(index);
  }
  curr.isEnd = true;
}

function getAnswersFromArr(arr, A, W) {
  let ans = "";
  arr.sort((a, b) => {
    return W[b] - W[a];
  });
  for (let i = 0; i < Math.min(arr.length, 5); i++) {
    ans += A[arr[i]] + " ";
  }
  return ans;
}

function getWeightedSuggestions(word, root, A, W) {
  let node = getSearchNode(word, root);
  if (node != -1) {
    return getAnswersFromArr(node.arr, A, W);
  } else {
    return node + " ";
  }
}

function getSearchNode(word, root) {
  let curr = root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!curr.map.has(char)) {
      return -1;
    }
    curr = curr.map.get(char);
  }
  return curr;
}
