const pal = function(x){
   return x<0 ? false : x === +x.toString().split("").reverse().join("")
}
 const test = pal(10)
 console.log(test)


//join methos is used
 const arr = ["a","b","c","d"]
 const check = function(a){
    return a.join("")

 }

 const joining = check(arr)
 console.log(joining)

 // ternary operator
 
 const str = "125"

function myFunc(a){
    a = 125

return a == str ? true : "Yor not giving a same input" 

}
 const ternaryCheck = myFunc(str)
 console.log(ternaryCheck)