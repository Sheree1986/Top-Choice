
let carts = document.querySelectorAll(".addtocart");

document.getElementById('exploreBtn').addEventListener('click', exploreHandler);
document.getElementById('member').addEventListener('click',memberHandler);


function exploreHandler(){
  window.location.href = ('./pages/newarrivals.html')
  console.log(window.location)
  
}

function memberHandler() {
  window.location.href = ('./pages/accountlogin.html')
}

let products = [
  {
    name: "Red dress",
    price: 1450,
    inCart: 0,
  },
  {
    name: "White dress",
    price: 780,
    inCart: 0,
  },
  {
    name: "Black dress",
    price: 500,
    inCart: 0,
  },
  {
    name: "Yellow dress",
    price: 450,
    inCart: 0,
  },
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".counter").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".counter").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".counter").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product,
      };
    }
    cartItems[product.name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

onLoadCartNumbers();




