const PriorityQueue = require('../Priority-Queue-Heaps/PriorityQueue');
const { DisjointSet }= require('../Disjoint-Sets/DisjointSet');

function kruskals(graph) {
    const totalVertices = graph.reduce((no, [, vertices]) => {
        const [vertex1, vertex2] = vertices.split(',');
        no.add(vertex1);
        no.add(vertex2);
        return no;
    }, new Set());
    const vertices = Array.from(totalVertices);
    const pq = new PriorityQueue();
    graph.forEach(([priority, data]) => {
        pq.add(data, priority);
    });
    const ds = new DisjointSet();
    const minimumSpaningTree = []
    ds.makeSet(vertices);
    const selectedVertices = new Set();
    while (!pq.isEmpty()) {
        const {data, priority: distance}= pq.remove();
        const [vertex1, vertex2] = data.split(',');
        const setVertex1 = ds.find(vertex1);
        const setVertex2 = ds.find(vertex2);
        if(setVertex1!==setVertex2) {
            ds.union(vertex1, vertex2);
            selectedVertices.add(vertex2);
            selectedVertices.add(vertex1);
            minimumSpaningTree.push([distance, data]);
        }
        if(selectedVertices.size===totalVertices.size) {
            break;
        }
    }

    console.log(minimumSpaningTree)


}


const graph = [
    [7, 'A,B'],
    [5, 'A,D'],
    [9, 'C,D'],
    [8, 'C,B'],
    [7, 'C,E'],
    [5, 'B,E'],
    [15, 'D,E'],
    [6, 'D,F'],
    [8, 'F,E'],
    [11, 'F,G'],
    [9, 'E,G'],

]
kruskals(graph);