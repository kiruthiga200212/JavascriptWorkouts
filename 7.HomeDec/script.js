
const step1 = document.getElementById("input-form")
const step2 = document.getElementById("otpContainer")
const emailAddress = document.getElementById("email")
const submitbtn = document.getElementById("submit")
const otpInput = document.querySelectorAll("#otpContainer input")
const verifyBtn = document.getElementById("verify")

console.log(otpInput)
window.addEventListener("load", ()=>{
    step2.style.display = "none";
    
})

const validateEmail = (email) =>{
    let re= /\S+@\S+\.S=/;
    if(re.test(email)){
        submitbtn.classList.add("disable")
         
    }
    else{
        console.log("error")
    }
}

verifyBtn.addEventListener("click",() =>{
   
    inputs.forEach(inputs) 
        values += input.value;
    }
)

if (OTP == values){
    step1.style.display ="none";
    step2.style.display ="block";

}
else{
    verifyBtn.classList.add("error-shake")
    
    setTimeout() 
        verifyBtn.classList.remove("error-shake");
    
    };

const createAccount=(()=>{
    step1.style.display= "block"
   

})
