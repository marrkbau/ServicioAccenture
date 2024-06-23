export function getClientes() {
  const clientes = [
    {
      id: 1,
      nombre: "Cliente 1",
      apellido: "Apellido 1",
      razonSocial: "cliente1@test.com",
      cuitDni: "123456789",
      tipoCliente: "Particular",
    },
    {
      id: 2,
      nombre: "Cliente 2",
      apellido: "Apellido 2",
      razonSocial: "cliente2@test.com",
      cuitDni: "29673451",
      tipoCliente: "Empresa",
    },
    {
      id: 3,
      nombre: "Cliente 3",
      apellido: "Apellido 3",
      razonSocial: "cliente3@test.com",
      cuitDni: "218956752",
      tipoCliente: "Empresa",
    },
    {
      id: 4,
      nombre: "Cliente 4",
      apellido: "Apellido 4",
      razonSocial: "cliente4@test.com",
      cuitDni: "22172615",
      tipoCliente: "Empresa",
    },
    {
      id: 5,
      nombre: "Cliente 5",
      apellido: "Apellido 5",
      razonSocial: "cliente5@test.com",
      cuitDni: "4714232",
      tipoCliente: "Particular",
    },
  ];

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
