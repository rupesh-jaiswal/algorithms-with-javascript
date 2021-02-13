/**
 * Given an array with 2n + 1 integer elements, n elements appear twice in
arbitrary places in the array and a single integer appears only once somewhere inside.
Find the lonely integer with O(n) operations and O(1) extra memory.
 */

function findLonelyELement(array) {
    let res;
    array.forEach(element => {
        res^=element;
    });

    return res;
}

const arr = [1,3,1, 4,3,99,7, 6,8,8,6,7,4];
console.log(findLonelyELement(arr));
