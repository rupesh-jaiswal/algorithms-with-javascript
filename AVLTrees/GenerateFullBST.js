/// Given a height h, give an algorithm for generating the HB(0).

class AVLTreeNode {
    constructor(data) {
        this.data = data;
        this.right = this.left = null;
        this.height = 0;
    }
}
let count = 1;
function buildHB0(h) {
    const temp = new AVLTreeNode();

    if(h==0) {
        return null;
    }

    temp.left = buildHB0(h-1);
    temp.data = count++;
    temp.right = buildHB0(h-1);
    return temp;
}

