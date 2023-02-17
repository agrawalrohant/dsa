// question -->https://www.scaler.com/academy/mentee-dashboard/class/52314/assignment/problems/138/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  permute: function (A) {
    // A = [1,2,3]
    let ans = [];
    getAllPermute(A, 0, new Map());
    return ans;
    function getAllPermute(A, currrntIndex, currMap) {
      // Base condition
      if (A.length == currrntIndex) {
        let ansArr = new Array(A.length);
        currMap.forEach((value, key) => {
          ansArr[value] = key;
        });
        ans.push(ansArr);
        return;
      }

      for (let i = 0; i < A.length; i++) {
        if (!currMap.has(A[i])) {
          currMap.set(A[i], currrntIndex);
          getAllPermute(A, currrntIndex + 1, currMap);
          currMap.delete(A[i]);
        }
      }

      /* if (!currMap.has(A[0])) {
        currMap.set(A[0], currrntIndex);
        getAllPermute(A, currrntIndex + 1, currMap);
        currMap.delete(A[0]);
      }

      if (!currMap.has(A[1])) {
        currMap.set(A[1], currrntIndex);
        getAllPermute(A, currrntIndex + 1, currMap);
        currMap.delete(A[1]);
      }

      if (!currMap.has(A[2])) {
        currMap.set(A[2], currrntIndex);
        getAllPermute(A, currrntIndex + 1, currMap);
        currMap.delete(A[2]);
      }*/
    }
  },
};
