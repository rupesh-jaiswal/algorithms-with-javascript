function findPermutations(depth, permutations, used, original) {
    const length = original.length;
    if(depth ==length) {
        console.log(permutations.join(''));
    }
    for(let i=0;i<original.length;i++) {
        if(!used[i]) {
            used[i] = 1;
            permutations[depth] = original[i];
            findPermutations(depth+1, permutations, used, original);
            used[i] = 0;
        }
    }
}
const str = 'abc';
findPermutations(0, [], new Array(str.length),str);