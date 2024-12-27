carrito = JSON.parse(localStorage.getItem("carrito")) || [];


const items = document.querySelector(".items");

items.innerHTML = "";

let total = 0;

if (carrito.length === 0) {
  items.innerHTML = "<tr><td colspan='5'>Tu carrito está vacío</td></tr>";
} else {
        carrito.forEach((item) => {

       total += item.cantidad * item.precio    
        const html = `
              <tr data-id="${item.id}">
                  <td>${item.nombre}</td>
                  <td>${item.cantidad}</td>
                  <td>$ ${item.precio}</td>
                  <td>$ ${item.cantidad * item.precio}</td>
                  <td><i><span class="material-symbols-outlined">
      delete
      </span></i></td>
              </tr>
          `;

        items.innerHTML += html;
      });
}

items.innerHTML += `<tr><td colspan="3">Total</td><td colspan="2">$ ${total}</td></tr>`;

document.querySelectorAll('.items tr td:last-child').forEach((td) => {
  td.addEventListener('click', function() {
      const id = this.closest('tr').getAttribute('data-id');
      const index = carrito.findIndex(item => item.id === id);
      if (index !== -1) {
          carrito.splice(index, 1);
          localStorage.setItem("carrito", JSON.stringify(carrito));
          // Vuelve a renderizar la tabla para reflejar cambios
          items.innerHTML = "";  // Limpia la tabla
          // Llama a la función que renderiza el carrito de nuevo
      }
  });
});
