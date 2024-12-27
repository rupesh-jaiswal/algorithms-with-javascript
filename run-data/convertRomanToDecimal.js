function convertRomansToDecimal(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50
    };
    
    let decimal = 0;
    let previousValue = 0;
    for(let i= roman.length-1; i>=0;i--) {
        const current = romanNumerals[roman[i]];
        if(current <previousValue) {
            decimal-=current;
        }else {
            decimal+=current;
        }
        previousValue = current;
    }
    return decimal;
}

function sortRoman(names) {
    // Write your code here
    names.sort((a, b) => {
       
    const [nameA, romanNumeralA] = a.split(' ');
    const [nameB, romanNumeralB] = b.split(' ');
    if(nameA!==nameB) return nameA.localeCompare(nameB);
    
    return convertRomansToDecimal(romanNumeralA)-convertRomansToDecimal(romanNumeralB)
    });
    return names;
    

}