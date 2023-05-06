// question -->https://www.scaler.com/academy/mentee-dashboard/class/52314/homework/problems/146/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  subsetsWithDup: function (A) {
    let uniqueArr = [];
    let freq = new Map();
    for (let i = 0; i < A.length; i++) {
      if (freq.has(A[i])) {
        freq.set(A[i], freq.get(A[i]) + 1);
      } else {
        freq.set(A[i], 1);
        uniqueArr.push(A[i]);
      }
    }
    /*uniqueArr.sort((a, b) => {
      a - b;
    });*/
    let results = [];
    getAllSubSet([], 0, uniqueArr, A);

    results.sort((a, b) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i] && b[i]) {
          if (a[i] < b[i]) {
            return -1;
          } else if (a[i] > b[i]) {
            return 1;
          }
        } else if (b[i]) {
          return -1;
        } else {
          return 1;
        }
      }
    });
    return results;
    function getAllSubSet(currentList, index, uniqueArr, A) {
      if (index == uniqueArr.length) {
        let temp = [...currentList];
        temp.sort((a, b) => {
          return a - b;
        });
        results.push(temp);
        return;
      }
      let currNum = uniqueArr[index];
      let currFreq = freq.get(currNum);
      // leave
      getAllSubSet(currentList, index + 1, uniqueArr, A);
      for (let i = 1; i <= currFreq; i++) {
        currentList.push(currNum);
        getAllSubSet(currentList, index + 1, uniqueArr, A);
      }
      for (let i = 1; i <= currFreq; i++) {
        currentList.pop();
      }
    }
  },
};
