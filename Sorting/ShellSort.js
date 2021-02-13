function shellShort(array) {
    for(let h=Math.ceil(array.length/2);h>=1;h--) {
        console.log('--------h:', h);
        for(let i=0;i<array.length-h;i++) {
            console.log('i: ', i);
            console.log(`a[${i}]: `,array[i]);
            console.log(`a[${i+h}]: `,array[i+h]);
            
            if(array[i]>array[i+h]) {
                let temp = array[i];
                array[i] = array[i+h];
                array[i+h] = temp;
            }
        }
        console.log(array);
        console.log('--------end of h = ', h);
    }

}

let arr= [3,1,5,7,54,2];
shellShort(arr);
console.log(arr);