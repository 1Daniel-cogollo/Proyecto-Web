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
