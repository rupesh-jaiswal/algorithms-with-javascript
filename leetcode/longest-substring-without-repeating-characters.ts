function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    const map = {};
    let characters = [];
    for(let i=0;i<s.length;i++) {
        if(map[s[i]]!==undefined) {
            const index=map[s[i]];
            characters = characters.slice(index+1);
        }
        map[s[i]] = i;
        characters.push(s[i])

        if(characters.length>max) {
            max=characters.length;
        }
    }
    console.log(characters)
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")) //3