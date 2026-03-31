function validarPassword(password) {
  const valida =
    password.length >= 8 &&
    /[0-9]/.test(password) &&
    /[A-Z]/.test(password);

  console.log(valida ? "Password válida" : "Password inválida"); // el ? es un if de una sola linea, sirve para los console.log
}


export default validarPassword