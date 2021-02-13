function waterfall (arrayOfFunctions, finalCallback) {
    // Your code here
    let i=0;
    let doneCallback;
    let arguements = []; 
    doneCallback = (...response) => {
    i++;
    arguements = [...response];
    arguements.shift();
    arguements.push(doneCallback);
    if(i<arrayOfFunctions.length && response[0]===null) {
        arrayOfFunctions[i](...arguements);
    } else {
        finalCallback(...response);
    }
}
    arrayOfFunctions[i](doneCallback);
}


const arrayOfFunctions = [
  function(doneCallback) {
    setTimeout(function() {
      console.log("FIRST");
      return doneCallback(null, "b");
    }, 100);
  },
  function(param, doneCallback) {
    setTimeout(function() {
      console.log("SECOND", param);
      return doneCallback(null, "c", "d");
    }, 50);
  },
  function(param1, param2, doneCallback) {
    setTimeout(function() {
      console.log("THIRD", param1, param2);
      return doneCallback(null, "e");
    }, 10);
  }
];

const finalCallback = function(err, result) {
  console.log("err", err);
  console.log("result", result);
};

waterfall(arrayOfFunctions, finalCallback);
