function myFunction(str) {
    return { key: str }; // Create an object with a property 'key' set to the given string
  }
  
  // Testing the function
  console.log(myFunction('a')); 
  console.log(myFunction('z')); 
  console.log(myFunction('b'));
  

  function myfun(a,b){
    let arr = a.split('')
    console.log(arr.splice(2,4).join(""))//llowo
    console.log(arr.at(1))
return a[b-1]

  }
  console.log(myfun("helloworld","8"))
  console.log(myfun("NoComments","5"))
  console.log(myfun("a","1"))