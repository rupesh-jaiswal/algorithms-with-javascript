const PriorityQueue = require('../Priority-Queue-Heaps/PriorityQueue');

const graph = {
    A: { B: 4, C: 1},
    B: { E: 4},
    C: { B: 2, D: 4},
    D: { E: 4},
    E: {},
};
function weightedShortestPath(graph, source) {
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(source, 0);
    const path={};
    let distance = {};
    for(let i in graph) {
        distance[i]=-1;
    }
    distance[source] = 0;

    while(!priorityQueue.isEmpty()) {
        const v = priorityQueue.remove();
        for (let w in graph[v.data]) {
            const newDistance = v.priority+graph[v.data][w];
            if(distance[w]===-1) {
                distance[w]=newDistance;
                priorityQueue.add(w, newDistance);
                path[w]=v.data;
            }else if(distance[w]>newDistance) {
                distance[w] = newDistance;
                priorityQueue.update(w, newDistance);
                path[w] = v.data;
            }
        }
    }
    return {
        distance,
        path,
    };

}


const {path, distance} = weightedShortestPath(graph, 'A');


function getPathToDestination(path, distance, source, destination) {
    console.log(path);
    console.log(distance);
    const optimalPath = [destination];
    let intermediate = path[destination]
    while(intermediate!==source) {
        optimalPath.unshift(intermediate);
        destination = intermediate;
        intermediate = path[destination]
    }

    return optimalPath;
}
console.log(getPathToDestination(path, distance, 'A', 'E'))