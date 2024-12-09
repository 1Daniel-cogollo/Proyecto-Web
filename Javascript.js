document.getElementById('inicioLink').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Usamos scrollIntoView para un desplazamiento suave
    document.getElementById('home').scrollIntoView({
        behavior: 'smooth',  // Desplazamiento suave
        block: 'start'       // Desplaza la sección al inicio de la ventana
    });
});

// Función para abrir la sección de detalles del producto
function openProductDetails() {
    document.getElementById('product-details').style.display = 'block';
    window.scrollTo({ top: document.getElementById('product-details').offsetTop, behavior: 'smooth' });
}

// Funciones para aumentar o disminuir la cantidad
function increaseQuantity() {
    let quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decreaseQuantity() {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

const cart = []; // Array para almacenar los productos añadidos al carrito

// Elementos del DOM para el carrito
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Añadir producto al carrito
function addToCart(productName, productPrice) {
    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCartUI();
}

// Actualizar contenido del carrito
function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = ''; // Limpiar la vista actual del carrito

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
        cartItemsDiv.appendChild(div);
    });

    cartTotalSpan.textContent = `$${total}`;
}

// Eliminar producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Vaciar carrito
document.getElementById('clear-cart').addEventListener('click', () => {
    cart.length = 0;
    updateCartUI();
});

// Añadir eventos de los productos
document.querySelectorAll('.Product').forEach(product => {
    product.addEventListener('click', () => {
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('.Product-price').textContent.replace('$', '');
        addToCart(productName, productPrice);
    });
});

// Procesar compra
document.getElementById('checkout').addEventListener('click', function () {
    alert('¡Compra realizada con éxito!');
    cart = [];
    updateCartUI();
});

