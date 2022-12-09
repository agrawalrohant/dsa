// question --> https://www.scaler.com/academy/mentee-dashboard/class/41050/homework/problems/936?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //return an integer
  isSetBit: function (A, i) {
    if (((1 << i) & A) == 0) {
      return false;
    }
    return true;
  },
  reverseBits: function (A) {
    let found = 0;
    for (let i = 31; i >= 0; i--) {
      if (found) {
        A = A ^ (1 << i);
      }
      if (!found && this.isSetBit(A, i)) {
        found = 1;
        A = A ^ (1 << i);
      }
    }
    return A;
  },
  findFirstSetIndex: function (A) {
    for (let i = 31; i >= 0; i--) {
      if (this.isSetBit(A, i)) {
        return i;
      }
    }
  },
  solve: function (A) {
    let X = this.reverseBits(A);
    let pos = this.findFirstSetIndex(A);
    let Y = 1 << (pos + 1);

    // Brute Force
    /*let X = 0;
    let Y = 0;
    for (let i = A - 1; i > 0; i--) {
      if ((A ^ i) == A + i) {
        X = i;
        break;
      }
    }
    let i = A + 1;
    while ((A ^ i) != A + i) {
      i++;
    }
    Y = i;*/

    // Ideal
    /*let bit = Math.floor(Math.log2(A)) + 1;
    let X = 0;
    // x is equal to the summation of unset bits in A
    for (let i = 0; i < bit; i++) {
      if (A & (1 << i)) continue;
      X += 1 << i;
    }
    // y equals the power of 2 just greater than A
    let Y = 1 << bit;*/
    return X ^ Y;
  },
};
