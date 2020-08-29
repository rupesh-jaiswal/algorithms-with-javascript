/*
*/

function allPairsShortestPath(graph) {
    const noOFVertices = Object.keys(graph).length;
    Object.keys(graph).forEach((k) => {
        Object.keys(graph).forEach((i) => {
            Object.keys(graph).forEach((j) => {
                if(i!==j && j!==k && i!==k) {
                    graph[i][j] = Math.min(graph[i][j], graph[i][k]+graph[k][j]);
                }
                
            });
        });
    })
    return graph;
}

const graph = {
    1: { 2: 3, 3: Infinity, 4: 7},
    2: { 1: 8, 3: 2, 4: Infinity},
    3: {1: 5, 2: Infinity, 4: 1},
    4: {1: 2, 2: Infinity, 3: Infinity},
};
console.log(allPairsShortestPath(graph));
