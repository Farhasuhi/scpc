function romanToInt(romanNumeral) {
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentSymbolValue = romanValues[romanNumeral[i]];
      const nextSymbolValue = romanValues[romanNumeral[i + 1]];
  
      if (nextSymbolValue > currentSymbolValue) {
        result += nextSymbolValue - currentSymbolValue;
        i++; 
      } else {
        result += currentSymbolValue;
      }
    }
  
    return result;
  }
  
  console.log(romanToInt("IX")); 
  console.log(romanToInt("XXI"));
  console.log(romanToInt("LVIII")); 
  console.log(romanToInt("MCMXCIV"));