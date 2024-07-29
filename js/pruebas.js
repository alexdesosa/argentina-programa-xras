function pruebaValidarNombre(){
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter', 'pruebaValidarNombre no acepta que el campo nombre este vacio'
    )

    console.assert(
        validarNombre('asdhjlasdjiasjdhfdufhausidhfuaiosdhfuioashdfuioashdfuioashdufiaopshdufioaduhasudiofhuaisdhfioashdfuiahosduiof') === 'Este campo debe tener menos de 50 caracteres', 'El pruebaValidarNombre, no acepta que haya un mayor a 50 caractere'
    )

    console.assert(
        validarNombre('Fabricio') === '', 'pruebaValidarNombre no acepta que haya un nombre valido'
    )

    console.assert(
        validarNombre('1234asd123') === 'Este campo sólo debe tener letras', 'El validarPruebaNombre sólo acepta letras'
    )
}

function pruebaValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Este campo no puede estar vacio', 'pruebaValidarCiudad no acepta que el campo este vacio'
    )

    console.assert(
        validarCiudad('123123asd123123') === 'Este campo sólo debe tener letras', 'pruebaValidarCiudad sólo acepta letras'
    )

}

function pruebaValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter', 'Prueba validar descripcion regalo, no permite que el campo este vacio'
    )

    console.assert(
        validarDescripcionRegalo('ahsdiufhausidhfaiosdhfioashdfuiahsduifhasdpfhausoidhfuiaopshdfuioahsduifhasdasdasdasausidofhuiaosdhfuiahsdfhauisdhfuiaoshdfuiahsduiofhasiodf') === 'Este campo debe ser menos de 100 caracteres', 'Prueba validar descripcion regalo, sólo permite 100 caracteres'
    )

    console.assert(
        validarDescripcionRegalo('./asdfasd123') === 'Este campo sólo debe tener letras y números', 'Prueba validar descripción regalo, solo acepta número y letras'
    )
}

pruebaValidarCiudad();
pruebaValidarNombre();
pruebaValidarDescripcionRegalo();
