const eventos = {
  INICIO: "Inicio",
  LLAMADA: "Llegada Llamada",
  FIN_ATENCION: "Fin Atención",
};

function iniciarSimulacion() {
  //TODO: validar los parametros de entrada
  const relojDesde = parseFloat($("#txt-desde").val());
  const relojHasta = parseFloat($("#txt-hasta").val());
  const media = parseFloat($("#txt-media").val());
  const colaMaxima = parseInt($("#txt-cola-maxima").val());
  const valorA = parseFloat($("#txt-a").val());
  const valorB = parseFloat($("#txt-b").val());

  let vector = new Vector(relojDesde, media, colaMaxima, valorA, valorB);

  let primerFila = true;

  while (vector.reloj >= relojDesde && vector.reloj <= relojHasta) {
    // Si es la primer fila imprime y continua con la siguiente iteracion
    if (primerFila === true) {
      vector.imprimir();
      primerFila = false;
      continue;
    }

    // Identifica y ejecuta el evento de la fila
    if (
      vector.cliente.proximaLLamada <= vector.servidor.proximoFinAtencion ||
      vector.servidor.proximoFinAtencion == null
    ) {
      // Llega llamada
      vector.ejecutarAccionesAnteLlegadaLlamada();
    } else {
      // Fin atención
      vector.ejecutarAccionesAnteFinAtencion();
    }

    // Imprime la fila
    vector.imprimir();
  }

  // Imprime acumuladores al finalizar todas las vueltas
  $("#resultado").text(`Cantidad clientes no atendidos: ${vector.servidor.acumuladoClientesNoAtendidos} Cantidad clientes totales: ${vector.servidor.acumuladoClientesTotales} `);
  $("#contenedor-resultado").css("display", "block");
}

$(document).ready(function () {
  $("#btn-simular").click(function () {
    // Al hacer click en el botón simular, se limpia la tabla y se inicia la simulación
    $("#tbl-simulacion tbody").empty();
    iniciarSimulacion();
  });
});
