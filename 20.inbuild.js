const arr=[1,2,1,2,3]
const arr1 =[5,6,3,9]
const final = [...arr ,...arr1]//spread
console.log(final)

function sum(...n){//rest
    return n
}
console.log(sum(...arr,...arr1,0,"hello"))

//concat
const newArr = arr.concat(arr1, arr)

console.log(newArr)

//slice
console.log(arr.slice(0,2))
//splice
console.log(arr.splice(0,2))
console.log(arr)
//fill
console.log(arr1.fill(2,3))

//findIndex
const a = arr1.findIndex((item)=>item ===2)
console.log(a)

//flat
const n = [1,2,[],[6,4],[6,[2,3],[],9],9]
n.flat(5)
console.log(n)

//reverse
console.log( n.reverse())