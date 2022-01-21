var AddButton = document.querySelector("#add-button");
var tabla = document.querySelector("tbody");
let numeroPaciente = 1;
let imc = 0;

AddButton.addEventListener('click', (event)=> {
    event.preventDefault();
    let form = document.querySelector("#add-form");
    let paciente = capturarDatosPaciente(form);
    let pacienteTr = constructorTr(paciente);
    tabla.appendChild(pacienteTr);
    count();
    form.reset();
});


let constructorTr = (paciente) => {
    //Creando Tr y Tds
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //Creando elementos html
    pacienteTr.appendChild(constructorTd(numeroPaciente  , "info-numero"));
    pacienteTr.appendChild(constructorTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(constructorTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(constructorTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(constructorTd(paciente.grasa,"info-grasa"));
    pacienteTr.appendChild(constructorTd(imc, "info-imc"));
    
    return pacienteTr;
}
let capturarDatosPaciente = (form) => {
    let paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        grasa: form.grasa.value,
    }
    return paciente;
}
let constructorTd = (date, styleClass) => {
    let td = document.createElement("td");
    td.textContent= date;
    td.classList.add(styleClass);
    return td;
}

let count = () => numeroPaciente++;

