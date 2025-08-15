const portals = require('./portals.json');

const groupBy = () => {
    let count = 0;
    let count1 = 0;
    const medicareList = [];
    const marketPlaceList = [];
    portals.forEach((portal) => {
        if(portal.portalType === "Medicaid Member") {
            if(count !==5) {
                medicareList.push(portal);
                count++;
            }
        }
        if(portal.portalType === "Marketplace/Commercial Member") {
            if(count1 !==5) {
                marketPlaceList.push(portal);
                count1++;
            }
        }
    })

    console.log([...marketPlaceList, ...medicareList]);
}

groupBy();