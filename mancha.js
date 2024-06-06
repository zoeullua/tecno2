class Mancha {

    constructor(grandes, finas, grises, pgGrises, pgNegras) {
      this.grandes = grandes;
      this.finas = finas;
      this.grises = grises;
      this.pgGrises = pgGrises;
     this.pgNegras = pgNegras;
    }
  
    dibujar() {
      let cualgrandes = int(random(this.grandes.length));  // elijo foto random de entre grandes
      let cualfinas = int(random(this.finas.length));  // repito dos veces
      let cualgrises = int(random(this.grises.length));


      console.log(mouseX);
      // Si mouseX > 334 = manchas grandes negras. 
      if (mouseX > 334) {
        this.pgNegras.tint(22,11,5);
        this.pgNegras.image(this.grandes[cualgrandes], random(-100, 500), random(-100, 450), 300, 300);
      }
      // < 167 = manchas finas negras.
      else if (mouseX < 167) {
        this.pgNegras.tint(22,11,5);
        this.pgNegras.image (this.finas[cualfinas], random(-100, 500), random(-100, 450), 150, 150);
      }
      // e/ 167 y 334 = manchas grises.
      else {
        this.pgGrises.tint(209, 202, 174);
        this.pgGrises.image(this.grises[cualgrises], random(-100, 500), random(-100, 450), 300, 300);
      }
    }

    moverCapas() {
      let movidoX = random(-2, 2);
      let movidoY = random(-2, 2);
    
      clear();
      
      push(); // guardo la configuración actual de dibujo
      translate(movidoX, movidoY); // desplazo
      image(this.pgGrises, 0, 0); // dibujo la capa desplazada
      pop(); // resaturo la config de dibujo
  
      translate(movidoX, movidoY);
      // dibujo la capa de negras desplazada, repito proceso
      push(); 
      image(this.pgNegras, 0, 0); 
      pop();
  }
}