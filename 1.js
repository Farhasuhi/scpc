function reverseString(input){
    let reversedString="";
    for(let i=input.length-1;i>=0;i--){
        reversedString+=input[i]
    }
    return reversedString;
}
console.log(reverseString("Hello"))

