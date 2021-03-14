const PriorityQueue = require('../Priority-Queue-Heaps/PriorityQueue');


function getHuffmanCode(root, path = '', codes) {
    if(!root) {
        return;
    }
    if(root.data.length==1) {
        codes[root.data] = path;
        return;
    }
    getHuffmanCode(root.left, path+'0', codes);
    getHuffmanCode(root.right, path+'1', codes);
};

function huffmanCode(freq) {
    // const charArray = string.split('');
    // const freq = charArray.reduce((acc, char) => {
    //     if(acc[char]) {
    //         acc[char]++;
    //     }else {
    //         acc[char] = 1;
    //     }
    //     return acc;
    // }, {});

    const pq = new PriorityQueue();
    console.log(freq);
    Object.keys(freq).forEach((key) => {
        pq.add(key, freq[key]);
    });
    let root;
    while(!pq.isEmpty()) {
        
        const temp1 = pq.remove();
        const newNode = {
            data: temp1.data,
            priority: temp1.priority,
            left: temp1,
        };
        if(!pq.isEmpty()) {
            const temp2 = pq.remove();
            newNode.data+=temp2.data;
            newNode.priority+=temp2.priority;
            newNode.right = temp2;
        }
        pq.addNode(newNode);
        if(pq.heap.length==1) {
            root = newNode;
            break;
        }
    }

    console.log(root);
    const codes = {};
    getHuffmanCode(root, '', codes);
    console.log(codes);
}

const freq = {
    a: 12,
    b: 2,
    c: 7,
    d: 13,
    e: 14,
    f: 85,
}

huffmanCode(freq);