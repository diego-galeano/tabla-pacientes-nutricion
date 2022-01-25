// let pacienteDelete = document.querySelectorAll(".paciente");

// pacienteDelete.forEach((paciente)=> paciente.addEventListener("dblclick", function() {
    
//     this.remove()}));

let tablaPacientes = document.querySelector("#paciente-tbody")
tablaPacientes.addEventListener('dblclick',function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 200);
});