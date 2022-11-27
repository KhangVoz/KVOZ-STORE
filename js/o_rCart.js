//// JavaScript Document
let cartIcon = document.getElementById('cartIcons');
let cart = document.getElementById('cart-s');
let closeCart = document.getElementById('close-cart');

const transHeaders = document.getElementById('html-body');

cartIcon.addEventListener('click', function(){
	cart.classList.add('atc')
	transHeaders.style.transform = 'translateX(-100%)'
});
closeCart.addEventListener('click', function(){
	cart.classList.remove('atc')
});