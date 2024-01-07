let usuario;

function MostrarInformacion(){
    usuario = fetch('Usuario.json', {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        },
        mode: 'cors', 
      })
    .then(respuesta => respuesta.json())
    .then( function(datos) {usuario = datos;} )
    .catch( function(error) {console.log(error);} )

    InsertarDatos( usuario )
}
    
    
function InsertarDatos( datos ){
        document.getElementById("banco").innerText = datos.banco;
        document.getElementById("sucursal").innerText = datos.sucursal;
        document.getElementById("titular").innerText = datos.titular;
        document.getElementById("nro_cuenta").innerText = datos.nro_cuenta;


        document.getElementById("USD").innerText = datos.saldo[0].monto;
        document.getElementById("EUR").innerText = datos.saldo[1].monto;
        document.getElementById("cbu").innerText = datos.cbu;
        document.getElementById("abierto").innerText = datos.abierta;
    } 