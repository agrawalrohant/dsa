// question --> https://www.scaler.com/academy/mentee-dashboard/class/52324/homework/problems/185/?navref=cl_pb_nv_tb

module.exports = {
  //param A : string
  //return a strings
  longestPalindrome: function (A) {
    let length = 0;
    let lps = "";
    for (let i = 0; i < A.length; i++) {
      let ans1 = pali(A, i, i);
      let ans2 = pali(A, i, i + 1);
      if (ans1.length > ans2.length && ans1.length > length) {
        length = ans1.length;
        lps = ans1.stringVal;
      } else if (ans2.length > ans1.length && ans2.length > length) {
        length = ans2.length;
        lps = ans2.stringVal;
      }
    }

    function pali(str, i, j) {
      while (i >= 0 && j < str.length && str[i] == str[j]) {
        i--;
        j++;
      }
      return {
        length: j - i - 1,
        stringVal: str.slice(i + 1, j),
      };
    }

    // TC = O( N^3)
    /*for (let i = 0; i < A.length; i++) {
      for (j = i; j < A.length; j++) {
        let start = i;
        let end = j;
        while (start < end) {
          if (A[start] == A[end]) {
            start++;
            end--;
          } else {
            break;
          }
        }
        if (start >= end) {
          let currentLength = j - i + 1;
          if (currentLength > length) {
            length = currentLength;
            lps = A.slice(i, j + 1);
          }
        }
      }
    }*/
    return lps;
  },
};
