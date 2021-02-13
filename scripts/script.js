// Script.js

window.addEventListener('DOMContentLoaded', () => {

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
      localStorage.setItem('data', JSON.stringify(data));
  })
  .catch((error) => {
    console.error('Error:', error);

  });
  
  let dataString = localStorage.getItem('data');  
  let data = JSON.parse(dataString);
  console.log(data.length);
  const productContainer = document.getElementById('product-list');

  
  for( product of data){
    let productObj = document.createElement('product-item');
    let list = document.createElement('li');
    list.innerHTML = `<button onclick="alert('Added to Cart!')">Add to Cart</button>`;
    list.setAttribute('class', "product");
    let image = document.createElement('img');
    image.setAttribute('src', product.image)
    image.setAttribute('alt', product.title)
    list.appendChild(image);
    let titleObj = document.createElement('p');
    titleObj.setAttribute('class', 'title');
    titleObj.innerHTML = product.title;
    list.appendChild(titleObj);
    let priceObj = document.createElement('p');
    priceObj.setAttribute('class', 'price');
    priceObj.innerHTML = "$" + product.price;
    list.appendChild(priceObj);
    productObj.appendChild(list);
    productContainer.appendChild(productObj);
  }

});

