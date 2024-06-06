// ZOE ULLUA, COMISION LISANDRO. LEGAJO: 94705/3
// ENTREGA PROTOTIPO, 2 INTERACCIONES: LA UBICACION DEL MOUSE DETERMINA SI LINEAS FINAS, GRANDES O GRISES(DEFONDO), Y SI MANTENGO
// SOSTENIDO EL MOUSE TIEMBLAN LAS CAPAS DE PGRAPHICS. LA INTERACCIÓN 1 SIMULA SONIDOS AGUDOS, GRAVES, MEDIOS. LA INTERACCIÓN 2
// SIMULA LA DURACION DEL SONIDO (SI ES LARGO, TIEMBLA)


let finas = []; // contiene todos los trazos finos
let grandes = []; // contiene trazos grandes
let grises = [];// contiene trazos grises
let cantidadfinas = 7;
let cantidadgrandes = 6;
let cantidadgrises = 3;
let contadordetrazos = 17;  // Límite de manchas en pantalla
let contadordetiempo = 0;   // Inicializa el contador de tiempo
let sostenido = false;
let mancha;  // clase
let pgGrises;  // implementacion de pgraphics
let pgNegras;

// CARGO LAS FOTOS DE MANCHAS DE PINTURA. 
function preload(){

  // cargo las finas
  for( let i=0 ; i<cantidadfinas ; i++ ){
    let nombre = "data/finas"+nf(i,2)+".png";
    finas[i] = loadImage( nombre );
  }

  // cargo las grandes
  for( let i=0 ; i<cantidadgrandes ; i++ ){
    let nombre = "data/grandes"+nf(i,2)+".png";
    grandes[i] = loadImage( nombre );
  }

  // cargo las grises
  for( let i=0 ; i<cantidadgrises ; i++ ){
    let nombre = "data/grises"+nf(i,2)+".png";
    grises[i] = loadImage( nombre );
  }

}

function setup() {
  createCanvas(550, 620); // ancho parecido a las obras!!
  pgGrises = createGraphics(550, 620);
  pgNegras = createGraphics(550, 620);
  background(247, 247, 247);  // color de fondo parecido a la obra
  imageMode( CENTER );
  mancha = new Mancha(grandes, finas, grises, pgGrises, pgNegras); // inicializo mancha
  contadordetiempo = millis(); //iInicializo el contador
}

function draw() {

  // verifico si pasaron 3 seg (3000 ms) desde la última mancha y si faltan manchas para dibujar
  if (millis() - contadordetiempo >= 3000 && contadordetrazos > 0) {
    mancha.dibujar();  // dibujo las manchas
    contadordetiempo = millis(); // reinicio el contador de tiempo
    contadordetrazos--; // resto un punto al contador de manchas
  }
  
    // si se presionó el mouse más de 2 seg, activo el movimiento de las capas
  if (sostenido && millis() - contadordetiempo >= 2000) {
    mancha.moverCapas(); // activo el movimiento de las capas
  }
  console.log(sostenido);
  image(pgGrises, width / 2, height / 2); // pgGrises primero
  image(pgNegras, width / 2, height / 2); // pgNegras encima de pgGrises

}
    
 

function mousePressed() {
  sostenido = true;
  contadordetiempo = millis();  // registro el tiempo cuando se presiona el mouse
}

function mouseReleased() {
  sostenido = false;
  contadordetiempo = 0;  // reinicio el tiempo cuando se suelta el mouse
}

