const eventos = {
  INICIO: "Inicio",
  LLAMADA: "Llegada Llamada",
  FIN_ATENCION: "Fin Atención",
};

function iniciarSimulacion() {
  //TODO: recibir los parametros de entrada
  const relojDesde = 0;
  const relojHasta = 2;
  const media = 1.2;
  const colaMaxima = 2;
  const valorA = 0.75;
  const valorB = 1.33;

  let vector = new Vector(relojDesde, media, colaMaxima, valorA, valorB);
  console.log(vector.reloj);
  
  while (vector.reloj >= relojDesde && vector.reloj <= relojHasta) {
    console.log(vector.reloj);
    // Si es la primer fila imprime y continua con la siguiente iteracion
    if (vector.reloj == relojDesde) {
      vector.imprimir();
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
}

$(document).ready(function () {
  //TODO: tomar datos parámetro, validarlos y pasarselos a iniciarSimulacion()

  $("#btn-simular").click(function () {
    // Al hacer click en el botón simular, se limpia la tabla y se inicia la simulación
    $("#tbl-simulacion tbody").empty();
    iniciarSimulacion();
  });
});
