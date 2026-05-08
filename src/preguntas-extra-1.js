/**
 * PREGUNTAS EXTRA (opcional)
 * No borres nada de data-editable.js: aqui sigues anadiendo bloques.
 *
 * Reglas:
 * - subjectId y topicId deben existir en data-editable.js O los defines aqui abajo primero.
 * - answer debe coincidir exacto con una opcion de options.
 *
 * Para un segundo archivo mas grande: copia este archivo a preguntas-extra-2.js,
 * anade otra linea <script src="./preguntas-extra-2.js"></script> en index.html (debajo de este).
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
"topicId": "clf-1",
"question": "En términos de economía de la nube, ¿qué sucede con el costo unitario de los servicios a medida que AWS crece?",
"options": [
"Aumenta debido a la complejidad de la red global.",
"Se mantiene estático para evitar la inflación.",
"Disminuye gracias a las economías de escala.",
"Depende únicamente del país donde se encuentre el cliente."
],
"answer": "Disminuye gracias a las economías de escala.",
"hint": "Es uno de los beneficios financieros clave de AWS.",
"explanation": "Las economías de escala permiten a AWS reducir sus propios costos operativos y de hardware, lo que históricamente ha resultado en múltiples reducciones de precios para el cliente final."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un cliente tiene 500 TB de datos en un NAS local y quiere moverlos a Amazon S3. No tiene una conexión Direct Connect y su VPN es de solo 50 Mbps. ¿Qué herramienta de migración es la más eficiente?",
"options": [
"AWS Snowball Edge.",
"Amazon S3 Transfer Acceleration sobre Internet pública.",
"Subir los archivos mediante la consola de AWS.",
"AWS DataSync."
],
"answer": "AWS Snowball Edge.",
"hint": "El volumen de datos es demasiado grande para esa velocidad de conexión.",
"explanation": "Con 500 TB y una conexión lenta, la transferencia en línea tardaría meses. AWS Snowball Edge permite mover esos datos físicamente de forma mucho más rápida y segura."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de las siguientes afirmaciones sobre los costos on-premises es verdadera según el análisis de TCO?",
"options": [
"Solo incluyen el precio de compra del servidor.",
"Son menores que los de la nube porque el hardware es propiedad de la empresa.",
"Incluyen costos directos e indirectos, como personal de TI, espacio en rack y electricidad.",
"No incluyen costos de licencias de software."
],
"answer": "Incluyen costos directos e indirectos, como personal de TI, espacio en rack y electricidad.",
"hint": "El TCO mira la 'foto completa' de los gastos.",
"explanation": "El costo total de propiedad en las instalaciones abarca no solo el hardware, sino también los gastos operativos y el personal necesario para mantenerlo funcionando."
},
{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de los siguientes enunciados sobre el sistema operativo Linux es verdadero?",
    "options": [
      "Linux está basado en el sistema operativo Microsoft Windows.",
      "Linux solo se utiliza en computadoras de escritorio.",
      "Linux es de código abierto.",
      "Linux es propiedad de un particular."
    ],
    "answer": "Linux es de código abierto.",
    "hint": "Cualquier persona puede ver, modificar y distribuir su código fuente.",
    "explanation": "Linux es un sistema operativo de código abierto (open source), lo que significa que su código es accesible para el público bajo licencias como la GPL."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué componente del sistema operativo Linux asigna la memoria que se utiliza para ejecutar aplicaciones?",
    "options": [
      "Archivos de configuración",
      "Kernel",
      "Shell",
      "Interfaz de usuario"
    ],
    "answer": "Kernel",
    "hint": "Es el núcleo del sistema que gestiona el hardware y los recursos.",
    "explanation": "El Kernel es la parte central del sistema operativo que administra la comunicación entre el software y el hardware, incluyendo la gestión de memoria y CPU."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué es un daemon de Linux?",
    "options": [
      "Un programa que administra el sistema de archivos de una computadora.",
      "Un programa que ofrece un servicio y se ejecuta en segundo plano.",
      "Un servidor que controla los dispositivos conectados a otras computadoras.",
      "Un componente de hardware que brinda servicios de seguridad en una computadora."
    ],
    "answer": "Un programa que ofrece un servicio y se ejecuta en segundo plano.",
    "hint": "Suelen terminar con la letra 'd' (ej. httpd, sshd).",
    "explanation": "Los daemons son procesos que se ejecutan de forma continua en segundo plano para atender peticiones de servicios sin intervención directa del usuario."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Con qué comando se muestra el nombre de la cuenta con la que se ha iniciado sesión en el shell de Linux predeterminado?",
    "options": [
      "man hostname",
      "more hostname",
      "ls hostname",
      "print hostname"
    ],
    "answer": "man hostname",
    "hint": "Nota: La imagen muestra una selección en 'man hostname', aunque el comando directo para el nombre de host es 'hostname'.",
    "explanation": "Basado en la selección de la imagen, se hace referencia a comandos relacionados con el 'hostname'. (Nota técnica: El comando real es 'whoami' para el usuario o 'hostname' para la máquina)."
  },
{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Dentro de una página de manual abierta con el comando 'man', ¿cuál es el procedimiento correcto para buscar una cadena de texto específica?",
    "options": [
      "Presionar Ctrl + F seguido del texto.",
      "Escribir una barra diagonal (/) seguida de la cadena de búsqueda.",
      "Utilizar el comando 'grep' dentro de la interfaz de man.",
      "Presionar la tecla 's' para abrir el cuadro de búsqueda."
    ],
    "answer": "Escribir una barra diagonal (/) seguida de la cadena de búsqueda.",
    "hint": "Es un atajo común en visores de texto como 'less' o 'vi'.",
    "explanation": "Según la documentación de AWS, para buscar una cadena en la documentación de man se utiliza la sintaxis /<searchString>."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Amazon Linux 2 es una distribución de clase empresarial diseñada para máquinas virtuales de AWS. ¿De qué distribución principal se deriva?",
    "options": [
      "Debian",
      "Ubuntu",
      "RHEL (Red Hat Enterprise Linux)",
      "openSUSE"
    ],
    "answer": "RHEL (Red Hat Enterprise Linux)",
    "hint": "Pertenece a la misma familia que Fedora y CentOS.",
    "explanation": "Amazon Linux 2 se deriva de RHEL, lo que le otorga estabilidad y compatibilidad con paquetes RPM."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál fue el cambio significativo anunciado para la distribución CentOS en diciembre de 2020 mencionado en el material?",
    "options": [
      "Se convirtió en una distribución de pago.",
      "Fue adquirida directamente por Amazon.",
      "Fue reemplazada por CentOS Stream.",
      "Dejó de utilizar el kernel de Linux."
    ],
    "answer": "Fue reemplazada por CentOS Stream.",
    "hint": "Pasó de ser una reconstrucción de RHEL a ser una rama de desarrollo previo.",
    "explanation": "CentOS (Community Enterprise Operating System) fue reemplazado por CentOS Stream en diciembre de 2020."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Al consultar una página de manual (man page), ¿qué sección describe específicamente la sintaxis y las opciones disponibles de forma resumida?",
    "options": [
      "Nombre",
      "Descripción",
      "Sinopsis",
      "Opciones"
    ],
    "answer": "Sinopsis",
    "hint": "Es la parte que muestra cómo se 'escribe' el comando con sus argumentos.",
    "explanation": "La sección de Sinopsis proporciona el formato técnico y los parámetros que acepta el comando."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Según la definición de una 'Distribución de Linux', ¿cuáles son los tres componentes fundamentales que la integran?",
    "options": [
      "Kernel, Hardware y GUI.",
      "Kernel de Linux, herramientas complementarias y aplicaciones de software.",
      "Bash shell, manuales de usuario y BIOS.",
      "Soporte técnico, servidores y almacenamiento."
    ],
    "answer": "Kernel de Linux, herramientas complementarias y aplicaciones de software.",
    "hint": "Es el paquete completo que permite que el SO sea funcional para el usuario final.",
    "explanation": "Una distribución no es solo el núcleo (kernel), sino el conjunto de este con utilidades y programas adicionales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función exacta de la tecla 'Barra espaciadora' cuando se está navegando por el manual de un comando en Linux?",
    "options": [
      "Avanza una línea hacia abajo.",
      "Cierra el manual inmediatamente.",
      "Se desplaza hacia abajo una página completa.",
      "Resalta las palabras clave en negrita."
    ],
    "answer": "Se desplaza hacia abajo una página completa.",
    "hint": "Es más rápido que usar las flechas del teclado.",
    "explanation": "Mientras que las flechas bajan línea por línea, la barra espaciadora permite una lectura más rápida avanzando por bloques de página."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Sobre las interfaces de usuario en las distribuciones de Linux, ¿qué afirmación es correcta según las 'Conclusiones clave' de AWS?",
    "options": [
      "Todas las distribuciones requieren una GUI para funcionar.",
      "El shell bash solo está disponible en distribuciones con GUI.",
      "Todas las distribuciones vienen con una CLI, pero solo algunas ofrecen una GUI.",
      "La GUI es el componente principal del kernel de Linux."
    ],
    "answer": "Todas las distribuciones vienen con una CLI, pero solo algunas ofrecen una GUI.",
    "hint": "Linux es nativamente de línea de comandos, especialmente en entornos de servidor.",
    "explanation": "En entornos de nube y servidores, la CLI es el estándar universal, mientras que la interfaz gráfica es opcional."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede técnicamente si un usuario ejecuta el comando 'man man' en la terminal?",
    "options": [
      "El sistema genera un error por comando duplicado.",
      "Se muestra el manual del sistema operativo completo.",
      "Se abre la página de manual que explica cómo utilizar el propio comando 'man'.",
      "Se reinicia el servicio de documentación del kernel."
    ],
    "answer": "Se abre la página de manual que explica cómo utilizar el propio comando 'man'.",
    "hint": "Es el ejemplo de autorreferencia dado en las diapositivas.",
    "explanation": "Como 'man' es un comando en sí mismo, tiene su propia entrada en el manual para explicar su sintaxis y opciones."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "De las siguientes distribuciones, ¿cuáles comparten la misma 'fuente' u origen según el esquema de genealogía de Linux de AWS?",
    "options": [
      "Fedora, RHEL y CentOS.",
      "Ubuntu, SUSE y Debian.",
      "Amazon Linux 2, Fedora y openSUSE.",
      "Debian, RHEL y Ubuntu."
    ],
    "answer": "Fedora, RHEL y CentOS.",
    "hint": "Busca la familia que utiliza paquetes .rpm.",
    "explanation": "Fedora sirve como base comunitaria para RHEL, del cual se derivan CentOS y Amazon Linux 2."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la tecla estándar para salir (quit) de la visualización de una página de manual y volver al prompt del shell?",
    "options": [
      "Esc",
      "q",
      "Ctrl + C",
      "exit"
    ],
    "answer": "q",
    "hint": "Es la inicial de la palabra en inglés para 'salir'.",
    "explanation": "La tecla 'q' finaliza el proceso del visor de texto y devuelve al usuario a la línea de comandos."
  },
,
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál de estos componentes NO forma parte de la sintaxis principal de un comando de Bash según el material de AWS?",
"options": [
"Comando",
"Opciones",
"Argumentos",
"Compilador"
],
"answer": "Compilador",
"hint": "Bash es un intérprete, no requiere compilación previa del comando.",
"explanation": "La sintaxis típica de Bash consiste en el comando seguido de opciones (flags) y argumentos (objetos sobre los que actúa el comando)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si desea saber el nombre del host o instancia de EC2 en la que está trabajando, ¿qué comando proporciona específicamente esa información de red?",
"options": [
"whoami",
"id",
"hostname",
"pwd"
],
"answer": "hostname",
"hint": "Diferencie entre la identidad del usuario y la identidad de la máquina.",
"explanation": "Mientras que 'whoami' devuelve el nombre del usuario actual, 'hostname' devuelve el nombre asignado al sistema o nodo en la red."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué valor numérico se asocia con el dispositivo a través del cual un proceso escribe sus mensajes de error en Linux?",
"options": [
"0",
"1",
"2",
"3"
],
"answer": "2",
"hint": "Es el tercer descriptor de archivo estándar (contando desde cero).",
"explanation": "En los sistemas tipo Unix, 0 es stdin, 1 es stdout y 2 es stderr (error estándar)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Para qué sirve el comando 'history' en una instancia de Amazon Linux?",
"options": [
"Para ver la fecha de creación de la instancia.",
"Para listar cronológicamente los comandos ejecutados previamente en la sesión.",
"Para ver el historial de facturación de AWS.",
"Para recuperar archivos borrados accidentalmente."
],
"answer": "Para listar cronológicamente los comandos ejecutados previamente en la sesión.",
"hint": "Permite evitar escribir comandos largos de nuevo.",
"explanation": "El comando 'history' muestra una lista numerada de los comandos que el usuario ha introducido en el shell actual o sesiones pasadas guardadas."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Se le pide que cree un archivo llamado 'lista.txt' que contenga el nombre del directorio actual. ¿Cuál es el método más eficiente usando redirección?",
"options": [
"pwd < lista.txt",
"pwd 2> lista.txt",
"pwd > lista.txt",
"pwd | lista.txt"
],
"answer": "pwd > lista.txt",
"hint": "Necesita capturar la salida estándar.",
"explanation": "El operador '>' toma la salida estándar (stdout) del comando a su izquierda (en este caso pwd) y la escribe en el archivo a su derecha."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Al iniciar sesión, ¿dónde se encuentra posicionado inicialmente el usuario en el sistema de archivos?",
"options": [
"En el directorio raíz (/)",
"En /etc/profile",
"En su directorio principal (home directory)",
"En /usr/bin"
],
"answer": "En su directorio principal (home directory)",
"hint": "Es el espacio personal asignado al usuario.",
"explanation": "Tras la autenticación y carga de perfiles, el shell coloca al usuario en su directorio personal, usualmente representado por el símbolo ~."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la función principal del comando 'cat' según su etimología técnica?",
"options": [
"Crear archivos vacíos.",
"Concatenar archivos y mostrar su contenido.",
"Eliminar directorios que no están vacíos.",
"Cambiar los permisos de ejecución de un script."
],
"answer": "Concatenar archivos y mostrar su contenido.",
"hint": "Viene de la palabra 'concatenate'.",
"explanation": "Aunque se usa comúnmente para leer un solo archivo, 'cat' está diseñado para unir (concatenar) múltiples archivos y enviar el resultado a la salida estándar."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si intenta usar la finalización con tabulación (TAB) y el sistema no completa el comando ni muestra opciones, ¿cuál es la razón más probable?",
"options": [
"El comando requiere privilegios de root (sudo).",
"No se han ingresado suficientes caracteres para que la cadena sea única o no hay coincidencias.",
"La tecla TAB está desactivada en AWS CloudShell.",
"El archivo de perfil del usuario no se cargó correctamente."
],
"answer": "No se han ingresado suficientes caracteres para que la cadena sea única o no hay coincidencias.",
"hint": "Bash necesita una base para buscar archivos o comandos similares.",
"explanation": "Bash solo completa automáticamente si hay una única coincidencia. Si hay varias o ninguna, un solo toque de TAB no hará nada aparente hasta que se presione dos veces para ver las opciones."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En el comando 'ls -l /var/log', ¿qué parte representa el 'Argumento'?",
"options": [
"ls",
"-l",
"/var/log",
"El espacio en blanco"
],
"answer": "/var/log",
"hint": "Es el objeto sobre el cual el comando realiza la acción.",
"explanation": "'ls' es el comando, '-l' es la opción (formato largo) y '/var/log' es el argumento que especifica qué directorio listar."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es el descriptor de archivo numérico que representa específicamente al Error Estándar (stderr) en un entorno Bash de Linux?",
"options": [
"0",
"1",
"2",
"3"
],
"answer": "2",
"hint": "El 0 es para entrada y el 1 para salida.",
"explanation": "En Linux, los flujos estándar se identifican por números: 0 es stdin, 1 es stdout y 2 es stderr."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si un usuario ejecuta el comando 'cat 0< archivo.txt', ¿qué está ocurriendo técnicamente con el flujo de datos?",
"options": [
"Se está enviando el error del comando a archivo.txt.",
"Se está redirigiendo el contenido de archivo.txt a la entrada estándar (stdin) de cat.",
"Se está creando un archivo nuevo llamado 0.",
"Se está concatenando el archivo 0 con archivo.txt."
],
"answer": "Se está redirigiendo el contenido de archivo.txt a la entrada estándar (stdin) de cat.",
"hint": "El símbolo '<' indica dirección hacia el comando.",
"explanation": "El número 0 representa stdin. Usar '0<' redirige explícitamente el contenido de un archivo hacia la entrada del comando cat."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Durante el proceso de inicio de sesión en Linux, ¿en qué momento exacto se cargan los archivos de perfil del usuario?",
"options": [
"Antes de solicitar el nombre de usuario.",
"Inmediatamente después de que aparece el símbolo del sistema.",
"Después de la autenticación exitosa pero antes de que aparezca el prompt.",
"Solo cuando el usuario ejecuta el comando 'history'."
],
"answer": "Después de la autenticación exitosa pero antes de que aparezca el prompt.",
"hint": "Es el segundo paso del flujo de trabajo de tres pasos.",
"explanation": "El flujo es: 1. Autenticación, 2. Carga de perfiles (configuración de sesión), 3. Aparición del símbolo del sistema."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué sucede en la terminal Bash si presionas la tecla TAB una sola vez y existen múltiples archivos que comienzan con los mismos caracteres ingresados?",
"options": [
"Bash completa automáticamente con el primer archivo alfabético.",
"No sucede nada visualmente porque la cadena no es única.",
"Bash borra lo que escribiste para evitar errores.",
"Bash muestra inmediatamente todas las opciones disponibles."
],
"answer": "No sucede nada visualmente porque la cadena no es única.",
"hint": "Para ver las opciones cuando hay ambigüedad, se requiere una acción adicional.",
"explanation": "Si la cadena no es única, presionar TAB una vez no completa nada. Se requiere presionar TAB dos veces para listar las coincidencias."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador desea ejecutar un comando 'find' pero quiere evitar que los mensajes de error ensucien la consola. ¿Cuál es la sintaxis correcta para descartar esos errores?",
"options": [
"find / -name '' 1> /dev/null",
"find / -name '' < /dev/null",
"find / -name '' 2> /dev/null",
"find / -name '' stderr=null"
],
"answer": "find / -name '' 2> /dev/null",
"hint": "Debes redirigir el descriptor 2.",
"explanation": "Redirigir el descriptor 2 (stderr) a /dev/null envía todos los mensajes de error a un 'agujero negro' virtual, manteniéndolos fuera de la pantalla."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la función principal del comando 'cat' según la terminología estándar de Linux?",
"options": [
"Catalizar procesos del sistema.",
"Categorizar archivos por tamaño.",
"Concatenar archivos y proporcionar su contenido como salida.",
"Cambiar atributos de texto."
],
"answer": "Concatenar archivos y proporcionar su contenido como salida.",
"hint": "Viene de la palabra 'concatenate'.",
"explanation": "El comando 'cat' (concatenate) lee datos de archivos y los muestra en la salida estándar, permitiendo también unir varios archivos."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Al utilizar el redireccionamiento 'ls -l 1>folder.txt', ¿qué representa específicamente el número 1?",
"options": [
"El número de línea inicial.",
"La salida estándar (stdout).",
"Que solo se debe guardar el primer archivo encontrado.",
"El nivel de prioridad del comando."
],
"answer": "La salida estándar (stdout).",
"hint": "Es el descriptor por defecto para resultados exitosos.",
"explanation": "El descriptor 1 es stdout. Aunque a menudo se omite (usando solo '>'), '1>' especifica que el resultado exitoso del comando se envíe al archivo."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si acaba de iniciar sesión correctamente en una instancia de Linux en AWS, ¿en qué directorio se encontrará por defecto el símbolo del sistema?",
"options": [
"En el directorio raíz (/)",
"En el directorio de binarios (/bin)",
"En el directorio principal (home) del usuario.",
"En el directorio temporal (/tmp)"
],
"answer": "En el directorio principal (home) del usuario.",
"hint": "Es tu espacio personal al entrar.",
"explanation": "Tras la autenticación y carga de perfiles, el prompt aparece siempre en el directorio principal (Home) del usuario que inició sesión."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Para ver el nombre de host de la instancia actual de Linux, ¿qué comando es el más directo según las prácticas recomendadas de Bash?",
"options": [
"whoami",
"hostname",
"show host",
"uname -h"
],
"answer": "hostname",
"hint": "El nombre del comando es idéntico a lo que buscas.",
"explanation": "El comando 'hostname' devuelve el nombre asignado al sistema/host en la red."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando permite a un usuario revisar y ejecutar comandos que fueron ingresados previamente en la sesión actual o sesiones pasadas?",
"options": [
"log",
"past",
"history",
"recall"
],
"answer": "history",
"hint": "Muestra una lista numerada de lo que hiciste antes.",
"explanation": "El comando 'history' muestra la lista de comandos ejecutados anteriormente, facilitando su repetición."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la definición técnica de 'stdin'?",
"options": [
"El monitor donde se ve el texto.",
"El dispositivo a través del cual se recibe normalmente la entrada (teclado/escáner).",
"Un archivo donde se guardan los errores.",
"Un comando para entrar al sistema."
],
"answer": "El dispositivo a través del cual se recibe normalmente la entrada (teclado/escáner).",
"hint": "Es la 'entrada estándar'.",
"explanation": "Stdin (Standard Input) es el flujo de entrada por defecto, usualmente asociado al teclado en sesiones interactivas."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Estás escribiendo un comando largo y no recuerdas el nombre exacto de un archivo. Presionas la tecla TAB dos veces seguidas. ¿Cuál es el resultado esperado?",
"options": [
"El sistema se reinicia.",
"Se autocompleta el comando con la opción más probable.",
"Se muestran todas las opciones que coinciden con los caracteres ingresados.",
"Se borra la línea de comandos actual."
],
"answer": "Se muestran todas las opciones que coinciden con los caracteres ingresados.",
"hint": "Es una función de ayuda para cuando hay ambigüedad.",
"explanation": "Al presionar TAB dos veces, Bash lista todas las posibles terminaciones para el texto que el usuario ha escrito hasta ese momento."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la utilidad del comando 'whoami' en una terminal Linux?",
"options": [
"Muestra el nombre del sistema operativo.",
"Muestra el nombre del usuario actual que tiene la sesión activa.",
"Muestra la dirección IP del usuario.",
"Muestra una lista de todos los usuarios creados."
],
"answer": "Muestra el nombre del usuario actual que tiene la sesión activa.",
"hint": "Literalmente se traduce como '¿quién soy yo?'.",
"explanation": "El comando 'whoami' imprime el nombre de usuario asociado con el ID de usuario efectivo actual."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál de los siguientes es un componente principal de la sintaxis del comando shell de Bash mencionado en la evaluación de AWS?",
"options": [
"El Kernel",
"El Historial",
"La Interfaz Gráfica",
"El Compilador C++"
],
"answer": "El Historial",
"hint": "Se mencionó como una práctica recomendada y parte de las preguntas de evaluación.",
"explanation": "La documentación resalta el uso del Historial y la Finalización con tabulación como elementos clave para interactuar con la sintaxis de Bash."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En la redirección de salida, ¿cuál es la diferencia funcional entre 'stdout' y 'stderr'?",
"options": [
"Stdout es para datos de éxito y Stderr es para mensajes de error de procesos.",
"Stdout es para archivos de texto y Stderr es para binarios.",
"Stdout solo funciona en servidores AWS y Stderr en local.",
"No hay diferencia, ambos usan el descriptor 1."
],
"answer": "Stdout es para datos de éxito y Stderr es para mensajes de error de procesos.",
"hint": "Uno es flujo 1 y el otro es flujo 2.",
"explanation": "Stdout (flujo 1) maneja la salida normal de los comandos, mientras que Stderr (flujo 2) está reservado específicamente para diagnósticos y mensajes de error."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un compañero de DevOps te dice: 'He intentado matar un proceso con kill -9, pero sigue apareciendo en ps como <defunct>'. ¿Qué está ocurriendo realmente?",
"options": [
"El proceso tiene una prioridad tan alta que ignora el SIGKILL.",
"Es un proceso Zombie; el proceso padre no ha leído su estado de salida.",
"El proceso está atrapado en una interrupción de hardware ininterrumpible (D state).",
"El comando kill -9 no tiene permisos suficientes sobre procesos huérfanos."
],
"answer": "Es un proceso Zombie; el proceso padre no ha leído su estado de salida.",
"hint": "Incluso la señal 9 no puede eliminar algo que técnicamente ya está muerto.",
"explanation": "Un proceso <defunct> o zombie ya ha terminado su ejecución, pero su entrada en la tabla de procesos permanece porque el padre no ha ejecutado la llamada wait() para recoger su código de retorno."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En una reunión de emergencia, el jefe de infraestructura grita: '¡El disco está lleno!', pero tú ejecutas df -h y ves que queda un 40% de espacio libre. ¿Qué sospechas que está fallando a nivel avanzado?",
"options": [
"El sistema de archivos se ha montado en modo Read-Only.",
"Se han agotado los Inodos del sistema de archivos.",
"La memoria caché está bloqueando el reporte de espacio real.",
"El comando df -h no es capaz de leer particiones LVM."
],
"answer": "Se han agotado los Inodos del sistema de archivos.",
"hint": "No es falta de 'bytes', sino de 'nombres' para registrar archivos.",
"explanation": "Un sistema de archivos puede quedarse sin espacio si agota sus Inodos (índices de archivos), lo cual ocurre frecuentemente cuando hay millones de archivos muy pequeños, aunque el peso total sea bajo."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un desarrollador te pregunta por qué un archivo de log que acaba de borrar con 'rm' sigue ocupando espacio en el comando 'df'. ¿Cuál es la explicación técnica?",
"options": [
"El archivo se movió a una papelera oculta del sistema (/root/.trash).",
"El comando rm solo borra el enlace, pero un proceso activo aún tiene el descriptor de archivo abierto.",
"Es un retraso normal del kernel de Linux que tarda 15 minutos en refrescar el espacio.",
"El journaling del sistema de archivos está replicando el archivo en segundo plano."
],
"answer": "El comando rm solo borra el enlace, pero un proceso activo aún tiene el descriptor de archivo abierto.",
"hint": "Linux no libera el espacio mientras alguien esté 'leyendo' o 'escribiendo' en el archivo.",
"explanation": "En Linux, el espacio de un archivo solo se libera cuando el conteo de enlaces llega a cero Y ningún proceso tiene abierto el descriptor de dicho archivo."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Tu líder técnico quiere saber por qué el 'Load Average' es de 50.0, pero el uso de CPU (visto en 'top') es apenas del 5%. ¿Qué tipo de cuello de botella es este?",
"options": [
"Cuello de botella en la memoria RAM (Swapping intenso).",
"Cuello de botella en I/O de disco (procesos en estado de espera ininterrumpible).",
"Ataque de denegación de servicio en la interfaz de red.",
"Fallo en el planificador (scheduler) del kernel."
],
"answer": "Cuello de botella en I/O de disco (procesos en estado de espera ininterrumpible).",
"hint": "El Load Average cuenta procesos ejecutándose Y procesos esperando por el disco.",
"explanation": "El Load Average en Linux incluye procesos en estado 'D' (uninterruptible sleep), que usualmente están esperando respuesta del almacenamiento o red, sin usar CPU."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un auditor de seguridad nota que un binario tiene el permiso '-rwsr-xr-x'. ¿Qué significa esa 's' y por qué podría ser un riesgo?",
"options": [
"Significa 'Secret'; el código fuente está cifrado.",
"Es el bit SUID; el comando se ejecuta con los privilegios del propietario (posiblemente root).",
"Es un archivo de Sistema; no se puede borrar ni por el root.",
"Significa 'Shared'; permite que varios usuarios escriban al mismo tiempo."
],
"answer": "Es el bit SUID; el comando se ejecuta con los privilegios del propietario (posiblemente root).",
"hint": "Permite que un usuario normal actúe como el dueño del archivo momentáneamente.",
"explanation": "El bit Set User ID (SUID) permite que un ejecutable corra con los permisos del dueño del archivo. Si el dueño es root, un usuario normal podría escalar privilegios si el binario es vulnerable."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Durante un despliegue, el servidor empieza a cerrar procesos aleatoriamente. Ves en los logs: 'Out of memory: Kill process'. ¿Cómo decide el Kernel a quién matar?",
"options": [
"Mata al proceso que más tiempo lleva encendido.",
"Mata al proceso con el PID más alto.",
"Usa el OOM Killer para asignar un puntaje (oom_score) basado en el uso de memoria y riesgo.",
"Mata a todos los procesos que no sean del sistema (UID > 1000)."
],
"answer": "Usa el OOM Killer para asignar un puntaje (oom_score) basado en el uso de memoria y riesgo.",
"hint": "Es un algoritmo de 'sacrificio' para salvar al sistema operativo.",
"explanation": "El Out Of Memory (OOM) Killer puntúa procesos basándose en cuánta memoria liberaría matarlos y cuánto trabajo perdería el sistema, intentando no matar procesos vitales."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Estás en una sesión de depuración y necesitas ver qué archivos está abriendo un proceso específico en tiempo real. ¿Qué comando avanzado utilizas?",
"options": [
"ls -la /proc/all",
"lsof -p [PID]",
"stat --files",
"cat /var/log/syslog | grep files"
],
"answer": "lsof -p [PID]",
"hint": "El nombre del comando significa 'LiSt Open Files'.",
"explanation": "lsof (List Open Files) con el flag -p seguido del ID del proceso permite auditar exactamente qué archivos, sockets o librerías tiene vinculadas un proceso."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Tu jefe te pide que asegures que un script de mantenimiento se ejecute SIEMPRE al reiniciar la instancia de AWS, sin usar cron. ¿Qué tecnología moderna de Linux deberías usar?",
"options": [
"Un archivo .bashrc en la carpeta de root.",
"Un archivo de unidad de systemd (systemd unit file).",
"El comando 'nohup' manual.",
"Editar el archivo /etc/inittab directamente."
],
"answer": "Un archivo de unidad de systemd (systemd unit file).",
"hint": "Es el estándar actual para administrar servicios en Linux.",
"explanation": "Systemd es el gestor de sistema y servicios por defecto en la mayoría de distros modernas (Amazon Linux 2/3, Ubuntu). Permite definir dependencias y reinicios automáticos."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un colega intentó cambiar permisos con 'chmod 777' en una carpeta compartida, pero los usuarios aún no pueden borrar archivos de otros. Ves que la carpeta tiene 'drwxrwxrwt'. ¿Qué significa esa 't' final?",
"options": [
"Significa 'Total'; permisos totales para todos.",
"Es el Sticky Bit; solo el dueño del archivo o root puede borrar o renombrar archivos ahí.",
"Es un error de sintaxis; la carpeta está corrupta.",
"Significa 'Temporary'; los archivos se borran solos cada hora."
],
"answer": "Es el Sticky Bit; solo el dueño del archivo o root puede borrar o renombrar archivos ahí.",
"hint": "Se usa comúnmente en /tmp para evitar sabotajes entre usuarios.",
"explanation": "El Sticky Bit (t) protege archivos dentro de un directorio con permisos de escritura total, asegurando que un usuario no pueda borrar el trabajo de otro."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En una reunión de red, se menciona que el servidor tiene demasiadas conexiones en estado 'TIME_WAIT'. ¿Qué parámetro del kernel (sysctl) ajustarías para reutilizar esos sockets?",
"options": [
"net.ipv4.tcp_tw_reuse",
"kernel.max_connections",
"fs.file-max",
"net.core.somaxconn"
],
"answer": "net.ipv4.tcp_tw_reuse",
"hint": "Busca algo relacionado con 'Time Wait' y 'Reuse'.",
"explanation": "tcp_tw_reuse permite al kernel reutilizar sockets en estado TIME_WAIT para nuevas conexiones, evitando el agotamiento de puertos en servidores de alto tráfico."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Necesitas rastrear las llamadas al sistema (system calls) que hace una aplicación propietaria que está fallando. ¿Qué herramienta de bajo nivel usas?",
"options": [
"top",
"strace",
"history",
"df"
],
"answer": "strace",
"hint": "Sigue el rastro de la comunicación entre el programa y el kernel.",
"explanation": "strace intercepta y registra las llamadas al sistema (como open, read, write) y las señales recibidas por un proceso, ideal para debugging profundo."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Te preguntan por qué un usuario puede ejecutar 'sudo' si no es root. ¿En qué archivo se define técnicamente esta capacidad?",
"options": [
"/etc/password",
"/etc/sudoers",
"/root/.bash_profile",
"/etc/security/limits.conf"
],
"answer": "/etc/sudoers",
"hint": "Se recomienda editarlo con el comando 'visudo'.",
"explanation": "El archivo /etc/sudoers contiene las reglas que determinan qué usuarios o grupos pueden ejecutar comandos con privilegios de otro usuario (usualmente root)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "El servidor está lento y sospechas de procesos 'escondidos'. ¿Cómo ves todos los procesos del sistema, incluyendo los de otros usuarios y los que no tienen terminal?",
"options": [
"ps",
"ps aux",
"whoami",
"list --all"
],
"answer": "ps aux",
"hint": "La 'a' es de 'all', la 'x' incluye procesos sin tty.",
"explanation": "ps aux es el estándar para listar todos los procesos (a), el usuario que los corre (u) y procesos que no están vinculados a una terminal (x)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un desarrollador dice que su app no puede crear más archivos aunque hay espacio y hay inodos. Recibes un error 'Too many open files'. ¿Qué límite estás chocando?",
"options": [
"El límite de cuota de disco (disk quota).",
"El límite de descriptores de archivos (ulimit -n).",
"La versión del kernel es muy antigua.",
"El tamaño máximo del archivo permitido (2GB)."
],
"answer": "El límite de descriptores de archivos (ulimit -n).",
"hint": "Es un límite por proceso o por sesión de usuario.",
"explanation": "Linux impone un límite (soft y hard) a la cantidad de archivos abiertos que un proceso puede manejar simultáneamente. Se ajusta con ulimit o en /etc/security/limits.conf."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Quieres buscar una palabra específica en miles de archivos comprimidos (.gz) sin descomprimirlos manualmente para ahorrar tiempo. ¿Qué comando usarías?",
"options": [
"grep -r 'palabra' *",
"zgrep 'palabra' *.gz",
"cat *.gz | grep 'palabra'",
"tar -xf *.gz | grep 'palabra'"
],
"answer": "zgrep 'palabra' *.gz",
"hint": "Es una variante de grep diseñada para archivos comprimidos.",
"explanation": "zgrep permite buscar patrones dentro de archivos comprimidos con gzip sin necesidad de realizar un paso previo de descompresión en disco."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador necesita verificar el UID y el GID efectivo de un usuario que acaba de heredar permisos temporales. ¿Qué comando es el más adecuado para obtener esta información numérica detallada?",
"options": [
"whoami",
"hostname",
"id",
"pwd"
],
"answer": "id",
"hint": "Este comando imprime los IDs de usuario y grupo reales y efectivos.",
"explanation": "A diferencia de 'whoami' que solo da el nombre, 'id' proporciona los identificadores numéricos (UID, GID) necesarios para auditorías de permisos."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En una auditoría de seguridad, se te pide verificar qué comandos ejecutó un usuario en una sesión previa que ya fue cerrada. ¿Qué archivo oculto en el home del usuario deberías consultar?",
"options": [
"~/.bashrc",
"~/.bash_profile",
"~/.bash_history",
"/var/log/messages"
],
"answer": "~/.bash_history",
"hint": "Es el archivo donde Bash guarda el historial de comandos al cerrar la sesión.",
"explanation": "Bash guarda los comandos ejecutados en el archivo ~/.bash_history dentro del directorio personal del usuario para persistencia entre sesiones."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un usuario reporta que su configuración personalizada de alias no se carga automáticamente cuando abre una nueva terminal. ¿En qué archivo debería haber guardado estos alias?",
"options": [
"~/.bashrc",
"/etc/passwd",
"~/.bash_history",
"/dev/null"
],
"answer": "~/.bashrc",
"hint": "Este archivo se carga en cada terminal interactiva que no es de inicio de sesión.",
"explanation": "El archivo ~/.bashrc se ejecuta cada vez que se abre una nueva instancia de la terminal, siendo el lugar ideal para alias y variables de entorno locales."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la diferencia técnica entre ejecutar 'passwd' sin argumentos y 'sudo passwd [usuario]'?",
"options": [
"No hay diferencia; ambos requieren la clave actual.",
"Sin argumentos cambia tu propia clave; con sudo y un usuario, reseteas la clave de otro sin conocer la anterior.",
"El primero solo funciona en Amazon Linux y el segundo en Ubuntu.",
"El primero borra la cuenta y el segundo la bloquea."
],
"answer": "Sin argumentos cambia tu propia clave; con sudo y un usuario, reseteas la clave de otro sin conocer la anterior.",
"hint": "El administrador no necesita saber la clave vieja para poner una nueva.",
"explanation": "Como root (vía sudo), se tiene el privilegio de sobrescribir cualquier contraseña del sistema sin validación previa de la contraseña antigua."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un desarrollador quiere descartar los mensajes de error de un script para que no aparezcan en la consola ni se guarden. ¿A qué dispositivo debería redirigir el flujo 2?",
"options": [
"/var/log/secure",
"/etc/sudoers",
"/dev/null",
"/tmp"
],
"answer": "/dev/null",
"hint": "Es conocido como el 'agujero negro' del sistema.",
"explanation": "/dev/null es un archivo especial que descarta toda la información escrita en él, ideal para limpiezas de logs innecesarios."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando usarías para modificar los grupos secundarios de un usuario existente sin crear una cuenta nueva?",
"options": [
"useradd",
"groupadd",
"usermod",
"userdel"
],
"answer": "usermod",
"hint": "Modifica parámetros de cuentas ya existentes.",
"explanation": "El comando 'usermod' permite alterar configuraciones como el home, el shell o la pertenencia a grupos de usuarios ya registrados."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si necesitas saber cuánto tiempo ha estado encendida una instancia EC2 de Linux sin entrar a la consola de AWS, ¿qué comando de terminal es el más directo?",
"options": [
"date",
"uptime",
"history",
"cal"
],
"answer": "uptime",
"hint": "Muestra el tiempo de actividad y la carga del sistema.",
"explanation": "'uptime' informa cuánto tiempo lleva el sistema funcionando desde el último arranque, además del número de usuarios y promedios de carga."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Se te pide crear un grupo llamado 'CloudAdmins'. ¿Cuál es el comando correcto para esta tarea?",
"options": [
"useradd -g CloudAdmins",
"groupmod CloudAdmins",
"groupadd CloudAdmins",
"gpasswd CloudAdmins"
],
"answer": "groupadd CloudAdmins",
"hint": "Es el comando estándar para añadir grupos.",
"explanation": "'groupadd' crea una nueva definición de grupo en el sistema utilizando los valores predeterminados."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Estás revisando los logs de seguridad para detectar intentos de acceso no autorizados por SSH. ¿Cuál es la ruta más probable del archivo de log en una distro basada en RedHat o Amazon Linux?",
"options": [
"/var/log/messages",
"/var/log/secure",
"/etc/passwd",
"/dev/null"
],
"answer": "/var/log/secure",
"hint": "Contiene registros de autenticación y uso de privilegios.",
"explanation": "/var/log/secure es donde se almacenan los eventos relacionados con la seguridad, incluyendo logins fallidos y el uso de sudo."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En el archivo /etc/sudoers, ves la línea: '%devs ALL=(ALL) NOPASSWD: ALL'. ¿Qué privilegio tiene el grupo 'devs'?",
"options": [
"Pueden ver archivos pero no editarlos.",
"Pueden ejecutar cualquier comando como cualquier usuario sin que se les pida contraseña.",
"Solo pueden usar sudo desde el localhost.",
"No tienen permisos de sudo."
],
"answer": "Pueden ejecutar cualquier comando como cualquier usuario sin que se les pida contraseña.",
"hint": "Busca el significado de '%' y 'NOPASSWD'.",
"explanation": "El '%' indica un grupo, y 'NOPASSWD' exime a los miembros de ingresar su clave para escalar privilegios."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿En qué directorio de la jerarquía de Linux se encuentran los archivos de configuración global del sistema y las aplicaciones?",
"options": [
"/bin",
"/etc",
"/var",
"/lib"
],
"answer": "/etc",
"hint": "Es el 'Editable Text Configuration'.",
"explanation": "El directorio /etc es el lugar estándar para todos los archivos de configuración estática del sistema operativo."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Necesitas crear un archivo vacío llamado 'keepalive' para marcar un despliegue. ¿Qué comando es el más eficiente?",
"options": [
"cat keepalive",
"echo keepalive",
"touch keepalive",
"man keepalive"
],
"answer": "touch keepalive",
"hint": "Crea archivos o actualiza timestamps.",
"explanation": "'touch' crea un archivo si no existe o actualiza sus marcas de tiempo si ya existe."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un proceso de sistema está fallando y necesitas ver la información dinámica del proceso directamente desde el sistema de archivos virtual. ¿A qué directorio irías?",
"options": [
"/proc",
"/srv",
"/opt",
"/boot"
],
"answer": "/proc",
"hint": "Es un sistema de archivos virtual con información de procesos.",
"explanation": "/proc no contiene archivos reales, sino una interfaz hacia las estructuras de datos del kernel sobre procesos y hardware."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la función del comando 'gpasswd' en la gestión de grupos?",
"options": [
"Elimina el grupo del sistema.",
"Administra los miembros de un grupo y permite asignar administradores al mismo.",
"Cambia el nombre del grupo.",
"Lista todos los grupos del sistema."
],
"answer": "Administra los miembros de un grupo y permite asignar administradores al mismo.",
"hint": "Se usa frecuentemente con los flags -a o -d.",
"explanation": "'gpasswd' es una herramienta específica para gestionar contraseñas de grupos y, más comúnmente, sus listas de miembros."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En Linux, ¿qué directorio se utiliza comúnmente para almacenar archivos que cambian de tamaño frecuentemente, como logs, colas de impresión y correos electrónicos?",
"options": [
"/usr",
"/sbin",
"/var",
"/media"
],
"answer": "/var",
"hint": "Su nombre viene de 'Variable'.",
"explanation": "/var está diseñado para contener datos variables que crecen durante la operación normal del sistema."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es el propósito del directorio /sbin en contraste con /bin?",
"options": [
"/sbin es para archivos de usuario y /bin para el sistema.",
"/sbin contiene binarios esenciales del sistema destinados normalmente al superusuario.",
"/sbin es para archivos temporales.",
"/sbin almacena las bibliotecas del kernel."
],
"answer": "/sbin contiene binarios esenciales del sistema destinados normalmente al superusuario.",
"hint": "La 's' inicial significa 'System' o 'Superuser'.",
"explanation": "Mientras que /bin tiene comandos para todos los usuarios, /sbin contiene herramientas de administración del sistema."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si ejecutas el comando 'id' y ves 'uid=0(root)', ¿qué significa esto respecto a tus permisos?",
"options": [
"Eres un usuario invitado sin privilegios.",
"Tienes los máximos privilegios de superusuario en el sistema.",
"Tu cuenta está bloqueada por passwd.",
"Debes usar sudo para ejecutar cualquier comando."
],
"answer": "Tienes los máximos privilegios de superusuario en el sistema.",
"hint": "El ID 0 es reservado.",
"explanation": "En Linux, el UID 0 siempre corresponde al usuario root, quien tiene control total sobre el sistema."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando utilizarías para buscar archivos que terminen en '.log' dentro de todo el sistema?",
"options": [
"cat .log",
"find / -name '.log'",
"ls -l .log",
"man log"
],
"answer": "find / -name '*.log'",
"hint": "Permite buscar por criterios como nombre, tamaño o fecha.",
"explanation": "'find' recorre el árbol de directorios buscando archivos que coincidan con la expresión dada."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un usuario olvidó cómo usar las opciones del comando 'usermod'. ¿Qué comando debería ejecutar para ver el manual de referencia?",
"options": [
"info usermod",
"help usermod",
"man usermod",
"show usermod"
],
"answer": "man usermod",
"hint": "Es el visor de manuales estándar de Linux.",
"explanation": "El comando 'man' (manual) abre la documentación oficial de casi cualquier comando instalado en el sistema."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la función del directorio /dev en Linux?",
"options": [
"Guardar archivos de desarrollo (C++, Python).",
"Contener archivos especiales que representan dispositivos de hardware.",
"Almacenar el código fuente del kernel.",
"Gestionar las variables de entorno de los desarrolladores."
],
"answer": "Contener archivos especiales que representan dispositivos de hardware.",
"hint": "Viene de 'Devices'.",
"explanation": "/dev contiene archivos de dispositivo que permiten al software interactuar con el hardware (discos, terminales, etc.)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Necesitas ver el contenido del archivo /etc/passwd pero solo tienes permisos de lectura y no quieres editarlo accidentalmente. ¿Qué comando es el más seguro y rápido?",
"options": [
"touch /etc/passwd",
"cat /etc/passwd",
"useradd /etc/passwd",
"echo /etc/passwd"
],
"answer": "cat /etc/passwd",
"hint": "Lee y muestra el contenido de archivos en la terminal.",
"explanation": "'cat' es ideal para visualizar archivos de texto pequeños o medianos directamente en la salida estándar."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿En qué archivo se almacena la información básica de las cuentas de usuario, como su UID, GID, home y shell por defecto?",
"options": [
"/etc/shadow",
"/etc/passwd",
"/etc/sudoers",
"/var/log/secure"
],
"answer": "/etc/passwd",
"hint": "Es un archivo de texto con campos separados por dos puntos (:).",
"explanation": "/etc/passwd es la base de datos local de usuarios (aunque las contraseñas suelen ir en /etc/shadow por seguridad)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Deseas limpiar todo el texto acumulado en tu ventana de terminal para trabajar en una pantalla limpia. ¿Qué comando usas?",
"options": [
"delete",
"clear",
"clean",
"reset"
],
"answer": "clear",
"hint": "Simplemente 'limpia' la vista actual.",
"explanation": "'clear' desplaza el texto hacia arriba o limpia el buffer de la pantalla para dejar el prompt al inicio."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador desea verificar el nombre que la instancia de Linux tiene asignado en la red. ¿Qué comando debe ejecutar?",
"options": [
"id",
"hostname",
"pwd",
"whoami"
],
"answer": "hostname",
"hint": "Es el nombre del host.",
"explanation": "'hostname' muestra el nombre de la máquina, útil en entornos con múltiples servidores para saber dónde se está operando."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando se utiliza para eliminar por completo una cuenta de usuario y opcionalmente su directorio home?",
"options": [
"usermod -d",
"groupdel",
"userdel",
"rmuser"
],
"answer": "userdel",
"hint": "Borra el usuario del archivo /etc/passwd.",
"explanation": "'userdel' es el comando para remover usuarios del sistema."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Necesitas saber la fecha y hora actual del sistema para registrarla en un log manual. ¿Qué comando usas?",
"options": [
"time",
"cal",
"date",
"uptime"
],
"answer": "date",
"hint": "Muestra la estampa de tiempo actual.",
"explanation": "El comando 'date' imprime la fecha y hora del sistema en diversos formatos."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué directorio se utiliza para montar temporalmente dispositivos de almacenamiento extraíbles como unidades USB o CD-ROM?",
"options": [
"/mnt",
"/media",
"/opt",
"/dev"
],
"answer": "/media",
"hint": "Es el estándar para medios removibles.",
"explanation": "Según el estándar FHS, /media es el punto de montaje para dispositivos extraíbles, mientras que /mnt se usa para montajes manuales temporales."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un comando 'sudo' falla y quieres ver si quedó registrado el error de autenticación. ¿Qué archivo deberías mirar?",
"options": [
"/var/log/messages",
"/var/log/secure",
"/etc/passwd",
"~/.bash_history"
],
"answer": "/var/log/secure",
"hint": "Es el log de seguridad y privilegios.",
"explanation": "Cualquier intento de uso de 'sudo' (exitoso o fallido) se registra en /var/log/secure para fines de auditoría."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si quieres ver un calendario del mes actual en la terminal, ¿qué comando es el más sencillo?",
"options": [
"date --calendar",
"cal",
"show-cal",
"uptime -c"
],
"answer": "cal",
"hint": "Tres letras, abreviatura de 'Calendar'.",
"explanation": "'cal' imprime un calendario formateado de forma sencilla en la terminal."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la función del comando 'echo' en un script de Bash?",
"options": [
"Borrar el contenido de un archivo.",
"Imprimir texto o el valor de variables en la salida estándar.",
"Repetir el último comando ejecutado.",
"Llamar a una función remota."
],
"answer": "Imprimir texto o el valor de variables en la salida estándar.",
"hint": "Se usa para mostrar mensajes al usuario.",
"explanation": "'echo' toma los argumentos que se le pasan y los escribe en la terminal (stdout)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué significa el símbolo '~' (virgulilla) en la ruta de un directorio en Linux?",
"options": [
"El directorio raíz del sistema.",
"El directorio temporal de todos los usuarios.",
"Representa el directorio principal (Home) del usuario actual.",
"Un directorio que está corrupto."
],
"answer": "Representa el directorio principal (Home) del usuario actual.",
"hint": "Es un atajo para /home/username.",
"explanation": "Bash expande el símbolo '~' a la ruta absoluta del directorio personal del usuario que tiene la sesión activa."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿En qué directorio se guardan los archivos que se necesitan para que el sistema Linux inicie (arranque), como el kernel y el cargador de arranque?",
"options": [
"/etc",
"/boot",
"/bin",
"/sys"
],
"answer": "/boot",
"hint": "Su nombre es la acción de arrancar el equipo.",
"explanation": "/boot contiene todo lo necesario para el proceso de inicio antes de que el sistema operativo esté completamente cargado."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es el propósito del directorio /tmp?",
"options": [
"Guardar archivos de configuración permanentes.",
"Almacenar archivos temporales que suelen borrarse al reiniciar el sistema.",
"Contener los ejecutables de usuario.",
"Es el directorio de plantillas de documentos."
],
"answer": "Almacenar archivos temporales que suelen borrarse al reiniciar el sistema.",
"hint": "Su nombre viene de 'Temporary'.",
"explanation": "/tmp es un espacio común donde aplicaciones y usuarios guardan datos volátiles."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando permite cambiar el nombre o el GID de un grupo que ya existe?",
"options": [
"groupadd",
"groupmod",
"groupdel",
"usermod"
],
"answer": "groupmod",
"hint": "Es para MODificar grupos.",
"explanation": "'groupmod' se utiliza para realizar cambios administrativos en las definiciones de grupos existentes."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Se te asigna la tarea de instalar una aplicación de terceros que no forma parte de la distribución oficial de Linux. ¿En qué directorio se recomienda colocarla según el estándar FHS?",
"options": [
"/usr",
"/opt",
"/var",
"/lib"
],
"answer": "/opt",
"hint": "Viene de 'Optional'.",
"explanation": "/opt está reservado para la instalación de paquetes de software de aplicación adicionales (add-on)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador quiere ver la ruta absoluta del directorio donde está trabajando actualmente. ¿Qué comando debe escribir?",
"options": [
"id",
"path",
"pwd",
"dir"
],
"answer": "pwd",
"hint": "Print Working Directory.",
"explanation": "'pwd' imprime la ruta completa desde la raíz hasta el directorio actual."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la función del archivo /etc/sudoers?",
"options": [
"Guardar las contraseñas de todos los usuarios.",
"Definir quién puede usar el comando sudo y con qué permisos.",
"Listar los usuarios que han iniciado sesión recientemente.",
"Configurar la red del sistema."
],
"answer": "Definir quién puede usar el comando sudo y con qué permisos.",
"hint": "Es el archivo de configuración para la delegación de privilegios.",
"explanation": "/etc/sudoers controla la política de privilegios del comando sudo, permitiendo un control granular de quién hace qué."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando usarías para ver los últimos comandos que has escrito en la terminal, incluyendo sus números de índice?",
"options": [
"cat history",
"history",
"show logs",
"man bash"
],
"answer": "history",
"hint": "Muestra la lista de comandos ejecutados.",
"explanation": "'history' permite recuperar comandos anteriores para volver a ejecutarlos o consultarlos."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "El directorio /usr en Linux contiene principalmente:",
"options": [
"Archivos de configuración del usuario root.",
"Archivos de programas, aplicaciones y bibliotecas compartidas.",
"Archivos temporales del sistema.",
"Logs de actividad de usuario."
],
"answer": "Archivos de programas, aplicaciones y bibliotecas compartidas.",
"hint": "Es la mayor parte del sistema de archivos en términos de software.",
"explanation": "/usr (Unix System Resources) almacena la mayoría de las utilidades y aplicaciones de usuario."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando permite ejecutar un comando con los privilegios de otro usuario (generalmente root) previa autenticación?",
"options": [
"runas",
"su",
"sudo",
"admin"
],
"answer": "sudo",
"hint": "SuperUser DO.",
"explanation": "'sudo' es la herramienta estándar para la delegación de privilegios en Linux."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Deseas saber quién eres en el sistema (el nombre de usuario con el que iniciaste sesión). ¿Qué comando usarías?",
"options": [
"id -n",
"whoami",
"hostname",
"pwd"
],
"answer": "whoami",
"hint": "Traducido al español es 'quién soy yo'.",
"explanation": "'whoami' devuelve el nombre de usuario efectivo asociado a la sesión actual."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿En qué directorio se encuentran las bibliotecas (libraries) esenciales que necesitan los binarios de /bin y /sbin para ejecutarse?",
"options": [
"/etc",
"/lib",
"/var",
"/dev"
],
"answer": "/lib",
"hint": "Contiene archivos compartidos .so.",
"explanation": "/lib (y /lib64) contiene las imágenes de bibliotecas compartidas necesarias para arrancar el sistema y ejecutar comandos básicos."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador necesita verificar logs generales del sistema para diagnosticar un fallo de hardware. ¿En qué archivo debería buscar en sistemas Amazon Linux?",
"options": [
"/var/log/secure",
"/var/log/messages",
"/etc/passwd",
"/dev/null"
],
"answer": "/var/log/messages",
"hint": "Es el registro general de actividad del sistema.",
"explanation": "/var/log/messages centraliza mensajes informativos, de error y de advertencia del sistema que no tienen un log específico."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando se utiliza para crear una nueva cuenta de usuario en Linux?",
"options": [
"usermod",
"useradd",
"groupadd",
"newuser"
],
"answer": "useradd",
"hint": "Añade un usuario al sistema.",
"explanation": "'useradd' es el comando de bajo nivel para añadir usuarios y crear sus estructuras iniciales."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Para verificar qué permisos específicos de sudo tiene un usuario sin cambiar a su cuenta, ¿qué comando usarías?",
"options": [
"cat /etc/sudoers",
"sudo -lU [usuario]",
"id [usuario]",
"whoami"
],
"answer": "sudo -lU [usuario]",
"hint": "La 'l' es de list.",
"explanation": "'sudo -lU' permite listar los privilegios que tiene un usuario específico según la configuración de sudoers."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es el directorio personal del superusuario root?",
"options": [
"/home/root",
"/root",
"/bin/root",
"/"
],
"answer": "/root",
"hint": "No está dentro de /home.",
"explanation": "A diferencia de los usuarios normales, el home de root es /root para garantizar que esté disponible incluso si /home no se puede montar."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Necesitas configurar una variable de entorno que solo se cargue cuando inicias sesión por primera vez (login shell). ¿Qué archivo deberías editar?",
"options": [
"~/.bashrc",
"~/.bash_profile",
"/etc/passwd",
"~/.bash_history"
],
"answer": "~/.bash_profile",
"hint": "Se carga al 'iniciar sesión'.",
"explanation": "~/.bash_profile es leído por Bash específicamente para shells de inicio de sesión (login shells)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando utilizarías para eliminar un grupo del sistema?",
"options": [
"userdel",
"groupdel",
"rmgroup",
"groupmod -r"
],
"answer": "groupdel",
"hint": "Es el opuesto a groupadd.",
"explanation": "'groupdel' elimina la entrada del grupo en los archivos del sistema."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En la jerarquía de Linux, ¿qué directorio contiene archivos virtuales con información sobre eventos y el estado del sistema?",
"options": [
"/sys",
"/tmp",
"/boot",
"/media"
],
"answer": "/sys",
"hint": "Es similar a /proc pero enfocado a dispositivos y drivers.",
"explanation": "/sys es un sistema de archivos virtual que expone información sobre dispositivos y subsistemas del kernel."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando permite listar binarios que están en /bin pero que están destinados a todos los usuarios?",
"options": [
"cat",
"ls",
"find",
"id"
],
"answer": "ls",
"hint": "Es el comando para listar archivos en directorios.",
"explanation": "Aunque no está en la lista de 'Comandos Maestros' como tal, 'ls' es la herramienta fundamental para explorar los directorios de binarios como /bin."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Un administrador ejecuta 'chmod 751 script.sh'. ¿Qué permisos exactos tendrá el grupo propietario sobre el archivo?",
  "options": [
    "Lectura, escritura y ejecución.",
    "Solo lectura y ejecución.",
    "Solo escritura.",
    "Lectura y escritura."
  ],
  "answer": "Solo lectura y ejecución.",
  "hint": "El segundo dígito (5) corresponde al grupo. 5 = 4 + 1.",
  "explanation": "En el modo absoluto, el segundo dígito representa al grupo. El valor 5 es la suma de 4 (lectura) y 1 (ejecución)."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Cuál es la sintaxis correcta para cambiar únicamente el grupo de un archivo llamado 'data.txt' al grupo 'admins' sin modificar el usuario propietario?",
  "options": [
    "chown admins data.txt",
    "chown :admins data.txt",
    "chown admins: data.txt",
    "chmod :admins data.txt"
  ],
  "answer": "chown :admins data.txt",
  "hint": "Se utiliza el símbolo de dos puntos antes del nombre del grupo.",
  "explanation": "Usar ':group' con el comando chown permite cambiar la membresía del grupo sin afectar al propietario actual del archivo."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Si ejecutas 'chmod u=x file.txt', ¿qué sucede con los permisos de lectura (r) y escritura (w) que el usuario (propietario) tenía previamente?",
  "options": [
    "Se mantienen intactos.",
    "Se eliminan, y solo queda el de ejecución.",
    "Se convierten automáticamente en permisos de grupo.",
    "El comando da error porque falta el operador '+' o '-'."
  ],
  "answer": "Se eliminan, y solo queda el de ejecución.",
  "hint": "El operador '=' establece permisos de forma absoluta para esa identidad, descartando los anteriores.",
  "explanation": "A diferencia de '+' o '-', el operador '=' redefine los permisos. Si solo especificas 'x', los permisos 'r' y 'w' para ese usuario se eliminan."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "En la salida de 'ls -l', observas los permisos '-rwxrw-r--'. ¿Qué valor octal representa exactamente esta configuración?",
  "options": [
    "764",
    "751",
    "744",
    "664"
  ],
  "answer": "764",
  "hint": "Suma: (4+2+1), (4+2+0), (4+0+0).",
  "explanation": "rwx = 7, rw- = 6, r-- = 4. Por lo tanto, la representación absoluta es 764."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Un usuario intenta acceder a un archivo con permisos '400'. ¿Qué podrá hacer el propietario del archivo?",
  "options": [
    "Nada, el archivo está bloqueado.",
    "Solo leer el contenido.",
    "Leer y escribir.",
    "Ejecutarlo como un script."
  ],
  "answer": "Solo leer el contenido.",
  "hint": "El primer dígito es 4, los demás son 0.",
  "explanation": "El valor 4 representa únicamente el permiso de lectura. Al ser 400, solo el propietario tiene lectura y nadie más tiene permiso alguno."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Qué comando usarías para otorgar permiso de ejecución al grupo y a 'otros', sin modificar los permisos del propietario?",
  "options": [
    "chmod u+x archivo",
    "chmod 111 archivo",
    "chmod go+x archivo",
    "chmod a=x archivo"
  ],
  "answer": "chmod go+x archivo",
  "hint": "g = grupo, o = otros.",
  "explanation": "El modo simbólico 'go+x' añade el permiso de ejecución específicamente a las identidades de grupo y otros."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Si ejecutas 'chown webmaster:www-data index.html', ¿cuál es el resultado esperado?",
  "options": [
    "Se cambia el propietario a webmaster y el grupo a www-data.",
    "Se crea un archivo llamado webmaster.",
    "Se cambian los permisos de index.html a modo web.",
    "El comando falla porque no se puede cambiar usuario y grupo a la vez."
  ],
  "answer": "Se cambia el propietario a webmaster y el grupo a www-data.",
  "hint": "Sintaxis: usuario:grupo.",
  "explanation": "El comando chown permite cambiar simultáneamente el propietario y el grupo usando la sintaxis 'usuario:grupo'."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Deseas eliminar el permiso de lectura y escritura al grupo usando el modo simbólico. ¿Cuál es el comando correcto?",
  "options": [
    "chmod g-rw archivo",
    "chmod g+rw archivo",
    "chmod g=x archivo",
    "chmod 060 archivo"
  ],
  "answer": "chmod g-rw archivo",
  "hint": "El operador '-' elimina permisos.",
  "explanation": "Para quitar permisos específicos sin alterar el resto, se utiliza el operador '-' seguido de las letras de los permisos (r, w, x)."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "En el modo absoluto de chmod, ¿qué valor numérico representa el permiso de 'Escritura'?",
  "options": [
    "1",
    "2",
    "4",
    "7"
  ],
  "answer": "2",
  "hint": "1 es ejecución, 4 es lectura.",
  "explanation": "Según la escala octal de Linux: Lectura=4, Escritura=2 y Ejecución=1."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Qué riesgo de seguridad principal implica asignar permisos '777' a un directorio de una aplicación web en AWS?",
  "options": [
    "El archivo se vuelve de solo lectura.",
    "Cualquier usuario del sistema puede leer, modificar o borrar el contenido.",
    "El comando 'ls -l' dejará de funcionar.",
    "Se agota el espacio en disco automáticamente."
  ],
  "answer": "Cualquier usuario del sistema puede leer, modificar o borrar el contenido.",
  "hint": "777 significa rwx para todos (propietario, grupo y otros).",
  "explanation": "El permiso 777 viola el principio de mínimo privilegio, permitiendo que actores no autorizados manipulen archivos críticos."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Un script tiene permisos '---rwx---'. ¿Quién puede ejecutarlo?",
  "options": [
    "El propietario del archivo.",
    "Cualquier usuario del sistema.",
    "Solo los miembros del grupo propietario.",
    "Nadie, porque el propietario no tiene permisos."
  ],
  "answer": "Solo los miembros del grupo propietario.",
  "hint": "Observa los tres bloques: usuario, grupo, otros.",
  "explanation": "Los primeros tres caracteres (---) son del usuario, los siguientes tres (rwx) son del grupo. Solo el grupo tiene permisos."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Para que un archivo sea ejecutable pero NO legible por 'otros', ¿cuál sería el último dígito del comando chmod en modo absoluto?",
  "options": [
    "1",
    "4",
    "5",
    "0"
  ],
  "answer": "1",
  "hint": "Ejecución = 1, Lectura = 4.",
  "explanation": "El último dígito corresponde a 'otros'. Si queremos ejecución (1) pero no lectura (4), el valor debe ser 1."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Si ejecutas 'chown ec2-user: config.yaml' (nota los dos puntos al final del usuario), ¿qué sucede con el grupo del archivo?",
  "options": [
    "El grupo permanece sin cambios.",
    "El grupo cambia automáticamente al grupo principal del usuario ec2-user.",
    "El comando da un error de sintaxis.",
    "El archivo se borra."
  ],
  "answer": "El grupo cambia automáticamente al grupo principal del usuario ec2-user.",
  "hint": "Poner los dos puntos sin especificar grupo tiene un efecto automático.",
  "explanation": "En muchas distribuciones de Linux, 'chown usuario:' cambia el propietario al usuario y el grupo al grupo primario de dicho usuario."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Qué comando en modo simbólico concede al propietario todos los permisos y elimina todos los permisos al grupo y a otros?",
  "options": [
    "chmod u+rwx,go-rwx archivo",
    "chmod 700 archivo",
    "chmod a=rwx archivo",
    "chmod u=rwx,go="
  ],
  "answer": "chmod u=rwx,go=",
  "hint": "No poner nada después del '=' elimina todo para esa identidad.",
  "explanation": "'u=rwx' otorga todo al dueño, y 'go=' (sin valores tras el igual) quita explícitamente todo a grupo y otros."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Estás analizando la salida de 'ls -l'. ¿En qué posición (columna) aparece el nombre del grupo propietario del archivo?",
  "options": [
    "Primera columna (permisos).",
    "Tercera columna (después del número de enlaces).",
    "Cuarta columna (después del propietario).",
    "Última columna (nombre del archivo)."
  ],
  "answer": "Cuarta columna (después del propietario).",
  "hint": "El orden es: permisos, enlaces, dueño, grupo, tamaño...",
  "explanation": "En el formato de lista larga de Linux, el propietario es la tercera columna y el grupo es la cuarta."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Qué valor octal asignarías a un archivo si quieres que el dueño lea y escriba, el grupo solo lea y los demás no tengan acceso?",
  "options": [
    "640",
    "660",
    "440",
    "740"
  ],
  "answer": "640",
  "hint": "Dueño (4+2), Grupo (4), Otros (0).",
  "explanation": "Lectura(4)+Escritura(2)=6 para el dueño; Lectura(4) para el grupo; nada(0) para otros. Resultado: 640."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Si un archivo tiene permisos '000', ¿quién puede cambiar sus permisos de nuevo a '644'?",
  "options": [
    "Nadie, el archivo debe ser borrado.",
    "Cualquier usuario con permiso de lectura en el directorio.",
    "El propietario del archivo o el superusuario (root).",
    "Solo el superusuario (root)."
  ],
  "answer": "El propietario del archivo o el superusuario (root).",
  "hint": "La propiedad del archivo otorga el derecho de cambiar permisos (chmod).",
  "explanation": "Incluso si el archivo tiene 000 (sin acceso), el dueño del archivo conserva el derecho de propiedad para ejecutar chmod sobre él."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Cuál es el resultado de ejecutar 'chmod +x script' (sin especificar identidad)?",
  "options": [
    "Solo el dueño puede ejecutarlo.",
    "Se añade permiso de ejecución a las tres identidades (u, g, o) simultáneamente.",
    "El comando falla por falta de argumentos.",
    "Solo el grupo puede ejecutarlo."
  ],
  "answer": "Se añade permiso de ejecución a las tres identidades (u, g, o) simultáneamente.",
  "hint": "Cuando no se especifica u, g u o, el cambio aplica a 'all' (a).",
  "explanation": "Por defecto, si no se indica la identidad en el modo simbólico, Linux asume 'a' (all), aplicando el cambio a usuario, grupo y otros."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Qué comando permite ver de forma rápida quién es el dueño actual de todos los archivos en un directorio?",
  "options": [
    "cat *",
    "ls -l",
    "chmod -v *",
    "chown --show *"
  ],
  "answer": "ls -l",
  "hint": "Es la lista larga que muestra metadatos.",
  "explanation": "El flag '-l' (long) de ls muestra los permisos, el propietario y el grupo, entre otros datos."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Para que un usuario pueda ENTRAR en un directorio (hacer 'cd'), ¿qué permiso mínimo debe tener sobre ese directorio?",
  "options": [
    "Lectura (r)",
    "Escritura (w)",
    "Ejecución (x)",
    "Ninguno, el acceso a directorios es libre."
  ],
  "answer": "Ejecución (x)",
  "hint": "En directorios, 'x' significa permiso de paso/búsqueda.",
  "explanation": "A diferencia de los archivos, en los directorios el permiso 'x' (ejecución) es necesario para acceder al contenido y subdirectorios."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Si ejecutas 'chmod 444 file.txt', ¿qué pasará si intentas editar el archivo con un editor de texto como 'vi' siendo el propietario?",
  "options": [
    "El archivo se abrirá y guardará normalmente.",
    "El editor avisará que el archivo es de 'Solo Lectura' (Read Only).",
    "El archivo se borrará automáticamente.",
    "El sistema operativo cerrará la sesión del usuario."
  ],
  "answer": "El editor avisará que el archivo es de 'Solo Lectura' (Read Only).",
  "hint": "4 es lectura, no hay permiso de escritura (2).",
  "explanation": "El permiso 444 establece lectura para todos. Al no tener el bit de escritura (2), el sistema impide modificaciones directas."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Cuál es la diferencia entre el modo absoluto y el modo simbólico en chmod?",
  "options": [
    "El absoluto usa letras y el simbólico números.",
    "El absoluto redefine todos los permisos a la vez; el simbólico puede modificar solo uno sin tocar el resto.",
    "El simbólico solo funciona en servidores AWS.",
    "No hay diferencia, son dos nombres para lo mismo."
  ],
  "answer": "El absoluto redefine todos los permisos a la vez; el simbólico puede modificar solo uno sin tocar el resto.",
  "hint": "Piensa en qué pasa si solo quieres añadir un '+x'.",
  "explanation": "El modo absoluto (números) siempre sobreescribe la máscara completa (u, g, o), mientras que el simbólico permite ajustes incrementales (ej: u+w)."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "¿Qué comando usarías para otorgar permisos de lectura y ejecución al propietario, y nada a nadie más?",
  "options": [
    "chmod 500 archivo",
    "chmod 410 archivo",
    "chmod 700 archivo",
    "chmod 005 archivo"
  ],
  "answer": "chmod 500 archivo",
  "hint": "Suma: Lectura(4) + Ejecución(1) = 5.",
  "explanation": "El primer dígito '5' asigna lectura y ejecución al dueño. Los ceros quitan todo acceso a grupo y otros."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Se te pide cambiar el dueño de una carpeta y de TODO su contenido (subcarpetas y archivos) de forma recursiva. ¿Qué flag usas con chown?",
  "options": [
    "-r",
    "-R",
    "--all",
    "-f"
  ],
  "answer": "-R",
  "hint": "Recursividad en Linux suele ser una R mayúscula.",
  "explanation": "El flag -R (Recursive) aplica el cambio de propiedad a la carpeta especificada y a todos los elementos que contenga."
},
{
  "subjectId": "clf",
  "topicId": "clf-2",
  "question": "Un archivo tiene permisos '700' y su dueño es 'root'. Un usuario normal intenta leerlo. ¿Qué mensaje recibirá?",
  "options": [
    "File empty",
    "Permission denied",
    "Segmentation fault",
    "Command not found"
  ],
  "answer": "Permission denied",
  "hint": "El 7 es para root, los 00 son para grupo y otros.",
  "explanation": "Al tener permisos 700, solo root (dueño) tiene acceso. Cualquier otro usuario recibirá un error de 'Permiso denegado'."
},
{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si creas un vínculo simbólico (soft link) hacia un archivo y luego eliminas el archivo original, ¿qué sucede con el vínculo?",
    "options": [
      "El vínculo se elimina automáticamente para ahorrar espacio.",
      "El vínculo permanece pero se rompe (puntero huérfano) hasta que se cree un nuevo archivo con el mismo nombre.",
      "El vínculo se convierte automáticamente en un vínculo físico (hard link).",
      "El sistema operativo impide la eliminación del archivo original mientras el vínculo exista."
    ],
    "answer": "El vínculo permanece pero se rompe (puntero huérfano) hasta que se cree un nuevo archivo con el mismo nombre.",
    "hint": "Un vínculo simbólico solo apunta a un nombre, no a los datos directos.",
    "explanation": "A diferencia de los vínculos físicos, los simbólicos apuntan a la ruta/nombre. Si el origen desaparece, el vínculo ya no tiene a dónde llevar, aunque el archivo de vínculo como tal siga existiendo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de las siguientes afirmaciones sobre los vínculos físicos (hard links) es correcta?",
    "options": [
      "Pueden apuntar a directorios igual que los archivos.",
      "Pueden vincular archivos que se encuentran en diferentes particiones o sistemas de archivos.",
      "Apuntan directamente al número de inodo o contenido físico del archivo.",
      "Se crean utilizando obligatoriamente la opción -s del comando ln."
    ],
    "answer": "Apuntan directamente al número de inodo o contenido físico del archivo.",
    "hint": "Un vínculo físico es básicamente otro nombre para los mismos datos en el disco.",
    "explanation": "Los hard links comparten el mismo inodo que el archivo original. Por restricciones del sistema de archivos, no pueden cruzar particiones ni apuntar a directorios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Necesitas agrupar y comprimir simultáneamente tres archivos en un tarball llamado 'logs.tar.gz'. ¿Cuál es el comando más eficiente?",
    "options": [
      "tar -cvf logs.tar.gz file1 file2 file3",
      "tar -czvf logs.tar.gz file1 file2 file3",
      "tar -xzvf logs.tar.gz file1 file2 file3",
      "gzip logs.tar.gz file1 file2 file3"
    ],
    "answer": "tar -czvf logs.tar.gz file1 file2 file3",
    "hint": "La opción 'z' integra la compresión gzip.",
    "explanation": "La opción -c crea el archivo, -z lo comprime con gzip, -v es detallado y -f especifica el nombre del archivo resultante."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un administrador desea extraer el contenido de un archivo llamado 'backup.tar' sin ver la lista de archivos procesados. ¿Qué comando debe usar?",
    "options": [
      "tar -cvf backup.tar",
      "tar -xf backup.tar",
      "tar -zvf backup.tar",
      "tar -cf backup.tar"
    ],
    "answer": "tar -xf backup.tar",
    "hint": "La extracción usa la opción 'x'.",
    "explanation": "La opción -x extrae y -f define el archivo. Al omitir -v (verbose), el proceso se realiza de forma silenciosa sin listar los archivos en la terminal."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede con el archivo original después de ejecutar el comando 'gzip data.txt'?",
    "options": [
      "Se mantiene intacto junto al nuevo archivo data.txt.gz.",
      "Es reemplazado por data.txt.gz y el archivo original desaparece.",
      "Se convierte en un vínculo simbólico hacia data.txt.gz.",
      "Se borra el contenido pero el archivo vacío data.txt permanece."
    ],
    "answer": "Es reemplazado por data.txt.gz y el archivo original desaparece.",
    "hint": "Gzip es una utilidad destructiva con respecto al archivo original por defecto.",
    "explanation": "Por defecto, gzip comprime el archivo y elimina el original, dejando solo la versión comprimida con la extensión .gz."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es el comando correcto para descomprimir un archivo comprimido con gzip sin usar la utilidad 'gunzip'?",
    "options": [
      "gzip -x archivo.gz",
      "gzip -d archivo.gz",
      "gzip -u archivo.gz",
      "tar -xf archivo.gz"
    ],
    "answer": "gzip -d archivo.gz",
    "hint": "La opción viene de la palabra 'decompress'.",
    "explanation": "La opción -d (decompress) le indica a gzip que realice la operación inversa a la compresión."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Para comprimir una carpeta completa llamada 'WebSite' usando la utilidad zip, ¿qué opción es obligatoria para incluir todo su contenido?",
    "options": [
      "zip -c WebSite",
      "zip -r WebSite",
      "zip -a WebSite",
      "zip -f WebSite"
    ],
    "answer": "zip -r WebSite",
    "hint": "Se refiere a procesar directorios de forma descendente.",
    "explanation": "La opción -r (recursive) es necesaria para que zip incluya el directorio y todos los archivos y subdirectorios dentro de él."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Has transferido un archivo crítico y quieres asegurar al 100% que no sufrió alteraciones ni corrupción de bits. ¿Qué utilidad de Linux utilizarías?",
    "options": [
      "diff",
      "cksum",
      "grep",
      "tar"
    ],
    "answer": "cksum",
    "hint": "Genera una suma de comprobación basada en el contenido.",
    "explanation": "cksum calcula un valor CRC (Cyclic Redundancy Check) único para el contenido del archivo. Si el valor es el mismo en origen y destino, el archivo es idéntico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando usarías para encontrar todos los archivos en el sistema que tengan un tamaño superior a 500MB?",
    "options": [
      "grep -s +500M",
      "ls -lH 500M",
      "find / -size +500M",
      "diff / -size 500"
    ],
    "answer": "find / -size +500M",
    "hint": "Es la herramienta de búsqueda por criterios de metadatos.",
    "explanation": "El comando find permite buscar por diversos criterios, incluyendo el tamaño mediante la opción -size."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Necesitas buscar la palabra 'AccessDenied' dentro de cientos de archivos de texto en un directorio. ¿Cuál es el comando adecuado?",
    "options": [
      "find 'AccessDenied'",
      "grep 'AccessDenied' *",
      "diff 'AccessDenied' *",
      "cksum 'AccessDenied'"
    ],
    "answer": "grep 'AccessDenied' *",
    "hint": "Busca patrones de texto dentro de los archivos.",
    "explanation": "grep es la utilidad estándar para buscar cadenas de texto o patrones (expresiones regulares) dentro del contenido de los archivos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función principal del comando 'diff' en la administración de sistemas?",
    "options": [
      "Calcular la diferencia de tamaño entre dos archivos.",
      "Mostrar las diferencias línea por línea entre el contenido de dos archivos.",
      "Diferenciar entre vínculos simbólicos y físicos.",
      "Cambiar el nombre de archivos que son diferentes."
    ],
    "answer": "Mostrar las diferencias línea por línea entre el contenido de dos archivos.",
    "hint": "Se usa mucho para comparar versiones de código o archivos de configuración.",
    "explanation": "diff analiza dos archivos y genera un reporte de qué líneas sobran, faltan o son distintas entre ellos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En la shell de Linux, ¿para qué sirve el comando 'hash'?",
    "options": [
      "Para cifrar una contraseña de usuario.",
      "Para ver la tabla de rutas de comandos que la shell ha memorizado para ganar velocidad.",
      "Para generar un checksum de un archivo comprimido.",
      "Para borrar el historial de comandos ejecutados."
    ],
    "answer": "Para ver la tabla de rutas de comandos que la shell ha memorizado para ganar velocidad.",
    "hint": "Tiene que ver con la ubicación de los binarios ejecutados.",
    "explanation": "La shell Bash usa una tabla hash para recordar dónde están los ejecutables (como /bin/ls) para no tener que buscarlos en el PATH cada vez."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando crearía un vínculo simbólico llamado 'enlace' que apunte al archivo 'original.txt'?",
    "options": [
      "ln enlace original.txt",
      "ln -s original.txt enlace",
      "ln -s enlace original.txt",
      "tar -s original.txt enlace"
    ],
    "answer": "ln -s original.txt enlace",
    "hint": "La sintaxis es: comando [opciones] origen destino.",
    "explanation": "La sintaxis de ln -s requiere primero el nombre del archivo existente (original) y luego el nombre del nuevo vínculo que se va a crear."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué utilidad permite empaquetar muchos archivos en uno solo, pero NO comprime el tamaño a menos que se le indique explícitamente?",
    "options": [
      "gzip",
      "zip",
      "tar",
      "cksum"
    ],
    "answer": "tar",
    "hint": "Su nombre viene de 'Tape Archive'.",
    "explanation": "Originalmente tar solo agrupaba archivos para cintas de respaldo. La compresión es una función adicional que se logra mediante filtros como gzip o bzip2."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ejecutas 'ln file1 file2' y luego modificas el contenido de 'file1', ¿qué verás al abrir 'file2'?",
    "options": [
      "El contenido original de file1 antes de la modificación.",
      "El nuevo contenido modificado, ya que comparten los mismos datos físicos.",
      "Nada, porque el vínculo se rompe al modificar el original.",
      "Un mensaje de error indicando que el archivo está bloqueado."
    ],
    "answer": "El nuevo contenido modificado, ya que comparten los mismos datos físicos.",
    "hint": "Es un vínculo físico (hard link).",
    "explanation": "Al ser un vínculo físico, ambos nombres apuntan exactamente al mismo espacio en disco. Cualquier cambio en uno se refleja inmediatamente en el otro."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cómo se conoce comúnmente al archivo generado por el comando 'tar'?",
    "options": [
      "Zipfile",
      "Tarball",
      "Gzip",
      "Hash"
    ],
    "answer": "Tarball",
    "hint": "Es un término informal muy usado en Linux.",
    "explanation": "Un 'tarball' es un archivo que contiene un grupo de archivos empaquetados con tar, usualmente comprimido."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la opción de 'tar' que permite extraer archivos de un tarball comprimido con gzip?",
    "options": [
      "-c",
      "-x",
      "-t",
      "-r"
    ],
    "answer": "-x",
    "hint": "Viene de la palabra 'eXtract'.",
    "explanation": "La opción -x (extract) se encarga de desagrupar los archivos del archivo comprimido o empaquetado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando usarías para ver la diferencia entre dos archivos binarios para saber si son idénticos sin ver el contenido de texto?",
    "options": [
      "diff",
      "grep",
      "cksum",
      "find"
    ],
    "answer": "cksum",
    "hint": "Es útil para verificar integridad en cualquier tipo de archivo.",
    "explanation": "Mientras que diff es mejor para texto, cksum genera una firma digital única basada en bits, permitiendo comparar cualquier tipo de archivo (binario o texto)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es el comando para buscar archivos por el nombre del propietario en un directorio específico?",
    "options": [
      "find [directorio] -user [nombre_usuario]",
      "find [directorio] -name [nombre_usuario]",
      "grep [nombre_usuario] [directorio]",
      "ls -u [nombre_usuario]"
    ],
    "answer": "find [directorio] -user [nombre_usuario]",
    "hint": "Utiliza la opción específica para el propietario.",
    "explanation": "La opción -user de find filtra los resultados para mostrar solo aquellos archivos que pertenecen al usuario especificado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué extensión de archivo se genera típicamente al usar 'tar' con la opción '-z'?",
    "options": [
      ".tar",
      ".zip",
      ".tar.gz",
      ".gz"
    ],
    "answer": ".tar.gz",
    "hint": "Indica empaquetado + compresión gzip.",
    "explanation": "La extensión compuesta .tar.gz (o .tgz) indica que el archivo fue primero empaquetado con tar y luego comprimido con gzip."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la sintaxis correcta para descomprimir un archivo llamado 'proyecto.zip'?",
    "options": [
      "zip -d proyecto.zip",
      "unzip proyecto.zip",
      "tar -xf proyecto.zip",
      "gzip -unzip proyecto.zip"
    ],
    "answer": "unzip proyecto.zip",
    "hint": "Es un comando dedicado para archivos .zip.",
    "explanation": "A diferencia de tar o gzip, los archivos .zip tienen su propia utilidad dedicada llamada unzip para la extracción."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si intentas crear un vínculo simbólico hacia un directorio, ¿qué sucede?",
    "options": [
      "El comando falla, los directorios solo admiten vínculos físicos.",
      "Se crea un alias o acceso directo al directorio de forma exitosa.",
      "El sistema operativo se bloquea por seguridad.",
      "El contenido del directorio se copia al nuevo vínculo."
    ],
    "answer": "Se crea un alias o acceso directo al directorio de forma exitosa.",
    "hint": "Es una de las grandes ventajas de los vínculos simbólicos sobre los físicos.",
    "explanation": "Los vínculos simbólicos son muy flexibles y permiten apuntar a directorios, lo que facilita crear rutas cortas a carpetas profundas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Se requiere una salida detallada de lo que está haciendo el comando tar. ¿Qué letra añadimos a las opciones?",
    "options": [
      "-d",
      "-v",
      "-s",
      "-f"
    ],
    "answer": "-v",
    "hint": "Viene de 'Verbose'.",
    "explanation": "La opción -v (verbose) hace que tar imprima en pantalla el nombre de cada archivo a medida que es procesado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando es más adecuado para buscar archivos basándose en su fecha de modificación?",
    "options": [
      "grep",
      "find",
      "diff",
      "hash"
    ],
    "answer": "find",
    "hint": "Busca archivos por atributos o metadatos.",
    "explanation": "find cuenta con opciones como -mtime o -newer para localizar archivos según cuándo fueron creados o modificados."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la diferencia principal entre 'zip' y 'tar' en cuanto a su comportamiento por defecto?",
    "options": [
      "tar comprime archivos automáticamente y zip no.",
      "zip comprime archivos individualmente y luego los empaqueta; tar solo empaqueta (por defecto).",
      "tar solo funciona en AWS y zip en cualquier Linux.",
      "No hay diferencia, son comandos idénticos."
    ],
    "answer": "zip comprime archivos individualmente y luego los empaqueta; tar solo empaqueta (por defecto).",
    "hint": "Piensa en el propósito original de cada uno.",
    "explanation": "Zip fue diseñado desde el inicio para compresión y empaquetado conjunto. Tar nació para archivar (empaquetar) y delega la compresión en otras herramientas."
  },
{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la principal característica técnica que define a una 'ruta absoluta' en el sistema de archivos de Linux?",
    "options": [
      "Comienza siempre desde el directorio /home del usuario.",
      "Comienza siempre con el carácter '/' representando la raíz (root).",
      "Es una ruta que no cambia aunque el usuario mueva el archivo.",
      "Se escribe utilizando únicamente letras mayúsculas."
    ],
    "answer": "Comienza siempre con el carácter '/' representando la raíz (root).",
    "hint": "Piense en el punto de origen universal del sistema.",
    "explanation": "Las rutas absolutas definen la ubicación de un recurso partiendo desde el nivel más alto de la jerarquía (/), independientemente de dónde se encuentre el usuario actualmente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un administrador está en /var/log y desea subir dos niveles jerárquicos hacia la raíz utilizando una ruta relativa. ¿Qué comando es el correcto?",
    "options": [
      "cd /",
      "cd ..",
      "cd ../..",
      "cd .."
    ],
    "answer": "cd ../..",
    "hint": "Cada '..' representa un salto al directorio padre.",
    "explanation": "En las rutas relativas, '..' se refiere al directorio superior. Para subir dos niveles (de /var/log a /var y luego a /), se utiliza ../.."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ejecutas el comando 'pwd' y la salida es '/home/ec2-user', ¿qué tipo de ruta estás visualizando?",
    "options": [
      "Ruta relativa.",
      "Ruta de enlace simbólico.",
      "Ruta absoluta.",
      "Ruta de sistema virtual."
    ],
    "answer": "Ruta absoluta.",
    "hint": "Muestra la ruta completa desde la raíz.",
    "explanation": "El comando 'pwd' (print working directory) siempre devuelve la ruta absoluta, mostrando todo el camino desde la raíz (/) hasta la ubicación actual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la diferencia fundamental entre los comandos 'more' y 'less' al visualizar archivos de log extensos en AWS?",
    "options": [
      "More permite editar el archivo, Less solo lectura.",
      "Less carga el archivo completo en RAM, More lo hace por partes.",
      "Less permite la navegación hacia adelante y hacia atrás, mientras que More es principalmente hacia adelante.",
      "More es un comando de Linux y Less es un comando exclusivo de Windows."
    ],
    "answer": "Less permite la navegación hacia adelante y hacia atrás, mientras que More es principalmente hacia adelante.",
    "hint": "Hay un dicho en Linux: 'Less is more (than more)'.",
    "explanation": "Less es una utilidad más moderna y eficiente que permite desplazarse en ambas direcciones sin cargar todo el archivo, lo que lo hace ideal para archivos muy grandes."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Intentas borrar un directorio que contiene scripts de configuración usando 'rm config_dir', pero el sistema devuelve un error. ¿Por qué sucede esto?",
    "options": [
      "El comando rm solo borra archivos; para directorios no vacíos se requiere la opción recursiva (-r).",
      "No tienes permisos de superusuario (sudo).",
      "El directorio está protegido por el kernel de AWS.",
      "Debes usar el comando 'del' en su lugar."
    ],
    "answer": "El comando rm solo borra archivos; para directorios no vacíos se requiere la opción recursiva (-r).",
    "hint": "Linux protege los directorios para evitar borrados accidentales masivos.",
    "explanation": "Para eliminar un directorio y todo su contenido, se debe usar 'rm -r' (recursivo). El comando rm por sí solo está diseñado para archivos individuales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Tienes dos archivos: 'Script.sh' y 'script.sh'. ¿Cómo trata Linux estos archivos en un mismo directorio?",
    "options": [
      "Como el mismo archivo, el segundo sobreescribe al primero.",
      "Como dos archivos distintos, debido a que Linux distingue entre mayúsculas y minúsculas (case-sensitive).",
      "El sistema genera un error y pide renombrar uno.",
      "Linux convierte automáticamente todos los nombres a minúsculas."
    ],
    "answer": "Como dos archivos distintos, debido a que Linux distingue entre mayúsculas y minúsculas (case-sensitive).",
    "hint": "Es una de las diferencias clave con sistemas como Windows.",
    "explanation": "El sistema de archivos de Linux es sensible a las mayúsculas, por lo que 'A' y 'a' son caracteres totalmente diferentes para el kernel."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede si un administrador ejecuta 'cd' sin ningún argumento o ruta adicional?",
    "options": [
      "El comando devuelve un error de sintaxis.",
      "El usuario es dirigido automáticamente a su directorio principal (Home).",
      "El usuario es dirigido al directorio raíz (/).",
      "Se muestra la ayuda del comando cd."
    ],
    "answer": "El usuario es dirigido automáticamente a su directorio principal (Home).",
    "hint": "Es un atajo rápido para 'volver a casa'.",
    "explanation": "Ejecutar 'cd' a secas equivale a 'cd ~', llevando al usuario directamente a su directorio personal (/home/usuario)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Necesitas crear una estructura de directorios profunda como 'proyectos/2024/abril' con un solo comando, pero las carpetas superiores no existen. ¿Qué opción de 'mkdir' es vital aquí?",
    "options": [
      "mkdir -v",
      "mkdir -r",
      "mkdir -p",
      "mkdir -a"
    ],
    "answer": "mkdir -p",
    "hint": "La 'p' viene de 'parents' (padres).",
    "explanation": "La opción -p (parents) crea los directorios intermedios necesarios si no existen, evitando errores de 'archivo o directorio no encontrado'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Al usar el comando 'cp file1.txt backup/', ¿cuál es el comportamiento por defecto si el archivo ya existe en el destino?",
    "options": [
      "El comando se detiene y pregunta al usuario.",
      "Se crea una copia con un número adicional (file1(1).txt).",
      "El archivo original en el destino es sobreescrito sin previo aviso (a menos que se use -i).",
      "El sistema genera un error de 'Acceso Denegado'."
    ],
    "answer": "El archivo original en el destino es sobreescrito sin previo aviso (a menos que se use -i).",
    "hint": "Linux asume que el usuario sabe lo que está haciendo en la CLI.",
    "explanation": "Por defecto, 'cp' sobreescribe archivos existentes en el destino. Para evitarlo, se debe usar la opción interactiva -i."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de las siguientes es una ruta relativa válida para acceder a un archivo en el directorio actual?",
    "options": [
      "/home/user/archivo.txt",
      "./archivo.txt",
      "C:\\archivo.txt",
      "~/archivo.txt"
    ],
    "answer": "./archivo.txt",
    "hint": "El punto (.) representa la ubicación presente.",
    "explanation": "El punto único (./) indica que el recurso se encuentra en el directorio donde el usuario está posicionado actualmente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un colega te dice: 'En Linux, todo es un archivo'. ¿A qué se refiere técnicamente esta filosofía?",
    "options": [
      "A que no existen las carpetas, solo archivos con nombres largos.",
      "A que el sistema operativo trata incluso al hardware (teclado, discos) como flujos de datos accesibles mediante descriptores de archivos.",
      "A que todos los programas deben guardarse con la extensión .file.",
      "A que Linux no puede procesar bases de datos, solo archivos planos."
    ],
    "answer": "A que el sistema operativo trata incluso al hardware (teclado, discos) como flujos de datos accesibles mediante descriptores de archivos.",
    "hint": "Es la base de la arquitectura Unix/Linux.",
    "explanation": "En Linux, la abstracción de 'archivo' permite interactuar con dispositivos, tuberías y sockets de red usando las mismas herramientas que se usan para texto."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Quieres mover un archivo llamado 'old.txt' a una carpeta llamada 'archive' y cambiarle el nombre a 'new.txt' al mismo tiempo. ¿Qué comando usarías?",
    "options": [
      "cp old.txt archive/new.txt",
      "mv old.txt archive/new.txt",
      "rn old.txt archive/new.txt",
      "move old.txt archive/new.txt"
    ],
    "answer": "mv old.txt archive/new.txt",
    "hint": "Mover y Renombrar son la misma operación lógica en Linux.",
    "explanation": "El comando 'mv' (move) se utiliza tanto para mover archivos entre directorios como para renombrarlos, o ambas cosas a la vez."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás navegando en la terminal y escribes 'cd ../../..'. Si estabas en '/home/user/docs/work', ¿dónde estarás ahora?",
    "options": [
      "/home/user",
      "/home",
      "/ (raíz)",
      "/home/user/docs"
    ],
    "answer": "/home",
    "hint": "Cuenta tres niveles hacia atrás.",
    "explanation": "De 'work' a 'docs' (1), de 'docs' a 'user' (2), y de 'user' a 'home' (3)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del comando 'ls -F'?",
    "options": [
      "Fuerza el listado de archivos borrados.",
      "Añade un símbolo al final de cada nombre para indicar el tipo de archivo (ej. '/' para directorios).",
      "Muestra el tamaño de los archivos en formato 'fácil' (human-readable).",
      "Filtra solo los archivos que empiezan con la letra F."
    ],
    "answer": "Añade un símbolo al final de cada nombre para indicar el tipo de archivo (ej. '/' para directorios).",
    "hint": "Es una forma visual de clasificar sin usar colores.",
    "explanation": "La opción -F clasifica los archivos añadiendo un indicador: / para directorios, * para ejecutables, @ para enlaces, etc."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas ver el contenido de un archivo de configuración de forma rápida sin abrir un editor. ¿Qué comando es el más apropiado?",
    "options": [
      "ls",
      "cat",
      "pwd",
      "cd"
    ],
    "answer": "cat",
    "hint": "Concatenar y mostrar.",
    "explanation": "'cat' lee el contenido de un archivo y lo imprime directamente en la terminal."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué representa el directorio '/mnt' en la jerarquía estándar de Linux?",
    "options": [
      "Archivos de mantenimiento del sistema.",
      "Punto de montaje para sistemas de archivos montados temporalmente.",
      "Archivos del monitor de red.",
      "Directorio principal de los usuarios administradores."
    ],
    "answer": "Punto de montaje para sistemas de archivos montados temporalmente.",
    "hint": "Viene de 'mount'.",
    "explanation": "/mnt es el lugar tradicional para montar temporalmente dispositivos como discos externos o particiones adicionales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ejecutas 'ls -a', ¿qué archivos adicionales verás que no aparecen con un simple 'ls'?",
    "options": [
      "Archivos creados por el administrador (root).",
      "Archivos ocultos (aquellos que comienzan con un punto).",
      "Archivos de aplicaciones de AWS.",
      "Solo directorios, ocultando los archivos."
    ],
    "answer": "Archivos ocultos (aquellos que comienzan con un punto).",
    "hint": "La 'a' viene de 'all'.",
    "explanation": "En Linux, cualquier archivo cuyo nombre empiece con '.' se considera oculto. 'ls -a' obliga al sistema a mostrarlos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un administrador necesita copiar una carpeta entera 'data' a un volumen de respaldo. ¿Qué comando debe usar para asegurar que se copie el contenido y las subcarpetas?",
    "options": [
      "cp data backup/",
      "cp -r data backup/",
      "mv data backup/",
      "cat data > backup/"
    ],
    "answer": "cp -r data backup/",
    "hint": "Sin esta opción, cp dará error al encontrarse con un directorio.",
    "explanation": "La opción -r (recursive) es obligatoria para copiar directorios; de lo contrario, cp omitirá la carpeta."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del comando 'cd -'?",
    "options": [
      "Borrar el último directorio visitado.",
      "Regresar al directorio de trabajo anterior.",
      "Bajar un nivel jerárquico.",
      "Cerrar la terminal actual."
    ],
    "answer": "Regresar al directorio de trabajo anterior.",
    "hint": "Es como el botón 'atrás' del navegador.",
    "explanation": "El guion con 'cd' es un atajo muy útil para alternar rápidamente entre los dos últimos directorios visitados."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En una ruta de acceso como '/etc/sysconfig/network-scripts/', ¿qué representa cada barra inclinada '/' entre los nombres?",
    "options": [
      "Un comando de ejecución.",
      "El separador de directorios.",
      "Un error de escritura.",
      "Un nivel de seguridad de cifrado."
    ],
    "answer": "El separador de directorios.",
    "hint": "Define la transición de una carpeta a otra.",
    "explanation": "La barra diagonal es el delimitador estándar en Linux para separar los nombres de directorios en una ruta de acceso."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Para crear un directorio llamado 'AWS_Logs' en la ubicación actual, ¿cuál es el comando correcto?",
    "options": [
      "newdir AWS_Logs",
      "mkdir AWS_Logs",
      "md AWS_Logs",
      "create AWS_Logs"
    ],
    "answer": "mkdir AWS_Logs",
    "hint": "Viene de 'make directory'.",
    "explanation": "mkdir es el comando estándar para crear uno o más directorios nuevos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede si intentas borrar el directorio raíz '/' con 'rm -rf /' teniendo permisos de superusuario?",
    "options": [
      "Linux lo impide automáticamente por seguridad sin posibilidad de saltarse el aviso.",
      "El sistema intentará borrar todo el sistema de archivos operativo, causando un fallo catastrófico.",
      "Solo se borran los archivos personales del usuario.",
      "Se reinicia el servidor a su estado de fábrica de AWS."
    ],
    "answer": "El sistema intentará borrar todo el sistema de archivos operativo, causando un fallo catastrófico.",
    "hint": "Es una de las acciones más peligrosas en Linux.",
    "explanation": "Con permisos de root, rm -rf / elimina recursivamente todo desde la raíz. La mayoría de las distribuciones modernas requieren una bandera adicional (--no-preserve-root) para permitir este 'suicidio' del sistema."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando usarías para renombrar 'lista.txt' a 'final.txt' sin mover el archivo de su carpeta actual?",
    "options": [
      "rename lista.txt final.txt",
      "mv lista.txt final.txt",
      "cp lista.txt final.txt",
      "cat lista.txt > final.txt"
    ],
    "answer": "mv lista.txt final.txt",
    "hint": "Se 'mueve' el archivo a un nuevo nombre en la misma ubicación.",
    "explanation": "El comando mv es la forma estándar de renombrar archivos en Linux."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas listar los archivos de un directorio mostrando detalles como permisos, tamaño y fecha de modificación. ¿Qué opción de 'ls' es necesaria?",
    "options": [
      "ls -s",
      "ls -l",
      "ls -d",
      "ls -x"
    ],
    "answer": "ls -l",
    "hint": "La 'l' viene de 'long' (largo).",
    "explanation": "El formato de listado largo (-l) proporciona metadatos detallados de cada archivo y directorio."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el contexto de la CLI de AWS Linux, ¿por qué es fundamental conocer el comando 'pwd' antes de ejecutar un 'rm'?",
    "options": [
      "Para verificar que el comando rm está instalado.",
      "Para confirmar la ruta absoluta actual y evitar borrar archivos en el directorio equivocado.",
      "Para activar los permisos de borrado.",
      "Para ver cuánto espacio libre queda."
    ],
    "answer": "Para confirmar la ruta absoluta actual y evitar borrar archivos en el directorio equivocado.",
    "hint": "Seguridad antes de la ejecución.",
    "explanation": "Dado que en Linux no hay 'Papelera de Reciclaje' en la CLI, confirmar la ubicación actual con pwd es una práctica de seguridad crítica antes de realizar operaciones destructivas."
  },
{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás editando un archivo de configuración en una instancia EC2 usando 'nano' y necesitas guardar los cambios sin cerrar el editor. ¿Qué combinación de teclas debes usar?",
    "options": [
      "CTRL + X",
      "CTRL + O",
      "CTRL + S",
      "CTRL + G"
    ],
    "answer": "CTRL + O",
    "hint": "En la interfaz de nano, esta acción se describe como 'Write Out'.",
    "explanation": "CTRL+O (Write Out) escribe el búfer actual en el disco, permitiendo guardar el progreso sin salir del programa."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el editor 'nano', ¿qué representa el símbolo '^' que aparece en el menú de ayuda en la parte inferior de la pantalla?",
    "options": [
      "La tecla Shift.",
      "La tecla Alt o Meta.",
      "La tecla Control (CTRL).",
      "La tecla FN."
    ],
    "answer": "La tecla Control (CTRL).",
    "hint": "Es la notación estándar de intercalación para teclas de control.",
    "explanation": "En nano y muchos otros programas de terminal, el símbolo ^ se utiliza para indicar que se debe mantener presionada la tecla Control seguida de la letra indicada."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un administrador desea utilizar 'gedit' para modificar un script en un servidor remoto. ¿Cuál es el requisito indispensable para que este editor funcione?",
    "options": [
      "Tener instalada la utilidad sudo.",
      "Que el sistema tenga instalada y activa una interfaz gráfica de usuario (GUI).",
      "Que el archivo tenga permisos 777.",
      "Haber instalado previamente el paquete vim-enhanced."
    ],
    "answer": "Que el sistema tenga instalada y activa una interfaz gráfica de usuario (GUI).",
    "hint": "A diferencia de nano o vim, gedit no es un editor basado exclusivamente en texto.",
    "explanation": "gedit es un editor de texto gráfico. Si el servidor solo tiene CLI (interfaz de línea de comandos), gedit no podrá abrirse."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Te encuentras perdido dentro de 'nano' y no recuerdas los comandos. ¿Cuál es la combinación de teclas para abrir el manual de ayuda interno?",
    "options": [
      "CTRL + H",
      "CTRL + G",
      "ALT + G",
      "F1"
    ],
    "answer": "CTRL + G",
    "hint": "La G viene de la palabra 'Get help'.",
    "explanation": "CTRL+G abre el texto de ayuda integrado que explica las funciones y atajos disponibles en nano."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Necesitas mover una línea de configuración de un lugar a otro dentro de un archivo usando 'nano'. ¿Qué secuencia de comandos realizaría la función de 'Cortar' y 'Pegar'?",
    "options": [
      "CTRL+C y CTRL+V",
      "CTRL+K y CTRL+U",
      "CTRL+X y CTRL+P",
      "ALT+K y ALT+U"
    ],
    "answer": "CTRL+K y CTRL+U",
    "hint": "K viene de 'Kill' (cortar) y U de 'Uncut' (pegar).",
    "explanation": "En nano, CTRL+K corta la línea actual al 'cutbuffer' y CTRL+U (Uncut) la pega en la posición actual del cursor."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás auditando un archivo muy extenso en nano y necesitas localizar una dirección IP específica. ¿Qué comando activa la búsqueda de una cadena de texto?",
    "options": [
      "CTRL + F",
      "CTRL + B",
      "CTRL + W",
      "CTRL + S"
    ],
    "answer": "CTRL + W",
    "hint": "Significa 'Where Is'.",
    "explanation": "CTRL+W (Where Is) permite ingresar una cadena de texto o expresión regular para buscarla dentro del archivo abierto."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el contexto de editores de Linux, ¿cuál es la principal ventaja de usar 'vim' o 'nano' sobre 'gedit' en la administración de servidores en la nube?",
    "options": [
      "Son más coloridos y fáciles de usar.",
      "Permiten editar archivos directamente sobre una conexión SSH sin necesidad de entorno gráfico.",
      "Tienen corrector ortográfico automático para scripts de Python.",
      "Soportan archivos de más de 100 GB, cosa que gedit no hace."
    ],
    "answer": "Permiten editar archivos directamente sobre una conexión SSH sin necesidad de entorno gráfico.",
    "hint": "Piense en la eficiencia de la terminal en servidores remotos.",
    "explanation": "Los editores de línea de comandos son ligeros y funcionan sobre cualquier terminal de texto, lo cual es vital para administrar instancias remotas (como AWS EC2)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas ver exactamente en qué línea y columna se encuentra el cursor en nano para reportar un error. ¿Qué comando muestra esta posición?",
    "options": [
      "CTRL + P",
      "CTRL + C",
      "ALT + C",
      "CTRL + L"
    ],
    "answer": "CTRL + C",
    "hint": "Muestra la posición constante o actual del cursor en la barra de estado.",
    "explanation": "Al presionar CTRL+C en nano, se muestra en la parte inferior la línea, columna y el carácter actual donde está posicionado el cursor."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En la documentación de nano, aparece el comando 'M-W'. ¿A qué se refiere la letra 'M' en un teclado estándar?",
    "options": [
      "A la tecla Meta, que usualmente es la tecla Alt.",
      "A la tecla Menu.",
      "A presionar la tecla M antes del comando.",
      "A la tecla Cmd en teclados Mac."
    ],
    "answer": "A la tecla Meta, que usualmente es la tecla Alt.",
    "hint": "Se usa para comandos que no utilizan CTRL.",
    "explanation": "La notación 'M-' (Meta) en editores de texto Linux se refiere generalmente a la tecla Alt. 'M-W' significa presionar Alt+W."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Quieres salir de nano pero tienes cambios sin guardar. ¿Qué sucede al presionar CTRL + X?",
    "options": [
      "El programa se cierra inmediatamente perdiendo todo.",
      "El programa pregunta si deseas guardar los cambios antes de salir.",
      "El programa guarda automáticamente y sale.",
      "El comando es ignorado hasta que guardes con CTRL+O."
    ],
    "answer": "El programa pregunta si deseas guardar los cambios antes de salir.",
    "hint": "Es un mecanismo de seguridad para evitar pérdida de datos.",
    "explanation": "CTRL+X inicia la rutina de salida; si hay cambios, nano solicitará confirmación (Y/N) para guardarlos antes de cerrar."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del comando 'CTRL + Y' dentro del editor nano?",
    "options": [
      "Redo (Rehacer la última acción).",
      "Ir a la página (pantalla) anterior.",
      "Borrar la línea actual.",
      "Justificar el texto."
    ],
    "answer": "Ir a la página (pantalla) anterior.",
    "hint": "Se usa para navegación rápida hacia arriba.",
    "explanation": "CTRL+Y permite desplazarse hacia arriba una pantalla completa, mientras que CTRL+V desplaza hacia la pantalla siguiente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Necesitas saltar directamente a la línea 150 de un archivo de configuración muy largo en nano. ¿Qué combinación de teclas permite ingresar el número de línea?",
    "options": [
      "CTRL + J",
      "CTRL + _ (guion bajo)",
      "ALT + L",
      "CTRL + L"
    ],
    "answer": "CTRL + _ (guion bajo)",
    "hint": "En muchos teclados, esto requiere presionar CTRL + SHIFT + -.",
    "explanation": "El comando CTRL+_ (Control + guion bajo) abre un prompt que permite al usuario teclear el número de línea y columna para saltar directamente a ella."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si estás en una terminal Linux y ejecutas 'vim --help', ¿qué estás intentando hacer según las conclusiones del curso?",
    "options": [
      "Ejecutar el editor en modo de emergencia.",
      "Obtener ayuda sobre cómo utilizar el editor Vim.",
      "Instalar el editor Vim si no existe.",
      "Listar los archivos que Vim puede editar."
    ],
    "answer": "Obtener ayuda sobre cómo utilizar el editor Vim.",
    "hint": "Es la forma estándar de consultar opciones de comandos en Linux.",
    "explanation": "El flag --help es una convención en Linux para mostrar la sintaxis y opciones básicas de un comando, en este caso, del editor Vim."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas copiar una línea en nano sin eliminarla de su posición original (sin usar 'cortar'). ¿Qué comando usarías?",
    "options": [
      "M-^ (Alt + 6)",
      "CTRL + C",
      "CTRL + K",
      "ALT + C"
    ],
    "answer": "M-^ (Alt + 6)",
    "hint": "Copia al 'cutbuffer' sin borrar la línea actual.",
    "explanation": "M-^ (o Alt+6 en algunos teclados) copia la línea actual al búfer de corte sin eliminarla, permitiendo pegarla después con CTRL+U."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del comando 'CTRL + \\' (barra invertida) en nano?",
    "options": [
      "Cerrar el editor forzosamente.",
      "Buscar y reemplazar una cadena de texto.",
      "Dividir la pantalla en dos.",
      "Insertar un carácter especial."
    ],
    "answer": "Buscar y reemplazar una cadena de texto.",
    "hint": "Es la evolución del comando 'Where Is'.",
    "explanation": "CTRL+\\ abre la función de reemplazo, donde se define qué buscar y por qué texto sustituirlo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Por qué los editores de texto son considerados esenciales para la administración de sistemas Linux?",
    "options": [
      "Porque Linux no permite usar interfaces gráficas para nada.",
      "Porque casi toda la configuración del sistema y de las aplicaciones se guarda en archivos de texto plano.",
      "Porque son los únicos programas que pueden leer el kernel.",
      "Porque permiten programar en binario directamente."
    ],
    "answer": "Porque casi toda la configuración del sistema y de las aplicaciones se guarda en archivos de texto plano.",
    "hint": "Piense en archivos como /etc/passwd o archivos de red.",
    "explanation": "La filosofía de Linux se basa en archivos de texto para la configuración; por tanto, saber editarlos es fundamental para cualquier administrador."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En nano, ¿qué hace el comando 'CTRL + E'?",
    "options": [
      "Borra todo el archivo.",
      "Mueve el cursor al final de la línea actual.",
      "Mueve el cursor al principio de la línea actual.",
      "Sale del editor guardando los cambios."
    ],
    "answer": "Mueve el cursor al final de la línea actual.",
    "hint": "E viene de 'End'.",
    "explanation": "CTRL+E es un atajo de navegación que posiciona el cursor al final de la línea donde se encuentra actualmente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas buscar el corchete o paréntesis correspondiente a uno donde estás posicionado en nano. ¿Qué comando usarías?",
    "options": [
      "M-]",
      "CTRL + ]",
      "ALT + B",
      "CTRL + B"
    ],
    "answer": "M-]",
    "hint": "Es muy útil para programadores para cerrar bloques de código.",
    "explanation": "M-] (Alt + llave/corchete de cierre) busca y salta al carácter de cierre o apertura correspondiente (paréntesis, corchetes, llaves)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás trabajando con múltiples archivos abiertos en nano. ¿Cómo cambias al siguiente búfer de archivo?",
    "options": [
      "CTRL + TAB",
      "M-> (Alt + .)",
      "ALT + N",
      "CTRL + N"
    ],
    "answer": "M-> (Alt + .)",
    "hint": "Usa el símbolo de 'mayor que'.",
    "explanation": "M-> (Alt + .) permite rotar entre los diferentes archivos que han sido cargados en los búferes de nano durante la misma sesión."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede si intentas ejecutar el comando 'nano' en una distribución de Linux donde no está preinstalado?",
    "options": [
      "Se abre Vim automáticamente.",
      "El sistema devuelve un error indicando que el comando no fue encontrado.",
      "El sistema se bloquea.",
      "Se descarga e instala automáticamente desde AWS."
    ],
    "answer": "El sistema devuelve un error indicando que el comando no fue encontrado.",
    "hint": "No todas las herramientas están en todas las distros por defecto.",
    "explanation": "Como menciona el material, nano es común pero no está necesariamente instalado en todas las distribuciones; el shell devolverá un error de 'command not found'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del comando 'CTRL + V' en el editor nano?",
    "options": [
      "Pegar texto desde el portapapeles del sistema.",
      "Ir a la página (pantalla) siguiente.",
      "Activar el modo de selección de texto.",
      "Ver la versión de nano."
    ],
    "answer": "Ir a la página (pantalla) siguiente.",
    "hint": "Es el opuesto a CTRL + Y.",
    "explanation": "CTRL+V se utiliza para avanzar rápidamente hacia abajo en el archivo, mostrando la siguiente pantalla de texto."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En nano, si acabas de realizar una búsqueda con CTRL+W y quieres buscar la siguiente coincidencia de la misma palabra, ¿qué atajo usas?",
    "options": [
      "CTRL + W de nuevo",
      "M-W",
      "ALT + N",
      "CTRL + N"
    ],
    "answer": "M-W",
    "hint": "Repite la última búsqueda realizada.",
    "explanation": "M-W (Alt+W) es el atajo para 'Repeat last search', evitando tener que escribir de nuevo la palabra en el prompt de búsqueda."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cómo se accede al menú de gedit si la interfaz gráfica está activa?",
    "options": [
      "Presionando CTRL+G.",
      "A través de los botones de menú disponibles en la ventana de la aplicación.",
      "Escribiendo comandos en la parte inferior de la ventana.",
      "No tiene menús, solo atajos de teclado."
    ],
    "answer": "A través de los botones de menú disponibles en la ventana de la aplicación.",
    "hint": "Funciona como cualquier aplicación de escritorio estándar.",
    "explanation": "gedit es un editor GUI, por lo que ofrece una interfaz visual con botones y menús desplegables para su operación."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un usuario reporta que no puede guardar cambios en un archivo con nano. Ves que en la parte inferior dice '[ Error writing ...: Permission denied ]'. ¿Qué debería haber hecho el usuario?",
    "options": [
      "Usar CTRL+G para pedir permiso.",
      "Ejecutar nano con privilegios de superusuario usando 'sudo'.",
      "Reiniciar el editor.",
      "Cambiar a gedit."
    ],
    "answer": "Ejecutar nano con privilegios de superusuario usando 'sudo'.",
    "hint": "Se requiere elevación de privilegios para archivos del sistema.",
    "explanation": "Muchos archivos de configuración requieren privilegios de root. Ejecutar 'sudo nano nombre_archivo' permitiría guardar los cambios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la principal diferencia entre 'nano' y 'vim' según el resumen de editores de Linux?",
    "options": [
      "Nano es gráfico y Vim es de texto.",
      "Vim es más sencillo de usar para principiantes que nano.",
      "Ambos son editores de línea de comandos, pero tienen diferentes interfaces y niveles de complejidad.",
      "Vim solo funciona en AWS y nano solo en servidores locales."
    ],
    "answer": "Ambos son editores de línea de comandos, pero tienen diferentes interfaces y niveles de complejidad.",
    "hint": "Ambos residen en la terminal pero sus filosofías de uso varían.",
    "explanation": "Aunque ambos son editores CLI, nano es conocido por ser más intuitivo para principiantes debido a sus atajos visibles, mientras que Vim es un editor modal más potente y complejo."
  },
{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas añadir una línea de log al final de un archivo existente llamado 'output.txt' sin borrar su contenido previo. ¿Qué operador de redirección es el correcto?",
    "options": [
      ">",
      ">>",
      "<",
      "|"
    ],
    "answer": ">>",
    "hint": "El operador simple sobreescribe; el doble 'concatena' al final.",
    "explanation": "El operador '>>' se conoce como redirección de 'append' (añadir). A diferencia de '>', que trunca el archivo y borra lo anterior, '>>' posiciona el puntero al final del archivo para escribir los nuevos datos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás revisando tu historial de comandos con 'history' y ves que el comando que necesitas es el número 42. ¿Cuál es el atajo más rápido para volver a ejecutarlo exactamente?",
    "options": [
      "run 42",
      "!42",
      "#42",
      "redo 42"
    ],
    "answer": "!42",
    "hint": "Se utiliza el signo de exclamación seguido del índice del historial.",
    "explanation": "Bash permite la expansión del historial. Al escribir '!' seguido del número de línea del historial, el shell recupera y ejecuta automáticamente ese comando específico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Al ejecutar 'ls -a', aparecen dos entradas especiales al principio de la lista: '.' y '..'. ¿Qué representa técnicamente la entrada '..'?",
    "options": [
      "Un archivo oculto de respaldo.",
      "El directorio raíz del sistema.",
      "El directorio padre (un nivel por encima del actual).",
      "El directorio personal del usuario (Home)."
    ],
    "answer": "El directorio padre (un nivel por encima del actual).",
    "hint": "Se usa frecuentemente con el comando 'cd' para retroceder.",
    "explanation": "En Linux, '.' representa el directorio actual y '..' representa el directorio padre. Estas son entradas de directorio relativas que existen en cada carpeta del sistema."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Te encuentras atrapado en el editor 'Vim' y necesitas salir inmediatamente descartando todos los cambios realizados. ¿Qué comando debes escribir tras presionar ESC?",
    "options": [
      ":wq",
      ":q!",
      "exit",
      "QUIT"
    ],
    "answer": ":q!",
    "hint": "La letra 'q' es de quit y el '!' fuerza la acción sin guardar.",
    "explanation": "Vim es un editor modal. Para salir sin guardar, se entra al modo de comandos con ':', se usa 'q' para salir y el modificador '!' para ignorar las advertencias de cambios no guardados."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Necesitas listar todos los archivos de un directorio que tengan la extensión '.conf' usando un solo comando. ¿Qué carácter comodín (wildcard) permite representar 'cualquier nombre'?",
    "options": [
      "?",
      "*",
      "%",
      "$"
    ],
    "answer": "*",
    "hint": "Representa cero o más caracteres de cualquier tipo.",
    "explanation": "El asterisco (*) es el comodín más potente en Linux para el 'globbing' de archivos, permitiendo que el shell coincida con cualquier cadena de texto en un nombre de archivo."
  },
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es el comando principal utilizado en Linux para visualizar los permisos actuales de un archivo en formato de lista larga?",
"options": [
"chmod",
"chown",
"ls -l",
"touch"
],
"answer": "ls -l",
"hint": "Este comando lista los archivos y el modificador '-l' muestra el detalle de permisos.",
"explanation": "Según el material, 'ls –l' se utiliza específicamente para ver los permisos de los archivos en el sistema."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Deseas otorgar permisos de lectura, escritura y ejecución al propietario de un archivo utilizando el modo absoluto. ¿Qué valor numérico debes usar?",
"options": [
"4",
"2",
"1",
"7"
],
"answer": "7",
"hint": "Debes sumar los valores de lectura (4), escritura (2) y ejecución (1).",
"explanation": "En el modo absoluto, el valor 7 representa 'Todos los permisos' (4+2+1=7)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si ejecutas el comando 'chmod 400 file_1', ¿cuál será el resultado exacto en la cadena de permisos al verificarlo con 'ls -l'?",
"options": [
"-r--------",
"-r--r--r--",
"-rwx------",
"----------"
],
"answer": "-r--------",
"hint": "El primer dígito '4' es para el usuario (lectura) y los ceros eliminan todo lo demás.",
"explanation": "El valor 400 asigna lectura (r) al usuario/propietario y ningún permiso (---) al grupo y a otros."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En el modo simbólico de 'chmod', ¿cuáles son los tres componentes que conforman una instrucción de cambio de permisos?",
"options": [
"Usuario, Grupo y Otros",
"Lectura, Escritura y Ejecución",
"Identidad, Operador y Permiso",
"Absoluto, Simbólico y Octal"
],
"answer": "Identidad, Operador y Permiso",
"hint": "Se refiere a la estructura como 'u' (quién), '+' (acción) y 'x' (qué).",
"explanation": "El material define la estructura del modo simbólico basada en Identidad (u, g, o), Operador (+, -, =) y Permiso (r, w, x)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Necesitas cambiar el propietario de un archivo porque el actual ya no pertenece al proyecto. ¿Qué comando debes utilizar según las conclusiones de la lección?",
"options": [
"chmod",
"chown",
"touch",
"ls -l"
],
"answer": "chown",
"hint": "El nombre del comando viene de 'change owner'.",
"explanation": "El comando 'chown' se utiliza específicamente para cambiar la propiedad (ownership) de un archivo o directorio."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si aplicas el operador '=' en una configuración simbólica como 'g=x', ¿cuál es la acción exacta que realiza el sistema según la definición del temario?",
"options": [
"Añade el permiso de ejecución sin alterar los demás.",
"Elimina todos los permisos del grupo.",
"Elimina el permiso anterior y establece uno nuevo.",
"Copia los permisos del usuario al grupo."
],
"answer": "Elimina el permiso anterior y establece uno nuevo",
"hint": "El signo '=' no suma, sino que redefine la configuración para esa identidad.",
"explanation": "Según la tabla de modo simbólico, el operador '=' se utiliza para eliminar un permiso existente y establecer uno nuevo de forma específica."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Te piden que el grupo propietario de un archivo pierda sus capacidades de lectura y escritura. ¿Cuál es el comando simbólico correcto?",
"options": [
"chmod u-rw",
"chmod o-rw",
"chmod g-rw",
"chmod g=rw"
],
"answer": "chmod g-rw",
"hint": "La identidad para 'grupo' es 'g' y el operador para eliminar es '-'.",
"explanation": "Para afectar al grupo (g) eliminando (-) lectura (r) y escritura (w), se utiliza 'g-rw'."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En el modo absoluto, ¿qué valor representa únicamente los permisos de 'Lectura' y 'Escritura' combinados para una identidad, sin permitir la ejecución?",
"options": [
"5",
"6",
"3",
"7"
],
"answer": "6",
"hint": "Suma el valor de lectura (4) y el de escritura (2).",
"explanation": "Lectura (4) + Escritura (2) = 6. El valor 1 (ejecución) no se incluye."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "De acuerdo con la demostración del material, ¿cuál es el primer paso lógico antes de modificar los permisos de un archivo recién creado?",
"options": [
"Ejecutar chmod 777",
"Usar 'chown' para cambiar el dueño",
"Ejecutar 'ls -l' para identificar al propietario y grupo actual",
"Eliminar el archivo con 'rm'"
],
"answer": "Ejecutar 'ls -l' para identificar al propietario y grupo actual",
"hint": "No puedes administrar correctamente lo que no has examinado primero.",
"explanation": "La demostración indica que tras crear un archivo con 'touch', se debe ejecutar 'ls -l' para responder quién es el propietario y a qué grupo pertenece."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En la representación simbólica, ¿qué letra representa a los usuarios que no son ni el propietario ni miembros del grupo del archivo?",
"options": [
"u",
"g",
"o",
"a"
],
"answer": "o",
"hint": "Se refiere a 'Others' (Otros).",
"explanation": "La identidad 'o' corresponde a 'otros', diferenciándose de 'u' (usuario/propietario) y 'g' (grupo)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador utiliza el comando 'chmod u+x'. ¿Qué cambio específico ha realizado en el archivo?",
"options": [
"Ha permitido que cualquier persona ejecute el archivo.",
"Ha concedido al propietario el permiso de ejecución.",
"Ha convertido el archivo en un directorio.",
"Ha eliminado los permisos de ejecución del usuario."
],
"answer": "Ha concedido al propietario el permiso de ejecución.",
"hint": "'u' es usuario propietario y '+' es conceder.",
"explanation": "El comando 'u+x' se traduce como: Identidad = usuario (u), Operador = conceder (+), Permiso = ejecución (x)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la principal diferencia entre el modo absoluto y el modo simbólico al usar 'chmod'?",
"options": [
"El modo absoluto usa letras y el simbólico usa números octales.",
"El modo absoluto usa números octales y el simbólico usa letras/símbolos.",
"El modo absoluto solo cambia permisos de grupo.",
"No existe diferencia, son sinónimos exactos en sintaxis."
],
"answer": "El modo absoluto usa números octales y el simbólico usa letras/símbolos.",
"hint": "Piensa en '400' frente a 'u+r'.",
"explanation": "El material distingue el modo absoluto por el uso de números octales (como 4, 2, 1) y el modo simbólico por el uso de identidades y operadores (u, g, o, +, -, =)."
},

{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué metacarácter de Bash utilizarías si necesitas listar todos los archivos que tengan exactamente cuatro caracteres en su nombre?",
"options": [
"",
"????",
"[4]",
"~4"
],
"answer": "????",
"hint": "Cada signo representa exactamente un carácter individual.",
"explanation": "El signo de interrogación (?) es un comodín que representa cualquier carácter individual. Al usarlo cuatro veces, el sistema busca nombres de exactamente cuatro caracteres."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Deseas ejecutar dos comandos de forma secuencial en una sola línea. ¿Qué metacarácter permite encadenar comandos en Bash?",
"options": [
"~",
"",
";",
"-"
],
"answer": ";",
"hint": "Es el mismo símbolo que se usa para finalizar sentencias en muchos lenguajes de programación.",
"explanation": "El punto y coma (;) se utiliza en Bash para encadenar comandos, permitiendo que se ejecuten uno tras otro en la misma línea."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador de AWS necesita regresar rápidamente al directorio principal (home) de su usuario actual. ¿Qué símbolo representa este directorio?",
"options": [
"-",
"~",
"",
"$"
],
"answer": "~",
"hint": "Es un símbolo ondulado que suele llamarse tilde o virgulilla.",
"explanation": "El metacarácter tilde (~) representa el directorio principal (home) del usuario que ha iniciado sesión."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Te encuentras trabajando en un directorio y cambias a otro con 'cd'. ¿Qué comando simplificado te permite regresar específicamente al 'directorio de trabajo anterior'?",
"options": [
"cd ~",
"cd ",
"cd -",
"cd ?"
],
"answer": "cd -",
"hint": "Es el símbolo de guion o resta.",
"explanation": "El metacarácter guion (-) representa el directorio de trabajo anterior en el que se encontraba el usuario antes del último cambio."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué patrón usarías para buscar todos los archivos que comiencen con la letra 'A' y terminen con la extensión '.log' sin importar cuántos caracteres haya en medio?",
"options": [
"A?log",
"A[log]",
"Alog",
"~A.log"
],
"answer": "Alog",
"hint": "Necesitas el comodín que cubra 'cualquier número de caracteres'.",
"explanation": "El asterisco () representa cualquier número de cualquier carácter, lo que lo hace ideal para buscar archivos con un inicio y fin conocidos pero contenido variable."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si un comando en Linux requiere que primero se procese el nombre del usuario actual mediante 'whoami', ¿cuál sería la forma correcta de representarlo como sustitución de comando moderna?",
"options": [
";whoami",
"$whoami",
"~whoami",
"-whoami"
],
"answer": "$whoami",
"hint": "Es una de las dos formas de sustitución de comandos mencionadas (la otra usa backticks).",
"explanation": "El material indica que la sustitución de comandos se puede hacer con cmd o con la sintaxis $cmd (que comúnmente se usa como $(cmd) en shells modernos)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál de las siguientes combinaciones de comandos permitiría ir al directorio principal y luego listar su contenido en una sola ejecución?",
"options": [
"cd - ; ls",
"cd ~ ; ls",
"cd * ; ls",
"cd ? ; ls"
],
"answer": "cd ~ ; ls",
"hint": "Debes combinar el símbolo de 'home' y el símbolo de 'encadenar'.",
"explanation": "Se usa '~' para referenciar el directorio principal del usuario y ';' para ejecutar el comando 'ls' inmediatamente después."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué ocurre si ejecutas el comando 'ls file[a-z].txt' en una carpeta con archivos llamados 'filea.txt', 'file1.txt' y 'fileB.txt'?",
"options": [
"Muestra todos los archivos.",
"Solo muestra 'filea.txt' (si es minúscula).",
"Muestra 'filea.txt' y 'file1.txt'.",
"Da un error porque no se permiten guiones dentro de corchetes."
],
"answer": "Solo muestra 'filea.txt' (si es minúscula).",
"hint": "Los corchetes con un rango [a-z] buscan caracteres que coincidan específicamente con ese grupo.",
"explanation": "El metacarácter [caracteres] busca coincidencias exactas. El rango [a-z] buscará una letra minúscula, por lo que 'filea.txt' coincidiría, pero 'file1.txt' (número) y 'fileB.txt' (mayúscula, dependiendo de la configuración) no necesariamente."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En el contexto de metacaracteres de Bash, ¿qué representa el símbolo '-' por sí solo?",
"options": [
"Un archivo oculto.",
"La raíz del sistema (root).",
"El directorio de trabajo anterior.",
"La eliminación de un comando previo."
],
"answer": "El directorio de trabajo anterior.",
"explanation": "A diferencia de '~' que es el home, el '-' es un acceso directo al último directorio donde estuviste trabajando."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Deseas buscar archivos que tengan un nombre de 3 caracteres, donde el segundo carácter sea obligatoriamente una 'X'. ¿Cuál es el patrón correcto?",
"options": [
"X",
"?X?",
"[X]",
";X;"
],
"answer": "?X?",
"hint": "Usa comodines para las posiciones desconocidas (1 y 3) y el carácter literal para la posición 2.",
"explanation": "Cada '?' ocupa exactamente un lugar. Al poner '?X?', estás definiendo: (cualquiera) + (X) + (cualquiera), sumando 3 caracteres en total."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Según la tabla de metacaracteres, si quieres ejecutar un comando y que su resultado se convierta en parte de la entrada de otro, ¿qué concepto estás aplicando?",
"options": [
"Encadenamiento de comandos.",
"Sustitución de comandos.",
"Comodines de búsqueda.",
"Navegación de directorios."
],
"answer": "Sustitución de comandos.",
"hint": "Se asocia con los símbolos   y $.",
"explanation": "La sustitución de comandos permite usar la salida de un comando (como 'whoami' o 'date') como un valor dentro de otro comando."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Se requiere ejecutar un script de limpieza de logs únicamente hoy a las 23:00 h sin que se repita en el futuro. ¿Qué herramienta es la más adecuada según el temario?",
"options": [
"cron",
"at",
"crontab -a",
"at -l"
],
"answer": "at",
"hint": "Esta herramienta se utiliza para tareas puntuales o de una sola ejecución.",
"explanation": "Según el material, el comando 'at' se utiliza para tareas puntuales que se ejecutan una sola vez en un momento determinado."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es el comando exacto para visualizar la lista de trabajos programados que se ejecutarán una sola vez?",
"options": [
"atrm",
"crontab -l",
"at -l",
"at -list"
],
"answer": "at -l",
"hint": "Usa una opción de una sola letra para listar.",
"explanation": "Para mostrar un trabajo programado con el comando 'at', se debe utilizar específicamente la opción 'at –l'."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador ha programado una tarea con 'at' por error. Si el identificador del trabajo es el número 5, ¿cómo debe proceder para suprimirlo?",
"options": [
"atrm 5",
"at -d 5",
"crontab -r 5",
"atrm [5]"
],
"answer": "atrm 5",
"hint": "El comando combina 'at' con una abreviatura de 'remove'.",
"explanation": "El material indica que para suprimir un trabajo programado se utiliza el comando 'atrm' seguido del número del trabajo."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Deseas programar un respaldo semanal que se ejecute todos los domingos a las 16:00 h de forma indefinida. ¿Qué comando es el responsable de gestionar esta repetición?",
"options": [
"at",
"cron",
"atrm",
"at -l"
],
"answer": "cron",
"hint": "Busca el daemon encargado de tareas repetitivas.",
"explanation": "El comando 'cron' se utiliza para tareas repetitivas (como ejecuciones semanales) y mantiene la lista de tareas en un archivo crontab."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "En el archivo crontab, ¿cuál es el orden correcto de los primeros tres campos de configuración de tiempo?",
"options": [
"HOUR, MIN, DOM",
"MIN, HOUR, DOW",
"MIN, HOUR, DOM",
"DOM, MON, DOW"
],
"answer": "MIN, HOUR, DOM",
"hint": "Comienza por la unidad de tiempo más pequeña disponible.",
"explanation": "El formato crontab sigue estrictamente el orden: MIN (minutos), HOUR (hora), DOM (día del mes), MON (mes), DOW (día de la semana) y CMD (comando)."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Al configurar un crontab, ¿cuál es el rango de valores válidos permitido para el campo DOW (Day of Week)?",
"options": [
"1 a 7",
"0 a 6",
"0 a 7",
"1 a 12"
],
"answer": "0 a 6",
"hint": "En Linux, el conteo de los días de la semana suele empezar en 0.",
"explanation": "Según el temario proporcionado, el campo DOW (día de la semana) acepta cualquier valor comprendido entre 0 y 6."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué comando utilizarías para crear un archivo crontab a partir de un archivo de texto específico llamado 'mis_tareas.txt'?",
"options": [
"crontab -l mis_tareas.txt",
"crontab -a mis_tareas.txt",
"cron -a mis_tareas.txt",
"at -a mis_tareas.txt"
],
"answer": "crontab -a mis_tareas.txt",
"hint": "Usa la opción '-a' mencionada en la sección de administración de procesos.",
"explanation": "El comando 'crontab -a fileName' crea el archivo crontab que contiene los comandos y pasos que ejecutará el daemon cron."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si una tarea en crontab tiene el valor '30' en el primer campo y '14' en el segundo, ¿a qué hora se ejecutará?",
"options": [
"A las 14:30 h",
"A las 02:30 h",
"El día 30 del mes a las 14:00 h",
"A las 14:00 h durante 30 minutos"
],
"answer": "A las 14:30 h",
"hint": "El primer campo es MIN y el segundo es HOUR (0-23).",
"explanation": "El campo MIN es 30 y el campo HOUR es 14, lo que resulta en una ejecución a las 14:30 h."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es el valor máximo permitido para el campo MON (Mes) en una instrucción de crontab?",
"options": [
"31",
"7",
"12",
"59"
],
"answer": "12",
"hint": "Representa los meses del año.",
"explanation": "El campo MON (mes) acepta cualquier valor comprendido entre 1 y 12."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Si necesitas ejecutar un comando el día 15 de cada mes, ¿en qué posición de los campos del crontab (contando de izquierda a derecha) deberías colocar el valor '15'?",
"options": [
"Segunda posición",
"Tercera posición",
"Cuarta posición",
"Quinta posición"
],
"answer": "Tercera posición",
"hint": "El orden es MIN, HOUR, DOM...",
"explanation": "El campo DOM (Día del mes) es el tercero en la estructura del archivo crontab."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Qué entidad del sistema es la encargada de ejecutar realmente los comandos listados en el archivo crontab?",
"options": [
"El comando at",
"El usuario root",
"El daemon cron",
"El comando crontab -a"
],
"answer": "El daemon cron",
"hint": "Es un proceso que corre en segundo plano esperando el momento exacto.",
"explanation": "El material menciona que 'crontab -a' crea el archivo que contiene los pasos que ejecutará el daemon cron."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Para una tarea que deba ejecutarse al mediodía exacto, ¿qué valor debe tener el campo HOUR?",
"options": [
"0",
"12",
"24",
"12:00"
],
"answer": "12",
"hint": "El rango es de 0 a 23.",
"explanation": "El campo HOUR acepta valores entre 0 y 23. Las 12:00 h (mediodía) se representa con el valor 12."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Un administrador ve una entrada en crontab con un '0' en la quinta posición de tiempo. ¿Qué día de la semana representa esto?",
"options": [
"Lunes",
"Sábado",
"Domingo",
"No es un valor válido"
],
"answer": "Domingo",
"hint": "El rango es 0-6 y el 0 suele ser el inicio del ciclo semanal en estos sistemas.",
"explanation": "El quinto campo es DOW (día de la semana), donde el 0 representa comúnmente al domingo en el rango de 0 a 6."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "¿Cuál es la función del sexto campo en una línea del archivo crontab?",
"options": [
"Especificar el año de ejecución.",
"Definir el comando o la ruta del script a ejecutar.",
"Establecer la prioridad del proceso.",
"Indicar el nombre del usuario."
],
"answer": "Definir el comando o la ruta del script a ejecutar.",
"hint": "Viene después de todas las especificaciones de tiempo.",
"explanation": "El campo CMD es el sexto campo y se utiliza para especificar cualquier comando o ruta que se desee ejecutar."
},
{
"subjectId": "clf",
"topicId": "clf-2",
"question": "Deseas programar una tarea que se ejecute a la 1:45 AM. ¿Cómo deberían verse los dos primeros campos del crontab?",
"options": [
"01 45",
"45 01",
"45 13",
"1 45"
],
"answer": "45 01",
"hint": "Primero van los minutos y luego la hora.",
"explanation": "El formato es MIN (45) seguido de HOUR (01 o 1)."
},
{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Un administrador nota que una aplicación web no responde. En lugar de reiniciar toda la instancia de EC2 (lo que afectaría a otros procesos), ¿qué herramienta de Linux debería usar para gestionar únicamente el proceso del servidor web?",
    "options": [
      "top",
      "df",
      "systemctl",
      "du"
    ],
    "answer": "systemctl",
    "hint": "Es el comando estándar para administrar servicios en sistemas Linux modernos.",
    "explanation": "Según el material, 'systemctl' se utiliza para administrar servicios. Reiniciar un servicio es preferible a reiniciar toda la computadora para evitar tiempos de inactividad innecesarios en otros componentes."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la principal ventaja técnica de reiniciar un servicio específico en lugar de realizar un 'reboot' completo del sistema?",
    "options": [
      "Permite liberar espacio en el disco duro automáticamente.",
      "Mantiene la disponibilidad del resto del sistema y es más eficiente.",
      "Actualiza automáticamente el comando systemctl.",
      "Cambia los permisos de los archivos de configuración."
    ],
    "answer": "Mantiene la disponibilidad del resto del sistema y es más eficiente.",
    "hint": "Piensa en el impacto que tiene apagar toda la máquina frente a solo un programa.",
    "explanation": "El material sugiere que reiniciar un servicio es una alternativa al reinicio del sistema, lo que implica eficiencia y menor impacto global."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás monitoreando el rendimiento de un servidor en tiempo real y ves que el uso de CPU está al 100%. ¿Qué comando estás ejecutando probablemente?",
    "options": [
      "df",
      "du",
      "top",
      "systemctl"
    ],
    "answer": "top",
    "hint": "Este comando ofrece una vista dinámica de los procesos activos.",
    "explanation": "El comando 'top' proporciona una vista en tiempo real de los procesos que se ejecutan en el sistema, permitiendo identificar cuáles consumen más recursos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Recibes una alerta de que el volumen de almacenamiento de tu instancia está casi lleno. ¿Qué comando te permite verificar rápidamente el 'espacio disponible' total en el disco?",
    "options": [
      "du",
      "df",
      "top",
      "systemctl"
    ],
    "answer": "df",
    "hint": "Sus siglas significan 'disk free'.",
    "explanation": "El comando 'df' (disk free) se utiliza específicamente para verificar el espacio disponible en un disco duro o partición."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Has identificado que el disco está lleno, pero necesitas saber qué 'carpeta específica' (directorio) es la que está consumiendo más espacio. ¿Qué comando es el adecuado?",
    "options": [
      "df",
      "top",
      "systemctl",
      "du"
    ],
    "answer": "du",
    "hint": "Sus siglas significan 'disk usage'.",
    "explanation": "A diferencia de df, el comando 'du' (disk usage) se utiliza para mostrar la cantidad de espacio que utiliza un archivo o un directorio específico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el contexto de solución de problemas (troubleshooting), ¿cómo ayuda el comando 'top' a un administrador de sistemas?",
    "options": [
      "Permite ver qué procesos están bloqueando el disco duro.",
      "Muestra qué procesos consumen más recursos de forma dinámica.",
      "Muestra el espacio libre en las particiones del sistema.",
      "Reinicia automáticamente los servicios que fallan."
    ],
    "answer": "Muestra qué procesos consumen más recursos de forma dinámica.",
    "hint": "Es una herramienta de visualización de rendimiento en vivo.",
    "explanation": "El comando 'top' es fundamental para la solución de problemas porque ofrece una vista en tiempo real de la actividad del sistema y los procesos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de las siguientes afirmaciones describe mejor la diferencia entre 'df' y 'du'?",
    "options": [
      "'df' mide el espacio total disponible; 'du' mide el espacio usado por archivos/directorios.",
      "'df' se usa para servicios; 'du' se usa para procesos.",
      "'du' muestra el tiempo real; 'df' es estático.",
      "Ambos comandos son idénticos y se pueden usar indistintamente."
    ],
    "answer": "'df' mide el espacio total disponible; 'du' mide el espacio usado por archivos/directorios.",
    "hint": "Uno mira el 'contenedor' (disco) y el otro el 'contenido' (archivos).",
    "explanation": "El material define 'df' para espacio disponible en disco y 'du' para espacio utilizado por archivos o directorios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si necesitas detener o iniciar un 'daemon' (servicio de segundo plano) en Linux, ¿qué herramienta es la estándar en el sistema?",
    "options": [
      "top",
      "systemctl",
      "df",
      "du"
    ],
    "answer": "systemctl",
    "hint": "Es el comando encargado de la administración de servicios.",
    "explanation": "La conclusión clave del material indica que 'systemctl' es el comando utilizado para administrar servicios en Linux."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué herramienta de visualización de procesos te permitiría identificar un 'proceso zombie' o uno que esté agotando la memoria RAM en el momento exacto en que ocurre?",
    "options": [
      "du",
      "top",
      "df",
      "systemctl"
    ],
    "answer": "top",
    "hint": "Busca la herramienta de monitoreo en tiempo real.",
    "explanation": "Como el comando 'top' proporciona una vista en tiempo real, es la herramienta ideal para observar el comportamiento dinámico de los procesos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la traducción o significado funcional del comando 'df' según el temario?",
    "options": [
      "Directorio Final",
      "Datos de Fichero",
      "Disco Libre",
      "Desfragmentar"
    ],
    "answer": "Disco Libre",
    "hint": "Viene del inglés 'Disk Free'.",
    "explanation": "El material se refiere explícitamente a 'df' como el comando de 'disco libre'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas saber cuánto pesa exactamente el directorio '/home/usuario/proyectos'. ¿Qué comando debes escribir?",
    "options": [
      "df /home/usuario/proyectos",
      "du /home/usuario/proyectos",
      "systemctl /home/usuario/proyectos",
      "top -d /home/usuario/proyectos"
    ],
    "answer": "du /home/usuario/proyectos",
    "hint": "Quieres medir el uso ('usage') de un directorio específico.",
    "explanation": "El comando 'du' se utiliza para mostrar la cantidad de espacio que utiliza un directorio determinado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si un servicio como SSH no está permitiendo conexiones, pero el resto del servidor funciona bien, ¿cuál es la acción más recomendada antes de considerar un reinicio de hardware?",
    "options": [
      "Ejecutar top para borrar el servicio.",
      "Usar du para ver si el servicio pesa mucho.",
      "Usar systemctl para reiniciar solo el servicio SSH.",
      "Usar df para verificar la red."
    ],
    "answer": "Usar systemctl para reiniciar solo el servicio SSH.",
    "hint": "Aplica la administración de servicios quirúrgica.",
    "explanation": "Administrar servicios individualmente mediante 'systemctl' evita afectar la operatividad de otros componentes del sistema."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando es más útil para determinar si es necesario añadir un nuevo volumen EBS a una instancia de AWS debido a que el actual no tiene espacio?",
    "options": [
      "top",
      "du",
      "df",
      "systemctl"
    ],
    "answer": "df",
    "hint": "Necesitas ver la disponibilidad general del disco duro.",
    "explanation": "El comando 'df' es el encargado de verificar el espacio disponible en el disco duro, indicando si el almacenamiento está agotado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Al usar 'top', ves una lista de columnas con información técnica. ¿Cuál es el propósito fundamental de esta interfaz según la materia?",
    "options": [
      "Modificar el código fuente de los programas.",
      "Proporcionar una vista en tiempo real de los procesos.",
      "Listar los permisos simbólicos de los archivos.",
      "Configurar la red inalámbrica."
    ],
    "answer": "Proporcionar una vista en tiempo real de los procesos.",
    "hint": "Es la herramienta de monitoreo dinámico por excelencia.",
    "explanation": "El material enfatiza que 'top' se usa para observar qué procesos se están ejecutando en el sistema en ese preciso instante."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ejecutas el comando 'du' sin argumentos adicionales en una carpeta, ¿qué información obtendrás?",
    "options": [
      "La cantidad de espacio disponible en la nube.",
      "La cantidad de espacio que utiliza ese directorio y sus subdirectorios.",
      "Una lista de los servicios que se están reiniciando.",
      "El porcentaje de uso de CPU de esa carpeta."
    ],
    "answer": "La cantidad de espacio que utiliza ese directorio y sus subdirectorios.",
    "hint": "Mide el 'uso' de disco en el lugar donde te encuentras.",
    "explanation": "El comando 'du' muestra la cantidad de espacio utilizado por un archivo o directorio."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Te preguntan en una entrevista técnica: '¿Para qué sirve systemctl?'. Basándote en el material, ¿qué responderías?",
    "options": [
      "Para monitorear el tráfico de red.",
      "Para administrar los servicios en Linux.",
      "Para calcular el espacio libre en disco.",
      "Para ver los procesos en tiempo real."
    ],
    "answer": "Para administrar los servicios en Linux.",
    "hint": "Es el comando clave mencionado en las conclusiones para 'Managing Services'.",
    "explanation": "La conclusión clave número uno define a 'systemctl' como la herramienta para administrar los servicios en Linux."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En una situación de emergencia donde un servidor se ha vuelto extremadamente lento, ¿qué comando es el primero que deberías ejecutar para diagnosticar si un proceso específico ha 'enloquecido'?",
    "options": [
      "df",
      "du",
      "top",
      "systemctl restart all"
    ],
    "answer": "top",
    "hint": "Es la herramienta de diagnóstico de procesos en vivo.",
    "explanation": "Para diagnosticar problemas de rendimiento causados por procesos, 'top' es la herramienta que permite ver qué está ocurriendo en tiempo real."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "El comando 'df' muestra que el disco está al 99% de capacidad. Intentas borrar archivos pero el espacio no se libera. ¿Qué comando usarías para investigar qué archivos 'grandes' quedan en el sistema?",
    "options": [
      "systemctl",
      "top",
      "du",
      "df"
    ],
    "answer": "du",
    "hint": "Necesitas analizar el uso ('usage') de archivos individuales.",
    "explanation": "Para encontrar archivos o carpetas específicas que ocupan mucho espacio, se utiliza 'du'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si deseas verificar el estado de ejecución de un servicio de base de datos, ¿qué comando base emplearías?",
    "options": [
      "df",
      "systemctl",
      "du",
      "top"
    ],
    "answer": "systemctl",
    "hint": "Todo lo relacionado con 'servicios' pasa por este comando.",
    "explanation": "La administración de servicios, incluyendo el inicio, parada o verificación de estado, se realiza con 'systemctl'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es el resumen de las herramientas de almacenamiento mencionadas en el material?",
    "options": [
      "top para velocidad y systemctl para capacidad.",
      "df para espacio libre y du para espacio utilizado.",
      "du para espacio libre y df para espacio utilizado.",
      "systemctl para almacenamiento en red."
    ],
    "answer": "df para espacio libre y du para espacio utilizado.",
    "hint": "D=Disk, F=Free, U=Usage.",
    "explanation": "El material es claro: 'df' es para verificar el espacio disponible (libre) y 'du' para mostrar el espacio que utiliza (uso) un archivo o directorio."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es el comando principal utilizado para administrar los servicios en Linux según la lección?",
    "options": [
      "service-manager",
      "systemctl",
      "linux-services",
      "run-service"
    ],
    "answer": "systemctl",
    "hint": "Comienza con 'system' y termina con 'ctl' (control).",
    "explanation": "El comando systemctl es la herramienta estándar en las distribuciones modernas de Linux para administrar y controlar el sistema de servicios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si necesitas verificar el espacio disponible en un disco duro, ¿qué comando deberías usar?",
    "options": [
      "du",
      "fdisk",
      "df",
      "free"
    ],
    "answer": "df",
    "hint": "Viene de 'disk free'.",
    "explanation": "El comando df (disk free) se utiliza específicamente para mostrar el tamaño del disco y el espacio libre disponible."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando proporciona una vista en tiempo real de los procesos que se ejecutan en el sistema?",
    "options": [
      "uptime",
      "top",
      "lshw",
      "vmstat"
    ],
    "answer": "top",
    "hint": "Es una palabra corta de 3 letras que significa 'cima' o 'parte superior'.",
    "explanation": "El comando top muestra los procesos del sistema y el uso de recursos en tiempo real, facilitando la identificación de qué consume más CPU o memoria."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Para qué se utiliza el comando 'du' en la administración de archivos?",
    "options": [
      "Para borrar archivos duplicados",
      "Para ver el tamaño de archivos y directorios",
      "Para descargar archivos de internet",
      "Para desfragmentar el disco"
    ],
    "answer": "Para ver el tamaño de archivos y directorios",
    "hint": "Sus siglas significan 'disk usage'.",
    "explanation": "A diferencia de df, el comando du se enfoca en mostrar cuánto espacio está ocupando un archivo o directorio específico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del comando 'lscpu'?",
    "options": [
      "Listar los usuarios del sistema",
      "Cambiar la velocidad del procesador",
      "Mostrar la información de la CPU",
      "Limpiar la memoria caché"
    ],
    "answer": "Mostrar la información de la CPU",
    "hint": "Une 'ls' (listar) con 'cpu'.",
    "explanation": "lscpu es el comando dedicado a visualizar las especificaciones y detalles técnicos de la Unidad Central de Procesamiento."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Necesitas saber cuánta memoria física está siendo utilizada en el sistema. ¿Qué comando es el más directo?",
    "options": [
      "free",
      "vmstat",
      "mem-check",
      "df"
    ],
    "answer": "free",
    "hint": "Es una palabra en inglés que significa 'libre'.",
    "explanation": "El comando free indica específicamente el uso de la memoria física (RAM) del sistema."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Al usar systemctl, ¿cuál es la diferencia entre listar 'todos los servicios' y listar 'servicios activos'?",
    "options": [
      "No hay diferencia, ambos muestran lo mismo",
      "Listar 'todos' incluye servicios cerrados o con errores; 'activos' solo los que funcionan",
      "Listar 'activos' incluye servicios de red; 'todos' solo servicios locales",
      "Listar 'todos' requiere permisos de administrador; 'activos' no"
    ],
    "answer": "Listar 'todos' incluye servicios cerrados o con errores; 'activos' solo los que funcionan",
    "hint": "Piensa en la diferencia entre 'independientemente del estado' y 'solo funcionando'.",
    "explanation": "systemctl permite filtrar por estado. Listar todos muestra el panorama completo (activos, cerrados o con fallos), mientras que el filtro de activos solo muestra los que están operando."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué herramienta de AWS permite monitorear el rendimiento de las instancias de Amazon EC2?",
    "options": [
      "Amazon SNS",
      "Amazon EC2 Dashboard",
      "Amazon CloudWatch",
      "Amazon S3"
    ],
    "answer": "Amazon CloudWatch",
    "hint": "Significa algo como 'Reloj de la Nube'.",
    "explanation": "CloudWatch monitorea el estado y rendimiento de recursos de AWS, como el uso de CPU y lecturas/escrituras en disco de EC2."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando usarías para modificar las particiones de un disco duro?",
    "options": [
      "df",
      "du",
      "fdisk",
      "lshw"
    ],
    "answer": "fdisk",
    "hint": "Comienza con 'f' y se relaciona con el disco (disk).",
    "explanation": "fdisk es la utilidad mencionada para enumerar y, sobre todo, modificar las particiones en el almacenamiento físico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si quieres saber cuánto tiempo ha estado encendido el sistema y cuántos usuarios hay, ¿qué comando usas?",
    "options": [
      "top",
      "uptime",
      "vmstat",
      "lscpu"
    ],
    "answer": "uptime",
    "hint": "Literalmente significa 'tiempo arriba'.",
    "explanation": "uptime indica el tiempo de actividad del sistema, el número de usuarios y el tiempo de espera de la CPU."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el contexto de CloudWatch, ¿qué sucede cuando el uso de CPU supera un umbral determinado?",
    "options": [
      "La instancia se apaga automáticamente",
      "Se puede enviar una notificación a través de Amazon SNS",
      "Se borran los logs antiguos",
      "El sistema reinicia el servicio afectado"
    ],
    "answer": "Se puede enviar una notificación a través de Amazon SNS",
    "hint": "Involucra un servicio de mensajería o notificaciones.",
    "explanation": "CloudWatch permite crear alarmas que, al activarse, utilizan Amazon SNS para notificar al administrador."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la utilidad del comando 'vmstat'?",
    "options": [
      "Verificar el estado de las máquinas virtuales",
      "Indicar el uso de la memoria virtual",
      "Listar el hardware de video",
      "Reiniciar el servidor de gráficos"
    ],
    "answer": "Indicar el uso de la memoria virtual",
    "hint": "Une 'vm' (Virtual Memory) con 'stat' (Statistics).",
    "explanation": "vmstat se utiliza para monitorear las estadísticas de la memoria virtual del sistema operativo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando muestra una lista completa del hardware del sistema?",
    "options": [
      "lshw",
      "lscpu",
      "fdisk",
      "df"
    ],
    "answer": "lshw",
    "hint": "Abreviatura de 'List Hardware'.",
    "explanation": "lshw (List Hardware) genera una enumeración detallada de todos los componentes de hardware detectados."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "De acuerdo con las 'Preguntas de evaluación', ¿por qué preferirías reiniciar un servicio en lugar de reiniciar toda la computadora?",
    "options": [
      "Porque reiniciar la computadora borra todos los archivos",
      "Para evitar interrumpir otros servicios y ahorrar tiempo",
      "Porque Linux no permite reiniciar la computadora",
      "Porque es el único modo de aplicar parches de seguridad"
    ],
    "answer": "Para evitar interrumpir otros servicios y ahorrar tiempo",
    "hint": "Piensa en el impacto en el resto del sistema.",
    "explanation": "Reiniciar un servicio es más eficiente y menos disruptivo, ya que solo afecta al proceso específico sin detener el resto de las funciones del servidor."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando de systemctl te permite ver específicamente los servicios que están actualmente en ejecución?",
    "options": [
      "Muestre los servicios en ejecución",
      "Muestre los servicios fallidos",
      "List hardware",
      "Check memory"
    ],
    "answer": "Muestre los servicios en ejecución",
    "hint": "Es la primera acción mencionada en la demostración de systemctl.",
    "explanation": "La demostración de la lección especifica que systemctl se usa para mostrar servicios en ejecución como una de sus funciones principales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuáles son dos métricas de Amazon EC2 que CloudWatch monitorea específicamente según el texto?",
    "options": [
      "Temperatura y voltaje",
      "Uso de CPU y escrituras en disco",
      "Nombres de archivos y permisos",
      "Contraseñas de usuarios y grupos"
    ],
    "answer": "Uso de CPU y escrituras en disco",
    "hint": "Se mencionan en el punto sobre monitoreo de instancias EC2.",
    "explanation": "CloudWatch ofrece monitoreo de métricas clave de rendimiento como CPU y operaciones de E/S en disco."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué información NO proporciona el comando 'uptime' según la tabla de monitoreo?",
    "options": [
      "Tiempo que ha estado activo el sistema",
      "Número de usuarios",
      "Uso de la memoria física",
      "Tiempo de espera de la CPU"
    ],
    "answer": "Uso de la memoria física",
    "hint": "Esa función pertenece al comando 'free'.",
    "explanation": "Uptime se centra en el tiempo de actividad y carga de CPU, mientras que la memoria física es gestionada por 'free'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás resolviendo un problema de lentitud. ¿Cómo te ayuda el comando 'top' en esta situación?",
    "options": [
      "Permite ver qué proceso consume más recursos en tiempo real",
      "Reinicia automáticamente el proceso más lento",
      "Borra los archivos temporales que ralentizan el disco",
      "Muestra la velocidad de la conexión a internet"
    ],
    "answer": "Permite ver qué proceso consume más recursos en tiempo real",
    "hint": "Es una herramienta de monitoreo dinámico.",
    "explanation": "Top es fundamental para troubleshooting porque identifica inmediatamente procesos con alto consumo de CPU o memoria."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ejecutas un comando de systemctl y ves servicios con estado 'error', ¿qué lista estás consultando?",
    "options": [
      "Solo servicios activos",
      "La lista de hardware",
      "La enumeración de todos los servicios (independientemente de su estado)",
      "El historial de comandos"
    ],
    "answer": "La enumeración de todos los servicios (independientemente de su estado)",
    "hint": "Esta lista incluye activos, cerrados y fallidos.",
    "explanation": "Para ver servicios con errores, debes usar la opción de systemctl que lista todo el universo de servicios, no solo los funcionales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué significan las siglas SNS en el contexto de las alarmas de CloudWatch?",
    "options": [
      "System Network Service",
      "Simple Notification Service",
      "Storage Node System",
      "Secure Network Server"
    ],
    "answer": "Simple Notification Service",
    "hint": "Es un servicio para enviar 'notificaciones'.",
    "explanation": "Amazon SNS (Simple Notification Service) es el encargado de enviar los avisos cuando CloudWatch detecta una anomalía."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si quieres saber cuánto espacio ocupa la carpeta '/var/log', ¿qué comando es el más adecuado?",
    "options": [
      "df",
      "du",
      "lshw",
      "free"
    ],
    "answer": "du",
    "hint": "Se usa para directorios específicos.",
    "explanation": "El comando du permite verificar el tamaño de archivos y directorios específicos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de estos comandos NO está relacionado con el almacenamiento o discos?",
    "options": [
      "fdisk",
      "df",
      "du",
      "vmstat"
    ],
    "answer": "vmstat",
    "hint": "Se enfoca en la memoria virtual, no en el espacio físico de disco.",
    "explanation": "fdisk, df y du gestionan particiones y espacio en disco, mientras que vmstat monitorea la memoria virtual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando utilizarías para verificar si el hardware de tu servidor tiene suficiente capacidad de procesamiento?",
    "options": [
      "lscpu",
      "free",
      "du",
      "systemctl"
    ],
    "answer": "lscpu",
    "hint": "Te dará los detalles técnicos de la CPU.",
    "explanation": "lscpu muestra la información detallada del procesador, permitiendo evaluar su capacidad."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué aspecto de las instancias EC2 puede CloudWatch monitorear en relación al almacenamiento?",
    "options": [
      "El nombre de la marca del disco duro",
      "Las lecturas y escrituras en disco",
      "La temperatura física del disco",
      "El color del cable del disco"
    ],
    "answer": "Las lecturas y escrituras en disco",
    "hint": "Es una métrica de rendimiento de entrada/salida.",
    "explanation": "CloudWatch monitorea el rendimiento operativo, como las operaciones de lectura y escritura realizadas en el disco de la instancia."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En la jerarquía de comandos de administración, ¿cuál es el propósito final de aprender systemctl y los comandos de monitoreo?",
    "options": [
      "Para poder programar aplicaciones en Python",
      "Para administrar y monitorear servicios de manera efectiva",
      "Para hackear redes externas",
      "Para instalar Windows en una instancia de AWS"
    ],
    "answer": "Para administrar y monitorear servicios de manera efectiva",
    "hint": "Es el objetivo principal de la lección.",
    "explanation": "La lección busca que el estudiante aprenda a utilizar herramientas para la gestión y el seguimiento del rendimiento de los servicios en un entorno Linux."
  },
	{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Según el material, ¿qué operador se utiliza para asignar un valor a una variable en el shell?",
    "options": [
      "==",
      ":=",
      "=",
      "->"
    ],
    "answer": "=",
    "hint": "Es el signo de igual estándar.",
    "explanation": "Las variables se asignan con el operador '=', donde el valor se coloca a la derecha del mismo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si asignas el número 500 a una variable, ¿cómo la tratará Bash de forma predeterminada?",
    "options": [
      "Como un número entero (integer)",
      "Como una cadena (string)",
      "Como un valor booleano",
      "Como un flotante"
    ],
    "answer": "Como una cadena (string)",
    "hint": "Bash trata casi todo como texto por defecto.",
    "explanation": "De forma predeterminada, todas las variables se tratan como cadenas, incluso si se les asigna un número."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de los siguientes es un ejemplo de un nombre de variable INCORRECTO según la lámina 9?",
    "options": [
      "restart_student=",
      "student=",
      "spring!=",
      "us_cohort="
    ],
    "answer": "spring!=",
    "hint": "Ciertos caracteres especiales al final del nombre pueden hacerlo inválido o poco útil.",
    "explanation": "El material identifica 'spring!=' como un nombre de variable incorrecto, probablemente por el uso de caracteres que causan confusión o errores de sintaxis."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando se utiliza para visualizar el contenido de una variable en la terminal?",
    "options": [
      "show",
      "print",
      "echo",
      "display"
    ],
    "answer": "echo",
    "hint": "Significa 'eco' en inglés.",
    "explanation": "El comando echo se utiliza para mostrar el valor almacenado en las variables de Bash."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Al asignar una variable, ¿cuál es la regla sobre los espacios entre el nombre y el valor?",
    "options": [
      "Debe haber exactamente un espacio",
      "No debe haber ningún espacio",
      "Se permiten espacios solo después del '='",
      "Se permiten espacios solo antes del '='"
    ],
    "answer": "No debe haber ningún espacio",
    "hint": "La sintaxis debe ser compacta: nombre=valor.",
    "explanation": "El material especifica claramente que 'no hay espacio entre el nombre de la variable y el valor'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué variable de entorno indica la ubicación donde se encuentran los programas ejecutables?",
    "options": [
      "$HOME",
      "$SHELL",
      "$PATH",
      "$USER"
    ],
    "answer": "$PATH",
    "hint": "En inglés, significa 'camino' o 'ruta'.",
    "explanation": "$PATH especifica un conjunto de directorios donde el sistema busca los programas ejecutables."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estructuralmente, ¿cuál es la diferencia entre una variable de entorno y una variable de shell?",
    "options": [
      "Las de entorno usan ':' y las de shell '='",
      "No son diferentes; ambas usan el par clave-valor con '='",
      "Las de entorno no pueden contener números",
      "Las de shell son solo para usuarios root"
    ],
    "answer": "No son diferentes; ambas usan el par clave-valor con '='",
    "hint": "El texto dice que son 'las mismas'.",
    "explanation": "Estructuralmente, estas variables no son diferentes entre sí; ambas utilizan el par clave-valor separado por el signo igual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué se muestra al ejecutar el comando 'echo $USER'?",
    "options": [
      "El nombre del sistema del usuario",
      "La contraseña del usuario",
      "El nombre de la computadora",
      "El tipo de shell en uso"
    ],
    "answer": "El nombre del sistema del usuario",
    "hint": "Contiene el identificador de quién inició sesión.",
    "explanation": "La variable de entorno $USER contiene el nombre del sistema del usuario actual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Además de 'echo $VARIABLE_NAME', ¿qué otra sintaxis se menciona para visualizar variables?",
    "options": [
      "echo %VARIABLE_NAME%",
      "echo {VARIABLE_NAME}",
      "echo $(VARIABLE_NAME)",
      "echo &VARIABLE_NAME"
    ],
    "answer": "echo $(VARIABLE_NAME)",
    "hint": "Utiliza paréntesis.",
    "explanation": "La lámina 12 indica que también se puede utilizar la sintaxis '$(VARIABLE_NAME)' con el comando echo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuándo se establece la variable de entorno $HOME?",
    "options": [
      "Cada vez que se ejecuta un comando",
      "Solo cuando el administrador lo permite",
      "Cuando el usuario inicia sesión",
      "Al instalar el sistema operativo"
    ],
    "answer": "Cuando el usuario inicia sesión",
    "hint": "Es un proceso automático al entrar al sistema.",
    "explanation": "El valor de $HOME se establece automáticamente como variable de entorno cuando el usuario inicia sesión."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función principal de la variable $SHELL?",
    "options": [
      "Contar cuántas shells hay abiertas",
      "Definir el tipo de shell de inicio de sesión",
      "Cambiar el color de la terminal",
      "Listar los comandos disponibles"
    ],
    "answer": "Definir el tipo de shell de inicio de sesión",
    "hint": "Indica si usas Bash, Zsh, u otro.",
    "explanation": "La variable de entorno $SHELL define específicamente el tipo de shell que se utiliza para iniciar sesión."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede si usas nombres de variables poco útiles o vagos?",
    "options": [
      "El shell se vuelve más lento",
      "Contribuyen a la desconexión entre la variable y su valor",
      "El sistema arroja un error de memoria",
      "Se borran automáticamente al cerrar la sesión"
    ],
    "answer": "Contribuyen a la desconexión entre la variable y su valor",
    "hint": "Afecta la claridad y la legibilidad.",
    "explanation": "Nombres confusos dificultan entender para qué se utiliza la variable y rompen la relación lógica con su contenido."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si el resultado de un comando es '/home/username', ¿qué variable de entorno se consultó probablemente?",
    "options": [
      "$PATH",
      "$HOME",
      "$USER",
      "$SHELL"
    ],
    "answer": "$HOME",
    "hint": "Es la ruta al directorio principal.",
    "explanation": "El comando 'echo $HOME' devuelve la ruta del directorio principal del usuario, como '/home/username'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de estos es un nombre de variable CORRECTO y legible según los ejemplos?",
    "options": [
      "restart_us_cohort_1=",
      "1_cohort=",
      "restart student=",
      "spring!="
    ],
    "answer": "restart_us_cohort_1=",
    "hint": "Usa guiones bajos para separar palabras y es descriptivo.",
    "explanation": "Los nombres descriptivos con guiones bajos son considerados correctos porque ayudan a la legibilidad."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En la asignación 'name=value', ¿qué representa 'value'?",
    "options": [
      "El nombre de la variable",
      "El operador",
      "El valor de la variable",
      "Un comando oculto"
    ],
    "answer": "El valor de la variable",
    "hint": "Se encuentra a la derecha del '='.",
    "explanation": "El valor de la variable es el dato que se almacena y se sitúa siempre a la derecha del operador de asignación."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cómo se separan los distintos directorios dentro de la variable $PATH?",
    "options": [
      "Por comas (,)",
      "Por puntos y coma (;)",
      "Por dos puntos (:)",
      "Por espacios en blanco"
    ],
    "answer": "Por dos puntos (:)",
    "hint": "Observa el ejemplo: /usr/local/sbin:/bin...",
    "explanation": "En el ejemplo proporcionado, las rutas de directorios en $PATH se separan mediante el carácter de dos puntos (:)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué tipo de caracteres pueden formar parte del valor de una variable?",
    "options": [
      "Solo letras",
      "Solo números",
      "Nombres, números o caracteres especiales",
      "Solo letras mayúsculas"
    ],
    "answer": "Nombres, números o caracteres especiales",
    "hint": "Es muy flexible en cuanto al contenido.",
    "explanation": "Las variables pueden contener diversos tipos de datos, incluyendo texto, dígitos y símbolos especiales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ejecutas 'echo $VARIABLE_NAME' y no aparece nada, ¿qué significa según la lógica del shell?",
    "options": [
      "La variable tiene un error de ortografía",
      "La variable no tiene un valor asignado o no existe",
      "El comando echo está roto",
      "Necesitas permisos de administrador"
    ],
    "answer": "La variable no tiene un valor asignado o no existe",
    "hint": "Para visualizar algo, primero debe haber una asignación.",
    "explanation": "Si la variable no ha sido definida o asignada con '=', echo no mostrará ningún contenido."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la importancia de la legibilidad en los nombres de las variables?",
    "options": [
      "Hace que el código se ejecute más rápido",
      "Ayuda a entender para qué se utiliza la variable",
      "Es un requisito para que el shell reconozca el comando",
      "Reduce el consumo de energía del servidor"
    ],
    "answer": "Ayuda a entender para qué se utiliza la variable",
    "hint": "Tiene que ver con el mantenimiento y comprensión humana.",
    "explanation": "Nombres claros permiten que otros (o tú mismo en el futuro) comprendan la función del dato guardado."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué símbolo se debe anteponer al nombre de una variable para acceder a su valor con echo?",
    "options": [
      "#",
      "&",
      "$",
      "@"
    ],
    "answer": "$",
    "hint": "Es el símbolo de dólar o peso.",
    "explanation": "Para hacer referencia al valor de una variable en Bash, se debe usar el prefijo '$'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede con la variable 'restart_spring_student' en los ejemplos de la lámina 9?",
    "options": [
      "Se usa como ejemplo de nombre correcto",
      "Se usa como ejemplo de nombre incorrecto",
      "Es una variable de entorno común",
      "Es un comando del sistema"
    ],
    "answer": "Se usa como ejemplo de nombre correcto",
    "hint": "Es descriptiva y usa guiones bajos.",
    "explanation": "En la lámina 9, aparece listada bajo el grupo de nombres de variables correctos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es el par de elementos que define tanto a las variables de entorno como a las de shell?",
    "options": [
      "Nombre y Comando",
      "Clave y Valor",
      "Ruta y Archivo",
      "Usuario y Shell"
    ],
    "answer": "Clave y Valor",
    "hint": "Es un concepto común en programación: Key-Value.",
    "explanation": "Ambos tipos de variables funcionan bajo el principio estructural de un par clave-valor."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de estas afirmaciones sobre $PATH es VERDADERA?",
    "options": [
      "Solo contiene el nombre del usuario",
      "Especifica directorios para encontrar ejecutables",
      "Se usa para cambiar la contraseña",
      "Es una variable que no se puede visualizar"
    ],
    "answer": "Especifica directorios para encontrar ejecutables",
    "hint": "El shell busca comandos ahí.",
    "explanation": "$PATH permite que el shell sepa en qué carpetas buscar cuando escribes un comando como 'ls' o 'cp'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el ejemplo 'restart_student=Li Juan', ¿qué indica el material sobre este valor?",
    "options": [
      "Es inválido porque tiene un espacio interno",
      "Se trata como una cadena",
      "Es un comando de Linux",
      "Es una variable de entorno"
    ],
    "answer": "Se trata como una cadena",
    "hint": "Es el tipo de dato por defecto.",
    "explanation": "Aunque contenga un nombre propio, Bash lo procesa como una cadena de texto (string)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si quieres ver qué shell estás usando actualmente (ej. Bash o Sh), ¿qué escribirías?",
    "options": [
      "echo $USER",
      "echo $SHELL",
      "echo $HOME",
      "echo $PATH"
    ],
    "answer": "echo $SHELL",
    "hint": "Busca la variable que define el tipo de shell.",
    "explanation": "La variable $SHELL almacena la ruta o tipo de la shell que el usuario tiene asignada."
  },
	  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de las siguientes es una forma válida de comparar si el primer argumento ($1) es mayor que el segundo ($2) utilizando evaluación aritmética en Bash?",
    "options": [
      "if [ \"$1\" > \"$2\" ];",
      "if ((\"$1\">\"$2\"))",
      "if [[ $1 -gt $2 ]]",
      "Todas las opciones anteriores son correctas"
    ],
    "answer": "if ((\"$1\">\"$2\"))",
    "hint": "Recuerda que la doble paréntesis permite usar operadores matemáticos directos sin guiones.",
    "explanation": "Según la lámina 24, la sintaxis if ((\"$1\">\"$2\")) es una de las formas equivalentes para comparar enteros. La opción A fallaría para enteros porque '>' en corchetes simples se usa para comparar strings (y requiere escape)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Al trabajar con la construcción de corchetes simples [ ], ¿qué es estrictamente necesario hacer para comparar si una cadena es alfabéticamente menor que otra?",
    "options": [
      "Usar el operador -lt",
      "Incluir una secuencia de escape \\ antes del símbolo <",
      "Cambiar a una construcción de paréntesis (( ))",
      "No es posible comparar alfabéticamente en corchetes simples"
    ],
    "answer": "Incluir una secuencia de escape \\ antes del símbolo <",
    "hint": "El shell podría confundir el símbolo con una redirección si no se protege.",
    "explanation": "La lámina 25 especifica que en una construcción [ ], el valor < debe incluir una secuencia de escape (\\<) para ser interpretado correctamente como comparador alfabético ASCII."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si un script contiene la instrucción 'if [ -z \"$var\" ]', ¿qué condición está intentando evaluar?",
    "options": [
      "Si la variable 'var' contiene un número cero",
      "Si la variable 'var' es nula (longitud cero)",
      "Si la variable 'var' no ha sido definida en el sistema",
      "Si la variable 'var' contiene caracteres especiales"
    ],
    "answer": "Si la variable 'var' es nula (longitud cero)",
    "hint": "La 'z' viene de 'zero'.",
    "explanation": "El operador -z se utiliza para verificar si una cadena es nula, es decir, si su longitud es igual a cero."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del operador -n en una comparación de cadenas?",
    "options": [
      "Verifica si la cadena es nula",
      "Indica que la cadena no es nula",
      "Cuenta el número de caracteres en la cadena",
      "Verifica si la cadena contiene números"
    ],
    "answer": "Indica que la cadena no es nula",
    "hint": "Es lo opuesto a -z.",
    "explanation": "Según la lámina 25, el operador -n evalúa si la cadena tiene contenido (no es nula)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Analiza el siguiente script:\n\nfor x in 1 2 a\ndo\necho \"val: $x\"\ndone\n\n¿Cuál será el resultado de la ejecución?",
    "options": [
      "Error de sintaxis: no se pueden mezclar números y letras",
      "Imprimirá 'val: 1', luego 'val: 2' y finalmente 'val: a'",
      "Solo imprimirá los números 1 y 2",
      "Imprimirá 'val: 1 2 a' en una sola línea"
    ],
    "answer": "Imprimirá 'val: 1', luego 'val: 2' y finalmente 'val: a'",
    "hint": "El bucle 'for' itera sobre cada elemento separado por espacios en la lista proporcionada.",
    "explanation": "El bucle for de Bash itera sobre una lista de valores. Como las variables en Bash son tratadas como cadenas por defecto, procesa tanto el 1 como la 'a' sin problemas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Deseas que un script repita una acción 'mientras una condición sea verdadera'. ¿Qué instrucción de bucle debes utilizar?",
    "options": [
      "for",
      "until",
      "while",
      "if"
    ],
    "answer": "while",
    "hint": "La palabra en inglés significa 'mientras'.",
    "explanation": "La lámina 27 define que el bucle 'while' se utiliza para repetir secciones de un script mientras una condición sea verdadera."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué distingue a la construcción [[ ... ]] de la construcción [ ... ] al usar el operador != (no es igual a)?",
    "options": [
      "[[ ... ]] es más lenta que [ ... ]",
      "[[ ... ]] utiliza coincidencia de patrones",
      "[[ ... ]] solo funciona con números",
      "No hay ninguna diferencia documentada"
    ],
    "answer": "[[ ... ]] utiliza coincidencia de patrones",
    "hint": "Es una característica avanzada de los corchetes dobles mencionada en la lámina 25.",
    "explanation": "La lámina 25 menciona explícitamente que el operador != utiliza la coincidencia de patrones dentro de una construcción [[ ... ]]."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Tienes el siguiente código:\n\nif [[ \"apple\" > \"Banana\" ]]; then echo \"True\"; else echo \"False\"; fi\n\n¿Qué lógica utiliza Bash para determinar el resultado?",
    "options": [
      "Compara la longitud de las palabras",
      "Compara el orden alfabético basado en ASCII",
      "Compara cuál palabra tiene más vocales",
      "Da error porque las palabras deben estar en minúsculas"
    ],
    "answer": "Compara el orden alfabético basado en ASCII",
    "hint": "Es el estándar para comparar texto en computación.",
    "explanation": "Los operadores > y < comparan cadenas basándose en el orden alfabético ASCII (donde las mayúsculas y minúsculas tienen valores distintos)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué palabras clave delimitan el bloque de comandos que se ejecutan dentro de un bucle 'for'?",
    "options": [
      "{ y }",
      "then y fi",
      "do y done",
      "begin y end"
    ],
    "answer": "do y done",
    "hint": "Son las encargadas de abrir y cerrar el ciclo.",
    "explanation": "Según la lámina 28, los comandos dentro de un bucle for deben estar 'entre corchetes' (delimitados) por 'do' y 'done'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de estos operadores es equivalente a 'no es igual a' en una comparación de cadenas?",
    "options": [
      "-ne",
      "<>",
      "!=",
      "not="
    ],
    "answer": "!=",
    "hint": "El signo de exclamación suele significar negación en programación.",
    "explanation": "La lámina 25 identifica a '!=' como el operador para 'no es igual a' en cadenas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Observa este fragmento de script:\n\nif [ \"$1\" -gt \"$2\" ]; then\n  echo \"A\"\nfi\n\nSi ejecutamos el script como './script.sh 10 5', ¿cuál será la salida?",
    "options": [
      "A",
      "Nada (la condición es falsa)",
      "Error: -gt no existe",
      "10"
    ],
    "answer": "A",
    "hint": "10 es mayor que 5.",
    "explanation": "El operador -gt significa 'greater than' (mayor que). Como 10 > 5, la condición es verdadera y se imprime 'A'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "El bucle 'until' se diferencia del bucle 'while' porque:",
    "options": [
      "Se ejecuta mientras la condición sea verdadera",
      "Se ejecuta hasta que se cumpla una condición",
      "Solo sirve para contar números",
      "No requiere la palabra 'done'"
    ],
    "answer": "Se ejecuta hasta que se cumpla una condición",
    "hint": "Piensa en el significado de la palabra 'until'.",
    "explanation": "Según la lámina 27, el bucle 'until' termina cuando se cumple la condición especificada."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de las siguientes es una forma INCORRECTA de comparar enteros?",
    "options": [
      "if [ $1 -gt $2 ]",
      "if (($1>$2))",
      "if [[ $1 -gt $2 ]]",
      "if [ $1 > $2 ]"
    ],
    "answer": "if [ $1 > $2 ]",
    "hint": "Falta algo para que el shell no crea que quieres redirigir un archivo.",
    "explanation": "Usar '>' dentro de [ ] sin escape (\\>) se interpreta como una redirección de salida, no como una comparación. Además, para enteros se prefiere -gt en corchetes simples."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el contexto de comparaciones de cadenas, ¿qué significan '=' y '=='?",
    "options": [
      "Son operadores distintos: '=' asigna y '==' compara",
      "Ambos significan 'es igual a'",
      "'=' es para números y '==' es para cadenas",
      "Ninguna de las anteriores"
    ],
    "answer": "Ambos significan 'es igual a'",
    "hint": "Bash es flexible en este punto específico de las cadenas.",
    "explanation": "La lámina 25 indica explícitamente: '= o == es igual a'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Analiza el siguiente script:\n\n#!/bin/bash\nif [ \"$1\" == \"$2\" ]; then\n  echo \"Misma\"\nelif [ \"$1\" \\< \"$2\" ]; then\n  echo \"Menor\"\nelse\n  echo \"Mayor\"\nfi\n\nSi ejecutamos './test.sh b a', ¿cuál es el resultado?",
    "options": [
      "Misma",
      "Menor",
      "Mayor",
      "Error de escape"
    ],
    "answer": "Mayor",
    "hint": "Considera el orden alfabético de 'b' respecto a 'a'.",
    "explanation": "Como 'b' no es igual a 'a', y 'b' no es menor alfabéticamente que 'a', el script cae en el bloque 'else' e imprime 'Mayor'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué instrucción de bucle utilizarías si sabes de antemano el número específico de repeticiones que necesitas?",
    "options": [
      "while",
      "until",
      "for",
      "loop-count"
    ],
    "answer": "for",
    "hint": "Itera sobre una lista finita.",
    "explanation": "La lámina 27 menciona que el bucle 'for' se usa para un número específico de repeticiones."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En la expresión 'if [[ $1 -gt $2 ]]', ¿por qué no es obligatorio poner comas o comillas alrededor de las variables?",
    "options": [
      "Porque el sistema las ignora",
      "Porque la construcción [[ ]] es más robusta y maneja mejor las variables",
      "Porque -gt solo acepta números",
      "Porque el script fallará de todos modos"
    ],
    "answer": "Porque la construcción [[ ]] es más robusta y maneja mejor las variables",
    "hint": "Compara esta opción con [ $1 -gt $2 ] de la lámina 24.",
    "explanation": "La lámina 24 muestra '[[ $1 -gt $2 ]]' sin comillas, a diferencia de '[ \"$1\" -gt \"$2\" ]', debido a que los corchetes dobles son una mejora del shell que evita ciertos errores de expansión."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función principal de los operadores de comparación según el material?",
    "options": [
      "Sumar o restar variables",
      "Comparar dos variables o cantidades",
      "Imprimir mensajes en la pantalla",
      "Definir el nombre del script"
    ],
    "answer": "Comparar dos variables o cantidades",
    "hint": "Su nombre lo indica.",
    "explanation": "La lámina 24 comienza indicando: 'Los operadores de comparación comparan dos variables o cantidades'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ves la línea 'if [ \"$a\" \\> \"$b\" ]', el script está preguntando si:",
    "options": [
      "La variable 'a' es mayor que la 'b' numéricamente",
      "La variable 'a' es superior a 'b' en orden alfabético ASCII",
      "El contenido de 'a' debe guardarse en el archivo 'b'",
      "Hay un error porque el signo > no puede llevar una barra"
    ],
    "answer": "La variable 'a' es superior a 'b' en orden alfabético ASCII",
    "hint": "El escape \\ indica que el operador se usa dentro de corchetes simples.",
    "explanation": "En corchetes simples, \\> se usa para la comparación alfabética ASCII 'superior a'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cómo se define la potencia y complejidad de los scripts según el material de bucles?",
    "options": [
      "Aumentando el número de variables",
      "Mediante la ampliación de los bucles",
      "Usando siempre el comando echo",
      "Cambiando el nombre de la shell"
    ],
    "answer": "Mediante la ampliación de los bucles",
    "hint": "Mira la conclusión de la lámina 27.",
    "explanation": "La lámina 27 afirma que 'el bucle amplía la potencia y la complejidad de los scripts'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Analiza este script:\n\nfor x in a b c\ndo\necho \"valor\"\ndone\n\n¿Cuántas veces se imprimirá la palabra 'valor'?",
    "options": [
      "1 vez",
      "3 veces",
      "Ninguna, porque x no se usa en el echo",
      "Dará error"
    ],
    "answer": "3 veces",
    "hint": "Cuenta los elementos en la lista después de 'in'.",
    "explanation": "El bucle for se ejecuta una vez por cada elemento de la lista (a, b y c). Aunque no se use la variable $x dentro del bloque, el comando echo se repetirá 3 veces."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué operador utilizarías para verificar si una cadena tiene una longitud mayor a cero?",
    "options": [
      "-z",
      "-n",
      "-gt",
      "=="
    ],
    "answer": "-n",
    "hint": "Es el operador para 'no nulo'.",
    "explanation": "El operador -n (no nulo) devuelve verdadero si la cadena tiene contenido."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En la comparación aritmética if (($1>$2)), ¿es necesario usar el símbolo $ dentro de los paréntesis para referirse a las variables?",
    "options": [
      "Sí, siempre",
      "No es necesario según el ejemplo de la lámina 24",
      "Solo si son números decimales",
      "Depende de si se usa 'do' o 'then'"
    ],
    "answer": "No es necesario según el ejemplo de la lámina 24",
    "hint": "Fíjate bien en el último ejemplo de la lámina 24.",
    "explanation": "La lámina 24 muestra el ejemplo 'if (($1>$2));', indicando que en esta construcción aritmética la sintaxis es válida."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si necesitas comparar dos letras para saber cuál va primero en el diccionario, ¿qué operadores son los adecuados?",
    "options": [
      "-lt y -gt",
      "< y >",
      "-eq y -ne",
      "(( )) y [[ ]]"
    ],
    "answer": "< y >",
    "hint": "Se usan para comparaciones alfabéticas ASCII.",
    "explanation": "Según la lámina 25, los símbolos < y > se utilizan para determinar el orden alfabético ASCII."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es el propósito del comando 'elif' en el ejemplo de comparación de cadenas?",
    "options": [
      "Terminar el script si hay un error",
      "Evaluar una condición adicional si la primera es falsa",
      "Repetir el bloque 'if' infinitamente",
      "Asignar un valor nulo a la variable"
    ],
    "answer": "Evaluar una condición adicional si la primera es falsa",
    "hint": "Es una abreviatura de 'else if'.",
    "explanation": "En el script de la lámina 26, elif se usa para realizar una segunda comprobación (si las letras no son iguales, verifica si una es menor que la otra)."
  },
	{
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es el propósito del parámetro '-o' en el comando curl utilizado para instalar la AWS CLI?",
    "options": [
      "Optimizar la descarga para sistemas de 64 bits",
      "Sobrescribir cualquier archivo existente sin preguntar",
      "Especificar el nombre del archivo de salida donde se guardará la descarga",
      "Abrir el archivo automáticamente después de descargarlo"
    ],
    "answer": "Especificar el nombre del archivo de salida donde se guardará la descarga",
    "hint": "Viene de la palabra 'output'.",
    "explanation": "En el comando 'curl [URL] -o [nombre]', el flag -o indica que el contenido descargado debe guardarse en un archivo local con el nombre proporcionado, en lugar de mostrarse en la terminal."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Se te pide instalar un software y ves el siguiente comando: 'sudo ./aws/install'. ¿Qué función cumple 'sudo' en esta secuencia?",
    "options": [
      "Acelera la velocidad de instalación mediante hilos paralelos",
      "Ejecuta el instalador con privilegios de superusuario o raíz",
      "Verifica que el archivo no tenga virus antes de ejecutarlo",
      "Crea una copia de seguridad del sistema antes de proceder"
    ],
    "answer": "Ejecuta el instalador con privilegios de superusuario o raíz",
    "hint": "Significa 'Substitute User DO'.",
    "explanation": "La mayoría de las instalaciones de software requieren modificar directorios del sistema (como /usr/local/bin). 'sudo' permite que el usuario actual ejecute tareas administrativas necesarias para estos cambios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si una descarga se interrumpe debido a una falla de red, ¿qué utilidad es conocida por intentar reanudarla automáticamente una vez vuelve la conexión?",
    "options": [
      "curl",
      "unzip",
      "wget",
      "apt-get"
    ],
    "answer": "wget",
    "hint": "Es la utilidad mencionada específicamente por su capacidad de recuperación automática en las preguntas de evaluación.",
    "explanation": "A diferencia de curl, que es más versátil para transferir datos, wget está diseñado específicamente para descargas robustas de archivos y tiene mecanismos automáticos para reanudar descargas interrumpidas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la principal ventaja de utilizar un administrador de paquetes (como yum o apt) en lugar de descargar e instalar binarios manualmente?",
    "options": [
      "El software instalado manualmente siempre corre más rápido",
      "El administrador de paquetes resuelve y descarga automáticamente las dependencias necesarias",
      "No se requieren privilegios de root para usar un administrador de paquetes",
      "Los administradores de paquetes eliminan la necesidad de tener conexión a internet"
    ],
    "answer": "El administrador de paquetes resuelve y descarga automáticamente las dependencias necesarias",
    "hint": "Piensa en lo que sucede si un programa necesita de otros programas pequeños para funcionar.",
    "explanation": "Un administrador de paquetes consulta repositorios y se asegura de que todas las librerías y componentes adicionales que el software necesita se instalen en el orden correcto."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Analiza este script:\n\n1. curl \"URL\" -o info.zip\n2. unzip info.zip\n3. cd info && ./setup\n\n¿Qué sucedería en el paso 3 si el comando 'unzip' falla porque no está instalado?",
    "options": [
      "El script se detendrá y avisará que falta el comando",
      "El comando 'cd' fallará porque el directorio 'info' no se creó",
      "Bash intentará descomprimir el archivo usando 'curl'",
      "El instalador './setup' se ejecutará directamente sobre el archivo .zip"
    ],
    "answer": "El comando 'cd' fallará porque el directorio 'info' no se creó",
    "hint": "Si no abres la caja (zip), no puedes entrar en ella (cd).",
    "explanation": "Si 'unzip' falla, el contenido del archivo comprimido nunca se extrae. Por lo tanto, el directorio resultante no existirá y el comando 'cd' devolverá un error de 'No such file or directory'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál de las siguientes es una forma común de instalar software en Linux SIN usar un administrador de paquetes?",
    "options": [
      "Mediante el comando 'echo'",
      "Compilando el código fuente o ejecutando scripts de instalación directos",
      "Usando el comando 'df' para copiar archivos",
      "Modificando la variable de entorno $HOME"
    ],
    "answer": "Compilando el código fuente o ejecutando scripts de instalación directos",
    "hint": "Es lo que hiciste en el ejemplo de AWS CLI.",
    "explanation": "Además de los administradores de paquetes, se puede instalar software descargando binarios/scripts (como el ejemplo de AWS CLI) o compilando el código fuente del desarrollador."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Estás intentando descargar la AWS CLI pero recibes un error: 'unzip: command not found'. ¿Cómo solucionaría esto un administrador de sistemas generalmente?",
    "options": [
      "Borrando el archivo descargado y volviendo a usar curl",
      "Instalando la utilidad 'unzip' usando el administrador de paquetes del sistema (ej. apt o yum)",
      "Cambiando el nombre del archivo de .zip a .txt",
      "Reiniciando la instancia EC2"
    ],
    "answer": "Instalando la utilidad 'unzip' usando el administrador de paquetes del sistema (ej. apt o yum)",
    "hint": "Usa las herramientas de gestión de software para obtener la herramienta que falta.",
    "explanation": "Si falta una herramienta básica como 'unzip', se debe usar el administrador de paquetes (yum install unzip o apt install unzip) para obtenerla antes de continuar con la instalación manual."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el ejemplo de instalación: 'curl \"URL\" -o \"awscliv2.zip\"'. Si omites las comillas en el nombre del archivo de salida, ¿qué podría pasar?",
    "options": [
      "La descarga fallará por razones de seguridad",
      "Si el nombre tiene espacios o caracteres especiales, el shell podría interpretar el comando incorrectamente",
      "El archivo se descargará pero se borrará automáticamente",
      "Nada, las comillas nunca son necesarias en Bash"
    ],
    "answer": "Si el nombre tiene espacios o caracteres especiales, el shell podría interpretar el comando incorrectamente",
    "hint": "Las comillas agrupan texto para evitar que el shell lo divida.",
    "explanation": "Aunque en 'awscliv2.zip' no hay espacios, es una buena práctica usar comillas para evitar que caracteres especiales o espacios accidentales sean interpretados por la shell como comandos u argumentos distintos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué tipo de archivo es 'awscli-exe-linux-x86_64.zip' basándote en su nombre?",
    "options": [
      "Un script de Python",
      "Un instalador para arquitectura de 64 bits de Linux",
      "Un archivo de configuración de Windows",
      "Un instalador para sistemas ARM"
    ],
    "answer": "Un instalador para arquitectura de 64 bits de Linux",
    "hint": "Fíjate en 'linux' y 'x86_64'.",
    "explanation": "El nombre indica el sistema operativo (Linux) y la arquitectura de hardware (x86_64, que es 64 bits), asegurando que el binario sea compatible con el procesador."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Por qué el comando de instalación es './aws/install' y no simplemente 'install'?",
    "options": [
      "Porque 'install' es un comando prohibido en Linux",
      "El './' indica al shell que busque el ejecutable en el directorio actual (o ruta relativa)",
      "El punto indica que la instalación es oculta",
      "Es una regla estética de AWS"
    ],
    "answer": "El './' indica al shell que busque el ejecutable en el directorio actual (o ruta relativa)",
    "hint": "Bash normalmente no busca programas en el directorio donde estás parado a menos que se lo digas.",
    "explanation": "Por seguridad, Linux no busca ejecutables en el directorio actual de forma automática. Se usa './' para especificar explícitamente que queremos ejecutar un archivo que está justo ahí."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Después de ejecutar 'unzip awscliv2.zip', ¿qué esperarías encontrar en tu directorio actual?",
    "options": [
      "Un solo archivo llamado 'install'",
      "Una carpeta llamada 'aws' (u otra similar) con los archivos extraídos",
      "La AWS CLI ya funcionando",
      "El archivo .zip original habrá desaparecido"
    ],
    "answer": "Una carpeta llamada 'aws' (u otra similar) con los archivos extraídos",
    "hint": "Observa el siguiente paso de instalación: ./aws/install.",
    "explanation": "El comando unzip extrae el contenido del paquete. Como el siguiente paso es ejecutar algo dentro de la carpeta 'aws', es lógico deducir que la extracción crea esa estructura de directorios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la principal diferencia funcional entre curl y wget para un administrador de sistemas?",
    "options": [
      "curl no puede descargar archivos de internet",
      "wget es mejor para descargas recursivas; curl es mejor para interactuar con APIs y protocolos diversos",
      "curl solo funciona en Windows",
      "wget requiere una licencia de pago de Amazon"
    ],
    "answer": "wget es mejor para descargas recursivas; curl es mejor para interactuar con APIs y protocolos diversos",
    "hint": "curl es como una navaja suiza de datos; wget es un especialista en bajar archivos.",
    "explanation": "Aunque ambos descargan archivos, curl se usa mucho para enviar/recibir datos complejos (JSON, formularios), mientras que wget es excelente para bajar sitios web enteros o manejar descargas inestables."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si ejecutas 'curl URL' sin el flag -o, ¿qué verás en tu terminal?",
    "options": [
      "Un mensaje de error pidiendo un nombre de archivo",
      "El código fuente o contenido binario del archivo impreso directamente en pantalla",
      "Una barra de progreso pero no se guarda nada",
      "El archivo se guardará con un nombre aleatorio"
    ],
    "answer": "El código fuente o contenido binario del archivo impreso directamente en pantalla",
    "hint": "curl envía la salida a 'stdout' por defecto.",
    "explanation": "Por defecto, curl envía los datos a la salida estándar (la pantalla). Si descargas un binario o un zip, verás miles de caracteres extraños (basura binaria) en tu terminal."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué comando usarías para ver si la instalación de AWS CLI fue exitosa?",
    "options": [
      "aws --version",
      "verify-install aws",
      "ls /aws/installed",
      "echo $AWS_STATUS"
    ],
    "answer": "aws --version",
    "hint": "Es la forma estándar de preguntar a un programa su versión en Linux.",
    "explanation": "Casi todos los binarios de Linux responden al argumento --version para confirmar que el programa está en el PATH y es ejecutable."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el comando 'unzip awscliv2.zip', ¿qué sucede con el archivo .zip original después de la descompresión?",
    "options": [
      "Se borra automáticamente",
      "Se mueve a la papelera de reciclaje",
      "Permanece en el directorio tal como estaba",
      "Se convierte en una carpeta"
    ],
    "answer": "Permanece en el directorio tal como estaba",
    "hint": "Descomprimir no es lo mismo que 'mover' o 'cortar'.",
    "explanation": "Unzip simplemente lee el contenido y crea copias fuera del archivo comprimido; el archivo original .zip no se altera ni se elimina."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es un riesgo potencial de ejecutar scripts de instalación con 'sudo' descargados mediante curl?",
    "options": [
      "Que la descarga sea más lenta",
      "Que el script contenga comandos maliciosos que ahora tienen acceso total a tu sistema",
      "Que el comando unzip no funcione",
      "Que se agote el espacio en disco"
    ],
    "answer": "Que el script contenga comandos maliciosos que ahora tienen acceso total a tu sistema",
    "hint": "Estás dando 'llaves maestras' a un extraño.",
    "explanation": "Ejecutar con sudo significa dar permisos de administrador. Si el script descargado no es de una fuente confiable, podría comprometer seriamente la seguridad del servidor."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si intentas instalar software y recibes un mensaje: 'No space left on device', ¿qué comando de una lección anterior usarías para diagnosticar el problema?",
    "options": [
      "top",
      "df",
      "lscpu",
      "uptime"
    ],
    "answer": "df",
    "hint": "Buscas 'disk free'.",
    "explanation": "El comando 'df' te permite verificar el espacio disponible en los discos duros, algo vital antes de descargar paquetes grandes."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la función del comando 'unzip'?",
    "options": [
      "Comprimir archivos para enviarlos por correo",
      "Extraer archivos de un contenedor comprimido .zip",
      "Cifrar archivos para seguridad",
      "Listar el contenido de un directorio"
    ],
    "answer": "Extraer archivos de un contenedor comprimido .zip",
    "hint": "Lo opuesto a 'zip'.",
    "explanation": "Unzip es la herramienta estándar para desglosar archivos con extensión .zip en sus componentes originales."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si un administrador de paquetes instala software, ¿cómo maneja las actualizaciones?",
    "options": [
      "El usuario debe borrar todo y reinstalar manualmente",
      "El administrador de paquetes puede buscar versiones nuevas en los repositorios y actualizarlas automáticamente",
      "Las actualizaciones solo se pueden hacer los domingos",
      "No se pueden actualizar paquetes una vez instalados"
    ],
    "answer": "El administrador de paquetes puede buscar versiones nuevas en los repositorios y actualizarlas automáticamente",
    "hint": "Es una de sus grandes ventajas de mantenimiento.",
    "explanation": "Los administradores de paquetes mantienen una base de datos de lo instalado y pueden comparar contra el servidor central para descargar solo los cambios necesarios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Analiza la secuencia: 'curl URL -o setup.sh && chmod +x setup.sh && ./setup.sh'. ¿Qué hace la parte de 'chmod +x'?",
    "options": [
      "Cambia el nombre del archivo",
      "Da permisos de ejecución al archivo descargado",
      "Borra el archivo original",
      "Comprime el archivo"
    ],
    "answer": "Da permisos de ejecución al archivo descargado",
    "hint": "La 'x' viene de 'execute'.",
    "explanation": "Muchos archivos descargados no vienen marcados como 'ejecutables' por seguridad. chmod +x le dice al sistema que ese archivo puede correr como un programa."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "En el comando 'sudo ./aws/install', ¿qué es 'install'?",
    "options": [
      "Una variable de entorno",
      "Un archivo ejecutable o script dentro de la carpeta aws",
      "Un comando interno del shell Bash",
      "Un alias para 'curl'"
    ],
    "answer": "Un archivo ejecutable o script dentro de la carpeta aws",
    "hint": "Es el destino final del comando de ejecución.",
    "explanation": "En esta estructura, 'install' es el nombre del archivo que contiene las instrucciones de instalación, ubicado dentro de la subcarpeta 'aws'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si quieres descargar un archivo y no te importa el nombre, solo quieres que se guarde como lo llamó el servidor, ¿qué flag de curl usarías comúnmente (investigación)?",
    "options": [
      "-X",
      "-O (mayúscula)",
      "-v",
      "-k"
    ],
    "answer": "-O (mayúscula)",
    "hint": "Es similar a -o pero más automatizado.",
    "explanation": "El flag -O de curl le dice al programa que use el nombre del archivo remoto para guardarlo localmente, ahorrándote escribir el nombre tú mismo."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Qué sucede si intentas ejecutar './aws/install' sin usar 'sudo'?",
    "options": [
      "La instalación será más rápida",
      "Probablemente recibas un error de 'Permission denied' al intentar escribir en carpetas del sistema",
      "El sistema te pedirá el número de serie de AWS",
      "La computadora se reiniciará"
    ],
    "answer": "Probablemente recibas un error de 'Permission denied' al intentar escribir en carpetas del sistema",
    "hint": "Un usuario normal no puede escribir en carpetas protegidas.",
    "explanation": "Sin sudo, el instalador no tiene permiso para crear archivos en /usr/local/bin o /usr/local/aws-cli, lo que detendrá el proceso por falta de privilegios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "¿Cuál es la utilidad de los 'Repositorios' en la administración de software mediante paquetes?",
    "options": [
      "Son carpetas locales donde el usuario guarda sus fotos",
      "Son servidores remotos que contienen colecciones de software verificado y listo para instalar",
      "Son bases de datos de contraseñas de AWS",
      "Son archivos comprimidos que solo se abren con unzip"
    ],
    "answer": "Son servidores remotos que contienen colecciones de software verificado y listo para instalar",
    "hint": "Es como una tienda de aplicaciones para Linux.",
    "explanation": "Los administradores de paquetes se conectan a repositorios para descargar software de forma segura y centralizada."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-2",
    "question": "Si necesitas automatizar la instalación de AWS CLI en 100 servidores, ¿cuál sería el mejor enfoque?",
    "options": [
      "Escribir un script de Bash con los comandos curl, unzip e install",
      "Ir uno por uno usando la interfaz gráfica",
      "Llamar a soporte técnico de Amazon",
      "No es posible automatizar instalaciones en Linux"
    ],
    "answer": "Escribir un script de Bash con los comandos curl, unzip e install",
    "hint": "Usa lo que aprendiste sobre scripts.",
    "explanation": "La potencia de Bash radica en que puedes poner todos estos comandos en un solo archivo de script y ejecutarlo masivamente en múltiples servidores."
  }

  ]);
})();
