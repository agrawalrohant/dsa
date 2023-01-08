// question --> https://www.scaler.com/academy/mentee-dashboard/class/41058/assignment/problems/10863?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    this.arr = A;
    this.quickSort(0, this.arr.length - 1);
    return this.arr;
  },
  quickSort: function (s, e) {
    if (s >= e) {
      return;
    }
    let randInd = this.getRandomInt(s, e);
    this.swap(s, randInd);
    let p = this.partition(s, e);
    this.quickSort(s, p - 1);
    this.quickSort(p + 1, e);
  },
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  partition: function (s, e) {
    let l = s + 1;
    let r = e;
    while (l <= r) {
      if (this.arr[l] <= this.arr[s]) {
        l++;
      } else if (this.arr[r] > this.arr[s]) {
        r--;
      } else {
        this.swap(r, l);
        l++;
        r--;
      }
    }
    this.swap(s, r);
    return r;
  },
  swap: function (a, b) {
    let temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  },
};
