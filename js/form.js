const formulario = document.getElementById("formulario");
const campos = {
    nombre: document.getElementById("nombre"),
    email: document.getElementById("email"),
    mensaje: document.getElementById("mensaje")
};

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let valido = true;

    const errores = {
        nombre: validarCampo(campos.nombre, "Ingrese su nombre", 4, "El nombre debe tener al menos 4 caracteres"),
        email: validarEmail(campos.email, "Ingrese su correo", "El correo debe incluir un @"),
        mensaje: validarCampo(campos.mensaje, "Su mensaje debe tener al menos 40 caracteres", 40, "Su mensaje debe tener al menos 40 caracteres")
    };

    for (let campo in errores) {
        if (errores[campo]) {
            valido = false;
            mostrarError(campo, errores[campo]);
        } else {
            limpiarError(campo);
        }
    }

    if (valido) {
        alert("Formulario enviado con éxito.");
        formulario.reset();
    }
});

function validarCampo(campo, mensajeVacio, longitudMinima, mensajeCorto) {
    if (campo.value.trim() === "") return mensajeVacio;
    if (campo.value.length < longitudMinima) return mensajeCorto;
    return "";
}

function validarEmail(campo, mensajeVacio, mensajeFormato) {
    if (campo.value.trim() === "") return mensajeVacio;
    if (!campo.value.includes("@")) return mensajeFormato;
    return "";
}

function mostrarError(campo, mensaje) {
    campos[campo].style.border = "1px solid red";
    document.querySelector(`#error-${campo}`).textContent = mensaje;
}

function limpiarError(campo) {
    campos[campo].style.border = "";
    document.querySelector(`#error-${campo}`).textContent = "";
}


// Acá hice el codigo mas simple en mi punto de vista en comparación al anterior commit