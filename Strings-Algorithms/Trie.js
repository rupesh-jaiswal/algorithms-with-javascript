class TrieNode {
    constructor(data) {
        this.data = data;
        this.endOfString = 0;
        this.child = {};
    }

    subnode = (root, char) => {
        if(!root) {
            root.child.forEach(c => {
                if(c.data==char) {
                    return c;
                }
            })
        }
        return null;
    }
}
class Trie {
    constructor() {
        this.root = {};
    }
    insertData(root, word, index) {
        if(!word[index]) return;
        if(!root) {
            const newTrieNode = new TrieNode(word[index]);
            if(word[index+1]) {
                newTrieNode.endOfString = 0;
                newTrieNode.child[word[index+1]] = this.insertData(newTrieNode.child[word[index+1]], word, index+1);
                return newTrieNode;
            }
            else {
                newTrieNode.endOfString = 1;
                return newTrieNode;
            }
        }
        root.child[word[index]] = this.insertData(root.child[word[index]], word, index+1);
        return root;
    }
    insert(word) {
        if(!word) return;
        if(!this.root[word[0]]) {
            this.root[word[0]] = this.insertData(null, word, 0);
        }else {
            this.root[word[0]].child[word[1]] = this.insertData(this.root[word[0]].child[word[1]], word, 1); 
        }
    }

    displayNode(root) {
        const substring = [];
        if(!root) return;
        if(root.endOfString) {
            substring.push(root.data);
        }

        Object.keys(root.child).forEach(node => {
            const str1 = this.displayNode(root.child[node]);
            str1.forEach(e => {
                substring.push(root.data + e);
            })
        });
        return substring;
    }
    display() {
        const strings = []
        Object.keys(this.root).forEach(node => {
            if(node) {
                const str = this.displayNode(this.root[node]);
                strings.push(str);
            }
        });
       console.log(strings.flat().join(', '));
    }

    searchNode(root, word, index) {
        if(!root) {
            if(!word[index]) {
                return true;
            }else {
                return false;
            }
        }else {
            if(!word[index+1]) {
                if(root.endOfString) {
                    return true
                }else {
                    return false;
                }
            }
        }
        return this.searchNode(root.child[word[index+1]], word, index+1);
    }
    search(word) {
        if(!word) return;
        const match = this.searchNode(this.root[word[0]], word, 0);
        if(match) {
            console.log('match Found ', word);
        }else {
            console.log('match not found ', word)
        }
        return match;
    }

    deleteNode (root, word, index) {
        if(word[index]) {
            // word has character
            if(!root) {
                // not found
                return false;
            }
        }
        if(!word[index+1]) {
            // word does not have next character
            if(root.endOfString && root.data == word[index]) {
                // match found set endOfString to 0
                root.endOfString = 0;
                if(Object.keys(root.child).length>0) {
                    // not only child 
                    return 'deleted'
                }
                // only child hence delete the node
                return 'delete parent';
            }else {
                return false;
            }
        }else {
            // next character is there in word
            const deleted = this.deleteNode(root.child[word[index+1]], word, index+1);
            if(deleted =='deleted') {
                return true;
            }else if(deleted == 'delete parent') {
                // delete from parent the next char object;
                delete root.child[word[index+1]];
                if(Object.keys(root.child).length==0) {
                    // if there are no other child delete the current parent also
                    return 'delete parent';
                }else {
                    return true;
                }
            }else {
                // did not find the word
                return false;
            }
        }
    
    }
    delete(word) {
        if(!word) return;
        const deleted = this.deleteNode(this.root[word[0]], word, 0);
        if(deleted) {
            console.log(`${word} was deleted`);
        }else {
            console.log(`${word} was not found`);
        }
    }
}

const trie = new Trie();
trie.insert('B');
trie.insert('BAT');
trie.insert('BOAT');
trie.insert('BOLT');
trie.insert('APPLE');
trie.insert('Zeta');
trie.insert('APPLET');
trie.display();
trie.search('BA');
trie.search('BA');
trie.search('APPLE');
trie.search('ZETA!');
trie.delete('BAT');

trie.display();
console.log(trie.root);
