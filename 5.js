function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiple(a,b){
    return a*b
}
function divider(a,b){
    return a/b
}
function calculator(a,b,operator){
    return operator(a,b)
}
console.log(calculator(2,3,divider))