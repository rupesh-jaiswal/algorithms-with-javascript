
function findMaxRobbery(coins, houseNo) {
    if(houseNo>=coins.length) {
        return 0;
    }
    return Math.max(coins[houseNo] + findMaxRobbery(coins, houseNo+2), findMaxRobbery(coins, houseNo+1));
}


const coins = [2,7,9,3,1];
console.log(findMaxRobbery(coins, 0));