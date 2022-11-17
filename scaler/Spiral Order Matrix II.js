// question --> https://www.scaler.com/academy/mentee-dashboard/class/41047/homework/problems/63?navref=cl_tt_lst_nm

module.exports = {
  //param A : integer
  //return a array of array of integers
  generateMatrix: function (A) {
    let arr = [];
    for (let i = 0; i < A; i++) {
      arr.push(new Array(A));
    }
    let count = 1;
    let row = 0;
    let col = 0;
    let size = A;
    while (size > 1) {
      for (let i = 0; i < size; i++) {
        arr[row][col++] = count++;
      }
      col--;
      row++;
      for (let i = 0; i < size - 1; i++) {
        arr[row++][col] = count++;
      }
      row--;
      col--;
      for (let i = 0; i < size - 1; i++) {
        arr[row][col--] = count++;
      }
      row--;
      col++;
      for (let i = 0; i < size - 2; i++) {
        arr[row--][col] = count++;
      }
      row++;
      size -= 2;
      col++;
    }
    if (A % 2 == 1) {
      arr[row][col] = count++;
    }
    return arr;
  },
};
