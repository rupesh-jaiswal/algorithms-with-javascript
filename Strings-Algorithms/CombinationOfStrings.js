function findCombination(depth, combination, start, original) {
    const length = original.length;
    for (let i=start;i<length;i++) {
        console.log(combination);
        combination[depth] = original[i];
        console.log(combination.slice(0, depth+1).join(''));
        if(i<length-1) {
            findCombination(depth+1, combination, start+1, original);
        }
    }
}

const str = 'abc';
findCombination(0, new Array(str.length), 0, str);