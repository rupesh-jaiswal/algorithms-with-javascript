/**
 * in this problem we need to find all the possible steps to reach Nth step
 * but we can only take 1 or 2 jump at a time there is also variation
 * to this problem where weare given a set of the steps that we can take
 * {[1,3,5]} so we can either take 1 or 3 or 5 steps depending on number of steps
 */

function steps(ways) {
    const jumps = [];
    ways.forEach(way => {
        let temp = [];
        for(let i=0;i<way.length-1;i++) {
            temp.push(way[i+1]-way[i]);
        }
        jumps.push(temp);
    });
    return jumps;
}
 function Jump(n, X) {
    if(n<0) {
         return [];
    }
    if(n==0) {
        return [[0]];
    }
    if(n==1) {
        return [[0,1]];
    }
    const numOfWays = [];
    X.forEach(step => {
        if(n-step>=0) {
            numOfWays.push(...Jump(n-step, X));
        }
    })
    const ways = numOfWays.map(path => [...path, n]);
    console.log(ways);
    return ways;
 }
const X= [1,2];
const X1 = [1,3,5];
console.log(steps(Jump(6, X1)));