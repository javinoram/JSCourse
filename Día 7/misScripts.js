

function crearTiendas(numero){
    let divisor = document.getElementById("tiendas");

    for (let x=1; x<=numero; x++){
        let nuevoElemento = crearParrafo(x);
        divisor.appendChild(nuevoElemento);
    }
}


function crearParrafo(id){
    let nuevoParrafo = document.createElement("p");

    let nuevoLabel = document.createElement("label");
    nuevoLabel.getAttribute("for", "tienda"+id);
    nuevoLabel.innerText = "Tienda "+id+" ";

    let nuevoInput = document.createElement("input");
    nuevoInput.getAttribute("id", "tienda"+id);
    nuevoInput.getAttribute("type", "number");
    nuevoInput.getAttribute("min", 0);

    nuevoParrafo.appendChild( nuevoLabel );
    nuevoParrafo.appendChild( nuevoInput );

    return nuevoParrafo;
}


function calcular(){
    let contenedor = document.getElementById("tiendas");
    let parrafoFinal = document.getElementById("parrafoSalida");

    let total = 0;
    for (let p of contenedor.children){
        total += Number(p.children[1].value);
    }

    let largo = contenedor.children.length;
    let minimo = Number(contenedor.children[0].children[1].value);
    for (let x=0;x<largo;x++){
        let numero =  Number(contenedor.children[x].children[1].value);
        if (numero <minimo){
            minimo = numero;
        }
    }

    let maximo = Number(contenedor.children[0].children[1].value);
    for (let x=0; x<largo; x++){
        let numero =  Number(contenedor.children[x].children[1].value);
        if (numero >maximo){
            maximo = numero;
        }
    }

    let numero = 0;
    for (let p of contenedor.children){
        numero = Number(p.children[1].value);
        if (numero ==maximo){
            let maximoElemento = p.children[1];
            maximoElemento.className = "mayor"
        }

        if (numero ==minimo){
            let minimoElemento = p.children[1];
            minimoElemento.className = "menor"
        }
    }

    parrafoFinal.innerText = "El total de ventas es " +total;
}