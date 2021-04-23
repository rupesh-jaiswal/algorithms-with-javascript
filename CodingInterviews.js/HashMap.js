class HashMap {
    constructor(size) {
        this.size=size;
        this.count=0;
        this.root = {};
    }
    add(value) {
        if(this.count==this.size) {
            return console.log('hash map is full');
        }
        const hash = this.getHash(value);
        if(this.root[hash]) {
            if(typeof this.root[hash] === 'string') {
                this.root[hash] = [this.root[hash], value];
            } else {
                this.root[hash].push(value);
            }
        }
        this.root[hash] = value;
        this.count++;
    }

    getHash(value) {
        return value.length;
    }

    delete(value) {
        if(this.count==0) {
            return console.log('hashmap is empty');
        }
        const hash = this.getHash(value);
        delete this.root[hash];
    }

    print() {
        console.log(Object.values(this.root).join(','));
    }
}


const hashMap = new HashMap(5);
hashMap.add('rupesh');
hashMap.add('roy');

hashMap.add('bill');
hashMap.add('rome');
hashMap.print();
// hashMap.delete('roy');

// hashMap.print();