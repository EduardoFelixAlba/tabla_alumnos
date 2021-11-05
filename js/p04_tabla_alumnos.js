"use strict"
// recuperar los datos de las cajas de texto y de selección
const txtCuenta = document.querySelector("#no_cuenta");
const txtNombre = document.querySelector("#nombre");
const optCarrera = document.querySelector("#carrera");
const txtPromedio = document.querySelector("#promedio");
const btnGuardar = document.querySelector("#btn_guardar");

// recuperar cuerpo de la tabla
const listaAlumnos = document.querySelector("#lista_alumnos tbody");

btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();
    // crear un objeto de hacierndo referencia al alumno
    const alumno = {
        nocuenta: txtCuenta.value,
        nombre: txtNombre.value.toUpperCase(),
        carrera: optCarrera.value.toUpperCase(),
        promedio: Number(txtPromedio.value)
    }
    // agregar al alumo a la tabla
    const renglon = document.createElement("tr");
    renglon.innerHTML = `
        <td>
            <img src="img/${alumno.nocuenta}.png"
             alt="" width="100" height="100">
        </td>
        <td>${alumno.nocuenta}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.carrera}</td>
        <td>${alumno.promedio}</td>
    `;
    listaAlumnos.appendChild(renglon);
})