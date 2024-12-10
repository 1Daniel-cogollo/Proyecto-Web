let cartItems = [];
let currentCategory = 'home';


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


function showCategory(category) {
    const sections = document.querySelectorAll('.Products');
    sections.forEach(section => section.style.display = 'none');

    switch (category) {
        case 'home':
            document.getElementById('home').style.display = 'flex';
            break;
        case 'accesorios':
            document.getElementById('accesorios').style.display = 'flex';
            break;
        case 'computadores':
            document.getElementById('computadores').style.display = 'flex';
            break;
    }
    currentCategory = category;
}


document.querySelectorAll('.Menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const category = e.target.textContent.trim().toLowerCase();
        if (category === 'inicio') showCategory('home');
        if (category === 'accesorios') showCategory('accesorios');
        if (category === 'computadores') showCategory('computadores');
    });
});


document.getElementById("clear-cart").addEventListener("click", clearCart);


document.getElementById("toggle-cart").addEventListener("click", () => {
    const cart = document.getElementById("cart");
    cart.classList.toggle("open");
});


updateCart();
showCategory('home');

