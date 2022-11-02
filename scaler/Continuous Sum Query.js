// question --> https://www.scaler.com/academy/mentee-dashboard/class/41046/assignment/problems/440?navref=cl_tt_lst_nm

module.exports = { 
    //param A : integer
    //param B : array of array of integers
    //return a array of integers
       solve : function(A, B){
           let arr = [];
           for(let i=0;i<A;i++){
               arr.push(0);
           }
           for(let i=0;i<B.length;i++){
               arr[B[i][0]-1] += B[i][2];
               if(B[i][1] < A){
                   arr[B[i][1]] -= B[i][2];
               }
           }
           // take PS and return
           for(let i=1;i<A;i++){
               arr[i] = arr[i-1] + arr[i];
           }
           return arr;
       }
   };
   