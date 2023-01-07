// question -->https://www.scaler.com/academy/mentee-dashboard/class/41057/homework/problems/4192?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  inputArr: [],
  solve: function (A) {
    this.inputArr = A;
    return this.findInversionCOunt(0, this.inputArr.length - 1);
  },
  findInversionCOunt: function (s, e) {
    if (s >= e) {
      return 0;
    }
    let mid = parseInt((s + e) / 2);
    let firstHalf = this.findInversionCOunt(s, mid);
    let secondHalf = this.findInversionCOunt(mid + 1, e);
    return firstHalf + secondHalf + this.inversion(s, mid, mid + 1, e);
  },
  inversion: function (s1, e1, s2, e2) {
    let count = 0;
    let aLength = e1 - s1 + 1;
    let bLength = e2 - s2 + 1;
    this.quickSort(s1, e1);
    this.quickSort(s2, e2);
    let i = s1;
    let j = s2;
    while (i <= e1 && j <= e2) {
      if (this.inputArr[i] > 2 * this.inputArr[j]) {
        count += e1 - i + 1;
        j++;
      } else {
        i++;
      }
    }
    if (j == bLength) {
      count += aLength - i;
    }
    return count;
  },
  quickSort: function (s, e) {
    if (s >= e) {
      return;
    }
    let p = this.partition(s, e);
    this.quickSort(s, p - 1);
    this.quickSort(p + 1, e);
  },
  partition: function (s, e) {
    let l = s + 1;
    let r = e;
    while (l <= r) {
      if (this.inputArr[l] <= this.inputArr[s]) {
        l++;
      } else if (this.inputArr[r] > this.inputArr[s]) {
        r--;
      } else {
        let temp = this.inputArr[r];
        this.inputArr[r] = this.inputArr[l];
        this.inputArr[l] = temp;
        l++;
        r--;
      }
    }
    let temp = this.inputArr[r];
    this.inputArr[r] = this.inputArr[s];
    this.inputArr[s] = temp;
    return r;
  },
};
