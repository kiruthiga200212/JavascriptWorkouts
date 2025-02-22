Array.prototype.myMap = function (callback){
     let container = [];
    for(let i = 0; i < this.length; i++ ){

       container.push(callback(this[i], i, this))
           

        
    }
    return container;

}

const arr =[1,2,3,4,5,6]
// const adding = arr.myMap((num,i,arr)=>{
//     return num * 2 ;

// })

console.log(adding)

//filter only the conditionis satisfied 

Array.prototype.myFilter = function(call){
 let container =[];
 for(let i =0; i < this.length ; i++) {
    if (call(this[i],i,this)) {
        container.push(this[i])
    } 
 }
 return container;

}
 const arrValue = [1,2,3,4,5,6,7,8,9,10]
 const adding = arr.myFilter((num,i,arrValue)=>{
        return (num >= 5 )

})

console.log(adding)




//reduce adding from the accumulator or initial value on the given arrray


Array.prototype.myReduce = function(cb,initialValue){
 var accumulator = initialValue
 for(let i =0; i < this.length; i++){
    accumulator = accumulator ? cb(accumulator, this[i],i,this):this[i]
 }
 return accumulator;
}

const nums = [2,5,4,6,7]
const sum = nums.myReduce((acc,curr,i,arr) =>{
    return nums.splice(acc * arr ,curr, i, 8, 9 ,0)
},20)

console.log(sum)