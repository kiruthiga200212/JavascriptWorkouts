var one = document.getElementById("one")
var two = document.getElementById("two")

function firstFunc(callback) {
    return setTimeout(() => {
       one.style.display = "block";
        callback()
    }, 5000);
}

function secondFunc(callback) {
    return setTimeout(() => {
        two.style.display = "block";
        callback()
    }, 1000);
}



function run(){
   firstFunc(()=>{
        secondFunc(()=>{
       
            
        })
    })
}

run();


function firstDisplay(){
var firstVisible = document.getElementById("first-display");

firstVisible.innerHTML = `

<h1>Reveal First Text before callback</h1>
`


}
firstDisplay()