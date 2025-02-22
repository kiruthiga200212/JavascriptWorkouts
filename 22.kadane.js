const a = [1,-4,-9,9,-4,20,-7,-8,3]


function myFunc(n){
    var max = 0
    var strArr = 0
    var endArr = 0
 for(let i = 0;i < n.length; i++){
    var curr = 0
    for(let j = i; j < n.length; j++){
        curr += n[j]
        if(curr > max){
            max = curr;
            strArr = i;
            endArr = j;
        }
        
    }
 }
 return{
    sum:max,
   subArray:n.slice(strArr,endArr + 1)
 }


}

const res = myFunc(a)
console.log(res)
console.log("sum "+ res.sum,"subarray :"+ res.subArray)
