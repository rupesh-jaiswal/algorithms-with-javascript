const graph = {
    A: ['B', 'D'],
    B: ['C'],
    C: ['A', 'D'],
    D: [],
};
let counter = 0;
function getPostOrderTraversal(graph, source, postOrder={}, visited={}) {
    visited[source]=true;
    graph[source].forEach((v) => {
        if(!visited[v]) {
            getPostOrderTraversal(graph, v, postOrder, visited);
        }
        
    });
    postOrder[source] = ++counter;

    return postOrder;
}
function getReverseGraph(graph) {
    return Object.keys(graph).reduce((reverseGraph, key) => {
        graph[key].forEach((v) => {
            if(reverseGraph[v]) {
                reverseGraph[v].push(key);
            }else {
                reverseGraph[v] = [key];
            }
        });
        return reverseGraph;
    }, {});
}


function getStartVertex(postOrder) {
    let maxVertex = null;
    Object.keys(postOrder).forEach(key => {
        if(maxVertex) {
            if(maxVertex.value<postOrder[key]) {
                maxVertex = {
                    data: key,
                    value: postOrder[key],
                };
            }
        }else {
            maxVertex = {
                data: key,
                value: postOrder[key],
            };
        }
    });
    return maxVertex;
} 
function stronglyConnectedComponents(graph, source) {
    const postOrder = getPostOrderTraversal(graph, source);
    // console.log(postOrder);
    const reverseGraph = getReverseGraph(graph);
    // console.log(reverseGraph);

    const connectedComponent = [];
    let visited = {}
    let visitedCount = Object.keys(visited).length;
    const totalNumberOfVertex = Object.keys(postOrder).length;
    while(visitedCount!=totalNumberOfVertex) {
        counter = 0;
        const {data: startVertex} = getStartVertex(postOrder);
        const newPostOrder = getPostOrderTraversal(reverseGraph, startVertex, {}, visited);
        Object.keys(newPostOrder).forEach(key => {
            visited[key] = true;
            postOrder[key] = 0
        });
        visitedCount = Object.keys(visited).length;
        connectedComponent.push(Object.keys(newPostOrder));
    }

    console.log(connectedComponent);
    return connectedComponent;
}


stronglyConnectedComponents(graph, 'A');