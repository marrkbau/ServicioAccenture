export async function login(usuario, password) {
  if(!usuario || !password) {
    return {
        success: false,
        message: "Debe completar todos los campos"
    };
  }

  if(usuario === "admin" && password === "admin") {
    return {
        success: true,
        access_token: "eyJhbGci..."
    };
  } else {
   return {
        success: false,
        message: "Usuario o contraseña incorrectos"
    };
  }

}