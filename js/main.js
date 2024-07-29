function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const comportamiento = $form.comportamiento.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  let errorNombre = validarNombre(nombre);
  let errorCiudad = validarCiudad(ciudad);
  let errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === 0;

  if(esExito){
    $form.className = 'oculto';
    document.querySelector('#exito').className = '';
    setTimeout(() => {
        window.location.href = './wishlist.html'
    }, 5000);
  }

  event.preventDefault();
}

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  } else if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  } else if (!/^[a-z]+$/i.test(nombre)) {
    return "Este campo sólo debe tener letras";
  } else {
    return "";
  }
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Este campo no puede estar vacio";
  } else if (!/^[a-z]+$/i.test(ciudad)) {
    return "Este campo sólo debe tener letras";
  } else {
    return "";
  }
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "Este campo de describir regalo debe tener al menos 1 caracter";
  } else if (descripcionRegalo.length > 100) {
    return "Este campo debe ser menos de 100 caracteres";
  } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "Este campo sólo debe tener letras y números";
  } else {
    return "";
  }
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");

  let cantidadErrores = 0;

  $errores.innerHTML = '';

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $form[key].className = "error";
      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      $form[key].className = "";
    }
  });
  return cantidadErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
