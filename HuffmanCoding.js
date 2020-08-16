function trimTree(tree) {
    const p = tree[1];
    if(typeof p =="string") {
        return p;
    }else {
        return [trimTree(p[0]), trimTree(p[1])];
    }
}
function assignedCodes(node, pattern, codes) {
    if(typeof node == "string") {
        codes[node]=pattern || "0";
    }else {
        assignedCodes(node[0], pattern+"0", codes);
        assignedCodes(node[1], pattern+"1",codes);
    }
}
function getHuffManCodes(message) {
    const frequency = message.split('').reduce((acc, character) => {
        if (acc[character]) {
            return {
                ...acc,
                [character]: acc[character]+1,
            };
        }else {
            return {
                ...acc,
                [character]: 1
            };
        }
    }, {});
    
    // sort by frequency

    let tuples  = [];
    for(let a in frequency) {
        tuples.push([frequency[a], a]);
    }

    tuples.sort();
    let tree = tuples;
    //build tree
    while(tuples.length>1) {
        const leastTwo = tuples.slice(0,2);
        const rest = tuples.slice(2);
        const combinedFreq = leastTwo[0][0]+leastTwo[1][0];
        tree = [[combinedFreq].concat([leastTwo])];
        tuples = rest.concat(tree);
        tuples.sort(); 
    }

    console.log(tree);

    const trimmedTree = trimTree(tree[0]);
  console.log(trimmedTree);
    let codes ={};
    assignedCodes(trimmedTree, "", codes);
    console.log(codes);
}
const message = "aaaaaaaabcc";
getHuffManCodes(message);




