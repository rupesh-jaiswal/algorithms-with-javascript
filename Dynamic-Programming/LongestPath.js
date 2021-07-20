const graph = [
    [1, 2],
    [2, 4],
    [3, 4],
    // [1, 3],
    // [3, 2]
];

function getTotalVertices (graph) {
    const s = new Set();
    graph.forEach((edge) => {
        console.log(edge);
        s.add(edge)
    });
 
    console.log(s.size);
}

getTotalVertices(graph);

// dummy commit 1

// dummy commit 2
