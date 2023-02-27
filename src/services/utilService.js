export function makeArray(length) {
    let arr=[]
    for (let i=0;i<length;i++){
        arr.push(i+1)
    }
    return arr
} 

export function matchObjectsByUrl(urlsArray, objectsArray, urlKey) {
    const matchedObjects = objectsArray.filter(obj => urlsArray.includes(obj[urlKey]));
    // console.log("from func ",matchedObjects)
    return matchedObjects;
  }
  
  export function extractNumbersFromUrls(urls) {
    let numbersString = "";
    
    for (const url of urls) {
      const matches = url.match(/\d+$/);
      if (matches !== null) {
        const number = matches[0];
        if (numbersString.length > 0) {
            numbersString += ",";
          }
          numbersString += number;
        }
      }
  
    return numbersString;
  }
