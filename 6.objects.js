const obj = {
    menu : ["Rice","sambar","pizza","burger"],
    orderId :1010,
    customerName :"lucy",
    orderPlaced : "pizza",
    Result(){
        return `Order number ${this.orderId} ${this.customerName} is order special ${this.orderPlaced}`

    }

}
// console.log(obj.Result())



// function with constructor


function foodFunc(num,name){
    this.name = name;
    this.num = num;
    this.display = function(){
        return ` ${num} and ${name}`
    }

}

const food = new foodFunc(101,"keerthi")
console.log(food.display())

