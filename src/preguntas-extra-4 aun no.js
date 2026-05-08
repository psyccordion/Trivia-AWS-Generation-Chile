/**
 * PREGUNTAS EXTRA (opcional)
 * No borres nada de data-editable.js: aqui sigues anadiendo bloques.
 *
 * Reglas:
 * - subjectId y topicId deben existir en data-editable.js O los defines aqui abajo primero.
 * - answer debe coincidir exacto con una opcion de options.
 *
 * Para un segundo archivo mas grande: copia este archivo a preguntas-extra-4.js,
 * anade otra linea <script src="./preguntas-extra-5.js"></script> en index.html (debajo de este).
 */
(function () {
  var b = window.TRIVIA_DATA;
  if (!b) {
    console.warn("TRIVIA_DATA no existe. Abre index.html y verifica que data-editable.js cargue antes.");
    return;
  }
  b.subjects = b.subjects || [];
  b.topics = b.topics || [];
  b.questions = b.questions || [];

  /* Si creas materias/topicos nuevos SOLO en este archivo, descomenta y edita:
  b.subjects.push({ id: "mi-materia", name: "Mi certificacion", active: true });
  b.topics.push({ id: "mi-materia-0", subjectId: "mi-materia", name: "0. Intro", active: true });
  */

  b.questions = b.questions.concat([

  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la razón principal por la que los archivos de registro se almacenan en el directorio '/var' en lugar de otro directorio del sistema?",
    "options": [
      "Porque es el único directorio con permisos de escritura para el Kernel",
      "Porque /var está diseñado para archivos cuyo tamaño cambia de forma rápida e impredecible",
      "Porque los archivos en /var se borran automáticamente cada vez que se reinicia el sistema",
      "Porque es un directorio cifrado que protege la privacidad de los mensajes del sistema"
    ],
    "answer": "Porque /var está diseñado para archivos cuyo tamaño cambia de forma rápida e impredecible",
    "hint": "La palabra 'var' viene de 'variable'.",
    "explanation": "El estándar de jerarquía de archivos de Linux destina /var para datos variables. Dado que los logs crecen constantemente a medida que ocurren eventos, este es el lugar ideal para evitar que llenen otras particiones críticas."
  }


  ]);
})();
