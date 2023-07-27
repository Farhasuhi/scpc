function addPositiveNumber(input){
    let sum=0;
    for(let i=0;i<=input.length;i++){
        if(input[i]>=0){
            sum+=input[i]
        }
    }
    return sum;
}
const number=[2,3,-2]
console.log(addPositiveNumber(number))