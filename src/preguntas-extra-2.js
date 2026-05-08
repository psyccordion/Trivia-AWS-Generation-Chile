/**
 * PREGUNTAS EXTRA (opcional)
 * No borres nada de data-editable.js: aqui sigues anadiendo bloques.
 *
 * Reglas:
 * - subjectId y topicId deben existir en data-editable.js O los defines aqui abajo primero.
 * - answer debe coincidir exacto con una opcion de options.
 *
 * Para un segundo archivo mas grande: copia este archivo a preguntas-extra-2.js,
 * anade otra linea <script src="./preguntas-extra-3.js"></script> en index.html (debajo de este).
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
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás trabajando en un servidor basado en Red Hat Enterprise Linux y necesitas investigar un intento de acceso no autorizado. ¿Qué archivo deberías consultar?",
    "options": [
      "/var/log/auth.log",
      "/var/log/secure",
      "/var/log/kern",
      "/var/log/syslog"
    ],
    "answer": "/var/log/secure",
    "hint": "Red Hat utiliza un nombre que sugiere 'seguridad'.",
    "explanation": "En distribuciones derivadas de Red Hat (como CentOS o Amazon Linux), la información de autenticación se guarda en /var/log/secure. En Debian/Ubuntu se usa /var/log/auth.log."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando utilizarías para verificar rápidamente la fecha y hora del último inicio de sesión de un usuario específico llamado 'admin'?",
    "options": [
      "lastlog -u admin",
      "cat /var/log/lastlog | grep admin",
      "echo $LASTLOG",
      "systemctl status lastlog"
    ],
    "answer": "lastlog -u admin",
    "hint": "Es el comando específico mencionado en la lámina 11 seguido de una opción de usuario.",
    "explanation": "El comando 'lastlog' consulta la base de datos de inicios de sesión. La opción '-u' permite filtrar los resultados para un usuario específico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Se ha reportado un fallo en un controlador (driver) de hardware. ¿En qué archivo de registro es más probable que encuentres los mensajes de diagnóstico del núcleo?",
    "options": [
      "/var/log/daemon.log",
      "/var/log/boot.log",
      "/var/log/kern",
      "/var/log/syslog"
    ],
    "answer": "/var/log/kern",
    "hint": "Busca la abreviatura de 'Kernel'.",
    "explanation": "El archivo /var/log/kern (o kern.log) registra los mensajes generados directamente por el kernel de Linux, incluyendo errores de hardware y controladores."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es el propósito fundamental de la 'Rotación de registros' (log rotation)?",
    "options": [
      "Mover los logs a una base de datos SQL para su análisis",
      "Cifrar los archivos de registro antiguos para cumplir con la normativa legal",
      "Limitar el tamaño total de los registros conservados mediante el archivado de archivos fechados",
      "Borrar todos los registros cada 24 horas para mantener el disco vacío"
    ],
    "answer": "Limitar el tamaño total de los registros conservados mediante el archivado de archivos fechados",
    "hint": "Ayuda a que los archivos voluminosos no saturen el servidor.",
    "explanation": "La rotación de registros es un proceso automático que renombra, comprime y eventualmente elimina archivos de registro antiguos para que el sistema no se quede sin espacio en disco."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Analiza el siguiente comando: 'tail -f /var/log/syslog'. ¿Para qué serviría en una sesión de solución de problemas?",
    "options": [
      "Para borrar el contenido del archivo de registro del sistema",
      "Para ver las últimas líneas del log y seguir viendo nuevas entradas en tiempo real",
      "Para buscar la palabra 'error' en todo el archivo históricamente",
      "Para cambiar el nivel de registro del sistema a 'debug'"
    ],
    "answer": "Para ver las últimas líneas del log y seguir viendo nuevas entradas en tiempo real",
    "hint": "El flag '-f' viene de 'follow' (seguir).",
    "explanation": "El comando 'tail -f' es esencial para los administradores porque permite monitorear los eventos del sistema a medida que ocurren, sin tener que cerrar y abrir el archivo constantemente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un servidor Apache en una distribución Red Hat no está respondiendo. ¿Dónde buscarías los errores del servidor web?",
    "options": [
      "/var/log/apache2/error.log",
      "/var/log/httpd",
      "/var/log/daemon.log",
      "/var/log/www"
    ],
    "answer": "/var/log/httpd",
    "hint": "Es el nombre del demonio de HTTP en Red Hat.",
    "explanation": "Según la lámina 10, en distribuciones Red Hat, la información de Apache se almacena en el directorio o archivo /var/log/httpd."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué archivo de registro consultaría un administrador para verificar si una tarea programada (como un respaldo automático) se ejecutó correctamente?",
    "options": [
      "/var/log/timer.log",
      "/var/log/cron.log",
      "/var/log/daemon.log",
      "/var/log/syslog"
    ],
    "answer": "/var/log/cron.log",
    "hint": "El servicio de programación de tareas en Linux se llama 'cron'.",
    "explanation": "El archivo /var/log/cron.log registra las ejecuciones, éxitos y errores de las tareas programadas a través del demonio crond."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede con los registros antiguos durante el proceso automático de rotación?",
    "options": [
      "Se envían por correo electrónico al administrador y luego se borran",
      "Se archivan como archivos fechados (por ejemplo, syslog.1 o syslog.gz)",
      "Se fusionan en un único archivo gigante llamado /var/log/archive",
      "Se sobrescriben inmediatamente para ahorrar espacio"
    ],
    "answer": "Se archivan como archivos fechados (por ejemplo, syslog.1 o syslog.gz)",
    "hint": "Es un proceso de archivado mencionado en la lámina 12.",
    "explanation": "La rotación no borra todo de inmediato; normalmente renombra el archivo actual (syslog a syslog.1) y crea uno nuevo vacío para seguir registrando eventos recientes."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ejecutas el comando 'lastlog' sin ningún argumento ni opción, ¿qué resultado obtendrás?",
    "options": [
      "Un error de sintaxis porque falta el nombre de usuario",
      "El último inicio de sesión de la cuenta 'root' únicamente",
      "Un informe de los inicios de sesión de todos los usuarios del sistema",
      "La ubicación exacta del archivo binario de logs"
    ],
    "answer": "Un informe de los inicios de sesión de todos los usuarios del sistema",
    "hint": "Es el comportamiento por defecto del comando.",
    "explanation": "Sin parámetros, 'lastlog' muestra la lista completa de todos los usuarios definidos en el sistema y cuándo fue la última vez que accedieron (o si nunca lo han hecho)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas ver únicamente los mensajes que ocurrieron durante el proceso de encendido del servidor. ¿Cuál es el log adecuado?",
    "options": [
      "/var/log/kern",
      "/var/log/boot.log",
      "/var/log/startup",
      "/var/log/syslog"
    ],
    "answer": "/var/log/boot.log",
    "hint": "En inglés, 'inicio' o 'arranque' se dice 'boot'.",
    "explanation": "El archivo /var/log/boot.log captura los mensajes generados mientras el sistema carga los servicios iniciales durante el arranque."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En una distribución Debian, un usuario no puede iniciar sesión por SSH. ¿Qué log es el CORRECTO para investigar la falla?",
    "options": [
      "/var/log/secure",
      "/var/log/auth.log",
      "/var/log/daemon.log",
      "/var/log/maillog"
    ],
    "answer": "/var/log/auth.log",
    "hint": "Debian utiliza una abreviatura de 'authentication'.",
    "explanation": "Debian y sus derivados (como Ubuntu) centralizan los eventos de seguridad y autenticación en /var/log/auth.log."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué tipo de información se encuentra típicamente en '/var/log/daemon.log'?",
    "options": [
      "Mensajes de error del hardware de video",
      "Información sobre la ejecución de servicios en segundo plano",
      "Registros de correos electrónicos entrantes",
      "Lista de archivos borrados por el usuario"
    ],
    "answer": "Información sobre la ejecución de servicios en segundo plano",
    "hint": "En Linux, los servicios que corren por detrás se llaman 'daemons'.",
    "explanation": "Los 'daemons' son servicios que no tienen una interfaz directa con el usuario; sus actividades y errores se reportan en daemon.log."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás analizando la saturación de un disco. Descubres que los archivos de registro ocupan el 90% del espacio en '/var'. ¿Qué característica de los logs deberías ajustar?",
    "options": [
      "El comando lastlog",
      "Los niveles de registro (log levels)",
      "La velocidad del procesador",
      "El nombre del directorio /var/log"
    ],
    "answer": "Los niveles de registro (log levels)",
    "hint": "Controla qué tanto detalle se guarda.",
    "explanation": "Como indica la conclusión de la lámina 14, se puede controlar la cantidad de detalles de los registros con los niveles de registro para evitar que crezcan demasiado rápido."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Analiza el siguiente script de una sola línea: 'grep \"FAILED\" /var/log/secure | wc -l'. ¿Qué información está intentando obtener el administrador?",
    "options": [
      "Borrar todos los intentos fallidos de inicio de sesión",
      "Contar el número total de intentos de inicio de sesión fallidos",
      "Cambiar la contraseña de los usuarios que fallaron",
      "Bloquear las cuentas de usuario sospechosas"
    ],
    "answer": "Contar el número total de intentos de inicio de sesión fallidos",
    "hint": "grep busca texto y 'wc -l' cuenta líneas.",
    "explanation": "Grep busca la palabra \"FAILED\" en el archivo de seguridad y \"wc -l\" cuenta cuántas veces aparece, lo cual da el total de fallos registrados."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué archivo de registro es considerado el 'registro general del sistema' donde se guarda información que no tiene un archivo específico asignado?",
    "options": [
      "/var/log/secure",
      "/var/log/syslog",
      "/var/log/kern",
      "/var/log/boot.log"
    ],
    "answer": "/var/log/syslog",
    "hint": "Viene de 'System Log'.",
    "explanation": "El syslog es el recolector principal de mensajes del sistema y de muchas aplicaciones que no manejan sus propios archivos de registro."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede si la rotación de registros NO está configurada en un servidor de alta producción?",
    "options": [
      "El sistema funcionará más rápido al no tener que archivar nada",
      "Los archivos de registro podrían crecer hasta llenar el disco duro, provocando fallos en el sistema",
      "Los logs se enviarán automáticamente a la nube de AWS",
      "El comando lastlog dejará de funcionar"
    ],
    "answer": "Los archivos de registro podrían crecer hasta llenar el disco duro, provocando fallos en el sistema",
    "hint": "Es un problema de gestión de espacio.",
    "explanation": "Sin rotación, los archivos crecen indefinidamente. Un disco lleno impide que los servicios escriban datos, lo que suele causar bloqueos o cierres inesperados de aplicaciones."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un administrador nota que '/var/log/maillog' está vacío. ¿Qué significa esto probablemente?",
    "options": [
      "Que el servidor ha sido hackeado",
      "Que no ha habido actividad de correo electrónico o el servicio de correo no está configurado",
      "Que el disco duro está dañado",
      "Que los logs de correo se movieron a /var/log/syslog automáticamente"
    ],
    "answer": "Que no ha habido actividad de correo electrónico o el servicio de correo no está configurado",
    "hint": "Los logs solo registran eventos que ocurren.",
    "explanation": "Si no hay mensajes de correo procesados, el archivo maillog no tendrá entradas que registrar."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la utilidad de tener archivos de registro 'fechados' tras la rotación?",
    "options": [
      "Ocupar más espacio para justificar la compra de discos nuevos",
      "Permitir el análisis forense de eventos ocurridos en días o semanas anteriores",
      "Evitar que los usuarios normales lean los logs",
      "Ninguna, los archivos fechados deben borrarse inmediatamente"
    ],
    "answer": "Permitir el análisis forense de eventos ocurridos en días o semanas anteriores",
    "hint": "Se relaciona con el análisis de eventos mencionado en la lámina 12.",
    "explanation": "Archivar registros anteriores permite a los administradores investigar problemas que no fueron detectados inmediatamente pero que dejaron rastro en el pasado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el contexto de la administración de sistemas, ¿qué comando de 'investigación en internet' complementa a la gestión de logs moderna en sistemas con systemd?",
    "options": [
      "journalctl",
      "log-view",
      "readlog",
      "show-system-events"
    ],
    "answer": "journalctl",
    "hint": "Es la herramienta moderna para leer logs binarios en sistemas actuales.",
    "explanation": "Aunque el material se centra en archivos de texto en /var/log, las distribuciones modernas usan \"journalctl\" para consultar el diario del sistema (systemd journal), que complementa o reemplaza a los archivos tradicionales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ves un archivo llamado '/var/log/syslog.2.gz', ¿qué puedes deducir sobre él?",
    "options": [
      "Es un virus que está cifrando tus logs",
      "Es un archivo de registro antiguo que ha sido rotado y comprimido para ahorrar espacio",
      "Es el log principal del sistema en tiempo real",
      "Es un archivo temporal que se puede borrar sin mirar"
    ],
    "answer": "Es un archivo de registro antiguo que ha sido rotado y comprimido para ahorrar espacio",
    "hint": "La extensión '.gz' indica compresión.",
    "explanation": "La herramienta logrotate suele comprimir los logs antiguos (usando gzip) para que ocupen mucho menos espacio mientras se conservan en el sistema."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Por qué un administrador de sistemas preferiría ver el log '/var/log/kern' en lugar de '/var/log/syslog' al diagnosticar un error de memoria RAM?",
    "options": [
      "Porque syslog es solo para errores de software de usuario",
      "Porque kern es más específico y contiene menos 'ruido' de otras aplicaciones",
      "Porque kern es el único que registra la hora exacta",
      "Porque syslog no se puede abrir con el comando cat"
    ],
    "answer": "Porque kern es más específico y contiene menos 'ruido' de otras aplicaciones",
    "hint": "Es una cuestión de eficiencia en la búsqueda.",
    "explanation": "Aunque syslog puede contener copias de los mensajes del kernel, acudir directamente a kern permite filtrar toda la actividad de aplicaciones de usuario y enfocarse en los mensajes del núcleo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Analiza este comando: 'lastlog -t 7'. Según la investigación, ¿qué crees que hace la opción '-t 7'?",
    "options": [
      "Borra los logs de hace 7 días",
      "Muestra solo los inicios de sesión de los últimos 7 días",
      "Muestra los inicios de sesión de exactamente 7 usuarios",
      "Programa una tarea para el día 7 del mes"
    ],
    "answer": "Muestra solo los inicios de sesión de los últimos 7 días",
    "hint": "La '-t' suele referirse a 'time' (tiempo).",
    "explanation": "En el comando lastlog, la opción \"-t\" (days) filtra el informe para mostrar solo a los usuarios que han iniciado sesión recientemente en el número de días especificado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del comando 'logger' en Linux (investigación adicional)?",
    "options": [
      "Permite a un usuario o script añadir una entrada personalizada al log del sistema",
      "Borra todos los logs del sistema",
      "Es un alias de lastlog",
      "Muestra quién está conectado en este momento"
    ],
    "answer": "Permite a un usuario o script añadir una entrada personalizada al log del sistema",
    "hint": "Se usa mucho en scripts para dejar rastro de lo que hicieron.",
    "explanation": "El comando \"logger\" proporciona una interfaz sencilla para enviar mensajes al módulo de registro del sistema (syslog) desde la línea de comandos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "De acuerdo con las conclusiones clave, ¿qué herramienta o concepto permite que los registros sean 'manejables'?",
    "options": [
      "El comando lastlog",
      "La rotación de registros",
      "El directorio /root",
      "La eliminación manual de archivos"
    ],
    "answer": "La rotación de registros",
    "hint": "Aparece en las conclusiones de la lámina 14.",
    "explanation": "La rotación de registros es el método estándar para evitar que el volumen de datos de los logs se vuelva inmanejable para el administrador y para el hardware."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una instancia de EC2 necesita comunicarse con otros recursos dentro de la misma VPC sin salir a Internet, ¿qué dirección debería utilizar preferentemente?",
    "options": [
      "La dirección IP pública",
      "La dirección IP privada",
      "La dirección de difusión (broadcast)",
      "La dirección del enrutador predeterminado"
    ],
    "answer": "La dirección IP privada",
    "hint": "Recuerda qué tipo de dirección está aislada lógicamente del exterior.",
    "explanation": "Las direcciones IP privadas están diseñadas para el enrutamiento de tráfico interno dentro de una red privada (como una VPC), garantizando que los datos no viajen por el Internet público."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Se le asigna el rango 10.0.0.0/24 a una subred. ¿Por qué no debería asignar la dirección 10.0.0.255 a una base de datos específica?",
    "options": [
      "Porque es la dirección del enrutador",
      "Porque es una dirección de clase E experimental",
      "Porque es la dirección de difusión de la red",
      "Porque las bases de datos solo usan IPs públicas"
    ],
    "answer": "Porque es la dirección de difusión de la red",
    "hint": "Es el último valor posible en el rango de un octeto.",
    "explanation": "La última dirección de un rango IP está reservada como dirección de difusión (broadcast), utilizada para enviar mensajes a todos los hosts de esa red, por lo que no puede asignarse a un equipo individual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al convertir el número decimal 219 a binario para entender una dirección IP, ¿cuál es el resultado correcto siguiendo la tabla de potencias?",
    "options": [
      "11011011",
      "10110111",
      "11110000",
      "11001011"
    ],
    "answer": "11011011",
    "hint": "Suma los valores posicionales: 128+64+16+8+2+1.",
    "explanation": "El sistema binario utiliza potencias de 2. Para 219, activamos los bits correspondientes a 128, 64, 16, 8, 2 y 1, lo que suma exactamente 219."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador desea permitir que los usuarios accedan a un sitio web de forma segura mediante cifrado. ¿Qué puerto debe habilitar en el firewall?",
    "options": [
      "Puerto 80",
      "Puerto 22",
      "Puerto 443",
      "Puerto 3389"
    ],
    "answer": "Puerto 443",
    "hint": "Busca el estándar para el protocolo seguro de transferencia de hipertexto.",
    "explanation": "El puerto 443 está reservado para HTTPS, que utiliza protocolos criptográficos para proporcionar comunicaciones seguras a través de una red informática."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el contexto de redes, ¿qué analogía describe mejor la función de un número de puerto en un servidor con múltiples servicios?",
    "options": [
      "El número de la calle del hospital",
      "La extensión telefónica para hablar con una oficina específica",
      "El nombre del director del hospital",
      "La ciudad donde se encuentra el hospital"
    ],
    "answer": "La extensión telefónica para hablar con una oficina específica",
    "hint": "La IP llega al edificio, el puerto llega al departamento.",
    "explanation": "Mientras que la dirección IP identifica el dispositivo físico en la red, el puerto permite identificar qué aplicación o servicio específico dentro de ese dispositivo debe recibir los datos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función primordial de una máscara de subred en una red IPv4?",
    "options": [
      "Asignar nombres de dominio a las IPs",
      "Aumentar la velocidad de la fibra óptica",
      "Separar la dirección IP en porción de red y porción de host",
      "Convertir IPs privadas en IPs públicas automáticamente"
    ],
    "answer": "Separar la dirección IP en porción de red y porción de host",
    "hint": "Piensa en cómo el enrutador sabe si un destino es local o remoto.",
    "explanation": "La máscara de subred utiliza bits en '1' para la red y '0' para los hosts, permitiendo a los dispositivos determinar qué parte de la dirección identifica a la red y qué parte al equipo individual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una organización decide utilizar una máscara de subred de Clase B, ¿cuál de las siguientes representaciones decimales están usando?",
    "options": [
      "255.0.0.0",
      "255.255.255.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "answer": "255.255.0.0",
    "hint": "En la Clase B, los dos primeros octetos representan la red.",
    "explanation": "Una máscara de Clase B reserva los primeros 16 bits (dos octetos) para identificar la red, dejando los otros 16 bits para identificar hosts."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted observa la notación 192.168.1.0/24. ¿Qué indica específicamente el número '/24'?",
    "options": [
      "Que hay 24 hosts disponibles en la red",
      "Que los primeros 24 bits de la dirección son fijos (porción de red)",
      "Que la red solo funciona durante 24 horas",
      "Que el número de puerto predeterminado es el 24"
    ],
    "answer": "Que los primeros 24 bits de la dirección son fijos (porción de red)",
    "hint": "Se relaciona con la cantidad de bits 'enmascarados'.",
    "explanation": "En la notación CIDR, el sufijo después de la barra indica cuántos bits de la dirección IP pertenecen a la red. Un /24 significa que los primeros tres octetos son fijos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es una ventaja clave de utilizar subredes dentro de una red de gran tamaño?",
    "options": [
      "Eliminar la necesidad de usar direcciones IP",
      "Reducir el tráfico de red innecesario y mejorar la seguridad",
      "Permitir que todos los dispositivos tengan la misma dirección IP",
      "Hacer que el uso de enrutadores sea opcional"
    ],
    "answer": "Reducir el tráfico de red innecesario y mejorar la seguridad",
    "hint": "Dividir para reinar y proteger.",
    "explanation": "Al dividir una red grande en subredes más pequeñas, se limitan los dominios de difusión (reduciendo tráfico) y se pueden aplicar políticas de seguridad más estrictas entre diferentes grupos de hosts."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si un host A quiere comunicarse con un host B que está en una subred diferente, ¿qué componente de red es estrictamente necesario para esta comunicación?",
    "options": [
      "Un cable coaxial",
      "Un enrutador",
      "Una dirección IP de Clase E",
      "Un monitor con resolución 4K"
    ],
    "answer": "Un enrutador",
    "hint": "Es el dispositivo encargado de mover tráfico entre redes distintas.",
    "explanation": "Los hosts en la misma subred pueden hablar directamente, pero para cruzar los límites de una subred a otra, el tráfico debe pasar por un enrutador (gateway)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué sucede con las direcciones IP de Clase E en entornos de producción actuales?",
    "options": [
      "Se usan para servidores web de alto tráfico",
      "Son exclusivas para la televisión por Internet",
      "No se pueden usar porque están reservadas para fines experimentales",
      "Se asignan automáticamente a impresoras de red"
    ],
    "answer": "No se pueden usar porque están reservadas para fines experimentales",
    "hint": "Revisa la clasificación de uso especial de IPv4.",
    "explanation": "Las direcciones de Clase E están definidas por los estándares de red únicamente para investigación y experimentación, por lo que no se despliegan en redes comerciales o domésticas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En un bloque CIDR 192.168.1.0/24, ¿cuántas direcciones IP totales existen en ese rango (incluyendo las reservadas)?",
    "options": [
      "24",
      "1024",
      "256",
      "512"
    ],
    "answer": "256",
    "hint": "32 bits totales - 24 bits fijos = 8 bits flexibles (2^8).",
    "explanation": "Con 8 bits disponibles para hosts (2 a la potencia de 8), se obtienen 256 combinaciones posibles de direcciones IP."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿A qué se refiere el término 'Punto de enlace' (Endpoint) en una comunicación de red?",
    "options": [
      "A la marca del cable de red",
      "A la combinación de una dirección IP y un número de puerto",
      "Al momento en que se apaga el servidor",
      "A la velocidad máxima de descarga de Internet"
    ],
    "answer": "A la combinación de una dirección IP y un número de puerto",
    "hint": "Es la identidad completa para que una aplicación encuentre a otra.",
    "explanation": "Un punto de enlace define de forma única no solo el destino físico (IP), sino también el destino lógico (puerto) para que los datos lleguen a la aplicación correcta."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted necesita administrar remotamente un servidor Windows mediante una interfaz gráfica. ¿Qué puerto debería estar abierto por defecto?",
    "options": [
      "22 (SSH)",
      "53 (DNS)",
      "3389 (RDP)",
      "80 (HTTP)"
    ],
    "answer": "3389 (RDP)",
    "hint": "Es el protocolo de escritorio remoto.",
    "explanation": "El puerto 3389 es el puerto estándar para el Protocolo de Escritorio Remoto (RDP), utilizado por Windows para permitir sesiones gráficas remotas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al configurar una VPC en AWS, se menciona que las instancias tienen IPs públicas y privadas. ¿Cuál es el propósito principal de habilitar la IP pública?",
    "options": [
      "Permitir la comunicación con el enrutador local de la subred",
      "Permitir que la instancia sea accesible desde Internet",
      "Aumentar el almacenamiento en el disco duro",
      "Identificar la instancia dentro de la red privada aislada"
    ],
    "answer": "Permitir que la instancia sea accesible desde Internet",
    "hint": "Se asemeja a un número de teléfono que figura en la guía pública.",
    "explanation": "Las IPs públicas son enrutables en el Internet global, permitiendo que usuarios externos inicien conexiones con la instancia si las reglas de seguridad lo permiten."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la dirección IP que normalmente se reserva para el enrutador predeterminado (gateway) en una red como 10.0.0.0?",
    "options": [
      "10.0.0.0",
      "10.255.255.255",
      "10.0.0.1",
      "10.0.0.254"
    ],
    "answer": "10.0.0.1",
    "hint": "Suele ser la segunda dirección en el rango asignado.",
    "explanation": "Por convención y configuración estándar, la dirección terminada en .1 suele asignarse al enrutador que sirve de salida para los demás hosts de la red."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una aplicación de videoconferencia envía datos a múltiples participantes de forma simultánea, ¿qué tipo de direccionamiento está utilizando?",
    "options": [
      "Direccionamiento Unidifusión (Unicast)",
      "Direccionamiento Multidifusión (Multicast)",
      "Direccionamiento Experimental",
      "Direccionamiento de Clase A"
    ],
    "answer": "Direccionamiento Multidifusión (Multicast)",
    "hint": "Se dirige a un grupo de equipos de destino simultáneamente.",
    "explanation": "El multicast (Clase D en IPv4) es ideal para transmisiones de grupo como video o audio, optimizando el uso de la red al no tener que enviar una copia individual a cada host."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el sistema binario, ¿cuántos bits componen una dirección IPv4 completa?",
    "options": [
      "8 bits",
      "16 bits",
      "32 bits",
      "64 bits"
    ],
    "answer": "32 bits",
    "hint": "Son cuatro octetos.",
    "explanation": "Cada dirección IPv4 consta de 4 números decimales, y cada número representa 8 bits. 4 x 8 = 32 bits totales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la principal diferencia entre el uso de subredes y CIDR?",
    "options": [
      "Las subredes son para cables y CIDR es para Wi-Fi",
      "Las subredes se usan a nivel organizacional, mientras que CIDR se usa en niveles superiores como ISPs",
      "CIDR solo usa números decimales y las subredes solo binarios",
      "No hay diferencia, son términos exactamente iguales"
    ],
    "answer": "Las subredes se usan a nivel organizacional, mientras que CIDR se usa en niveles superiores como ISPs",
    "hint": "Considera la jerarquía de la infraestructura de Internet.",
    "explanation": "Aunque ambos dividen redes, las subredes suelen ser divisiones internas de una red corporativa, mientras que CIDR es un sistema global que permite una asignación de IPs más eficiente en Internet."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted desea resolver un nombre de dominio (como google.com) a una dirección IP. ¿A qué puerto del servidor DNS se enviará la consulta?",
    "options": [
      "Puerto 22",
      "Puerto 443",
      "Puerto 53",
      "Puerto 80"
    ],
    "answer": "Puerto 53",
    "hint": "Es el puerto estándar para el Sistema de Nombres de Dominio.",
    "explanation": "El puerto 53 es el punto de enlace universal para las consultas de DNS, permitiendo la traducción de nombres legibles por humanos a direcciones IP."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al diseñar una red, ¿por qué la dirección '0' de un octeto de host no se asigna a una computadora?",
    "options": [
      "Porque es demasiado lenta",
      "Porque se asigna a la dirección de red",
      "Porque es una dirección pública obligatoria",
      "Porque solo la pueden usar los servidores de Google"
    ],
    "answer": "Porque se asigna a la dirección de red",
    "hint": "Representa a la red completa en su conjunto.",
    "explanation": "La dirección con bits de host en cero identifica la red misma en las tablas de enrutamiento y no puede ser utilizada por un dispositivo final."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una máscara de subred es 255.255.255.0, ¿cuántos bits están destinados a la parte de host?",
    "options": [
      "24 bits",
      "8 bits",
      "16 bits",
      "32 bits"
    ],
    "answer": "8 bits",
    "hint": "Los 255 representan bits en '1' (red) y el 0 representa bits en '0' (host).",
    "explanation": "En una máscara de Clase C (/24), los primeros 24 bits son para la red y los últimos 8 bits (el último octeto) están disponibles para asignar a dispositivos (hosts)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué permite hacer el esquema CIDR además de crear subredes?",
    "options": [
      "Eliminar la necesidad de enrutadores",
      "Crear superredes e integrar sufijos directamente a la dirección IP",
      "Convertir IPv4 a IPv6 automáticamente",
      "Cifrar todo el tráfico de la red sin usar puertos"
    ],
    "answer": "Crear superredes e integrar sufijos directamente a la dirección IP",
    "hint": "Busca la capacidad de agrupar múltiples redes pequeñas en una mayor.",
    "explanation": "CIDR introdujo la flexibilidad de agrupar bloques de direcciones, lo que permite la creación de superredes para optimizar las tablas de enrutamiento global."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted está configurando un firewall para permitir acceso SSH a un servidor Linux. ¿Qué puerto debe abrir?",
    "options": [
      "22",
      "23",
      "80",
      "443"
    ],
    "answer": "22",
    "hint": "Es el protocolo estándar para acceso remoto seguro por línea de comandos.",
    "explanation": "Secure Shell (SSH) opera tradicionalmente en el puerto 22, proporcionando un canal seguro sobre una red insegura."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál de las siguientes afirmaciones sobre las direcciones IP privadas es correcta?",
    "options": [
      "Son visibles para cualquier usuario en Internet",
      "Se asignan a equipos en una red privada y no son accesibles desde Internet",
      "Tienen un costo mensual mayor que las públicas",
      "Solo pueden usarse en redes cableadas"
    ],
    "answer": "Se asignan a equipos en una red privada y no son accesibles desde Internet",
    "hint": "Piensa en un número de teléfono personal que no está en la guía telefónica.",
    "explanation": "Las direcciones privadas permiten que millones de dispositivos operen internamente sin consumir el limitado espacio de direcciones públicas de IPv4."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En la tabla de conversión binaria, ¿qué valor decimal representa la posición de bit 8 (la más a la izquierda)?",
    "options": [
      "1",
      "64",
      "128",
      "256"
    ],
    "answer": "128",
    "hint": "Es 2 elevado a la potencia de 7.",
    "explanation": "En un octeto de 8 bits, las posiciones representan 128, 64, 32, 16, 8, 4, 2 y 1 de izquierda a derecha."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si el equipo A envía un mensaje al puerto 80 del equipo B, ¿qué está intentando hacer probablemente el equipo A?",
    "options": [
      "Transferir un archivo por SSH",
      "Acceder a un servicio web (HTTP) en el equipo B",
      "Realizar una consulta DNS",
      "Conectarse por escritorio remoto"
    ],
    "answer": "Acceder a un servicio web (HTTP) en el equipo B",
    "hint": "El puerto 80 es el estándar para el tráfico web sin cifrar.",
    "explanation": "HTTP utiliza el puerto 80 para la comunicación estándar entre navegadores y servidores web."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Por qué las máscaras de subred 'ocultan' información del tamaño de la red?",
    "options": [
      "Para que los hackers no sepan cuántos hosts hay",
      "Porque definen qué bits son fijos y cuáles son variables para el direccionamiento",
      "Porque comprimen los datos para que viajen más rápido",
      "Porque es un requisito de privacidad legal internacional"
    ],
    "answer": "Porque definen qué bits son fijos y cuáles son variables para el direccionamiento",
    "hint": "Se refiere a la delimitación técnica del rango de la red.",
    "explanation": "La máscara indica cuántos bits son de red y cuántos de host; sin ella, un dispositivo no podría saber dónde termina la identificación de la red y comienza la del equipo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En un escenario donde el Equipo B recibe datos de A y C simultáneamente, ¿cómo sabe el Equipo B a qué aplicación entregar cada mensaje?",
    "options": [
      "Por el color del cable",
      "Por la dirección MAC física únicamente",
      "Gracias a los números de puerto únicos asociados a cada comunicación",
      "Porque el Equipo B solo puede ejecutar una aplicación a la vez"
    ],
    "answer": "Gracias a los números de puerto únicos asociados a cada comunicación",
    "hint": "El puerto actúa como el 'punto de enlace' final.",
    "explanation": "Incluso si las IPs son correctas, los puertos permiten que el sistema operativo distribuya los paquetes de datos a los procesos o aplicaciones correctas que los están esperando."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué rango de valores puede tener cada uno de los cuatro números que componen una dirección IPv4?",
    "options": [
      "0 a 100",
      "0 a 255",
      "1 a 1000",
      "0 a 512"
    ],
    "answer": "0 a 255",
    "hint": "Es el valor máximo que puede representar un número binario de 8 bits (11111111).",
    "explanation": "Debido a que cada octeto tiene 8 bits, el valor máximo posible es 255 (2^8 - 1). Por lo tanto, cualquier dirección IP válida debe estar en ese rango."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la diferencia fundamental entre un 'nodo' y un 'host' según la definición proporcionada en clase?",
    "options": [
      "Un nodo es solo para impresoras y un host es solo para servidores.",
      "Un nodo es cualquier dispositivo en la red, mientras que un host es un nodo con una función única o específica.",
      "Un host es el medio físico y un nodo es el mensaje lógico.",
      "No existe diferencia; ambos términos se usan indistintamente para referirse a routers."
    ],
    "answer": "Un nodo es cualquier dispositivo en la red, mientras que un host es un nodo con una función única o específica.",
    "hint": "Revisa la sección donde se definen los elementos de una red informática en la lámina 7 o el minuto 1:45:00 de la grabación.",
    "explanation": "En el contexto de redes, un nodo se refiere a cualquier dispositivo conectado (PC, router, impresora), mientras que el host es un nodo que cumple una función única, como un servidor[cite: 8, 268]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el modelo OSI, ¿en qué capa se encargan de la codificación, compresión y el cifrado de los datos para que ambos sistemas los entiendan?",
    "options": [
      "Capa de Sesión (Capa 5)",
      "Capa de Aplicación (Capa 7)",
      "Capa de Presentación (Capa 6)",
      "Capa de Transporte (Capa 4)"
    ],
    "answer": "Capa de Presentación (Capa 6)",
    "hint": "Esta capa le da formato a los datos antes de que lleguen a la aplicación final.",
    "explanation": "La capa de presentación es la responsable de dar formato a los datos, incluyendo la codificación y el cifrado, permitiendo que sistemas diferentes se entiendan entre sí[cite: 351, 354]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué sucede específicamente durante el proceso de 'conmutación de paquetes' introducido en la década de 1960?",
    "options": [
      "La información se envía por un solo cable de cobre sin divisiones.",
      "Los datos se cifran en el origen y solo se descifran con una clave física.",
      "La información se divide en pequeños fragmentos independientes que se reensamblan en el destino.",
      "Se establece una conexión telefónica continua antes de enviar cualquier bit."
    ],
    "answer": "La información se divide en pequeños fragmentos independientes que se reensamblan en el destino.",
    "hint": "Aparece en la historia básica de Internet, lámina 4.",
    "explanation": "La conmutación de paquetes permite dividir los mensajes en fragmentos que viajan por rutas distintas y se reensamblan al llegar, haciendo la red más eficiente y tolerante a fallos[cite: 4, 214]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si un switch (conmutador) no conoce el destino de un dato entrante por primera vez, ¿cuál es su comportamiento inicial?",
    "options": [
      "Descarta el paquete inmediatamente por seguridad.",
      "Envía un mensaje a todos los dispositivos conectados para aprender su ubicación.",
      "Devuelve el mensaje al remitente con un error de MAC.",
      "Almacena el dato en un buffer hasta que el administrador lo asigne manualmente."
    ],
    "answer": "Envía un mensaje a todos los dispositivos conectados para aprender su ubicación.",
    "hint": "Este proceso le sirve para construir su tabla interna de direcciones.",
    "explanation": "Cuando el switch no conoce el destino, envía el mensaje a todos los puertos una sola vez para aprender dónde están los dispositivos y registrar sus direcciones MAC[cite: 281, 439]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Dentro de la arquitectura de AWS, ¿cuál es el equivalente a un 'segmento de red' o red pequeña dentro de una topología tradicional?",
    "options": [
      "Amazon VPC",
      "Subred (Subnet)",
      "Internet Gateway",
      "Grupo de Seguridad"
    ],
    "answer": "Subred (Subnet)",
    "hint": "Consulta la tabla de comparaciones entre redes tradicionales y AWS VPC.",
    "explanation": "En una topología tradicional se habla de segmentos de red; en AWS, estos segmentos o divisiones dentro de una VPC se denominan subredes[cite: 1324, 1438]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué característica define a un protocolo 'sin conexión' como el UDP?",
    "options": [
      "Requiere una sesión activa entre remitente y receptor.",
      "Utiliza comunicación sincrónica y espera confirmación (ACK).",
      "Envía datos directamente sin verificar la disponibilidad del destino ni garantizar el orden.",
      "Realiza un apretón de manos de tres pasos antes de transmitir."
    ],
    "answer": "Envía datos directamente sin verificar la disponibilidad del destino ni garantizar el orden.",
    "hint": "Lámina 22 o sección final de la grabación sobre UDP.",
    "explanation": "UDP es un protocolo sin conexión que prioriza la velocidad, enviando paquetes sin asegurar que el receptor esté listo o que lleguen en orden[cite: 22, 1383, 1389]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el modelo OSI, ¿cuál es la diferencia terminológica entre los datos en la Capa 2 y la Capa 3?",
    "options": [
      "En la Capa 2 se llaman 'segmentos' y en la Capa 3 'marcos'.",
      "En la Capa 2 se llaman 'marcos' (frames) y en la Capa 3 'paquetes' (packets).",
      "En la Capa 2 se llaman 'bits' y en la Capa 3 'bytes'.",
      "En la Capa 2 se llaman 'mensajes' y en la Capa 3 'señales'."
    ],
    "answer": "En la Capa 2 se llaman 'marcos' (frames) y en la Capa 3 'paquetes' (packets).",
    "hint": "Revisa la lámina 'Datos y el modelo OSI' o la explicación del minuto 2:32:00.",
    "explanation": "En la capa de enlace de datos (2) la unidad de información es el marco, asociado a direcciones MAC; en la capa de red (3) se denomina paquete y usa direcciones IP[cite: 366, 368]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué componente de red tiene un identificador físico único asignado por el fabricante y en qué capa opera principalmente?",
    "options": [
      "El Router, opera en la Capa 3.",
      "La tarjeta de red (NIC), opera en la Capa 2 (aunque transmite bits en la Capa 1).",
      "El Servidor, opera en la Capa 7.",
      "El Gateway, opera en la Capa 4."
    ],
    "answer": "La tarjeta de red (NIC), opera en la Capa 2 (aunque transmite bits en la Capa 1).",
    "hint": "Este identificador se conoce como dirección MAC.",
    "explanation": "La NIC posee una dirección MAC única del fabricante y actúa en la Capa 2 gestionando tramas, aunque físicamente conecta con la Capa 1[cite: 399, 404]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función principal de un router (enrutador) comparada con un switch?",
    "options": [
      "El router conecta dispositivos dentro de una misma LAN usando MACs.",
      "El router conecta diferentes redes y decide la mejor ruta usando direcciones IP.",
      "El router solo sirve para dar nombres de dominio (DNS).",
      "El router es un dispositivo pasivo que solo regenera señales eléctricas."
    ],
    "answer": "El router conecta diferentes redes y decide la mejor ruta usando direcciones IP.",
    "hint": "Revisa la analogía de la carretera y los elementos de red.",
    "explanation": "A diferencia del switch que organiza la red interna (LAN), el router interconecta redes distintas y elige el camino óptimo para los datos basándose en IPs[cite: 293, 442, 443]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el contexto de topologías físicas, ¿qué problema crítico presenta la topología en 'bus'?",
    "options": [
      "Es la más costosa de implementar por usar fibra óptica.",
      "Si el cable principal se corta, todos los dispositivos posteriores pierden la conexión.",
      "Requiere un switch central muy potente que suele fallar.",
      "Solo permite conectar un máximo de dos dispositivos."
    ],
    "answer": "Si el cable principal se corta, todos los dispositivos posteriores pierden la conexión.",
    "hint": "Imagina un único canal por donde fluye toda la información.",
    "explanation": "En una topología en bus, todos dependen de un único cable central; si este se rompe, la comunicación se interrumpe para el resto de la red[cite: 549, 1292]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cómo se define la 'latencia' según la analogía de la carretera presentada en clase?",
    "options": [
      "Es el número de vehículos (datos) que pueden viajar a la vez.",
      "Es la longitud física de la carretera entre el punto A y el B.",
      "Es la lentitud causada por el exceso de tráfico en la red.",
      "Es el proceso de reconstrucción de paquetes en el destino."
    ],
    "answer": "Es la lentitud causada por el exceso de tráfico en la red.",
    "hint": "Se relaciona con el tiempo que tarda un mensaje en llegar.",
    "explanation": "En conceptos de red, la lentitud en el trayecto de los datos se denomina latencia, asimilable al tráfico en una autopista[cite: 265, 266]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuáles son los tres mensajes que componen el 'apretón de manos' (handshake) del protocolo TCP?",
    "options": [
      "SYN, ACK, FIN",
      "HELLO, SYN, DATA",
      "SYN, SYN/ACK, ACK",
      "REQUEST, RESPONSE, CONFIRM"
    ],
    "answer": "SYN, SYN/ACK, ACK",
    "hint": "Lámina 24 sobre TCP.",
    "explanation": "El protocolo TCP establece la conexión mediante tres pasos: Sincronizar (SYN), Sincronizar/Confirmar (SYN/ACK) y Confirmar (ACK)[cite: 24]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el modelo de administración de redes 'de pares' (P2P), ¿cuál es el rol de los equipos?",
    "options": [
      "Un equipo es siempre el servidor central y los demás son clientes pasivos.",
      "Cada equipo puede ser tanto cliente como servidor simultáneamente.",
      "Los equipos solo pueden recibir datos pero no enviarlos.",
      "Todos los equipos deben pasar por un router de AWS para hablar entre sí."
    ],
    "answer": "Cada equipo puede ser tanto cliente como servidor simultáneamente.",
    "hint": "Piensa en servicios como Torrent o el antiguo Ares.",
    "explanation": "En el modelo de pares no hay un servidor central; todos los nodos son iguales y pueden compartir, administrar y controlar su información directamente[cite: 1357, 1362]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la principal ventaja de la fibra óptica frente al cable coaxial y el par trenzado?",
    "options": [
      "Es el medio más económico y fácil de instalar.",
      "Utiliza señales de luz para lograr mayor velocidad y es ideal para largas distancias.",
      "No requiere de ningún dispositivo para regenerar la señal.",
      "Permite alimentar eléctricamente a los dispositivos conectados."
    ],
    "answer": "Utiliza señales de luz para lograr mayor velocidad y es ideal para largas distancias.",
    "hint": "Se mencionó su uso en cables submarinos entre países.",
    "explanation": "La fibra óptica es el medio más rápido y moderno porque usa propiedades de la luz en lugar de energía eléctrica, permitiendo cubrir grandes distancias sin mucha pérdida[cite: 419, 434]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Dentro de una Amazon VPC, ¿cuál es la función de una 'subred pública'?",
    "options": [
      "Es una red que no tiene acceso a internet y solo almacena bases de datos.",
      "Permite el acceso a internet a través de tablas de enrutamiento y un Internet Gateway.",
      "Sirve únicamente para conectar la infraestructura on-premise con la nube.",
      "Es una red donde el usuario no tiene control sobre las direcciones IP."
    ],
    "answer": "Permite el acceso a internet a través de tablas de enrutamiento y un Internet Gateway.",
    "hint": "Revisa la lámina 'Comparación de LAN y WAN con Amazon VPC'.",
    "explanation": "Las subredes públicas en una VPC están configuradas para poder salir a internet mediante el uso de tablas de enrutamiento que apuntan a un gateway[cite: 1443, 1445]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué dispositivo tradicional se asemeja funcionalmente a los 'Grupos de Seguridad' (Security Groups) en AWS?",
    "options": [
      "Un Switch",
      "Un Hub",
      "Un Firewall",
      "Un Modem"
    ],
    "answer": "Un Firewall",
    "hint": "Se encarga de proteger la red bloqueando o permitiendo tráfico.",
    "explanation": "Tanto los firewalls tradicionales como los Grupos de Seguridad de AWS tienen la función de proteger la infraestructura controlando el tráfico entrante y saliente[cite: 1325, 1439]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la unidad básica y mínima de información que viaja por internet?",
    "options": [
      "Byte",
      "Paquete",
      "Bit",
      "Marco"
    ],
    "answer": "Bit",
    "hint": "Representa un cero o un uno lógico.",
    "explanation": "El bit es la unidad más pequeña de un elemento dentro de internet, representando estados lógicos de 0 o 1[cite: 300, 314]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué diferencia a una red LAN de una red WAN?",
    "options": [
      "La LAN usa solo WiFi y la WAN usa solo cables.",
      "La LAN conecta dispositivos en un área geográfica limitada, mientras que la WAN cubre ciudades o continentes.",
      "La WAN es más rápida que la LAN porque usa satélites.",
      "No hay diferencia, son dos nombres para el mismo concepto de internet."
    ],
    "answer": "La LAN conecta dispositivos en un área geográfica limitada, mientras que la WAN cubre ciudades o continentes.",
    "hint": "Lámina 27 o comparación al final de la grabación.",
    "explanation": "Una LAN (Local Area Network) se limita a espacios pequeños como oficinas, mientras que la WAN (Wide Area Network) interconecta redes a grandes distancias geográficas[cite: 27, 526, 527]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el modelo OSI, ¿en qué capa operan protocolos como HTTP, DNS y SMTP?",
    "options": [
      "Capa de Red (Capa 3)",
      "Capa de Transporte (Capa 4)",
      "Capa de Aplicación (Capa 7)",
      "Capa Física (Capa 1)"
    ],
    "answer": "Capa de Aplicación (Capa 7)",
    "hint": "Es la capa más cercana al usuario final.",
    "explanation": "Protocolos como HTTP para web o DNS para resolución de nombres trabajan en la capa de aplicación, que es la interfaz superior del modelo[cite: 355, 356]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué servicio de AWS permite conectar de forma directa, rápida y privada dos VPCs que se encuentran en diferentes regiones?",
    "options": [
      "AWS Direct Connect",
      "VPC Peering",
      "Internet Gateway",
      "Amazon S3"
    ],
    "answer": "VPC Peering",
    "hint": "Consulta la lámina 'WAN y AWS VPC'.",
    "explanation": "VPC Peering es una conexión directa entre dos VPCs que permite el intercambio de tráfico de forma rápida y privada, incluso entre regiones distintas[cite: 1457, 1463]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿A qué se refiere el término técnico 'Capa 8' mencionado como un chascarrillo en clase?",
    "options": [
      "A una nueva capa de seguridad de AWS.",
      "Al fallo originado por el usuario final.",
      "A la conexión física mediante satélite.",
      "Al protocolo de super-encriptación cuántica."
    ],
    "answer": "Al fallo originado por el usuario final.",
    "hint": "Es una broma común entre técnicos de soporte.",
    "explanation": "En términos de tecnología, 'capa 8' se usa para referirse al usuario; si hay un problema en esta capa, significa que el error es humano[cite: 357, 359]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función del 'Modem' en una red doméstica?",
    "options": [
      "Asignar direcciones MAC a todos los equipos.",
      "Traducir (modular y desmodular) las señales entre la red local e Internet.",
      "Almacenar las páginas web para que carguen más rápido.",
      "Cifrar los datos para la capa de presentación."
    ],
    "answer": "Traducir (modular y desmodular) las señales entre la red local e Internet.",
    "hint": "Su nombre proviene de 'modular' y 'desmodular'.",
    "explanation": "El modem convierte los datos de un formato a otro para permitir la salida y entrada de señales desde el proveedor de internet (ISP)[cite: 448, 449]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En una topología en 'estrella', ¿qué sucede si falla el dispositivo central (switch)?",
    "options": [
      "La red sigue funcionando porque es redundante.",
      "Solo falla el dispositivo que causó el error.",
      "Falla absolutamente toda la red conectada a ese centro de control.",
      "Los datos simplemente viajan más lento por el bus."
    ],
    "answer": "Falla absolutamente toda la red conectada a ese centro de control.",
    "hint": "Aparece en la descripción de topologías físicas en la lámina 552.",
    "explanation": "Aunque la estrella es resistente a fallos de cables individuales, el switch central es un punto único de fallo; si se daña, toda la red cae[cite: 552]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué importancia histórica tuvo el contexto de la 'Guerra Fría' en el desarrollo de los protocolos de Internet?",
    "options": [
      "Obligó a que Internet fuera solo para uso militar y secreto.",
      "Impulsó la creación de protocolos muy estables y resilientes a fallos masivos.",
      "Impidió que se usara el correo electrónico hasta los años 90.",
      "Hizo que la fibra óptica se desarrollara antes que el cable de cobre."
    ],
    "answer": "Impulsó la creación de protocolos muy estables y resilientes a fallos masivos.",
    "hint": "Revisa la sección de historia sobre 1970 y TCP/IP.",
    "explanation": "TCP/IP se diseñó para funcionar incluso si secciones de la red eran destruidas (por ejemplo, en bombardeos), lo que lo hace un estándar sumamente estable[cite: 224, 236]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué característica diferencia a la topología 'lógica' de la topología 'física'?",
    "options": [
      "La física es para cables y la lógica es solo para AWS.",
      "La física describe la disposición de los cables; la lógica describe cómo se mueven realmente los datos.",
      "La lógica es siempre más rápida que la física.",
      "No hay diferencia; si la red es en estrella físicamente, lógicamente debe ser igual."
    ],
    "answer": "La física describe la disposición de los cables; la lógica describe cómo se mueven realmente los datos.",
    "hint": "Una red puede verse como estrella pero enviar datos como bus.",
    "explanation": "La topología física es el diagrama de conexiones reales, mientras que la lógica define el flujo de la información, pudiendo comportarse de forma distinta al cableado[cite: 541, 1418]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la diferencia fundamental en el comportamiento de 'estado' entre un Grupo de Seguridad y una ACL de Red (NACL)?",
    "options": [
      "Los Grupos de Seguridad no tienen estado y las NACL son con estado.",
      "Ambos son con estado por defecto.",
      "Los Grupos de Seguridad son con estado y las NACL no tienen estado.",
      "Ambos no tienen estado para mejorar el rendimiento."
    ],
    "answer": "Los Grupos de Seguridad son con estado y las NACL no tienen estado.",
    "hint": "Recuerda cuál de ellos permite automáticamente el tráfico de respuesta sin necesidad de una regla explícita de salida.",
    "explanation": "Un firewall 'con estado' (Security Group) recuerda las solicitudes entrantes permitidas y deja pasar la respuesta de salida automáticamente. Uno 'sin estado' (NACL) requiere reglas explícitas tanto para la ida como para la vuelta del tráfico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una subred pública debe permitir que sus instancias se comuniquen con Internet, ¿qué componente es indispensable asociar a la tabla de enrutamiento de dicha subred?",
    "options": [
      "Una Puerta de enlace NAT",
      "Una Puerta de enlace de Internet (IGW)",
      "Un servidor DNS privado",
      "Una conexión Direct Connect"
    ],
    "answer": "Una Puerta de enlace de Internet (IGW)",
    "hint": "Es el componente que actúa como puente directo entre tu red virtual y el internet público.",
    "explanation": "La Puerta de enlace de Internet (IGW) permite la comunicación entre los recursos de la VPC y el internet. Para que una subred sea pública, su tabla de enrutamiento debe tener una ruta que apunte al IGW."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador nota que una instancia en una subred privada necesita descargar actualizaciones de seguridad desde Internet pero no debe ser accesible desde el exterior. ¿Qué recurso debería utilizar?",
    "options": [
      "Internet Gateway",
      "Punto de enlace de VPC (VPC Endpoint)",
      "Puerta de enlace NAT (NAT Gateway)",
      "Tabla de enrutamiento local"
    ],
    "answer": "Puerta de enlace NAT (NAT Gateway)",
    "hint": "Busca un componente que permita la salida de tráfico pero bloquee las conexiones iniciadas desde fuera.",
    "explanation": "El NAT Gateway permite que las instancias en subredes privadas se conecten a servicios fuera de la VPC (como internet para actualizaciones), pero impide que agentes externos inicien una conexión con esas instancias."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué herramienta de diagnóstico utilizarías para identificar exactamente en qué punto de la red se están perdiendo los paquetes o existe una latencia excesiva?",
    "options": [
      "ping",
      "nslookup",
      "traceroute",
      "telnet"
    ],
    "answer": "traceroute",
    "hint": "Esta herramienta muestra cada 'salto' o router por el que pasa el paquete hasta llegar a su destino.",
    "explanation": "Traceroute rastrea la ruta que sigue un paquete, mostrando cada servidor intermedio y el tiempo de respuesta. Es ideal para localizar fallos en nodos específicos de la red."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el contexto de Amazon VPC, ¿cuál es la restricción principal respecto a las subredes y las Zonas de Disponibilidad (AZ)?",
    "options": [
      "Una subred puede abarcar varias AZ para redundancia.",
      "Cada subred debe estar contenida estrictamente dentro de una sola AZ.",
      "Las subredes solo existen en regiones, no en AZ.",
      "Solo se permite una subred por VPC independientemente de las AZ."
    ],
    "answer": "Cada subred debe estar contenida estrictamente dentro de una sola AZ.",
    "hint": "Piensa en la jerarquía física de la infraestructura de la nube.",
    "explanation": "En AWS, una subred es un recurso de nivel de Zona de Disponibilidad. No puede extenderse a través de múltiples zonas; para tener alta disponibilidad, debes crear subredes separadas en diferentes zonas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si ejecutas el comando 'nslookup google.com' y obtienes una dirección IP, ¿qué protocolo y servicio han funcionado correctamente?",
    "options": [
      "DHCP",
      "ICMP",
      "DNS",
      "SMTP"
    ],
    "answer": "DNS",
    "hint": "Es el servicio encargado de traducir nombres legibles por humanos en direcciones numéricas de red.",
    "explanation": "El Sistema de Nombres de Dominio (DNS) resuelve nombres de host (como google.com) en direcciones IP. nslookup es la herramienta estándar para consultar a estos servidores."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es el propósito de la regla '0.0.0.0/0' en una tabla de enrutamiento asociada a una Puerta de enlace de Internet?",
    "options": [
      "Permitir el tráfico solo a la red local.",
      "Representar cualquier destino fuera de la red local (tráfico de Internet).",
      "Bloquear todo el tráfico entrante de forma automática.",
      "Asignar direcciones IP elásticas a las instancias."
    ],
    "answer": "Representar cualquier destino fuera de la red local (tráfico de Internet).",
    "hint": "Se conoce como la ruta por defecto o ruta de 'último recurso'.",
    "explanation": "La notación 0.0.0.0/0 indica 'todas las direcciones IP posibles'. En una tabla de enrutamiento, se usa para dirigir cualquier tráfico que no coincida con rutas locales hacia una salida externa, como un Internet Gateway."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo garantiza que los paquetes de datos se entreguen de manera correcta y en el orden adecuado mediante la creación de una conexión estable?",
    "options": [
      "UDP",
      "TCP",
      "ICMP",
      "HTTP"
    ],
    "answer": "TCP",
    "hint": "Es un protocolo 'orientado a la conexión' que maneja la retransmisión de datos perdidos.",
    "explanation": "TCP (Transmission Control Protocol) establece una conexión bidireccional y utiliza mecanismos de confirmación para asegurar que todos los datos lleguen intactos y en el orden correcto al destino."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al crear una ACL de red personalizada en una VPC, ¿cuál es su comportamiento predeterminado respecto al tráfico?",
    "options": [
      "Permite todo el tráfico entrante y saliente.",
      "Deniega todo el tráfico entrante y saliente hasta que se agreguen reglas.",
      "Permite solo el tráfico HTTP y HTTPS.",
      "Permite todo el tráfico entrante pero bloquea el saliente."
    ],
    "answer": "Deniega todo el tráfico entrante y saliente hasta que se agreguen reglas.",
    "hint": "A diferencia de la ACL por defecto de la VPC, las personalizadas son más restrictivas al inicio.",
    "explanation": "Las ACL de red personalizadas comienzan con una regla de 'denegar todo' (indicada por un asterisco). El administrador debe añadir reglas numeradas explícitamente para permitir el tráfico deseado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué nivel de seguridad protege directamente a una instancia individual de EC2?",
    "options": [
      "ACL de red (NACL)",
      "Puerta de enlace NAT",
      "Grupo de Seguridad (Security Group)",
      "Tabla de enrutamiento"
    ],
    "answer": "Grupo de Seguridad (Security Group)",
    "hint": "Actúa como un firewall virtual específico para la interfaz de red de la propia instancia.",
    "explanation": "Los Grupos de Seguridad operan a nivel de instancia (o interfaz de red), permitiendo un control granular para cada servidor, mientras que las NACL operan a nivel de toda la subred."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué sucede si intentas crear dos subredes dentro de la misma VPC con bloques CIDR que se superponen?",
    "options": [
      "La VPC las combinará automáticamente.",
      "AWS permitirá la creación pero marcará un error de latencia.",
      "AWS impedirá la creación de la segunda subred por conflicto de IP.",
      "El tráfico se dividirá equitativamente entre ambas."
    ],
    "answer": "AWS impedirá la creación de la segunda subred por conflicto de IP.",
    "hint": "La gestión de direcciones IP requiere que cada rango sea único para evitar ambigüedades en el enrutamiento.",
    "explanation": "En una VPC, los rangos de direcciones (bloques CIDR) de las subredes deben ser contiguos y no pueden superponerse. El sistema valida esto para garantizar que cada dirección IP pertenezca a una única subred."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Para qué sirve el comando 'telnet [IP] [puerto]' en el diagnóstico de redes?",
    "options": [
      "Para medir la velocidad de descarga de archivos.",
      "Para verificar si un puerto específico en un host está abierto y aceptando conexiones.",
      "Para cambiar la contraseña del administrador de red.",
      "Para cifrar la comunicación entre dos servidores."
    ],
    "answer": "Para verificar si un puerto específico en un host está abierto y aceptando conexiones.",
    "hint": "Es una forma rápida de probar si un firewall (como un Grupo de Seguridad) está bloqueando un servicio específico.",
    "explanation": "Telnet intenta establecer una conexión TCP al puerto indicado. Si la pantalla se pone en blanco o dice 'connected', el puerto está abierto. Si falla, indica que el puerto está cerrado o bloqueado por un firewall."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo es utilizado por el comando 'ping' para enviar mensajes de eco y recibir respuestas?",
    "options": [
      "TCP",
      "UDP",
      "ICMP",
      "TLS"
    ],
    "answer": "ICMP",
    "hint": "Es un protocolo de control y reporte de errores, no orientado a la transferencia de datos de usuario.",
    "explanation": "Ping utiliza el protocolo ICMP (Internet Control Message Protocol). Envía paquetes de 'Echo Request' y espera recibir un 'Echo Reply' para verificar la disponibilidad y latencia de un host."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En un entorno de producción, ¿cuál es la mejor práctica para ubicar una instancia de base de datos?",
    "options": [
      "En una subred pública para facilitar el acceso de los desarrolladores.",
      "En una subred privada para mayor seguridad y aislamiento.",
      "Directamente en el Internet Gateway.",
      "En una subred pública con todos los puertos abiertos."
    ],
    "answer": "En una subred privada para mayor seguridad y aislamiento.",
    "hint": "Los datos sensibles no deben estar expuestos directamente a la red pública.",
    "explanation": "Las bases de datos deben estar en subredes privadas sin acceso directo desde internet. Solo las aplicaciones autorizadas (ubicadas en otras subredes) deberían tener reglas de firewall para consultarlas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo se encarga de asignar automáticamente direcciones IP dinámicas a los dispositivos cuando se conectan a una red?",
    "options": [
      "DNS",
      "FTP",
      "DHCP",
      "HTTP"
    ],
    "answer": "DHCP",
    "hint": "Este servicio evita la configuración manual de IPs en cada equipo de la red.",
    "explanation": "DHCP (Dynamic Host Configuration Protocol) automatiza la configuración de red (IP, máscara, puerta de enlace) para los dispositivos, permitiéndoles comunicarse sin intervención manual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la principal característica del protocolo UDP en comparación con TCP?",
    "options": [
      "Es más lento pero más seguro.",
      "No tiene conexión y no garantiza la entrega de paquetes.",
      "Utiliza un sistema de tres vías para iniciar la sesión.",
      "Solo funciona para correos electrónicos."
    ],
    "answer": "No tiene conexión y no garantiza la entrega de paquetes.",
    "hint": "Es ideal para servicios en tiempo real donde la velocidad es más crítica que recuperar un paquete perdido.",
    "explanation": "UDP (User Datagram Protocol) es un protocolo ligero 'sin conexión'. No verifica si los paquetes llegaron ni su orden, lo que reduce la latencia, siendo útil para streaming o juegos online."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si necesitas monitorear las conexiones TCP activas y ver qué procesos están utilizando los puertos en un servidor Linux, ¿qué comando sería el más adecuado?",
    "options": [
      "ping",
      "traceroute",
      "netstat",
      "nslookup"
    ],
    "answer": "netstat",
    "hint": "Este comando muestra estadísticas de red y tablas de enrutamiento locales.",
    "explanation": "Netstat (Network Statistics) permite listar todas las conexiones de red activas, los puertos en escucha y, con privilegios de administrador, el ID del proceso (PID) asociado a cada conexión."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un desarrollador no puede conectarse por SSH (puerto 22) a una instancia. El Grupo de Seguridad permite el puerto 22 de entrada. La NACL tiene una regla de entrada que permite el puerto 22, pero deniega todo el tráfico de salida. ¿Por qué falla la conexión?",
    "options": [
      "Porque SSH requiere UDP.",
      "Porque las NACL no tienen estado y requieren una regla de salida para el tráfico de respuesta.",
      "Porque el Security Group también necesita una regla de salida explícita.",
      "Porque SSH solo funciona en subredes privadas."
    ],
    "answer": "Porque las NACL no tienen estado y requieren una regla de salida para el tráfico de respuesta.",
    "hint": "Analiza la diferencia de comportamiento entre Grupos de Seguridad y NACL respecto a la respuesta del tráfico.",
    "explanation": "Como la NACL no tiene estado, no 'recuerda' que la conexión fue permitida al entrar. Para que la instancia envíe la respuesta al cliente, la NACL debe tener una regla de salida que permita el tráfico de vuelta."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo se utiliza para la transferencia segura de páginas web cifrando los datos mediante TLS/SSL?",
    "options": [
      "HTTP",
      "HTTPS",
      "FTP",
      "SMTP"
    ],
    "answer": "HTTPS",
    "hint": "Es la versión segura del protocolo de transferencia de hipertexto.",
    "explanation": "HTTPS añade una capa de cifrado (SSL/TLS) sobre el protocolo HTTP, asegurando que la información transmitida entre el navegador y el servidor no pueda ser interceptada o leída por terceros."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el modelo OSI, ¿en qué capa operan principalmente los routers para dirigir el tráfico basándose en direcciones IP?",
    "options": [
      "Capa Física (1)",
      "Capa de Enlace de Datos (2)",
      "Capa de Red (3)",
      "Capa de Transporte (4)"
    ],
    "answer": "Capa de Red (3)",
    "hint": "Es la capa responsable del direccionamiento lógico y el enrutamiento de paquetes.",
    "explanation": "La Capa de Red (Capa 3) se encarga de determinar la mejor ruta para enviar datos a través de redes interconectadas utilizando protocolos de direccionamiento como IP."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué herramienta permite capturar y analizar profundamente los paquetes individuales que viajan por la red para identificar problemas de protocolo?",
    "options": [
      "telnet",
      "Wireshark",
      "ping",
      "nslookup"
    ],
    "answer": "Wireshark",
    "hint": "Se describe a menudo como una 'lupa' para el tráfico de red.",
    "explanation": "Wireshark es un analizador de protocolos de red que permite ver todo el tráfico que pasa por una interfaz en tiempo real, permitiendo inspeccionar encabezados y contenido de paquetes (si no están cifrados)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función principal de una Tabla de Enrutamiento en una VPC?",
    "options": [
      "Asignar nombres de dominio a las instancias.",
      "Determinar hacia dónde se dirige el tráfico de red de las subredes o puertas de enlace.",
      "Almacenar las contraseñas de los usuarios de la red.",
      "Cifrar el tráfico que sale hacia Internet."
    ],
    "answer": "Determinar hacia dónde se dirige el tráfico de red de las subredes o puertas de enlace.",
    "hint": "Actúa como un mapa de direcciones que indica el siguiente salto para cada paquete.",
    "explanation": "Una tabla de enrutamiento contiene un conjunto de reglas (llamadas rutas) que se utilizan para determinar hacia dónde se dirige el tráfico de red de la subred o puerta de enlace."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo es el estándar para enviar correos electrónicos entre servidores o desde un cliente a un servidor?",
    "options": [
      "FTP",
      "SMTP",
      "DHCP",
      "ICMP"
    ],
    "answer": "SMTP",
    "hint": "Sus siglas significan Protocolo Simple de Transferencia de Correo.",
    "explanation": "SMTP (Simple Mail Transfer Protocol) es el protocolo utilizado para la transmisión de mensajes de correo electrónico en Internet."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una instancia EC2 no tiene una dirección IP pública asociada, ¿qué componente de red de AWS puede permitirle salir a Internet conservando solo su IP privada?",
    "options": [
      "Internet Gateway",
      "NAT Gateway",
      "Virtual Private Gateway",
      "Peering de VPC"
    ],
    "answer": "NAT Gateway",
    "hint": "Este componente realiza la traducción de direcciones para que muchas instancias privadas compartan una salida pública.",
    "explanation": "El NAT Gateway traduce la dirección IP privada de la instancia a una dirección IP pública del gateway para permitir la salida a internet, manejando las respuestas de vuelta a la instancia correcta."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En la resolución de problemas de red, ¿qué indica la presencia de tres asteriscos (*) seguidos en el resultado del comando traceroute?",
    "options": [
      "La conexión se ha cifrado con éxito.",
      "Se ha llegado al destino final.",
      "El nodo o salto actual no respondió dentro del tiempo de espera.",
      "El servidor de destino está saturado de usuarios."
    ],
    "answer": "El nodo o salto actual no respondió dentro del tiempo de espera.",
    "hint": "Representa una falta de respuesta por parte de un router intermedio o firewall.",
    "explanation": "Los asteriscos significan que el paquete ICMP enviado por traceroute no recibió respuesta de ese salto específico, lo cual puede deberse a congestión, fallo del nodo o configuraciones de seguridad que bloquean el protocolo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué característica define a un firewall 'sin estado' como la ACL de red?",
    "options": [
      "Permite automáticamente el tráfico de retorno si el origen fue permitido.",
      "No mantiene memoria de las conexiones abiertas y evalúa cada paquete de forma independiente.",
      "Solo funciona para el tráfico que sale de la red.",
      "Es incapaz de bloquear direcciones IP específicas."
    ],
    "answer": "No mantiene memoria de las conexiones abiertas y evalúa cada paquete de forma independiente.",
    "hint": "Requiere que el administrador piense en el tráfico como dos caminos separados: ida y vuelta.",
    "explanation": "Los firewalls sin estado (stateless) no guardan registro de las sesiones. Cada paquete entrante o saliente debe coincidir con una regla específica, sin importar si es parte de una conversación ya iniciada."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es el protocolo utilizado principalmente para la transferencia de archivos entre un cliente y un servidor de forma tradicional?",
    "options": [
      "HTTP",
      "SMTP",
      "FTP",
      "DNS"
    ],
    "answer": "FTP",
    "hint": "Permite subir y descargar documentos y suele utilizar los puertos 20 y 21.",
    "explanation": "FTP (File Transfer Protocol) es el protocolo estándar para transferir archivos entre sistemas conectados a una red TCP."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué rango de red define el tamaño total de una Amazon VPC durante su creación?",
    "options": [
      "Bloque CIDR",
      "Máscara de subred física",
      "ID de zona de disponibilidad",
      "Intervalo de IP elásticas"
    ],
    "answer": "Bloque CIDR",
    "hint": "Es la notación que especifica la dirección IP base y el número de bits fijos de la red.",
    "explanation": "El bloque CIDR (Classless Inter-Domain Routing) determina el rango de direcciones IP privadas disponibles para la VPC y sus subredes."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Por qué un Grupo de Seguridad se considera 'con estado'?",
    "options": [
      "Porque necesita estar conectado a una base de datos de estados.",
      "Porque si se permite el tráfico entrante, el tráfico saliente de respuesta se permite automáticamente.",
      "Porque bloquea todo el tráfico por defecto.",
      "Porque solo funciona dentro de un mismo estado geográfico."
    ],
    "answer": "Porque si se permite el tráfico entrante, el tráfico saliente de respuesta se permite automáticamente.",
    "hint": "Tiene que ver con la capacidad del firewall para 'recordar' una conexión permitida.",
    "explanation": "Al tener estado (stateful), el Security Group rastrea las conexiones activas. Una vez que se permite una solicitud, el tráfico de respuesta fluye de vuelta sin necesidad de reglas adicionales en el sentido opuesto."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué comando permite enviar una solicitud HTTP simple desde la terminal para verificar si un servidor web está respondiendo correctamente?",
    "options": [
      "curl",
      "nslookup",
      "ping",
      "traceroute"
    ],
    "answer": "curl",
    "hint": "Es una herramienta versátil para transferir datos con sintaxis de URL.",
    "explanation": "Curl es una herramienta de línea de comandos para interactuar con servidores usando diversos protocolos como HTTP, HTTPS o FTP. Es muy útil para probar APIs o la respuesta de servidores web."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la característica fundamental que diferencia a un dispositivo IoT de un objeto conectado tradicional?",
    "options": [
      "Su capacidad para conectarse solo por cable",
      "Su capacidad para recopilar datos y actuar basándose en ellos de forma automática",
      "Que requiere intervención humana para cada decisión",
      "Que solo funciona dentro de una red local sin internet"
    ],
    "answer": "Su capacidad para recopilar datos y actuar basándose en ellos de forma automática",
    "hint": "El IoT busca la autonomía y el procesamiento de información para generar una acción.",
    "explanation": "El Internet de las cosas (IoT) se basa en tres pilares: conectividad, captura de datos y análisis. Un dispositivo inteligente no solo transmite información, sino que puede ejecutar acciones automáticas (como activar una alarma de humo) sin que una persona deba intervenir."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador desea gestionar la seguridad y el software de los dispositivos personales de los empleados que se conectan a la red corporativa. ¿Qué solución es la más adecuada?",
    "options": [
      "BYOD (Bring Your Own Device)",
      "VPC (Virtual Private Cloud)",
      "MDM (Mobile Device Management)",
      "Protocolo MQTT"
    ],
    "answer": "MDM (Mobile Device Management)",
    "hint": "Se trata de un término de administración aplicado tanto a móviles como a equipos portátiles.",
    "explanation": "La Administración de Dispositivos Móviles (MDM) permite a las organizaciones proporcionar configuraciones, software y políticas de seguridad a los dispositivos (personales o corporativos) de forma remota y segura."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En AWS IoT Core, ¿cuál es el protocolo de comunicación más ligero y utilizado para enviar mensajes entre dispositivos y la nube?",
    "options": [
      "HTTPS",
      "MQTT",
      "FTP",
      "RDP"
    ],
    "answer": "MQTT",
    "hint": "Es un protocolo diseñado para dispositivos con recursos limitados y redes de poco ancho de banda.",
    "explanation": "MQTT es un protocolo de mensajería ligero de tipo publicación/suscripción, ideal para el IoT debido a su baja sobrecarga, lo que permite conectar miles de millones de dispositivos de manera eficiente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted necesita proporcionar escritorios virtuales Microsoft Windows a contratistas externos sin necesidad de comprar hardware físico. ¿Qué servicio de AWS debería utilizar?",
    "options": [
      "AWS IoT Core",
      "Amazon WorkSpaces",
      "Amazon Route 53",
      "Amazon EC2 Auto Scaling"
    ],
    "answer": "Amazon WorkSpaces",
    "hint": "Es una solución de infraestructura de escritorio virtual (VDI) basada en la nube.",
    "explanation": "Amazon WorkSpaces permite aprovisionar escritorios virtuales (WorkSpaces) basados en la nube, eliminando la dependencia de equipos físicos locales y facilitando el trabajo remoto y seguro."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Sobre la gestión de almacenamiento en Amazon WorkSpaces, ¿cuál de las siguientes afirmaciones es correcta?",
    "options": [
      "El usuario puede disminuir el tamaño de los volúmenes en cualquier momento",
      "El usuario puede aumentar el tamaño de los volúmenes, pero no disminuirlos",
      "Los volúmenes raíz siempre tienen un tamaño fijo que no se puede cambiar",
      "Solo se puede cambiar el tamaño del volumen una vez al año"
    ],
    "answer": "El usuario puede aumentar el tamaño de los volúmenes, pero no disminuirlos",
    "hint": "Piensa en las restricciones típicas de los sistemas de archivos al reducir particiones activas.",
    "explanation": "En Amazon WorkSpaces, por diseño del servicio y limitaciones técnicas comunes en el almacenamiento de bloques, es posible ampliar la capacidad de los volúmenes para satisfacer nuevas necesidades, pero no es posible reducirlos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo de seguridad inalámbrica es considerado actualmente obsoleto e inseguro debido a vulnerabilidades en su cifrado?",
    "options": [
      "WPA2",
      "WPA3",
      "WEP",
      "TLS"
    ],
    "answer": "WEP",
    "hint": "Fue el primer estándar de seguridad para Wi-Fi.",
    "explanation": "WEP (Wired Equivalent Privacy) es un protocolo antiguo que hoy se considera inseguro. Ha sido reemplazado por estándares como WPA2 y WPA3, que ofrecen una gestión de claves y autenticación mucho más robusta."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al comparar TCP y UDP, ¿cuál es la principal prioridad del protocolo UDP?",
    "options": [
      "Garantizar que todos los paquetes lleguen en orden",
      "Velocidad de transmisión sin confirmación de entrega",
      "Cifrar la información de extremo a extremo",
      "Establecer una conexión mediante un 'saludo de tres vías'"
    ],
    "answer": "Velocidad de transmisión sin confirmación de entrega",
    "hint": "Se usa comúnmente en streaming de video o juegos en línea.",
    "explanation": "UDP prioriza la rapidez sobre la confiabilidad. A diferencia de TCP, no garantiza que los datos lleguen ni que lo hagan en orden, lo que lo hace ideal para aplicaciones en tiempo real donde la latencia es crítica."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿En qué capa del modelo OSI operan protocolos como HTTP, FTP y DNS?",
    "options": [
      "Capa 1 (Física)",
      "Capa 3 (Red)",
      "Capa 4 (Transporte)",
      "Capa 7 (Aplicación)"
    ],
    "answer": "Capa 7 (Aplicación)",
    "hint": "Es la capa más cercana al usuario final.",
    "explanation": "La capa de aplicación es donde reside la interfaz de red para el software del usuario. Protocolos como HTTP (navegación), FTP (archivos) y DNS (resolución de nombres) operan aquí para proporcionar servicios directos al usuario."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función principal de un servidor DNS?",
    "options": [
      "Asignar direcciones IP automáticas a los dispositivos",
      "Traducir nombres de dominio legibles por humanos en direcciones IP",
      "Proteger la red interna de ataques externos",
      "Transferir archivos grandes entre servidores de forma segura"
    ],
    "answer": "Traducir nombres de dominio legibles por humanos en direcciones IP",
    "hint": "Es como la 'guía telefónica' de Internet.",
    "explanation": "El Sistema de Nombres de Dominio (DNS) resuelve nombres como 'google.com' a direcciones IP numéricas que los sistemas pueden entender para establecer comunicación."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo utiliza el comando 'ping' para diagnosticar problemas de conectividad y latencia?",
    "options": [
      "TCP",
      "UDP",
      "ICMP",
      "DHCP"
    ],
    "answer": "ICMP",
    "hint": "Se usa para enviar mensajes de control y error entre dispositivos de red.",
    "explanation": "El protocolo ICMP (Internet Control Message Protocol) es utilizado por herramientas de diagnóstico como ping para verificar si un host está activo enviando solicitudes 'echo request' y recibiendo 'echo reply'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué sucede con los correos electrónicos si se utiliza el protocolo POP para descargarlos?",
    "options": [
      "Se sincronizan en todos los dispositivos simultáneamente",
      "Generalmente se descargan al dispositivo local y se eliminan del servidor",
      "Permanecen en el servidor y solo se ve una vista previa",
      "Se cifran automáticamente con certificados TLS"
    ],
    "answer": "Generalmente se descargan al dispositivo local y se eliminan del servidor",
    "hint": "Es un protocolo antiguo que no está diseñado para la sincronización multi-dispositivo.",
    "explanation": "POP (Post Office Protocol) está diseñado para descargar el correo al equipo local. Por defecto, suele borrar los mensajes del servidor una vez bajados, lo que dificulta acceder al mismo correo desde otro dispositivo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted sospecha que un puerto específico está cerrado en su servidor remoto. ¿Qué comando le permitiría verificar si el puerto 80 está abierto aceptando conexiones?",
    "options": [
      "ping [IP_del_servidor]",
      "nslookup [dominio]",
      "telnet [IP_del_servidor] 80",
      "systemctl status httpd"
    ],
    "answer": "telnet [IP_del_servidor] 80",
    "hint": "Este comando permite probar la conectividad a un puerto TCP específico.",
    "explanation": "Telnet es una utilidad que permite verificar si un servicio está escuchando en un puerto determinado. Si la conexión es exitosa, el puerto está abierto; de lo contrario, podría estar bloqueado por un firewall o el servicio podría estar apagado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué número de puerto estándar utiliza el protocolo SSH para conexiones seguras por línea de comandos?",
    "options": [
      "21",
      "22",
      "80",
      "443"
    ],
    "answer": "22",
    "hint": "Es el puerto configurado por defecto para acceder a instancias Linux en AWS.",
    "explanation": "SSH (Secure Shell) utiliza tradicionalmente el puerto 22 para permitir el acceso remoto seguro a la terminal de servidores, cifrando toda la comunicación."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la ventaja de la tecnología Bluetooth Low Energy (BLE) en comparación con el Bluetooth clásico?",
    "options": [
      "Mayor velocidad de transferencia de archivos pesados",
      "Menor consumo de energía, ideal para sensores IoT",
      "Conexión constante sin interrupciones",
      "Mayor alcance de señal (más de 1 kilómetro)"
    ],
    "answer": "Menor consumo de energía, ideal para sensores IoT",
    "hint": "Su nombre indica su principal característica de eficiencia.",
    "explanation": "BLE está optimizado para dispositivos que necesitan funcionar durante meses o años con una batería pequeña, transmitiendo pequeñas cantidades de datos de forma intermitente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una página web muestra un 'candado' en la barra del navegador, ¿qué protocolo y capa de seguridad está utilizando?",
    "options": [
      "HTTP y SSL",
      "HTTPS y TLS",
      "FTP y SSH",
      "MQTT y WPA"
    ],
    "answer": "HTTPS y TLS",
    "hint": "El SSL está siendo reemplazado por este estándar más moderno.",
    "explanation": "HTTPS combina el protocolo de navegación con TLS (Transport Layer Security) para cifrar los datos entre el cliente y el servidor, asegurando que la información no sea interceptada."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un dispositivo acaba de conectarse a una red y necesita una dirección IP, máscara de subred y puerta de enlace automáticamente. ¿Qué protocolo se encarga de esto?",
    "options": [
      "DNS",
      "ICMP",
      "DHCP",
      "SMTP"
    ],
    "answer": "DHCP",
    "hint": "Evita tener que configurar cada dispositivo de la red manualmente.",
    "explanation": "El protocolo DHCP (Dynamic Host Configuration Protocol) asigna dinámicamente parámetros de red a los dispositivos, permitiéndoles comunicarse sin configuración manual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el contexto de la movilidad empresarial, ¿qué significa el término BYOD?",
    "options": [
      "Backup Your Office Data",
      "Bring Your Own Device",
      "Build Your Online Domain",
      "Broadband Yield On Demand"
    ],
    "answer": "Bring Your Own Device",
    "hint": "Se refiere al uso de portátiles o móviles personales para fines laborales.",
    "explanation": "BYOD es la tendencia donde los empleados utilizan sus propios dispositivos para acceder a sistemas y datos corporativos, facilitando el trabajo remoto pero aumentando los retos de seguridad."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Para autenticar a los usuarios en Amazon WorkSpaces, ¿qué servicio de AWS se utiliza frecuentemente?",
    "options": [
      "AWS IoT Core",
      "AWS Directory Service",
      "Amazon Route 53",
      "AWS S3"
    ],
    "answer": "AWS Directory Service",
    "hint": "Está relacionado con el manejo de identidades y Active Directory.",
    "explanation": "Amazon WorkSpaces utiliza AWS Directory Service o Microsoft Active Directory para gestionar y autenticar las credenciales de los usuarios que acceden a los escritorios virtuales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué comando de diagnóstico de red combina las funciones de 'ping' y 'traceroute' ofreciendo estadísticas en tiempo real?",
    "options": [
      "hping3",
      "nslookup",
      "MTR",
      "telnet"
    ],
    "answer": "MTR",
    "hint": "Es una herramienta avanzada que muestra la latencia promedio y pérdida de paquetes por cada salto.",
    "explanation": "MTR (My Traceroute) realiza un monitoreo continuo de la ruta hacia un destino, actualizando los datos en vivo, lo que permite detectar fallos intermitentes que un traceroute simple podría ignorar."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Durante la configuración de una instancia EC2, ¿para qué sirve la sección 'User Data'?",
    "options": [
      "Para almacenar fotos del usuario en la nube",
      "Para ejecutar un script de configuración automáticamente al iniciar la instancia por primera vez",
      "Para crear copias de seguridad de la base de datos",
      "Para asignar permisos de lectura a los archivos del sistema"
    ],
    "answer": "Para ejecutar un script de configuración automáticamente al iniciar la instancia por primera vez",
    "hint": "Permite automatizar instalaciones de software como Apache al lanzar el servidor.",
    "explanation": "El campo 'User Data' permite incluir scripts (por ejemplo, en Bash) que AWS ejecuta automáticamente cuando la instancia se lanza por primera vez, facilitando la automatización de tareas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es el puerto estándar para el protocolo HTTPS?",
    "options": [
      "80",
      "21",
      "443",
      "53"
    ],
    "answer": "443",
    "hint": "Es el puerto para navegación web cifrada.",
    "explanation": "Mientras que HTTP usa el puerto 80, HTTPS utiliza el puerto 443 para establecer conexiones seguras mediante certificados digitales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué tecnología celular es fundamental para habilitar el IoT masivo y la telemedicina debido a su ultra baja latencia y alta velocidad?",
    "options": [
      "3G",
      "4G LTE",
      "5G",
      "GPRS"
    ],
    "answer": "5G",
    "hint": "Permite conectar hasta un millón de dispositivos por kilómetro cuadrado.",
    "explanation": "La tecnología 5G ofrece las capacidades necesarias para el soporte de ciudades inteligentes, vehículos autónomos y dispositivos médicos críticos gracias a su gran ancho de banda y tiempos de respuesta mínimos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el modelo de comunicación de IoT, ¿qué componente actúa como puente entre los dispositivos locales y la plataforma en la nube?",
    "options": [
      "Smart TV",
      "Puerta de enlace (Gateway)",
      "Termostato",
      "Interfaz de usuario"
    ],
    "answer": "Puerta de enlace (Gateway)",
    "hint": "Recibe los datos del dispositivo y los envía a Internet.",
    "explanation": "La puerta de enlace o gateway es el dispositivo que recolecta la información de los sensores (a menudo vía Bluetooth o radiofrecuencia) y la transmite hacia los servicios de nube para su procesamiento."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cómo se llama el proceso de establecimiento de conexión en TCP donde se intercambian paquetes SYN, SYN-ACK y ACK?",
    "options": [
      "Encapsulamiento",
      "Saludo de tres vías (Three-way handshake)",
      "Resolución de nombres",
      "Enrutamiento estático"
    ],
    "answer": "Saludo de tres vías (Three-way handshake)",
    "hint": "Es el procedimiento que garantiza que ambos extremos están listos para hablar.",
    "explanation": "TCP es un protocolo orientado a la conexión que requiere que el cliente y el servidor se sincronicen y confirmen la disponibilidad antes de enviar cualquier dato real."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo de correo electrónico es mejor para un usuario que accede desde múltiples dispositivos y desea mantener sus carpetas sincronizadas?",
    "options": [
      "POP",
      "IMAP",
      "SMTP",
      "ICMP"
    ],
    "answer": "IMAP",
    "hint": "Deja los mensajes en el servidor y solo sincroniza la vista.",
    "explanation": "IMAP (Internet Message Access Protocol) permite que varios dispositivos vean el mismo buzón de correo. Si marcas un mensaje como leído en tu móvil, aparecerá igual en tu PC porque la información reside en el servidor."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función del 'Broker' en una arquitectura que utiliza el protocolo MQTT?",
    "options": [
      "Capturar datos de temperatura directamente del aire",
      "Servir de intermediario para distribuir los mensajes entre publicadores y suscriptores",
      "Cifrar el disco duro de los dispositivos IoT",
      "Suministrar energía eléctrica a los sensores"
    ],
    "answer": "Servir de intermediario para distribuir los mensajes entre publicadores y suscriptores",
    "hint": "Es el servidor central en el modelo pub/sub.",
    "explanation": "En MQTT, el broker recibe los mensajes de los dispositivos que publican datos y los reenvía a todos los dispositivos que se han suscrito a ese tema específico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al realizar un troubleshooting de red, usted nota asteriscos (*) constantes al inicio de un comando 'traceroute'. ¿Qué podría indicar esto?",
    "options": [
      "Que el paquete llegó con éxito al destino final",
      "Que hay un bloqueo por parte de un Firewall, Grupo de Seguridad o ACL",
      "Que la dirección IP es dinámica y ha cambiado",
      "Que el servidor DNS no ha sido configurado"
    ],
    "answer": "Que hay un bloqueo por parte de un Firewall, Grupo de Seguridad o ACL",
    "hint": "Significa que el nodo intermedio no está respondiendo al protocolo ICMP.",
    "explanation": "Los asteriscos en un traceroute indican que el dispositivo en ese salto no devolvió respuesta, lo cual es común si las políticas de seguridad de red bloquean el tráfico de diagnóstico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En un entorno de nube, ¿qué recurso de red actúa como un firewall virtual para controlar el tráfico entrante y saliente a nivel de instancia?",
    "options": [
      "Tabla de enrutamiento",
      "Internet Gateway",
      "Grupo de Seguridad (Security Group)",
      "Subred Privada"
    ],
    "answer": "Grupo de Seguridad (Security Group)",
    "hint": "Se asocia directamente a una instancia EC2.",
    "explanation": "Los Grupos de Seguridad permiten definir reglas de permitir tráfico (puerto, protocolo, origen) para proteger las instancias individuales dentro de una VPC."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué herramienta de Linux permite enviar paquetes TCP/IP personalizados para simular tráfico real y medir latencia avanzada?",
    "options": [
      "ping",
      "hping3",
      "systemctl",
      "ifconfig"
    ],
    "answer": "hping3",
    "hint": "Es una herramienta de diagnóstico avanzada que permite manipular banderas TCP.",
    "explanation": "hping3 es una utilidad potente para administradores de red que permite probar firewalls y reglas de red enviando paquetes personalizados más allá del simple ICMP de ping."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es el protocolo utilizado para la transferencia de archivos que, por seguridad, debería ser reemplazado por SFTP o FTPS?",
    "options": [
      "HTTP",
      "FTP",
      "DHCP",
      "DNS"
    ],
    "answer": "FTP",
    "hint": "Envía las credenciales y los datos en texto plano sin cifrar.",
    "explanation": "FTP (File Transfer Protocol) es un protocolo tradicional que carece de seguridad intrínseca. Se recomienda usar versiones que incorporen cifrado (SSL/TLS o SSH) para proteger la información."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿A qué nivel de infraestructura actúa un Grupo de Seguridad (Security Group) para proteger los recursos?",
    "options": [
      "A nivel de la Subred",
      "A nivel de la VPC completa",
      "A nivel de la instancia de EC2",
      "A nivel de la Puerta de enlace de Internet"
    ],
    "answer": "A nivel de la instancia de EC2",
    "hint": "Piensa en el componente más cercano al sistema operativo que filtra el tráfico directamente en la interfaz de red.",
    "explanation": "Los Grupos de Seguridad funcionan como un firewall virtual para las instancias, controlando el tráfico entrante y saliente a nivel de host."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es el bloque de CIDR más grande (con mayor cantidad de direcciones) que se puede elegir al crear una VPC?",
    "options": [
      "/28",
      "/24",
      "/16",
      "/8"
    ],
    "answer": "/16",
    "hint": "Recuerda que en la notación CIDR, un número más pequeño después de la barra indica una red más extensa.",
    "explanation": "AWS permite bloques de CIDR entre /16 (65,536 direcciones) y /28 (16 direcciones) para el direccionamiento de una VPC."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador detecta que un desarrollador no puede conectar a un servidor FTP mediante su IP. ¿Qué procedimiento es el más adecuado para solucionar este problema de conectividad?",
    "options": [
      "Reiniciar la VPC completa",
      "Revisar las reglas del Grupo de Seguridad y la ACL de Red para permitir el puerto correspondiente",
      "Cambiar la dirección IP privada del servidor",
      "Eliminar la Puerta de enlace de Internet"
    ],
    "answer": "Revisar las reglas del Grupo de Seguridad y la ACL de Red para permitir el puerto correspondiente",
    "hint": "El firewall es la primera barrera que bloquea puertos específicos como el del protocolo FTP.",
    "explanation": "El diagnóstico debe centrarse en verificar que tanto el Security Group (instancia) como la NACL (subred) permitan el tráfico en los puertos que utiliza FTP (usualmente 21)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo se encarga de asignar automáticamente direcciones IP y parámetros de configuración a los dispositivos de una red?",
    "options": [
      "DNS",
      "SMTP",
      "DHCP",
      "ICMP"
    ],
    "answer": "DHCP",
    "hint": "Sus siglas se refieren a la configuración dinámica de hosts.",
    "explanation": "DHCP automatiza la entrega de direcciones IP, evitando que el administrador tenga que configurar manualmente cada equipo conectado a la red."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función principal de un servidor de Sistema de Nombres de Dominio (DNS)?",
    "options": [
      "Cifrar el tráfico de red",
      "Traducir nombres de dominio legibles por humanos en direcciones IP",
      "Almacenar archivos multimedia para streaming",
      "Asignar puertos de escucha a las aplicaciones"
    ],
    "answer": "Traducir nombres de dominio legibles por humanos en direcciones IP",
    "hint": "Actúa como un directorio telefónico para la web.",
    "explanation": "DNS permite que los usuarios utilicen nombres como 'ejemplo.com' en lugar de tener que recordar direcciones IP numéricas complejas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo es el estándar para el envío de correos electrónicos entre clientes y servidores?",
    "options": [
      "FTP",
      "SMTP",
      "HTTP",
      "SNMP"
    ],
    "answer": "SMTP",
    "explanation": "SMTP es el protocolo diseñado específicamente para la transferencia y entrega de mensajes de correo electrónico en redes IP.",
    "hint": "Se encarga de la 'salida' o envío de los mensajes desde el emisor."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo garantiza que los datos lleguen a su destino de forma íntegra, en orden y mediante una conexión establecida?",
    "options": [
      "UDP",
      "TCP",
      "ICMP",
      "IP"
    ],
    "answer": "TCP",
    "hint": "Es un protocolo orientado a la conexión que utiliza acuses de recibo.",
    "explanation": "TCP gestiona la fragmentación, el reensamblaje y la retransmisión de paquetes perdidos para asegurar una comunicación confiable."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Con qué protocolo los dispositivos de red diagnostican problemas de comunicación y generan respuestas a errores de red?",
    "options": [
      "TCP",
      "UDP",
      "ICMP",
      "DHCP"
    ],
    "answer": "ICMP",
    "hint": "Es el protocolo utilizado por herramientas como 'ping' y 'traceroute'.",
    "explanation": "ICMP envía mensajes de control y error entre dispositivos para informar sobre la disponibilidad de un host o problemas en la ruta de red."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En AWS, si una subred no tiene una ruta hacia una Puerta de enlace de Internet (IGW) en su tabla de enrutamiento, se considera:",
    "options": [
      "Subred Pública",
      "Subred Híbrida",
      "Subred Privada",
      "Subred Huérfana"
    ],
    "answer": "Subred Privada",
    "hint": "La presencia o ausencia de salida directa a la web define la naturaleza de la subred.",
    "explanation": "Una subred privada es aquella cuyo tráfico interno no puede enrutarse directamente hacia el internet público a través de un IGW."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué significa que un Grupo de Seguridad sea 'con estado' (stateful)?",
    "options": [
      "Que guarda una copia de todos los datos transmitidos",
      "Que si el tráfico entrante es permitido, la respuesta saliente se permite automáticamente",
      "Que solo funciona dentro de un estado geográfico",
      "Que requiere permiso manual para cada paquete individual"
    ],
    "answer": "Que si el tráfico entrante es permitido, la respuesta saliente se permite automáticamente",
    "hint": "El firewall 'recuerda' la conexión que se acaba de abrir.",
    "explanation": "Al tener estado, el firewall reconoce que el tráfico de salida es una respuesta legítima a una solicitud de entrada previamente aprobada, sin necesidad de reglas de salida adicionales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la principal diferencia entre una ACL de Red (NACL) y un Grupo de Seguridad respecto al tráfico permitido?",
    "options": [
      "La ACL permite todo por defecto, el Grupo de Seguridad bloquea todo por defecto",
      "La ACL es con estado, el Grupo de Seguridad es sin estado",
      "La ACL puede contener reglas de denegación explícitas, el Grupo de Seguridad solo reglas de permiso",
      "No hay diferencia, ambos operan igual"
    ],
    "answer": "La ACL puede contener reglas de denegación explícitas, el Grupo de Seguridad solo reglas de permiso",
    "hint": "Piensa en cuál de los dos permite decir específicamente: 'No dejes pasar esta IP'.",
    "explanation": "En un Security Group solo puedes definir qué permites (lo demás se niega); en una NACL puedes crear reglas numeradas tanto para permitir como para denegar tráfico específico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si desea verificar si un servidor remoto tiene el puerto 443 abierto para recibir tráfico HTTPS, ¿qué comando sería el más eficiente?",
    "options": [
      "ping 8.8.8.8",
      "nslookup google.com",
      "telnet 192.168.1.1 443",
      "traceroute amazon.com"
    ],
    "answer": "telnet 192.168.1.1 443",
    "hint": "Esta herramienta intenta establecer una conexión TCP a un puerto específico.",
    "explanation": "Telnet permite probar la conectividad a nivel de puerto. Si la conexión falla, indica que el puerto está cerrado o bloqueado por un firewall."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Por qué una subred no puede abarcar más de una Zona de Disponibilidad (AZ) en AWS?",
    "options": [
      "Por limitaciones de costo",
      "Porque una subred es un recurso físicamente ligado a una infraestructura de zona específica",
      "Para obligar al usuario a usar más IP",
      "Porque el protocolo TCP no lo permite"
    ],
    "answer": "Porque una subred es un recurso físicamente ligado a una infraestructura de zona específica",
    "hint": "La topología de red de AWS divide las regiones en zonas aisladas físicamente.",
    "explanation": "En AWS, el diseño de alta disponibilidad requiere que las subredes residan en una sola AZ para garantizar el aislamiento de fallos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué ocurre si dos subredes dentro de la misma VPC intentan usar el mismo rango de direcciones IP (bloques de CIDR superpuestos)?",
    "options": [
      "La VPC las une automáticamente",
      "AWS impide la creación de la segunda subred por conflicto de direccionamiento",
      "Se crea una red de alta velocidad entre ambas",
      "El tráfico se duplica en ambas subredes"
    ],
    "answer": "AWS impide la creación de la segunda subred por conflicto de direccionamiento",
    "hint": "En redes IP, cada host o subred debe tener una identidad única para evitar errores de enrutamiento.",
    "explanation": "Los bloques CIDR dentro de una VPC deben ser únicos y no pueden solaparse para asegurar que el enrutador sepa exactamente a dónde enviar cada paquete."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es el propósito de una Puerta de enlace NAT (NAT Gateway) en una VPC?",
    "options": [
      "Permitir que instancias públicas reciban correos",
      "Permitir que instancias en una subred privada se conecten a Internet pero impidiendo conexiones externas hacia ellas",
      "Aumentar la velocidad del procesador de las instancias",
      "Proporcionar una dirección IP pública a cada instancia privada"
    ],
    "answer": "Permitir que instancias en una subred privada se conecten a Internet pero impidiendo conexiones externas hacia ellas",
    "hint": "Es un puente de 'un solo sentido' para la salida a la red pública.",
    "explanation": "El NAT Gateway permite que las instancias privadas descarguen actualizaciones o parches de internet sin exponerse directamente a conexiones entrantes maliciosas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al ejecutar 'traceroute', ¿qué información valiosa obtenemos además de la ruta del paquete?",
    "options": [
      "La contraseña del servidor de destino",
      "La latencia (tiempo de respuesta) de cada salto intermedio",
      "El número de usuarios conectados al sitio web",
      "El tipo de disco duro del router"
    ],
    "answer": "La latencia (tiempo de respuesta) de cada salto intermedio",
    "hint": "Muestra cuánto tiempo tarda el paquete en ir y volver de cada router en el camino.",
    "explanation": "Traceroute permite identificar en qué punto exacto de la red se está produciendo un retraso o una caída del tráfico mediante la medición de milisegundos por salto."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué indica un asterisco (*) en el resultado del comando traceroute?",
    "options": [
      "Que el servidor es seguro",
      "Que se ha agotado el tiempo de espera del salto (timeout)",
      "Que el paquete ha llegado a su destino final",
      "Que la conexión es inalámbrica"
    ],
    "answer": "Que se ha agotado el tiempo de espera del salto (timeout)",
    "hint": "Es una señal de que un dispositivo intermedio no respondió a la solicitud de diagnóstico.",
    "explanation": "Un asterisco significa que el router de ese salto no devolvió el mensaje ICMP, ya sea por saturación, fallo o configuración de seguridad que bloquea este tipo de tráfico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la principal característica del protocolo UDP frente a TCP?",
    "options": [
      "Es más lento pero seguro",
      "No tiene conexión (connectionless) y no garantiza la entrega de paquetes",
      "Solo funciona para transferir archivos grandes",
      "Requiere una triple negociación inicial"
    ],
    "answer": "No tiene conexión (connectionless) y no garantiza la entrega de paquetes",
    "hint": "Se prioriza la velocidad sobre la fiabilidad, ideal para streaming de video.",
    "explanation": "UDP envía paquetes sin verificar si el receptor está listo o si los recibió, eliminando la sobrecarga de confirmaciones para lograr mayor rapidez."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En una ACL de Red personalizada, ¿cuál es el comportamiento inicial antes de agregar cualquier regla?",
    "options": [
      "Permite todo el tráfico de forma predeterminada",
      "Deniega todo el tráfico (entrante y saliente) de forma predeterminada",
      "Permite solo el tráfico de AWS",
      "Solo permite el tráfico saliente"
    ],
    "answer": "Deniega todo el tráfico (entrante y saliente) de forma predeterminada",
    "hint": "A diferencia de la ACL por defecto, la personalizada es restrictiva por seguridad.",
    "explanation": "Las ACL de red personalizadas se crean con una regla final que bloquea todo; el administrador debe permitir explícitamente el tráfico deseado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué componente de la VPC se utiliza para conectar una red local (on-premises) con la nube de AWS de forma segura?",
    "options": [
      "Puerta de enlace NAT",
      "Puerta de enlace de red privada virtual (VPG) o Direct Connect",
      "Tabla de enrutamiento pública",
      "Servidor FTP"
    ],
    "answer": "Puerta de enlace de red privada virtual (VPG) o Direct Connect",
    "hint": "Busca una conexión que extienda tu centro de datos físico hacia la VPC.",
    "explanation": "Estos componentes permiten establecer túneles VPN o conexiones dedicadas para crear redes híbridas entre la oficina física y la nube."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al configurar una ACL de Red, ¿en qué orden se evalúan las reglas?",
    "options": [
      "De forma aleatoria",
      "En orden numérico ascendente (de menor a mayor)",
      "En orden de creación",
      "Las reglas de denegación siempre van primero"
    ],
    "answer": "En orden numérico ascendente (de menor a mayor)",
    "hint": "La regla con el número más bajo tiene prioridad absoluta.",
    "explanation": "Las NACL procesan las reglas secuencialmente. En cuanto un paquete coincide con una regla (permitir o denegar), se aplica esa acción y no se evalúan las reglas siguientes."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una instancia EC2 necesita comunicarse con otra instancia dentro de la misma VPC, ¿qué tipo de IP utiliza preferentemente para minimizar costos y latencia?",
    "options": [
      "IP Pública",
      "IP Privada",
      "IP Elástica",
      "IP Externa"
    ],
    "answer": "IP Privada",
    "hint": "Es el direccionamiento interno que no sale a la red pública.",
    "explanation": "El tráfico entre instancias usando IPs privadas permanece dentro de la red de AWS, lo que es más rápido, seguro y generalmente no tiene cargos por transferencia de datos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué puerto utiliza el protocolo HTTP de forma predeterminada para el tráfico web no cifrado?",
    "options": [
      "22",
      "443",
      "80",
      "3389"
    ],
    "answer": "80",
    "hint": "Es el puerto estándar para la navegación básica por internet.",
    "explanation": "HTTP utiliza el puerto 80, mientras que su versión segura y cifrada (HTTPS) utiliza el puerto 443."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué herramienta de diagnóstico realizaría una búsqueda inversa de DNS si le proporcionamos una dirección IP?",
    "options": [
      "ping",
      "nslookup",
      "telnet",
      "traceroute"
    ],
    "answer": "nslookup",
    "hint": "Se encarga de consultar los registros de los servidores de nombres.",
    "explanation": "nslookup puede resolver un nombre en una IP o viceversa (resolución inversa), permitiendo verificar si los registros DNS están correctamente configurados."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En una tabla de enrutamiento, la ruta '0.0.0.0/0' dirigida a un Internet Gateway se conoce comúnmente como:",
    "options": [
      "Ruta local",
      "Ruta por defecto",
      "Ruta de bucle invertido",
      "Ruta estática cerrada"
    ],
    "answer": "Ruta por defecto",
    "hint": "Es el camino que sigue el tráfico cuando no hay un destino específico dentro de la red privada.",
    "explanation": "La ruta por defecto indica que cualquier tráfico destinado a una dirección fuera de la VPC debe enviarse a la puerta de enlace de internet."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Por qué es necesario habilitar 'puertos efímeros' en una ACL de Red para que una conexión web funcione?",
    "options": [
      "Porque los servidores web cambian de IP constantemente",
      "Porque la NACL no tiene estado y debe permitir el tráfico de regreso en el rango de puertos que el cliente abrió",
      "Para aumentar la seguridad del cifrado",
      "Para permitir la asignación de DHCP"
    ],
    "answer": "Porque la NACL no tiene estado y debe permitir el tráfico de regreso en el rango de puertos que el cliente abrió",
    "hint": "Al no recordar la conexión, el firewall debe tener una puerta abierta para que la respuesta del servidor entre al cliente.",
    "explanation": "Cuando un cliente inicia una conexión, usa un puerto temporal (efímero). Como la NACL es 'stateless', si no permites explícitamente el rango de esos puertos de regreso, la respuesta del servidor será bloqueada."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo se utiliza para la administración remota segura de servidores Linux a través de la terminal?",
    "options": [
      "RDP",
      "SSH",
      "FTP",
      "TELNET"
    ],
    "answer": "SSH",
    "hint": "Utiliza el puerto 22 y cifra toda la comunicación.",
    "explanation": "SSH (Secure Shell) es el estándar para acceder y administrar servidores de forma remota garantizando que las credenciales y comandos viajen cifrados."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un Grupo de Seguridad bloquea todo el tráfico de forma predeterminada. ¿Qué información es obligatoria definir al crear una regla de entrada?",
    "options": [
      "Protocolo, rango de puertos y fuente (IP/Grupo)",
      "Nombre del usuario y contraseña",
      "Tipo de sistema operativo de la instancia",
      "Ubicación geográfica del servidor"
    ],
    "answer": "Protocolo, rango de puertos y fuente (IP/Grupo)",
    "hint": "Son los tres pilares técnicos para filtrar cualquier paquete de red.",
    "explanation": "Para permitir acceso, se debe especificar qué lenguaje hablan (protocolo), por qué puerta entran (puerto) y quién tiene permiso (fuente)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué sucede con el tráfico saliente en un Grupo de Seguridad recién creado?",
    "options": [
      "Se bloquea todo por seguridad",
      "Se permite todo el tráfico saliente de forma predeterminada",
      "Solo se permite tráfico hacia AWS",
      "Se requiere una suscripción adicional"
    ],
    "answer": "Se permite todo el tráfico saliente de forma predeterminada",
    "hint": "Las instancias suelen tener libertad para buscar recursos afuera a menos que se restrinja.",
    "explanation": "Por defecto, los Grupos de Seguridad permiten que la instancia inicie cualquier comunicación hacia el exterior, centrándose la restricción inicial en el tráfico entrante."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo es 'orientado a la conexión' y realiza un saludo de tres vías (3-way handshake)?",
    "options": [
      "UDP",
      "TCP",
      "ICMP",
      "DNS"
    ],
    "answer": "TCP",
    "hint": "Antes de enviar datos, cliente y servidor deben 'ponerse de acuerdo'.",
    "explanation": "El saludo de tres vías (SYN, SYN-ACK, ACK) asegura que ambas partes estén listas y sincronizadas antes de comenzar la transferencia formal de información."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un arquitecto diseña una subred con el bloque CIDR 10.0.0.0/28. ¿Cuántas direcciones IP podrá asignar realmente a sus instancias de EC2 dentro de esa subred?",
    "options": [
      "16",
      "14",
      "11",
      "13"
    ],
    "answer": "11",
    "hint": "AWS reserva direcciones específicas para funciones internas como DNS, Gateway y red.",
    "explanation": "Aunque un bloque /28 tiene 16 direcciones totales, AWS reserva siempre las primeras cuatro y la última de cada subred para gestión de red, enrutamiento y DNS interno, dejando solo 11 disponibles para el usuario."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted tiene dos VPCs conectadas mediante VPC Peering (VPC A y VPC B). La VPC B está conectada a una tercera VPC C. ¿Por qué las instancias de la VPC A no pueden comunicarse con la VPC C?",
    "options": [
      "Porque el ancho de banda está limitado",
      "Porque el VPC Peering no es transitivo",
      "Porque necesitan un Internet Gateway",
      "Porque las direcciones IP son de Clase A"
    ],
    "answer": "Porque el VPC Peering no es transitivo",
    "hint": "En redes, si A habla con B y B habla con C, no siempre A habla con C automáticamente.",
    "explanation": "El enrutamiento en VPC Peering es directo. Si necesitas que A se comunique con C, debes establecer un túnel directo entre ellas o utilizar un Transit Gateway para centralizar las conexiones."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Una instancia en una subred privada debe acceder a un bucket de S3 sin pasar por el Internet público ni usar una NAT Gateway para ahorrar costos. ¿Qué recurso es el más adecuado?",
    "options": [
      "Un Internet Gateway",
      "Un VPC Endpoint de tipo Gateway",
      "Un túnel VPN",
      "Una IP Elástica"
    ],
    "answer": "Un VPC Endpoint de tipo Gateway",
    "hint": "Busca una forma de crear un 'atajo' privado dentro de la infraestructura de AWS.",
    "explanation": "Los Gateway Endpoints permiten que el tráfico hacia S3 o DynamoDB permanezca dentro de la red privada de AWS, mejorando la seguridad y eliminando cargos por transferencia de datos hacia internet."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un servidor web recibe miles de peticiones simultáneas por el puerto 443. El administrador nota que la CPU está al 100% solo procesando el cifrado/descifrado SSL. ¿Qué solución de red aliviaría esta carga?",
    "options": [
      "Usar una NAT Gateway",
      "Implementar un Application Load Balancer con SSL Offloading",
      "Cambiar a una dirección IP estática",
      "Abrir el puerto 80 para evitar el cifrado"
    ],
    "answer": "Implementar un Application Load Balancer con SSL Offloading",
    "hint": "Se trata de delegar la tarea pesada de seguridad a un dispositivo especializado antes de llegar al servidor.",
    "explanation": "El SSL Offloading permite que el balanceador de carga gestione el cifrado de las conexiones. Así, el tráfico llega al servidor EC2 ya descifrado (o con un cifrado más ligero), liberando ciclos de CPU para la aplicación."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al intentar conectar por SSH a una instancia, recibe un error de 'Connection Timeout'. El Security Group permite el puerto 22 y la instancia tiene una IP pública. ¿Cuál es el siguiente componente lógico a revisar?",
    "options": [
      "La memoria RAM de la instancia",
      "La Tabla de Enrutamiento y la presencia de un Internet Gateway",
      "El nombre de usuario del sistema operativo",
      "La versión del protocolo SSH"
    ],
    "answer": "La Tabla de Enrutamiento y la presencia de un Internet Gateway",
    "hint": "Tener una puerta (SG) abierta no sirve si no hay una carretera (Ruta) que lleve a la calle (Internet).",
    "explanation": "Para que una instancia sea accesible desde fuera, su subred debe tener una ruta (0.0.0.0/0) apuntando a un Internet Gateway. Sin esto, el tráfico no sabe cómo entrar o salir de la red virtual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted necesita que su aplicación sea resistente a fallos a nivel regional. ¿Cómo debería distribuir sus subredes?",
    "options": [
      "Crear todas las subredes en la misma Zona de Disponibilidad",
      "Crear subredes en diferentes Zonas de Disponibilidad (AZ)",
      "Usar una sola subred muy grande con bloque /16",
      "Colocar todas las instancias en una subred pública"
    ],
    "answer": "Crear subredes en diferentes Zonas de Disponibilidad (AZ)",
    "hint": "Si un centro de datos físico falla, necesitas que el otro siga operando.",
    "explanation": "Las Zonas de Disponibilidad son centros de datos aislados. Al distribuir recursos en varias AZ, aseguras que si una zona tiene problemas eléctricos o de red, la aplicación continúe funcionando en las otras."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un dispositivo IoT envía datos críticos cada segundo, pero la red es inestable. ¿Qué característica del protocolo MQTT ayuda a asegurar que el mensaje llegue al Broker?",
    "options": [
      "El uso exclusivo de HTTPS",
      "Los niveles de Calidad de Servicio (QoS)",
      "El puerto 3389",
      "El saludo de tres vías de UDP"
    ],
    "answer": "Los niveles de Calidad de Servicio (QoS)",
    "hint": "Es un mecanismo que confirma la recepción del mensaje entre el emisor y el receptor.",
    "explanation": "MQTT ofrece niveles de QoS (0, 1 y 2). El QoS 1 garantiza que el mensaje se entregue al menos una vez, y el QoS 2 garantiza exactamente una entrega, lo cual es vital en redes poco fiables."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted administra una flota de Amazon WorkSpaces. Un usuario reporta que no puede imprimir en su impresora local desde el escritorio virtual. ¿Qué configuración de red es fundamental revisar?",
    "options": [
      "La resolución de pantalla del WorkSpace",
      "Los permisos de Directory Service y la visibilidad de la red local",
      "El tamaño del disco duro Root",
      "El protocolo MQTT en el WorkSpace"
    ],
    "answer": "Los permisos de Directory Service y la visibilidad de la red local",
    "hint": "WorkSpaces necesita comunicarse con el entorno del cliente para reconocer dispositivos periféricos.",
    "explanation": "La impresión local en WorkSpaces depende de las políticas del grupo en Directory Service y de que los controladores y puertos necesarios no estén bloqueados por el firewall de la red corporativa o de la VPC."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador necesita restringir el acceso a una base de datos para que SOLO los servidores de aplicaciones puedan conectarse, sin importar si sus IPs cambian. ¿Cuál es la mejor práctica?",
    "options": [
      "Permitir el rango completo de la VPC en la NACL",
      "Usar el ID del Security Group de los servidores de aplicaciones como fuente en la regla del SG de la base de datos",
      "Asignar IPs estáticas a todos los servidores",
      "Deshabilitar el firewall para tráfico interno"
    ],
    "answer": "Usar el ID del Security Group de los servidores de aplicaciones como fuente en la regla del SG de la base de datos",
    "hint": "Los Grupos de Seguridad permiten referenciar otros grupos en lugar de números IP.",
    "explanation": "Referenciar un ID de Security Group crea una regla dinámica. Si escalas tu aplicación y agregas más servidores, estos tendrán acceso automáticamente a la base de datos siempre que pertenezcan al grupo permitido."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En una red híbrida, usted nota que la transferencia de datos entre su oficina y AWS es lenta y fluctúa según el uso de internet de los empleados. ¿Qué servicio ofrece una conexión dedicada y constante?",
    "options": [
      "Site-to-Site VPN",
      "AWS Direct Connect",
      "NAT Gateway de alta velocidad",
      "Amazon Route 53"
    ],
    "answer": "AWS Direct Connect",
    "hint": "Es un cable físico directo que no pasa por el internet público.",
    "explanation": "A diferencia de una VPN (que viaja por internet), Direct Connect establece un enlace privado y dedicado entre el centro de datos del cliente y AWS, garantizando latencia mínima y ancho de banda consistente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Una instancia de EC2 tiene una IP pública asignada automáticamente por AWS. ¿Qué sucederá con esa dirección IP si la instancia se detiene (Stop) y se vuelve a iniciar (Start)?",
    "options": [
      "La dirección IP se mantiene idéntica",
      "La dirección IP cambiará por una nueva",
      "La instancia perderá toda conectividad a internet",
      "La dirección IP se convertirá automáticamente en IP Elástica"
    ],
    "answer": "La dirección IP cambiará por una nueva",
    "hint": "Las direcciones públicas dinámicas se liberan cuando el recurso deja de estar activo.",
    "explanation": "Las IPs públicas estándar son dinámicas. Al detener la instancia, AWS libera la IP al grupo común. Para mantener la misma IP tras un reinicio, se debe asignar una 'Elastic IP'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Su empresa requiere que todo el tráfico saliente de las subredes hacia internet sea inspeccionado por un firewall centralizado en una VPC de inspección. ¿Qué servicio facilita este enrutamiento complejo entre múltiples VPCs?",
    "options": [
      "VPC Peering",
      "AWS Transit Gateway",
      "Internet Gateway",
      "Classic Load Balancer"
    ],
    "answer": "AWS Transit Gateway",
    "hint": "Actúa como un hub de red que conecta miles de VPCs y redes on-premises.",
    "explanation": "Transit Gateway simplifica la topología de red al actuar como un enrutador central. Permite implementar arquitecturas de tipo 'hub-and-spoke', facilitando la inspección de tráfico y el enrutamiento transitivo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un desarrollador configuró un servidor web en una instancia EC2. Internamente el servidor funciona (curl localhost:80 responde), pero desde fuera nadie puede entrar. El Security Group está correcto. ¿Qué debería revisar en el sistema operativo?",
    "options": [
      "La cantidad de espacio en disco",
      "El firewall interno del SO (iptables o ufw)",
      "La versión del kernel de Linux",
      "El archivo de configuración de DNS"
    ],
    "answer": "El firewall interno del SO (iptables o ufw)",
    "hint": "Existen capas de seguridad tanto en la infraestructura de la nube como dentro del propio servidor.",
    "explanation": "Incluso si el Security Group de AWS permite el tráfico, el firewall interno del sistema operativo (como ufw en Ubuntu) puede estar bloqueando las conexiones entrantes al puerto 80."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted necesita configurar una NAT Gateway para dar salida a internet a sus servidores de base de datos. ¿En qué tipo de subred debe ubicar físicamente el NAT Gateway?",
    "options": [
      "En la subred privada junto a las bases de datos",
      "En una subred pública con ruta al Internet Gateway",
      "En una VPC diferente dedicada solo a NAT",
      "No necesita subred, es un servicio global"
    ],
    "answer": "En una subred pública con ruta al Internet Gateway",
    "hint": "El NAT Gateway debe poder hablar con internet para poder traducir el tráfico de otros.",
    "explanation": "Para que un NAT Gateway funcione, debe estar en una subred pública para tener acceso al Internet Gateway. Luego, las instancias en subredes privadas se configuran para enviar su tráfico saliente hacia ese NAT Gateway."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la principal ventaja de utilizar un 'Network Load Balancer' (NLB) frente a un 'Application Load Balancer' (ALB) para aplicaciones de alto rendimiento?",
    "options": [
      "El NLB puede leer cookies de sesión",
      "El NLB maneja millones de peticiones por segundo con latencia ultra baja y soporta IPs estáticas",
      "El NLB es gratuito",
      "El NLB permite filtrar tráfico por URL"
    ],
    "answer": "El NLB maneja millones de peticiones por segundo con latencia ultra baja y soporta IPs estáticas",
    "hint": "Opera en la Capa 4 (Transporte) en lugar de la Capa 7 (Aplicación).",
    "explanation": "Al operar a nivel de TCP/UDP, el NLB es extremadamente rápido y eficiente. Es la opción ideal para tráfico masivo, conexiones de larga duración o cuando se requiere una dirección IP fija para el balanceador."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un usuario reporta que su escritorio virtual de Amazon WorkSpaces está 'congelado' o muy lento. Al revisar la red del usuario, el técnico nota una latencia (RTT) de 400ms. ¿Qué indica esto?",
    "options": [
      "Que el servidor de AWS está caído",
      "Que la conexión de internet del usuario tiene un retraso excesivo para una experiencia fluida",
      "Que el usuario ha agotado su memoria RAM",
      "Que el protocolo de autenticación ha fallado"
    ],
    "answer": "Que la conexión de internet del usuario tiene un retraso excesivo para una experiencia fluida",
    "hint": "WorkSpaces requiere tiempos de respuesta rápidos (idealmente <100ms) para que el movimiento del mouse sea natural.",
    "explanation": "La latencia (Round Trip Time) es el tiempo que tarda el dato en ir al servidor y volver. 400ms es demasiado alto para video interactivo, lo que provoca lag o congelamiento en la sesión de escritorio remoto."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En una VPC, usted desea bloquear permanentemente una dirección IP maliciosa específica que está intentando atacar sus servidores. ¿Dónde debería colocar esta regla de denegación?",
    "options": [
      "En el Security Group",
      "En la ACL de Red (NACL)",
      "En el archivo host de cada instancia",
      "En el Internet Gateway"
    ],
    "answer": "En la ACL de Red (NACL)",
    "hint": "Necesitas un componente que permita reglas de 'Denegar' (Deny) explícitamente.",
    "explanation": "Los Security Groups solo permiten reglas de 'Permitir'. Para bloquear una IP específica por completo, se debe usar la NACL de la subred, que permite crear reglas de denegación basadas en direcciones IP de origen."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo utiliza AWS IoT Core para permitir que los dispositivos mantengan una conexión abierta con el servidor consumiendo el mínimo de batería posible?",
    "options": [
      "HTTP/2",
      "MQTT con Keep-Alive",
      "Telnet",
      "ICMP Echo"
    ],
    "answer": "MQTT con Keep-Alive",
    "hint": "Permite que el dispositivo avise que sigue 'vivo' sin enviar grandes cantidades de datos.",
    "explanation": "El mecanismo Keep-Alive de MQTT permite que el cliente y el broker confirmen que la conexión sigue activa mediante pequeños paquetes (ping), evitando tener que reconectarse constantemente y ahorrando energía."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al configurar un registro DNS en Route 53, usted elige una política de 'Enrutamiento por Latencia'. ¿Qué hará AWS cuando un usuario intente entrar a su web?",
    "options": [
      "Enviarlo al servidor más barato",
      "Enviarlo a la región de AWS que le ofrezca el menor tiempo de respuesta",
      "Enviarlo al servidor que tenga menos carga de CPU",
      "Enviarlo siempre a la región de Virginia (us-east-1)"
    ],
    "answer": "Enviarlo a la región de AWS que le ofrezca el menor tiempo de respuesta",
    "hint": "Prioriza la velocidad de carga para el usuario final.",
    "explanation": "El enrutamiento por latencia dirige a los usuarios a la infraestructura de AWS que tenga el menor retraso de red desde su ubicación actual, mejorando significativamente la experiencia de navegación."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted observa que los paquetes de red de su aplicación son de 1500 bytes, pero al pasar por un túnel VPN se fragmentan y causan lentitud. ¿A qué concepto técnico se refiere este problema?",
    "options": [
      "Baja resolución de DNS",
      "MTU (Maximum Transmission Unit) y MSS",
      "Falta de puertos efímeros",
      "Configuración de clase de IP"
    ],
    "answer": "MTU (Maximum Transmission Unit) y MSS",
    "hint": "Es el tamaño máximo de un paquete que puede pasar por una interfaz de red.",
    "explanation": "La MTU define el tamaño máximo de los paquetes. Los túneles VPN añaden encabezados adicionales (overhead), reduciendo el espacio disponible para los datos. Si el paquete original es muy grande, debe dividirse (fragmentarse), lo que aumenta la latencia."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el modelo de responsabilidad compartida de AWS, ¿quién es responsable de asegurar que el software del sistema operativo dentro de un Amazon WorkSpace esté actualizado con parches de seguridad?",
    "options": [
      "AWS",
      "El cliente (usuario/empresa)",
      "Microsoft (solo si es Windows)",
      "El fabricante del portátil del usuario"
    ],
    "answer": "El cliente (usuario/empresa)",
    "hint": "AWS proporciona la infraestructura, pero tú gestionas el contenido del escritorio.",
    "explanation": "Aunque AWS facilita herramientas para el mantenimiento, la responsabilidad de aplicar parches, configurar el antivirus y gestionar el software dentro del sistema operativo del WorkSpace recae sobre el cliente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador necesita conectar una red corporativa a una VPC de AWS pero requiere un cifrado de extremo a extremo a través de internet. ¿Cuál es la solución más rápida de implementar?",
    "options": [
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
      "VPC Peering",
      "S3 Transfer Acceleration"
    ],
    "answer": "AWS Site-to-Site VPN",
    "hint": "Utiliza túneles IPsec sobre la red pública de internet.",
    "explanation": "La VPN de sitio a sitio permite crear un túnel cifrado de forma rápida y económica. Aunque depende de la calidad del internet público, ofrece seguridad mediante protocolos de cifrado estándar para unir redes."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted está configurando una regla de salida en una NACL. ¿Por qué debe incluir el rango de puertos 1024-65535 para permitir que sus usuarios vean una página web externa?",
    "options": [
      "Porque son los puertos que usa el servidor de AWS",
      "Son los puertos efímeros que el cliente abre para recibir la respuesta del servidor",
      "Es el rango de puertos asignado a las bases de datos",
      "Para permitir el tráfico de ping"
    ],
    "answer": "Son los puertos efímeros que el cliente abre para recibir la respuesta del servidor",
    "hint": "Cuando el cliente sale por el puerto 80, espera que le respondan por una puerta temporal abierta en su equipo.",
    "explanation": "Debido a que la NACL es 'stateless', no sabe que el tráfico de regreso pertenece a una sesión abierta. Si no permites el rango de puertos efímeros de salida, la respuesta del servidor web nunca llegará al navegador del usuario."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función del archivo 'Shadow' en un dispositivo IoT que se comunica con AWS IoT Core?",
    "options": [
      "Almacenar una copia de seguridad del firmware",
      "Mantener el último estado deseado y reportado del dispositivo, incluso si está desconectado",
      "Cifrar la conexión inalámbrica",
      "Detectar ataques de denegación de servicio"
    ],
    "answer": "Mantener el último estado deseado y reportado del dispositivo, incluso si está desconectado",
    "hint": "Es un 'gemelo digital' en la nube.",
    "explanation": "El Device Shadow permite que las aplicaciones interactúen con un dispositivo aunque este no tenga conexión. Cuando el dispositivo vuelve a conectarse, sincroniza su estado real con el estado guardado en el Shadow."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted quiere implementar una estrategia de 'Defensa en Profundidad'. ¿Cómo aplicaría el filtrado de tráfico?",
    "options": [
      "Usar solo Security Groups para facilitar la administración",
      "Usar NACL a nivel de subred para filtrado grueso y Security Groups a nivel de instancia para filtrado fino",
      "Deshabilitar las NACL y usar solo firewalls de terceros",
      "Confiar solo en el cifrado TLS"
    ],
    "answer": "Usar NACL a nivel de subred para filtrado grueso y Security Groups a nivel de instancia para filtrado fino",
    "hint": "Se trata de poner múltiples capas de seguridad que el atacante deba cruzar.",
    "explanation": "Al combinar NACLs (que actúan primero a nivel de subred) y Security Groups (que actúan a nivel de instancia), creas dos barreras de seguridad independientes, aumentando la protección general de la infraestructura."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un servidor de aplicaciones en una subred privada necesita sincronizar su hora con un servidor NTP en internet. No tiene NAT Gateway. ¿Qué otra opción de AWS permite esto de forma segura?",
    "options": [
      "Asignar una IP pública temporal",
      "Usar una Instancia NAT (EC2 configurada manualmente)",
      "Abrir todos los puertos de la NACL",
      "Mover el servidor a una subred pública"
    ],
    "answer": "Usar una Instancia NAT (EC2 configurada manualmente)",
    "hint": "Antes de existir el servicio NAT Gateway, los administradores usaban este método.",
    "explanation": "Una instancia NAT es una instancia EC2 configurada para realizar la traducción de direcciones de red. Aunque requiere más mantenimiento que un NAT Gateway, cumple la misma función de permitir salida a internet conservando la privacidad."
  }
  
  ]);
})();
