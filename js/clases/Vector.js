class Vector {
  constructor(relojActual, media, colaMaxima, valorA, valorB) {
    this.reloj = relojActual;
    this.servidor = new Servidor(colaMaxima, valorA, valorB);
    this.cliente = new Cliente(media, this.reloj);
    this.evento = eventos.INICIO;
  }

  ejecutarAccionesAnteLlegadaLlamada() {
    this.reloj = this.cliente.proximaLLamada; // pone el reloj en la hora de la llamada
    this.evento = eventos.LLAMADA;

    this.cliente.ejecutarLlegadaLlamada(this.reloj);
    this.servidor.ejecutarLlegadaLlamada(this.reloj);
  }

  ejecutarAccionesAnteFinAtencion() {
    this.reloj = this.servidor.proximoFinAtencion; // pone el reloj en la hora del fin atencion
    this.evento = eventos.FIN_ATENCION;

    this.cliente.ejecutarFinAtencion(this.reloj);
    this.servidor.ejecutarFinAtencion(this.reloj);
  }

  imprimir() {
    // Crea la linea en el html con los datos del vector
    const $fila = ` 
        <tr> 
            <td>${this.reloj != null ? this.reloj : "-"}</td> 
            <td>${this.evento != null ? this.evento : "-"}</td> 
            <td>${
              this.cliente.rndLlamada != null ? this.cliente.rndLlamada : "-"
            }</td> 
            <td>${
              this.cliente.tiempoEntreLlamadas != null
                ? this.cliente.tiempoEntreLlamadas
                : "-"
            }</td> 
            <td>${
              this.cliente.proximaLLamada != null
                ? this.cliente.proximaLLamada
                : "-"
            }</td>
            <td>${
              this.servidor.estado != null ? this.servidor.estado : "-"
            }</td>
            <td>${this.servidor.cola != null ? this.servidor.cola : "-"}</td>
            <td>${
              this.servidor.rndFinAtencion != null
                ? this.servidor.rndFinAtencion
                : "-"
            }</td>
            <td>${
              this.servidor.tiempoEntreFinAtencion != null
                ? this.servidor.tiempoEntreFinAtencion
                : "-"
            }</td>
            <td>${
              this.servidor.proximoFinAtencion != null
                ? this.servidor.proximoFinAtencion
                : "-"
            }</td>
        </tr>`;

    $("#tbl-simulacion tbody").append($fila);
  }
}
