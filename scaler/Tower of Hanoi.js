// question --> https://www.scaler.com/academy/mentee-dashboard/class/46495/assignment/problems/15010?navref=cl_tt_lst_nm

module.exports = {
  //param A : integer
  //return a array of array of integers
  towerOfHanoi: function (A) {
    this.x = [];
    this.toa(A, 1, 3, 2);
    return this.x;
  },
  x: [],
  toa: function (N, src, dest, temp) {
    // Base condition
    if (N == 0) {
      return;
    }

    // Main logic
    this.toa(N - 1, src, temp, dest);
    this.x.push([N, src, dest]);
    this.toa(N - 1, temp, dest, src);
  },
};
