export function getProductos() {
  if (localStorage.getItem("productos")) {
    const productos = JSON.parse(localStorage.getItem("productos"));
    return productos;
  } else {
    const productos = [
      {
        id: 1,
        nombre: "Producto 1",
        proveedor: "Proveedor 1",
        precio: 100,
        stock: 2,
      },
      {
        id: 2,
        nombre: "Producto 2",
        proveedor: "Proveedor 2",
        precio: 200,
        stock: 1,
      },
      {
        id: 3,
        nombre: "Producto 3",
        proveedor: "Proveedor 3",
        precio: 300,
        stock: 3,
      },
      {
        id: 4,
        nombre: "Producto 4",
        proveedor: "Proveedor 4",
        precio: 400,
        stock: 4,
      },
      {
        id: 5,
        nombre: "Producto 5",
        proveedor: "Proveedor 5",
        precio: 500,
        stock: 5,
      },
    ];
    localStorage.setItem("productos", JSON.stringify(productos));
  }
  const productos = JSON.parse(localStorage.getItem("productos"));
  return productos;
}
