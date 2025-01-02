let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const items = document.querySelector(".items");
items.innerHTML = "";
let total = 0;

document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.getElementById('hamburguesa');
    const nav = document.getElementById('nav');
  
    hamburguesa.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
  });
  
  
if (carrito.length === 0) {
    items.innerHTML = "<tr><td colspan='5'>Tu carrito está vacío</td></tr>";
} else {
    carrito.forEach((item) => {
        total += item.cantidad * item.precio;
        const html = `
            <tr data-id="${item.id}">
                
                <td>${item.nombre}</td>
                <td>
                    <button class="decrementar">-</button>
                    ${item.cantidad}
                    <button class="incrementar">+</button>
                </td>
                <td>$ ${item.precio}</td>
                <td>$ ${item.cantidad * item.precio}</td>
                <td><i><span class="material-symbols-outlined">delete</span></i></td>
            </tr>
        `;
        items.innerHTML += html;
    });
}

items.innerHTML += `<tr><td colspan="3">Total</td><td colspan="2">$ ${total}</td></tr>`;

document.querySelectorAll('.items .incrementar').forEach((button) => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        const id = row.getAttribute('data-id');
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1) {
            carrito[index].cantidad++;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();
        }
    });
});

document.querySelectorAll('.items .decrementar').forEach((button) => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        const id = row.getAttribute('data-id');
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1 && carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();
        } else if (index !== -1 && carrito[index].cantidad === 1) {
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();
        }
    });
});

document.querySelectorAll('.items tr td:last-child').forEach((td) => {
    td.addEventListener('click', function() {
        const row = this.closest('tr');
        const id = row.getAttribute('data-id');
        const index = carrito.findIndex(item => item.id === id);
        if (index !== -1) {
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            location.reload();
        }
    });
});
