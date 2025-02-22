const moneyBank = []



class Money{
constructor(saving,expense){

    this.saving = saving
    this.expense = expense
}

saving(){
 return `YOUR SAVING MONEY:` 
}
expense(){
 return `YOUR MONTHLY EXPENSES IS:`
}

}

class rewards extends Money{
 rewards(){
   const save = this.saving * this.expense
    if(save){
        moneyBank.push(save)

    }
 }


}

const totalMoney = new Money(1200,522)
 const totalRewards = [new rewards(2,5),
  new rewards(2,5)]


 console.log(totalMoney.saving)
 console.log(totalMoney.expense)
 console.log(totalRewards.rewards)

 console.log(moneyBank)

