const Time = setInterval(()=>{
    console.log("continue...")

},1000)

const timeOut = setTimeout(()=>{
    clearInterval(Time)
    console.log("Stoped.")
},3000)

const basket = [
    {
    perName : {
        numbers : [1,2,3,5,6,6,8,7],
        passName :[ "kdsf","sdaf","aee","rtefa"]

    },
    personPh : 7837582,
    money : {
        per1 : [200,200,200,500,500],
        per2 :[500,500,200,200]

    }
}
]

document.writeln(basket[0].perName.numbers[0])
document.writeln(basket[0].money.per1[4])

const moneyPer1 = basket[0].money.per1.reduce((acc,value)=> acc+ value , 0)
const moneyPer2 = basket[0].money.per2.reduce((acc,value)=> acc+ value , 0)

const totalMoney = moneyPer1 + moneyPer2

document.writeln(`for the per1 saving money:${moneyPer1}  `)
document.writeln(`for the per2 saving money:${moneyPer2}  `)

document.writeln(`Total money is: ${totalMoney}`)

if(totalMoney > 3500){
    document.writeln("your unlocked new rewards!!!!!!")

}
else{
    document.writeln("Your saving money is not enough to UNLOCK.")
}