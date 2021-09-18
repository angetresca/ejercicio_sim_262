class Cliente {
  constructor(media, relojActual) {
    this.media = media;
    this.rndLlamada = Math.random(); // Genera un random entre 0 y 1
    this.tiempoEntreLlamadas = - this.media * Math.log(1 - this.rndLlamada);
    this.proximaLLamada = relojActual + this.tiempoEntreLlamadas;
  }

  generarRandomLlamada() {
    this.rndLlamada = Math.random(); // Genera un nuevo random entre 0 y 1
  }

  calcularTiempoEntreLlamadas() {
    this.tiempoEntreLlamadas = -this.media * Math.log(1 - this.rndLlamada);
  }

  calcularProximaLlamada(relojActual) {
    this.proximaLLamada = relojActual + this.tiempoEntreLlamadas;
  }

  ejecutarLlegadaLlamada(relojActual) {
    this.generarRandomLlamada();
    this.calcularTiempoEntreLlamadas();
    this.calcularProximaLlamada(relojActual);
  }

  ejecutarFinAtencion() {
    this.rndLlamada = null;
    this.tiempoEntreLlamadas = null;
  }
}
