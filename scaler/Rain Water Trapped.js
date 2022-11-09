// question --> https://www.scaler.com/academy/mentee-dashboard/class/41048/assignment/problems/47?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  trap: function (A) {
    let ans = 0;
    let leftMax = [0];
    let currentMax = 0;
    for (let i = 1; i < A.length; i++) {
      if (A[i-1] > currentMax) {
        currentMax = A[i-1];
      }
      leftMax.push(currentMax);
    }

    let rightMax = new Array(A.length);
    rightMax[A.length - 1] = 0;
    currentMax = 0;
    for (let i = A.length - 2; i >= 0; i--) {
      if (A[i+1] > currentMax) {
        currentMax = A[i+1];
      }
      rightMax[i] = currentMax;
    }

    for(let i=0;i<A.length;i++){
        let currentMin = leftMax[i];
        if(leftMax[i] > rightMax[i]){
            currentMin = rightMax[i];
        }
        if((currentMin - A[i]) > 0){
            ans += (currentMin - A[i]);
        }
    }
    return ans;
  },
};
