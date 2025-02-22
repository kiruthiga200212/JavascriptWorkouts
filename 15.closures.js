    function bankAccount(accountNumber,accountHolderName,accountBalance){
        let _accountNumber = accountNumber;
        let _accountHolderName = accountHolderName;
        let _accountBalance = accountBalance;

        function ShowCurrentBalance(){
            console.log(`                              `)
            console.log("..Here, Is Your Mini Statement...")
            console.log(`Account Number: ${_accountNumber}`)
            console.log(`Account Holder Name : ${_accountHolderName}`)
            console.log(`Account Balance: ${_accountBalance}`)
    }

   

    

    function deposit(amount){
        _accountBalance += amount
        console.log(` Your Cash Deposit Amount : ${amount}`)
        ShowCurrentBalance()
    }

    function withdraw(amount){
        
        if(_accountBalance >= amount){
            _accountBalance -= amount
            console.log(`Your Withdraw Amount : ${amount}`)
            ShowCurrentBalance()

        }

    else{
         console.log(`Your Saving amount : ${_accountBalance}
                Your Withdraw Amount : ${amount}
                "Insufficient Balance" `)
    }
}
    return {
        deposit :deposit,
        withdraw :withdraw
    };
    }

    const account =  bankAccount("25636589","Keerthi",2500)

    account.deposit(4000)
    account.withdraw(3500)