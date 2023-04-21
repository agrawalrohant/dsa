// question --> https://www.scaler.com/academy/mentee-dashboard/class/52290/assignment/problems/4347?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let tempS = [];
    while (A.length > 0) {
      let toPlace = A[A.length - 1];
      A.pop();
      let popCount = 0;
      while (tempS.length != 0 && tempS[tempS.length - 1] > toPlace) {
        A.push(tempS[tempS.length - 1]);
        tempS.pop();
        popCount++;
      }
      tempS.push(toPlace);
      while (popCount != 0) {
        tempS.push(A[A.length - 1]);
        A.pop();
        popCount--;
      }
    }
    return tempS;
  },
};
