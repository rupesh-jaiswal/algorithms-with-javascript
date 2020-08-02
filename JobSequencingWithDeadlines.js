function jobSequencing(p,d) {
    const maxD = Math.max(...d);
    const result = new Array(maxD).fill(0); // array to store profit. initially it is zero
    while(result.some((e) => e==0)) {
      const maxP = Math.max(...p);
      const indexOfMax = p.indexOf(maxP);
      const jobD = d[indexOfMax]-1; // -1 is required as javascript arrays are zer based
      if(result[jobD]) {
        // if given slot is occupied check slots to the left
        for(let i=jobD-1;i>=0;i--) {
          if(result[i]==0) {
            result[i] = maxP;
            break;
          }
        }
      }else {
        // the slot is empty execute the task and gain profit
        result[jobD] = maxP;
      }
      p[indexOfMax] = 0;
    }
    return result;
  }
  
  //const p = [35,30,25,20,15,12,5];
  //const d =[3,4,4,2,3,1,2];
  const p = [20,15,10,5,1];
  const d = [2,2,1,3,3];
  console.log(jobSequencing(p,d))