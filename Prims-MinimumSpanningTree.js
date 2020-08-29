function getNoOfVertices(tree) {
    const allEdges = tree.reduce((edges, edge) => edges.concat(edge[1]), []);
    const allVertices = Array.from(new Set(allEdges));
    return allVertices.map(vertex => [vertex]);
}

function checkCycle(path, disJointSets) {
    if(!path) {
      return false;
    }
    const [source, destination] = path[1];
    let sourceIndex, destinationIndex;
    for(let i=0;i<disJointSets.length;i++) {
        if(disJointSets[i] && disJointSets[i].includes(source)) {
            sourceIndex = i;
        }

        if(disJointSets[i] && disJointSets[i].includes(destination)) {
            destinationIndex = i;
        }

        if(sourceIndex !== undefined && destinationIndex !== undefined) {
            break;
        }
    }
    if(sourceIndex==destinationIndex) {
        //cycle detected
        return false;
    } else {
        disJointSets[sourceIndex] = disJointSets[sourceIndex].concat(disJointSets[destinationIndex]);
        delete disJointSets[destinationIndex]
    }
    return true;
}

function checkAdjacencyAndCycle(tree, path) {
    const allEdges = tree.reduce((edges, edge) => edges.concat(edge[1]), []);
    if(!path) {
      return false;
    }
    const isCycle = path[1].every((vertex) => allEdges.includes(vertex));
    if(isCycle) {
        return false;
    }
    const isAdjacent = path[1].some((vertex) => allEdges.includes(vertex));
    if(isAdjacent) {
        return true;
    }
    return false;
}
function prims(tree) {
    tree.sort();
    const minimumSpanningTree = [tree[0]];
    tree.shift();
    const noOfVertices = getNoOfVertices(tree);
    while(minimumSpanningTree.length != noOfVertices-1) {
        for(let i=0;i<tree.length;i++) {
            if(checkAdjacencyAndCycle(minimumSpanningTree, tree[i])) {
                minimumSpanningTree.push(tree[i]);
                delete tree[i];
                break;
            }
        }
    }
    const maximumPath = minimumSpanningTree.reduce((sum, edge) => {
        sum+=edge[0];
        return sum;
    }, 0);
    return minimumSpanningTree;
}



const tree = [
    [28, ["1", "2"]],
    [10, ["1", "6"]],
    [16, ["3", "2"]],
    [14, ["7", "2"]],
    [25, ["6", "5"]],
    [24, ["5", "7"]],
    [22, ["5", "4"]],
    [18, ["7", "4"]],
    [12, ["4", "3"]],
];

console.log(prims(tree));