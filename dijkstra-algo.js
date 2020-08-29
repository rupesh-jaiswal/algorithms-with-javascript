function lowestCostNode(costs, processed) {
    return Object.keys(costs).reduce((lowest, node) => {
        if(lowest === null || costs[node]<costs[lowest]) {
            if(!processed.includes(node)) {
                lowest=node;
            }
        }
        return lowest;
    }, null); 
}


function dijkstra () {
    const costs = Object.assign({ finish: Infinity}, graph.start);
    const parents = {};
    for(let child in graph.start) {
        parents[child] = 'start';
    }
    const processed = [];
    let node =lowestCostNode(costs,processed);
    while(node) {
        let cost = costs[node];
        let children = graph[node];
        for(let child in children) {
            let newCost = cost+ children[child];
            if(!costs[child]) {
                costs[child] = newCost;
                parents[child] = node;
            }else if(costs[child]> newCost) {
                    costs[child] = newCost;
                    parents[child] = node;
            }
        }

        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = ['finish'];
    let parent = parents.finish;

    while(parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }

    return {
        optimalDistance: costs.finish,
        optimalPath: optimalPath.reverse(),
    };
}



const graph = {
    start: { A: 5, B: 2},
    A: { D: 2, C:4 },
    B: { A:8, D:7 },
    C: { D:6, finish: 3},
    D: { finish: 1},
    finish: {}
};
console.log(dijkstra(graph));
// const { optimalDistance, optimalPath } = dijkstra(graph);