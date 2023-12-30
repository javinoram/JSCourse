
let notas = [7,1,5,6,3,4]

function listaNotas(){
    let d = document.getElementById("listatabla");
    for (let n of notas){
        let itemLista = document.createElement("li");
        itemLista.innerText = "Nota " + n +"/7";
        d.appendChild(itemLista);
    }
}

function Promedio(){
    let numeroNotas = 0;
    let promedio = 0;
    for (let n of notas){
        numeroNotas = numeroNotas+1;
        promedio = n + promedio;
    }
    promedio = promedio/numeroNotas

    let d = document.getElementById("texto");
    d.innerText = "Promedio de notas "+promedio;
}

function NotaMayor(){
    let nota_maxima = 0;
    for (let n of notas){
        if (n>nota_maxima){
            nota_maxima=n
        }
    }
    let d = document.getElementById("texto");
    d.innerText = "Nota maxima: "+nota_maxima;
}

function Aplazos(){
    for (let n of notas){
        if (n < 4){
            let d = document.getElementById("texto");
            d.innerText = "Alumno tiene aplazos";
            break;
        }
    }
}