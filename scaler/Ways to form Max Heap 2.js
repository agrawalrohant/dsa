// question --> https://www.scaler.com/academy/mentee-dashboard/class/52310/homework/problems/437?navref=cl_tt_lst_nm

const maxn = 1005;
let dp = new Array(maxn).fill(0);
let dp1 = new Array(maxn).fill(0);
let nck = new Array(maxn).fill(0).map(() => new Array(maxn).fill(0));
let log_2 = new Array(maxn);
let MOD = 1000000007;

function mult(a, b) {
  let val = a * b;
  if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
    return val % MOD;
  return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

function choose(n, k) {
  if (k > n) return 0;
  if (n <= 1) return 1;
  if (k == 0) return 1;

  if (nck[n][k] != -1) return nck[n][k];
  let answer = choose(n - 1, k - 1) + choose(n - 1, k);
  answer %= MOD;
  nck[n][k] = answer;
  return answer;
}

function getL(n) {
  if (n == 1) return 0;

  let h = log_2[n];
  let p = n - ((1 << h) - 1);
  let m = 1 << h;
  if (p >= Math.floor(m / 2)) return (1 << h) - 1;
  else return (1 << h) - 1 - (Math.floor(m / 2) - p);
}

function getNumberOfMaxHeaps(n) {
  if (n <= 1) return 1;

  if (dp[n] != -1) return dp[n];

  let L = getL(n);
  let ans = mult(
    mult(choose(n - 1, L), getNumberOfMaxHeaps(L)),
    getNumberOfMaxHeaps(n - 1 - L)
  );
  ans %= MOD;
  dp[n] = ans;
  return ans;
}
function getNumberOfMaxHeaps2(n) {
  if (n < 2) return 0;
  if (n < 4) return 1;
  if (n == 4) return 2;
  if (n == 5) return 4;
  if (dp1[n] != 0) return dp1[n];
  let l = getL(n);
  let r = n - l - 1;
  let ans = mult(
    mult(choose(n - 3, l - 2), getNumberOfMaxHeaps2(l)),
    getNumberOfMaxHeaps(r)
  );
  ans =
    (ans +
      mult(
        mult(choose(n - 3, r - 2), getNumberOfMaxHeaps(l)),
        getNumberOfMaxHeaps2(r)
      )) %
    MOD;
  ans =
    (ans +
      mult(
        mult(choose(n - 3, l - 1), getNumberOfMaxHeaps(l)),
        getNumberOfMaxHeaps(r)
      )) %
    MOD;
  dp1[n] = ans;
  return ans;
}

module.exports = {
  solve: function (arr) {
    let n = arr.length;
    for (let i = 0; i <= n; i++) dp[i] = -1;

    for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) nck[i][j] = -1;

    let currlog_2Answer = -1;
    let currPower2 = 1;
    for (let i = 1; i <= n; i++) {
      if (currPower2 == i) {
        currlog_2Answer++;
        currPower2 *= 2;
      }
      log_2[i] = currlog_2Answer;
    }
    let max = -1;
    let min = 10000000;
    let maxcount = 0;
    let mincount = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] < min) {
        min = arr[i];
        mincount = 1;
      } else if (arr[i] == min) {
        mincount++;
      }
      if (arr[i] > max) {
        max = arr[i];
        maxcount = 1;
      } else if (arr[i] == max) {
        maxcount++;
      }
    }
    if (maxcount == 2) return getNumberOfMaxHeaps(n);
    else return getNumberOfMaxHeaps2(n);
  },
};
