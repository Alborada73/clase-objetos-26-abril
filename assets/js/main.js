
function Persona (rut, nombre, apellido) {
    //estos son atributos:
    this.rut = rut
    this.nombre = nombre
    this.apellido = apellido
    this.region = region

    //estos son métodos:
    this.saludar = function() {
        let saludo = `Hola ${this.nombre} ${this.apellido})`
        if(region)(
            saludo += `ud es de $(region)`
        ) else {
            saludo += `ud no tiene region asignada`
        }
        console.log(saludo)
    }
}

//Este es el primer objeto:
var persona1 = new Persona("12423317-8" , "Yasna" , "Angulo")

//Este es el segundo objeto:
var persona2 = new Persona("1123456-0" , "Daniel" , "Sanhueza")

console.log("Persona1", persona1);
console.log("Persona2", persona2);

var persona3 = {
    rut: "12123123-0",
    nombre:"Lidia",
    apellido: "Triviño"
}
console.log("Persona3", persona3);



// Segundo ejemplo//
function Rectangulo(nombre, base, altura) {
    this.nombre = nombre
    this.base = base
    this.altura = altura
    this.calcularArea = function() {
        return this.base * this.altura
    }
}
// Fin segundo ejemplo //

const rectangulo1 = new Rectangulo("Pruebas", 10, 4)
crossOriginIsolated.log(rectangulo1)

let rectangulos = []
// Definicion de ciclos para solicitar los datos de 3 rectangulos:
for (let index = 1; index <= 2; index++) {
    alert(Por favor ingresar el rectangulo $(index)``)
    var nombre = prompt{`Ingrese el nombre del rectangulo $(index)`}
    var base = prompt{`Ingrese la base del rectangulo $(index)´}
    var altura = prompt{`Ingrese la altura del rectangulo $(index)`}

    var objetoRectangulo = new Rectangulo{nombre, base, altura}
    rectangulos.push(objetoRectangulo)
}

// console.log(rectangulo); //

rectangulo.

