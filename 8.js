function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array should contain at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("There is no second smallest element in the array.");
    }
  
    return secondSmallest;
  }
  
  // Example usage:
  const numbers = [7, 2, 3, 8, 1, 4, 5, 6];
  const secondSmallestNumber = findSecondSmallest(numbers);
  console.log("Second smallest number:", secondSmallestNumber);