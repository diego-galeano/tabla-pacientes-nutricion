let pacientes = document.querySelectorAll(".paciente");


let calcularImc = (peso, altura) => {
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

let validarNombre = (entrada) => {
    if (entrada.length < 0)
      return true;
    else return false;
}

let validarPeso = (entrada) => {
    if (entrada >= 0 && entrada <500 )
      return true;
    else return false;
}

let validarAltura = (entrada) => {
    if (entrada >= 0 && entrada < 3)
      return true;
    else return false;
}
