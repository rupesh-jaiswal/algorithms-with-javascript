/*  in the this the graph is divided into stages and direction is always in one direction
Tabulation method is used
*/

function multiStage(graph, stages) {
    const noOfVertices = Object.keys(graph).length+1;
    const cost = new Array(noOfVertices);
    const d = new Array(noOfVertices);
    const path = new Array(stages+1);

    cost[noOfVertices-1] = 0;

    for(let i=noOfVertices-2;i>=1;i--) {
        let min = Infinity;
        for(let k=i+1; k<noOfVertices;k++) {
            if(graph[i][k] && graph[i][k]+cost[k]<min) {
                min = graph[i][k]+cost[k];
                d[i] = k;
            }
        }
        cost[i] = min;
    }
    path[1] = 1;
    path[stages] = noOfVertices-1;
    for(let i=2;i<stages;i++) {
        path[i]=d[path[i-1]];
    }

    return path;

};
const graph = {
    1: { 2: 2, 3: 1, 4:3},
    2: { 5:2, 6: 3},
    3: { 5:6, 6:7},
    4: {5: 6, 6: 8, 7: 9},
    5: { 8: 6},
    6: { 8: 4},
    7: { 8:5},
    8: {},
}


console.log(multiStage(graph, 4));