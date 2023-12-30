
function sumar(){
    let num1 = document.getElementById("Numero1").value;
    let num2 = document.getElementById("Numero2").value;
    let texto = document.getElementById("resultado");
    texto.value =  +(num1) + +(num2);
}


function restar(){
    let num1 = document.getElementById( "Numero1" ).value;
    let num2 = document.getElementById( "Numero2" ).value;
    let texto = document.getElementById("resultado");
    texto.value  =  +(num1) - +(num2);
}


function multiplicar(){
    let num1 = document.getElementById( "Numero1" ).value;
    let num2 = document.getElementById( "Numero2" ).value;
    let texto = document.getElementById( "resultado" );

    texto.value  =  +(num1) * +(num2);
}


function dividir(){
    let num1 = document.getElementById( "Numero1" ).value;
    let num2 = document.getElementById( "Numero2" ).value;
    let texto = document.getElementById( "resultado" );

    texto.value  =  +(num1) / +(num2);
}


function potencia(){
    let num1 = document.getElementById( "Numero1" ).value;
    let num2 = document.getElementById( "Numero2" ).value;
    let texto = document.getElementById( "resultado" );

    texto.value  =  Math.pow(+(num1), +(num2));
}


function raizcuadrada(){
    let num1 = document.getElementById( "Numero1" ).value;
    let num2 = document.getElementById( "Numero2" ).value;
    let texto = document.getElementById( "resultado" );

    texto.value =  Math.sqrt(+(num2));
}



function abs(){
    let num1 = document.getElementById( "Numero1" ).value;
    let num2 = document.getElementById( "Numero2" ).value;
    let texto = document.getElementById( "resultado" );

    texto.value  =  Math.abs(+(num2));
}



function aleatorio(){
    let num1 = document.getElementById( "Numero1" ).value;
    let num2 = document.getElementById( "Numero2" ).value;
    let texto = document.getElementById( "resultado" );

    texto.value  =  Math.random()*(  +(num2) - +(num1) ) + +num1;
}


function redondear(){
    let texto = document.getElementById( "resultado" ).value;
    document.getElementById( "resultado" ).value  =  Math.round( +texto );
}


function piso(){
    let texto = document.getElementById( "resultado" ).value;
    document.getElementById( "resultado" ).value  =  Math.floor( +texto );
}


function techo(){
    let texto = document.getElementById( "resultado" ).value;
    document.getElementById( "resultado" ).value =  Math.ceil( +texto );
}