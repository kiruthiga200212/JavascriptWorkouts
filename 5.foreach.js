
const arr= [5,5,5,5,5,5,5]
const myMapResult = arr.map((a)=>{
return a * 2

})

console.log(myMapResult)


// foreach returns a undefined
const foreach = arr.forEach((a)=>{
    return a * 2
    
    
    })
    
    console.log(foreach)


// foreach adding the array by  each eleemnt without gving the new arrray
let sum = 0 
const numbers = [2,2,2,2,2,2]

const myForeachResult = (num)=>{
    return sum += num
}
numbers.forEach(myForeachResult)
console.log(sum)

var user = { firstName: "John", lastName:"Doe", age: 20 , id: 45145};
delete user.age;

console.log(user); // {firstName: "John", lastName:"Doe"}