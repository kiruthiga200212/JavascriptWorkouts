let i = 12 +" this is outer let i";
var num = 23 +  " this is outer var num"


function thisFunc(){
    let i = 23;
    var num= 65;
    // let i = 34; // cannot possible to re-declare the varible.
    var num = 56
    console.log(i +  " inner i")
    console.log(num + " outer num")
}

thisFunc(console.log(i))
console.log(num)

let a = 45
console.log(global.a)

let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri)
console.log(decoded_uri)
console.log(uri)