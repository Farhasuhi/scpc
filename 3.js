function findMostFrequentElement(arr) {
    const elementCount = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (elementCount[element]) {
        elementCount[element]++;
      } else {
        elementCount[element] = 1;
      }
    }
  
    let mostFrequentElement;
    let maxCount = 0;
    for (const element in elementCount) {
      if (elementCount[element] > maxCount) {
        mostFrequentElement = element;
        maxCount = elementCount[element];
      }
    }
  
    return mostFrequentElement;
  }
  
  const array = [1, 2, 3, 2, 4, 2, 4, 5, 2, 6, 2];
  const mostFrequent = findMostFrequentElement(array);
  console.log("Most frequent element:", mostFrequent);