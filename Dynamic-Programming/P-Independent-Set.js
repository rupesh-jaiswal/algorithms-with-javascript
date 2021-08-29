/**
 * https://atcoder.jp/contests/dp/tasks/dp_p
 */
function graphInObject(graph) {
    return graph.reduce((acc, [v1, v2]) => {
        if(acc[v1]) {
            acc[v1].push(v2);
        }else {
            acc[v1] = [v2];
        }
        if(acc[v2]) {
            acc[v2].push(v1);
        }else {
            acc[v2] = [v1];
        }
        return acc;
    }, {});
}
/**
 * 
 * @param {integer} node 
 * @param {integer} parent 
 * @param {0|1} c  constraints
 */
const independentSet = (graph,node, parent, c, dp) => {
    if(dp[node][c]!==-1) return dp[node][c];

    let ans = 0;
    let w0 = 1;
    graph[node].forEach((child) => {
        if(child!==parent) {
            w0 = w0*independentSet(graph, child, node, 0, dp);
        }
    });
    ans+=w0;

    let w1 = 1;
    if(c==0) {
        graph[node].forEach((child) => {
            if(child!==parent) {
                w1 = w1*independentSet(graph, child, node, 1, dp);
            }
        });
        ans+=w1;
    }

    return dp[node][c] = ans;
    
}
function getWaysOfColoring(n, graph) {
    const graphInObj = graphInObject(graph);
    console.log(graphInObj);
    let dp = new Array(n+1).fill(-1).map(() => new Array(2).fill(-1));
    console.log(independentSet(graphInObj, 1, -1, 0, dp));
}
const graph = [[1, 2], [1, 3], [1, 4]];
const graph1 = [[1, 2], [2, 3]];
getWaysOfColoring(4, graph);
getWaysOfColoring(3, graph1);