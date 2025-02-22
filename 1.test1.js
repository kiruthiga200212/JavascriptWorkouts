console.log(3+"5"+ 9)

var a = 2;
var a = 5;
console.log(a)


var b = 5
var b = 7
console.log(b)

// const arr =[[1,2],[3,4],[5,6]]
console.log(arr.flat(1))

//without inbuild flat 

function flatArray(arr,n){
    if(n===0) return arr;
    var res = []
    for(let i =0;i<arr.length;i++){
        if(typeof arr[i] === 'number'){
            res.push(arr[i])
        }
        else{
            res.push(...flatArray(arr[i], n-1))
        }
    }
    return res;
}

const result = flatArray(arr,1);
console.log(result)

console.log("4" + 6 *  5) //430 multiplication higher priference than 


console.log(typeof NaN) // number

console.log("5" - "3" + 6) //cohersion types //8
 
console.log("5" - 7 + 10) //12

const arr=['z','a','d','b','e']

// console.log(arr.sort())

function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++){

        let swapped = true

        for (let j = 0; j < arr.length - i - 1; j++){
            // swapping the elements
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }

        // if no elements are swapped
        // that means our array is sorted
        if(!swapped) break;
    }

    return arr
}

console.log("Before sorting: ", arr)
console.log("After sorting: ", bubbleSort(arr))


// console.log(NaN == NaN) // false
// console.log(NaN === NaN) // false

const word = " ksag jsabgjb jasbfjd ja iriewghog iehwtiqyigav"

function myFunc(){
    const count = (word) => word.trim().split(/\s+/).length;
    console.log(count(word));
    
   
}
myFunc()

function wordBox(rex){
    
     rex = rex.match(/[a-zA-Z0-9]+/gi);
    
    let largest = ""

    for(let i= 0; i< rex.length; i++){
        if(rex[i].length  > largest.length){
            largest = rex[i]
           
        }
        
    }
    return largest;
  
}

console.log(wordBox( "this is more beautiful concept in javascript " ))

function func() {
   
}


//ddelete
var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length); /* this is the length of the character.. */





