// question -->  https://www.scaler.com/academy/mentee-dashboard/class/52312/assignment/problems/282?navref=cl_tt_nv

module.exports = {
  //param A : string
  //return an integer
  seats: function (A) {
    let xArr = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] == "x") {
        xArr.push(i);
      }
    }
    let midIndex = parseInt(xArr.length / 2);
    let leftIndex = midIndex - 1;
    let rightIndex = midIndex + 1;
    let ans = 0;
    let k = 1;
    let mod = 10000003;
    while (leftIndex >= 0) {
      ans = (ans + ((xArr[midIndex] - xArr[leftIndex] - k) % mod)) % mod;
      leftIndex--;
      k++;
    }
    k = 1;
    while (rightIndex < xArr.length) {
      ans = (ans + ((xArr[rightIndex] - xArr[midIndex] - k) % mod)) % mod;
      rightIndex++;
      k++;
    }
    return ans;
  },
};
