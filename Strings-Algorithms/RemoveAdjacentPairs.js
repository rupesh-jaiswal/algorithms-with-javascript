function removeAdjacentPairs(str1) {
    let str = str1.split('');
    const length = str.length;
    let j=0;
    for(let i=1; i<length;i++) {
        while(str[i]==str[j] && j>=0) {
            i++;
            j--;
        }
        str[++j] = str[i];
    }
    return str.slice(0, j+1).join('');
}

const str = 'ABCCBCBA';
const str1 = 'careermonk'
console.log(removeAdjacentPairs(str1));