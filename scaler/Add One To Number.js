// question --> https://www.scaler.com/academy/mentee-dashboard/class/41046/homework/problems/66/submissions?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return a array of integers

  plusOne: function (A) {
    A = this.reverse(A);
    A = this.removeZero(A);
    let currentElement = 0;
    A[currentElement] = (A[currentElement]?A[currentElement]:0) + 1;
    while (A[currentElement] > 9) {
      A[currentElement] = 0;
      currentElement++;
      if (currentElement >= A.length) {
        A.push(1);
      } else {
        A[currentElement] = A[currentElement] + 1;
      }
    }
    A = this.reverse(A);
    return A;
  },
  reverse(A) {
    i = 0;
    j = A.length - 1;
    while (i < j) {
      //swap
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
      i++;
      j--;
    }
    return A;
  },
  removeZero(A) {
    for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] == 0) {
        A.pop();
      } else {
        break;
      }
    }
    return A;
  },
  // Approach 2
  plusOne2: function (A) {
    let lastElement = A.length - 1;
    A[lastElement] = A[lastElement] + 1;
    while (A[lastElement] > 9) {
      A[lastElement] = 0;
      lastElement--;
      if (lastElement < 0) {
        A.unshift(1);
      } else {
        A[lastElement] = A[lastElement] + 1;
      }
    }
    for (let i = 0; i < A.length; i++) {
      if (A[i] == 0) {
        A.shift();
        i--;
      } else {
        break;
      }
    }
    return A;
  },
};
