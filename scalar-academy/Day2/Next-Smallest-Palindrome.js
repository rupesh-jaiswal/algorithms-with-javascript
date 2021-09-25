const s = "999";

const checkALLNines = (s)=>  {
    return s==="".padEnd(s.length, "9");
}

const isPalindrome = (s) => {
    for (let i=0;i<s.length/2;i++) {
        if(s[i]!==s[s.length-i-1]) {
            return false;
        }
    }
    return true;
}

const checkS1GreaterThanS2 = (s1, s2) => {
    for(let i=0;i<s1.length;i++) {
        if(s1[i]>s2[i]) {
            return true;
        }
        if(s1[i]<s2[i]) {
            return false;
        }
    }
    return false;
}

const s1plusS2 = (s1, s2) => {
    const diff = s1.length-s2.length;
    s2 = s2.padStart(diff+1, "0");
    let carry = 0;
    let sum= "";
    for(let i=s1.length-1;i>=0;i--) {
        let intermediateSum = +s1[i]+(+s2[i])+(+carry)+"";
        if(intermediateSum.length>1) {
            carry = +intermediateSum[0];
            intermediateSum = intermediateSum[1];
        }else {
            carry = 0;
        }
        sum = `${intermediateSum}${sum}`;
    }
    if(carry) {
        sum = `${carry}${sum}`;
    }
    return sum;
}
const reverse = (s) => s.split('').reverse().join('');
const nextSmallestPalindrome = (s)=> {

    if(checkALLNines(s)) {
        return "1".padEnd(s.length, "0")+"1";;
    }
    const mid = Math.floor(s.length/2);
    if(isPalindrome(s)) {
        if(s.length%2==0) {
            let sum = s1plusS2(s.slice(0, mid), "1");
                return sum+reverse(sum);
            // if(s[mid]=="9") {
            //     let sum = s1plusS2(s.slice(0, mid), "1");
            //     return sum+sum.reverse().join('');
            // }else {
            //     let midString = +s[mid]+1+"";
            //     return s.slice(0, mid)
            // }
        }else {
            let sum = s1plusS2(s.slice(0, mid+1), "1");
                return sum+reverse(sum.slice(0, sum.length-1));
        }
    }else {
        let firstPart = s.slice(0, mid);
        let reverseFirstpart = reverse(firstPart);
        if(s.length%2==0) {
            let lastPart = s.slice(mid);
            if(checkS1GreaterThanS2(reverseFirstpart, lastPart)) {
                return firstPart+reverseFirstpart;
            }else {
                let sum = s1plusS2(firstPart, "1");
                return sum+reverse(sum);
            }
        }else {
            let lastPart = s.slice(mid+1);
            if(checkS1GreaterThanS2(reverseFirstpart, lastPart)) {
                return firstPart+s[mid]+reverseFirstpart;
            }else {
                let sum = s1plusS2(s.slice(0, mid+1), "1");
                return sum+reverse(sum.slice(0, sum.length-1));
            }
        }
    }
}

// console.log(nextSmallestPalindrome(s));
// console.log(nextSmallestPalindrome("23545"));
console.log(nextSmallestPalindrome("61423221"));
