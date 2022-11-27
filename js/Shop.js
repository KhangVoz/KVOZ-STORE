// JavaScript Document
if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}
else{
	ready();
}
function ready(){
	const removeCartsBtn = document.getElementsByClassName('cart-remove');
	for (var i = 0; i < removeCartsBtn.length; i++){
		const button = removeCartsBtn[i];
		button.addEventListener('click', removeCartsItem);
	}
	
	const quantityInput = document.getElementsByClassName('cart-quantity');
	for (var i = 0; i < quantityInput.length; i++){
		const input = quantityInput[i];
		input.addEventListener('change', quantityChanged);
	}
	
	const addCart = document.getElementsByClassName('add-cart')
	for (var i = 0; i < addCart.length; i++){
		const button = addCart[i];
		button.addEventListener('click', addCartClicked);
	}
	
	document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyBtnClicked);
}


function buyBtnClicked(){
	alert('Thanks you for your order!\nYour Order will arrive in a few days soon');
	const cartContent = document.getElementsByClassName('cart-content')[0];
	while (cartContent.hasChildNodes()){
		cartContent.removeChild(cartContent.firstChild);
	}
	updateTotal();
}


function removeCartsItem(e){
	const btnClick = e.target;
	btnClick.parentElement.remove();
	updateTotal();
}


function quantityChanged(e){
	const input = e.target;
	if (isNaN(input.value) || input.value <= 0){
		input.value = 1;
	}
	updateTotal();
}


function addCartClicked(e){
	const button = e.target;
	const shopProduct = button.parentElement.parentElement;
	const title = shopProduct.getElementsByClassName('shop-item-title')[0].innerText;
	const price = shopProduct.getElementsByClassName('shop-item-price')[0].innerText;
	const imageSrc = shopProduct.getElementsByClassName('shop-item-image')[0].src;
	addItemToCart(title, price, imageSrc);
	updateTotal();
}




function addItemToCart(title, price, imageSrc){
	var cartBox = document.createElement('div');
	cartBox.classList.add('cart-box');
	var cartItems = document.getElementsByClassName('cart-content')[0];
	var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
	
	for(var i = 0; i < cartItemsNames.length; i++){
		var cartItemm = cartItemsNames[i].innerText;
		if(cartItemm == title.toUpperCase()) {
			alert('This item is already in Your Cart');
			return;
		}
	}
	
	var cartBoxContent = `
					<img src="${imageSrc}" alt="" class="cart-img">
					<div class="detail-box">
						<div class="cart-product-title">${title}</div>
						<div class="cart-price">${price}</div>
						<input type="number" value="1" class="cart-quantity quaitity">
					</div>
					
		<!--	Remove		-->
					<i class="fa-solid fa-trash cart-remove"></i>`;
	
	cartBox.innerHTML = cartBoxContent;
	cartItems.append(cartBox);
	cartBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartsItem);
	cartBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}




function updateTotal(){
	var cartContent = document.getElementsByClassName('cart-content')[0];
	var cartBoxes = cartContent.getElementsByClassName('cart-box');
	var total = 0;
	for (var i = 0; i < cartBoxes.length; i++){
		var cartBox = cartBoxes[i] ;
		var priceElement = cartBox.getElementsByClassName('cart-price')[0];
		var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
		var price = parseFloat(priceElement.innerText.replace('$', ''));
		var quantitys =  cartBox.querySelector('.quaitity').value;
		console.log(priceElement, quantityElement, quantitys);
		total = total + (price * quantitys);
	}	
	total = Math.round(total * 100) / 100;
	document.getElementsByClassName('total-price')[0].innerText= '$' + total;
	
}











const navBar = document.getElementById('bars');
const transHeader = document.getElementById('html-body');
const removes = document.getElementById('removee');

let carts = document.getElementById('cart-s');
navBar.addEventListener('click', function(){
	transHeader.style.transform = 'translateX(0)'
	carts.classList.remove('atc')
})
removes.addEventListener('click', function(){
	transHeader.style.transform = 'translateX(-100%)'
})


