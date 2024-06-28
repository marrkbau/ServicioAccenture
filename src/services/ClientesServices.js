import axios from 'axios';

const urlBack = 'http://localhost:8085/'

export async function getClientes() {

  
  let clientesObtenidos = await axios
  .get(`${urlBack}clientes`)
  .then((response) => response.data);

  //Con esto generamos un listado de clientes con la estructura que necesitamos
  const clientes = generarListadoClientes(clientesObtenidos);

  return clientes;
}

export async function createCliente(
  nombre,
  apellido,
  cuitDni,
  razonSocial,
  tipoCliente
) {
  //! IMPORTANTE: tipoCliente y razonSocial son nombres, no un objeto completo

  const razonSocialObj = await getRazonesSociales().then((razones) =>
    razones.find((razon) => razon.id === parseInt(razonSocial))
  );
  const tipoClienteObj = await getTipoClientes().then((tipos) =>
    tipos.find((tipo) => tipo.id === parseInt(tipoCliente))
  );
  const newCliente = {
    nombre: nombre,
    apellido: apellido,
    cuitDni: cuitDni,
    razonSocial : razonSocialObj.razonSocial, // Enviar como string
    tipoCliente: tipoClienteObj.tipoCliente, // Enviar como string
  };

  try {
    const response = await axios.post(`${urlBack}clientes`, newCliente);
    return response.data; // Devuelve el cliente creado por el backend
  } catch (error) {
    throw new Error('Error al crear el cliente: ' + error.message);
  }
}

export async function editCliente(
  id,
  nombre,
  apellido,
  cuitDni,
  razonSocial,
  tipoCliente
) {
  const razonSocialObj = await getRazonesSociales().then((razones) =>
    razones.find((razon) => razon.id === parseInt(razonSocial))
  );
  const tipoClienteObj = await getTipoClientes().then((tipos) =>
    tipos.find((tipo) => tipo.id === parseInt(tipoCliente))
  );
  const newCliente = {
    nombre: nombre,
    apellido: apellido,
    cuitDni: cuitDni,
    razonSocial : razonSocialObj.razonSocial, // Enviar como string
    tipoCliente: tipoClienteObj.tipoCliente, // Enviar como string
  };

  console.log("antes de enviar al back");
  console.log(newCliente);
  try {
    const response = await axios.put(`${urlBack}clientes/${id}`, newCliente);
    console.log("despues de enviar al back");
    console.log(newCliente);
    return response.data; // Devuelve el cliente creado por el backend
  } catch (error) {
    throw new Error('Error al editar el cliente: ' + error.message);
  }

}

export async function deleteCliente(id) {
  //TODO: Logica a modificar
  try {
    const response = await axios.delete(`${urlBack}clientes/${id}`);
    return response.data; // Devuelve el cliente creado por el backend
  } catch (error) {
    throw new Error('Error al borrar el cliente: ' + error.message);
  }

}

function generarListadoClientes(clientesObtenidos) {
  console.log(clientesObtenidos);
  return clientesObtenidos.map((cliente) => {
    return {
      //Aca se mapean los campos que necesitamos para mostrar en la tabla
      id: cliente.id,
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      puntos: cliente.puntos,
      categoria: {
        nivel: cliente.categoria.tipoCategoria.nivel,
      },
      razonSocial: {
        id: cliente.categoria.id,
        razonSocial: cliente.razonSocial,
      },
      cuitDni: cliente.cuit,
      tipoCliente: {
        tipoCliente: cliente.tipoCliente.toUpperCase(),
      },
    };
  });
}

export async function getRazonesSociales() {
  //TODO: Logica a modificar. Obtener las razones sociales del backend
  await esperar(200);
  return [
    {
      id: 1,
      razonSocial: "Persona Natural",
    },
    {
      id: 2,
      razonSocial: "Persona Juridica",
    },
    {
      id: 3,
      razonSocial: "Sociedad Anónima",
    },
    {
      id: 4,
      razonSocial: "S.R.L",
    }
  ];
}

export async function getTipoClientes() {
  //TODO: Logica a modificar. Obtener los tipos de clientes del backend
  await esperar(200);
  return [
    {
      id: 1,
      tipoCliente: "Empresa",
    },
    {
      id: 2,
      tipoCliente: "Particular",
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

function getListadoClientesManual() {
  return [
    {
      id: 1,
      nombre: "Cliente 1",
      apellido: "Apellido 1",
      razonSocial: {
        id: 1,
        razonSocial: "Razon Social 1",
      },
      cuitDni: "123456789",
      tipoCliente: {
        id: 1,
        tipoCliente: "Empresa",
      },
    },
    {
      id: 2,
      nombre: "Cliente 2",
      apellido: "Apellido 2",
      razonSocial: {
        id: 2,
        razonSocial: "Razon Social 2",
      },
      cuitDni: "29673451",
      tipoCliente: {
        id: 2,
        tipoCliente: "Particular",
      },
    },
    {
      id: 3,
      nombre: "Cliente 3",
      apellido: "Apellido 3",
      razonSocial: {
        id: 1,
        razonSocial: "Razon Social 1",
      },
      cuitDni: "218956752",
      tipoCliente: {
        id: 1,
        tipoCliente: "Empresa",
      },
    },
    {
      id: 4,
      nombre: "Cliente 4",
      apellido: "Apellido 4",
      razonSocial: {
        id: 2,
        razonSocial: "Razon Social 2",
      },
      cuitDni: "22172615",
      tipoCliente: {
        id: 2,
        tipoCliente: "Particular",
      },
    },
    {
      id: 5,
      nombre: "Cliente 5",
      apellido: "Apellido 5",
      razonSocial: {
        id: 1,
        razonSocial: "Razon Social 1",
      },
      cuitDni: "4714232",
      tipoCliente: {
        id: 1,
        tipoCliente: "Empresa",
      },
    },
  ];
}
