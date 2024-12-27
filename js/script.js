let productos = [];

const cargarProductos = async () => {
  try {
    const response = await fetch("./productos.json");
    productos = await response.json();

    mostrarProductos();
  } catch (error) {
    console.error(error);
  }
};

const mostrarProductos = () => {
  const listadoProductos = document.querySelector("#listado-productos");

  listadoProductos.innerHTML = "<h2>Productos</h2>";


  productos.forEach((producto) => {


    const html = `
        <article data-id="${producto.id}">
                 <img src="${producto.image}" alt="${producto.alt}">
                 <p>${producto.name}</p>
                 <p>${producto.price}</p>
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
  

        const { name, price } = elemento;

        const producto = {
          id: id,
          nombre: name,
          precio: price,
          cantidad: 1,
        };
  
  
        carrito.push(producto);
      } else {
        const producto = carrito[index];
        producto.cantidad++;
      }
  
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  })