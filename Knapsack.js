function knapsack(p, w, capacity) {
const pPerW = p.map((e, index) =>e/w[index]);
let profit = 0;
while(capacity!=0) {
    const max = Math.max(...pPerW);
    const indexOfMax = pPerW.indexOf(max);
    if(capacity-w[indexOfMax]>=0) {
        profit+=p[indexOfMax];
        capacity-=w[indexOfMax];
        pPerW[indexOfMax] = 0;
    } else {
        break;
    }
}
if(capacity==0) {
    return profit;
}
const max = Math.max(...pPerW);
return (capacity*max)+profit;
}

const p = [10,5,15,7,6,18,3];
const w = [2,3,5,7,1,4,1];

console.log(knapsack(p,w,15)); // returns maximum profit

