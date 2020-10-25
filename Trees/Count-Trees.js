/*
For the key values 1... n, how many structurally unique BSTs are possible that
store those keys.

*/


function countTrees(n) {
    if(n<=1) {
        return 1;
    }
    let sum = 0;
    let left, right, root;
    for(root = 1;root<=n;root++) {
        left = countTrees(root-1);
        right = countTrees(n-root);
        sum+=left*right;
    }
    return sum;
}


// dyanic programming aproach

function calculateTrees(n) {
    if(n<=1) {
        return 1;
    }
    let count = new Array(n+1);
    count[0] = 1;
    count[1] = 1;
    for(let i=2;i<=n;i++) {
        count[i] = 0;
        for(let j=0;j<i;j++) {
            count[i]+= count[j]*count[i-j-1];
        }
    }
    return count[n];
}
console.log(countTrees(4));
console.log(calculateTrees(4));