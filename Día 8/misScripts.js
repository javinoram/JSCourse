let Empleados = [];


function Empleado(legajo, nombre, apellido, nacimiento, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;

}

function agregarEmpleado(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let legajo = document.getElementById("legajo").value;
    let cargo = document.getElementById("cargo").value;

    let nuevoEmpleado = new Empleado(nombre, apellido, nacimiento, legajo, cargo);
    Empleados.push(nuevoEmpleado);
    alert("Empleado agregado")
    limpiarCampos();
};


function texto_empleado( empleado ){
    let texto = "";
    for (let c in empleado){
        texto = texto + c + ": " + empleado[c] + "\n";
    }
    return texto;
}

function mostrarEmpleados(){
    texto = ""
    for ( let emp of Empleados){
        texto = texto + texto_empleado( emp ) + "\n\n"
    }
    alert(texto);
};

function limpiarCampos(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("nacimiento").value = "";
    document.getElementById("legajo").value = "";
    document.getElementById("cargo").value = "";
}