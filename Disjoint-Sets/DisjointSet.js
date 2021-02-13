class DisjointSet {
    constructor() {
        this.S = {};
    }

    makeSet(entries) {
        if(Array.isArray(entries)) {
            entries.forEach((entry) => {
                this.S[entry] = entry;
            })
        }else {
            for(let i=0;i<entries;i++) {
                this.S[i] = i;
            }
        }
    }

    find(X) {
        // if(X<0 || X>=Object.keys(this.S).length) {
        //     return;
        // }
        if(!X) {
            return;
        }
        if(this.S[X] === X) {
            return X;
        }
        return this.find(this.S[X]);
    }

    union(a,b) {
        let root1 = this.find(a);
        let root2 = this.find(b);
        if(root1===root2) {
            return;
        }
        this.S[root1] = root2;

    }
}

module.exports = {
    DisjointSet,
};

// const ds = new DisjointSet()
// ds.makeSet(10);
// console.log('set of 2', ds.find(2));
// ds.union(1,2);
// ds.union(2,6);
// console.log('set of 2', ds.find(2));
// console.log('set of 6', ds.find(6));
// ds.union(1, 9);
// console.log('set of 1', ds.find(1));
// console.log('set of 2', ds.find(2));
// console.log('set of 6', ds.find(6));
// console.log('set of 9', ds.find(9));
// console.log(ds.S);

// ds.makeSet(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
// console.log('set of B', ds.find('B'));
// ds.union('A','B');
// ds.union('B','F');
// console.log('set of A', ds.find('A'));
// console.log('set of F', ds.find('F'));

// console.log(ds.S);