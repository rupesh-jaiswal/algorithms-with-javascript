const graph = {
    A: ['B', 'D'],
    B: ['A', 'C'],
    C: ['B', 'D', 'G'],
    D: ['A', 'C', 'E', 'F'],
    E: ['D', 'F'],
    F: ['E', 'D'],
    G: ['C'],
}

let num = 1;
function CutVertex(graph, nodesArray,node) {
    node.dfsnum =num;
    node.low = num++;
    const { vertex: u } = node;
    // for(let i=0;i<Object.keys(nodesArray).length; i++) {
    //     const v = String.fromCharCode(i+65);
    graph[u].forEach((v) => {
        if(/*graph[u].includes(v) && */nodesArray[v].dfsnum===-1) {
            CutVertex(graph, nodesArray,nodesArray[v]);
            if(nodesArray[v].low>=node.dfsnum && node.dfsnum>1 /* Since this formula is not for root*/) {
                console.log('CUtvertex is ', u);
            }
            node.low = Math.min(node.low, nodesArray[v].low);
        }else {
            node.low = Math.min(node.low, nodesArray[v].dfsnum);
        }
    });
}


const graph2 = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C', 'E', 'F'],
    E: ['D', 'F'],
    F:['D', 'E', 'G', 'H'],
    G: ['F', 'H'],
    H: ['F', 'G'],

}
function getNodesArray(graph) {
    return Object.keys(graph).reduce((acc, vertex) => {
        acc[vertex] = {
            vertex,
            dfsnum: -1,
            low: 0,
        };
        return acc;
    }, {});
}
const nodesArray2 = getNodesArray(graph2);
// CutVertex(graph, nodesArray,nodesArray['A']);

CutVertex(graph2, nodesArray2,nodesArray2['A']);
// console.log(nodesArray);
