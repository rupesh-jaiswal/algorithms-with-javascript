function charWindow(inputString, charsString) {
    let input = inputString.split('');
    let chars = charsString.split('');
    let cnt = 0;
    let minWindow = Infinity;
    let start, finish;
    const charLen = chars.length;
    const shouldFind = chars.reduce((acc, char) => {
        if(acc[char]) {
            acc[char]+=1;
        }else {
            acc[char] = 1;
        }
        return acc;
    }, {});
    let hasFound = {};
    let j=0;
    for(let i=0;i<input.length;i++) {
        if(!shouldFind[input[i]]) {
            continue;
        }
        if(hasFound[input[i]]) {
            hasFound[input[i]]+=1;
        }else {
            hasFound[input[i]] = 1;
        }
        if(shouldFind[input[i]]>=hasFound[input[i]]) {
            cnt++;
        }
        console.log(hasFound, j, i);
        if(cnt===charLen) {
            while(shouldFind[input[j]]==0 || (hasFound[input[j]]>=shouldFind[input[j]])) {
                if(hasFound[input[j]]>=shouldFind[input[j]]) {
                    hasFound[input[j]]--;
                }
                j++;
            }
            if(minWindow>(i-j+1)) {
                minWindow= i-j+1;
                finish = i;
                start = j;
                console.log(i, j);
            }
            cnt=0;
            // hasFound={};          
        }
    }
    return input.slice(start, finish+1);

}
const input = 'ABBACBAA';
const chars = 'AAB';
console.log(charWindow(input, chars));