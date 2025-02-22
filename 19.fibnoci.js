// const fib = function (n){
    

//   if(n<=1)
//     return n;
// return fib(n-1) + fib(n-2)
    
// }

// const result = fib(2)
// console.log(result)

// const fibnoci = (n) => (n <= 1 ? n : fib(n-1) + fib(n-2))
// console.log(fibnoci(2))


// //anagram

// const ana = (a,b) => {
//     if (a.length !== b.length) return false;

//     let a1 = {};
//     let b1 = {};
//     for(let i = 0; i < a.length ; i++){
//         a1[a[i]] = (a1[a[i]] || 0) + 1;
//         b1[b[i]] = (b1[b[i]] || 0) + 1;
//     }

//     for( const key in a ){
//         if(a[key] === b1[key]) return false

     

//     }
//     return true;

// };

// const res = ana("anagram","gramana")
// console.log(res)


// const myFun = (a,b) =>{
//     a = a.split("").sort().join("")
//     b = b.split("").sort().join("")


//     if(a !== b){
//         return false

//     }
//     return true;
// }

// const testing = myFun("kii","iki")
// // console.log(testing)


// const numbers = [3,4]

// const adding = numbers.reduce((acc,n)=>{
// return acc + n
// })

// console.log(adding)

// const add = numbers[0]+numbers[1]

// console.log(add)


// const sumTwo = [1,2,3,4,5]

// function addTwo(nums,target) {
//    for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length ; j++){
//         if(nums[i] + nums[j] === target)
//             return [i,j];
//         }
//     }
//    }



// console.log(addTwo(sumTwo, 9))
// console.log(addTwo(sumTwo, 3))



// const obj = {

//     key: 1,
//     key: 2,
//     key  : 3,
//     key : 4,
//     key: 5 ,
//     key :6
// }
// // const profit = function(value,target){

// //     for(let i = 0; i < value.length; i++){
// //         for(let j = i + 1; j < value.length ; j++){
// // if (target && value){
// //    return value + target
// // }
// //         }}

// // }

// // console.log(usingObj([1,2,3,4],7))   


// const salesProfit = function(price){

//     let globalProfit = 0 
//  for(let i = 0; i < price.length; i++){
//     for(let j = 0; j< price.length; j++){
//         const currentProfit = price[i] - price[j]
//         if(currentProfit > globalProfit ? globalProfit = currentProfit : "true your profit"){

//         }
//     }

//     return globalProfit;
//  }


// }

// const log = salesProfit(([1,2,3,4,5],2))
// console.log(log)



const bigNum = function (min,profit){

}

function checkAge(data){
    if(data.age === 18){
         console.log("your adult")
    }else if(data =={age:18}){

    }else {
        console.log("no age")
    }
}

checkAge({age:18});

function abc(){
    console.log(abc.timeout)
}
abc()
abc.timeout = 200;
abc.timeout = 100;

abc.timeout = 300;
// abc();

// let  a = {name:"keerht"}
// let z= a 
// z.name ="kiki"
// console.log(a.name)

console.log(+true) // 1
console.log(!"HELLO") // flase

console.log(isNaN("hello")) // true
console.log(isNaN(12))




function curry(a){
    return function (b){
  return function (c){
   
    return a + b + c
  }
    }


}
console.log(curry(1)(2)(3))


console.log(2- "2")//0
console.log('2'- 2) // 0

console.log(2 + "2") // 22
console.log('2'+2) //22
console.log(typeof NaN) // number 
console.log(typeof "tht")
console.log(NaN === NaN)//false
console.log(NaN == NaN)  //false

console.log(2 + NaN) //NaN
console.log()


// receiveing nan 

console.log(1 - "text")
console.log(Math.sqrt(-1))
console.log(undefined + 1)
console.log(parseInt("abc"))
console.log(0 / 0 )
let check = Math.property;
console.log(check)


console.log(Number("hello"))// NaN

console.log(Number(Boolean("4" - 5)))
console.log(String(Boolean("1"- 10)))


console.log(Number(Boolean("4" + "5")))
console.log(String(Boolean(4 + 5)))

console.log('4' + 3 * 2)//46

