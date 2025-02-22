//trying to code string and number in alternative order in a array

const num = [1,2,3,4,5,6,8,9]
function numbers(str){
  let temp = [];
  let numIndex = 0;
  for(let i = 0; i < str.length; i++){
    temp.push(str[i])
        numIndex < num.length ? temp.push(num[numIndex++]) : null;
 
  }
return temp;
}

console.log(numbers(["k", "e", "e", "r", "t", "h", "i","R"]));    


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 

function numbers(strArray) {
    let temp = [];
    let numIndex = 0;
    let strIndex = 0;

    while (strIndex < strArray.length) {
       
        let combinedString = "";
        for (let j = 0; j <= numIndex && strIndex < strArray.length; j++) {
            combinedString += strArray[strIndex++];
        }
        temp.push(combinedString); 

       
        if (numIndex < nums.length) {
            temp.push(nums[numIndex++]);
        }
    }

    return temp;
}

console.log(numbers(["k", "e", "e", "r", "t", "h", "i"]));
// Outputs: [ 'k', 1, 'ee', 23, 'rth', 456, 'i' ]


