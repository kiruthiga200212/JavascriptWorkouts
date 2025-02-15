let shoppingCartContainer = document.getElementById("shop")
console.log(shoppingCartContainer)

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


let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=> {
        let{id,name,desc,img,price} = x
        let search = basket.find((x)=> x.id === id) || []
        return `<div id=product-id-${id} class="shopping__items">
                    <img src =${img}>
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <h3 id="price">&#8377;${price}</h3>
                    <div class="adding" id=button-id>
                        <button onclick ="decrement(${id})"  type="button">-</button>
                        <div id=${id}  class="display" >${search.item === undefined ? 0 :search.item}</div>
                        <button onclick ="increment(${id})"  type="button">+</button>

                    </div>
                    <button type="button" id="add-cart">ADD TO CART</button>
                    
                </div>`
    }).join(""));
   

};
generateShop();


let increment = (id)=>{
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
        
    console.log(basket)
    localStorage.setItem("data", JSON.stringify(basket));
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
    
    update(selectItems.id)
    basket = basket.filter((x) => x.item !== 0);
    }


let update = (id) =>{
 
    let search = basket.find((x)=>x.id === id);
    console.log(search.id)
    document.getElementById(id).innerHTML =  search.item
    
    calc()
    
}

let calc = () =>{
    
    let cartIconDisplay = document.getElementById('count-cart')
    cartIconDisplay.innerHTML = basket.map((x)  => x.item).reduce((x, y) => x + y, 0 );
    console.log();
}
 calc()
 