var a = 5

console.log(a)
var b = a = 12
console.log(b)


//shallow copy  and deep copy ....

const orginal = {
    name: "alice",
    age:45,
    contact: {
        phno:4521,
        address: "chennai"
    }
}

const originalCopy = {...orginal}
const deepcopy = JSON.parse(JSON.stringify(orginal))

originalCopy.name = "keerthi"
originalCopy.contact.phno = 123654789

deepcopy.name = "lavanya"

console.log(originalCopy.name)
console.log(originalCopy.contact.phno)
console.log(orginal.name)
console.log(orginal.contact.phno)


console.log(deepcopy.name) 
console.log(orginal.name)


// push and pop also shift and unshift 
const arr = [1,2,3,4,5]

console.log(arr.push(45)+ " push")
console.log(arr)
console.log(arr.pop() + " pop")
console.log(arr)
console.log(arr.shift() + " shift")
console.log(arr)
console.log(arr.unshift(24) + " unshift")
console.log(arr)


const str = "hello"

console.log(str[3])

const value = [1,2,3,4,5]

const red = value.reduce((acc,i)=>{
   return acc+ i
})

console.log(red)


const fruitBasket = ["apple","apple","kiwi","kiwi","kiwi","apple","orange","pineapple"]



const fruit = fruitBasket.reduce((a,curr)=>{
    if(a[curr]){
        a[curr]++
    }else{
        a[curr] = 1
    }
    return a;

},{})
console.log(fruit)



//filter method is used
const filterMethod = [1,82,43,44,54,64]


const fil = filterMethod.filter((num)=>{

    let newfil = []
   if( num > 40){
     return newfil.push(num)
   }

})

console.log(fil)


// map metheod is used

Array.prototype.Mymap = function(n){
    const container =[]

    for(let i = 0; i < this.length; i++ ){
    
         container.push(n(this[i],[i],this))
    }
    return container

}

const numbersBucket = [1,2,34,5,5]
const num = numbersBucket.Mymap((num) => {
    return num +2

})
console.log(num)


console.log()


/// obejct destructuring 


const perName = {
    name1 : "kalyan",
    name2 : "sumathi",
    boyname :{
       name3:"arathi",
    },
    girlname:{
        name4 :"arun"

    }

}
const {name1 ,name2,boyname: {name3},girlname:{name4}} = perName
console.log(name3)


function destruct({name ,age}){
  console.log(`${name} , ${age}`)

}
const per = {
    name: "kiki",
    age:21
  }
destruct(per)


console.log(Number(Boolean("4" - "5")))
console.log(Boolean(Number(3 + 7)))
console.log(Boolean(Number( 9 + 0)))

console.log(Number(String("4" + 9 )))
console.log(Number(String(4 + 9 )))
console.log(Number(Boolean(4 + 9 )))
console.log(Boolean(Boolean(4 + 9 )))
console.log(import.meta)


const ai =[...'keerthi']

console.log(ai)

console.log(parseInt('10+2'))
console.log(parseInt('7FM'))
console.log(parseInt('M7M'))
console.log(parseInt("1101",9))

console.log(isNaN('praveen'))


console.log([1,2].map(num=>{
    if(num>0) return;
    return num * 2 // [undefined,undefined]
}))

function Func(){
    return
}
console.log(Func())

console.log("1" + 5)

for( let i = 0  ; i < 5; i++){
console.log(i)
}
//practicing scope 
// let tr = 12
// tr *= "15"
// tr += "1"
// console.log(tr)


class Numbers {
  
    constructor(name,id){
      this.name = name
      this.id = id 
    }
    
    callMethod(){
      return `${this.name} and ${this.id}`
    }
    
   second(){
     console.log("second execution")
   }
  }
  
  class nums extends Numbers{
    constructor(name,id){
      super(name,id)
      this.name = name 
      this.id = id
      
    }
    third(){
      console.log("third"+ `${this.name} ${this.id}`)
    }
    }
  
  
let m = new Numbers("kki,", 900)
  const n = new nums("keerthi, ",200)
  console.log(n.third())
  console.log(n.second())
  console.log(n.callMethod())


