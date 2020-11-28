function removeHalfNodes(root) {
    if(!root) {
        return null;
    }
    root.left = removeHalfNodes(root.left);
    root.right = removeHalfNodes(root.right);

    if(!root.left && !root.right) {
        return root;
    }

    if(!root.left) {
        return root.right;
    }

    if(!root.right) {
        return root.right
    }

    return root;
}

