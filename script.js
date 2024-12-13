let cart = [];
let cartCount = 0;
let totalPrice = 0;

// Function to add products to the cart
function addToCart(productName, price) {
    // Add product to cart array
    cart.push({ name: productName, price: price });

    // Update cart count and total price
    cartCount++;
    totalPrice += price;

    // Update UI with the new cart count and total price
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('total-price').textContent = totalPrice;

    // Display the products in the cart
    displayCartItems();
}

// Function to display items in the cart
function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear any previous items

    // Loop through cart items and create list elements for each
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

// Add event listeners to all 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        // Get product name from the h3 element (product title)
        const productName = this.parentElement.querySelector('h3').textContent;

        // Get price from the p element (product price)
        const priceText = this.parentElement.querySelector('p').textContent;
        const price = parseFloat(priceText.replace('₹', '').replace(',', '')); // Remove ₹ and commas

        // Call the addToCart function with the product name and price
        addToCart(productName, price);
    });
});
document.getElementById('hamburger').addEventListener('click', function () {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
});