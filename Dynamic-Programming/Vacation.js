// problem - https://atcoder.jp/contests/dp/tasks/dp_
// this problem can we solved in recursive as well as iterative
// for notes refer Question 3 in https://github.com/singhsanket143/Unacademy-Notes/blob/main/Atcoder%20Dp%201.pdf
// below is recursive solution
function getMaxPoints(a, n) {
    return Math.max(callMaxPoint(0, 0, n, a), callMaxPoint(1, 0, n, a), callMaxPoint(2, 0, n, a));
}

function callMaxPoint(task, day, n, a) {
    if(day>=n) {
        return 0;
    }

    switch(task) {
        case 0: return a[day][task] + Math.max(callMaxPoint(1, day+1, n, a), callMaxPoint(2, day+1, n, a));
        case 1: return a[day][task] + Math.max(callMaxPoint(0, day+1, n, a), callMaxPoint(2, day+1, n, a));
        case 2: return a[day][task] + Math.max(callMaxPoint(1, day+1, n, a), callMaxPoint(0, day+1, n, a));
    }

}
// recursive solution ends here

/**
 * below interative code starts
 * we will create a two d array where row denotes the task and column detonates the day
 * 
 */

function getMaxPointsIterative(a, n) {
    let dp = new Array(3).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = a[0][0];
    dp[1][0] = a[0][1];
    dp[2][0] = a[0][2];
    for(let i=1;i<n;i++) {
        const [task1, task2, task3] = a[i];
        dp[0][i] = task1+ Math.max(dp[1][i-1], dp[2][i-1]);
        dp[1][i] = task2+ Math.max(dp[0][i-1], dp[2][i-1]);
        dp[2][i] = task3+ Math.max(dp[0][i-1], dp[1][i-1]);
    }
    return Math.max(dp[0][n-1], dp[1][n-1], dp[2][n-1]);
}
// interative code ends
const activities = [
    [10, 40, 70],
    [20, 50, 80],
    [30, 60, 90],
]
const days1 = 3;
const activities2 = [
    [100, 10, 1]
]
const days2 = 1;
console.log(getMaxPointsIterative(activities, days1));
// console.log(getMaxPoints(activities, days1));

// console.log(getMaxPoints(activities2, 1));"x...o.x...o"