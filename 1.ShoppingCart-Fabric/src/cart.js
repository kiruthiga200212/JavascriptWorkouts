let Body = document.querySelector("body").style.background = "black"

let labelDisplay = document.getElementById('label')
let shoppingCart = document.getElementById("shopping-cart")


let basket = JSON.parse(localStorage.getItem("data")) || []
let calc = () =>{
    let cartIconDisplay = document.getElementById('count-cart')
    cartIconDisplay.innerHTML = basket.map((x)  => x.item).reduce((x, y) => x + y, 0 );
    console.log();
}

calc()

let shopItemsData= [{
    id : "firstCart",
    name: "Red Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://wallpapers.com/images/featured/fabric-background-o65zuw4qxnpu4j2x.jpg",
    price: 899

},{id : "secondCart",
    name: "Green Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://st3.depositphotos.com/3647713/18917/i/450/depositphotos_189170764-stock-photo-beautiful-background-cloth.jpg",
    price : 599

},{
    id : "thirdCart",
    name: "Golden Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://cdn.pixabay.com/photo/2014/11/21/03/49/fabric-540136_640.jpg",
    price : 1199.36

},{
    id : "fourthCart",
    name: "Blue Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://img.freepik.com/premium-photo/natural-blue-satin-fabric-as-background-texture_492824-1445.jpg",
    price: 899

},{
    id : "fivthCart",
    name: "White Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://t4.ftcdn.net/jpg/06/11/71/63/360_F_611716322_6eT5fx5Uh65d0hRU584zsVcFG9gQVVMJ.jpg",
    price: 1990

},{
    id : "sixthCart",
    name: "Pink Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://m.media-amazon.com/images/I/91usUBGv5ZL.jpg",
    price: 999.56

},{
    id : "seventhCart",
    name: "Brown Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://images.meesho.com/images/products/342412556/b8e6y_512.webp",
    price:899
},{
    id : "eighthCart",
    name: "yellow Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://png.pngtree.com/thumb_back/fw800/background/20231228/pngtree-yellow-fabric-background-texture-image_13862418.png",
    price: 299.00
},{
    id : "lastCart",
    name: "black Fabric",
    desc: "Lorem ipsum dolor sit.",
    img : "https://png.pngtree.com/background/20230619/original/pngtree-black-fabric-texture-rendered-in-3d-picture-image_3761492.jpg",
    price:2450
}]

console.log(shopItemsData)

let TotalAmount = () => {
    if (basket.length !== 0){
        let amount = basket.map((x) =>{
            let { item, id } = x;
            let search = shopItemsData.find ((y) => y.id === id) || []
return item * Math.floor(search.price);
        })
        .reduce((x,y) => x + y, 0);
        labelDisplay.innerHTML = `<div class="total-amount"><h2>Total Amount<span> &#8377;${amount}</span></h2>
        <button type = "button" onclick= "clearCart()">Clear Cart</button>
        <button type = "button" onclick = "confirmOrder()">Confirm Order</button>`
        console.log(amount)
    }else return;
}
TotalAmount()

let generateCartItems = () => {
    if(basket.length !== 0){
        return (shoppingCart.innerHTML = basket.map((x) => {
           
            let { id, item}= x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return `

            
            <div class="cart-item">
                <img src =${search.img}>
            <div class="title-price-x">
            <div class="title-close">
            <h4>${search.name}
            <p class = "price">&#8377;${search.price}</p></h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>
             <div class ="total">
            <h3 class = "total-price">&#8377;${item * Math.floor(search.price)}</h3>
            <div class="adding" id=button-id>
                        <button onclick ="decrement(${id})"  type="button">-</button>
                        <div id=${id}  class="display" >${item}</div>
                        <button onclick ="increment(${id})"  type="button">+</button>

                    </div>
            </div>
           
            </div>
            </div>
            
     
            
            
            `
        }).join(""));
        
        
    }
    else{
        console.log("empty")
        shoppingCart.innerHTML = ``
        labelDisplay.innerHTML =`
        <div class= "emptyCart__container">
        <h1 id="cart">Cart is EMPTY!</h1>
        <a href="index.html">
        <button class ="returnBtn" type=" button"><a href = "index.html">Continue SHOPPING</a></button>
        </a>
        </div>`
    }
}

generateCartItems()
let update = (id) =>{
 
    let search = basket.find((x)=>x.id === id);
    console.log(search.id)
    document.getElementById(id).innerHTML =  search.item
    
    calc()
    
}


let increment = (id)=>{
    localStorage.setItem("data", JSON.stringify(basket));
    let selectItems = id
    
    console.log(selectItems.id)

    let search = basket.find((x) => x.id === selectItems.id);

    if (search === undefined){
        basket.push({
            id:selectItems.id,
            item :1,
        })
    }
        else{
            search.item += 1;
        }
        TotalAmount()
        generateCartItems()
      
    console.log(basket)
    update(selectItems.id)
    }


let decrement = (id)=>{
    localStorage.setItem("data", JSON.stringify(basket));
    let selectItems = id;
    let search = basket.find((x) => x.id === selectItems.id);


    if(search === undefined) return;
    else if (search.item === 0) return;
    
        else{
            search.item -= 1;
        }
        
    console.log(basket)
    generateCartItems()
   
    update(selectItems.id)
    basket = basket.filter((x) => x.item !== 0);
    }



let removeItem = (id) => {
    let selectItems = id;
    console.log(selectItems.id)
    console.log("remove")
    basket = basket.filter((x) => x.id !== selectItems.id)
    generateCartItems();
    localStorage.setItem("data",JSON.stringly(basket));
    update(selectItems.id)
}


let orderPlaced = document.getElementById("confirm-order")

function confirmOrder(){

    console.log("confirm order")
    orderPlaced.innerHTML = `<div id ="order"><img src= "https://t3.ftcdn.net/jpg/04/78/07/96/360_F_478079614_Gi8boHC9JICMDGTU8gH3YfibJKvmE8Qy.jpg"><h1>Order Confirmed<h1><button type="button"><a href= "./index.html">Continue Shopping</a></button></div>`
}

const clearCart = (()=>{
  
   
    shoppingCart.innerHTML = ``
        labelDisplay.innerHTML =` <div class ="clearCart">Cart is Cleared!`

     

})