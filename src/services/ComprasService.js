import axios from "axios";

const urlBack='http://localhost:8082/'

export async function creteCompra(fechaEntrega, selectedProducts, selectedClient) {

  const newCompra = {
    fechaEntrega,
    idCliente: selectedClient.id,
    productos: selectedProducts.map(product => ({
        idProducto: product.id,
        cantidad: product.cantidad,
    })),
  };
  console.log(newCompra);
  try {
    const response = await axios.post(`${urlBack}ordencompra`, newCompra);
    return response.data; // Devuelve el cliente creado por el backend
  } catch (error) {
    throw new Error('Error al crear el cliente: ' + error.message);
  }


  //! IMPORTANTE: La cantidad de cada producto se encuentra seteada en la propiedad "cantidad" de cada producto
  //! Cliente es un objeto

  /*const newCompra = {
      fechaEntrega,
      clienteId: selectedClient.id,
      productos: selectedProducts.map(product => ({
          productoId: product.id,
          cantidad: product.cantidad,
      })),
  };

  try {
      const response = await axios.post(`${urlBack}compras`, newCompra);
      return response.data; // Devuelve la compra creada por el backend
  } catch (error) {
      throw new Error('Error al crear la compra: ' + error.message);
  }*/
}


function esperar(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Resuelto después de ${ms} milisegundos`);
      }, ms);
    });
  }