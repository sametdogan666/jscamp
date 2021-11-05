function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi: " +productName + " adet: " +quantity)   
}

//addToCart()
//addToCart(10,"Yumurta")
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün: " +product1.productName + " - Adet: " +product1.quantity + " - Fiyat: " +product1.unitPrice + " Tl")
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)


function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Elma", unitPrice:10, quantity:5}
] 

addToCart4(products)


function add(...numbers) { //Bir fonksiyonun icinde degiskenin onune 3 nokta yazarsak bu REST Operatorudur.
    //REST Operatorunun disinda baska parametreler varsa bunlar rest operatorunden once yazilmalidir.
    let total = 0
    for(let i = 0; i < numbers.length; i++) {
       total = total + numbers[i]
    }
    console.log(total)
    
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers)) //SPREAD

// REST toparlar, SPREAD parcalar

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
// DESTRUCTURING, bir arraydeki veya objedeki alanlari farkli farkli degiskenlere atip, uygulamanin devaminda o degisken isimleri ile kullanma yontemidir
console.log(icAnadolu.name)
console.log(marmara)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)