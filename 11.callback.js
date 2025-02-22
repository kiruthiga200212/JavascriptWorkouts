function callback(name){
console.log("HEllow" + name)
}

function call(arg){
    let name = "helloooo"
    arg(name)
}

call(callback)