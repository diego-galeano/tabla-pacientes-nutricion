var AddButton = document.querySelector("#add-button");
AddButton.addEventListener('click', (event)=> {
    event.preventDefault();
    var form = document.querySelector("#add-form");
    var numero = 1;
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura= form.altura.value;
    var grasa = form.grasa.value;
    var imc = "";
    

    var pacienteTr = document.createElement("tr");
    var numeroTd = document.createElement("td")
    var nombreTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var grasaTd = document.createElement("td");
    var imcTd = document.createElement("td");

    numeroTd.textContent = numero;
    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    grasaTd.textContent = grasa;
    imcTd.textContent = imc;

    pacienteTr.appendChild(numeroTd);
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(grasaTd);
    pacienteTr.appendChild(imcTd);

    var tabla = document.querySelector("tbody");
    tabla.appendChild(pacienteTr);

    console.log(form.nombre.value);
    console.log(form.peso.value);
    console.log(form.altura.value);

    console.log(pacienteTr);
});

// var header = document.querySelector("header");
// var h2 = document.createElement('h2');
// h2.textContent = "Soy un h2";
// header.appendChild(h2);