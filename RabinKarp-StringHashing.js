// https://unacademy.com/class/build-your-own-search-application-basics-of-hashing/ZBULJ66Q

function findString(text, string) {
  let count= 0;
  const M = string.length;
  const N = text.length;
  if(text.length<string.length) {
    return count;
  }
  const p = 31;
  const m = 1e9+9;
  const primeInv = 838709685;
  const powers =[1];
  for(let i=1;i<M;i++) {
    powers.push(powers[i-1]*p);
  }
  console.log(powers);
  let hashOfSearchString = 0;
  let hashOfSubText = 0;
  for(let i=0;i<M;i++) {
    hashOfSearchString = (hashOfSearchString + powers[i]*string.charCodeAt(i))%m;
    hashOfSubText= (hashOfSubText +powers[i]*text.charCodeAt(i))%m;
  }
  
  for(let i=0;i<=N-M;i++) {
    console.log(hashOfSearchString, hashOfSubText)
    if(hashOfSearchString===hashOfSubText) {
      count++;
    }
    hashOfSubText = (hashOfSubText - text.charCodeAt(i)+m) * primeInv %m;
    hashOfSubText = (hashOfSubText + text.charCodeAt(i+M) * powers[M-1])%m;
  }
  
  return count;
}

function searchStringsInText(text, searchStrings) {
  searchStrings.forEach(string => {
    console.log(`${string} has be found ${findString(text, string)}`);
  });
}


const text = "Today is gonna the day they will gonna throw it at you"
const searchStrings = [
  "day",
  "gonna",
];

searchStringsInText(text, searchStrings);
