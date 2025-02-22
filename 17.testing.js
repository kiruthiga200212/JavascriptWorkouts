// var a = b || c

// var b = undefined
// var c = 0
// console.log(a)
// console.log(b)
// console.log(c)

console.log( Object.is("hello","hello"));
console.log(Object.is("hi",5))
console.log(Object.is(NaN,NaN))
console.log(Object.is(NaN,"jeigeh"))


// object seal
const obj = {
    perdon: "name"
}

console.log(Object.seal(obj))


//object entries()
const objEnt = {
    person :"keerthi",
    greet : "good morning"
}


for (let [key, value] of Object.entries(objEnt)){
    console.log(`${key} : ${value}`)

} 

for(let value of Object.values(objEnt)){
    console.log(`${value}`)
}

console.log(Object.keys(objEnt))
  

// pass  by value and pass by reference


const pass = [
    {name :"Keerthi rajagopal"},
    {age : 24}
]
//3 ways are pass the reference and passing the reference
var passCopy = [...pass]
var passCopy = Object.assign([], pass)
var passCopy = JSON.parse(JSON.stringify(pass)) 

 pass[1].age = 21 

console.log(pass[1].age)
console.log(passCopy[1].age)

//pass by value

var a = 1
function sum(a){
    return a* a 

}
var b = 5
var result = sum(b)

console.log(result)

