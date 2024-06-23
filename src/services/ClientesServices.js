export function getClientes() {
  if (localStorage.getItem("clientes")) {
    return JSON.parse(localStorage.getItem("clientes"));
  } else {
    const clientes = [
      {
        id: 1,
        nombre: "Cliente 1",
        apellido: "Apellido 1",
        razonSocial: "1",
        cuitDni: "123456789",
        tipoCliente: "1",
      },
      {
        id: 2,
        nombre: "Cliente 2",
        apellido: "Apellido 2",
        razonSocial: "1",
        cuitDni: "29673451",
        tipoCliente: "2",
      },
      {
        id: 3,
        nombre: "Cliente 3",
        apellido: "Apellido 3",
        razonSocial: "2",
        cuitDni: "218956752",
        tipoCliente: "1",
      },
      {
        id: 4,
        nombre: "Cliente 4",
        apellido: "Apellido 4",
        razonSocial: "2",
        cuitDni: "22172615",
        tipoCliente: "2",
      },
      {
        id: 5,
        nombre: "Cliente 5",
        apellido: "Apellido 5",
        razonSocial: "2",
        cuitDni: "4714232",
        tipoCliente: "1",
      },
    ];
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }
  const clientes = JSON.parse(localStorage.getItem("clientes"));

  return clientes;
}

export function getRazonesSociales() {
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

export function getTipoClientes() {
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


export function createCliente(nombre, apellido, razonSocial, cuitDni, tipoCliente) {
  const clientes = getClientes();
  const newCliente = {
    id: clientes.length + 1,
    nombre,
    apellido,
    razonSocial,
    cuitDni,
    tipoCliente,
  };
  clientes.push(newCliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

export function editCliente(id, nombre, apellido, razonSocial, cuitDni, tipoCliente) {
  console.log(id, nombre, apellido, razonSocial, cuitDni, tipoCliente);
  const clientes = getClientes();
  const index = clientes.findIndex((cliente) => cliente.id === id);
  clientes[index] = {
    id,
    nombre,
    apellido,
    razonSocial,
    cuitDni,
    tipoCliente,
  };
  localStorage.setItem("clientes", JSON.stringify(clientes));
}
