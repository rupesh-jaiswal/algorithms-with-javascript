// Single Source to all destination in unweighted Graph,

function unweightedShortestPath(graph, source) {
    const queue = [];
    const path = {};
    queue.push(source);
    let distance = {};
    for(let i in graph) {
        distance[i]=-1;
    }
    distance[source] = 0;
    while(queue.length) {
        const v = queue.shift();
        graph[v].forEach((w) => {
            if(distance[w]===-1) {
                distance[w]=distance[v]+1;
                path[w]=v;
                queue.push(w);
            }
        });
    }
    return {
        distance,
        path,
    };
}

const graph = {
    A: ['B', 'D'],
    B: ['D', 'E'],
    C: ['A','F'],
    D: ['F', 'G'],
    E: ['G'],
    F: [],
    G: ['F'],
};

console.log(unweightedShortestPath(graph, 'C'));
