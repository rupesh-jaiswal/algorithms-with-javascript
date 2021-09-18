/**
 * https://www.scaler.com/academy/mentee-dashboard/classroom/dsa-6f26503e-16d1-4754-aa92-6b22723cc8d8/#assignment%2F10054
 */
const A = 4;
const B = 5;
const C = [0,1,6,11];

function minimumDistance(A, B, C) {
    const notAvailable = []; // this will be our queue
    const result =[];
    C.forEach(element => {
        for(let i=0;i<notAvailable.length;i++) {
            const first = notAvailable.shift();
            if(first>element) {
                notAvailable.push(first);
            }else {
                i--;
            }
        }
        const availableAccounts = A-notAvailable.length;
        if(availableAccounts<=0) {
            result.push(0);
        }else {
            result.push(availableAccounts-1);
            notAvailable.push(element+B)
        }
    });
    return result;
}

console.log(minimumDistance(A, B, C));

