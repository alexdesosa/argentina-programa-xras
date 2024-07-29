function pruebaValidarEdad(){
    console.assert(
        validarEdad('123 asd') === 'Este campo debe ser sólo números, sin ningún espacio entre medio y no debe estar vacio', 'pruebaValidarEdad no acepta que haya letras, algún caracter especial o algún espacio entre números'
    )
    console.assert(
        validarEdad('') === 'Este campo no puede estar vacio', 'Prueba validar edad, no permite que este vacio'
    )
}