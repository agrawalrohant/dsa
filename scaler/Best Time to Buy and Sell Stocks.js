module.exports = {
  //param A : array of integers
  //return an integer
  maxProfit: function (A) {
    let profit = 0;
    if (A.length > 0) {
      let minArr = [A[0]];
      for (let i = 1; i < A.length - 1; i++) {
        if (minArr[i - 1] > A[i]) {
          minArr.push(A[i]);
        } else {
          minArr.push(minArr[i - 1]);
        }
      }

      let maxArr = new Array(A.length - 1);
      maxArr[A.length - 2] = A[A.length - 1];
      for (let i = A.length - 2; i >= 0; i--) {
        if (A[i] > maxArr[i]) {
          maxArr[i - 1] = A[i];
        } else {
          maxArr[i - 1] = maxArr[i];
        }
      }
      for (let i = 0; i < maxArr.length; i++) {
        profit = Math.max(maxArr[i] - minArr[i], profit);
      }
    }
    return profit;
  },
};
/*
module.exports = { 
 //param A : array of integers
 //return an integer
	maxProfit : function(A){
        let max = A[A.length - 1];
        let profit = 0;
        for(let i = A.length - 2; i >= 0; i--){
            if(A[i] > max){
                max = A[i];
            }
            // max stores the maximum value to the right of A[i]
            profit = Math.max(profit, max - A[i]);
        }
        return profit;
	}
};*/
