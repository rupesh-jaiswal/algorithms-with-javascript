function removeAdjacentDuplicates(str) {
    let strPtr= -1;
    let i=0;
    const len = str.length;
    while(i<len) {
        if(strPtr ==-1 || str[strPtr]!==str[i]) {
            strPtr++;
            str[strPtr] = str[i];
            i++;
        }else {
            while(i<len && str[strPtr]==str[i]) {
                i++;
            }
            strPtr--;
        }
    }
    return str.slice(0, strPtr+1).join('');
}

const str = "careermonk";
console.log(removeAdjacentDuplicates(str.split('')));