/*

In this we can start at any node and once we visited a new vertex we suspend 
the current vertex and explore the new vertex

dataStructure used is Stack
*/
function getDFS(graph, source) {
    const dfs = [source];
    const toExplore = [source];
    while(toExplore.length>0) {
        const lastNode = toExplore.pop();
        graph[lastNode].every(element => {
            if(!dfs.includes(element)) {
                dfs.push(element);
                toExplore.push(lastNode);
                toExplore.push(element);
                return false;
            }
            return true;
        });
    }
    return dfs;
}
const graph = {
    1: [2,4,5],
    5: [1],
    4: [1],
    2: [1,3,6,7],
    7: [2],
    6: [2],
    3: [2]
};

const root = 3;
const traversal = getDFS(graph, root);
console.log(traversal);