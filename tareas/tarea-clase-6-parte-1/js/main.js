document.querySelector("#crearBoton").onclick = function (event) {
  const $cantidadFamiliar = document.querySelector("#cantidadFamilia");
  const cantidadFamiliar = Number($cantidadFamiliar.value);

  calcularCantidadFamiliar(cantidadFamiliar);

  if (cantidadFamiliar > 0) {
    mostrarBotonCalcular();
  }
  event.preventDefault();
};

function calcularCantidadFamiliar(cantidadFamiliar) {
  const $div = document.querySelector("#familiares");
  $div.innerHTML = "";

  for (let i = 1; i <= cantidadFamiliar; i++) {
    const $input = document.createElement("input");
    const $label = document.createElement("label");
    const $br = document.createElement("br");

    $label.textContent = `Familiar N° ${i}`;

    $input.type = "number";
    $input.className = "familiar";
    $input.name = 'edad';

    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($br);
  }
}

function mostrarBotonCalcular() {
  document.querySelector("#calcularBoton").className = "";
}

function obtenerEdadesFamiliares() {
  const $inputs = document.querySelectorAll(".familiar");
  const edades = [];
  $inputs.forEach(($input) => {
    const edad = Number($input.value);
    if (!isNaN(edad) && edad !== 0) {
      edades.push(edad);
    }
  });
  return edades;
}

function mostrarResultados() {
  document.querySelector('#analisis').className = '';

  mostrarFamiliarMayor();
  mostrarFamiliarMenor();
  mostrarFamiliarPromedio();
}

document.querySelector('#calcularBoton').onclick = function(event){
  const errores = validarFormulario();
  if(errores === 0){
    mostrarResultados();
  }
  event.preventDefault();
}

function mostrarFamiliarMayor() {
  const edades = obtenerEdadesFamiliares();
  const edadMayor = calcularEdadMayor(edades);
  document.querySelector('#edadMayor').textContent = `La edad mayor es ${edadMayor}`;
}

function mostrarFamiliarMenor() {
  const edades = obtenerEdadesFamiliares();
  const edadMenor = calcularEdadMenor(edades);
  document.querySelector('#edadMenor').textContent = `La edad menor es ${edadMenor}`;
}

function mostrarFamiliarPromedio() {
  const edades = obtenerEdadesFamiliares();
  const edadPromedio = calcularEdadPromedio(edades);
  document.querySelector('#edadPromedio').textContent = `El promedio de edad es ${edadPromedio}`;
}

function calcularEdadMayor(numeros) {
  let mayorNumero = numeros[0]; 
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayorNumero) {
      mayorNumero = numeros[i];
    }
  }
  return mayorNumero;
}

function calcularEdadMenor(numeros) {
  let menorNumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
    }
  }
  return menorNumero;
}

function calcularEdadPromedio(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }
  return (acumulador / numeros.length).toFixed(2);
}

function validarEdad(edad) {
  if (edad === '') {
    return 'Este campo no puede estar vacío';
  }
  if (!/^[0-9]+$/.test(edad)) {
    return 'Este campo debe ser solo números y sin espacios';
  }
  return '';
}

function validarFormulario(event) {
  const $inputs = document.querySelectorAll('.familiar');
  const errores = [];

  $inputs.forEach(($input) => {
    const error = validarEdad($input.value);
    if (error) {
      errores.push(error);
      $input.classList.add('error');
    } else {
      $input.classList.remove('error');
    }
  });

  manejarErrores(errores);
  if (event) {
    event.preventDefault();
  }
  return errores.length;
}

function manejarErrores(errores) {
  const $errores = document.querySelector('#errores');
  $errores.innerHTML = '';

  errores.forEach((error) => {
    const $error = document.createElement('li');
    $error.innerText = error;
    $errores.appendChild($error);
  });

  if (errores.length > 0) {
    $errores.classList.remove('oculto');
  } else {
    $errores.classList.add('oculto');
  }
}

document.querySelector('#resetearBoton').onclick = function(event) {
  document.querySelector('#familiares').innerHTML = '';
  document.querySelector('#errores').innerHTML = '';
  document.querySelector('#cantidadFamilia').value = '';
  document.querySelector('#analisis').className = 'oculto';
  document.querySelector('#calcularBoton').className = 'oculto';

  const $form = document.querySelector('#calcularFamilia');
  const $inputs = $form.querySelectorAll('input');
  $inputs.forEach(input => {
    input.className = '';
  });

  event.preventDefault();
};
