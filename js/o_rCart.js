//// JavaScript Document
let cartIcon = document.getElementById('cartIcons');
let cart = document.getElementById('cart-s');
let closeCart = document.getElementById('close-cart');

cartIcon.addEventListener('click', function(){
	cart.classList.add('atc')
});
closeCart.addEventListener('click', function(){
	cart.classList.remove('atc')
});