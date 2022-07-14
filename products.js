const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
];



let nav = document.createElement('nav')
let img = document.createElement('img');
img.src = "./img/brand/logo.svg"; img.alt = "Imagem da logotipo do Virtual Market de cor preta"; 
img.title="Imagem da logotipo do Virtual Market de cor preta"; nav.appendChild(img)
document.body.appendChild(nav)


let mainAll = document.createElement('main'); mainAll.classList.add('container')
document.body.appendChild(mainAll)


let sectionFruits = document.createElement('section')
sectionFruits.classList.add('products-section')

let h1Fruits = document.createElement('h1')
h1Fruits.innerText = 'Frutas'
sectionFruits.appendChild(h1Fruits)

let mainFruits = document.createElement('main')
mainFruits.classList.add('products-content')
sectionFruits.appendChild(mainFruits)

let ulFruits = document.createElement('ul')
mainFruits.appendChild(ulFruits)

let liFruits = document.createElement('li')
ulFruits.appendChild(liFruits)

mainAll.appendChild(sectionFruits)



let sectionDrinks = document.createElement('section')
sectionDrinks.classList.add('products-section')

let h1Drinks = document.createElement('h1')
h1Drinks.innerText = 'Bebidas'
sectionDrinks.appendChild(h1Drinks)

let mainDrinks = document.createElement('main')
mainDrinks.classList.add('products-content')
sectionDrinks.appendChild(mainDrinks)

let ulDrinks = document.createElement('ul')
mainDrinks.appendChild(ulDrinks)

mainAll.appendChild(sectionDrinks)


let sectionHygene = document.createElement('section')
sectionHygene.classList.add('products-section')

let h1Hygene = document.createElement('h1')
h1Hygene.innerText = 'Higiene'
sectionHygene.appendChild(h1Hygene)

let mainHygene = document.createElement('main')
mainHygene.classList.add('products-content')
sectionHygene.appendChild(mainHygene)

let ulHygene = document.createElement('ul')
mainHygene.appendChild(ulHygene)

mainAll.appendChild(sectionHygene)




for(let key in products){
  let liProduct = document.createElement('li'); 
  liProduct.classList.add('product')

  let productImage = document.createElement('img');
  productImage.classList.add('product-img')
  productImage.src = products[key].image
  liProduct.appendChild(productImage)

  let productMain = document.createElement('main'); 
  productMain.classList.add('product-main')
  liProduct.appendChild(productMain); 

  let productTitle = document.createElement('h1')
  productTitle.classList.add('product-title')
  productTitle.innerText = products[key].title

  let productCategory = document.createElement('h5')
  productCategory.classList.add('product-category')
  productCategory.innerText = products[key].category

  let productPrice = document.createElement('strong')
  productPrice.classList.add('product-price')
  productPrice.innerText = products[key].price

  productMain.append(productTitle,productCategory,productPrice)


  if(products[key].category == 'Frutas'){
    ulFruits.appendChild(liProduct)
  }else if(products[key].category == 'Bebidas'){
    ulDrinks.appendChild(liProduct)
  }else if(products[key].category == 'Higiene'){
    ulHygene.appendChild(liProduct)
  }

}