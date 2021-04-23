function main(input) {
    const [s, t] = input.split(' ');
    let minCount = Infinity;
    let minWindow = "";
    for(let i=0;i<s.length;i++) {
        let count = 0;
        let k=i;
        let windowCount=0;
        while(count!==t.length && k<s.length) {
            if(s[k++]===t[count]) {
                count++;
            }
            windowCount++;
        }

        if(windowCount<minCount && count===t.length) {
            minCount= windowCount;
            minWindow = s.slice(i, k);
        }

    }

    console.log(minWindow);
          // Writing output to STDOUT
}

main('abcdebdde bde');