const estados = {
  LIBRE: "Libre",
  OCUPADO: "Ocupado",
};

class Servidor {
  constructor(colaMaxima, valorA, valorB) {
    this.estado = estados.LIBRE; // El servidor se crea libre
    this.cola = 0; // La cola se crea vacia
    this.colaMaxima = colaMaxima;
    this.valorA = valorA;
    this.valorB = valorB;
    this.rndFinAtencion = null;
    this.tiempoEntreFinAtencion = null;
    this.proximoFinAtencion = null;
  }

  generarRandomFinAtencion() {
    this.rndFinAtencion = Math.random(); // Genera un nuevo random entre 0 y 1
  }

  aumentarCola() {
    this.cola++; // Aumenta en 1 la cola
  }

  disminuirCola() {
    // Disminuye en 1 la cola si hay clientes esperando
    if (this.cola > 0) {
      this.cola--;
    }
  }

  ocuparServidor() {
    this.estado = estados.OCUPADO;
  }

  liberarServidor() {
    this.estado = estados.LIBRE;
  }

  calcularTiempoEntreFinAtencion() {
    this.tiempoEntreFinAtencion =
      this.valorA + this.rndFinAtencion * (this.valorB - this.valorA);
  }

  calcularProximoFinAtencion(relojActual) {
    this.proximoFinAtencion = relojActual + this.tiempoEntreFinAtencion;
  }

  ejecutarLlegadaLlamada(relojActual) {
    // Si esta libre comienza a atender, si está ocupado se fija la cola y aumenta contadores
    if (this.estado == estados.LIBRE) {
      this.ocuparServidor();
      this.disminuirCola();
      this.generarRandomFinAtencion();
      this.calcularTiempoEntreFinAtencion();
      this.calcularProximoFinAtencion(relojActual);
    } else {
      if (this.cola + 1 <= this.colaMaxima) {
        // El cliente se queda esperando en la cola.
        this.aumentarCola();
      } else {
        // El cliente se va.
        // TODO: aumentar contador clientes no atendidos
      }
    }

    // TODO: Crear y aumentar contadores en cada caso
  }

  ejecutarFinAtencion(relojActual) {
    // Si hay clientes esperando, atiende uno nuevo. Si no, libera el servidor.
    if (this.cola > 0) {
      this.ocuparServidor();
      this.disminuirCola();
      this.generarRandomFinAtencion();
      this.calcularTiempoEntreFinAtencion();
      this.calcularProximoFinAtencion(relojActual);
    } else {
      this.liberarServidor();
      this.rndFinAtencion = null;
      this.tiempoEntreFinAtencion = null;
      this.proximoFinAtencion = null;
    }
  }
}
