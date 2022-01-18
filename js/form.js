var AddButton = document.querySelector("#add-button");
var tabla = document.querySelector("tbody");


AddButton.addEventListener('click', (event)=> {
    event.preventDefault();
    let form = document.querySelector("#add-form");
    let paciente = capturarDatosPaciente(form);
    let pacienteTr = constructorTr(paciente);
    tabla.appendChild(pacienteTr);
});

let capturarDatosPaciente = (form) => {
    let paciente = {
        numero: 1,
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        grasa: form.grasa.value
    }
    return paciente;
}

let constructorTr = (paciente) => {
     //Creando Tr y Tds
     var pacienteTr = document.createElement("tr");
     pacienteTr.classList.add("paciente");

     var numeroTd = document.createElement("td");
     numeroTd.classList.add("info-numero");

     var nombreTd = document.createElement("td");
     nombreTd.classList.add("info-nombre");

     var pesoTd = document.createElement("td");
     pesoTd.classList.add("info-peso");
     
     var alturaTd = document.createElement("td");
     alturaTd.classList.add("info-altura");

     var grasaTd = document.createElement("td");
     grasaTd.classList.add("info-grasa");

     var imcTd = document.createElement("td");
     imcTd.classList.add("info-imc");
     
     // Asignando valorees a la propiedad textContent
     
     numeroTd.textContent = paciente.numero;
     nombreTd.textContent = paciente.nombre;
     pesoTd.textContent = paciente.peso;
     alturaTd.textContent = paciente.altura;
     grasaTd.textContent = paciente.grasa;
     imcTd.textContent = imc;
     
     //Creando elementos html
     pacienteTr.appendChild(numeroTd);
     pacienteTr.appendChild(nombreTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(grasaTd);
     pacienteTr.appendChild(imcTd);
     
     return pacienteTr;
}

// var header = document.querySelector("header");
// var h2 = document.createElement('h2');
// h2.textContent = "Soy un h2";
// header.appendChild(h2);