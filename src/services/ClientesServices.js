export async function getClientes() {
  //TODO: Logica a modificar
  // Se debe realizar la request al backend para obtener los clientes

  if (!localStorage.getItem("clientes")) {
    const clientes = getListadoClientesManual();
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }

  const simularError = false;
  if (simularError) {
    throw new Error("Error al obtener los clientes");
  }

  await esperar(500);

  //Estos son los clientes obtenidos de la "response"
  let clientesObtenidos = JSON.parse(localStorage.getItem("clientes"));

  //
  //Fin logicas a modificar
  //

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
  //! IMPORTANTE: tipoCliente y razonSocial son IDs, no un objeto completo

  //TODO: Logica a modificar
  // Se debe realizar la request al backend para crear el cliente

  const simularError = false;
  if (simularError) {
    throw new Error("Error al crear el cliente");
  }

  console.log("razonSocial");
  console.log(razonSocial);
  const razonSocialObj = await getRazonesSociales().then((razones) =>
    razones.find((razon) => razon.id === parseInt(razonSocial))
  );
  console.log(razonSocialObj);
  const tipoClienteObj = await getTipoClientes().then((tipos) =>
    tipos.find((tipo) => tipo.id === parseInt(tipoCliente))
  );
  const clientes = await getClientes();
  const newCliente = {
    id: clientes.length + 1,
    nombre,
    apellido,
    cuitDni,
    razonSocial: razonSocialObj,
    tipoCliente: tipoClienteObj,
  };
  clientes.push(newCliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));
  //
}

export async function editCliente(
  id,
  nombre,
  apellido,
  cuitDni,
  razonSocial,
  tipoCliente
) {
  const simularError = false;
  if (simularError) {
    throw new Error("Error al editar el cliente");
  }
  const clientes = await getClientes();
  const index = clientes.findIndex((cliente) => cliente.id === id);
  const razonSocialObj = await getRazonesSociales().then((razones) =>
    razones.find((razon) => razon.id === parseInt(razonSocial))
  );
  const tipoClienteObj = await getTipoClientes().then((tipos) =>
    tipos.find((tipo) => tipo.id === parseInt(tipoCliente))
  );
  clientes[index] = {
    id,
    nombre,
    apellido,
    razonSocial: razonSocialObj,
    cuitDni,
    tipoCliente: tipoClienteObj,
  };
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

export async function deleteCliente(id) {
  //TODO: Logica a modificar

  const simularError = false;
  if (simularError) {
    throw new Error("Error al eliminar el cliente");
  }
  const clientes = await getClientes();
  const newClientes = clientes.filter((cliente) => cliente.id !== parseInt(id));
  localStorage.setItem("clientes", JSON.stringify(newClientes));
}

function generarListadoClientes(clientesObtenidos) {
  return clientesObtenidos.map((cliente) => {
    return {
      //Aca se mapean los campos que necesitamos para mostrar en la tabla
      id: cliente.id,
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      razonSocial: {
        id: cliente.razonSocial.id,
        razonSocial: cliente.razonSocial.razonSocial,
      },
      cuitDni: cliente.cuitDni,
      tipoCliente: {
        id: cliente.tipoCliente.id,
        tipoCliente: cliente.tipoCliente.tipoCliente,
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
      razonSocial: "Razon Social 1",
    },
    {
      id: 2,
      razonSocial: "Razon Social 2",
    },
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
