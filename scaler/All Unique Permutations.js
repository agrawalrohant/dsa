// question -->https://www.scaler.com/academy/mentee-dashboard/class/52314/assignment/problems/134/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  permute: function (A) {
    let freqMap = new Map();
    for (let i = 0; i <= 10; i++) {
      freqMap.set(i, 0);
    }
    for (let i = 0; i < A.length; i++) {
      if (freqMap.has(A[i])) {
        freqMap.set(A[i], freqMap.get(A[i]) + 1);
      }
    }
    let result = [];
    getAllPermute(A, [], freqMap);
    return result;

    function getAllPermute(A, current, freqMap) {
      // Base condition
      if (current.length == A.length) {
        // clone
        let temp = [];
        for (let i = 0; i < current.length; i++) {
          temp.push(current[i]);
        }
        result.push(temp);
        return;
      }
      // recurssive call
      //for (let i = 0; i < A.length; i++) {
      for (let i = 0; i <= 10; i++) {
        if (freqMap.get(i) > 0) {
          // push to arr
          freqMap.set(i, freqMap.get(i) - 1);
          current.push(i);
          // reduce the count in hashmap
          getAllPermute(A, current, freqMap);
          freqMap.set(i, freqMap.get(i) + 1);
          current.pop();
        }
      }
    }
  },
};
