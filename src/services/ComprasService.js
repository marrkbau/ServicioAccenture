export async function creteCompra(fechaEntrega, selectedProducts, selectedClient) {

    
    //! IMPORTANTE: La cantidad de cada producto se encuentra seteada en la propiedad "cantidad" de cada producto
    //! Cliente es un objeto
    //TODO: Logica a modificar. Crear la compra en el backend

    // Simular error
    const simularError = false;
    if (simularError) {
        throw new Error("Error al crear la compra");
    }

    await esperar(2000);
    console.log("Compra creada");
    console.log(fechaEntrega);
    console.log(selectedProducts);
    console.log(selectedClient);


}


function esperar(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Resuelto después de ${ms} milisegundos`);
      }, ms);
    });
  }