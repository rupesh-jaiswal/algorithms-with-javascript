/**
 * https://atcoder.jp/contests/dp/tasks/dp_q
 */

// can be optimized using queues
const ReadInput = require('./Input');
let iteration =0;
function flowers(h, b, index, previousHeightIndex,max, currentValue) {
    iteration++;

    if(index>=h.length) {
        if(currentValue>max.value) {
            return max.value = currentValue;
        }
        return;
    }
    if(h[index]>h[previousHeightIndex]) {
        flowers(h, b, index+1, index, max, currentValue+b[index]);
    }
        
    return flowers(h, b, index+1, previousHeightIndex, max, currentValue);
}

async function getInput() {
    const input = new ReadInput();
    await input.readStream;
    const n = +input.readNextLine();
    const h = input.readNextLine().split(' ').map((e) =>+e);
    const b = input.readNextLine().split(' ').map(e => +e);
    return [n, h, b];
}
async function findWays1() {
    const [n, h,  b] = await getInput();
    let maxbeauty = 0;
    for(let i=0;i<h.length;i++) {
        let max = { value : 0};
        flowers(h, b, i, 0, max, 0);
        if(max.value>maxbeauty) {
            maxbeauty = max.value;
        }
    }
    console.log(maxbeauty);
    console.log(iteration);

}
async function findWays2() {
    const [n, h,  b] = await getInput();

}
//findWays1();

findWays2()
