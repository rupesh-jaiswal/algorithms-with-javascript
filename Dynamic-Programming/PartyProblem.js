/**
 * in this problem there is a party and the condition is that people can only enjoy in alone or 
 * in pair. find all the possible ways n people can be enjoy the party
 * 
 */


function partyWays(n) {
    if(n<=0) {
        return 0;
    }
    if(n==1) {
        return 1;
    }
    if(n==2) {
        return 2;
    }
    const whenAlone = partyWays(n-1);
    const whenInPair = partyWays(n-2)*(n-1);
    return whenAlone + whenInPair;
}

console.log(partyWays(4));