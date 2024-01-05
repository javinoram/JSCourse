let Empleados = [];


function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
    this.endender = function () {alert("Automovil encendido")};
}

let autos = [ new Automovil("Chevrolet", "Fiesta", "Negro", "2016", ""),
    new Automovil("Chevrolet", "Fiesta", "Azul", "2015", ""),
    new Automovil("Chevrolet", "Fiesta", "Rojo", "2020", "") ];

function cambiarDatos( indice ){
    let nuevoDueño = document.getElementById("DueñoAuto"+indice).value;
    autos[ Number(indice) ].titular = nuevoDueño;
    alert( "Nuevo dueño ingresado" );
    limpiarCampos(indice);
}

function mostrarDatos( indice ){
    alert( texto_auto( indice ) );
    limpiarCampos(indice);
}

function texto_auto( indice ){
    let texto = "";
    for (let c in autos[ Number(indice) ]){
        texto = texto + c + ": " + autos[ Number(indice) ][c] + "\n";
    }
    return texto;
}

function limpiarCampos( indice ){
    document.getElementById("DueñoAuto"+indice).value = "";
}

function ProbarAuto( indice ){
    autos[ Number(indice) ].endender();
}