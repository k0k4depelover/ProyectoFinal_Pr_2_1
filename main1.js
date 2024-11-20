document.getElementById("submit-answers").addEventListener("click", evaluarExamen);

function evaluarExamen() {
    const respCorrectas = {
        dominio: "reales-excepto-mas-menos-raiz-7",
        limit: "cero",
        cuadratic: "unopuntosiete",
        derivad: "menospi",
        logs: "rdose"
    };

    let puntaje = 0;
    let preguntasRespondidas = 0;

    for (const pregunta in respCorrectas) {
        const opciones = document.getElementsByName(pregunta);
        let respondida = false;

        for (const opcion of opciones) {
            if (opcion.checked) {
                respondida = true;
                if (opcion.value === respCorrectas[pregunta]) {
                    puntaje++;
                }
                break; // Salir del loop una vez que se selecciona una respuesta
            }
        }

        if (respondida) preguntasRespondidas++;
    }

    const totalPreguntas = Object.keys(respCorrectas).length;

    // Verificar si todas las preguntas han sido respondidas
    if (preguntasRespondidas < totalPreguntas) {
        alert("Por favor, responde todas las preguntas antes de enviar.");
        return;
    }

    const notaAprobatoria = totalPreguntas * 0.6;
    const mensaje = puntaje >= notaAprobatoria
        ? `¡Felicidades! Aprobaste con ${puntaje} de ${totalPreguntas}.`
        : `Lo siento, no aprobaste. Tu puntaje es ${puntaje} de ${totalPreguntas}.`;

    alert(mensaje);
}
