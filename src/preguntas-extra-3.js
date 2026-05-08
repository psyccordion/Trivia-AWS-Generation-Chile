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
    "question": "¿Qué protocolo de red se utiliza para la resolución de nombres de host dentro de una VPC de AWS de forma predeterminada?",
    "options": [
      "LDAP",
      "Amazon Provided DNS (Route 53 Resolver)",
      "NetBIOS",
      "SNMP"
    ],
    "answer": "Amazon Provided DNS (Route 53 Resolver)",
    "hint": "Es el servicio que resuelve las direcciones .internal dentro de AWS.",
    "explanation": "AWS proporciona un servidor DNS integrado en cada VPC (ubicado en la dirección base + 2) que permite a las instancias resolver nombres de dominio internos y públicos automáticamente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted recibe un reporte de que un sitio web alojado en AWS es inaccesible desde China, pero funciona bien en Europa. ¿Qué herramienta de red usaría para ver dónde se bloquea el tráfico?",
    "options": [
      "ping",
      "MTR (My Traceroute)",
      "nslookup",
      "ipconfig"
    ],
    "answer": "MTR (My Traceroute)",
    "hint": "Combina la capacidad de rastrear la ruta con estadísticas de pérdida de paquetes en tiempo real.",
    "explanation": "MTR permite identificar si el problema es de latencia o pérdida de paquetes en nodos específicos del trayecto internacional, ayudando a determinar si hay un bloqueo regional o un fallo en un proveedor de internet específico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador desea limitar la cantidad de dispositivos que pueden conectarse a una subred específica. ¿Qué parámetro técnico define este límite?",
    "options": [
      "La velocidad del enlace de fibra",
      "La máscara de subred (bloque CIDR)",
      "El número de puertos físicos del switch",
      "La cantidad de RAM del router"
    ],
    "answer": "La máscara de subred (bloque CIDR)",
    "hint": "Define cuántos bits están disponibles para identificar a los hosts.",
    "explanation": "El tamaño de la red IP está determinado por su máscara. Por ejemplo, un /24 permite 251 IPs útiles en AWS, mientras que un /28 solo permite 11. Cambiar este valor expande o contrae la capacidad de la red."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función del protocolo 'LoRaWAN' en el ecosistema de AWS IoT?",
    "options": [
      "Transferencia de video en alta definición",
      "Comunicación de largo alcance y bajo consumo de energía para sensores distantes",
      "Conexión de alta velocidad para centros de datos",
      "Sustituir al protocolo TCP/IP en internet"
    ],
    "answer": "Comunicación de largo alcance y bajo consumo de energía para sensores distantes",
    "hint": "Es ideal para sensores en campos de agricultura o minas donde no hay Wi-Fi.",
    "explanation": "LoRaWAN permite conectar dispositivos a kilómetros de distancia con muy poca batería. AWS IoT Core for LoRaWAN facilita la integración de estos dispositivos sin necesidad de gestionar infraestructuras complejas de red."
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
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo de red se utiliza para la resolución de nombres de host dentro de una VPC de AWS de forma predeterminada?",
    "options": [
      "LDAP",
      "Amazon Provided DNS (Route 53 Resolver)",
      "NetBIOS",
      "SNMP"
    ],
    "answer": "Amazon Provided DNS (Route 53 Resolver)",
    "hint": "Es el servicio que resuelve las direcciones .internal dentro de AWS.",
    "explanation": "AWS proporciona un servidor DNS integrado en cada VPC (ubicado en la dirección base + 2) que permite a las instancias resolver nombres de dominio internos y públicos automáticamente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Usted recibe un reporte de que un sitio web alojado en AWS es inaccesible desde China, pero funciona bien en Europa. ¿Qué herramienta de red usaría para ver dónde se bloquea el tráfico?",
    "options": [
      "ping",
      "MTR (My Traceroute)",
      "nslookup",
      "ipconfig"
    ],
    "answer": "MTR (My Traceroute)",
    "hint": "Combina la capacidad de rastrear la ruta con estadísticas de pérdida de paquetes en tiempo real.",
    "explanation": "MTR permite identificar si el problema es de latencia o pérdida de paquetes en nodos específicos del trayecto internacional, ayudando a determinar si hay un bloqueo regional o un fallo en un proveedor de internet específico."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador desea limitar la cantidad de dispositivos que pueden conectarse a una subred específica. ¿Qué parámetro técnico define este límite?",
    "options": [
      "La velocidad del enlace de fibra",
      "La máscara de subred (bloque CIDR)",
      "El número de puertos físicos del switch",
      "La cantidad de RAM del router"
    ],
    "answer": "La máscara de subred (bloque CIDR)",
    "hint": "Define cuántos bits están disponibles para identificar a los hosts.",
    "explanation": "El tamaño de la red IP está determinado por su máscara. Por ejemplo, un /24 permite 251 IPs útiles en AWS, mientras que un /28 solo permite 11. Cambiar este valor expande o contrae la capacidad de la red."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función del protocolo 'LoRaWAN' en el ecosistema de AWS IoT?",
    "options": [
      "Transferencia de video en alta definición",
      "Comunicación de largo alcance y bajo consumo de energía para sensores distantes",
      "Conexión de alta velocidad para centros de datos",
      "Sustituir al protocolo TCP/IP en internet"
    ],
    "answer": "Comunicación de largo alcance y bajo consumo de energía para sensores distantes",
    "hint": "Es ideal para sensores en campos de agricultura o minas donde no hay Wi-Fi.",
    "explanation": "LoRaWAN permite conectar dispositivos a kilómetros de distancia con muy poca batería. AWS IoT Core for LoRaWAN facilita la integración de estos dispositivos sin necesidad de gestionar infraestructuras complejas de red."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un servidor web en una subred pública no puede ser alcanzado por los usuarios. Al revisar, notas que la tabla de enrutamiento no tiene una ruta para '0.0.0.0/0'. ¿Qué recurso falta como destino en esa ruta?",
    "options": [
      "Puerta de enlace NAT",
      "Puerta de enlace de Internet (IGW)",
      "VPC Endpoint",
      "Virtual Private Gateway"
    ],
    "answer": "Puerta de enlace de Internet (IGW)",
    "hint": "Sin este componente, la VPC es una isla sin salida ni entrada directa desde la red pública global.",
    "explanation": "Para que una subred sea 'pública', su tabla de enrutamiento debe dirigir el tráfico destinado a internet (0.0.0.0/0) hacia un Internet Gateway (IGW)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Tienes una instancia de base de datos en una subred privada que necesita descargar un parche de seguridad desde un repositorio externo. ¿Qué configuración permite esto sin exponer la base de datos a internet?",
    "options": [
      "Asignar una IP elástica a la base de datos.",
      "Crear una ruta en la subred privada hacia un NAT Gateway ubicado en la subred pública.",
      "Mover la base de datos a la subred pública temporalmente.",
      "Abrir el puerto 80 en la ACL de red para todo el tráfico entrante."
    ],
    "answer": "Crear una ruta en la subred privada hacia un NAT Gateway ubicado en la subred pública.",
    "hint": "Busca un mediador que permita solicitudes de salida pero bloquee las de entrada.",
    "explanation": "El NAT Gateway permite que los recursos en subredes privadas inicien comunicación con internet (egress), pero impide que actores externos inicien conexiones hacia ellos (ingress)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al intentar conectar por SSH a una instancia Linux, recibes el error 'Permission denied (publickey)'. Has verificado que el puerto 22 está abierto. ¿Qué es lo primero que deberías revisar localmente?",
    "options": [
      "Si el servidor Apache está encendido.",
      "Si los permisos de tu archivo de clave privada (.pem) son demasiado abiertos (ej. 777).",
      "Si la instancia tiene asignada una dirección IPv6.",
      "Si el nombre de la VPC es correcto."
    ],
    "answer": "Si los permisos de tu archivo de clave privada (.pem) son demasiado abiertos (ej. 777).",
    "hint": "SSH es muy estricto con la seguridad de las llaves; si otros pueden leerla, no la considerará segura.",
    "explanation": "Los clientes SSH requieren que los archivos de clave privada tengan permisos restrictivos (usualmente chmod 400). Si el archivo es legible por otros usuarios, el cliente rechazará la conexión por seguridad."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué herramienta de diagnóstico utilizarías para verificar si un servidor web está devolviendo el código de estado '200 OK' directamente desde la línea de comandos?",
    "options": [
      "ping",
      "nslookup",
      "curl -I",
      "traceroute"
    ],
    "answer": "curl -I",
    "hint": "Esta herramienta permite ver los encabezados de respuesta de una solicitud HTTP.",
    "explanation": "Mientras que ping verifica conectividad básica, 'curl -I' realiza una petición HEAD y muestra los encabezados del servidor, permitiendo confirmar si la aplicación web está respondiendo correctamente."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un cliente reporta que su aplicación web está lenta. Al ejecutar traceroute, observas que los tiempos de respuesta aumentan drásticamente en un nodo fuera de la red de AWS. ¿Qué indica esto?",
    "options": [
      "El Grupo de Seguridad de la instancia está mal configurado.",
      "Hay una congestión o falla en un router de un proveedor de internet intermedio.",
      "La instancia de EC2 necesita más memoria RAM.",
      "El Internet Gateway ha llegado a su límite de ancho de banda."
    ],
    "answer": "Hay una congestión o falla en un router de un proveedor de internet intermedio.",
    "hint": "Traceroute mide la latencia en cada segmento del camino hacia el destino.",
    "explanation": "Si el aumento de latencia ocurre en 'saltos' intermedios antes de llegar a la infraestructura de destino, el problema reside en la red de tránsito de los proveedores de internet y no necesariamente en el servidor final."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Deseas segmentar una red para que los servidores de aplicaciones y las bases de datos no compartan el mismo rango de IPs. ¿Cuál es la mejor práctica en AWS?",
    "options": [
      "Crear una VPC para cada servidor.",
      "Crear subredes distintas con bloques CIDR no superpuestos dentro de la misma VPC.",
      "Usar diferentes Grupos de Seguridad pero la misma subred.",
      "Cambiar la dirección IP pública de las instancias constantemente."
    ],
    "answer": "Crear subredes distintas con bloques CIDR no superpuestos dentro de la misma VPC.",
    "hint": "Las subredes permiten organizar lógicamente los recursos y aplicar diferentes políticas de enrutamiento.",
    "explanation": "La creación de subredes permite separar capas de la aplicación (web, app, db), facilitando el control de tráfico y el aislamiento de seguridad mediante tablas de enrutamiento específicas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Intentas realizar un 'ping' a una instancia y fallas, pero puedes conectar por SSH sin problemas. ¿Cuál es la razón técnica más probable?",
    "options": [
      "La instancia está apagada.",
      "El protocolo ICMP está bloqueado en el Grupo de Seguridad, pero el puerto TCP/22 está permitido.",
      "El puerto 80 está cerrado.",
      "La instancia no tiene una IP privada."
    ],
    "answer": "El protocolo ICMP está bloqueado en el Grupo de Seguridad, pero el puerto TCP/22 está permitido.",
    "hint": "Diferentes aplicaciones utilizan diferentes protocolos y puertos; habilitar uno no habilita automáticamente los demás.",
    "explanation": "Ping utiliza ICMP, mientras que SSH utiliza TCP en el puerto 22. Los Grupos de Seguridad filtran por protocolo y puerto, permitiendo un control granular de qué tipo de tráfico llega a la instancia."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Al configurar una ACL de Red (NACL), permites el tráfico entrante en el puerto 80. Sin embargo, los usuarios externos no reciben respuesta del servidor. ¿Qué falta configurar?",
    "options": [
      "Una regla de salida en la NACL que permita el tráfico hacia los puertos efímeros.",
      "Un NAT Gateway en la subred privada.",
      "Un registro DNS tipo MX.",
      "Abrir el puerto 22 de salida."
    ],
    "answer": "Una regla de salida en la NACL que permita el tráfico hacia los puertos efímeros.",
    "hint": "Recuerda que las NACL son 'sin estado' y no recuerdan por dónde debe volver la respuesta.",
    "explanation": "Como las NACL no tienen estado, debes permitir explícitamente el tráfico de vuelta. Los clientes web esperan la respuesta en un rango de puertos temporales llamados 'puertos efímeros' (usualmente 1024-65535)."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la diferencia de alcance entre una dirección IP Privada y una dirección IP Pública en una instancia EC2?",
    "options": [
      "La IP privada cambia cada vez que reinicias la instancia, la pública no.",
      "La IP privada solo es accesible dentro de la VPC o redes conectadas; la pública es accesible desde internet.",
      "La IP pública es necesaria para que dos instancias en la misma subred hablen entre sí.",
      "AWS cobra por cada IP privada utilizada."
    ],
    "answer": "La IP privada solo es accesible dentro de la VPC o redes conectadas; la pública es accesible desde internet.",
    "hint": "Una funciona para la comunicación 'en casa' y la otra para la comunicación con el 'mundo exterior'.",
    "explanation": "Las IPs privadas permiten el tráfico interno seguro y gratuito dentro de la red de AWS. Las IPs públicas son necesarias para la comunicación con hosts externos a través del Internet Gateway."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un administrador necesita ejecutar un comando para ver todas las rutas activas y la tabla de vecinos en un servidor Linux. ¿Qué comando es el más moderno y recomendado?",
    "options": [
      "ip route show",
      "ping -t",
      "nslookup -type=any",
      "telnet localhost"
    ],
    "answer": "ip route show",
    "hint": "Forma parte del paquete 'iproute2', que reemplaza a herramientas antiguas como 'route'.",
    "explanation": "El comando 'ip' es la herramienta estándar actual en Linux para gestionar y visualizar interfaces, rutas y políticas de red, sustituyendo a 'ifconfig' y 'route'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué ocurre con la dirección IP pública (no elástica) de una instancia EC2 si esta se detiene (Stop) y se vuelve a iniciar (Start)?",
    "options": [
      "La dirección IP se mantiene idéntica.",
      "La instancia pierde la dirección IP pública y se le asigna una nueva del pool de AWS.",
      "La instancia se vuelve inaccesible permanentemente.",
      "La IP pública se convierte automáticamente en IP privada."
    ],
    "answer": "La instancia pierde la dirección IP pública y se le asigna una nueva del pool de AWS.",
    "hint": "Las IPs públicas estándar son dinámicas y se liberan cuando el recurso no está en ejecución.",
    "explanation": "Al detener una instancia, AWS libera su IP pública dinámica. Al iniciarla de nuevo, se le asigna una nueva. Para mantener una IP fija, se debe usar una 'Elastic IP'."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En el archivo 'User Data' de una instancia EC2, se colocan comandos que se ejecutan automáticamente. ¿En qué momento se ejecutan estos comandos?",
    "options": [
      "Cada vez que la instancia se reinicia (Reboot).",
      "Solo la primera vez que la instancia se lanza (Launch).",
      "Cada vez que un usuario inicia sesión por SSH.",
      "Cada hora mediante un cron job automático."
    ],
    "answer": "Solo la primera vez que la instancia se lanza (Launch).",
    "hint": "Es un script de inicialización único para configurar el servidor desde cero.",
    "explanation": "Los scripts de User Data se ejecutan por defecto únicamente durante el primer inicio de la instancia para realizar tareas de configuración inicial como instalar software o descargar archivos."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una empresa requiere una conexión privada, dedicada y con ancho de banda garantizado entre su centro de datos físico y AWS, ¿qué servicio debería contratar?",
    "options": [
      "VPC Peering",
      "AWS Direct Connect",
      "Internet Gateway",
      "NAT Gateway"
    ],
    "answer": "AWS Direct Connect",
    "hint": "Es un enlace físico directo que no pasa por el internet público.",
    "explanation": "Direct Connect establece una conexión de red dedicada desde las instalaciones del cliente hacia AWS, ofreciendo mayor consistencia y menor latencia que las conexiones basadas en internet."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Estás diseñando una red y necesitas que dos VPCs en diferentes cuentas se comuniquen entre sí como si estuvieran en la misma red local. ¿Qué solución aplicarías?",
    "options": [
      "Conectar ambas mediante un cable físico.",
      "VPC Peering.",
      "Usar NAT Gateways en ambas VPCs.",
      "Hacer todas las subredes públicas."
    ],
    "answer": "VPC Peering.",
    "hint": "Es una relación de enrutamiento entre dos redes virtuales.",
    "explanation": "VPC Peering permite conectar dos VPCs de forma que el tráfico viaje de forma privada a través de la infraestructura de AWS, permitiendo que las instancias se comuniquen usando IPs privadas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un servidor web Apache está instalado pero los usuarios ven un error 'Site can't be reached'. Ejecutas 'sudo systemctl status httpd' y ves 'inactive (dead)'. ¿Cuál es la acción correctiva?",
    "options": [
      "Borrar la instancia y crear una nueva.",
      "Ejecutar 'sudo systemctl start httpd'.",
      "Cambiar la IP pública de la instancia.",
      "Abrir el puerto 22."
    ],
    "answer": "Ejecutar 'sudo systemctl start httpd'.",
    "hint": "El software está presente pero el proceso no está corriendo en la memoria del sistema.",
    "explanation": "Incluso si el software está instalado, el servicio debe estar en estado 'active' para procesar peticiones. El comando 'systemctl start' inicia el demonio del servicio."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Tienes una regla en el Grupo de Seguridad que permite el tráfico desde '0.0.0.0/0'. ¿Qué riesgo de seguridad implica esto?",
    "options": [
      "Ninguno, es la configuración estándar para SSH.",
      "Permite que cualquier dispositivo en el internet público intente conectarse a ese puerto.",
      "Hace que la instancia sea más lenta.",
      "Desactiva automáticamente el firewall de Linux."
    ],
    "answer": "Permite que cualquier dispositivo en el internet público intente conectarse a ese puerto.",
    "hint": "Esa notación representa la totalidad de direcciones IP existentes en el mundo.",
    "explanation": "Usar 0.0.0.0/0 expone el servicio a ataques de fuerza bruta o escaneos desde cualquier parte del mundo. Lo ideal es restringir el acceso a rangos de IP conocidos siempre que sea posible."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es el propósito del protocolo DHCP dentro de una red VPC?",
    "options": [
      "Cifrar los datos de la base de datos.",
      "Proporcionar automáticamente una dirección IP y configuración de red a las instancias al iniciar.",
      "Traducir nombres de dominio a IPs.",
      "Monitorear el uso de CPU de las instancias."
    ],
    "answer": "Proporcionar automáticamente una dirección IP y configuración de red a las instancias al iniciar.",
    "hint": "Sin esto, tendrías que entrar manualmente a cada servidor a configurar su tarjeta de red.",
    "explanation": "AWS gestiona un servicio DHCP interno que asigna a cada instancia su IP privada, máscara de subred y dirección del router tan pronto como la interfaz de red se activa."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Deseas acceder a un servidor Windows mediante Interfaz de Escritorio Remoto (RDP). ¿Qué puerto debe estar abierto en el Grupo de Seguridad?",
    "options": [
      "22",
      "80",
      "3389",
      "443"
    ],
    "answer": "3389",
    "hint": "Es el puerto estándar para el protocolo de escritorio remoto de Microsoft.",
    "explanation": "Mientras que Linux usa SSH (22), Windows utiliza RDP en el puerto 3389 para la administración gráfica remota."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una tabla de enrutamiento tiene dos rutas: una para '10.0.0.0/16' (local) y otra para '0.0.0.0/0' (IGW), ¿cómo decide el router qué camino tomar para un paquete destinado a '10.0.1.5'?",
    "options": [
      "Usa la ruta más específica (la que mejor coincida con el destino).",
      "Usa la ruta que se creó primero.",
      "Envía el paquete a ambas rutas simultáneamente.",
      "Usa siempre el Internet Gateway por defecto."
    ],
    "answer": "Usa la ruta más específica (la que mejor coincida con el destino).",
    "hint": "El enrutamiento IP siempre prioriza la coincidencia de prefijo más larga y exacta.",
    "explanation": "En este caso, 10.0.1.5 coincide con el rango local 10.0.0.0/16. Como es una coincidencia más específica que 'cualquier dirección' (0.0.0.0/0), el tráfico se mantiene dentro de la VPC."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo utiliza el puerto 443 para comunicaciones web seguras?",
    "options": [
      "HTTP",
      "HTTPS",
      "FTP",
      "SSH"
    ],
    "answer": "HTTPS",
    "hint": "Es la evolución cifrada del protocolo de transferencia de hipertexto.",
    "explanation": "HTTPS utiliza certificados SSL/TLS para cifrar la comunicación entre el cliente y el servidor, operando típicamente en el puerto 443."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un desarrollador recibe un error 'Connection Refused' al intentar conectar a un servicio. ¿Qué diferencia este error de un 'Connection Timed Out'?",
    "options": [
      "Refused significa que el firewall bloqueó el tráfico; Timed Out significa que el servidor no existe.",
      "Refused significa que el host fue alcanzado pero el servicio no está escuchando en ese puerto; Timed Out significa que no hubo respuesta (posible bloqueo de firewall).",
      "Ambos errores significan exactamente lo mismo.",
      "Refused solo ocurre en Windows y Timed Out solo en Linux."
    ],
    "answer": "Refused significa que el host fue alcanzado pero el servicio no está escuchando en ese puerto; Timed Out significa que no hubo respuesta (posible bloqueo de firewall).",
    "hint": "Uno es una respuesta negativa explícita, el otro es un silencio total.",
    "explanation": "'Connection Refused' indica que el sistema operativo de destino recibió el paquete pero lo rechazó porque no hay ninguna aplicación en ese puerto. 'Timed Out' sugiere que el paquete se perdió o fue descartado por un firewall en el camino."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Deseas conectar tu VPC a los servicios de AWS (como S3 o DynamoDB) de forma privada, sin que el tráfico pase por el internet público. ¿Qué recurso utilizas?",
    "options": [
      "NAT Gateway",
      "VPC Endpoint (Punto de enlace)",
      "Internet Gateway",
      "Peering de VPC"
    ],
    "answer": "VPC Endpoint (Punto de enlace)",
    "hint": "Crea una 'puerta trasera' privada dentro de la red de AWS para acceder a sus propios servicios.",
    "explanation": "Los VPC Endpoints permiten la comunicación privada entre tu VPC y los servicios de AWS compatibles, mejorando la seguridad y eliminando la necesidad de gateways de internet para esos servicios."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función de la máscara de subred en una dirección IP como 10.0.0.0/24?",
    "options": [
      "Define cuántos bits de la dirección representan la red y cuántos representan a los hosts.",
      "Es una contraseña para acceder a la red.",
      "Indica la velocidad máxima de la conexión.",
      "Determina si el tráfico es TCP o UDP."
    ],
    "answer": "Define cuántos bits de la dirección representan la red y cuántos representan a los hosts.",
    "hint": "Ayuda a delimitar dónde termina el nombre de la 'calle' y dónde empieza el número de la 'casa'.",
    "explanation": "La máscara (o longitud de prefijo) permite al router saber qué parte de la IP identifica a la subred. Un /24 significa que los primeros 24 bits son de red, permitiendo identificar dispositivos con los 8 bits restantes."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Si una instancia EC2 tiene múltiples Grupos de Seguridad asociados, ¿cómo se evalúan las reglas?",
    "options": [
      "Solo se aplica el primer grupo de la lista.",
      "Se combinan todas las reglas de permiso de todos los grupos (unión de permisos).",
      "Un grupo puede denegar lo que el otro permite.",
      "Se toma la configuración del grupo más restrictivo."
    ],
    "answer": "Se combinan todas las reglas de permiso de todos los grupos (unión de permisos).",
    "hint": "Los Grupos de Seguridad son acumulativos y solo pueden permitir tráfico.",
    "explanation": "AWS evalúa todas las reglas de todos los grupos asociados. Si al menos una regla en cualquier grupo permite el tráfico, este se deja pasar."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Por qué es importante elegir una región geográfica cercana a tus usuarios finales al crear una VPC?",
    "options": [
      "Para cumplir con las leyes de gravedad de datos.",
      "Para reducir la latencia (tiempo de viaje de los datos).",
      "Porque AWS solo permite conexiones desde el mismo país.",
      "Para que el soporte técnico hable el mismo idioma."
    ],
    "answer": "Para reducir la latencia (tiempo de viaje de los datos).",
    "hint": "La distancia física afecta la velocidad con la que los paquetes llegan al destino.",
    "explanation": "Cuanto más cerca esté físicamente el servidor del usuario, menos nodos intermedios debe cruzar el tráfico, resultando en una experiencia de usuario más rápida y fluida."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "En Linux, ¿qué archivo contiene la configuración de los servidores DNS que el sistema utiliza para resolver nombres?",
    "options": [
      "/etc/passwd",
      "/etc/resolv.conf",
      "/var/log/syslog",
      "/bin/bash"
    ],
    "answer": "/etc/resolv.conf",
    "hint": "Su nombre indica que se encarga de la resolución de nombres.",
    "explanation": "El archivo /etc/resolv.conf especifica las direcciones IP de los servidores DNS que el sistema operativo consultará para traducir nombres de dominio a direcciones IP."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Deseas realizar una auditoría de todo el tráfico IP que entra y sale de tus interfaces de red en la VPC. ¿Qué característica de AWS habilitarías?",
    "options": [
      "Amazon Inspector",
      "VPC Flow Logs",
      "AWS Config",
      "CloudWatch Alarms"
    ],
    "answer": "VPC Flow Logs",
    "hint": "Captura información sobre el flujo de tráfico IP aceptado o rechazado.",
    "explanation": "VPC Flow Logs registra información detallada sobre el tráfico de red, lo cual es vital para la resolución de problemas de conectividad y auditorías de seguridad."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Qué protocolo se utiliza comúnmente para la sincronización horaria de los servidores en una red?",
    "options": [
      "FTP",
      "NTP",
      "SNMP",
      "SSH"
    ],
    "answer": "NTP",
    "hint": "Network Time Protocol.",
    "explanation": "NTP asegura que todos los servidores en una red tengan la misma hora exacta, lo cual es crítico para registros de logs, procesos de autenticación y bases de datos distribuidas."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "Un usuario reporta que no puede enviar correos desde su servidor. Intentas probar si el servidor de correo responde en el puerto 25. ¿Qué comando usarías?",
    "options": [
      "ping mail.servidor.com",
      "telnet mail.servidor.com 25",
      "nslookup -type=MX mail.servidor.com",
      "traceroute -p 25 mail.servidor.com"
    ],
    "answer": "telnet mail.servidor.com 25",
    "hint": "Prueba si se puede establecer una sesión en ese puerto específico.",
    "explanation": "Telnet es una forma rápida de verificar si un puerto de servicio (como el 25 para SMTP) está abierto y escuchando conexiones en un servidor remoto."
  },
  {
    "subjectId": "clf",
    "topicId": "clf-3",
    "question": "¿Cuál es la función de una 'Elastic IP' en AWS?",
    "options": [
      "Hacer que el internet sea más rápido.",
      "Proporcionar una dirección IP pública estática que no cambia cuando se detiene e inicia la instancia.",
      "Cifrar automáticamente el tráfico de la instancia.",
      "Permitir que la instancia use más memoria RAM cuando sea necesario."
    ],
    "answer": "Proporcionar una dirección IP pública estática que no cambia cuando se detiene e inicia la instancia.",
    "hint": "Es una dirección IP fija que 'pertenece' a tu cuenta hasta que decidas liberarla.",
    "explanation": "Las Elastic IP son direcciones públicas reservadas que puedes asociar a cualquier instancia, garantizando que el punto de acceso externo se mantenga constante a pesar de cambios en el estado del recurso."
  }

  ]);
})();
