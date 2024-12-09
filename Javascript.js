let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price });
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
    const cartItemsDiv = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItemsDiv.innerHTML = "";
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price;
        cartItemsDiv.innerHTML += `
            <div class="Cart-item">
                <span>${item.name}</span>
                <span>$${item.price.toLocaleString()}</span>
                <button onclick="removeItem(${index})">Eliminar</button>
            </div>
        `;
    });

    cartTotal.textContent = total.toLocaleString();
}

document.getElementById("clear-cart").addEventListener("click", clearCart);

document.getElementById("toggle-cart").addEventListener("click", () => {
    const cart = document.getElementById("cart");
    cart.classList.toggle("open");
});
