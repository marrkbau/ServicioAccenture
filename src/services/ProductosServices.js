import axios from "axios";

const urlBack = 'http://localhost:8080/'

export async function getProductos() {

  let productosObtenidos = await axios
  .get(`${urlBack}productos`)
  .then((response) => response.data);
  let productos = generarListadoProductos(productosObtenidos);
  return productos;

  //TODO: Logica a modificar

  //let productosObtenidos = await axios
  //.get(`${urlBack}productos`)
  //.then((response) => response.data);


  // Se debe realizar la request al backend para obtener los productos
  /*
  if (!localStorage.getItem("productos")) {
    const productos = getPorductosManual();
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  const simularError = false;
  if (simularError) {
    throw new Error("Error al obtener los productos");
  }

  //Simulo una espera de 500 ms
  await esperar(500);

  //Estos son los productos obtenidos de la "response"
  let productosObtenidos = JSON.parse(localStorage.getItem("productos"));
  */

  //Genero el listado de productos
  //let productos = generarListadoProductos(productosObtenidos);
  //return productos;
}

function generarListadoProductos(productosObtenidos) {
  //Aca mapeo los productos obtenidos de la "response" a un array de productos con el formato que se necesita
  return productosObtenidos.map((producto) => ({
    id: producto.id,
    nombre: producto.nombre,
    proveedor: producto.proveedorId,
    precio: producto.precioVenta,
    stock: producto.stockActual,
    proveedor: producto.proveedorNombre,
  }));
}

function getPorductosManual() {
  return [
    {
      id: 1,
      nombre: "Producto 1",
      proveedor: {
        id: 1,
        nombre: "Proveedor 1",
      },
      precio: 100,
      stock: 2,
    },
    {
      id: 2,
      nombre: "Producto 2",
      proveedor: {
        id: 2,
        nombre: "Proveedor 2",
      },
      precio: 200,
      stock: 1,
    },
    {
      id: 3,
      nombre: "Producto 3",
      proveedor: {
        id: 3,
        nombre: "Proveedor 3",
      },
      precio: 300,
      stock: 3,
    },
    {
      id: 4,
      nombre: "Producto 4",
      proveedor: {
        id: 4,
        nombre: "Proveedor 4",
      },
      precio: 400,
      stock: 4,
    },
    {
      id: 5,
      nombre: "Producto 5",
      proveedor: {
        id: 5,
        nombre: "Proveedor 5",
      },
      precio: 500,
      stock: 5,
    },
  ];
}

function esperar(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resuelto después de ${ms} milisegundos`);
    }, ms);
  });
}