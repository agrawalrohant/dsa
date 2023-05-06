// question -->https://www.scaler.com/academy/mentee-dashboard/class/52314/assignment/problems/148/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  subsets: function (A) {
    let results = [];
    getAllSubSets([], 0, A);
    results.sort((a, b) => {
      let max = a;
      if(b.length > a.length){
        max = b;
      }
      for (let i = 0; i < max.length; i++) {
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
    function getAllSubSets(currArr, index, A) {
      if (index == A.length) {
        let temp = [...currArr];
        temp.sort((a, b) => {
          return a - b;
        });
        results.push(temp);
        return;
      }
      currArr.push(A[index]);
      getAllSubSets(currArr, index + 1, A);
      currArr.pop();
      getAllSubSets(currArr, index + 1, A);
    }
  },
};

// Another way
/*module.exports = {
  //param A : array of integers
  //return a array of array of integers
  subsets: function (A) {
    let ans = [];
    A.sort((a, b) => {
      return a - b;
    });
    getAllSubSets([], A);
    return ans;
    function getAllSubSets(currList, A) {
      ans.push(
        currList.sort(function (a, b) {
          return a - b;
        })
      );
      if (A.length !== 0) {
        // for every element we can either take it or skip it
        for (var i = 0; i < A.length; i++)
          getAllSubSets(currList.concat(A[i]), A.slice(i + 1, A.length));
      }
    }
  },
};
*/
