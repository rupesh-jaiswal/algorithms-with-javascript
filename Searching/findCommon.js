function intersection(...arrays) {
    console.log(arrays);
    
    // for(let i=1;i<arrays.length;i++) {
    //     commonElements = arrays[i].filter((a) => commonElements.includes(a));
    // }
    // const sortedArrays = arrays.map(array => )
    let allArrays = [];
    arrays.forEach(array => {
        allArrays = allArrays.concat(array);
    });
    const freq = allArrays.reduce((acc, element) => {
        if(acc[element]) {
            acc[element]++;
        }else {
            acc[element]=1;
        }
        return acc;
    }, {});
    const commonElements = [];
    Object.keys(freq).forEach(element => {
        if(freq[element]===arrays.length) {
            commonElements.push(Number(element));
        }
    })
    console.log(commonElements);
}

intersection([1, 2,3], [101, 2, 1, 10], [2, 1, 4]);