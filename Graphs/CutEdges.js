const graph = {
    A: ['B', 'D'],
    B: ['A', 'C'],
    C: ['B', 'D', 'G'],
    D: ['A', 'C', 'E'],
    E: ['D', 'F'],
    F: ['E'],
    G: ['C'],
}

let num = 1;
function CutEdges(graph, nodesArray,node) {
    node.dfsnum =num;
    node.low = num++;
    const { vertex: u } = node;
    // for(let i=0;i<Object.keys(nodesArray).length; i++) {
    //     const v = String.fromCharCode(i+65);
    graph[u].forEach((v) => {
        if(/*graph[u].includes(v) && */nodesArray[v].dfsnum===-1) {
            CutEdges(graph, nodesArray,nodesArray[v]);
            if(nodesArray[v].low>=node.dfsnum && node.dfsnum>1 /* Since this formula is not for root*/) {
                console.log(`Cut edge is (${u}, ${v})`);
            }
            node.low = Math.min(node.low, nodesArray[v].low);
        }else {
            node.low = Math.min(node.low, nodesArray[v].dfsnum);
        }
    });
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
const nodesArray = getNodesArray(graph)
CutEdges(graph, nodesArray,nodesArray['A']);
// console.log(nodesArray);
