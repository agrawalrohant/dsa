// question -->https://www.scaler.com/academy/mentee-dashboard/class/52314/homework/problems/147/?navref=cl_pb_nv_tb

module.exports = {
  //param A : string
  //return a array of strings
  letterCombinations: function (A) {
    let combination = new Map();
    combination.set("0", "0");
    combination.set("1", "1");
    combination.set("2", "abc");
    combination.set("3", "def");
    combination.set("4", "ghi");
    combination.set("5", "jkl");
    combination.set("6", "mno");
    combination.set("7", "pqrs");
    combination.set("8", "tuv");
    combination.set("9", "wxyz");

    let results = [];

    recurssive(0, A);
    return results;

    function recurssive(currIndex, currentString) {
      if (currIndex == currentString.length) {
        results.push(currentString);
        return;
      }
      let currChar = currentString.charAt(currIndex);
      let allPossible = combination.get(currChar);
      for (let i = 0; i < allPossible.length; i++) {
        currentString =
          currentString.substring(-1, currIndex) +
          allPossible[i] +
          currentString.substring(currIndex + 1, currentString.length);
        recurssive(currIndex + 1, currentString);
        currentString =
          currentString.substring(-1, currIndex) +
          currChar +
          currentString.substring(currIndex + 1, currentString.length);
      }
    }
  },
};
