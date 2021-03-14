const Tree = require('./Trees');

function solve(A){
    let order= '';
    let q= [A];
    while(q.length) {
        const temp = q.shift();
        if(!order) {
            order = ''+temp.data;
        }else {
            order = temp.data + ',' + order;
        }
        if(temp.right) {
            q.push(temp.right);
        }
        if(temp.left) {
            q.push(temp.left);
        }
        
    }
    return order.split(',');
    
}

const tree = new Tree();
tree.add(3);
tree.add(9);
tree.add(20);
tree.add(15);
tree.add(7);

console.log('level-order');
console.log(solve(tree.root));