const btnCargar = document.getElementById('btnCargar');
const mensaje = document.getElementById('mensaje');
const listaProductos = document.getElementById('listaProductos');
const buscador = document.getElementById('buscador');
const filtroCategoria = document.getElementById('filtroCategoria');

let productosGlobal = [];

btnCargar.addEventListener('click', cargarProductos);
buscador.addEventListener('input', filtrarProductos);
filtroCategoria.addEventListener('change', filtrarProductos);

async function cargarProductos() {
  mensaje.textContent = 'Cargando productos...';
  listaProductos.innerHTML = '';

  try {

    const respuesta = await fetch('/api/productos');

    if (!respuesta.ok) {
      throw new Error('No se pudo obtener la información');
    }

    productosGlobal = await respuesta.json();

    mensaje.textContent = 'Productos cargados correctamente';

    mostrarProductos(productosGlobal);

  } catch (error) {
    mensaje.textContent = 'Ocurrió un error al cargar los productos';
    console.error(error);
  }
}

function mostrarProductos(productos) {

  listaProductos.innerHTML = '';

  if (productos.length === 0) {
    mensaje.textContent = 'No se encontraron productos';
    return;
  }

  productos.forEach(producto => {

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    tarjeta.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      <p><strong>Categoría:</strong> ${producto.categoria}</p>
    `;

    listaProductos.appendChild(tarjeta);
  });
}

function filtrarProductos() {

  const texto = buscador.value.toLowerCase();
  const categoria = filtroCategoria.value;

  const filtrados = productosGlobal.filter(producto => {

    const coincideNombre =
      producto.nombre.toLowerCase().includes(texto);

    const coincideCategoria =
      categoria === 'todos' || producto.categoria === categoria;

    return coincideNombre && coincideCategoria;
  });

  mostrarProductos(filtrados);
}