const product = [
    {
        id: 0,
        image: 'images/1.png',
        title: 'Revlon Colorstay Eyeliner Pencil',
        price: 559,
    },
    {
        id: 1,
        image: 'images/2.png',
        title: "Victoria's Secret Rush Perfume",
        price: 600,
    },
    {
        id: 2,
        image: 'images/3.png',
        title: 'Matte Face Powder Refill',
        price: 140,
    },
    {
        id: 3,
        image: 'images/4.png',
        title: 'Ever Bilena All Day Liquid Foundation',
        price: 250,
    },
    {
        id: 4,
        image: 'images/5.png',
        title: "Gingham Virant Body Cream",
        price: 1350,
    },
    {
        id: 5,
        image: 'images/6.png',
        title: "Revlon Magnified Mascara",
        price: 450,
    },
    {
        id: 6,
        image: 'images/7.png',
        title: "Victoria's Secret Velvet Petals Shimmer",
        price: 795,
    },
    {
        id: 7,
        image: 'images/8.png',
        title: "Bath & Body Works Juniper Breeze",
        price: 690,
    },
    {
        id: 8,
        image: 'images/9.png',
        title: "Candy Kisses Lip Balm Duo",
        price: 450,
    },
    {
        id: 9,
        image: 'images/10.png',
        title: "CLN 23G-Maine Flatform Sandals",
        price: 1499,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Php ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}