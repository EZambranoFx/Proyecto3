/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Obtiene todos los elementos de producto
var products = document.getElementsByClassName("product");

// Agrega un controlador de eventos a cada producto
Array.from(products).forEach(function (product) {
    var productName = product.querySelector("h3").textContent;
    var productDescription = product.querySelector("p").textContent;

    product.addEventListener("click", function () {
        var isActive = product.classList.contains("active");

        // Quita la clase "active" de todos los productos
        Array.from(products).forEach(function (prod) {
            prod.classList.remove("active");
            prod.querySelector("img").classList.remove("selected");
        });

        if (!isActive) {
            // Agrega la clase "active" al producto seleccionado

            product.querySelector("img").classList.add("selected");
            displayProductInfo(productName, productDescription);
        } else {
            hideProductInfo();
        }
    });
});

function displayProductInfo(name, description) {
    var productInfo = document.getElementById("product-info");
    var productName = document.getElementById("product-name");
    var productDescription = document.getElementById("product-description");

    productName.textContent = name;
    productDescription.textContent = description;
    productInfo.style.display = "block";
}

function hideProductInfo() {
    var productInfo = document.getElementById("product-info");
    productInfo.style.display = "none";
}

var contador=0;
function cambiarTexto() {
    var span = document.getElementById("contador");
    contador++;
    span.textContent = contador;
}; 
