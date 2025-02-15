let text = document.getElementById('text')
let cloudLeft = document.getElementById('cloudLeft')
let cloudRight = document.getElementById('cloudRight')
let tree = document.getElementById('tree')
let manOne = document.getElementById('man-one')
let manTwo = document.getElementById('man-two')


window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginLeft = value * 2.5 + 'px';
    cloudLeft.style.left = value * -1.5 + 'px';
    cloudRight.style.left = value * 1.5 + 'px';
    tree.style.left = value * 0.5 + 'px';
    manOne.style.marginTop = value * 3.5 + 'px';
    manOne.style.transform ="scale(0.5,0.5)" ;
    document.getElementById('bg').style.transform ="scale(1,1)"
    document.getElementById('bg').style.opacity ="0.5";    
    manTwo.style.left = value * 1.5 +'px';
})

window.addEventListener('scroll', () =>{
    let sum = window.scrollY;
manOne.style.opacity =sum * "0";
manTwo.style.opacity = "1";  

})


const bodyMain = document.querySelector('body');
bodyMain.style.background ="black";
const main = document.getElementById('container')
main.style.background = 'black';
console.log('javascript is working')