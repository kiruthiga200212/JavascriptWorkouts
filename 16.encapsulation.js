class bankAccount{
    constructor(accNum,accHolderName,accBalance){
        this.accNum = accNum
        this.accHolderName = accHolderName
        this.accBalance = accBalance
    }

    ministatement(){
        return `Account Number : ${this.accNum}
Account Holder Name : ${this.accHolderName}
Account Balance : ${this.accBalance}`
    }
}

class Deposit extends bankAccount{
    constructor(accNum,accHolderName,accBalance){
        super(accNum,accHolderName,accBalance)
    }
     credit(amount){
        this.accBalance += amount
        console.log(`Your credit amount : ${amount}`)
    }
    withdraw(withdraw_Amount){
      
        if(this.accBalance >= withdraw_Amount){
            this.accBalance -= withdraw_Amount
            console.log(`Your withdraw cash amount: ${withdraw_Amount}
        Your balance:${this.accBalance}`)
        }
        else{
           console.log(`Your Saving amount: ${this.accBalance}`); console.log(`Your Withdraw Amount: ${withdraw_Amount}`);
            console.log(`"Insufficient Balance"`)
        }
        return
       
    }
     
}


const depo = new Deposit(12365479,"keerthi",100)
depo.credit(1000)
console.log(depo.ministatement())
depo.withdraw(2000)

// console.log(depo.ministatement())

