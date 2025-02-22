const array = [1,1,1,1,1,2,3,3,3,3,3,3,4,4,4,4]

// function nums(n){
//     for(let i =0;i < n.length - 1; i ++){
//        if(n[i] === n[i + 1]){  n.splice([i+1],1)
//          i--
//        }
//     }
//     return n
// }

// console.log(nums(array))

//without  inbuild function

function rotateNums(m){
    if(m.length === 0) return 0;
    let i = 0;
    for(var j = 1; j < m.length; j++){
        console.log(`${i}..${j}`)
        if(m[i] !== m[j]){
            i++;
            m[i] = m[j]
            
        }
      
    }
   
return i + 1;
}
console.log(rotateNums([1,1,1,2,2,3,4,5]))
