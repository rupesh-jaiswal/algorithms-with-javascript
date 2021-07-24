/**
 * problem statement: https://atcoder.jp/contests/dp/tasks/dp_g
 * notes will be attached
 */
const graph = [
    [1, 2],
    [2, 4],
    [3, 4],
    [1, 3],
    [3, 2],
    [4, 5]
];
function getGraphsInObject(graph) {
    return graph.reduce((acc, [source, destination]) => {
        if(acc[source]) {
            acc[source].push(destination);
        }else {
            acc[source] = [destination];
        }
        return acc;
    },  {});
}

function getAllVertices (graph) {
    let s = new Set();
    graph.forEach((edge) => {
        s.add(edge[0]);
        s.add(edge[1]);
    });
    return Array.from(s);
}

function findLongesPathFromVertex(graph, source, dp) {
    if(dp[source]!==-1) return dp[source];
    let result = 0;
    graph[source] && graph[source].forEach((neighbor) => {
        result = 1+ Math.max(result, findLongesPathFromVertex(graph, neighbor, dp))
    });
    dp[source] = result;
    return result;
}
function getLongestPath(graph) {
    const allVertices = getAllVertices(graph);
    const graphsInObject = getGraphsInObject(graph);
    let dp = new Array(allVertices.length+1).fill(-1);
    let result = 0;
    allVertices.forEach((vertex) => {
        result = Math.max(result, findLongesPathFromVertex(graphsInObject, vertex, dp));
    })
    return result;
}
console.log(getLongestPath(graph));

// dummy commit 1

// dummy commit 2
