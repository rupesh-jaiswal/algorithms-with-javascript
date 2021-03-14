function reverseString(str1) {
    let str = str1.split('');
    let start = 0, end=0, temp;
    if(!str) {
        return;
    }
    for(;str[end];end++);
    end--;
    for(start=0; start<end;start++, end--) {
        console.log(start, end);
        temp = str[start];
        str[start] = str[end];
        str[end]  = temp;
    }
    return str.join('');
}

function reverseWithOutTemp(str1) {
    let str = str1.split('');
    let start = 0, end=0, temp;
    if(!str) {
        return;
    }
    for(;str[end];end++);
    end--;
    for(start=0; start<end;start++, end--) {
        str[start]= str[start].charCodeAt(0) ^str[end].charCodeAt(0);
        str[end]= str[end].charCodeAt(0) ^ str[start];
        str[start]= str[start] ^ str[end];
        str[start]= String.fromCharCode(str[start]);
        str[end] = String.fromCharCode(str[end]);

    }
    return str.join('');
}
let str = '123456';
console.log(reverseWithOutTemp(str));