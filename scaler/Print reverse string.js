process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function main() {
  // Write your code here
  // Use console.log to output the result
  let result = reverse(inputString[0], 0, inputString[0].length - 1);
  console.log(result);
}

function reverse(str, s, e) {
  if (s >= e) {
    return str;
  }
  // swap s,e
  let charAtS = str[s];
  charAtE = str[e];
  let temp = "";
  // char before s
  for (let i = 0; i < s; i++) {
    temp = temp + str[i];
  }
  temp = temp + charAtE;
  for (let i = s + 1; i < e; i++) {
    temp = temp + str[i];
  }
  temp = temp + charAtS;
  for (let i = e + 1; i < str.length; i++) {
    temp = temp + str[i];
  }
  str = temp;
  return reverse(str, s + 1, e - 1);
}

/* Java */
/* 
import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner s = new Scanner(System.in);
        String inputStr = s.nextLine();
        System.out.println(reverseString(inputStr));
    }
    public static String reverseString(String inputStr){
        if(inputStr.length() <= 1 ){
            return inputStr;
        }
        char leftChar = inputStr.charAt(0);
        char rightChar = inputStr.charAt(inputStr.length() - 1);
        return rightChar +  reverseString(inputStr.substring(1, inputStr.length() - 1)) + leftChar;
    }
}
*/
