/*
 in this we design system with maximum relibility and within given budget

*/
function getReliablityDesign(costOfDevices, reliablityOfDevices, budget) {
    const sum = costOfDevices.reduce((acc, cost) => {
        acc+=cost;
        return acc;
    },0);
    const u = costOfDevices.map(cost => (Math.floor((budget-sum)/cost)+1));
    const s=[[[1,0, {}]]];
    let tempSet;
    const orderedPairs = {
        max: 0,
        sequence: {},
    }
    reliablityOfDevices.forEach((reliablityOfDevice, index) =>{
        const lastSet = s[s.length-1];
        tempSet = [];

        for(let i=1;i<=u[index];i++) {
            lastSet.forEach((tempData) => {
                    const [oldRel, oldCost, countOfDevices] = tempData;
                    if((oldCost+(i*costOfDevices[index])) >budget) {
                        return;
                    }
                    const newRel = oldRel*(1-Math.pow(1-reliablityOfDevice, i));
                    const newCost = oldCost+(i*costOfDevices[index]);
                    const newCount = {
                        ...countOfDevices,
                        [index]: i,
                    }
                    if(Object.keys(newCount).length===3 && orderedPairs.max<newRel) {
                        orderedPairs.max = newRel;
                        orderedPairs.sequence = newCount;
                    }
                    tempSet.push([
                        newRel,
                        newCost,
                        newCount
                    ]);

            });
            s.push(tempSet);
        }
        
    });
    console.log(orderedPairs);
}

const reliablityOfDevices = [0.5, 0.9, 1]
const costOfDevices = [30,15,20];
const budget = 105;

console.log(getReliablityDesign(costOfDevices, reliablityOfDevices, budget));
// [1,2,3].forEach(element => {
//     if(element==2) {
//         return;
//     }
//     console.log(element);
// })