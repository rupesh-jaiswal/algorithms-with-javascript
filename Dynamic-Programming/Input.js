var fs = require('fs');
const path = require('path');
class ReadInput {
    readStream;
    data = ''
    currentLine = 0;
    constructor() {
        const that = this;
        this.readStream  = new Promise((resolve, reject) => {
            const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
            console.log(data)
            that.data = data.split('\n');
            console.log(that.data);
            resolve();
            // const readStream1 = fs.createReadStream(path.join(__dirname, 'input.txt'), 'utf8');
            // readStream1.on('data', function(chunk) {
            //     that.data += chunk;
            // }).on('end', function() {
            //     console.log(that.data);
            //     that.data = that.data.split('\n');
            //     console.log(that.data);
            //     resolve();
            // });
        });
        
    }
    readNextLine() {
        return this.data[this.currentLine++];
    }
}
module.exports = ReadInput;
 