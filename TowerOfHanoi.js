function towerOfHanoi(n, fromPeg, toPeg, auxPeg) {
    if(n==1) {
        console.log(`Move disk 1 from ${fromPeg} to ${toPeg}`);
        return;
    }
    // move from A to B using C as auxillary
    towerOfHanoi(n-1, fromPeg, auxPeg, toPeg);
    console.log(`Move ${n} from ${fromPeg} to ${toPeg}`);

    //move from B to C using a As Auxillary
    towerOfHanoi(n-1, auxPeg, toPeg, fromPeg);
}

towerOfHanoi(4, 'Source Peg', 'Destination Peg', 'Auzillary Peg');