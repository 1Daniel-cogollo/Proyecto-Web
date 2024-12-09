let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function removeItem(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function clearCart() {
    cartItems = [];
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = document.getElementById('cart');

    cartItemsDiv.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price;
        cartItemsDiv.innerHTML += `
            <div class="Cart-item">
                <span>${item.name}</span>
                <span>$${item.price}</span>
                <button onclick="removeItem(${index})">Eliminar</button>
            </div>
        `;
    });

    cartTotal.innerText = total.toFixed(2);
}

document.getElementById('clear-cart').addEventListener('click', clearCart);

document.getElementById('cart').addEventListener('click', () => {
    const cart = document.getElementById('cart');
    cart.classList.toggle('open');
});
