// function check if given tree is an AVL tree or not 


function isAvl(root) {
    if(!root) {
        return 0;
    }
    const left = isAvl(root.left);
    if(left === -1) {
        return left;
    }
    const right = isAvl(root.right);
    if(right==-1) {
        return right;
    }
    if(Math.abs(left-right)>1) {
        return -1;
    }

    return Math.max(lft,right)+1;
}

