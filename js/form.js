const formulario = document.getElementById("formulario");

const nombreFormulario = document.getElementById("nombre");

const emailFormulario = document.getElementById("email");

const mensajeFormulario = document.getElementById("mensaje");

formulario.addEventListener("submit",(event) => {
    event.preventDefault();

    if(nombreFormulario.value.trim() ==="") {
        nombreFormulario.style.border = "1px solid red";
        const errorNombre = document.querySelector("#error-nombre");
        errorNombre.textContent = "Ingrese su nombre";
        return;
    }
    if(nombreFormulario.value.length < 4) {
        nombreFormulario.style.border = "1px solid red";
        const errorNombre = document.querySelector("#error-nombre");
        errorNombre.textContent = "El nombre tiene que tener al menos 4 caracteres";
        return;
    }
    if(emailFormulario.value.trim() ==="") {
        emailFormulario.style.border = "1px solid red";
        const errorNombre = document.querySelector("#error-email");
        errorNombre.textContent = "Ingrese su correo";
        return;
    }
    if(!emailFormulario.value.includes("@")) {
        emailFormulario.style.border = "1px solid red";
        const errorNombre = document.querySelector("#error-email");
        errorNombre.textContent = "El correo debe incluir un @";
        return;
    }
    if(mensajeFormulario.value.length < 40) {
        mensajeFormulario.style.border = "1px solid red";
        const errorNombre = document.querySelector("#error-mensaje");
        errorNombre.textContent = "Su mensaje debe tener al menos 40 caracteres";
        return;
    }
    alert("Formulario enviado con éxito.")

    formulario.reset();

});