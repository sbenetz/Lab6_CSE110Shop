// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
  const myList = document.querySelector('ul');
  const myRequest = new Request('https://fakestoreapi.com/products');
  
  
  fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('data', JSON.stringify(data));
    const productContainer = document.getElementById('product-list');
    let dataString = localStorage.getItem('data');  
    data = JSON.parse(dataString);
    for(product of data){
      //custom element
      let productObj = document.createElement('product-item');
      //list inside
      let list = document.createElement('li');
      list.setAttribute('class', "product");
      //image
      let image = document.createElement('img');
      image.setAttribute('src', product.image);
      image.setAttribute('alt', product.title);
      list.appendChild(image);
      //title
      let titleObj = document.createElement('p');
      titleObj.setAttribute('class', 'title');
      titleObj.innerHTML = product.title;
      list.appendChild(titleObj);
      //price
      let priceObj = document.createElement('p');
      priceObj.setAttribute('class', 'price');
      priceObj.innerHTML = "$" + product.price;
      list.appendChild(priceObj);
      //button cart
      let button = document.createElement('button');
      button.setAttribute('id', product.title);
      button.setAttribute('onclick', "updateCart(this,0)");
      button.innerText = "Add to Cart";
      list.appendChild(button);
      productObj.root.appendChild(list);
      productContainer.appendChild(productObj);
      if(localStorage.getItem(product.title) == 1  ){
        updateCart(button,1);
      }
    }
  })
  .catch(console.error)
  
});

function updateCart(buttonElement, reload){
  let counter = document.getElementById('cart-count');
  if(buttonElement.innerText == "Remove from Cart"){
    counter.innerHTML--;
    buttonElement.innerText = "Add to Cart";
    localStorage.removeItem(buttonElement.id)
  }

  else if(buttonElement.innerHTML == "Add to Cart"){
    if(reload = 0){alert('Added to Cart!');}
    counter.innerHTML++;
    buttonElement.innerHTML = "Remove from Cart";
    localStorage.setItem(buttonElement.id, 1)
  }
  
}


