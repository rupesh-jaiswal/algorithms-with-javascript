function removeLeaves(root) {
    if(root) {
        if(!root.left && !root.right) {
            return null;
        }
        root.left= removeLeaves(root.left);
        root.right = removeLeaves(root.right);
    }
    return root;
}