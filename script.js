// Select the search form element
let searchForm = document.querySelector('.search-form');

// Toggle 'active' class on search form when search button is clicked
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
// Select the navbar element
let navbar = document.querySelector('.navbar');

// Toggle 'active' class on navbar when menu button is clicked
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Select the cart items container
let cartItem = document.querySelector('.cart-items-container');

// Toggle 'active' class on cart items container when cart button is clicked
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}