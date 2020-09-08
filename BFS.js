/*
In BFS we visit a vertex and explore all of its adjacent

Queue is the dataStruture used

*/
function getBFS(graph, source) {
    const bfs = [source];
    const visited = [source];
    while(visited.length>0) {
        const nodeToExplore = visited.shift();
        graph[nodeToExplore].forEach(element => {
            if(!bfs.includes(element)) {
                visited.push(element);
                bfs.push(element);
            }
        });
    }
    return bfs;
}
const graph = {
    1: [2,4,5],
    5: [1],
    4: [1],
    2: [1,7,6,3],
    7: [2],
    6: [2],
    3: [2]
};

const root = 1;
const traversal = getBFS(graph, root);
console.log(traversal);
