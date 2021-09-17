class Vector {
    constructor() {
        this.servidor = new Servidor();
        this.cliente = new Cliente();
        this.evento = null;
        this.reloj = null;
    }

    imprimir() {
        // Crea la linea en el html con los datos del vector
        const $fila = ` 
        <tr> 
            <td>${this.reloj}</td> 
            <td>${this.evento}</td> 
            <td>${this.cliente.rndLlamada}</td> 
            <td>${this.cliente.tiempoEntreLlamadas}</td> 
            <td>${this.cliente.proximaLLamada}</td>
            <td>${this.servidor.estado}</td>
            <td>${this.servidor.cola}</td>
            <td>${this.servidor.rndFinAtencion}</td>
            <td>${this.servidor.tiempoEntreFinAtencion}</td>
            <td>${this.servidor.finAtencion}</td>
        </tr>`;

        $("#tbl-simulacion tbody").append($fila);
    }

}