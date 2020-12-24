function getNoOfVertices(graph) {
    return Object.keys(graph);
}

function getInDegree(graph) {
    return Object.keys(graph).reduce((acc,vertex) => {
        if(!acc[vertex]) {
            acc[vertex] = 0;
        }
        graph[vertex].forEach((node) => {
            if(acc[node]) {
                acc[node] = acc[node]+1;
            }else {
                acc[node] = 1;
            }
        });
        return acc;
    }, {})
}
function topologicalSort(graph) {
    const vertices = getNoOfVertices(graph);
    let counter = 0;
    const inDegrees = getInDegree(graph);
    const topologicalOrder = {};

    const queue = Object.keys(inDegrees).filter(vertex => !inDegrees[vertex]);
    console.log(queue);
    while(queue.length) {
        const v = queue.shift();
        topologicalOrder[v] = ++counter;
        graph[v].forEach((u) => {
            if(--inDegrees[u]==0) {
                queue.push(u);
            }
        })
    }

    console.log(topologicalOrder);

}


const graph = {
    7: [11, 8],
    5: [11],
    3: [8, 10],
    11: [2,9, 10],
    9: [],
    10: [],
    8: [9],
    2: []
}

topologicalSort(graph);