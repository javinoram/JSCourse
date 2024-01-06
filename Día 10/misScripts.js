class Animal {
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion () {
        let texto = "Perro: " +this.nombre + " - " + this.peso + "[kg] - " + this.edad + " [años] - "+ this.raza;
        return texto;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion () {
        let texto = "Gato: " +this.nombre + " - " + this.peso + "[kg] - " + this.edad + " [años] - "+ this.sexo;
        return texto;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion () {
        let texto = "Conejo: " +this.nombre + " - " + this.peso + "[kg] - " + this.edad + " [años] - "+ this.color;
        return texto;
    }
}

let animales = [ new Perro("Odin", 10, 6, "Akita"),
    new Gato("Blanquito", 6, 4, "Masculino"),
    new Conejo("Ash", 2, 1, "Negro"),
    new Conejo("Peter", 1, 2, "Blanco") ];


function MostrarAnimales(){
        let divisor = document.getElementById("animales");
    
        for (let x=0; x<=animales.length; x++){
            let nuevoElemento = crearParrafo(x);
            divisor.appendChild(nuevoElemento);
        }
    }
    
    
function crearParrafo(id){
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerText = animales[ Number(id) ].informacion();
        return nuevoParrafo;
    } 