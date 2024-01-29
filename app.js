// NOMBRES DE BANDAS ALEATORIO

let palabras = ['Agibílibus','Petricor','Ataraxia','Melifluo'];
let colores = ['escarlata', 'bermellon', 'índigo', 'carmesí']
let animales = ['ajolotes', 'comadreja', 'camaleon', 'tapir'];


function crearBanda() {
    let palabra, color, animal;

    for (let i = 0; i < palabras.length; i++) {
        palabra = palabras[Math.floor(Math.random() * palabras.length)];
        color = colores[Math.floor(Math.random() * colores.length)];
        animal = animales[Math.floor(Math.random() * animales.length)];
    }
    const nombre = `${palabra} ${color} ${animal}`;

    return nombre;
}

const banda1 = crearBanda();
const banda2 = crearBanda();

console.log(`Nuestra banda se llama "${banda1}"`);
console.log(`La nuestra se llama "${banda2}"`);

console.log(Math.floor(Math.random()))

// EMOCIONES A EMOJI

// GENERADOR DE HISTORIAS ABSURDAS

const bichos = ['venteveos', 'colibrie', 'mariposas', 'hormigas','pulpos'];
const acciones = ['que escriben poesia', 'pintan con oleo', 'corren maratones', 'juegan videojuegos'];
const otrosBichos = ['serpientes magicas', 'hadas', 'perros gigantes', 'duendes'];


function crearHistoria(){
    bichoRandom = bichos[Math.floor(Math.random() * bichos.length)];
    accionesRandom = acciones[Math.floor(Math.random() * acciones.length)];
    otrosBichosRandom = otrosBichos[Math.floor(Math.random() * otrosBichos.length)];

    const historia = `Erase una vez  ${bichoRandom} ${accionesRandom}, que hablaba con ${otrosBichosRandom}.`;

    console.log(historia);

}

crearHistoria();

// CANCIONES POR DECADA

let cancionero = {
    1970:["La colina de la vida - Invisible", "Soy el mar - Invisible", "De Mi -Sui Generis"],
    1980:["Lamento Boliviano- Enanitos Verdes", "Nos siguen pegando abajo - Charly Garcia", "Esa malvada - Invisible"],
    1990:["En el borde - La maquina de hacer pajaros", "El matador - Los Rodriguez", "Ocho cuarenta - Rodrigo Bueno"],
    2000:["Nunca quise - Intoxicados", "Fuego- Intoxicados", "El loco- Babasonicos"],
    2010:["Mas o menos bien - El mató", "Fuego- Rosario Blefari"],
    2020:["La noche-  Fin del mundo" , "Profundidad - Plenamente","Todo el mal - Buenos Vampiros"]
}

function cancionesPorDecada(decada) {
    let recomendacion = cancionero[decada];
    console.log(recomendacion)

    return console.log(`Te recomendamos 3 canciones argentinas de la decada ${decada}:${recomendacion.join(' ; ')}`);

}
cancionesPorDecada(1970);

// RECETAS FUTURISTAS

let ingredientes = ["citronela", "curry","salsa de ostras", "yuzu", "mango verde","trufa blanca", "pez globo","carne wagyu", "tomates", "babosas"];
let tecnicas = ["gelificacion", "coccion al vacio","nitrolgeno liquido","destilacion", "liofilizacion","emulsificacion","esferizacion"];

function recetas(){

    const ingredienteFuturista = ingredientes[Math.floor(Math.random()* ingredientes.length)];
    const segundoIngrediente = ingredientes[Math.floor(Math.random()* ingredientes.length)];
    const tecnicaFuturista = tecnicas[Math.floor(Math.random()* tecnicas.length)];


    return console.log(`Ingredientes: 1- ${ingredienteFuturista}; 2- ${segundoIngrediente}.
                        Mezcla 500 gr de ${ingredienteFuturista} a fuego lento, quita la temperatura rapidamente con una heladera astronauta y añade ${segundoIngrediente} utilizando la tecnica de ${tecnicaFuturista}`);
}

recetas();

// PLANETAS FANTASTICOS


let coloress = ["magenta","cian","amarillo","violeta", "indigo","verde", "blanco plomo"];
let elementosQ = ["aluminio","bario","berilio","bismuto","calcio", "potasio", "azufre","helio"];
let fenomenos = ["lluvias de meteoros", "supernovas", "auroras polares", "eclipses", "cinturon de asteroides", "estrellas fugaces"];
let caracteristicas = ["anillos", "atmosferas ricas en hidrogeno", "atmosfera delgada", "sin campo matnético", "temperatura helada", "temperatura muy caliente"];

function crearPlaneta(){

    let colorDelPlaneta = coloress[Math.floor(Math.random () * coloress.length)];
    let elementoDelPlaneta = elementosQ[Math.floor(Math.random () * elementosQ.length)];
    let fenomenoDelPlaneta = fenomenos[Math.floor(Math.random () * fenomenos.length)];
    let caracteristica = caracteristicas[Math.floor(Math.random () * caracteristicas.length)];

    let planeta = {
        nombre: colorDelPlaneta + " " + elementoDelPlaneta,
        fenomeno: fenomenoDelPlaneta,
        caracteristica: caracteristica
    }

    console.log(planeta)
    return planeta;

}

crearPlaneta();