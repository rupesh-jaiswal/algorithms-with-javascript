/**
 * Given an array of n elements, how do you print the frequencies of elements
without using extra space. Assume all elements are positive, editable and less than n.
Solution: Use negation technique.

 */

function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function frequencyCounter(array) {
    let pos = 0;
    while(pos<array.length) {
        const expectPos =array[pos]-1;
        if(array[pos]>0 && array[expectPos]>0) {
            swap(array, pos, expectPos);
            array[expectPos] = -1;
        }else if(array[pos]>0) {
            array[expectPos]--;
            array[pos++] = 0;
        }else {
            pos++;
        }
    }

    array.forEach((freq, index) => {
        console.log(`freqency of ${index+1} is ${Math.abs(freq)}`)
    });

}

const a = [10, 10, 9, 4, 7, 6, 5, 2, 7, 3, 2, 1];
frequencyCounter(a);