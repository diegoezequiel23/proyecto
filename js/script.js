document.addEventListener('DOMContentLoaded', () => {
  const hamburguesa = document.getElementById('hamburguesa');
  const nav = document.getElementById('nav');

  hamburguesa.addEventListener('click', () => {
      nav.classList.toggle('open');
  });
});


let productos = [];

const cargarProductos = async () => {
  try {
    const response = await fetch("./js/productos.json");
    productos = await response.json();

    mostrarProductos();
  } catch (error) {
    console.error(error);
  }
};

const mostrarProductos = () => {
  const listadoProductos = document.querySelector("#listado-productos");


  productos.forEach((producto) => {


    const html = `
        <article data-id="${producto.id}">
                 <div><img src="${producto.image}" alt="${producto.alt}"></div>
                 <p>${producto.name}</p>
                 <p>$${producto.price}</p>
                <button type="button" class="add">${producto.boton}</button>
            </article>
    `;


    listadoProductos.innerHTML += html;
  });
};

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("click", (event) => {

    if (event.target.classList.contains("add")) {

      const id = event.target.closest("article").dataset.id;
  
      const index = carrito.findIndex((item) => item.id == id);
  
      if (index == -1) {

        const elemento = productos.find((producto) => producto.id == id);
        console.log(elemento);
  

        const { name, price, image } = elemento;

        const producto = {
          id: id,
          nombre: name,
          precio: price,
          cantidad: 1,
          imagen: image
        };
  
  
        carrito.push(producto);
      } else {
        const producto = carrito[index];
        producto.cantidad++;
      }
  
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarContadorCarrito();
    }
  })

  const actualizarContadorCarrito = () => { const contador = document.querySelector("#contador"); contador.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0); };
  
  document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);

