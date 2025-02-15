

class Stocks {
    constructor(){
        this.stocks =[]
    }

    addStock(stockAdd){
        console.log("added")
        this.stocks.push(stockAdd)

    }
    getStocks(){
        return this.stocks
    }
    stockCount(){
        console.log("counted")
        return this.stocks.length
        
    }
  
}
class Items{
    constructor(counterNo, product){
        this.counterNo = counterNo
        this.product = product
    }
}



const stock = new Stocks()



const formEl = document.querySelector('form')


formEl.addEventListener("submit",(e) =>{
    e.preventDefault()
    rederStocks()

    const counterNumber = document.getElementById('input1').value
    const ProductName = document.getElementById('input2').value

    
    // console.log(counterNumber.value)
    // console.log(ProductName.value)

    if (counterNumber && ProductName){
        const addedStcoks = new Items(counterNumber,ProductName)

stock.addStock(addedStcoks)


    }
})


function rederStocks(){

    const renderitems = document.getElementById('displayItems')
    const countEl = document.querySelector('#stock')

    countEl.innerHTML = stock.stockCount()
    
    
    stock.getStocks().forEach(stock =>{
        
    renderitems.innerHTML += `
   
            
                <ul>
                    <li>${stock.counterNo} - ${stock.product}</li>
                    <button type="button">Remove</button>
                </ul>

                <button type="submit">Received</button>
                
           
            </div>
    `

    })


}
