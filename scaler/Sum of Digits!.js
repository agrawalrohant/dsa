// question -->https://www.scaler.com/academy/mentee-dashboard/class/41055/assignment/problems/10754/submissions

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    if (A == 0) {
      return 0;
    }
    return this.solve(parseInt(A / 10)) + (A % 10);
  },
};

/* Java solution
public class Solution {
    int sum = 0;
    public int solve(int A) {
        if(A == 0){
            return this.sum;
        }
        sum = sum + A%10;
        return solve (A/10);
    }
}
*/
