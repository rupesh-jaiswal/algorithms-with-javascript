function create2DArray(rows, columns) {
    return new Array(rows).fill(0).map(() => new Array(columns).fill(0));
}
function getCost(source, destinations,distanceMatrix,paths, originalSource) {
    let min = Infinity;
    let nextNode;
    destinations.forEach(node => {
        const cost = distanceMatrix[source][node]+getCost(node, destinations.filter(e => e!==node), distanceMatrix, paths, originalSource);
        if(cost<min) {
            min=cost;
            nextNode=node;
        }
    });
    console.log(destinations);
    if(destinations.length) {
        paths[source][destinations[destinations.length-1]] = nextNode;
    }else {

        min = distanceMatrix[source][originalSource];
    }
    
    return min;
}

function getMinimumPathAndCost(distanceMatrix, source) {
    const noOfNodes = distanceMatrix.length;
    const paths = create2DArray(noOfNodes, noOfNodes);
  
    let destinations = [];
    for (let i=1;i<distanceMatrix.length;i++) {
        if(i!==source) {
            destinations.push(i);
        }
    }
    const minCost = getCost(source, destinations, distanceMatrix, paths, source);
    const minPaths = [source];
    console.log(paths);
    while(destinations.length>1) {
        const nextMinNode = paths[minPaths[minPaths.length-1]][destinations[destinations.length-1]];
        minPaths.push(nextMinNode);
        destinations = destinations.filter(e => e!==nextMinNode);
    }
    minPaths.push(destinations[0]);
    return {
        minCost,
        minPaths,
    }
}

const distanceMatrix = [
    [0,0,0,0,0],
    [0,0,10,15,20],
    [0,5,0,9,10],
    [0,6,13,0,12],
    [0,8,8,9,0]
];
const result = getMinimumPathAndCost(distanceMatrix, 1);

console.log(result);

