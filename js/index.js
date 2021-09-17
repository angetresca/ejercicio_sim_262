function simularUnaFila() {
    // Realiza todos los pasos para la simulación de una fila
    let vector = new Vector();

    vector.imprimir();
}

function iniciarSimulacion() {
    //TODO: hacer for con los parametros de entrada
    simularUnaFila();
}

$(document).ready(function() {
    //TODO: tomar datos parámetro, validarlos y pasarselos a iniciarSimulacion()

    $("#btn-simular").click(function() {
        // Al hacer click en el botón simular, se inicia la simulación
        iniciarSimulacion();
    });

});