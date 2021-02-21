/**
 * in this algo matching starts from right to left and in case of mismatch to calculate 
 * next shift we create a bad match table 
 */

// https://www.youtube.com/watch?v=4Oj_ESzSNCk  -  youtube video
function getBadMatchTable(p) {
    const m = p.length;
    const set = new Set(p.split(''));
    const badMatchTable = {};
    badMatchTable[p[m-1]] = m;
    // for each character we need to calculate the value. value = length-index-1
    set.forEach((char) => {
        if(!badMatchTable[char]) {
            badMatchTable[char] = m-p.lastIndexOf(char)-1;
        }
    });
    return badMatchTable;
}

function stringMatch(t, p) {
    const m = p.length;
    const n = t.length;
    const badMatchTable = getBadMatchTable(p);
    console.log(badMatchTable);
    let i=0;
    while(i<=n-m) {
        let k = m-1;
        for(let j=i+k; j>=i;j--) {
            if(t[j]==p[k]) {
                k--;
                if(k<0) {
                    return i;
                }
            }else if(badMatchTable[t[i+m-1]]) {
                // badmatch value of last char in current substring of t if char is in patern
                i= i+badMatchTable[t[i+m-1]];
                break;              
            }else {
                //if char is not in the pattern shift by length of the pattern
                i = i+m;
                break;
            }
            
        }
    }
    return -1;
}
const t = 'welcome to surana college';
const p1 = 'college';
const p2 = 'surana';
console.log(stringMatch(t, p2));
