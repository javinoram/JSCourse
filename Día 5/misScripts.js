/*• Comedia
    - Back to the Future - ATP
    - The Truman Show - +13
    - The Wolf of Wall Street - +16

̉• Crimen
    - No hay peliculas ATP
    - El secreto de sus ojos - +13
    - The Godfather - +16

• Drama
    - Casablanca - ATP
    - The Shawshank Redemption - +13
    - Taxi Driver - +16

• Musical
    - La La Land - ATP
    - Les Miserables - +13
    - The Rocky Horror Picture Show - +16*/

//-Rango de edades menores de 13, entre 13 y 16, y mayores de 16 
let crimenPelis;
let comediaPelis;
let dramaPelis;
let musicalPelis;



function crimen(){
    let edad = document.getElementById("edad").value;
    let recom = document.getElementById("recomendacion");

    if (+edad <= 13 ){
        recom.textContent = "No hay recomencion";
    }
    if ( +edad>13 && +edad<=16 ){
        recom.textContent = "El secreto de sus ojos";
    }
    if ( +edad>16 ){
        recom.textContent = "The Godfather";
    }
}


function drama(){
    let edad = document.getElementById("edad").value;
    let recom = document.getElementById("recomendacion");

    if (+edad <= 13 ){
        recom.textContent = "Casablanca";
    }
    if ( +edad>13 && +edad<=16 ){
        recom.textContent = "The Shawshank Redemption";
    }
    if ( +edad>16 ){
        recom.textContent = "Taxi Driver";
    }

}


function comedia(){
    let edad = document.getElementById("edad").value;
    let recom = document.getElementById("recomendacion");

    if (+edad <= 13 ){
        recom.textContent = "Back to the Future";
    }
    if ( +edad>13 && +edad<=16 ){
        recom.textContent = "The Truman Show";
    }
    if ( +edad>16 ){
        recom.textContent = "The Wolf of Wall Street";
    }

}


function musical(){
    let edad = document.getElementById("edad").value;
    let recom = document.getElementById("recomendacion");

    if (+edad <= 13 ){
        recom.textContent = "La La Land";
    }
    if ( +edad>13 && +edad<=16 ){
        recom.textContent = "Les Miserables";
    }
    if ( +edad>16 ){
        recom.textContent = "The Rocky Horror Picture Show";
    }

}