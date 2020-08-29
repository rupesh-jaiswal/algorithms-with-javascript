/* Single Source shortest path 

In this we gone relaxing all edges n-1 times where n is no of vertices

if after n-1 times the edges are getting relaxed then there is a cycle

*/
function getInitialPaths(graph) {
    return Object.keys(graph).reduce((acc, vertex) => {
        if(vertex=='1') {
            acc[vertex] = 0;
        }else {
            acc[vertex] = Infinity;
        }
        return acc;
    }, {});
}

function singleSourceShortestPath(graph) {
    const noOfVertices = Object.keys(graph).length;
    const paths = getInitialPaths(graph);
    for(let i=1;i<noOfVertices;i++) {
        let isChanged = true;
        Object.keys(graph).forEach((source) => {
            Object.keys(graph[source]).forEach((destination) => {
                const u = paths[source] + graph[source][destination];
                if(u<paths[destination]) {
                    paths[destination] = u;
                    isChanged = false;
                }
            })
        });
        if(isChanged) {
            break;
        }
    }

    return paths;
}
const graph = {
    1: {2: 4, 4: 5},
    2: {},
    3: {2: -10},
    4: {3: 3},
};

const minimumPaths = singleSourceShortestPath(graph);

console.log(minimumPaths);