

function fib(n,preserValues =[]){
if(preserValues[n] != null){
    return preserValues[n]
}
    let result
    if(n <=2){
        result = 1
    }
    else{
        result = fib(n-1, preserValues) + fib(n -2, preserValues)

    }
    preserValues[n] = result
    return result
}
console.log(fib(100))
console.log(fib(254))
console.log(fib(254))


//hositing 

console.log(num)
var num = 12




 console.log((12))
function func(a){
   console.log(a)
}
 
const basket = new Message("flower","fruit")
class Message {
    constructor(a, b) {
        this.a = a
        this.b = b
        console.log(a, b)

    }
}
console.log(basket.a); 