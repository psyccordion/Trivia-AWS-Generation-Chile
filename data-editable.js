/*
EDITA ESTE ARCHIVO EN BLOC DE NOTAS.

SNIPPET NUEVA MATERIA:
{ id: 'devops', name: 'AWS DevOps Engineer', active: true }

SNIPPET NUEVO TOPICO:
{ id: 'devops-0', subjectId: 'devops', name: '0. CI/CD', active: true }

SNIPPET NUEVA PREGUNTA:
{
  subjectId: 'devops',
  topicId: 'devops-0',
  question: 'Aqui va la pregunta',
  options: ['Opcion A', 'Opcion B', 'Opcion C', 'Opcion D'],
  answer: 'Opcion B',
  hint: 'Pista corta',
  explanation: 'Explicacion breve'
}

REGLAS:
- answer debe ser exactamente una opcion de options.
- topicId debe existir en topics.
- subjectId debe existir en subjects.
*/
window.TRIVIA_DATA = {
  "passPercent": 70,
  "subjects": [
    {
      "id": "dea",
      "name": "AWS Data Engineer Pro",
      "active": true
    },
    {
      "id": "clf",
      "name": "AWS Cloud Practitioner",
      "active": true
    },
    {
      "id": "fund",
      "name": "Fundamentos",
      "active": true
    },
    {
      "id": "seg",
      "name": "Seguridad",
      "active": true
    }
  ],
  "topics": [
    {
      "id": "dea-0",
      "subjectId": "dea",
      "name": "0. Introduccion",
      "active": true
    },
    {
      "id": "dea-1",
      "subjectId": "dea",
      "name": "1. Data Ingestion and Transformation",
      "active": true
    },
    {
      "id": "dea-2",
      "subjectId": "dea",
      "name": "2. Data Store Management",
      "active": true
    },
    {
      "id": "dea-3",
      "subjectId": "dea",
      "name": "3. Data Operations and Support",
      "active": true
    },
    {
      "id": "dea-4",
      "subjectId": "dea",
      "name": "4. Data Security and Governance",
      "active": true
    },
    {
      "id": "dea-5",
      "subjectId": "dea",
      "name": "5. In-Scope / Out-of-Scope Services",
      "active": true
    },
    {
      "id": "clf-0",
      "subjectId": "clf",
      "name": "0. Introducción a informática",
      "active": true
    },
    {
      "id": "clf-1",
      "subjectId": "clf",
      "name": "1. Introducción a la nube",
      "active": true
    },
    {
      "id": "clf-2",
      "subjectId": "clf",
      "name": "2. Linux",
      "active": true
    },
    {
      "id": "clf-3",
      "subjectId": "clf",
      "name": "3. Nose que viene",
      "active": true
    },
    {
      "id": "clf-4",
      "subjectId": "clf",
      "name": "4. Peor",
      "active": true
    },
    {
      "id": "fund-0",
      "subjectId": "fund",
      "name": "0. Fundamentos Generales",
      "active": true
    }
  ],
  "questions": [
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué dominio de AWS NO es propiedad de terceros según el aviso de Copyright?",
      "options": [
        "Amazon's trademarks",
        "Linux Foundation logos",
        "MySQL marks",
        "ISO standards"
      ],
      "answer": "Amazon's trademarks",
      "hint": "Revisa quién es el autor de la guía (Copyright © 2026).",
      "explanation": "Las marcas comerciales y la imagen comercial de Amazon pertenecen exclusivamente a Amazon y no pueden usarse de manera que cause confusión o desacredite a la empresa."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué nivel de experiencia en la nube de AWS se recomienda específicamente para el DEA-C01?",
      "options": [
        "1-2 años de experiencia práctica",
        "Solo haber leído la documentación",
        "5 años como CTO",
        "Ninguna, es nivel básico"
      ],
      "answer": "1-2 años de experiencia práctica",
      "hint": "Aunque se piden 2-3 años en IT, en AWS se pide un rango un poco menor.",
      "explanation": "La guía recomienda de 1 a 2 años de experiencia práctica utilizando específicamente los servicios de AWS para ingeniería de datos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Cuál es un componente clave de la 'Descripción del Candidato Objetivo'?",
      "options": [
        "Ingesta y transformación de datos",
        "Venta de licencias de software",
        "Diseño de interfaces gráficas",
        "Reparación física de racks"
      ],
      "answer": "Ingesta y transformación de datos",
      "hint": "Es la base del trabajo de un Ingeniero de Datos.",
      "explanation": "El candidato debe ser capaz de realizar ingesta de datos, transformación, orquestación, almacenamiento, gobierno y seguridad."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué conocimiento de bases de datos es 'fuera de alcance' (out of scope) según la guía?",
      "options": [
        "Optimización de consultas SQL",
        "Administración profunda de DBAs",
        "Modelado de datos",
        "Uso de Amazon Redshift"
      ],
      "answer": "Administración profunda de DBAs",
      "hint": "El Data Engineer usa la base de datos, no necesariamente la administra a nivel de hardware/parches.",
      "explanation": "Tareas administrativas profundas como parches de motor de base de datos suelen estar fuera del alcance del examen de Data Engineer."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué significa que un examen tenga 'Unscored Content'?",
      "options": [
        "Preguntas que no afectan tu nota",
        "Preguntas que valen el doble",
        "Preguntas de relleno opcionales",
        "Preguntas para el nivel Professional"
      ],
      "answer": "Preguntas que no afectan tu nota",
      "hint": "Son para estadísticas internas de AWS.",
      "explanation": "AWS incluye preguntas no puntuadas para validar nuevos ítems. No se identifican, por lo que debes responder todas seriamente."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Cómo se clasifican las preguntas de 'Respuesta Múltiple'?",
      "options": [
        "Dos o más respuestas correctas",
        "Solo una respuesta correcta",
        "Una respuesta que debe escribirse",
        "Es un cuadro comparativo"
      ],
      "answer": "Dos o más respuestas correctas",
      "hint": "Suelen ser 5 opciones y te piden elegir 2 o 3.",
      "explanation": "Las preguntas de respuesta múltiple requieren que selecciones más de una opción correcta de una lista de cinco o más."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Cuál es la puntuación máxima posible en el examen DEA-C01?",
      "options": [
        "1000",
        "100",
        "800",
        "500"
      ],
      "answer": "1000",
      "hint": "El rango es de 100 a...",
      "explanation": "La puntuación escalada de AWS va de un mínimo de 100 a un máximo de 1000 puntos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué sección de la guía contiene la lista de servicios que vendrán en el examen?",
      "options": [
        "AWS Services for the Exam",
        "Introduction",
        "Exam Results",
        "Target Candidate"
      ],
      "answer": "AWS Services for the Exam",
      "hint": "Es el nombre más lógico para un listado de herramientas.",
      "explanation": "Esta sección es crucial para el estudio ya que detalla exactamente qué servicios (Glue, S3, Redshift, etc.) son evaluados."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué sucede si seleccionas solo una de las dos respuestas correctas en una pregunta múltiple?",
      "options": [
        "No obtienes crédito (cero puntos)",
        "Obtienes medio punto",
        "La pregunta se anula",
        "El sistema te avisa antes de seguir"
      ],
      "answer": "No obtienes crédito (cero puntos)",
      "hint": "AWS es estricto: o todo está bien, o está mal.",
      "explanation": "AWS no ofrece crédito parcial. Debes seleccionar exactamente todas las opciones correctas para puntuar."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Cuál es el propósito del 'Content Outline'?",
      "options": [
        "Mostrar los dominios y sus pesos porcentuales",
        "Dar las respuestas del examen",
        "Explicar cómo registrarse en Pearson VUE",
        "Listar los centros de examen"
      ],
      "answer": "Mostrar los dominios y sus pesos porcentuales",
      "hint": "Es el esqueleto del examen.",
      "explanation": "El esquema de contenido define las áreas del examen y qué porcentaje de preguntas corresponde a cada dominio."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué tipo de experiencia en programación se recomienda?",
      "options": [
        "Scripts de procesamiento de datos",
        "Desarrollo de kernels de Linux",
        "Programación de microcontroladores",
        "Creación de Apps móviles"
      ],
      "answer": "Scripts de procesamiento de datos",
      "hint": "Piensa en Python o SQL para mover datos.",
      "explanation": "Un Data Engineer debe saber programar scripts para automatizar flujos de datos (ETL) y realizar transformaciones."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "Según el Copyright, ¿cómo no deben usarse las marcas de Amazon?",
      "options": [
        "De manera que cause confusión",
        "En un currículum vitae",
        "En una presentación educativa",
        "Para nombrar un servicio propio"
      ],
      "answer": "De manera que cause confusión",
      "hint": "Se trata de proteger la identidad de la marca.",
      "explanation": "Amazon prohíbe el uso de sus marcas en cualquier forma que pueda confundir a los clientes o desacreditar a la empresa."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Cuál es el puntaje de aprobación típico para este examen Associate?",
      "options": [
        "720",
        "700",
        "750",
        "800"
      ],
      "answer": "720",
      "hint": "Siete-veinte.",
      "explanation": "Aunque puede variar ligeramente por examen, el estándar histórico de AWS para el nivel Associate es de 720 puntos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué área NO es una responsabilidad principal del Data Engineer en el examen?",
      "options": [
        "Desarrollo de modelos de Deep Learning",
        "Mantenimiento de pipelines de datos",
        "Seguridad de los datos",
        "Optimización de costos de almacenamiento"
      ],
      "answer": "Desarrollo de modelos de Deep Learning",
      "hint": "Eso es más del rol de 'Machine Learning Engineer'.",
      "explanation": "El Data Engineer prepara el terreno y los datos, pero el modelado profundo de IA suele ser responsabilidad del Data Scientist o ML Engineer."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué conocimiento de redes se asume en un Data Engineer?",
      "options": [
        "Conectividad IP y VPCs",
        "Soldadura de cables de red",
        "Protocolos de radiofrecuencia",
        "Configuración de modems DSL"
      ],
      "answer": "Conectividad IP y VPCs",
      "hint": "Cómo se conectan los datos en la nube de forma privada.",
      "explanation": "Es vital entender cómo funcionan las Virtual Private Clouds (VPC) para asegurar que el tráfico de datos sea seguro y eficiente."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "En el informe de resultados, ¿qué significa 'Pass'?",
      "options": [
        "Aprobado",
        "Reprobado",
        "Pendiente",
        "Examen cancelado"
      ],
      "answer": "Aprobado",
      "hint": "Es la palabra que todos quieren ver al final.",
      "explanation": "Si obtienes 'Pass', has superado el umbral mínimo de competencia requerido por AWS para el nivel Associate."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Para quién es el 'Target Candidate Description'?",
      "options": [
        "Para saber si tienes el perfil adecuado antes de dar el examen",
        "Para contratar gente en Amazon",
        "Para estudiantes de secundaria",
        "Para gerentes de ventas"
      ],
      "answer": "Para saber si tienes el perfil adecuado antes de dar el examen",
      "hint": "Define el 'público objetivo'.",
      "explanation": "AWS define el perfil ideal para asegurar que los candidatos no intenten el examen sin la experiencia necesaria."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué servicios de terceros se mencionan como propiedad de sus respectivos dueños?",
      "options": [
        "Cualquiera no propiedad de Amazon",
        "Solo Google",
        "Solo Microsoft",
        "Ninguno, todo es de Amazon"
      ],
      "answer": "Cualquiera no propiedad de Amazon",
      "hint": "Está en la sección de marcas comerciales del Copyright.",
      "explanation": "La guía reconoce que otras marcas (como SQL Server o sistemas operativos) pertenecen a sus respectivos dueños legales."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Qué se recomienda saber sobre el AWS Well-Architected Framework?",
      "options": [
        "Sus pilares aplicados a datos",
        "Los nombres de los fundadores",
        "Cómo comprar el libro físico",
        "La historia de la nube"
      ],
      "answer": "Sus pilares aplicados a datos",
      "hint": "Es el marco de referencia de diseño en AWS.",
      "explanation": "El examen evalúa si sabes aplicar los pilares de seguridad, fiabilidad y eficiencia de costos al diseño de arquitecturas de datos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-0",
      "question": "¿Cuál es la última sección mencionada en la Tabla de Contenidos proporcionada?",
      "options": [
        "AWS Services for the Exam",
        "Introduction",
        "Exam Results",
        "Target Candidate"
      ],
      "answer": "AWS Services for the Exam",
      "hint": "Es el punto número 5 de la lista.",
      "explanation": "La lista termina con los servicios específicos que el candidato debe dominar para tener éxito en la evaluación."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Una empresa necesita ingerir registros de actividad de usuarios en tiempo real y enviarlos a múltiples consumidores simultáneamente con latencia mínima. ¿Qué configuración de Kinesis Data Streams es la más adecuada?",
      "options": [
        "Kinesis Enhanced Fan-out",
        "Kinesis standard consumers",
        "Kinesis Data Firehose",
        "Kinesis Agent"
      ],
      "answer": "Kinesis Enhanced Fan-out",
      "hint": "Busca la opción que reduce la latencia de propagación de registros (HTTP/2 push).",
      "explanation": "Enhanced Fan-out permite a los consumidores recibir registros a través de una conexión dedicada de 2MB/s por fragmento, reduciendo la latencia y eliminando la competencia entre consumidores."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Qué servicio es ideal para extraer datos de aplicaciones SaaS como Salesforce, SAP o Zendesk hacia Amazon S3 de forma segura y sin escribir código?",
      "options": [
        "Amazon AppFlow",
        "AWS Glue ETL",
        "AWS DMS",
        "Amazon Managed Streaming for Kafka (MSK)"
      ],
      "answer": "Amazon AppFlow",
      "hint": "Se enfoca específicamente en la integración entre aplicaciones SaaS y servicios de AWS.",
      "explanation": "Amazon AppFlow es un servicio de integración totalmente gestionado que permite transferir datos de forma segura entre SaaS y AWS (S3, Redshift) mediante flujos configurables."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Durante la ingesta masiva de datos en una tabla de Amazon DynamoDB, recibes el error 'ProvisionedThroughputExceededException'. ¿Cuál es la estrategia de manejo de errores recomendada por AWS?",
      "options": [
        "Implementar Exponential Backoff",
        "Aumentar los Shards inmediatamente",
        "Reiniciar la función Lambda",
        "Usar SQS como búfer"
      ],
      "answer": "Implementar Exponential Backoff",
      "hint": "Es una técnica de reintento progresivo para no saturar el sistema.",
      "explanation": "El 'Exponential Backoff' detiene progresivamente los reintentos para permitir que el servicio procese la carga, evitando fallos en cascada por límites de tasa (Rate Limits)."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Necesitas orquestar un pipeline de datos complejo que tiene múltiples dependencias, lógica condicional y requiere visualización de grafos (DAGs). ¿Qué servicio es el más apropiado?",
      "options": [
        "Amazon Managed Workflows for Apache Airflow (MWAA)",
        "Amazon EventBridge",
        "AWS Step Functions",
        "AWS Glue Schedulers"
      ],
      "answer": "Amazon Managed Workflows for Apache Airflow (MWAA)",
      "hint": "Utiliza código Python para definir flujos de trabajo basados en DAGs.",
      "explanation": "MWAA es la versión gestionada de Apache Airflow, diseñada para flujos de datos complejos que requieren orquestación robusta y monitoreo detallado de tareas."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Cuál es la forma más eficiente de disparar una función AWS Lambda automáticamente cada vez que un nuevo archivo .json se carga en un prefijo específico de un bucket de S3?",
      "options": [
        "S3 Event Notifications",
        "EventBridge cron schedule",
        "Kinesis Data Firehose",
        "Glue Crawler"
      ],
      "answer": "S3 Event Notifications",
      "hint": "Es un mecanismo reactivo basado en eventos del propio bucket.",
      "explanation": "S3 Event Notifications permite enviar alertas a Lambda, SQS o SNS inmediatamente después de eventos de creación de objetos (Put/Post) con filtros de prefijo/sufijo."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "En un pipeline de streaming con Amazon MSK, ¿qué concepto describe la capacidad de volver a procesar datos antiguos después de que ha ocurrido un error de lógica en el consumidor?",
      "options": [
        "Replayability (Rejugabilidad)",
        "Stateful Transaction",
        "Fan-out",
        "Throttling"
      ],
      "answer": "Replayability (Rejugabilidad)",
      "hint": "Depende del periodo de retención de los mensajes en el tópico.",
      "explanation": "La rejugabilidad permite a los consumidores 'rebobinar' su offset para leer mensajes antiguos que aún están dentro del periodo de retención configurado en Kafka o Kinesis."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Estás diseñando una ingesta de datos 'Stateless' (sin estado) para procesar mensajes individuales de una cola SQS. ¿Qué característica define mejor este tipo de transacción?",
      "options": [
        "Cada mensaje se procesa de forma independiente sin memoria de los anteriores",
        "El proceso guarda el último ID procesado en DynamoDB",
        "El sistema requiere una ventana de tiempo (Windowing)",
        "Se requiere una base de datos ACID para el commit"
      ],
      "answer": "Cada mensaje se procesa de forma independiente sin memoria de los anteriores",
      "hint": "Sin estado significa que el registro 'X' no sabe nada del registro 'Y'.",
      "explanation": "Las transacciones sin estado (stateless) tratan cada petición como una unidad aislada, lo que facilita enormemente el escalado horizontal y la tolerancia a fallos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Quieres migrar una base de datos MySQL on-premise a Amazon Redshift de forma continua mediante Change Data Capture (CDC). ¿Qué servicio cumple esta función?",
      "options": [
        "AWS Database Migration Service (DMS)",
        "Amazon AppFlow",
        "Amazon Kinesis Video Streams",
        "AWS DataSync"
      ],
      "answer": "AWS Database Migration Service (DMS)",
      "hint": "Es el servicio principal para migraciones de bases de datos relacionales.",
      "explanation": "AWS DMS soporta replicación continua (CDC) desde fuentes relacionales hacia destinos de AWS, manteniendo los datos sincronizados en tiempo real."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Para permitir que un pipeline de ingesta en una VPC privada acceda a una API pública de datos en Internet sin exponer los recursos a conexiones entrantes, ¿qué configuración de red es necesaria?",
      "options": [
        "NAT Gateway y Allowlist en el Security Group de salida",
        "Internet Gateway directo a la instancia",
        "VPC Endpoint for S3",
        "Peering con la VPC de la API"
      ],
      "answer": "NAT Gateway y Allowlist en el Security Group de salida",
      "hint": "Necesitas traducir direcciones privadas a públicas para el tráfico saliente.",
      "explanation": "Un NAT Gateway permite que instancias en subredes privadas se conecten a Internet, mientras que las listas de permisos aseguran que solo se conecten a destinos autorizados."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Qué sucede si una función Lambda es invocada por Kinesis Data Streams y la función devuelve un error?",
      "options": [
        "Lambda reintenta el procesamiento del lote (batch) hasta que tenga éxito o los datos expiren",
        "El mensaje se envía a una Dead Letter Queue automáticamente",
        "Kinesis descarta el mensaje y sigue con el siguiente",
        "El fragmento (shard) se bloquea permanentemente"
      ],
      "answer": "Lambda reintenta el procesamiento del lote (batch) hasta que tenga éxito o los datos expiren",
      "hint": "Kinesis mantiene el orden de los datos y espera una respuesta exitosa.",
      "explanation": "Por defecto, si Lambda falla al procesar un lote de Kinesis, reintentará el mismo lote hasta que los datos expiren en el stream o la función tenga éxito, lo cual puede bloquear el shard si no se maneja adecuadamente."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Cuál es el beneficio de usar Amazon EMR sobre Amazon EKS para transformaciones de datos masivas basadas en Apache Spark?",
      "options": [
        "EMR está optimizado específicamente para frameworks de Big Data con gestión automática",
        "EKS es solo para microservicios web",
        "EMR es siempre más económico que EKS",
        "EKS no soporta Spark"
      ],
      "answer": "EMR está optimizado específicamente para frameworks de Big Data con gestión automática",
      "hint": "Piensa en qué servicio está diseñado de fábrica para Hadoop y Spark.",
      "explanation": "Amazon EMR es un servicio gestionado diseñado específicamente para ejecutar frameworks de procesamiento distribuido como Spark, Hive y Presto de forma eficiente."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Estás configurando una conexión de AWS Glue hacia una base de datos PostgreSQL en una subred privada. ¿Qué protocolo es el estándar para esta conexión?",
      "options": [
        "JDBC (Java Database Connectivity)",
        "HTTP/S",
        "SSH Tunneling",
        "FTP"
      ],
      "answer": "JDBC (Java Database Connectivity)",
      "hint": "Es el estándar de conectividad para la mayoría de las bases de datos relacionales en entornos Java/Spark.",
      "explanation": "AWS Glue utiliza conectores JDBC para interactuar con bases de datos relacionales compatibles tanto en AWS como en entornos on-premise."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Para reducir costos en un clúster de Amazon EMR que realiza tareas de procesamiento por lotes (batch) no críticas, ¿qué tipo de instancia es la más recomendada para los nodos de tarea (task nodes)?",
      "options": [
        "Spot Instances",
        "On-Demand Instances",
        "Dedicated Hosts",
        "Reserved Instances"
      ],
      "answer": "Spot Instances",
      "hint": "Permiten ahorrar hasta un 90% pero pueden ser reclamadas por AWS.",
      "explanation": "Las instancias Spot son ideales para nodos de tarea en EMR que no afectan la integridad del clúster si se interrumpen, optimizando significativamente el costo del pipeline."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿En qué escenario elegirías AWS Glue ETL sobre Amazon EMR?",
      "options": [
        "Cuando prefieres un entorno Serverless para evitar la gestión de infraestructura",
        "Cuando necesitas control total sobre las versiones del kernel de Linux",
        "Cuando el procesamiento requiere más de 5000 nodos físicos",
        "Cuando necesitas usar exclusivamente Hadoop MapReduce clásico"
      ],
      "answer": "Cuando prefieres un entorno Serverless para evitar la gestión de infraestructura",
      "hint": "Piensa en la carga operativa de administrar y escalar clústeres manualmente.",
      "explanation": "AWS Glue es Serverless, lo que elimina la necesidad de configurar, parchear y escalar clústeres de servidores, permitiéndote enfocarte únicamente en el código ETL."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Cuál es la principal ventaja de transformar archivos CSV a formato Apache Parquet antes de realizar consultas analíticas en Amazon Athena?",
      "options": [
        "Parquet es un formato columnar que reduce los datos leídos y el costo de consulta",
        "Parquet es un archivo de texto plano fácil de editar manualmente",
        "CSV no soporta esquemas de datos complejos",
        "Parquet ocupa más espacio pero es más rápido de descargar"
      ],
      "answer": "Parquet es un formato columnar que reduce los datos leídos y el costo de consulta",
      "hint": "La analítica suele consultar solo subconjuntos específicos de columnas.",
      "explanation": "Al ser columnar, Parquet permite que servicios como Athena o Redshift Spectrum lean solo las columnas necesarias, mejorando el rendimiento y reduciendo el costo basado en datos escaneados."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Un job de AWS Glue falla con el error 'Container killed by YARN for exceeding memory limits'. ¿Cuál es la solución recomendada?",
      "options": [
        "Cambiar el tipo de trabajador (Worker Type) a G.1X o G.2X para aumentar la memoria",
        "Eliminar los logs antiguos de CloudWatch",
        "Convertir los datos de entrada a formato .txt sin compresión",
        "Reducir el número de DPUs asignadas al job"
      ],
      "answer": "Cambiar el tipo de trabajador (Worker Type) a G.1X o G.2X para aumentar la memoria",
      "hint": "El error indica que el ejecutor de Spark se quedó sin memoria física.",
      "explanation": "Aumentar el Worker Type en Glue proporciona más memoria RAM y CPU a cada ejecutor de Spark, lo que ayuda a procesar transformaciones intensivas que causan errores de memoria (OOM)."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Necesitas exponer los resultados de una tabla de Amazon Redshift a una aplicación externa mediante una API REST. ¿Qué arquitectura cumple mejor este requisito?",
      "options": [
        "API Gateway + AWS Lambda + Redshift Data API",
        "S3 + CloudFront directo a Redshift",
        "EC2 con un servidor Apache conectado vía ODBC",
        "Kinesis Data Streams con WebSockets"
      ],
      "answer": "API Gateway + AWS Lambda + Redshift Data API",
      "hint": "Necesitas una capa de gestión de API y una forma de consultar la base de datos sin persistir conexiones.",
      "explanation": "Esta arquitectura permite que las aplicaciones externas consuman datos de Redshift de forma segura a través de una API RESTful sin la complejidad de gestionar conexiones JDBC/ODBC persistentes."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Según la definición de las '3 Vs' de Big Data, ¿a qué se refiere el término 'Variedad'?",
      "options": [
        "A la diversidad de formatos de datos: estructurados, semi-estructurados y no estructurados",
        "A la velocidad con la que los datos fluyen al sistema",
        "Al volumen total de Petabytes procesados por segundo",
        "A la cantidad de usuarios diferentes que acceden a los datos"
      ],
      "answer": "A la diversidad de formatos de datos: estructurados, semi-estructurados y no estructurados",
      "hint": "Piensa en la diferencia entre una tabla SQL y un archivo de video o logs de servidor.",
      "explanation": "La variedad describe el reto de integrar múltiples fuentes y tipos de datos (como JSON, CSV, archivos de audio o tablas relacionales) en un único ecosistema de datos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Una organización quiere utilizar un Modelo de Lenguaje Grande (LLM) para resumir comentarios de clientes en su pipeline de datos. ¿Qué servicio facilita esta integración?",
      "options": [
        "Amazon Bedrock",
        "AWS Snowball Edge",
        "Amazon Aurora Multi-Master",
        "AWS Ground Station"
      ],
      "answer": "Amazon Bedrock",
      "hint": "Es el servicio de AWS para acceder a modelos fundacionales e IA generativa.",
      "explanation": "Amazon Bedrock permite invocar modelos de IA generativa a través de APIs, lo que permite enriquecer pipelines de datos con capacidades de LLM (como resumen o traducción) de forma sencilla."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Tienes datos masivos en Amazon S3. ¿Cómo puedes unir estos datos con una tabla existente en Amazon Redshift de la manera más eficiente?",
      "options": [
        "Usando Redshift Spectrum para consultar S3 directamente y realizar el join",
        "Descargando los datos a archivos locales y usando SQL Workbench",
        "Cargando los datos de S3 a Redshift mediante el comando COPY cada hora",
        "Redshift no puede realizar uniones con datos externos en S3"
      ],
      "answer": "Usando Redshift Spectrum para consultar S3 directamente y realizar el join",
      "hint": "Es una función que permite ejecutar SQL sobre archivos en S3 como si fueran tablas locales de Redshift.",
      "explanation": "Redshift Spectrum permite realizar consultas SQL potentes que combinan datos en el almacenamiento local de Redshift con datos masivos en S3, sin necesidad de cargar los datos físicamente."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Qué servicio de orquestación de AWS es el más adecuado para manejar flujos de trabajo de larga duración que requieren persistencia de estado y manejo de errores nativo (Retry/Catch)?",
      "options": [
        "AWS Step Functions",
        "Amazon EventBridge",
        "AWS Glue Workflows",
        "AWS Lambda"
      ],
      "answer": "AWS Step Functions",
      "hint": "Utiliza una máquina de estados visual para definir pasos, reintentos y lógica de decisión.",
      "explanation": "AWS Step Functions es un orquestador serverless que mantiene el estado de cada ejecución, lo que lo hace ideal para pipelines complejos que necesitan reintentos automáticos y lógica de control de errores."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Deseas construir un pipeline 'Event-driven' que reaccione a cambios en un sistema externo mediante webhooks. ¿Qué servicio permite enrutar estos eventos hacia diferentes destinos de AWS basándose en el contenido del mensaje?",
      "options": [
        "Amazon EventBridge",
        "Amazon SNS",
        "Amazon SQS",
        "AWS Step Functions"
      ],
      "answer": "Amazon EventBridge",
      "hint": "Actúa como un bus de eventos que utiliza reglas para filtrar y dirigir mensajes.",
      "explanation": "Amazon EventBridge es un bus de eventos serverless que facilita la conexión de aplicaciones mediante datos de tus propias aplicaciones, aplicaciones SaaS integradas y servicios de AWS."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "En una arquitectura serverless, ¿cuál es la mejor práctica para evitar que una función Lambda de transformación de datos falle silenciosamente debido a una carga útil mal formada?",
      "options": [
        "Configurar una Dead Letter Queue (DLQ) en Amazon SQS",
        "Aumentar el tiempo de ejecución (timeout) de la función",
        "Usar una instancia EC2 en lugar de Lambda",
        "Deshabilitar los reintentos automáticos de Lambda"
      ],
      "answer": "Configurar una Dead Letter Queue (DLQ) en Amazon SQS",
      "hint": "Es un lugar donde se almacenan los mensajes que no pudieron ser procesados exitosamente.",
      "explanation": "Las DLQs permiten capturar mensajes fallidos para su posterior inspección y reprocesamiento, asegurando que ningún dato se pierda en el pipeline debido a errores transitorios o de formato."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Una empresa necesita notificar inmediatamente a un equipo de ingenieros de guardia cuando un pipeline de datos crítico falla. ¿Qué servicio es el estándar para enviar mensajes 'Fan-out' a múltiples protocolos como Email, SMS y Lambda?",
      "options": [
        "Amazon SNS (Simple Notification Service)",
        "Amazon SQS",
        "Amazon SES",
        "AWS Step Functions"
      ],
      "answer": "Amazon SNS (Simple Notification Service)",
      "hint": "Es un servicio de mensajería de publicación/suscripción (Pub/Sub).",
      "explanation": "Amazon SNS permite enviar notificaciones push a una gran cantidad de suscriptores, incluyendo otros servicios de AWS (como Lambda o SQS) y puntos finales externos (SMS, Email)."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Cuál es la principal ventaja de usar AWS Step Functions 'Standard Workflows' sobre 'Express Workflows' para un pipeline de ETL que puede durar más de 10 minutos?",
      "options": [
        "Standard Workflows soportan ejecuciones de hasta un año; Express están limitadas a 5 minutos",
        "Standard Workflows son más económicos por ejecución",
        "Standard no soporta integración con Lambda",
        "Express Workflows guardan todo el historial de ejecución para auditoría"
      ],
      "answer": "Standard Workflows soportan ejecuciones de hasta un año; Express están limitadas a 5 minutos",
      "hint": "Piensa en la duración máxima de la ejecución y la necesidad de auditoría detallada.",
      "explanation": "Los Standard Workflows son ideales para procesos largos y críticos que requieren un historial de ejecución detallado, mientras que los Express son para microprocesamiento de alta velocidad y corta duración."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Necesitas procesar miles de registros en paralelo dentro de un flujo de AWS Step Functions. ¿Qué estado (state) de la máquina de estados permite iterar sobre una lista de objetos de S3 y procesar cada uno concurrentemente?",
      "options": [
        "Map State",
        "Parallel State",
        "Choice State",
        "Wait State"
      ],
      "answer": "Map State",
      "hint": "Se utiliza específicamente para realizar una acción repetitiva sobre una colección de datos.",
      "explanation": "El estado 'Map' permite ejecutar un conjunto de pasos para cada elemento de una matriz de entrada, permitiendo un procesamiento paralelo masivo y escalable dentro del flujo de trabajo."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Qué herramienta es preferible para orquestar un pipeline que depende exclusivamente de trabajos de AWS Glue y crawlers, sin necesidad de integraciones externas complejas?",
      "options": [
        "AWS Glue Workflows",
        "Amazon MWAA",
        "AWS Step Functions",
        "Amazon EventBridge"
      ],
      "answer": "AWS Glue Workflows",
      "hint": "Es una solución nativa y simple integrada dentro de la consola de Glue.",
      "explanation": "AWS Glue Workflows es la forma más sencilla de orquestar jobs y crawlers de Glue, permitiendo definir disparadores (triggers) basados en el éxito o fallo de tareas previas."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Para desacoplar un productor de datos que genera picos masivos de tráfico de un consumidor que procesa datos de forma constante pero más lenta, ¿qué arquitectura es la más resiliente?",
      "options": [
        "Colocar una cola Amazon SQS entre el productor y el consumidor",
        "Conectar el productor directamente al consumidor vía HTTP",
        "Usar una tabla DynamoDB como búfer",
        "Aumentar el tamaño del servidor del consumidor"
      ],
      "answer": "Colocar una cola Amazon SQS entre el productor y el consumidor",
      "hint": "La cola actúa como un amortiguador (buffer) que suaviza los picos de carga.",
      "explanation": "Amazon SQS permite el desacoplamiento de componentes, asegurando que el consumidor pueda procesar mensajes a su propio ritmo sin perder datos durante ráfagas de tráfico del productor."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "En Amazon Managed Workflows for Apache Airflow (MWAA), ¿cómo se definen las dependencias entre las diferentes tareas del pipeline?",
      "options": [
        "Mediante código Python en un archivo DAG (Directed Acyclic Graph)",
        "Configurando reglas en la consola de EventBridge",
        "Usando el lenguaje Amazon States Language (ASL)",
        "Arrastrando y soltando cajas en un diseñador visual"
      ],
      "answer": "Mediante código Python en un archivo DAG (Directed Acyclic Graph)",
      "hint": "Airflow es famoso por su enfoque de 'Pipeline as Code'.",
      "explanation": "En Airflow, los pipelines se definen como archivos Python donde se especifican las tareas y el orden de ejecución mediante un grafo dirigido acíclico (DAG), lo que permite control total y versionamiento."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Cuál es el método más eficiente para programar la ejecución de un pipeline de datos una vez al día a las 3:00 AM de forma serverless?",
      "options": [
        "Amazon EventBridge Scheduler",
        "Una función Lambda con un bucle infinito (while true)",
        "Una instancia EC2 con un cron job",
        "Amazon S3 Event Notifications"
      ],
      "answer": "Amazon EventBridge Scheduler",
      "hint": "Es el servicio diseñado para programar tareas recurrentes en AWS.",
      "explanation": "EventBridge Scheduler permite programar millones de tareas con precisión, disparando servicios como Lambda, Step Functions o Glue en momentos específicos de forma totalmente gestionada."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Un ingeniero de datos quiere optimizar el tiempo de ejecución de una función Lambda que procesa archivos pesados de S3. ¿Cuál es el impacto de aumentar la memoria configurada de la función?",
      "options": [
        "AWS asigna proporcionalmente más capacidad de CPU a medida que aumenta la memoria",
        "Solo aumenta el espacio de almacenamiento temporal /tmp",
        "Aumenta la velocidad de red pero mantiene la misma CPU",
        "La función se vuelve más lenta debido al overhead de inicialización"
      ],
      "answer": "AWS asigna proporcionalmente más capacidad de CPU a medida que aumenta la memoria",
      "hint": "Lambda escala linealmente un recurso específico junto con la RAM.",
      "explanation": "En AWS Lambda, la CPU se asigna proporcionalmente a la memoria. Duplicar la memoria no solo ayuda con el manejo de datos, sino que duplica la capacidad computacional disponible."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Qué concepto de computación distribuida describe el problema donde una sola partición de datos es mucho más grande que las demás, causando que un nodo trabaje más tiempo que el resto?",
      "options": [
        "Data Skew (Sesgo de datos)",
        "Shuffling",
        "MapReduce latency",
        "Deadlock"
      ],
      "answer": "Data Skew (Sesgo de datos)",
      "hint": "Es un desequilibrio en la distribución de la carga.",
      "explanation": "El sesgo de datos (Data Skew) ocurre cuando la clave de partición no distribuye los registros de forma uniforme, creando 'hot partitions' que retrasan todo el job distribuido."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Cuál es la estructura de datos más apropiada para modelar y visualizar el linaje de datos (Data Lineage) complejo, mostrando cómo fluyen los datos entre múltiples sistemas?",
      "options": [
        "Directed Acyclic Graph (DAG)",
        "B-Tree",
        "Hash Table",
        "Stack"
      ],
      "answer": "Directed Acyclic Graph (DAG)",
      "hint": "Los datos fluyen en una dirección y no deben volver al origen en un bucle infinito.",
      "explanation": "Un DAG representa relaciones direccionales sin ciclos, lo cual es perfecto para rastrear el flujo de datos desde el origen hasta el destino final."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Una organización desea implementar 'Infrastructure as Code' (IaC) para desplegar sus pipelines de forma repetible usando lenguajes familiares como Python o TypeScript. ¿Qué herramienta de AWS deberían usar?",
      "options": [
        "AWS Cloud Development Kit (CDK)",
        "AWS CloudFormation (YAML puro)",
        "AWS CloudTrail",
        "AWS Config"
      ],
      "answer": "AWS Cloud Development Kit (CDK)",
      "hint": "Permite usar lenguajes de programación reales en lugar de plantillas estáticas.",
      "explanation": "AWS CDK es un framework de desarrollo de software que permite definir infraestructura de nube mediante lenguajes de programación modernos, traduciéndolos luego a plantillas de CloudFormation."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Qué beneficio principal ofrece el uso de AWS SAM (Serverless Application Model) para un equipo de ingeniería de datos?",
      "options": [
        "Sintaxis simplificada para definir funciones Lambda, APIs y tablas DynamoDB",
        "Elimina la necesidad de usar repositorios Git",
        "Automatiza la optimización de consultas SQL",
        "Sustituye a AWS Glue en tareas de transformación"
      ],
      "answer": "Sintaxis simplificada para definir funciones Lambda, APIs y tablas DynamoDB",
      "hint": "Es una extensión de CloudFormation optimizada para lo 'Serverless'.",
      "explanation": "AWS SAM permite definir recursos serverless con muchas menos líneas de código que CloudFormation estándar, facilitando el empaquetado y despliegue de pipelines."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Necesitas procesar un dataset de 10GB dentro de una función Lambda, pero el espacio por defecto de /tmp no es suficiente. ¿Qué opción permite montar un sistema de archivos persistente y elástico?",
      "options": [
        "Amazon EFS (Elastic File System)",
        "Amazon EBS (Elastic Block Store)",
        "S3 Select",
        "Amazon FSx for Lustre"
      ],
      "answer": "Amazon EFS (Elastic File System)",
      "hint": "Es un sistema de archivos de red compatible nativamente con Lambda.",
      "explanation": "AWS Lambda permite montar puntos de acceso de Amazon EFS, proporcionando almacenamiento compartido de baja latencia que puede persistir entre invocaciones concurrentes."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "En el contexto de CI/CD para datos, ¿qué práctica asegura que los cambios en el código de transformación no rompan la lógica de negocio antes de llegar a producción?",
      "options": [
        "Unit Testing e Integration Testing automatizados",
        "Aumentar manualmente el número de trabajadores de Glue",
        "Revisar los logs después de que el pipeline falle",
        "Usar solo bases de datos NoSQL"
      ],
      "answer": "Unit Testing e Integration Testing automatizados",
      "hint": "Validación de la lógica antes del despliegue.",
      "explanation": "Las pruebas unitarias validan funciones individuales de transformación, mientras que las de integración aseguran que los componentes del pipeline funcionen correctamente entre sí dentro del ciclo de entrega continua."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Cuál es una ventaja clave de usar lenguajes compilados o tipados como Scala en comparación con Python para trabajos de Apache Spark a gran escala?",
      "options": [
        "Detección de errores en tiempo de compilación y mejor rendimiento nativo",
        "Facilidad de uso para científicos de datos",
        "No requiere un clúster para ejecutarse",
        "Scala no soporta transformaciones complejas"
      ],
      "answer": "Detección de errores en tiempo de compilación y mejor rendimiento nativo",
      "hint": "Spark está escrito originalmente en este lenguaje.",
      "explanation": "Scala ofrece un rendimiento superior y una mayor seguridad de tipos (type safety), lo que ayuda a prevenir errores comunes en pipelines de datos complejos antes de la ejecución."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "Estás configurando una función Lambda para procesar eventos de Kinesis. ¿Qué parámetro controla cuántos registros se envían a la función en una sola invocación para optimizar el rendimiento?",
      "options": [
        "Batch Size",
        "Timeout",
        "Reserved Concurrency",
        "Memory Size"
      ],
      "answer": "Batch Size",
      "hint": "Determina el tamaño del lote de datos.",
      "explanation": "El Batch Size (Tamaño del lote) define la cantidad máxima de registros que Lambda leerá del stream para procesar en una sola invocación, permitiendo un equilibrio entre latencia y eficiencia de procesamiento."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-1",
      "question": "¿Qué técnica de programación en Python se recomienda para procesar grandes volúmenes de datos localmente sin agotar la memoria RAM disponible?",
      "options": [
        "Generadores (Generators) y procesamiento por iteración",
        "Cargar todo el CSV en una lista de diccionarios",
        "Usar variables globales para todo",
        "Deshabilitar el recolector de basura (Garbage Collector)"
      ],
      "answer": "Generadores (Generators) y procesamiento por iteración",
      "hint": "Lee los datos de uno en uno (Lazy Evaluation).",
      "explanation": "Los generadores permiten procesar datos línea por línea o en trozos (chunks), manteniendo un consumo de memoria constante sin importar el tamaño total del archivo de origen."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Una organización necesita una base de datos de búsqueda vectorial para su aplicación de IA generativa. Requieren el menor tiempo de búsqueda posible para conjuntos de datos masivos. ¿Qué tipo de índice deberían configurar en su clúster de Aurora PostgreSQL?",
      "options": [
        "HNSW (Hierarchical Navigable Small Worlds)",
        "IVF (Inverted File Index)",
        "B-Tree",
        "GIN (Generalized Inverted Index)"
      ],
      "answer": "HNSW (Hierarchical Navigable Small Worlds)",
      "hint": "Es el estándar actual para búsquedas de vecinos más cercanos (ANN) de alto rendimiento en grafos.",
      "explanation": "HNSW es ideal para búsquedas vectoriales de alto rendimiento, ya que construye una estructura de grafos jerárquica que permite encontrar rápidamente vectores similares con latencia mínima, a cambio de un mayor uso de memoria."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Deseas migrar archivos históricos desde un servidor SFTP on-premise directamente a Amazon S3 para que sean procesados por un crawler de AWS Glue. ¿Qué servicio gestionado facilita esta transferencia manteniendo el protocolo original?",
      "options": [
        "AWS Transfer Family",
        "AWS DataSync",
        "Amazon AppFlow",
        "AWS Snowball Edge"
      ],
      "answer": "AWS Transfer Family",
      "hint": "Permite exponer endpoints de SFTP, FTPS y FTP respaldados por S3 o EFS.",
      "explanation": "AWS Transfer Family es un servicio totalmente gestionado que permite transferir archivos directamente hacia y desde Amazon S3 o Amazon EFS a través de protocolos SFTP, FTPS y FTP."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Un ingeniero de datos necesita realizar una unión (join) entre datos de ventas almacenados en Amazon Redshift y datos de perfiles de clientes que residen en una base de datos Amazon Aurora PostgreSQL. ¿Cuál es el método más eficiente para hacerlo sin mover los datos físicamente?",
      "options": [
        "Amazon Redshift Federated Queries",
        "Amazon Redshift Spectrum",
        "AWS Glue ETL Job",
        "Redshift UNLOAD y COPY"
      ],
      "answer": "Amazon Redshift Federated Queries",
      "hint": "Permite a Redshift consultar directamente bases de datos operacionales externas.",
      "explanation": "La consulta federada de Redshift permite ejecutar consultas SQL que combinan datos del almacenamiento local de Redshift con datos en vivo en Amazon RDS y Amazon Aurora."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Para una aplicación que requiere acceso a pares clave-valor con una latencia inferior a un milisegundo y durabilidad de datos entre múltiples zonas de disponibilidad, ¿qué servicio es el más adecuado?",
      "options": [
        "Amazon MemoryDB for Redis",
        "Amazon ElastiCache for Redis",
        "Amazon DynamoDB with DAX",
        "Amazon RDS for MySQL"
      ],
      "answer": "Amazon MemoryDB for Redis",
      "hint": "Es una base de datos en memoria compatible con Redis que utiliza un log transaccional multi-AZ.",
      "explanation": "MemoryDB es ideal para casos de uso que necesitan el rendimiento de Redis pero con la durabilidad de una base de datos principal, gracias a su log distribuido que persiste los datos antes de confirmar la escritura."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "¿Qué formato de tabla abierto de última generación deberías elegir en Amazon S3 para permitir transacciones ACID, evolución de esquemas y viajes en el tiempo (time travel) sobre tu Data Lake?",
      "options": [
        "Apache Iceberg",
        "Apache Parquet",
        "CSV con manifiestos",
        "AVRO"
      ],
      "answer": "Apache Iceberg",
      "hint": "Es un formato de tabla para datasets masivos en S3 compatible con Athena y Lake Formation.",
      "explanation": "Apache Iceberg es un formato de tabla abierto que aporta capacidades de base de datos relacional (como actualizaciones/borrados a nivel de fila y aislamiento de transacciones) a archivos de datos almacenados en S3."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Estás diseñando una solución para consultar Petabytes de datos históricos almacenados en Amazon S3 usando el lenguaje SQL estándar de tu almacén de datos. ¿Qué funcionalidad de Redshift te permite hacer esto pagando solo por los datos escaneados?",
      "options": [
        "Amazon Redshift Spectrum",
        "Redshift Materialized Views",
        "Redshift Concurrency Scaling",
        "Redshift Data API"
      ],
      "answer": "Amazon Redshift Spectrum",
      "hint": "Crea tablas externas sobre archivos en S3 usando el catálogo de AWS Glue.",
      "explanation": "Redshift Spectrum extiende tu clúster de Redshift para consultar datos directamente en S3, permitiendo el escalado masivo del procesamiento analítico sin necesidad de cargar los datos en el clúster local."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "En un entorno de búsqueda vectorial (Vector Search), ¿cuál es la principal diferencia entre el índice HNSW y el índice IVF (Inverted File)?",
      "options": [
        "HNSW consume más memoria pero es más rápido; IVF consume menos memoria pero requiere entrenamiento",
        "IVF es siempre más rápido que HNSW",
        "HNSW solo funciona en S3; IVF solo en DynamoDB",
        "No hay diferencia, son sinónimos"
      ],
      "answer": "HNSW consume más memoria pero es más rápido; IVF consume menos memoria pero requiere entrenamiento",
      "hint": "Uno se basa en grafos y el otro en la partición/agrupación del espacio vectorial.",
      "explanation": "HNSW ofrece una latencia de búsqueda extremadamente baja a costa de un mayor uso de RAM. IVF agrupa vectores en listas (voronoi cells), lo que ahorra memoria pero puede ser ligeramente más lento o menos preciso."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Para mejorar el rendimiento de consultas repetitivas y complejas sobre grandes volúmenes de datos en Amazon Redshift, ¿qué técnica permite pre-calcular y almacenar los resultados de la consulta automáticamente?",
      "options": [
        "Materialized Views",
        "Query Caching",
        "Sort Keys",
        "Distribution Keys"
      ],
      "answer": "Materialized Views",
      "hint": "Guardan físicamente el conjunto de resultados y pueden refrescarse incrementalmente.",
      "explanation": "Las vistas materializadas en Redshift almacenan el resultado de una consulta compleja, permitiendo que consultas subsiguientes se ejecuten mucho más rápido al no tener que reprocesar los datos base."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Un pipeline de datos está fallando porque múltiples procesos intentan actualizar la misma tabla de Amazon Redshift simultáneamente, causando bloqueos. ¿Cuál es la mejor práctica para gestionar estas esperas?",
      "options": [
        "Configurar colas de gestión de carga de trabajo (WLM) y Concurrency Scaling",
        "Reiniciar el clúster cada vez que ocurra un bloqueo",
        "Convertir la tabla a formato CSV en S3",
        "Eliminar todas las claves primarias de la tabla"
      ],
      "answer": "Configurar colas de gestión de carga de trabajo (WLM) y Concurrency Scaling",
      "hint": "Permite gestionar las colas de consultas y añadir capacidad de procesamiento automáticamente.",
      "explanation": "WLM permite priorizar y aislar cargas de trabajo, mientras que Concurrency Scaling añade capacidad transitoria automáticamente para manejar picos de consultas concurrentes sin degradar el rendimiento."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "¿Qué servicio de base de datos de AWS deberías elegir para un caso de uso que requiere un esquema altamente flexible (NoSQL), escalado global con réplicas multirregión y latencia de milisegundos de un solo dígito para cualquier escala?",
      "options": [
        "Amazon DynamoDB",
        "Amazon RDS",
        "Amazon DocumentDB",
        "Amazon Neptune"
      ],
      "answer": "Amazon DynamoDB",
      "hint": "Es una base de datos serverless de clave-valor y documentos.",
      "explanation": "DynamoDB es la opción preferida para aplicaciones que necesitan escalado masivo y consistente, ofreciendo tablas globales para replicación multirregional activa-activa."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Acabas de añadir miles de archivos nuevos a un prefijo de S3 que corresponde a una partición de una tabla en el Catálogo de Datos de AWS Glue. ¿Cuál es el comando SQL más rápido en Athena para que el catálogo reconozca estas nuevas particiones?",
      "options": [
        "MSCK REPAIR TABLE nombre_tabla",
        "SELECT * FROM nombre_tabla",
        "ALTER TABLE ADD PARTITION",
        "UPDATE CATALOG SET PARTITIONS"
      ],
      "answer": "MSCK REPAIR TABLE nombre_tabla",
      "hint": "Es un comando de Hive compatible con Athena que escanea S3 en busca de particiones faltantes.",
      "explanation": "MSCK REPAIR TABLE escanea el almacenamiento de S3 asociado a la tabla y añade automáticamente al Catálogo de Datos de Glue cualquier partición que exista en S3 pero no esté registrada en el metadato."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "¿Cuál es la función principal de un AWS Glue Crawler en un ecosistema de Data Lake?",
      "options": [
        "Inferir esquemas de datos y poblar el Catálogo de Datos automáticamente",
        "Transformar archivos CSV a Parquet",
        "Mover datos entre diferentes cuentas de AWS",
        "Cifrar los buckets de S3 en reposo"
      ],
      "answer": "Inferir esquemas de datos y poblar el Catálogo de Datos automáticamente",
      "hint": "Se encarga de la 'descubribilidad' de los metadatos.",
      "explanation": "Los crawlers se conectan a los almacenes de datos (S3, RDS, etc.), determinan el formato de los datos mediante clasificadores y crean tablas en el Catálogo de Datos de Glue."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Estás configurando un AWS Glue Crawler para escanear una base de datos RDS MySQL. ¿Qué componente es obligatorio crear en Glue antes de que el Crawler pueda acceder a la base de datos?",
      "options": [
        "Glue Connection",
        "Glue Workflow",
        "IAM User con acceso root",
        "Security Group exclusivo para Glue"
      ],
      "answer": "Glue Connection",
      "hint": "Contiene la cadena de conexión JDBC y la configuración de la VPC.",
      "explanation": "Una Glue Connection encapsula los parámetros necesarios (URL JDBC, credenciales, VPC/Subred/Security Groups) para que el servicio de Glue pueda alcanzar almacenes de datos que no son públicamente accesibles."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Al ejecutar un Crawler, observas que ha creado múltiples tablas separadas en lugar de una sola tabla con particiones. ¿Cuál es la causa más probable?",
      "options": [
        "Los esquemas de los archivos en las carpetas son inconsistentes entre sí",
        "El Crawler no tiene permisos de lectura",
        "Los archivos son demasiado grandes",
        "S3 no soporta tablas particionadas"
      ],
      "answer": "Los esquemas de los archivos en las carpetas son inconsistentes entre sí",
      "hint": "Glue combina carpetas en una sola tabla solo si las estructuras de columnas son compatibles.",
      "explanation": "Si Glue detecta diferencias significativas en los esquemas (nombres de columnas, tipos de datos) entre subcarpetas, asume que son tablas distintas en lugar de particiones de la misma entidad."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Deseas centralizar el linaje de datos y los metadatos técnicos de tus modelos de Machine Learning. ¿Qué servicio de la suite SageMaker se encarga específicamente de actuar como un catálogo de activos de datos para ML?",
      "options": [
        "Amazon SageMaker Feature Store",
        "Amazon SageMaker Data Wrangler",
        "Amazon SageMaker Model Registry",
        "Amazon SageMaker Studio"
      ],
      "answer": "Amazon SageMaker Feature Store",
      "hint": "Almacena, comparte y gestiona características (features) para entrenamiento e inferencia.",
      "explanation": "SageMaker Feature Store sirve como un catálogo de datos de negocio especializado en Machine Learning, permitiendo la reutilización de características (features) transformadas y manteniendo metadatos técnicos y de linaje."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "En AWS Glue, ¿qué configuración permite al Crawler actualizar automáticamente la definición de una tabla existente cuando detecta una nueva columna en los datos de origen?",
      "options": [
        "Update the table definition in the data catalog",
        "Add new columns only",
        "Ignore the change and retrieve from cache",
        "Delete the table and recreate it"
      ],
      "answer": "Update the table definition in the data catalog",
      "hint": "Es una de las opciones de 'Schema evolution' dentro de la configuración del Crawler.",
      "explanation": "Al seleccionar 'Update the table definition', el Crawler modificará el metadato en el catálogo para incluir nuevas columnas o cambios en tipos de datos detectados durante el escaneo."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Tienes un Catálogo de Datos de Glue en la Cuenta A y quieres que Amazon Athena en la Cuenta B pueda consultarlo. ¿Qué es necesario configurar principalmente?",
      "options": [
        "Políticas de recursos (Resource-based policies) en el Catálogo y permisos IAM en Cuenta B",
        "VPC Peering entre ambas cuentas",
        "Un bucket de S3 duplicado en Cuenta B",
        "Glue no soporta acceso cross-account"
      ],
      "answer": "Políticas de recursos (Resource-based policies) en el Catálogo y permisos IAM en Cuenta B",
      "hint": "AWS Lake Formation simplifica este proceso mediante 'Data Catalog settings'.",
      "explanation": "El acceso cross-account al Catálogo de Datos de Glue requiere permitir el acceso en la política del catálogo (Cuenta A) y otorgar los permisos correspondientes al rol de ejecución en la Cuenta B."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "¿Cuál es la diferencia fundamental entre un catálogo de datos técnico (como AWS Glue) y uno de negocio (como Amazon DataZone)?",
      "options": [
        "El técnico se enfoca en esquemas y tipos; el de negocio en gobierno, glosarios y descubrimiento por usuarios no técnicos",
        "El técnico es de pago y el de negocio es gratuito",
        "El técnico solo funciona con S3",
        "Son exactamente lo mismo con diferentes nombres"
      ],
      "answer": "El técnico se enfoca en esquemas y tipos; el de negocio en gobierno, glosarios y descubrimiento por usuarios no técnicos",
      "hint": "Piensa en quién es el usuario final: un pipeline de código o un analista de negocio.",
      "explanation": "Mientras Glue gestiona el 'cómo' se leen los datos físicamente (metadatos técnicos), servicios como DataZone gestionan el 'qué' significan los datos para la empresa y quién tiene permiso para verlos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Estás utilizando AWS Glue para catalogar archivos JSON complejos. ¿Qué característica de Glue permite definir reglas personalizadas para procesar formatos que los clasificadores estándar no reconocen?",
      "options": [
        "Custom Classifiers (Grok, JSON path o XML tag)",
        "Glue Jobs",
        "S3 Select",
        "Blueprints"
      ],
      "answer": "Custom Classifiers (Grok, JSON path o XML tag)",
      "hint": "Permiten 'enseñar' al Crawler cómo leer estructuras de datos específicas.",
      "explanation": "Los clasificadores personalizados permiten al Crawler entender archivos que no siguen esquemas estándar, usando patrones Grok o rutas JSON para extraer los metadatos correctamente."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-2",
      "question": "Para mejorar el rendimiento de un Crawler que escanea buckets de S3 con millones de archivos, ¿qué configuración de escaneo se recomienda para reducir el tiempo y costo?",
      "options": [
        "Use S3 event notifications (Incremental crawls)",
        "Scan all folders every time",
        "Increase crawler memory to 128GB",
        "Convert files to TXT first"
      ],
      "answer": "Use S3 event notifications (Incremental crawls)",
      "hint": "Permite al Crawler procesar solo los archivos que han cambiado o se han añadido recientemente.",
      "explanation": "Los crawlers incrementales basados en notificaciones de eventos de S3 evitan el escaneo completo del bucket, enfocándose solo en las deltas (cambios), lo que ahorra tiempo y costos significativos en datasets grandes."
    },
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "¿Cuál es la forma más eficiente y segura de cargar múltiples archivos de datos desde Amazon S3 a Amazon Redshift asegurando que solo se carguen los archivos correctos?",
  "options": [
    "Usar el comando COPY con un archivo manifest (manifiesto) en formato JSON.",
    "Realizar múltiples sentencias INSERT individuales para cada archivo.",
    "Utilizar AWS Lambda para leer cada archivo y enviarlo a Redshift.",
    "Sincronizar el bucket de S3 con el almacenamiento local del nodo líder de Redshift."
  ],
  "answer": "Usar el comando COPY con un archivo manifest (manifiesto) en formato JSON.",
  "hint": "Permite especificar explícitamente la lista de archivos para evitar cargar datos no deseados.",
  "explanation": "El uso de un archivo manifest con el comando COPY es la mejor práctica de AWS para garantizar que el clúster cargue solo los archivos necesarios, evitando la duplicación o la carga de archivos temporales que residan en el mismo prefijo de S3."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "Una empresa requiere mover datos de acceso poco frecuente de S3 Standard a una clase de almacenamiento más económica, pero necesita que los datos estén disponibles en milisegundos cuando se soliciten. ¿Qué transición de ciclo de vida es la adecuada?",
  "options": [
    "Transición a S3 Glacier Flexible Retrieval.",
    "Transición a S3 Glacier Instant Retrieval.",
    "Transición a S3 Glacier Deep Archive.",
    "Transición a S3 Standard-IA después de 180 días."
  ],
  "answer": "Transición a S3 Glacier Instant Retrieval.",
  "hint": "Esta clase de almacenamiento es la única de 'archivo' que ofrece latencia de milisegundos.",
  "explanation": "S3 Glacier Instant Retrieval está diseñado para datos que se acceden rara vez pero requieren recuperación inmediata, ofreciendo el mismo rendimiento de milisegundos que S3 Standard pero a un costo de almacenamiento menor."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "Se desea automatizar la eliminación de versiones antiguas (no actuales) de objetos en un bucket de S3 para reducir costos. ¿Qué configuración de S3 Lifecycle debe aplicarse?",
  "options": [
    "Expiration para la versión actual del objeto.",
    "Transition a S3 Glacier para objetos con más de 30 días.",
    "NoncurrentVersionExpiration para eliminar versiones después de un tiempo definido.",
    "Habilitar MFA Delete en la política del bucket."
  ],
  "answer": "NoncurrentVersionExpiration para eliminar versiones después de un tiempo definido.",
  "hint": "Distingue entre el objeto activo y sus versiones históricas en buckets con versionado.",
  "explanation": "La acción NoncurrentVersionExpiration permite definir cuántos días deben pasar antes de que las versiones anteriores de un objeto sean eliminadas permanentemente, manteniendo la versión actual intacta."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "En Amazon DynamoDB, ¿cuál es el requisito principal para que la función Time to Live (TTL) elimine automáticamente un elemento de la tabla?",
  "options": [
    "El atributo TTL debe estar en formato ISO 8601.",
    "El elemento debe ser marcado manualmente para borrado por un flujo de DynamoDB Streams.",
    "El atributo TTL debe ser de tipo 'Number' y contener un timestamp en formato Unix (segundos).",
    "La tabla debe estar en modo de capacidad bajo demanda (On-demand)."
  ],
  "answer": "El atributo TTL debe ser de tipo 'Number' y contener un timestamp en formato Unix (segundos).",
  "hint": "DynamoDB compara este valor numérico con el tiempo actual para ejecutar el borrado.",
  "explanation": "TTL requiere un atributo de tipo número que represente la fecha de expiración en formato de tiempo Unix (segundos). DynamoDB elimina automáticamente el ítem una vez que el tiempo actual supera ese valor."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "Para cumplir con una regulación financiera estricta, los registros deben ser inalterables y no pueden ser borrados por ningún usuario (incluido el root) durante 7 años. ¿Qué configuración de S3 cumple este requisito?",
  "options": [
    "S3 Object Lock en modo Governance.",
    "S3 Object Lock en modo Compliance.",
    "S3 Versioning con políticas de denegación de IAM.",
    "Cifrado de servidor con claves administradas por el cliente (SSE-KMS)."
  ],
  "answer": "S3 Object Lock en modo Compliance.",
  "hint": "Este modo es el más restrictivo y bloquea incluso a los usuarios con máximos privilegios.",
  "explanation": "En el modo Compliance (Cumplimiento), un objeto protegido no puede ser borrado ni sobrescrito por ningún usuario, ni siquiera por la cuenta raíz, garantizando la integridad de los datos para fines legales."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "Deseas exportar el contenido de una tabla de Amazon Redshift a S3 de forma que los datos se dividan en múltiples archivos para aprovechar el procesamiento paralelo en herramientas posteriores. ¿Qué comando y opción debes usar?",
  "options": [
    "COPY con la opción MANIFEST.",
    "SELECT INTO S3.",
    "UNLOAD con la opción PARALLEL ON.",
    "UNLOAD con la opción SINGLE_FILE."
  ],
  "answer": "UNLOAD con la opción PARALLEL ON.",
  "hint": "Es el comportamiento por defecto de Redshift para maximizar el rendimiento de escritura.",
  "explanation": "El comando UNLOAD escribe los resultados de una consulta en S3 en múltiples archivos de forma paralela (uno por cada slice de los nodos de computación), lo cual es óptimo para el rendimiento."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "¿Cómo se puede proteger un bucket de S3 contra eliminaciones accidentales de objetos completos cuando el Control de Versiones está habilitado?",
  "options": [
    "Habilitar la característica MFA Delete.",
    "Usar S3 Intelligent-Tiering.",
    "Configurar una política de Ciclo de Vida con la acción Transition.",
    "Habilitar el cifrado de bucket por defecto."
  ],
  "answer": "Habilitar la característica MFA Delete.",
  "hint": "Requiere una autenticación física o digital adicional para operaciones destructivas.",
  "explanation": "MFA Delete añade una capa de seguridad que requiere autenticación multifactor para cambiar el estado de versionado del bucket o eliminar permanentemente una versión de un objeto."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "Una aplicación requiere que los datos almacenados en S3 en la región 'us-east-1' estén disponibles automáticamente en 'us-west-2' para garantizar la continuidad del negocio. ¿Cuál es la solución más eficiente?",
  "options": [
    "Crear un script de AWS CLI programado con EventBridge.",
    "Habilitar S3 Cross-Region Replication (CRR).",
    "Utilizar AWS Snowball para mover los datos físicamente.",
    "Configurar S3 Same-Region Replication (SRR)."
  ],
  "answer": "Habilitar S3 Cross-Region Replication (CRR).",
  "hint": "Es una función nativa que replica objetos de forma asíncrona entre diferentes regiones de AWS.",
  "explanation": "S3 Cross-Region Replication (CRR) automatiza la copia de objetos entre buckets de diferentes regiones, proporcionando alta disponibilidad y resiliencia ante fallos regionales."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "Tienes un conjunto de datos en S3 con patrones de acceso impredecibles y deseas optimizar los costos de almacenamiento sin realizar análisis manuales. ¿Qué clase de almacenamiento deberías elegir?",
  "options": [
    "S3 Standard-IA.",
    "S3 One Zone-IA.",
    "S3 Intelligent-Tiering.",
    "S3 Glacier Deep Archive."
  ],
  "answer": "S3 Intelligent-Tiering.",
  "hint": "Mueve objetos entre niveles de acceso automático basándose en el uso real.",
  "explanation": "S3 Intelligent-Tiering monitorea los patrones de acceso y mueve automáticamente los objetos entre un nivel de acceso frecuente y otro de acceso poco frecuente para maximizar el ahorro sin impacto en el rendimiento."
},
{
  "subjectId": "dea",
  "topicId": "dea-2",
  "question": "Al usar el comando COPY en Amazon Redshift desde S3, ¿cuál es el beneficio de comprimir los archivos de origen (por ejemplo, con GZIP)?",
  "options": [
    "Aumenta la latencia de carga debido al tiempo de descompresión.",
    "Reduce el ancho de banda necesario y suele acelerar el proceso de carga total.",
    "Es obligatorio para que Redshift pueda leer archivos CSV.",
    "Permite que el comando COPY ignore el archivo manifest."
  ],
  "answer": "Reduce el ancho de banda necesario y suele acelerar el proceso de carga total.",
  "hint": "Menos datos transferidos a través de la red suelen significar una carga más rápida.",
  "explanation": "Cargar archivos comprimidos desde S3 reduce la cantidad de datos transferidos por la red, lo que generalmente acelera la operación de carga a pesar del ligero uso de CPU para la descompresión en los nodos de Redshift."
},

{
"subjectId": "dea",
"topicId": "dea-2",
"question": "Un ingeniero de datos está diseñando un esquema en Amazon Redshift y necesita optimizar una tabla de dimensiones pequeña que se une frecuentemente con varias tablas de hechos grandes. ¿Qué estilo de distribución debería elegir para minimizar el movimiento de datos (data shuffle)?",
"options": [
"DISTSTYLE KEY",
"DISTSTYLE EVEN",
"DISTSTYLE ALL",
"DISTSTYLE AUTO"
],
"answer": "DISTSTYLE ALL",
"hint": "Este estilo copia la tabla completa en cada nodo del clúster.",
"explanation": "DISTSTYLE ALL distribuye una copia de la tabla completa a cada nodo computacional. Es ideal para tablas de dimensiones pequeñas (proporcionalmente) porque elimina la necesidad de redistribuir datos durante los JOINs con tablas de hechos."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "Estás migrando una base de datos heredada de Microsoft SQL Server a Amazon Redshift. El esquema de origen utiliza procedimientos almacenados y vistas complejas que no son compatibles directamente. ¿Qué herramienta de AWS es la más adecuada para automatizar la conversión del esquema?",
"options": [
"AWS DataSync",
"AWS Schema Conversion Tool (AWS SCT)",
"AWS Glue Elastic Views",
"Amazon Redshift Spectrum"
],
"answer": "AWS Schema Conversion Tool (AWS SCT)",
"hint": "Es una aplicación de escritorio diseñada específicamente para convertir esquemas de bases de datos heterogéneas.",
"explanation": "AWS SCT automatiza la conversión de esquemas de bases de datos comerciales (como SQL Server u Oracle) a motores compatibles con AWS (como Redshift o Aurora), manejando tipos de datos y objetos de base de datos."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "Una aplicación de IA generativa utiliza Amazon Bedrock para responder preguntas basadas en documentos privados. ¿Cuál es el proceso necesario para transformar estos documentos en un formato que permita una búsqueda de similitud semántica eficiente?",
"options": [
"Normalización de bases de datos relacionales",
"Vectorización (Embeddings) almacenada en una base de datos vectorial",
"Tokenización simple en archivos CSV",
"Compresión mediante algoritmos GZIP"
],
"answer": "Vectorización (Embeddings) almacenada en una base de datos vectorial",
"hint": "Convierte texto en representaciones numéricas que capturan el significado.",
"explanation": "La vectorización convierte el contenido en 'embeddings' numéricos. Estos se almacenan en una base de datos vectorial (como Knowledge Bases para Amazon Bedrock) para realizar búsquedas de vecinos más cercanos durante el proceso de RAG."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "En Amazon DynamoDB, necesitas realizar consultas basadas en un atributo que no forma parte de la Clave de Partición original, manteniendo la flexibilidad de consultar a través de toda la tabla. ¿Qué estrategia de indexación es la correcta?",
"options": [
"Local Secondary Index (LSI)",
"Global Secondary Index (GSI)",
"Primary Sort Key",
"Scan con Filter Expressions"
],
"answer": "Global Secondary Index (GSI)",
"hint": "Este índice puede tener una clave de partición y de ordenación distinta a la de la tabla base.",
"explanation": "Un GSI permite realizar consultas sobre cualquier atributo de la tabla utilizando una clave de partición diferente a la original. A diferencia del LSI, el GSI no está limitado por el tamaño del 'item collection' y puede crearse después de la tabla."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "Un equipo de Data Science necesita rastrear el linaje de los datos (data lineage) para entender qué transformaciones y conjuntos de datos se utilizaron para entrenar un modelo específico. ¿Qué servicio de AWS facilita este seguimiento?",
"options": [
"AWS CloudTrail",
"Amazon SageMaker ML Lineage Tracking",
"AWS Config",
"Amazon Redshift Advisor"
],
"answer": "Amazon SageMaker ML Lineage Tracking",
"hint": "Crea y rastrea entidades como artefactos, asociaciones y contextos dentro del flujo de ML.",
"explanation": "SageMaker ML Lineage Tracking permite a los ingenieros de datos y científicos rastrear la procedencia de los modelos, vinculando datos de entrenamiento, algoritmos y modelos finales para fines de reproducibilidad y cumplimiento."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "Necesitas aplicar seguridad a nivel de fila y columna en un Data Lake basado en S3 para diferentes grupos de usuarios de Amazon Athena. ¿Qué servicio centraliza este control de acceso al catálogo de datos?",
"options": [
"IAM Policy Simulator",
"AWS Lake Formation",
"Amazon S3 Access Points",
"AWS Glue Resource Policies"
],
"answer": "AWS Lake Formation",
"hint": "Permite definir políticas de 'Data Cells Filter'.",
"explanation": "AWS Lake Formation proporciona un control de grano fino (fine-grained access control) permitiendo otorgar permisos específicos sobre bases de datos, tablas, e incluso filas y columnas individuales para servicios como Athena y Redshift Spectrum."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "Amazon Redshift introdujo el tipo de datos SUPER. ¿Para qué caso de uso de evolución de esquema es especialmente útil este tipo de datos?",
"options": [
"Para almacenar archivos de audio de alta fidelidad",
"Para manejar datos semi-estructurados como JSON que pueden cambiar su esquema con el tiempo",
"Para aumentar el límite de almacenamiento de una columna de texto de 64KB a 1TB",
"Para encriptar datos sensibles automáticamente"
],
"answer": "Para manejar datos semi-estructurados como JSON que pueden cambiar su esquema con el tiempo",
"hint": "Permite almacenar documentos JSON de forma nativa en tablas relacionales.",
"explanation": "El tipo de datos SUPER permite a Redshift almacenar datos semi-estructurados (JSON). Esto facilita la evolución del esquema ya que los cambios en la estructura de los datos de origen no rompen la tabla, y se pueden consultar usando PartiQL."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "¿Cuál es la mejor práctica para elegir una Sort Key en Amazon Redshift cuando la mayoría de las consultas filtran los datos por un rango de fechas?",
"options": [
"Usar una Interleaved Sort Key sobre la columna de fecha",
"Usar una Compound Sort Key con la columna de fecha como el primer elemento",
"No definir Sort Key y confiar en la distribución EVEN",
"Definir todas las columnas como Sort Keys"
],
"answer": "Usar una Compound Sort Key con la columna de fecha como el primer elemento",
"hint": "El orden de las columnas en la clave importa para la eficiencia del filtrado.",
"explanation": "Una Compound Sort Key es más eficiente cuando las consultas incluyen filtros en el primer atributo de la clave (prefijo). Para rangos de fechas, colocar la fecha como primera columna permite al motor saltar bloques de datos irrelevantes (zone mapping)."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "Una empresa desea gestionar la evolución de los esquemas de sus mensajes en Amazon MSK y AWS Glue de forma que se garantice que los productores no envíen datos que los consumidores no puedan procesar. ¿Qué componente deberían usar?",
"options": [
"AWS Glue Schema Registry",
"Amazon EventBridge Schema Discovery",
"AWS Glue DataBrew",
"AWS Data Pipeline"
],
"answer": "AWS Glue Schema Registry",
"hint": "Valida la compatibilidad de esquemas en tiempo real para aplicaciones de streaming.",
"explanation": "AWS Glue Schema Registry permite centralizar y controlar la evolución de esquemas (Avro, JSON, Protobuf). Soporta modos de compatibilidad (Backward, Forward, Full) para asegurar que los cambios de esquema sean seguros para los consumidores."
},
{
"subjectId": "dea",
"topicId": "dea-2",
"question": "Al diseñar una tabla en Amazon Redshift, ¿qué algoritmo de compresión (encoding) es recomendado por AWS como el más versátil para la mayoría de los tipos de datos y ofrece un equilibrio óptimo entre rendimiento y reducción de espacio?",
"options": [
"BYTEDICT",
"LZO",
"ZSTD",
"DELTA"
],
"answer": "ZSTD",
"hint": "Es un algoritmo de alta relación de compresión que funciona bien con datos variados.",
"explanation": "ZSTD (Zstandard) es la recomendación general para la mayoría de las columnas en Redshift porque ofrece una excelente relación de compresión y un alto rendimiento de descompresión para diversos tipos de datos."
},

{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Una empresa necesita orquestar un pipeline de datos complejo que utiliza scripts de Python existentes basados en DAGs (Directed Acyclic Graphs). Prefieren una solución gestionada que sea compatible con la comunidad de código abierto. ¿Qué servicio es el más adecuado?",
"options": [
"AWS Step Functions",
"Amazon Managed Workflows for Apache Airflow (MWAA)",
"AWS Glue Workflows",
"AWS Lambda Destinations"
],
"answer": "Amazon Managed Workflows for Apache Airflow (MWAA)",
"hint": "Es la implementación gestionada de Apache Airflow en AWS.",
"explanation": "Amazon MWAA es ideal para orquestar flujos de trabajo utilizando Python y DAGs, permitiendo a los ingenieros de datos migrar sus pipelines de Airflow locales a la nube sin cambiar el código base."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Estás diseñando un flujo de trabajo en AWS Step Functions para procesar pagos. Si un paso falla debido a un error de red temporal, ¿qué característica de Step Functions deberías implementar para mejorar la resiliencia?",
"options": [
"Parallel State",
"Retry con Backoff exponencial",
"Wait State",
"S3 Event Notifications"
],
"answer": "Retry con Backoff exponencial",
"hint": "Permite reintentar automáticamente una tarea fallida con intervalos de tiempo crecientes.",
"explanation": "La política de 'Retry' en Step Functions permite manejar errores transitorios reintentando la ejecución de un estado específico, y el 'Backoff' evita saturar el servicio aumentando el tiempo entre intentos."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Un ingeniero de datos quiere procesar solo los datos nuevos que llegan a un bucket de S3 cada hora usando un job de AWS Glue. ¿Qué característica de Glue permite rastrear qué archivos ya han sido procesados?",
"options": [
"AWS Glue Data Catalog",
"Job Bookmarks",
"Dynamic Frames",
"Crawler Classifiers"
],
"answer": "Job Bookmarks",
"hint": "Mantiene información de estado para evitar el reprocesamiento de datos antiguos.",
"explanation": "Los Job Bookmarks de AWS Glue mantienen el estado del job y rastrean la información de origen procesada, lo que permite realizar extracciones incrementales (carga delta) de forma automática."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Necesitas ejecutar una consulta SQL ad-hoc sobre archivos Parquet almacenados en Amazon S3 sin cargar los datos en una base de datos. ¿Qué servicio proporciona esta capacidad de forma serverless y escalable?",
"options": [
"Amazon Redshift Provisioned",
"Amazon Athena",
"Amazon RDS for PostgreSQL",
"AWS Glue DataBrew"
],
"answer": "Amazon Athena",
"hint": "Usa Presto bajo el capó para consultar datos directamente en S3.",
"explanation": "Amazon Athena es un servicio de consultas interactivo que permite analizar datos directamente en Amazon S3 utilizando SQL estándar, pagando solo por las consultas ejecutadas."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Una aplicación web necesita recuperar datos de una tabla de DynamoDB. ¿Cuál es la forma recomendada para que el código de la aplicación (en Python) interactúe con el servicio de AWS?",
"options": [
"Enviar solicitudes HTTP manuales mediante la librería 'requests'",
"Utilizar el SDK de AWS para Python (Boto3)",
"Usar comandos SSH directos a los servidores de DynamoDB",
"Configurar un túnel VPN hacia el endpoint de DynamoDB"
],
"answer": "Utilizar el SDK de AWS para Python (Boto3)",
"hint": "Es la librería oficial de AWS para desarrolladores Python.",
"explanation": "Boto3 es el SDK oficial de AWS que facilita la integración de aplicaciones Python con servicios de AWS, manejando la autenticación, reintentos y serialización de datos automáticamente."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Se requiere transformar un conjunto de datos masivo utilizando Apache Spark, pero el equipo no quiere administrar la infraestructura del clúster ni los nodos. ¿Qué opción de Amazon EMR es la más adecuada?",
"options": [
"EMR on EC2",
"EMR Serverless",
"EMR on EKS",
"EMR with Dedicated Instances"
],
"answer": "EMR Serverless",
"hint": "Elimina la necesidad de configurar, optimizar o escalar clústeres manualmente.",
"explanation": "EMR Serverless es una opción de despliegue que permite ejecutar aplicaciones de Big Data (Spark, Hive) sin gestionar clústeres, escalando automáticamente los recursos según la carga de trabajo."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Un analista de datos necesita limpiar y normalizar datos de clientes de diversas fuentes sin escribir código. ¿Qué herramienta visual de preparación de datos debería utilizar?",
"options": [
"AWS Glue DataBrew",
"AWS Step Functions Studio",
"Amazon Redshift Query Editor v2",
"AWS Lambda Console"
],
"answer": "AWS Glue DataBrew",
"hint": "Ofrece más de 250 transformaciones preconstruidas en una interfaz visual.",
"explanation": "AWS Glue DataBrew es una herramienta visual de preparación de datos que permite a los usuarios limpiar y normalizar datos sin escribir código, automatizando tareas comunes de ETL."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Quieres ejecutar una función de AWS Lambda cada vez que se sube un nuevo archivo .json a un prefijo específico en un bucket de S3. ¿Qué servicio actúa como el disparador (trigger)?",
"options": [
"Amazon S3 Event Notifications",
"Amazon Route 53",
"AWS Glue Crawler",
"Amazon CloudFront"
],
"answer": "Amazon S3 Event Notifications",
"hint": "Detecta cambios en el bucket y envía un mensaje al servicio de destino.",
"explanation": "Las notificaciones de eventos de S3 pueden configurarse para invocar una función Lambda cuando ocurren eventos específicos, como la creación de un objeto (s3:ObjectCreated:*)."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Una organización utiliza Amazon EventBridge para programar la ejecución de una tarea de limpieza de base de datos todos los lunes a las 8:00 AM. ¿Qué tipo de regla de EventBridge se está utilizando?",
"options": [
"Event-driven rule",
"Schedule rule (Cron or Rate)",
"Streaming rule",
"Replication rule"
],
"answer": "Schedule rule (Cron or Rate)",
"hint": "Funciona de manera similar a un 'cron job' tradicional.",
"explanation": "EventBridge permite crear reglas basadas en el tiempo (programadas) utilizando expresiones cron o de tasa (rate) para ejecutar tareas de forma recurrente."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Al solucionar problemas de un flujo de trabajo fallido en Amazon MWAA, ¿dónde deberías buscar primero para ver los mensajes de error detallados de las tareas de Airflow?",
"options": [
"S3 Bucket logs",
"Amazon CloudWatch Logs",
"AWS CloudTrail",
"VPC Flow Logs"
],
"answer": "Amazon CloudWatch Logs",
"hint": "Centraliza los logs de ejecución, planificador y trabajadores de MWAA.",
"explanation": "Amazon MWAA envía los logs de Apache Airflow (DAG processing, Task logs, Scheduler logs) a CloudWatch Logs, lo que permite depurar errores en la lógica de los scripts."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "¿Cuál es el tiempo máximo de ejecución (timeout) permitido para una función de AWS Lambda destinada al procesamiento de datos?",
"options": [
"5 minutos",
"15 minutos",
"30 minutos",
"1 hora"
],
"answer": "15 minutos",
"hint": "Es una limitación técnica importante para procesos de larga duración.",
"explanation": "Las funciones Lambda tienen un límite de tiempo de ejecución de 900 segundos (15 minutos). Si un proceso requiere más tiempo, se debe considerar AWS Fargate o AWS Glue."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Un ingeniero de datos necesita interactuar con Amazon Redshift desde una aplicación serverless sin mantener conexiones JDBC/ODBC persistentes. ¿Qué método es el más eficiente?",
"options": [
"Amazon Redshift Data API",
"SSH Tunneling",
"Direct SQL Injection",
"AWS Data Pipeline"
],
"answer": "Amazon Redshift Data API",
"hint": "Permite ejecutar consultas SQL mediante llamadas a la API de AWS.",
"explanation": "La Redshift Data API elimina la necesidad de gestionar controladores y conexiones de base de datos complejas, permitiendo ejecutar consultas SQL de forma asíncrona mediante llamadas HTTP."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "En AWS Step Functions, ¿cuál es la principal diferencia entre un 'Standard Workflow' y un 'Express Workflow' para el procesamiento de eventos?",
"options": [
"Los Standard Workflows son más baratos para volúmenes altos.",
"Los Express Workflows pueden ejecutarse por hasta un año.",
"Los Express Workflows están diseñados para ejecuciones de alta velocidad y corta duración (menos de 5 min).",
"Los Standard Workflows no guardan el historial de ejecución."
],
"answer": "Los Express Workflows están diseñados para ejecuciones de alta velocidad y corta duración (menos de 5 min).",
"hint": "Ideales para procesamiento de eventos de IoT o ingesta masiva.",
"explanation": "Los Express Workflows son ideales para cargas de trabajo de alto volumen y corta duración, ofreciendo un costo menor pero con una duración máxima de 5 minutos, a diferencia del año que permiten los Standard."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Estás utilizando Amazon Athena para consultar logs y notas que el rendimiento es lento y los costos aumentan. ¿Qué técnica de optimización de datos en S3 ayudaría más a reducir el escaneo de datos?",
"options": [
"Convertir los archivos a formato CSV",
"Particionar los datos por columnas de filtro comunes (ej. año/mes/día)",
"Aumentar el límite de concurrencia de Athena",
"Usar S3 Standard en lugar de S3 Intelligent-Tiering"
],
"answer": "Particionar los datos por columnas de filtro comunes (ej. año/mes/día)",
"hint": "Permite que Athena omita carpetas de datos que no coinciden con la consulta.",
"explanation": "La partición de datos divide la tabla en partes lógicas basadas en valores de columnas. Esto permite que Athena escanee solo los datos relevantes, mejorando el rendimiento y reduciendo costos."
},
{
"subjectId": "dea",
"topicId": "dea-3",
"question": "Para integrar dos microservicios donde uno produce eventos en S3 y otro debe procesarlos en una cola SQS con transformaciones intermedias simples, ¿qué característica de EventBridge simplifica esta conexión punto a punto?",
"options": [
"EventBridge Schema Registry",
"EventBridge Pipes",
"EventBridge Archive",
"EventBridge Replay"
],
"answer": "EventBridge Pipes",
"hint": "Crea integraciones directas entre productores y consumidores con filtrado y enriquecimiento opcional.",
"explanation": "EventBridge Pipes proporciona una forma sencilla y consistente de integrar productores y consumidores de eventos, permitiendo filtrar y transformar los datos antes de que lleguen al destino."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Un analista de datos necesita crear dashboards interactivos en Amazon QuickSight que se actualicen rápidamente sin sobrecargar la base de datos de origen durante las horas pico. ¿Qué motor de memoria interna debería utilizar?",
  "options": [
    "Amazon RDS Read Replicas",
    "SPICE (Super-fast, Parallel, In-memory Calculation Engine)",
    "Amazon Redshift Spectrum",
    "Amazon ElastiCache"
  ],
  "answer": "SPICE (Super-fast, Parallel, In-memory Calculation Engine)",
  "hint": "Es el motor de aceleración nativo de QuickSight.",
  "explanation": "SPICE almacena los datos en una capa de memoria optimizada, lo que permite realizar cálculos complejos y visualizaciones rápidas sin realizar consultas constantes a la fuente de datos original."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Estás utilizando Amazon Athena para analizar logs de acceso. Necesitas calcular la media móvil (rolling average) de las ventas de los últimos 7 días para cada producto. ¿Qué técnica de SQL es la más adecuada?",
  "options": [
    "Un JOIN recursivo sobre la misma tabla",
    "Una función de ventana (Window Function) con ROWS BETWEEN",
    "Una cláusula GROUP BY con la función AVG()",
    "Un filtro WHERE con una subconsulta escalar"
  ],
  "answer": "Una función de ventana (Window Function) con ROWS BETWEEN",
  "hint": "Permite definir un marco de filas relativo a la fila actual.",
  "explanation": "Las funciones de ventana como AVG(...) OVER (PARTITION BY product ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) son ideales para calcular promedios móviles sin agrupar todas las filas en un solo resultado."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Un ingeniero de datos debe decidir entre usar Amazon Redshift Provisioned (con nodos RA3) o Amazon Athena para un proyecto. ¿En qué escenario es preferible usar Amazon Athena?",
  "options": [
    "Cuando se requiere un rendimiento de milisegundos para consultas OLTP",
    "Para cargas de trabajo constantes de alta intensidad con miles de usuarios concurrentes",
    "Para consultas ad-hoc e intermitentes sobre datos almacenados en S3 con un modelo de pago por consulta",
    "Cuando es necesario realizar actualizaciones (UPDATE) y eliminaciones (DELETE) frecuentes a nivel de fila"
  ],
  "answer": "Para consultas ad-hoc e intermitentes sobre datos almacenados en S3 con un modelo de pago por consulta",
  "hint": "Athena es serverless y no requiere administración de infraestructura.",
  "explanation": "Athena es ideal para análisis exploratorios o consultas esporádicas donde no se justifica el costo de mantener un clúster encendido las 24 horas, ya que solo se paga por la cantidad de datos escaneados."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Necesitas limpiar un conjunto de datos en S3 que contiene valores nulos, formatos de fecha inconsistentes y valores atípicos (outliers) antes de entrenar un modelo. Prefieres una interfaz visual tipo 'point-and-click' en lugar de escribir código Spark. ¿Qué herramienta es la mejor opción?",
  "options": [
    "Amazon Redshift Query Editor",
    "AWS Glue DataBrew",
    "Amazon Athena Federated Query",
    "AWS Lambda con Boto3"
  ],
  "answer": "AWS Glue DataBrew",
  "hint": "Ofrece más de 250 transformaciones predefinidas de forma visual.",
  "explanation": "AWS Glue DataBrew permite a los usuarios limpiar y normalizar datos visualmente, además de generar perfiles de datos (data profiling) para identificar problemas de calidad de forma automática."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Para mejorar el rendimiento de consultas repetitivas que involucran JOINs complejos entre tablas de hechos masivas en Amazon Redshift, ¿qué objeto de base de datos se recomienda crear?",
  "options": [
    "Una vista estándar (Standard View)",
    "Un índice secundario (Secondary Index)",
    "Una vista materializada (Materialized View)",
    "Una clave primaria con restricción ENFORCED"
  ],
  "answer": "Una vista materializada (Materialized View)",
  "hint": "Almacena físicamente el resultado de la consulta para acceso rápido.",
  "explanation": "Las vistas materializadas en Redshift pre-calculan y almacenan los resultados de consultas complejas, lo que acelera significativamente el tiempo de respuesta en comparación con las vistas normales que ejecutan el SQL subyacente cada vez."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Quieres explorar un dataset de varios terabytes en S3 utilizando el ecosistema de Apache Spark, pero deseas hacerlo de forma interactiva desde la consola de Amazon Athena sin configurar clústeres de EMR. ¿Qué característica habilita esto?",
  "options": [
    "Athena Provisioned Capacity",
    "Athena Notebooks (PySpark engine)",
    "Athena Presto Connector",
    "Athena Workgroups v2"
  ],
  "answer": "Athena Notebooks (PySpark engine)",
  "hint": "Permite ejecutar código Spark en un entorno serverless gestionado por Athena.",
  "explanation": "Amazon Athena admite cuadernos (notebooks) que ejecutan Apache Spark, permitiendo realizar análisis de datos complejos y preparación de datos utilizando Python sin la gestión de infraestructura de un clúster tradicional."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Una empresa desea aplicar Seguridad a Nivel de Fila (RLS) en sus reportes de Amazon QuickSight para que los gerentes de ventas solo vean los datos correspondientes a su región. ¿Cómo se implementa esto?",
  "options": [
    "Creando un bucket de S3 diferente para cada gerente",
    "Definiendo un 'Dataset rule' en QuickSight con un archivo de mapeo de usuarios y valores",
    "Cifrando los datos con diferentes claves de KMS",
    "Usando etiquetas de IAM en el clúster de Redshift"
  ],
  "answer": "Definiendo un 'Dataset rule' en QuickSight con un archivo de mapeo de usuarios y valores",
  "hint": "Es una función nativa de QuickSight para filtrar datos basados en la identidad del usuario.",
  "explanation": "La Row-Level Security (RLS) en QuickSight se configura cargando un archivo o tabla de reglas que asocia el nombre de usuario o grupo con los valores de los filtros permitidos para el dataset."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "En una consulta de Amazon Redshift, necesitas transformar una tabla que tiene las ventas por mes en columnas (Jan, Feb, Mar...) a un formato donde los meses aparezcan en filas. ¿Qué operación de análisis de datos estás realizando?",
  "options": [
    "Aggregation",
    "Pivoting",
    "Unpivoting",
    "Rolling Join"
  ],
  "answer": "Unpivoting",
  "hint": "Es el proceso de normalizar columnas en filas para análisis de series temporales.",
  "explanation": "El Unpivoting convierte columnas en filas. En Redshift, esto se suele lograr mediante el uso de la cláusula UNPIVOT (o múltiples UNION ALL en versiones antiguas) para facilitar el análisis agregado por dimensiones temporales."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Tienes un proceso de ingesta de datos donde algunos archivos llegan con errores de formato. Quieres ejecutar un script de validación pequeño y rápido en cuanto el archivo llega a S3, y si falla, moverlo a una carpeta de 'cuarentena'. ¿Qué servicio es el más costo-eficiente para esta tarea de limpieza?",
  "options": [
    "Amazon EMR clúster persistente",
    "AWS Glue ETL Jobs",
    "AWS Lambda",
    "Amazon Redshift Spectrum"
  ],
  "answer": "AWS Lambda",
  "hint": "Es ideal para tareas cortas y disparadas por eventos de S3.",
  "explanation": "AWS Lambda es la opción más eficiente para tareas de validación y limpieza ligera basadas en eventos, ya que no tiene costos fijos y se escala automáticamente por cada archivo que llega a S3."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Deseas generar un reporte que muestre el subtotal de ventas por categoría, por subcategoría y el gran total general en una sola consulta SQL. ¿Qué extensión de GROUP BY deberías utilizar?",
  "options": [
    "GROUP BY CUBE",
    "GROUP BY ROLLUP",
    "GROUP BY MULTI",
    "GROUP BY DISTINCT"
  ],
  "answer": "GROUP BY ROLLUP",
  "hint": "Crea subtotales jerárquicos desde el nivel más detallado al total general.",
  "explanation": "ROLLUP genera niveles de agregación jerárquicos. Si agrupas por (categoría, subcategoría), ROLLUP devolverá ventas por categoría/subcategoría, ventas por categoría y el total general."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "¿Cuál es una ventaja crítica de utilizar Amazon SageMaker Data Wrangler en lugar de limpiar datos manualmente en un Notebook de Jupyter?",
  "options": [
    "Permite exportar flujos de limpieza directamente a pipelines de producción (SageMaker Pipelines)",
    "Es el único servicio que puede leer archivos CSV desde S3",
    "Elimina la necesidad de tener una cuenta de AWS para procesar datos",
    "Reduce automáticamente el costo de almacenamiento de S3 en un 50%"
  ],
  "answer": "Permite exportar flujos de limpieza directamente a pipelines de producción (SageMaker Pipelines)",
  "hint": "Facilita la transición de la experimentación a la automatización de ML.",
  "explanation": "Data Wrangler acelera la preparación de datos para ML permitiendo exportar las transformaciones visuales como código o pasos integrables en flujos de trabajo automatizados de MLOps."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Al trabajar con Amazon Athena, ¿cuál es el beneficio de crear una Vista (View) sobre una tabla de S3 en lugar de dar acceso directo a la tabla a los analistas?",
  "options": [
    "La vista cifra automáticamente los datos en tránsito",
    "Permite ocultar columnas sensibles y simplificar uniones complejas sin duplicar datos físicos",
    "Las vistas siempre se ejecutan más rápido que las tablas base",
    "Las vistas eliminan el costo por GB escaneado de Athena"
  ],
  "answer": "Permite ocultar columnas sensibles y simplificar uniones complejas sin duplicar datos físicos",
  "hint": "Actúa como una capa de abstracción lógica y seguridad.",
  "explanation": "Las vistas permiten exponer solo los datos necesarios a los usuarios finales, abstrayendo la complejidad de las consultas subyacentes y proporcionando una capa de seguridad lógica sobre el esquema de datos."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Una organización tiene una carga de trabajo de análisis masiva que se ejecuta de lunes a viernes de 9 AM a 5 PM. Fuera de ese horario, la base de datos está inactiva. ¿Qué característica de Amazon Redshift optimizaría mejor el costo?",
  "options": [
    "Redshift Reserved Instances",
    "Redshift Concurrency Scaling",
    "Redshift Serverless con pausa automática",
    "Habilitar el cifrado AES-256"
  ],
  "answer": "Redshift Serverless con pausa automática",
  "hint": "Escala la capacidad según la demanda y no cobra por tiempo de inactividad.",
  "explanation": "Redshift Serverless es ideal para cargas de trabajo variables o con horarios definidos, ya que escala automáticamente y deja de facturar (excepto el almacenamiento) cuando no hay consultas activas."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Estás analizando la calidad de los datos en AWS Glue DataBrew. ¿Qué métrica de 'Data Profiling' te ayudaría a identificar si una columna de identificación (ID) tiene registros duplicados?",
  "options": [
    "Skewness (Sesgo)",
    "Uniqueness (Unicidad)",
    "Entropy (Entropía)",
    "Standard Deviation (Desviación estándar)"
  ],
  "answer": "Uniqueness (Unicidad)",
  "hint": "Mide el porcentaje de valores distintos en una columna.",
  "explanation": "La métrica de Uniqueness indica qué porcentaje de los valores son únicos. Si el valor es menor al 100% en una columna que debería ser una clave primaria, indica la presencia de duplicados."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "¿Cuál es la principal diferencia entre las funciones de agregación (como SUM) y las funciones de ventana (como SUM OVER) en una consulta SQL de análisis?",
  "options": [
    "Las funciones de agregación requieren el uso de Python dentro de SQL",
    "Las funciones de agregación reducen el número de filas devueltas, mientras que las de ventana mantienen el número original de filas",
    "Las funciones de ventana solo funcionan en Amazon Redshift, no en Athena",
    "Las funciones de agregación no pueden usarse con números decimales"
  ],
  "answer": "Las funciones de agregación reducen el número de filas devueltas, mientras que las de ventana mantienen el número original de filas",
  "hint": "La agregación colapsa grupos; la ventana añade información a cada fila individual.",
  "explanation": "GROUP BY colapsa varias filas en una fila resumida. Las funciones de ventana realizan el cálculo sobre un conjunto de filas pero devuelven el resultado para cada fila individual de la tabla original."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Un ingeniero de datos observa que un job de AWS Glue falla intermitentemente. ¿Qué característica de AWS Glue debería habilitar para ver los logs en tiempo real en Amazon CloudWatch y depurar el estado de las transformaciones mientras se ejecutan?",
  "options": [
    "AWS Glue DataBrew Recipes",
    "Continuous Logging (Registro continuo)",
    "Job Bookmarks",
    "AWS Glue Schema Registry"
  ],
  "answer": "Continuous Logging (Registro continuo)",
  "hint": "Permite enviar logs a CloudWatch antes de que el job termine.",
  "explanation": "El registro continuo en AWS Glue permite enviar logs de script de Apache Spark a CloudWatch de forma casi instantánea, facilitando la identificación de fallos sin esperar a que el job finalice o falle por completo."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "¿Qué servicio de AWS es el más adecuado para realizar un seguimiento de todas las llamadas a la API realizadas por los usuarios, roles o servicios dentro de una infraestructura de datos para auditorías de seguridad y cumplimiento?",
  "options": [
    "Amazon CloudWatch Metrics",
    "AWS CloudTrail",
    "Amazon VPC Flow Logs",
    "AWS Trusted Advisor"
  ],
  "answer": "AWS CloudTrail",
  "hint": "Registra el 'quién, qué y cuándo' de las acciones en la cuenta de AWS.",
  "explanation": "AWS CloudTrail registra el historial de llamadas a la API de AWS para tu cuenta, lo que permite realizar auditorías, análisis de seguridad y seguimiento de cambios en los recursos de datos."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Un pipeline de datos en Amazon EMR está experimentando una degradación de rendimiento. Necesitas analizar los logs de las aplicaciones Big Data (como Spark o Hive) que están almacenados en S3 de forma masiva. ¿Qué combinación de servicios es la más eficiente para esta tarea de análisis?",
  "options": [
    "Amazon Athena y Amazon S3",
    "AWS CloudTrail y Amazon CloudWatch",
    "Amazon QuickSight y AWS DataSync",
    "AWS AppConfig y AWS Lambda"
  ],
  "answer": "Amazon Athena y Amazon S3",
  "hint": "Permite usar SQL estándar sobre logs almacenados como archivos.",
  "explanation": "Amazon Athena puede consultar directamente los logs estructurados o semi-estructurados almacenados en S3, lo que lo hace ideal para analizar grandes volúmenes de logs de EMR para encontrar cuellos de botella."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Necesitas configurar una alerta automática para que el equipo de operaciones reciba un correo electrónico inmediatamente después de que una función Lambda de procesamiento de datos falle tres veces seguidas. ¿Cuál es la arquitectura recomendada?",
  "options": [
    "AWS CloudTrail -> Amazon SQS",
    "CloudWatch Alarm -> Amazon SNS",
    "AWS Health Dashboard -> AWS Lambda",
    "Amazon Athena -> Amazon QuickSight"
  ],
  "answer": "CloudWatch Alarm -> Amazon SNS",
  "hint": "Combina una métrica de error con un servicio de mensajería.",
  "explanation": "Las alarmas de CloudWatch monitorean métricas (como 'Errors') y pueden activar acciones en Amazon SNS para enviar notificaciones a suscriptores (email, SMS) cuando se alcanza un umbral."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "¿Cuál es la herramienta de Amazon CloudWatch diseñada específicamente para realizar consultas interactivas y rápidas sobre logs utilizando una sintaxis similar a SQL, sin necesidad de mover los datos fuera del grupo de logs?",
  "options": [
    "CloudWatch Metrics Explorer",
    "CloudWatch Logs Insights",
    "CloudWatch Alarms",
    "CloudWatch Synthetics"
  ],
  "answer": "CloudWatch Logs Insights",
  "hint": "Permite filtrar, agregar y visualizar logs mediante consultas.",
  "explanation": "CloudWatch Logs Insights permite buscar y analizar datos de log de manera interactiva. Puedes escribir consultas para identificar errores, latencias o patrones específicos en tus aplicaciones de datos."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Estás monitoreando un clúster de Amazon EMR y notas que los nodos esclavos (core/task nodes) están alcanzando el 100% de uso de CPU de forma constante. ¿Qué herramienta de monitoreo externa al SDK puedes usar para visualizar métricas de rendimiento detalladas como carga de red y memoria a nivel de nodo?",
  "options": [
    "AWS Glue Studio",
    "Ganglia",
    "AWS CloudShell",
    "Amazon Redshift Advisor"
  ],
  "answer": "Ganglia",
  "hint": "Es un sistema de monitoreo distribuido de código abierto compatible con EMR.",
  "explanation": "EMR soporta Ganglia, que proporciona una interfaz gráfica para monitorear el rendimiento del clúster, incluyendo métricas detalladas de CPU, memoria y red en todos los nodos del clúster."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Una empresa debe conservar los logs de auditoría de sus pipelines de datos durante 7 años por razones legales, pero rara vez se consultan después de 30 días. ¿Qué estrategia es la más costo-eficiente para gestionar estos logs en Amazon CloudWatch?",
  "options": [
    "Mantener los logs en CloudWatch Logs indefinidamente.",
    "Exportar los logs a Amazon S3 y configurar una política de ciclo de vida (S3 Lifecycle).",
    "Eliminar los logs manualmente cada mes.",
    "Utilizar Amazon DynamoDB para almacenar los mensajes de log."
  ],
  "answer": "Exportar los logs a Amazon S3 y configurar una política de ciclo de vida (S3 Lifecycle).",
  "hint": "S3 ofrece clases de almacenamiento mucho más económicas para retención a largo plazo.",
  "explanation": "Exportar logs de CloudWatch a S3 permite moverlos a clases de almacenamiento como Glacier Deep Archive, lo que reduce drásticamente los costos de retención prolongada cumpliendo con los requisitos legales."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Durante un proceso de migración de datos, recibes errores '503 Slow Down' de Amazon S3. ¿Qué métrica de CloudWatch deberías habilitar y monitorear para identificar el problema de rendimiento?",
  "options": [
    "S3 Storage Metrics",
    "S3 Request Metrics",
    "S3 Inventory",
    "S3 Replication Metrics"
  ],
  "answer": "S3 Request Metrics",
  "hint": "Mide el rendimiento de las operaciones de lectura y escritura (PUT, GET, DELETE).",
  "explanation": "Las 'Request Metrics' de CloudWatch para S3 proporcionan información sobre la latencia y las tasas de solicitud, lo que ayuda a identificar cuellos de botella o límites de transacciones (throttling) durante cargas masivas."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Deseas rastrear quién eliminó una tabla específica en el catálogo de datos de AWS Glue. ¿Dónde deberías buscar el evento original para obtener el ID de usuario y la dirección IP de origen?",
  "options": [
    "En los logs de AWS Glue Crawler.",
    "En el historial de eventos de AWS CloudTrail.",
    "En el editor de consultas de Amazon Athena.",
    "En las métricas de Amazon EventBridge."
  ],
  "answer": "En el historial de eventos de AWS CloudTrail.",
  "hint": "Es el registro central para la trazabilidad de API.",
  "explanation": "CloudTrail captura eventos como 'DeleteTable'. Al revisar el detalle del evento, puedes ver la identidad del solicitante, la hora, la dirección IP y los parámetros de la solicitud."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Un job de Spark en Amazon EMR falla con un error de 'Out of Memory' (OOM). Necesitas revisar los logs de error de los ejecutores de Spark. ¿Dónde se almacenan por defecto estos logs si el clúster ya fue terminado?",
  "options": [
    "En el almacenamiento local de los nodos EC2.",
    "En el bucket de S3 especificado para logs durante la creación del clúster.",
    "En el historial de AWS CloudTrail.",
    "Se pierden permanentemente al terminar el clúster."
  ],
  "answer": "En el bucket de S3 especificado para logs durante la creación del clúster.",
  "hint": "EMR archiva los logs en almacenamiento persistente antes de apagar los nodos.",
  "explanation": "Amazon EMR copia automáticamente los logs de los nodos al S3 especificado en intervalos de 5 minutos y al finalizar el clúster, permitiendo la depuración post-mortem."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "¿Qué servicio proporciona una solución gestionada para buscar, visualizar y analizar logs de aplicaciones de Big Data en tiempo real a través de dashboards interactivos similares a Kibana?",
  "options": [
    "Amazon OpenSearch Service",
    "Amazon Redshift",
    "AWS Glue DataBrew",
    "Amazon Kinesis Data Firehose"
  ],
  "answer": "Amazon OpenSearch Service",
  "hint": "Es el sucesor de Amazon Elasticsearch Service.",
  "explanation": "Amazon OpenSearch Service es ideal para el análisis de logs en tiempo real, ofreciendo capacidades de búsqueda de texto completo y visualización de datos (OpenSearch Dashboards)."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Necesitas automatizar la respuesta a un fallo en un pipeline de datos. Cuando una tarea de AWS Step Functions falla, quieres que se ejecute una función Lambda de remediación. ¿Qué servicio de AWS se utiliza para detectar este cambio de estado y activar la función?",
  "options": [
    "Amazon CloudWatch Logs Insights",
    "Amazon EventBridge",
    "AWS CloudTrail Lake",
    "Amazon Managed Workflows for Apache Airflow"
  ],
  "answer": "Amazon EventBridge",
  "hint": "Es el bus de eventos que comunica cambios de estado entre servicios.",
  "explanation": "Amazon EventBridge puede capturar eventos de cambio de estado de Step Functions (como 'FAILED') y utilizar reglas para invocar otros servicios de AWS, como Lambda, como destino."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "¿Cuál es la ventaja de utilizar CloudTrail Lake sobre las consultas estándar de Athena en buckets de logs de CloudTrail?",
  "options": [
    "Es gratuito.",
    "Ofrece una solución de almacenamiento y consulta integrada y administrada específicamente para logs de auditoría sin necesidad de ETL.",
    "Permite ejecutar código de Spark directamente.",
    "No requiere permisos de IAM."
  ],
  "answer": "Ofrece una solución de almacenamiento y consulta integrada y administrada específicamente para logs de auditoría sin necesidad de ETL.",
  "hint": "Es una función de CloudTrail que simplifica el análisis de registros a largo plazo.",
  "explanation": "CloudTrail Lake es una solución de lago de datos de auditoría gestionada que permite agregar, almacenar y consultar eventos de CloudTrail mediante SQL, simplificando la infraestructura de cumplimiento."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Un ingeniero de datos quiere identificar las consultas SQL que más recursos consumen en Amazon Redshift. ¿Qué herramienta nativa de Redshift proporciona recomendaciones de rendimiento y detecta problemas en el diseño de las consultas?",
  "options": [
    "Amazon Redshift Advisor",
    "CloudWatch Logs",
    "AWS Glue Crawler",
    "AWS Trusted Advisor"
  ],
  "answer": "Amazon Redshift Advisor",
  "hint": "Proporciona sugerencias automáticas basadas en el uso real del clúster.",
  "explanation": "Redshift Advisor analiza las métricas de rendimiento y los metadatos de las consultas para ofrecer recomendaciones sobre claves de distribución, claves de clasificación y estadísticas faltantes."
},
{
  "subjectId": "dea",
  "topicId": "dea-3",
  "question": "Se requiere que todas las aplicaciones en un pipeline de datos envíen métricas personalizadas (como 'Registros procesados por segundo') a CloudWatch. ¿Cuál es la forma más directa de lograr esto desde el código de la aplicación?",
  "options": [
    "Usando la operación PutMetricData de la API/SDK de CloudWatch.",
    "Escribiendo en un archivo local en el servidor.",
    "Enviando un correo electrónico a soporte de AWS.",
    "Habilitando CloudTrail en la región."
  ],
  "answer": "Usando la operación PutMetricData de la API/SDK de CloudWatch.",
  "hint": "Es la llamada al SDK para publicar métricas de usuario.",
  "explanation": "La operación PutMetricData permite a las aplicaciones enviar sus propias métricas de negocio o rendimiento a CloudWatch, permitiendo la creación de dashboards y alarmas personalizadas."
},
{
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Un ingeniero de datos utiliza AWS Glue para procesar archivos ETL y necesita validar que la columna 'customer_id' no contenga valores nulos antes de cargar los datos en Redshift. ¿Qué característica de AWS Glue permite definir y ejecutar estas reglas de calidad de forma nativa?",
      "options": [
        "AWS Glue DataBrew Recipes",
        "AWS Glue Data Quality",
        "AWS Glue Schema Registry",
        "AWS Glue Partition Index"
      ],
      "answer": "AWS Glue Data Quality",
      "hint": "Es una función que utiliza DQDL (Data Quality Definition Language).",
      "explanation": "AWS Glue Data Quality permite medir y monitorear la calidad de los datos mediante reglas automáticas o manuales que pueden detener el job si no se cumplen los criterios de integridad."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Deseas crear un perfil estadístico de un dataset en S3 para identificar inconsistencias, valores atípicos (outliers) y la distribución de los datos sin escribir código Spark. ¿Qué herramienta de AWS proporciona esta capacidad visual?",
      "options": [
        "Amazon Athena",
        "AWS Glue DataBrew (Profile Job)",
        "Amazon SageMaker Ground Truth",
        "AWS Step Functions"
      ],
      "answer": "AWS Glue DataBrew (Profile Job)",
      "hint": "Genera un 'Data Profile' con más de 40 estadísticas.",
      "explanation": "Los 'Profile Jobs' de AWS Glue DataBrew analizan el dataset completo para proporcionar información sobre la calidad de los datos, incluyendo la cardinalidad, valores nulos y distribuciones estadísticas."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Al trabajar con AWS Glue Data Quality, ¿qué lenguaje se utiliza para definir reglas como 'IsComplete \"email\"' o 'ColumnLength \"zip_code\" = 5'?",
      "options": [
        "SQL",
        "YAML",
        "DQDL (Data Quality Definition Language)",
        "JSON"
      ],
      "answer": "DQDL (Data Quality Definition Language)",
      "hint": "Es un lenguaje declarativo específico para reglas de calidad.",
      "explanation": "DQDL es el lenguaje basado en texto que utiliza AWS Glue Data Quality para definir reglas de validación de datos de manera legible para humanos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Observas que un job de Apache Spark en Amazon EMR tarda mucho más de lo esperado. Al revisar los logs, notas que una sola tarea (task) procesa el 90% de los datos mientras las demás terminan rápido. ¿Qué fenómeno está ocurriendo?",
      "options": [
        "Memory Leak",
        "Data Skew (Sesgo de datos)",
        "Deadlock",
        "Disk Spilling"
      ],
      "answer": "Data Skew (Sesgo de datos)",
      "hint": "Ocurre cuando la distribución de los datos sobre las llaves de partición no es uniforme.",
      "explanation": "El Data Skew sucede cuando una partición tiene significativamente más datos que las otras, causando que un solo ejecutor trabaje más tiempo ('straggler'), lo que retrasa todo el pipeline."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Necesitas trabajar con un dataset de 10 TB en S3 para diseñar una receta de limpieza en AWS Glue DataBrew. Para ahorrar costos y mejorar la interactividad, decides no cargar todo el dataset. ¿Qué técnica debes aplicar?",
      "options": [
        "Data Partitioning",
        "Data Sampling (Muestreo)",
        "Data Encryption",
        "Data Compression"
      ],
      "answer": "Data Sampling (Muestreo)",
      "hint": "Consiste en seleccionar un subconjunto representativo de los datos.",
      "explanation": "El muestreo permite a DataBrew cargar una porción de los datos (por ejemplo, las primeras 500 filas o una muestra aleatoria) para que el ingeniero pueda diseñar transformaciones de forma rápida."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "¿Cuál es la técnica recomendada para mitigar el Data Skew en un proceso de Join en Spark cuando una de las llaves de unión está muy repetida?",
      "options": [
        "Aumentar el tamaño del clúster",
        "Salting (Añadir un valor aleatorio a la llave)",
        "Deshabilitar el control de versiones en S3",
        "Cambiar el formato de Parquet a CSV"
      ],
      "answer": "Salting (Añadir un valor aleatorio a la llave)",
      "hint": "Implica modificar la llave para redistribuir los datos uniformemente.",
      "explanation": "El 'Salting' añade un sufijo aleatorio a las llaves de partición para romper las concentraciones masivas de datos y obligar a Spark a distribuir las filas entre más ejecutores."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "En AWS Glue DataBrew, quieres validar que los valores de una columna 'Edad' se encuentren siempre entre 0 y 120. ¿Qué funcionalidad permite aplicar esta validación durante la ejecución de un dataset?",
      "options": [
        "Data Profile Rulesets",
        "S3 Lifecycle Rules",
        "IAM Policy Simulator",
        "Redshift Spectrum"
      ],
      "answer": "Data Profile Rulesets",
      "hint": "Permite definir expectativas sobre los datos en el perfilador.",
      "explanation": "Los Rulesets en DataBrew permiten definir reglas de validación específicas que se verifican cada vez que se ejecuta un Profile Job, generando un reporte de éxito o fallo."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Estás analizando la consistencia de datos entre una base de datos origen y un Data Lake. Notas que los formatos de fecha varían entre 'DD-MM-YYYY' y 'YYYY/MM/DD'. ¿Qué transformación de DataBrew es la más directa para corregir esto?",
      "options": [
        "Pivot",
        "Format Date",
        "Union",
        "Group By"
      ],
      "answer": "Format Date",
      "hint": "Estandariza los valores de tiempo a un formato común.",
      "explanation": "La función 'Format date' en DataBrew permite estandarizar múltiples formatos de fecha en una sola columna a un formato ISO o personalizado, asegurando la consistencia para análisis posteriores."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Al realizar un muestreo de datos (sampling) en AWS Glue DataBrew, ¿qué método garantiza que se incluyan ejemplos de todas las categorías de una columna específica, como 'Región'?",
      "options": [
        "First n rows",
        "Last n rows",
        "Stratified sampling (Muestreo estratificado)",
        "Random sampling"
      ],
      "answer": "Stratified sampling (Muestreo estratificado)",
      "hint": "Divide la población en subgrupos antes del muestreo.",
      "explanation": "El muestreo estratificado asegura que las proporciones de los subgrupos (estratos) de la población original se mantengan en la muestra, evitando que categorías pequeñas queden fuera."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Tienes una tabla en Amazon Redshift con un sesgo de datos masivo en una columna que se usa frecuentemente para JOINS. ¿Qué cambio en el esquema de la tabla podría ayudar a redistribuir los datos de forma más uniforme?",
      "options": [
        "Cambiar el DISTSTYLE a EVEN",
        "Cambiar el ENCODING a RAW",
        "Habilitar S3 Select",
        "Aumentar el número de WLM Queues"
      ],
      "answer": "Cambiar el DISTSTYLE a EVEN",
      "hint": "Distribuye las filas de forma rotativa (round-robin).",
      "explanation": "Si una llave de distribución causa sesgo (skew), cambiar a DISTSTYLE EVEN distribuye los datos uniformemente entre los nodos, aunque se pierde la ventaja de la colocalización de datos para JOINS."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Durante un proceso de limpieza en AWS Glue DataBrew, descubres que la columna 'Teléfono' tiene caracteres especiales inconsistentes (paréntesis, guiones, espacios). ¿Qué técnica deberías usar para mejorar la calidad?",
      "options": [
        "Split column",
        "Replace using Regular Expressions (Regex)",
        "Sort ascending",
        "Flag duplicates"
      ],
      "answer": "Replace using Regular Expressions (Regex)",
      "hint": "Permite buscar patrones complejos para limpieza.",
      "explanation": "Las expresiones regulares son ideales para eliminar caracteres no deseados o estandarizar formatos de texto complejos como números de teléfono o códigos postales."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "¿Qué métrica de calidad de datos se encarga de verificar que el porcentaje de valores nulos o vacíos en una columna crítica no supere un umbral aceptable (por ejemplo, menos del 5%)?",
      "options": [
        "Timeliness (Oportunidad)",
        "Completeness (Completitud)",
        "Accuracy (Exactitud)",
        "Validity (Validez)"
      ],
      "answer": "Completeness (Completitud)",
      "hint": "Mide si todos los datos necesarios están presentes.",
      "explanation": "La completitud es la dimensión de calidad que asegura que no falte información necesaria en el dataset, comúnmente monitoreada mediante el conteo de nulos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Un ingeniero de datos quiere automatizar una acción cuando un chequeo de AWS Glue Data Quality falla (por ejemplo, enviar un mensaje a SQS). ¿Cómo se logra esta integración?",
      "options": [
        "Configurando una regla en Amazon EventBridge que reaccione al evento de fallo.",
        "Modificando el archivo .jar de Spark manualmente.",
        "Usando una política de IAM administrada por el cliente.",
        "Habilitando S3 Event Notifications."
      ],
      "answer": "Configurando una regla en Amazon EventBridge que reaccione al evento de fallo.",
      "hint": "Es el servicio estándar para manejar eventos entre servicios de AWS.",
      "explanation": "AWS Glue envía los resultados de las evaluaciones de calidad a EventBridge, lo que permite disparar flujos de trabajo de remediación o notificaciones basadas en el estado del chequeo."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "Al investigar la consistencia de los datos en un clúster de Amazon EMR, notas que los datos se están escribiendo de forma desigual en el HDFS. ¿Qué herramienta de Hadoop te permite balancear los datos entre los DataNodes?",
      "options": [
        "HDFS Balancer",
        "S3 DistCP",
        "Apache Hive MetaStore",
        "Presto Coordinator"
      ],
      "answer": "HDFS Balancer",
      "hint": "Redistribuye bloques de datos entre los nodos del clúster.",
      "explanation": "El HDFS Balancer es una herramienta que redistribuye los bloques de datos entre los DataNodes para asegurar que el almacenamiento esté equilibrado y evitar cuellos de botella de E/S en nodos específicos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-3",
      "question": "En AWS Glue DataBrew, ¿cuál es la diferencia entre un 'Dataset' y un 'Project' en términos de calidad de datos?",
      "options": [
        "No hay diferencia, son términos intercambiables.",
        "El Dataset es la conexión a los datos; el Project es el entorno donde se diseñan las transformaciones y reglas de calidad.",
        "El Dataset almacena los logs y el Project almacena las claves de cifrado.",
        "El Project es solo para usuarios administradores."
      ],
      "answer": "El Dataset es la conexión a los datos; el Project es el entorno donde se diseñan las transformaciones y reglas de calidad.",
      "hint": "Uno define 'qué' datos; el otro define 'cómo' limpiarlos.",
      "explanation": "Un Dataset apunta a la fuente (S3, Redshift, etc.). Un Proyecto es donde aplicas recetas y ves visualmente el impacto de las reglas de calidad sobre una muestra de esos datos."
    },
    {
"subjectId": "dea",
"topicId": "dea-4",
"question": "Un ingeniero de datos necesita permitir que un job de AWS Glue se conecte a un clúster de Amazon Redshift que reside en una subred privada. ¿Qué actualización es necesaria en el Grupo de Seguridad (Security Group) de Redshift?",
"options": [
"Agregar una regla de salida (outbound) para el tráfico HTTP en el puerto 80.",
"Agregar una regla de entrada (inbound) que permita el tráfico en el puerto de Redshift (ej. 5439) desde el Grupo de Seguridad de AWS Glue.",
"Deshabilitar todas las reglas de entrada para permitir conexiones locales.",
"Cambiar el protocolo del Grupo de Seguridad a UDP únicamente."
],
"answer": "Agregar una regla de entrada (inbound) que permita el tráfico en el puerto de Redshift (ej. 5439) desde el Grupo de Seguridad de AWS Glue.",
"hint": "Redshift debe permitir que Glue 'entre' a través del puerto de la base de datos.",
"explanation": "Para que Glue acceda a Redshift, el grupo de seguridad de Redshift debe tener una regla que permita el tráfico en el puerto de escucha (default 5439) referenciando el grupo de seguridad utilizado por la conexión de Glue."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Deseas implementar una rotación automática de las credenciales de una base de datos Amazon RDS para mejorar la postura de seguridad. ¿Qué servicio de AWS es el más adecuado y permite esta funcionalidad de forma nativa?",
"options": [
"AWS Systems Manager Parameter Store",
"AWS IAM Access Analyzer",
"AWS Secrets Manager",
"AWS Key Management Service (KMS)"
],
"answer": "AWS Secrets Manager",
"hint": "Este servicio utiliza funciones Lambda para rotar contraseñas automáticamente.",
"explanation": "AWS Secrets Manager permite almacenar, rotar y gestionar credenciales. Ofrece integración nativa con RDS para rotar contraseñas automáticamente sin tiempo de inactividad de la aplicación."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Una función de AWS Lambda necesita leer archivos de un bucket de S3 específico. ¿Cuál es la forma más segura y recomendada por AWS para otorgar estos permisos?",
"options": [
"Almacenar las Access Keys del usuario root en el código de la función.",
"Crear un IAM Role con los permisos necesarios y asignarlo como Rol de Ejecución de la función.",
"Hacer que el bucket de S3 sea público para que Lambda pueda acceder sin credenciales.",
"Asignar permisos de administrador a todos los usuarios de la cuenta."
],
"answer": "Crear un IAM Role con los permisos necesarios y asignarlo como Rol de Ejecución de la función.",
"hint": "Sigue el principio de mínimo privilegio y evita credenciales persistentes.",
"explanation": "Los roles de IAM permiten que los servicios de AWS asuman permisos temporales. Al asignar un rol a Lambda, la función recibe credenciales temporales gestionadas por AWS para interactuar con S3."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Al comparar servicios gestionados (managed) frente a no gestionados (unmanaged), ¿cuál es una característica distintiva de un servicio gestionado como Amazon EMR Serverless?",
"options": [
"El usuario es responsable de parchear el sistema operativo de los nodos.",
"AWS se encarga de aprovisionar y escalar automáticamente los recursos de computación.",
"El usuario debe configurar manualmente la alta disponibilidad mediante múltiples zonas de disponibilidad.",
"No es posible utilizar roles de IAM para el control de acceso."
],
"answer": "AWS se encarga de aprovisionar y escalar automáticamente los recursos de computación.",
"hint": "En servicios serverless o gestionados, la infraestructura es invisible para el desarrollador.",
"explanation": "En un servicio gestionado o serverless, AWS abstrae la capa de infraestructura, encargándose del aprovisionamiento, escalado, parches y disponibilidad, permitiendo al ingeniero enfocarse en el procesamiento de datos."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Para cumplir con requisitos de seguridad, los datos que viajan entre una VPC y Amazon S3 no deben pasar por la internet pública. ¿Qué recurso debe configurarse en la VPC?",
"options": [
"Un Internet Gateway.",
"Un VPC Endpoint (Gateway Type) para S3.",
"Una conexión VPN de sitio a sitio.",
"Un servidor NAT Instance en una subred pública."
],
"answer": "Un VPC Endpoint (Gateway Type) para S3.",
"hint": "Permite una ruta privada dentro de la red de AWS hacia S3.",
"explanation": "Los VPC Endpoints permiten la comunicación privada entre una VPC y los servicios de AWS compatibles (como S3) a través de la red interna de AWS, eliminando la necesidad de internet pública o dispositivos NAT."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Una empresa tiene múltiples departamentos que acceden al mismo bucket de S3, pero cada departamento debe tener su propio punto de entrada con políticas de acceso distintas y simplificadas. ¿Qué característica de S3 es la más adecuada?",
"options": [
"S3 Replication Time Control.",
"S3 Access Points.",
"S3 Multi-Region Access Points.",
"S3 Batch Operations."
],
"answer": "S3 Access Points.",
"hint": "Crea endpoints con nombres de host específicos y políticas únicas sobre un bucket.",
"explanation": "S3 Access Points simplifica la gestión del acceso a datos compartidos en S3 al permitir crear puntos de acceso individuales con sus propias políticas para diferentes aplicaciones o equipos."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "En Amazon SageMaker Unified Studio, ¿cuál es el propósito de un 'Domain Unit'?",
"options": [
"Es un tipo de instancia de computación para entrenamiento de modelos.",
"Es un contenedor lógico para organizar proyectos, datos y recursos para diferentes equipos o unidades de negocio.",
"Es una base de datos vectorial para embeddings.",
"Es una zona de disponibilidad específica para el almacenamiento de logs."
],
"answer": "Es un contenedor lógico para organizar proyectos, datos y recursos para diferentes equipos o unidades de negocio.",
"hint": "Ayuda a la gobernanza y separación de recursos en entornos empresariales grandes.",
"explanation": "Las unidades de dominio en SageMaker Unified Studio permiten segmentar el acceso y la administración de recursos entre distintas áreas de una organización, manteniendo la seguridad y el orden."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Necesitas desplegar una infraestructura de datos completa usando AWS CloudFormation, pero CloudFormation no tiene permisos para crear buckets de S3. ¿Cómo deberías solucionar esto siguiendo las mejores prácticas?",
"options": [
"Usar las credenciales del administrador de la cuenta en el template.",
"Configurar un Service Role para CloudFormation con los permisos necesarios.",
"Pedirle a un usuario con privilegios que cree los recursos manualmente antes.",
"Deshabilitar IAM temporalmente durante el despliegue."
],
"answer": "Configurar un Service Role para CloudFormation con los permisos necesarios.",
"hint": "Es un rol que CloudFormation asume para realizar acciones en tu nombre.",
"explanation": "Un Service Role (o Role de servicio) permite que CloudFormation realice operaciones sobre recursos de AWS utilizando permisos predefinidos, sin necesidad de que el usuario que lanza el stack tenga permisos directos sobre esos recursos."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Un ingeniero quiere conectar su centro de datos local (on-premises) de forma privada con los servicios de AWS consumidos por sus pipelines de datos. ¿Qué servicio permite crear este enlace privado aprovechando la tecnología de AWS PrivateLink?",
"options": [
"VPC Peering.",
"Interface VPC Endpoints.",
"Transit Gateway Peering.",
"Direct Connect Gateway."
],
"answer": "Interface VPC Endpoints.",
"hint": "Utiliza interfaces de red elásticas (ENI) con IPs privadas dentro de tu VPC.",
"explanation": "Los Interface Endpoints (basados en AWS PrivateLink) exponen los servicios de AWS como direcciones IP privadas dentro de tu VPC, permitiendo el acceso desde redes locales a través de Direct Connect o VPN sin salir a internet."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "¿Cuál es la principal diferencia entre una política de IAM basada en identidad (Identity-based) y una basada en recursos (Resource-based) en el contexto de S3?",
"options": [
"Las de identidad se adjuntan a usuarios/roles; las de recursos se adjuntan al bucket.",
"Las de identidad son obligatorias para todos los buckets.",
"Las de recursos solo permiten acciones de lectura (Read-only).",
"Las de identidad no pueden denegar el acceso explícitamente."
],
"answer": "Las de identidad se adjuntan a usuarios/roles; las de recursos se adjuntan al bucket.",
"hint": "Piensa en quién 'lleva' la política frente a quién la 'tiene'.",
"explanation": "Las políticas basadas en identidad definen qué puede hacer un usuario o rol. Las políticas basadas en recursos (como la Bucket Policy de S3) definen quién tiene permiso para acceder a ese recurso específico."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "En el marco de Amazon SageMaker Unified Studio, ¿qué elemento se utiliza para colaborar en un flujo de trabajo de ML específico, compartiendo notebooks y código entre un grupo de científicos de datos?",
"options": [
"IAM Group.",
"Project.",
"Domain Unit VPC.",
"S3 Access Point."
],
"answer": "Project.",
"hint": "Es la unidad de trabajo colaborativo dentro del estudio.",
"explanation": "Los proyectos en SageMaker Unified Studio sirven como espacios de trabajo colaborativos donde los usuarios pueden compartir activos como notebooks, scripts y modelos bajo un contexto común de permisos."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Deseas que una aplicación que se ejecuta en una instancia EC2 acceda a una API externa de forma segura, almacenando la API Key de forma que no sea visible en texto plano en las variables de entorno. ¿Qué estrategia es la más segura?",
"options": [
"Escribir la API Key en el User Data de la instancia.",
"Almacenar la clave en AWS Secrets Manager y recuperarla mediante el SDK en tiempo de ejecución.",
"Subir la clave a un repositorio de GitHub público.",
"Codificar la clave en Base64 dentro del código fuente."
],
"answer": "Almacenar la clave en AWS Secrets Manager y recuperarla mediante el SDK en tiempo de ejecución.",
"hint": "Evita el hard-coding y centraliza la gestión de secretos.",
"explanation": "Secrets Manager permite proteger secretos mediante cifrado en reposo (KMS) y control de acceso de grano fino mediante IAM, evitando que las claves queden expuestas en configuraciones de servidor o código."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "¿Qué componente de IAM es esencial definir para permitir que un servicio de AWS (como Amazon Redshift) asuma un rol y realice acciones en tu nombre sobre otros servicios (como S3)?",
"options": [
"Managed Policy.",
"Trust Policy (Política de confianza).",
"Permission Boundary.",
"Access Control List (ACL)."
],
"answer": "Trust Policy (Política de confianza).",
"hint": "Define quién (qué entidad) tiene permiso para 'ponerse el disfraz' del rol.",
"explanation": "La Trust Policy es un documento JSON adjunto a un rol de IAM que define qué entidades (como el servicio 'https://www.google.com/search?q=redshift.amazonaws.com') pueden asumir dicho rol para obtener credenciales temporales."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Un administrador necesita restringir el acceso a un bucket de S3 solo a peticiones que provengan de un VPC Endpoint específico. ¿Dónde debería aplicar esta restricción?",
"options": [
"En el Security Group de la instancia EC2.",
"En la política del bucket de S3 (Bucket Policy) usando la condición 'aws:sourceVpce'.",
"En la tabla de rutas de la subred privada.",
"En el archivo /etc/hosts de la aplicación."
],
"answer": "En la política del bucket de S3 (Bucket Policy) usando la condición 'aws:sourceVpce'.",
"hint": "Es una validación basada en el origen del tráfico a nivel de recurso.",
"explanation": "Para forzar que el tráfico pase por un VPC Endpoint, se utiliza una política de bucket que deniegue el acceso a menos que la clave de condición 'aws:sourceVpce' coincida con el ID del endpoint configurado."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Al gestionar grupos de IAM para un equipo de ingeniería de datos, ¿cuál es la mejor práctica recomendada para la gestión de permisos?",
"options": [
"Asignar permisos directamente a cada usuario individual.",
"Asignar permisos a grupos de IAM y añadir a los usuarios a los grupos correspondientes según sus funciones.",
"Usar solo el usuario root para todas las tareas diarias de datos.",
"Crear un solo rol con permisos de administrador para todos los empleados."
],
"answer": "Asignar permisos a grupos de IAM y añadir a los usuarios a los grupos correspondientes según sus funciones.",
"hint": "Sigue el modelo de control de acceso basado en roles (RBAC) y facilita la administración.",
"explanation": "El uso de grupos de IAM permite una gestión centralizada y escalable. Cuando un usuario cambia de función o deja la empresa, simplemente se añade o elimina del grupo, asegurando que los permisos se mantengan coherentes."
},
{
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Una empresa necesita otorgar permisos específicos a un rol de IAM para leer objetos de un bucket de S3, pero solo si la solicitud proviene de una dirección IP corporativa específica. Las políticas administradas de AWS no ofrecen esta restricción. ¿Qué debería hacer el ingeniero de datos?",
      "options": [
        "Usar la política administrada 'AmazonS3ReadOnlyAccess' y contactar a soporte de AWS.",
        "Crear una política administrada por el cliente (Customer managed policy) con un elemento 'Condition'.",
        "Modificar la política administrada de AWS directamente en la consola.",
        "Utilizar una política en línea (Inline policy) en cada usuario del departamento."
      ],
      "answer": "Crear una política administrada por el cliente (Customer managed policy) con un elemento 'Condition'.",
      "hint": "Permite mayor flexibilidad y reutilización que las políticas estándar de AWS.",
      "explanation": "Cuando las políticas administradas de AWS no cubren un caso de uso específico, como restricciones por IP, se debe crear una política personalizada. Las políticas administradas por el cliente son preferibles a las en línea porque se pueden adjuntar a múltiples identidades y tienen control de versiones."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Un ingeniero de datos debe elegir entre AWS Secrets Manager y Systems Manager Parameter Store para almacenar una clave de API que requiere rotación automática cada 30 días. ¿Cuál es la opción más adecuada?",
      "options": [
        "SSM Parameter Store (Standard).",
        "AWS Secrets Manager.",
        "SSM Parameter Store (Advanced).",
        "Amazon S3 con cifrado del lado del servidor."
      ],
      "answer": "AWS Secrets Manager.",
      "hint": "Ofrece integración nativa con funciones Lambda para cambiar credenciales programadamente.",
      "explanation": "Aunque ambos pueden almacenar datos sensibles cifrados, AWS Secrets Manager es el servicio diseñado específicamente para la gestión de secretos con funciones avanzadas como la rotación automática integrada."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "En Amazon Redshift, ¿cuál es el comando SQL que se utiliza para otorgar permisos específicos a un grupo de usuarios sobre una tabla de hechos existente?",
      "options": [
        "PERMIT ACCESS ON TABLE.",
        "AUTHORIZE GROUP.",
        "GRANT SELECT ON TABLE.",
        "ALLOW ACTION ON TABLE."
      ],
      "answer": "GRANT SELECT ON TABLE.",
      "hint": "Es un comando estándar de SQL para la gestión de privilegios.",
      "explanation": "En Redshift, los permisos dentro de la base de datos se gestionan mediante comandos SQL estándar. GRANT se utiliza para dar acceso a tablas, vistas o esquemas a usuarios o grupos específicos."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Deseas centralizar la gestión de permisos para un Data Lake basado en S3, permitiendo que Amazon Athena y Amazon Redshift Spectrum compartan las mismas reglas de control de acceso. ¿Qué servicio deberías implementar?",
      "options": [
        "AWS IAM Access Analyzer.",
        "AWS Lake Formation.",
        "Amazon S3 Access Points.",
        "AWS Glue Schema Registry."
      ],
      "answer": "AWS Lake Formation.",
      "hint": "Proporciona un modelo de permisos definido una vez y aplicado en múltiples servicios de análisis.",
      "explanation": "AWS Lake Formation simplifica la seguridad del Data Lake al proporcionar un control de acceso granular (a nivel de fila y columna) que se aplica de manera uniforme a servicios como Athena, Redshift Spectrum y Glue."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Una organización desea implementar una estrategia de autorización donde el acceso a los recursos de datos se otorgue automáticamente si el usuario y el recurso comparten el mismo valor en la etiqueta 'Project'. ¿Cómo se denomina este método?",
      "options": [
        "Role-Based Access Control (RBAC).",
        "Attribute-Based Access Control (ABAC).",
        "Discretionary Access Control (DAC).",
        "Mandatory Access Control (MAC)."
      ],
      "answer": "Attribute-Based Access Control (ABAC).",
      "hint": "Utiliza atributos (como etiquetas de IAM) para tomar decisiones de autorización.",
      "explanation": "ABAC permite escalar la gestión de permisos utilizando etiquetas (tags). En lugar de crear políticas para cada usuario, se crea una política general que permite el acceso si las etiquetas del usuario coinciden con las del recurso."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Siguiendo el principio de mínimo privilegio, ¿cuál de los siguientes ejemplos de política de IAM es el más adecuado para un proceso que solo necesita listar el contenido de un bucket llamado 'data-bucket'?",
      "options": [
        "Action: 's3:*', Resource: '*'",
        "Action: 's3:ListBucket', Resource: 'arn:aws:s3:::data-bucket'",
        "Action: 's3:Get*', Resource: 'arn:aws:s3:::data-bucket/*'",
        "Action: 's3:List*', Resource: '*'"
      ],
      "answer": "Action: 's3:ListBucket', Resource: 'arn:aws:s3:::data-bucket'",
      "hint": "Limita tanto la acción específica como el recurso exacto.",
      "explanation": "El mínimo privilegio dicta otorgar solo el permiso necesario ('ListBucket') sobre el recurso específico ('data-bucket'). El uso de comodines (*) en Action o Resource debe evitarse para tareas específicas."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "En AWS Lake Formation, ¿qué característica permite ocultar columnas sensibles (como PII) a un grupo de analistas sin tener que crear copias físicas de los datos en S3?",
      "options": [
        "S3 Bucket Policies.",
        "Column-level security (Filtros de datos).",
        "IAM Permission Boundaries.",
        "KMS Key Rotation."
      ],
      "answer": "Column-level security (Filtros de datos).",
      "hint": "Permite definir qué columnas son visibles para cada principal de IAM.",
      "explanation": "Lake Formation permite definir filtros de datos que incluyen o excluyen columnas específicas. Cuando un usuario consulta la tabla desde Athena, el servicio solo devuelve las columnas para las que tiene permiso."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Un analista necesita conectarse a Amazon Redshift utilizando sus credenciales corporativas federadas. ¿Qué permiso de IAM es necesario para generar credenciales temporales de base de datos?",
      "options": [
        "redshift:ConnectCluster",
        "redshift:GetClusterCredentials",
        "redshift:CreateUser",
        "redshift:DescribeClusters"
      ],
      "answer": "redshift:GetClusterCredentials",
      "hint": "Es la acción de API que permite el inicio de sesión único (SSO) en la base de datos.",
      "explanation": "La acción 'redshift:GetClusterCredentials' permite que un usuario de IAM obtenga un nombre de usuario y una contraseña temporales para iniciar sesión en Redshift, facilitando la federación de identidades."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "¿Cuál es la principal diferencia entre una política administrada por el cliente y una política en línea (inline) en IAM?",
      "options": [
        "Las políticas en línea son más seguras porque no se pueden borrar.",
        "Las políticas administradas por el cliente se pueden adjuntar a múltiples identidades; las en línea tienen una relación 1:1 estricta.",
        "Solo las políticas administradas admiten el elemento 'Condition'.",
        "Las políticas en línea no tienen límite de tamaño."
      ],
      "answer": "Las políticas administradas por el cliente se pueden adjuntar a múltiples identidades; las en línea tienen una relación 1:1 estricta.",
      "hint": "Piense en la reutilización y la gestión centralizada.",
      "explanation": "Las políticas administradas por el cliente son independientes y se pueden asignar a muchos usuarios o roles. Las políticas en línea están incrustadas directamente en una identidad y se eliminan si la identidad se elimina."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Al almacenar una contraseña de base de datos en AWS Systems Manager Parameter Store, ¿qué tipo de parámetro debe seleccionarse para asegurar que el valor esté cifrado en reposo?",
      "options": [
        "String.",
        "StringList.",
        "SecureString.",
        "EncryptedObject."
      ],
      "answer": "SecureString.",
      "hint": "Utiliza AWS KMS para proteger el contenido del parámetro.",
      "explanation": "El tipo 'SecureString' en Parameter Store utiliza claves de AWS KMS para cifrar los datos sensibles, asegurando que el valor no sea visible en texto plano en la consola o a través de la API sin los permisos de descifrado adecuados."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Un ingeniero de datos quiere utilizar etiquetas (tags) en los recursos de AWS para simplificar la gestión de acceso para cientos de proyectos. ¿Qué ventaja ofrece ABAC sobre RBAC en este escenario?",
      "options": [
        "ABAC requiere menos políticas de IAM a medida que aumenta el número de proyectos.",
        "ABAC es el único método compatible con S3.",
        "RBAC es más rápido de procesar por el motor de evaluación de AWS.",
        "ABAC no requiere el uso de roles de IAM."
      ],
      "answer": "ABAC requiere menos políticas de IAM a medida que aumenta el número de proyectos.",
      "hint": "En ABAC, la política no cambia cuando se añaden nuevos recursos; solo sus etiquetas.",
      "explanation": "Con ABAC, puedes crear una única política que diga 'Acceso permitido si Tag:Project coincide'. Al añadir un nuevo proyecto, solo etiquetas los recursos, sin necesidad de actualizar la política de IAM, reduciendo la sobrecarga administrativa."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Se requiere que los usuarios del grupo 'Finanzas' puedan ver solo las filas de una tabla de ventas donde la columna 'Region' sea igual a 'LATAM'. ¿Qué servicio permite implementar esta 'Seguridad a nivel de fila' de forma centralizada?",
      "options": [
        "Amazon QuickSight (solo con SPICE).",
        "AWS Lake Formation.",
        "IAM Policy con Condition:StringEquals.",
        "Amazon S3 Access Points."
      ],
      "answer": "AWS Lake Formation.",
      "hint": "Permite definir filtros de celdas (Cell-level filters) para restringir el acceso a los datos.",
      "explanation": "Lake Formation admite la seguridad a nivel de fila mediante filtros de datos que utilizan expresiones similares a SQL (ej. Region='LATAM') para limitar qué registros ve cada usuario o rol."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "¿Qué permiso de IAM se debe otorgar a un rol de AWS Lambda para que pueda recuperar un secreto específico de AWS Secrets Manager?",
      "options": [
        "secretsmanager:GetSecretValue",
        "secretsmanager:ListSecrets",
        "secretsmanager:DescribeSecret",
        "kms:Decrypt (sobre la clave utilizada para el secreto)"
      ],
      "answer": "secretsmanager:GetSecretValue",
      "hint": "Es la acción necesaria para leer el contenido cifrado del secreto.",
      "explanation": "Para leer el valor de un secreto, la entidad necesita 'secretsmanager:GetSecretValue'. Además, si el secreto se cifró con una clave KMS personalizada, también necesitará 'kms:Decrypt' sobre esa clave."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "En una política de IAM, ¿cuál es el efecto predeterminado (default) si una solicitud no coincide con ninguna declaración de permiso explícita?",
      "options": [
        "Permitir (Allow).",
        "Denegar (Deny).",
        "Pasar a la siguiente política.",
        "Error de sintaxis."
      ],
      "answer": "Denegar (Deny).",
      "hint": "AWS utiliza una denegación implícita por defecto.",
      "explanation": "En el motor de evaluación de AWS, cualquier solicitud comienza con una denegación implícita. Si no hay un 'Allow' explícito que coincida, la solicitud es rechazada."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Necesitas dar acceso de solo lectura a un usuario externo sobre un esquema específico en tu base de datos Redshift. ¿Cuál es la mejor práctica para gestionar esto internamente en la base de datos?",
      "options": [
        "Convertir al usuario en superusuario temporalmente.",
        "Crear un rol de base de datos, asignarle permisos SELECT sobre el esquema y asignar el usuario a ese rol.",
        "Darle las credenciales del usuario administrador.",
        "Usar una política de IAM para restringir las consultas SQL."
      ],
      "answer": "Crear un rol de base de datos, asignarle permisos SELECT sobre el esquema y asignar el usuario a ese rol.",
      "hint": "El uso de roles de base de datos facilita la administración de permisos grupales.",
      "explanation": "Redshift admite roles de base de datos (RBAC interno). Agrupar permisos en roles y asignar usuarios a esos roles es más eficiente y seguro que asignar permisos individuales a cada usuario."
    },
{
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Una empresa necesita ocultar los últimos cuatro dígitos de los números de tarjeta de crédito para todos los usuarios, excepto para el equipo de auditoría, dentro de sus tablas de Amazon Redshift. ¿Qué característica debería utilizar el ingeniero de datos?",
      "options": [
        "S3 Object Lambda",
        "Dynamic Data Masking (DDM)",
        "Redshift Query Editor v2",
        "KMS Key Policies"
      ],
      "answer": "Dynamic Data Masking (DDM)",
      "hint": "Permite definir políticas de enmascaramiento a nivel de columna basadas en roles de base de datos.",
      "explanation": "Dynamic Data Masking en Amazon Redshift permite proteger datos sensibles en tiempo de ejecución. Los datos originales no cambian en el disco, pero se muestran enmascarados según los permisos del usuario que realiza la consulta."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Se requiere que todos los datos cargados en un bucket de Amazon S3 sean cifrados utilizando claves gestionadas por el cliente (CMK) para cumplir con una auditoría interna. ¿Qué tipo de cifrado del lado del servidor (SSE) debe configurarse?",
      "options": [
        "SSE-S3",
        "SSE-KMS",
        "SSE-C",
        "TLS 1.2"
      ],
      "answer": "SSE-KMS",
      "hint": "Utiliza AWS Key Management Service para gestionar las claves de cifrado.",
      "explanation": "SSE-KMS (Server-Side Encryption with AWS KMS keys) permite el uso de claves CMK, proporcionando un registro de auditoría de cuándo y quién usó la clave, a diferencia de SSE-S3 que usa claves gestionadas por S3."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Un ingeniero de datos en la Cuenta A necesita permitir que un rol de IAM en la Cuenta B descifre datos almacenados en S3 que fueron cifrados con una clave de KMS de la Cuenta A. ¿Qué dos pasos son necesarios?",
      "options": [
        "Hacer que el bucket de S3 sea público y deshabilitar el cifrado.",
        "Actualizar la política de la clave KMS en la Cuenta A para dar acceso a la Cuenta B y otorgar permisos de KMS al rol en la Cuenta B.",
        "Copiar la clave KMS de la Cuenta A a la Cuenta B de forma física.",
        "Usar SSE-S3 en lugar de SSE-KMS para evitar restricciones de cuenta."
      ],
      "answer": "Actualizar la política de la clave KMS en la Cuenta A para dar acceso a la Cuenta B y otorgar permisos de KMS al rol en la Cuenta B.",
      "hint": "El acceso cross-account requiere permisos tanto en el recurso (KMS Key Policy) como en la identidad (IAM Policy).",
      "explanation": "Para el acceso entre cuentas con KMS, la política de la clave (Key Policy) en la cuenta origen debe otorgar permiso explícito a la cuenta/rol externo, y el rol externo debe tener permisos de IAM para llamar a KMS."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Para cumplir con la política de seguridad de la red, un ingeniero debe asegurar que no se permitan conexiones a un bucket de S3 que no utilicen HTTPS. ¿Cómo se implementa esto de forma automática?",
      "options": [
        "Habilitando el cifrado SSE-S3 por defecto.",
        "Usando una política de bucket con una denegación explícita (Deny) donde 'aws:SecureTransport' sea 'false'.",
        "Configurando un VPC Endpoint de tipo Gateway.",
        "Deshabilitando el acceso público al bucket."
      ],
      "answer": "Usando una política de bucket con una denegación explícita (Deny) donde 'aws:SecureTransport' sea 'false'.",
      "hint": "La clave de condición de IAM controla si la petición viaja sobre SSL/TLS.",
      "explanation": "La condición 'aws:SecureTransport' en una política de bucket de S3 permite verificar si una solicitud se realiza a través de HTTPS. Si es 'false', la política deniega el acceso, forzando el cifrado en tránsito."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Deseas identificar y enmascarar automáticamente Información de Identificación Personal (PII) durante un proceso de ETL antes de que los datos lleguen a tu Data Lake. ¿Qué servicio ofrece transformaciones integradas para esto?",
      "options": [
        "Amazon Athena",
        "AWS Glue (Sensitive Data Detection)",
        "Amazon QuickSight",
        "AWS DataSync"
      ],
      "answer": "AWS Glue (Sensitive Data Detection)",
      "hint": "Esta característica puede identificar entidades como nombres, correos o números de seguridad social.",
      "explanation": "AWS Glue incluye una transformación para detectar datos sensibles. Puede configurarse para identificar tipos de PII y automáticamente aplicar acciones como enmascarar, cifrar o eliminar dichos campos durante el flujo ETL."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Al configurar una conexión JDBC desde una aplicación local hacia Amazon Redshift, ¿qué parámetro asegura que los datos se cifren mientras viajan por la red?",
      "options": [
        "encryption=true",
        "ssl=true",
        "kms_enabled=yes",
        "secure_transport=on"
      ],
      "answer": "ssl=true",
      "hint": "SSL/TLS es el protocolo estándar para cifrar datos en tránsito para bases de datos.",
      "explanation": "Para cifrar la conexión entre el cliente y Redshift, se debe incluir 'ssl=true' en la cadena de conexión JDBC/ODBC. Además, se puede configurar el clúster de Redshift para que requiera SSL obligatoriamente."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "¿Cuál es la principal diferencia entre el cifrado del lado del cliente (Client-Side Encryption) y el cifrado del lado del servidor (Server-Side Encryption) en Amazon S3?",
      "options": [
        "El cifrado del lado del cliente solo funciona con archivos de texto plano.",
        "En el cifrado del lado del cliente, los datos se cifran antes de ser enviados a S3; en el del servidor, S3 los cifra al recibirlos.",
        "SSE es más seguro porque AWS gestiona todas las claves.",
        "Client-Side Encryption no requiere el uso de claves KMS."
      ],
      "answer": "En el cifrado del lado del cliente, los datos se cifran antes de ser enviados a S3; en el del servidor, S3 los cifra al recibirlos.",
      "hint": "Se trata de dónde ocurre el proceso de transformación de los datos.",
      "explanation": "Con Client-Side Encryption, el usuario cifra los datos en su entorno local antes de subirlos, asegurando que los datos viajen y se almacenen ya cifrados. Con SSE, el cifrado ocurre dentro de la infraestructura de AWS."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Un ingeniero necesita rotar una clave de KMS que se utiliza para cifrar volúmenes de Amazon EBS. ¿Cuál es el beneficio de habilitar la rotación automática de claves en AWS KMS?",
      "options": [
        "Cambia el ID de la clave KMS cada año.",
        "Genera un nuevo material criptográfico para la clave sin cambiar el ID de la clave ni romper las aplicaciones existentes.",
        "Elimina automáticamente los datos antiguos cifrados con la clave anterior.",
        "Aumenta el límite de solicitudes por segundo a la API de KMS."
      ],
      "answer": "Genera un nuevo material criptográfico para la clave sin cambiar el ID de la clave ni romper las aplicaciones existentes.",
      "hint": "La rotación gestionada por AWS es transparente para el usuario.",
      "explanation": "La rotación automática de claves en KMS genera nuevo material de clave anualmente. AWS mantiene el material antiguo para descifrar datos pasados, por lo que no es necesario volver a cifrar los datos existentes ni cambiar el código."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Estás utilizando Amazon Athena para consultar datos cifrados en S3 con SSE-KMS. Las consultas fallan con un error de 'Access Denied'. Además de permisos de S3, ¿qué otros permisos necesita el rol de IAM del usuario?",
      "options": [
        "kms:GenerateDataKey y kms:Decrypt sobre la clave KMS utilizada.",
        "kms:CreateKey sobre la cuenta de Athena.",
        "s3:PutObject sobre el bucket de resultados.",
        "kms:Encrypt sobre el bucket de origen."
      ],
      "answer": "kms:GenerateDataKey y kms:Decrypt sobre la clave KMS utilizada.",
      "hint": "Athena debe poder 'abrir' los archivos cifrados de S3.",
      "explanation": "Como los datos están cifrados con KMS, Athena debe actuar en nombre del usuario para descifrar los archivos. Esto requiere permisos de KMS para generar claves de datos y descifrar el material."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Una organización requiere que los registros de salud almacenados en Amazon DynamoDB utilicen una clave de cifrado que ellos mismos puedan deshabilitar o eliminar en cualquier momento. ¿Qué opción de cifrado deben elegir?",
      "options": [
        "Cifrado por defecto de DynamoDB (AWS owned key).",
        "AWS managed key (aws/dynamodb).",
        "Customer managed key (Clave gestionada por el cliente).",
        "Cifrado en tránsito con TLS 1.3."
      ],
      "answer": "Customer managed key (Clave gestionada por el cliente).",
      "hint": "Es la única opción que otorga control total sobre el ciclo de vida de la clave.",
      "explanation": "Las 'Customer managed keys' permiten al usuario gestionar las políticas, la rotación, la deshabilitación y la eliminación de la clave, cumpliendo con requisitos de control total sobre el cifrado en reposo."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "En el contexto de AWS KMS, ¿qué es un 'Data Key' (clave de datos)?",
      "options": [
        "Una clave utilizada para cifrar la consola de administración de AWS.",
        "Una clave generada por KMS que se utiliza para cifrar grandes volúmenes de datos directamente fuera de KMS.",
        "El nombre de la contraseña del usuario root.",
        "Una clave que nunca sale de los módulos de seguridad de hardware (HSM) de AWS."
      ],
      "answer": "Una clave generada por KMS que se utiliza para cifrar grandes volúmenes de datos directamente fuera de KMS.",
      "hint": "KMS usa jerarquía de claves (Envelope Encryption).",
      "explanation": "KMS utiliza el cifrado de sobre (Envelope Encryption). Las 'Data Keys' se usan para cifrar los datos del usuario. Estas llaves son a su vez cifradas por una clave maestra (KMS Key) para su almacenamiento seguro."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Necesitas aplicar una máscara de datos a una tabla en el catálogo de AWS Glue para que el servicio Amazon Athena solo muestre los valores hash de la columna 'email'. ¿Qué servicio facilita esta configuración?",
      "options": [
        "AWS Lake Formation (Data Masking).",
        "Amazon Redshift Spectrum.",
        "AWS Secrets Manager.",
        "S3 Lifecycle Policies."
      ],
      "answer": "AWS Lake Formation (Data Masking).",
      "hint": "Permite definir políticas de acceso basadas en etiquetas o columnas con opciones de transformación.",
      "explanation": "AWS Lake Formation permite configurar el enmascaramiento de datos (data masking) como parte de sus permisos de grano fino. Permite mostrar solo hashes, constantes o valores parciales de una columna."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Un clúster de Amazon EMR necesita escribir datos cifrados en S3. ¿Qué componente de EMR se utiliza para definir las claves de KMS y los modos de cifrado que el clúster debe emplear?",
      "options": [
        "EMR Bootstrap Actions",
        "Security Configurations (Configuraciones de seguridad)",
        "EMR Managed Scaling",
        "IAM Service Roles"
      ],
      "answer": "Security Configurations (Configuraciones de seguridad)",
      "hint": "Es un recurso reutilizable que define los ajustes de seguridad para uno o más clústeres.",
      "explanation": "Las 'Security Configurations' en EMR permiten especificar el cifrado en reposo (S3, disco local) y en tránsito, indicando qué claves de KMS usar para cada capa de almacenamiento de forma centralizada."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "¿Cuál es la forma más segura de transferir archivos de datos extremadamente sensibles desde un servidor local a Amazon S3 si la empresa no confía en el cifrado de red TLS estándar?",
      "options": [
        "Usar AWS Snowball sin cifrado.",
        "Cifrar los datos localmente con el AWS Encryption SDK antes de iniciar la transferencia.",
        "Habilitar SSE-S3 en el bucket de destino.",
        "Utilizar una conexión VPN sin cifrado adicional."
      ],
      "answer": "Cifrar los datos localmente con el AWS Encryption SDK antes de iniciar la transferencia.",
      "hint": "Añade una capa de seguridad antes de que los datos toquen cualquier infraestructura de red.",
      "explanation": "Cifrar los datos antes del tránsito (Client-side encryption) asegura que incluso si la capa de transporte (TLS) se viera comprometida, los datos sigan siendo ilegibles, proporcionando seguridad de extremo a extremo."
    },
    {
      "subjectId": "dea",
      "topicId": "dea-4",
      "question": "Para cumplir con GDPR, un ingeniero de datos debe anonimizar un dataset reemplazando los nombres de los usuarios con valores únicos que no permitan la re-identificación pero mantengan la integridad referencial para análisis. ¿Qué técnica es esta?",
      "options": [
        "Symmetric Encryption",
        "Pseudonymization (Seudonimización / Hashing)",
        "Data Compression",
        "Object Tagging"
      ],
      "answer": "Pseudonymization (Seudonimización / Hashing)",
      "hint": "Sustituye identificadores por seudónimos o códigos únicos.",
      "explanation": "La seudonimización (como el hashing con sal) reemplaza datos sensibles por identificadores artificiales. Esto protege la identidad del usuario mientras permite a los analistas unir tablas utilizando el seudónimo persistente."
    },
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Un administrador de seguridad necesita investigar quién eliminó una tabla de Amazon Redshift hace 15 días. ¿Qué servicio de AWS proporciona el historial de eventos documentando la identidad del usuario y la hora exacta de la llamada a la API?",
"options": [
"Amazon CloudWatch Metrics",
"AWS CloudTrail",
"Amazon VPC Flow Logs",
"AWS Trusted Advisor"
],
"answer": "AWS CloudTrail",
"hint": "Registra las acciones realizadas por un usuario, un rol o un servicio de AWS.",
"explanation": "AWS CloudTrail registra las llamadas a la API de AWS, incluyendo el nombre del evento, la identidad del usuario y los parámetros de la solicitud, lo que lo hace esencial para auditorías y análisis de seguridad."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Deseas almacenar y monitorear los logs de salida estándar de una aplicación personalizada que se ejecuta en instancias EC2 para identificar errores en tiempo real. ¿Cuál es el servicio de destino más adecuado?",
"options": [
"Amazon S3",
"Amazon CloudWatch Logs",
"AWS Artifact",
"Amazon ElastiCache"
],
"answer": "Amazon CloudWatch Logs",
"hint": "Permite centralizar logs de aplicaciones y sistemas operativos con capacidades de monitoreo.",
"explanation": "Amazon CloudWatch Logs permite centralizar los logs de diversas fuentes. Al usar el agente de CloudWatch, puedes enviar logs de aplicaciones a grupos de logs para monitoreo y alertas inmediatas."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Una empresa debe realizar consultas SQL complejas sobre el historial de eventos de auditoría de los últimos 2 años sin tener que configurar un pipeline de ETL manual hacia Amazon S3 y Athena. ¿Qué característica de CloudTrail facilita esto?",
"options": [
"CloudTrail Insights",
"CloudTrail Lake",
"CloudTrail Trails (S3 delivery)",
"AWS Config"
],
"answer": "CloudTrail Lake",
"hint": "Es un lago de datos administrado que permite buscar eventos mediante SQL.",
"explanation": "CloudTrail Lake es un almacén de datos de eventos administrado que permite agregar, almacenar y consultar eventos de auditoría mediante SQL estándar, simplificando la retención a largo plazo y el análisis sin infraestructura adicional."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Necesitas analizar rápidamente miles de líneas de logs de una función AWS Lambda en la consola para encontrar el promedio de tiempo de ejecución ('Duration'). ¿Qué herramienta permite realizar esta consulta interactiva?",
"options": [
"Amazon Athena",
"CloudWatch Logs Insights",
"S3 Select",
"AWS Glue DataBrew"
],
"answer": "CloudWatch Logs Insights",
"hint": "Utiliza un lenguaje de consulta específico para filtrar y agregar datos de log dentro de CloudWatch.",
"explanation": "CloudWatch Logs Insights permite realizar búsquedas y análisis interactivos en los grupos de logs. Puedes filtrar por errores, calcular agregaciones y visualizar tendencias de forma inmediata."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Un ingeniero de datos quiere visualizar en tiempo real los logs de acceso a una API a través de dashboards interactivos con búsqueda de texto completo. ¿Qué servicio de búsqueda y análisis es el más adecuado?",
"options": [
"Amazon OpenSearch Service",
"Amazon Redshift",
"Amazon Athena",
"AWS Data Pipeline"
],
"answer": "Amazon OpenSearch Service",
"hint": "Es ideal para la observabilidad y el análisis de logs en tiempo real con Dashboards integrados.",
"explanation": "Amazon OpenSearch Service (sucesor de Elasticsearch) permite la ingesta de logs en tiempo real y ofrece capacidades de búsqueda rápida y visualizaciones complejas mediante OpenSearch Dashboards."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Para una auditoría de cumplimiento, se requiere capturar no solo las acciones de gestión (como crear un bucket), sino también las acciones a nivel de objeto (como descargar un archivo específico de S3). ¿Cómo se configura esto en CloudTrail?",
"options": [
"Habilitando 'Management Events' únicamente.",
"Habilitando 'Data Events' en la configuración del Trail.",
"Habilitando 'Insights Events'.",
"Consultando los registros de Amazon GuardDuty."
],
"answer": "Habilitando 'Data Events' en la configuración del Trail.",
"hint": "Proporcionan visibilidad sobre las operaciones de datos realizadas en o dentro de un recurso.",
"explanation": "Los 'Data Events' (eventos de datos) de CloudTrail registran operaciones a nivel de recurso (como GetObject o PutObject en S3). Por defecto no se activan para evitar costos excesivos, por lo que deben configurarse explícitamente."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Tienes varios terabytes de registros históricos de aplicaciones almacenados en Amazon S3. Necesitas realizar una limpieza y agregación masiva de estos logs para un reporte anual. ¿Qué servicio de procesamiento de Big Data es el más escalable para esta integración?",
"options": [
"AWS Lambda",
"Amazon EMR",
"AWS AppConfig",
"Amazon RDS"
],
"answer": "Amazon EMR",
"hint": "Utiliza marcos de trabajo como Apache Spark para procesar grandes volúmenes de datos distribuidos.",
"explanation": "Amazon EMR es ideal para procesar volúmenes masivos de logs (Big Data). Permite ejecutar jobs de Spark o Hive sobre archivos en S3 para transformar y analizar logs antes de cargarlos en un sistema de auditoría."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "¿Cuál es la ventaja de usar Amazon Athena para analizar logs de CloudTrail almacenados en un bucket de S3 en comparación con ver el historial de eventos en la consola de CloudTrail?",
"options": [
"Athena es gratuito.",
"Athena permite realizar consultas SQL sobre periodos de tiempo superiores a 90 días y unir logs con otras tablas.",
"Athena cifra automáticamente los logs al leerlos.",
"Athena no requiere permisos de IAM."
],
"answer": "Athena permite realizar consultas SQL sobre periodos de tiempo superiores a 90 días y unir logs con otras tablas.",
"hint": "La consola de CloudTrail tiene un límite de retención para la vista de eventos gratuita.",
"explanation": "Mientras que la consola de CloudTrail solo muestra los últimos 90 días de eventos de gestión, usar Athena sobre los archivos entregados en S3 permite analizar todo el historial y realizar joins con otros datasets."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Deseas rastrear cambios anómalos en los patrones de llamadas a la API, como un aumento repentino en errores 'Access Denied'. ¿Qué característica de CloudTrail ayuda a identificar estos comportamientos inusuales automáticamente?",
"options": [
"CloudTrail Data Events",
"CloudTrail Insights",
"AWS Secrets Manager",
"Amazon Inspector"
],
"answer": "CloudTrail Insights",
"hint": "Analiza las métricas de uso de la API para detectar anomalías operativas.",
"explanation": "CloudTrail Insights analiza automáticamente los patrones de gestión de eventos de tus Trails para identificar actividades inusuales, como picos en el volumen de llamadas o tasas de error atípicas."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Para centralizar los logs de múltiples cuentas de AWS dentro de una organización para una auditoría global, ¿cuál es la mejor práctica recomendada?",
"options": [
"Crear un usuario de IAM en cada cuenta para descargar logs manualmente.",
"Configurar un 'Organization Trail' que entregue los logs de todas las cuentas a un bucket de S3 en una cuenta maestra o de seguridad.",
"Usar AWS Snowball para mover logs semanalmente.",
"Habilitar VPC Peering entre todas las cuentas."
],
"answer": "Configurar un 'Organization Trail' que entregue los logs de todas las cuentas a un bucket de S3 en una cuenta maestra o de seguridad.",
"hint": "Permite una gobernanza uniforme en toda la estructura de AWS Organizations.",
"explanation": "Un Trail de organización permite capturar eventos de todas las cuentas de la organización en un solo lugar de forma automática, asegurando que ninguna cuenta quede sin auditar."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Al exportar logs de CloudWatch a Amazon S3 para archivado a largo plazo, ¿qué paso es crítico para asegurar que la exportación sea exitosa?",
"options": [
"Deshabilitar el cifrado en S3.",
"Configurar la política del bucket de S3 para otorgar permisos al servicio de CloudWatch Logs.",
"Cambiar el formato de los logs a MP4.",
"Aumentar el límite de tamaño de la instancia EC2."
],
"answer": "Configurar la política del bucket de S3 para otorgar permisos al servicio de CloudWatch Logs.",
"hint": "El servicio de origen debe tener permiso para escribir ('PutObject') en el bucket de destino.",
"explanation": "Para realizar una exportación, el bucket de S3 de destino debe tener una política que permita la acción 's3:PutObject' al principal del servicio de CloudWatch Logs ('https://www.google.com/search?q=logs.amazonaws.com')."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Quieres recibir una notificación por correo electrónico cada vez que el usuario 'root' inicie sesión en la consola de AWS. ¿Qué combinación de servicios deberías integrar?",
"options": [
"CloudTrail -\> EventBridge -\> SNS",
"CloudWatch Metrics -\> S3 -\> Lambda",
"AWS Config -\> Athena -\> QuickSight",
"AWS IAM -\> Secrets Manager -\> SES"
],
"answer": "CloudTrail -\> EventBridge -\> SNS",
"hint": "Los eventos de CloudTrail pueden activar reglas de EventBridge para notificaciones inmediatas.",
"explanation": "CloudTrail detecta el evento de inicio de sesión. Una regla de EventBridge identifica ese evento específico y dispara una notificación a través de un tópico de Amazon SNS (Simple Notification Service)."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "En CloudWatch Logs Insights, ¿cuál es el comando utilizado para extraer campos específicos de un mensaje de log semi-estructurado para su análisis?",
"options": [
"SELECT",
"PARSE",
"EXTRACT",
"FETCH"
],
"answer": "PARSE",
"hint": "Se usa con expresiones regulares o glob patterns para crear campos efímeros.",
"explanation": "El comando 'parse' en CloudWatch Logs Insights permite extraer datos de un campo de log (como @message) y asignarlos a nuevos campos para realizar filtros o agregaciones posteriores."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "¿Cuál es la principal ventaja de utilizar CloudTrail Lake para consultas de auditoría en comparación con Athena sobre logs en S3?",
"options": [
"CloudTrail Lake es significativamente más lento.",
"CloudTrail Lake ofrece inmutabilidad integrada y retención optimizada diseñada específicamente para cumplimiento legal.",
"Solo Athena permite usar SQL.",
"CloudTrail Lake requiere que instales bases de datos manualmente."
],
"answer": "CloudTrail Lake ofrece inmutabilidad integrada y retención optimizada diseñada específicamente para cumplimiento legal.",
"hint": "Es una solución 'todo en uno' para el almacenamiento y búsqueda de registros de auditoría.",
"explanation": "CloudTrail Lake gestiona la ingesta, el almacenamiento inmutable y la interfaz de consulta de forma nativa, eliminando la necesidad de gestionar particiones de S3 o Glue Crawlers para analizar los logs."
},
{
"subjectId": "dea",
"topicId": "dea-4",
"question": "Un ingeniero de datos observa que el almacenamiento de CloudWatch Logs está incrementando los costos. ¿Qué configuración debe ajustar para asegurar que los logs no se guarden para siempre si no son necesarios para auditoría?",
"options": [
"Log Stream Name",
"Retention Setting (Ajuste de retención)",
"Metric Filter",
"KMS Key ID"
],
"answer": "Retention Setting (Ajuste de retención)",
"hint": "Define el periodo tras el cual CloudWatch elimina automáticamente los eventos de log.",
"explanation": "Por defecto, CloudWatch Logs guarda los datos indefinidamente. Ajustar la política de retención (ej. a 90 días o 1 año) ayuda a controlar los costos eliminando datos obsoletos automáticamente."
},
{
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "Un Data Engineer necesita compartir datos de un clúster de Amazon Redshift con otro clúster en una cuenta de AWS distinta sin mover los datos. ¿Cuál es el primer paso necesario para otorgar permisos?",
    "options": [
      "Realizar un UNLOAD de los datos a S3 y cargarlos en la cuenta de destino.",
      "Crear un datashare en el clúster productor y agregar los objetos de datos (esquemas, tablas) al datashare.",
      "Configurar un VPC Peering entre ambas cuentas y usar comandos GRANT estándar de SQL.",
      "Usar AWS Data Exchange para publicar el conjunto de datos de Redshift."
    ],
    "answer": "Crear un datashare en el clúster productor y agregar los objetos de datos (esquemas, tablas) al datashare.",
    "hint": "Redshift utiliza una característica específica para el intercambio de datos en vivo entre clústeres.",
    "explanation": "Para compartir datos en Redshift (Data Sharing), primero se crea un 'datashare' en el clúster productor, se agregan los objetos y luego se otorga acceso al clúster o cuenta consumidora."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "Una empresa desea identificar automáticamente información de identificación personal (PII) en sus buckets de S3 y asegurar que solo ciertos roles de Lake Formation puedan verla. ¿Qué combinación de servicios es la más adecuada?",
    "options": [
      "Amazon GuardDuty y AWS Glue.",
      "Amazon Macie y AWS Lake Formation.",
      "AWS Shield y Amazon S3 Batch Operations.",
      "Amazon Inspector y AWS IAM."
    ],
    "answer": "Amazon Macie y AWS Lake Formation.",
    "hint": "Busca el servicio de AWS especializado en descubrimiento de datos sensibles y el servicio de gobernanza de Data Lakes.",
    "explanation": "Amazon Macie se utiliza para descubrir datos sensibles (PII) en S3, mientras que Lake Formation permite gestionar el acceso fino y la seguridad de esos datos una vez catalogados."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "Para cumplir con las leyes de soberanía de datos, un Data Engineer debe evitar que los backups de una base de datos se repliquen fuera de la región 'us-east-1'. ¿Qué herramienta permite implementar esta restricción a nivel de toda la organización?",
    "options": [
      "Políticas de control de servicios (SCP) de AWS Organizations.",
      "Reglas de Amazon S3 Lifecycle.",
      "Políticas de confianza de IAM.",
      "AWS DataSync con filtros de exclusión."
    ],
    "answer": "Políticas de control de servicios (SCP) de AWS Organizations.",
    "hint": "Esta herramienta permite establecer límites de permisos globales que prevalecen incluso sobre los administradores de cuentas individuales.",
    "explanation": "Las SCP permiten restringir acciones (como `s3:PutReplicationConfiguration`) o limitar el uso de servicios a regiones específicas para todas las cuentas de una organización."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "¿Qué servicio de AWS debe utilizar un Data Engineer para auditar y ver el historial de cambios de configuración en los recursos de su cuenta, como cambios en las políticas de un bucket de S3?",
    "options": [
      "AWS CloudTrail.",
      "Amazon CloudWatch Logs.",
      "AWS Config.",
      "AWS Systems Manager."
    ],
    "answer": "AWS Config.",
    "hint": "CloudTrail registra 'quién' hizo la llamada a la API, pero este servicio registra 'cómo' cambió el recurso y su estado a lo largo del tiempo.",
    "explanation": "AWS Config proporciona un historial detallado de los cambios de configuración de los recursos y permite evaluar si las configuraciones cumplen con las reglas deseadas."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "Al implementar un marco de gobernanza de datos en un entorno de múltiples cuentas, ¿cuál es el patrón de intercambio de datos que centraliza el catálogo de metadatos en una sola cuenta y permite el acceso a cuentas consumidoras?",
    "options": [
      "Patrón de malla de datos (Data Mesh) totalmente descentralizado.",
      "Patrón de centro y radio (Hub-and-spoke) utilizando AWS Lake Formation.",
      "Patrón de replicación punto a punto mediante AWS Glue.",
      "Arquitectura monolitíca de S3."
    ],
    "answer": "Patrón de centro y radio (Hub-and-spoke) utilizando AWS Lake Formation.",
    "hint": "Este modelo utiliza una cuenta 'central' para gestionar permisos y compartir recursos con cuentas 'satélite'.",
    "explanation": "El modelo Hub-and-spoke centraliza la gobernanza en una cuenta de catálogo (Hub) que comparte recursos de forma segura con cuentas consumidoras (Spokes) mediante Lake Formation."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "Un Data Engineer necesita gestionar el acceso a los datos utilizados por científicos de datos que trabajan en Amazon SageMaker. ¿Cómo puede utilizar Amazon SageMaker para catalogar y descubrir datos de manera gobernada?",
    "options": [
      "Usando Amazon SageMaker Feature Store.",
      "Usando proyectos de SageMaker y la integración con el catálogo de AWS Glue/Lake Formation.",
      "Configurando buckets de S3 públicos con etiquetas de Amazon SageMaker.",
      "Utilizando instancias de SageMaker Notebook con acceso total a IAM."
    ],
    "answer": "Usando proyectos de SageMaker y la integración con el catálogo de AWS Glue/Lake Formation.",
    "hint": "SageMaker puede integrarse con el catálogo de metadatos central para que los usuarios encuentren datos sin conocer las rutas de S3.",
    "explanation": "SageMaker permite a los científicos de datos descubrir y acceder a datos gobernados a través de la integración con el catálogo de datos de AWS Glue, a menudo gestionado bajo Lake Formation."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "En el contexto de soberanía de datos, ¿cuál es la mejor práctica para asegurar que los datos procesados en AWS nunca salgan de una ubicación geográfica específica?",
    "options": [
      "Utilizar AWS Outposts para mantener los datos on-premises bajo la infraestructura de AWS.",
      "Habilitar el cifrado con claves gestionadas por AWS (SSE-KMS).",
      "Usar instancias Spot de EC2 en cualquier región disponible.",
      "Configurar una VPC multiregión con tráfico compartido."
    ],
    "answer": "Utilizar AWS Outposts para mantener los datos on-premises bajo la infraestructura de AWS.",
    "hint": "Considere la opción que permite ejecutar servicios de AWS físicamente en el centro de datos del cliente.",
    "explanation": "AWS Outposts permite ejecutar servicios de AWS en las instalaciones del cliente, lo que garantiza que los datos permanezcan físicamente en una ubicación específica para cumplir con requisitos de soberanía."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "Para compartir datos de Amazon Redshift entre dos cuentas, después de que el productor ha otorgado acceso al consumidor, ¿cuál es el paso final que debe realizar el administrador de la cuenta CONSUMIDORA?",
    "options": [
      "Ejecutar un comando COPY desde el clúster productor.",
      "Crear una base de datos local en su clúster de Redshift a partir del datashare recibido.",
      "Instalar un agente de Redshift en el clúster consumidor.",
      "Reiniciar el clúster de Redshift para ver los nuevos datos."
    ],
    "answer": "Crear una base de datos local en su clúster de Redshift a partir del datashare recibido.",
    "hint": "El consumidor necesita mapear el datashare a una entidad que SQL pueda consultar localmente.",
    "explanation": "Una vez recibido el datashare, el administrador de la cuenta consumidora debe crear una base de datos de Redshift referenciando el ARN del datashare para poder consultar los datos."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "¿Cuál es la función principal de Amazon Macie en una estrategia de privacidad de datos?",
    "options": [
      "Cifrar automáticamente todos los archivos subidos a S3.",
      "Escanear buckets de S3 para detectar datos sensibles como números de tarjetas de crédito o pasaportes.",
      "Eliminar registros de CloudTrail que contengan PII.",
      "Actuar como un firewall para peticiones SQL en Amazon Athena."
    ],
    "answer": "Escanear buckets de S3 para detectar datos sensibles como números de tarjetas de crédito o pasaportes.",
    "hint": "Se trata de descubrimiento y clasificación de datos, no de cifrado o bloqueo de red.",
    "explanation": "Amazon Macie utiliza aprendizaje automático e identificación de patrones para descubrir y clasificar datos sensibles (PII) almacenados en S3."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "Un Data Engineer observa que una tabla compartida en Lake Formation contiene una columna 'email' que debe ser ocultada para ciertos usuarios. ¿Qué característica de Lake Formation permite esto?",
    "options": [
      "Cifrado a nivel de fila de S3.",
      "Control de acceso basado en etiquetas (LF-TBAC) o filtros de columna.",
      "Políticas de bucket de S3 con condiciones de prefijo.",
      "Roles de IAM con exclusiones de caracteres."
    ],
    "answer": "Control de acceso basado en etiquetas (LF-TBAC) o filtros de columna.",
    "hint": "Esta característica permite definir permisos sobre partes específicas de una tabla, como filas o columnas.",
    "explanation": "Lake Formation permite implementar seguridad a nivel fino (fine-grained access control), permitiendo incluir o excluir columnas específicas para determinados usuarios o roles."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "¿Qué regla de AWS Config podría ayudar a un Data Engineer a garantizar que no se habiliten réplicas de datos de S3 hacia regiones no autorizadas?",
    "options": [
      "s3-bucket-ssl-requests-only.",
      "s3-bucket-replication-enabled con parámetros de región permitidos.",
      "iam-policy-no-statements-with-admin-access.",
      "cloud-trail-encryption-enabled."
    ],
    "answer": "s3-bucket-replication-enabled con parámetros de región permitidos.",
    "hint": "Busca la regla que monitorea específicamente la función de replicación de S3.",
    "explanation": "Las reglas de AWS Config pueden configurarse para evaluar si la replicación de S3 apunta a una región que no está en la lista de regiones permitidas por la política de la empresa."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "¿Cuál es el beneficio de utilizar un marco de gobernanza de datos (Data Governance Framework) en AWS?",
    "options": [
      "Aumentar la velocidad de transferencia de datos por internet.",
      "Garantizar que los datos sean precisos, estén disponibles y se utilicen de forma segura y ética.",
      "Reducir el costo de almacenamiento de S3 mediante compresión automática.",
      "Eliminar la necesidad de usar contraseñas en las bases de datos."
    ],
    "answer": "Garantizar que los datos sean precisos, estén disponibles y se utilicen de forma segura y ética.",
    "hint": "La gobernanza va más allá del rendimiento técnico; se trata de control, cumplimiento y calidad.",
    "explanation": "Un marco de gobernanza define procesos y responsabilidades para asegurar la calidad de los datos y el cumplimiento normativo en toda la organización."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "En un entorno de Amazon Redshift Data Sharing, ¿quién es responsable de pagar por los recursos de cómputo utilizados para ejecutar las consultas en la cuenta consumidora?",
    "options": [
      "La cuenta productora siempre paga todo.",
      "La cuenta consumidora paga por su propio clúster que ejecuta la consulta.",
      "AWS divide el costo automáticamente al 50% entre ambas cuentas.",
      "El intercambio de datos es gratuito y no consume recursos de cómputo."
    ],
    "answer": "La cuenta consumidora paga por su propio clúster que ejecuta la consulta.",
    "hint": "El almacenamiento está en un lugar, pero el procesamiento ocurre donde se lanza la consulta.",
    "explanation": "En Redshift Data Sharing, el productor paga por el almacenamiento, pero el consumidor paga por los recursos de cómputo (clústeres o Redshift Serverless) utilizados para consultar esos datos."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "Al configurar Amazon Macie, ¿qué se utiliza para definir criterios de búsqueda personalizados para datos sensibles que no están cubiertos por los identificadores gestionados por AWS?",
    "options": [
      "Expresiones Regulares (Regex) en Custom Data Identifiers.",
      "Funciones de AWS Lambda con Amazon Textract.",
      "Consultas SQL de Amazon Athena.",
      "Filtros de búsqueda de Amazon CloudWatch."
    ],
    "answer": "Expresiones Regulares (Regex) en Custom Data Identifiers.",
    "hint": "Es una forma de decirle a Macie que busque patrones específicos de texto definidos por ti.",
    "explanation": "Los Identificadores de Datos Personalizados (Custom Data Identifiers) en Macie permiten usar expresiones regulares para detectar PII específica de una empresa o región."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-4",
    "question": "¿Qué acción permite mantener la soberanía de los datos al usar servicios de AWS para el procesamiento de datos analíticos?",
    "options": [
      "Habilitar el acceso público a los buckets de S3 para auditoría externa.",
      "Seleccionar regiones de AWS que se encuentren dentro de la jurisdicción legal requerida.",
      "Usar siempre la región 'us-east-1' por ser la más antigua.",
      "Mover todos los datos a una base de datos NoSQL."
    ],
    "answer": "Seleccionar regiones de AWS que se encuentren dentro de la jurisdicción legal requerida.",
    "hint": "La soberanía de datos depende directamente de dónde residen físicamente los servidores que los contienen.",
    "explanation": "AWS permite a los clientes elegir en qué región almacenar sus datos. Seleccionar regiones específicas asegura que los datos permanezcan bajo las leyes de ese país o jurisdicción."
  },
{
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Un Data Engineer necesita automatizar el movimiento de datos desde Salesforce hacia Amazon S3 sin escribir código. Según los servicios In-Scope, ¿cuál es la opción más eficiente?",
    "options": [
      "Escribir una función AWS Lambda con el SDK de Salesforce.",
      "Usar Amazon AppFlow para configurar un flujo de transferencia entre Salesforce y S3.",
      "Utilizar AWS DataSync para sincronizar los endpoints de la API.",
      "Configurar un túnel con AWS PrivateLink y usar AWS Glue."
    ],
    "answer": "Usar Amazon AppFlow para configurar un flujo de transferencia entre Salesforce y S3.",
    "hint": "Busca el servicio de integración de aplicaciones diseñado específicamente para SaaS.",
    "explanation": "Amazon AppFlow es un servicio de integración totalmente gestionado que permite transferir datos de forma segura entre aplicaciones SaaS (como Salesforce) y servicios de AWS como S3 o Redshift sin necesidad de código."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Se requiere procesar flujos de datos de video en tiempo real para detectar anomalías y enviarlos a un Data Lake en S3. ¿Qué combinación de servicios de la categoría 'Analytics' es la adecuada?",
    "options": [
      "Amazon Kinesis Data Streams y Amazon Kinesis Data Firehose.",
      "Amazon MSK y AWS Batch.",
      "AWS Snowcone y Amazon S3 Glacier.",
      "Amazon Athena y AWS Glue DataBrew."
    ],
    "answer": "Amazon Kinesis Data Streams y Amazon Kinesis Data Firehose.",
    "hint": "Uno captura el stream en tiempo real y el otro lo carga en el destino (S3).",
    "explanation": "Kinesis Data Streams captura los datos en tiempo real y Kinesis Data Firehose los entrega de forma automática a Amazon S3, permitiendo transformaciones simples en el camino."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Para optimizar los costos de una arquitectura analítica, se desea que los datos que no se han consultado en 30 días se muevan de S3 Standard a una clase de almacenamiento más económica pero de acceso instantáneo. ¿Qué se debe usar?",
    "options": [
      "Amazon S3 Glacier Deep Archive.",
      "Políticas de ciclo de vida de S3 hacia S3 Standard-Infrequent Access (IA).",
      "Amazon EBS Cold HDD.",
      "AWS Backup con replicación regional."
    ],
    "answer": "Políticas de ciclo de vida de S3 hacia S3 Standard-Infrequent Access (IA).",
    "hint": "Glacier tiene tiempos de recuperación largos; la pregunta pide acceso instantáneo.",
    "explanation": "S3 Standard-IA es ideal para datos de acceso menos frecuente pero que requieren acceso en milisegundos cuando es necesario. Las políticas de ciclo de vida automatizan esta transición."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Un Data Engineer está diseñando un pipeline de orquestación complejo que requiere reintentos, manejo de errores y ejecución paralela de múltiples AWS Lambda. ¿Qué servicio es el preferido para esta lógica de flujo?",
    "options": [
      "Amazon EventBridge.",
      "AWS Step Functions.",
      "Amazon MQ.",
      "AWS App Runner."
    ],
    "answer": "AWS Step Functions.",
    "hint": "Es un orquestador de flujos de trabajo basado en máquinas de estados.",
    "explanation": "AWS Step Functions permite coordinar múltiples servicios de AWS en flujos de trabajo visuales, manejando estados, errores y reintentos de forma nativa."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "En el contexto de 'Security, Identity, and Compliance', ¿qué servicio permitiría rotar automáticamente las credenciales de una base de datos Amazon RDS utilizada por una aplicación analítica?",
    "options": [
      "AWS IAM.",
      "AWS Key Management Service (KMS).",
      "AWS Secrets Manager.",
      "AWS Shield."
    ],
    "answer": "AWS Secrets Manager.",
    "hint": "Este servicio no solo guarda contraseñas, sino que puede ejecutar funciones Lambda para cambiarlas periódicamente.",
    "explanation": "AWS Secrets Manager está diseñado para proteger y rotar secretos, como credenciales de bases de datos, permitiendo que las aplicaciones los recuperen mediante API."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "¿Cuál de los siguientes servicios se considera 'Out-of-Scope' (fuera de alcance) para el examen DEA-C01 según la guía oficial?",
    "options": [
      "Amazon Bedrock.",
      "AWS Glue DataBrew.",
      "AWS Elastic Beanstalk.",
      "Amazon MSK."
    ],
    "answer": "AWS Elastic Beanstalk.",
    "hint": "Es un servicio de PaaS para despliegue de aplicaciones web, no enfocado directamente en ingeniería de datos.",
    "explanation": "AWS Elastic Beanstalk está explícitamente listado como fuera de alcance (Out-of-Scope) en la categoría de Compute para el examen de Data Engineer Associate."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Se desea realizar consultas SQL interactivas directamente sobre archivos Parquet almacenados en Amazon S3 sin necesidad de cargar los datos en una base de datos. ¿Qué servicio debe utilizarse?",
    "options": [
      "Amazon Redshift (clúster estándar).",
      "Amazon Athena.",
      "Amazon OpenSearch Service.",
      "AWS Database Migration Service (DMS)."
    ],
    "answer": "Amazon Athena.",
    "hint": "Es un servicio de consultas interactivo 'serverless' que usa SQL estándar.",
    "explanation": "Amazon Athena permite analizar datos directamente en Amazon S3 usando SQL, sin infraestructura que gestionar, pagando solo por las consultas ejecutadas."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Un Data Engineer necesita integrar modelos de IA generativa para enriquecer un conjunto de datos analíticos. ¿Qué servicio In-Scope ofrece acceso a modelos fundacionales mediante API?",
    "options": [
      "Amazon Kendra.",
      "Amazon Bedrock.",
      "AWS CodeBuild.",
      "Amazon Personalize."
    ],
    "answer": "Amazon Bedrock.",
    "hint": "Es el servicio principal de AWS para construir aplicaciones con IA Generativa.",
    "explanation": "Amazon Bedrock es un servicio totalmente gestionado que ofrece acceso a modelos fundacionales (FMs) de alto rendimiento para tareas de IA Generativa."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Para gestionar permisos de acceso a nivel de columna en un Data Lake de S3 catalogado con AWS Glue, ¿cuál es la herramienta recomendada?",
    "options": [
      "Políticas de bucket de S3.",
      "AWS Lake Formation.",
      "AWS Resource Access Manager (RAM).",
      "Amazon CloudFront."
    ],
    "answer": "AWS Lake Formation.",
    "hint": "Proporciona un modelo de permisos simplificado sobre el Glue Data Catalog.",
    "explanation": "AWS Lake Formation permite definir permisos granulares (filas, columnas, tablas) que se aplican a múltiples servicios de consulta como Athena y Redshift Spectrum."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "¿Qué servicio utilizaría para realizar una migración de una base de datos On-Premises hacia Amazon Aurora con el mínimo tiempo de inactividad?",
    "options": [
      "AWS Snowball Edge.",
      "AWS Database Migration Service (DMS).",
      "AWS Transfer Family.",
      "Amazon S3 Glacier."
    ],
    "answer": "AWS Database Migration Service (DMS).",
    "hint": "Soporta replicación continua durante el proceso de migración.",
    "explanation": "AWS DMS ayuda a migrar bases de datos a AWS de forma rápida y segura, manteniendo la base de datos de origen operativa durante la migración mediante Change Data Capture (CDC)."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Un clúster de Amazon EMR necesita procesar grandes volúmenes de datos usando Apache Spark. ¿Qué opción de almacenamiento 'In-Scope' es la más común para actuar como el sistema de archivos persistente?",
    "options": [
      "Amazon EBS.",
      "Amazon S3 (vía EMRFS).",
      "Amazon MemoryDB for Redis.",
      "Amazon Route 53."
    ],
    "answer": "Amazon S3 (vía EMRFS).",
    "hint": "Permite separar el cómputo del almacenamiento.",
    "explanation": "EMRFS permite que Amazon EMR use Amazon S3 como si fuera un sistema de archivos HDFS, lo que facilita la persistencia de datos después de apagar el clúster."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Se requiere una base de datos NoSQL que soporte latencias de milisegundos de un solo dígito para una aplicación de seguimiento de datos de sensores en tiempo real. ¿Cuál es la mejor opción?",
    "options": [
      "Amazon RDS for PostgreSQL.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon DocumentDB."
    ],
    "answer": "Amazon DynamoDB.",
    "hint": "Es una base de datos de clave-valor totalmente gestionada y altamente escalable.",
    "explanation": "Amazon DynamoDB es ideal para aplicaciones que requieren un rendimiento consistente y escalable con latencias muy bajas, común en ingesta de datos de sensores/IoT."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Usted necesita monitorear las llamadas a la API realizadas en su cuenta de AWS para auditoría de seguridad en los pipelines de datos. ¿Qué servicio registra estas acciones?",
    "options": [
      "Amazon CloudWatch Logs.",
      "AWS CloudTrail.",
      "AWS Config.",
      "Amazon Managed Grafana."
    ],
    "answer": "AWS CloudTrail.",
    "hint": "Registra 'quién hizo qué' en la cuenta de AWS.",
    "explanation": "AWS CloudTrail registra el historial de llamadas a la API de AWS para una cuenta, permitiendo análisis de seguridad, seguimiento de cambios en recursos y cumplimiento normativo."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "Al trabajar con Amazon Redshift, ¿qué característica permite consultar datos directamente desde archivos en Amazon S3 sin cargarlos físicamente en el clúster?",
    "options": [
      "Redshift Spectrum.",
      "Redshift Data API.",
      "Redshift Concurrency Scaling.",
      "Redshift Workload Management."
    ],
    "answer": "Redshift Spectrum.",
    "hint": "Es una capacidad de Redshift que usa la infraestructura de Athena para consultar S3.",
    "explanation": "Amazon Redshift Spectrum permite ejecutar consultas SQL contra datos exabytes en Amazon S3 utilizando el mismo clúster de Redshift sin necesidad de ingestión previa."
  },
  {
    "subjectId": "dea",
    "topicId": "dea-5",
    "question": "¿Cuál es el propósito de Amazon Managed Workflows for Apache Airflow (MWAA) en un entorno de datos?",
    "options": [
      "Crear dashboards visuales para usuarios de negocio.",
      "Orquestar pipelines de datos utilizando DAGs escritos en Python.",
      "Almacenar objetos binarios de gran tamaño.",
      "Ejecutar consultas SQL sobre bases de datos NoSQL."
    ],
    "answer": "Orquestar pipelines de datos utilizando DAGs escritos en Python.",
    "hint": "Es la versión gestionada de la popular herramienta open-source Airflow.",
    "explanation": "Amazon MWAA facilita la ejecución de Apache Airflow en AWS para orquestar flujos de trabajo de datos complejos, eliminando la carga operativa de gestionar servidores."
  },
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Un administrador de sistemas nota que el rendimiento de una instancia ha disminuido. ¿Qué componente de hardware es responsable de ejecutar las operaciones aritméticas y lógicas, y cómo podría mejorar el rendimiento según el temario?",
"options": [
"La Memoria RAM aumentando los Gigabytes (GB).",
"La Unidad Central de Procesamiento (CPU) mediante el uso de varios núcleos.",
"La Tarjeta de Interfaz de Red (NIC) aumentando los Gbps.",
"La Unidad de Estado Sólido (SSD) aumentando las operaciones de E/S por segundo (IOPS)."
],
"answer": "La Unidad Central de Procesamiento (CPU) mediante el uso de varios núcleos.",
"hint": "Se le conoce como el 'cerebro' de la computadora y su rendimiento escala con la cantidad de núcleos.",
"explanation": "La CPU es el procesador que ejecuta instrucciones y realiza operaciones aritméticas/lógicas. El temario especifica que tener varios núcleos aumenta el rendimiento."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Durante un corte de energía inesperado en un centro de datos sin respaldo, ¿en qué componente es más probable que se pierdan los datos que estaban siendo procesados activamente pero no guardados?",
"options": [
"Unidad de Disco Duro (HDD)",
"Unidad de Estado Sólido (SSD)",
"Memoria de acceso aleatorio (RAM)",
"Placa Madre (Motherboard)"
],
"answer": "Memoria de acceso aleatorio (RAM)",
"hint": "Es un tipo de almacenamiento temporal.",
"explanation": "La RAM es volátil; el temario indica explícitamente que los datos se pierden cuando se apaga el equipo, a diferencia del almacenamiento constante (HDD/SSD)."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "En el Ciclo de Vida de Desarrollo de Software (SDLC), ¿en qué fase se genera el documento de Especificación de Requisitos de Software (SRS) que servirá de referencia para todo el proyecto?",
"options": [
"Planificación",
"Análisis",
"Diseño",
"Prueba"
],
"answer": "Análisis",
"hint": "Es la fase donde los requisitos se definen claramente y son aprobados por el cliente.",
"explanation": "Según el temario, en la fase de Análisis los requisitos se documentan en una SRS, la cual se usa como herramienta de referencia en los pasos posteriores."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Si una aplicación web requiere ser modificada debido a un cambio en el entorno del sistema operativo donde se ejecuta, ¿qué tipo de mantenimiento se está aplicando?",
"options": [
"Mantenimiento Correctivo",
"Mantenimiento Perfectivo",
"Mantenimiento Adaptativo",
"Mantenimiento Preventivo"
],
"answer": "Mantenimiento Adaptativo",
"hint": "Se refiere a cambios en el entorno de las aplicaciones.",
"explanation": "El mantenimiento adaptativo se realiza específicamente cuando hay cambios en el entorno (como el SO) para asegurar que la aplicación siga funcionando."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "De acuerdo con los roles del equipo de desarrollo, ¿quién es el responsable principal de ayudar a crear los criterios de aceptación para medir la finalización satisfactoria de la aplicación?",
"options": [
"Analista",
"Gerente de Proyecto",
"Desarrollador de Software",
"Control de Calidad (QA)"
],
"answer": "Control de Calidad (QA)",
"hint": "Este rol ejecuta pruebas e investiga errores.",
"explanation": "Aunque el analista define requisitos, el temario asigna específicamente al rol de Control de Calidad (QA) la tarea de ayudar a crear los criterios de aceptación."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Un desarrollador necesita elegir el lenguaje de programación para un nuevo proyecto. Según el SDLC, ¿en qué fase ocurre típicamente esta elección y la escritura real del código?",
"options": [
"Diseño",
"Desarrollo",
"Análisis",
"Prueba"
],
"answer": "Desarrollo",
"hint": "Es la fase donde el producto realmente se crea siguiendo las especificaciones.",
"explanation": "En la fase de Desarrollo se elige el lenguaje de programación y se escribe el código de acuerdo con el documento de especificaciones de diseño."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cuál es la función principal de la Placa Madre (Motherboard) dentro del hardware de una computadora?",
"options": [
"Almacenar archivos de programa y documentos de usuario de forma constante.",
"Mantener todos los componentes principales del hardware juntos y conectados.",
"Proporcionar la interfaz de usuario gráfica para el sistema operativo.",
"Medir la velocidad de conexión a internet en Gbps."
],
"answer": "Mantener todos los componentes principales del hardware juntos y conectados.",
"hint": "Es una placa de circuito impreso (PCB).",
"explanation": "La placa Madre conecta directa o indirectamente la CPU, memoria, almacenamiento y tarjetas, manteniendo la integridad del sistema físico."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Se ha identificado un error en el código después de que la aplicación fuera lanzada a producción. ¿Qué tipo de mantenimiento debe realizarse para solucionar este defecto específico?",
"options": [
"Mantenimiento Preventivo",
"Mantenimiento Perfectivo",
"Mantenimiento Adaptativo",
"Mantenimiento Correctivo"
],
"answer": "Mantenimiento Correctivo",
"hint": "Se enfoca en corregir defectos o errores identificados.",
"explanation": "El mantenimiento correctivo se activa cuando se identifica un defecto o error en la aplicación para subsanarlo."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cuál de los siguientes roles es responsable de la protección, copias de seguridad y optimización del rendimiento de los datos almacenados?",
"options": [
"Analista",
"Administrador de Bases de Datos (DBA)",
"Control de Calidad (QA)",
"Gerente de Proyecto"
],
"answer": "Administrador de Bases de Datos (DBA)",
"hint": "Se encarga de garantizar la disponibilidad de los recursos informáticos para que los datos funcionen correctamente.",
"explanation": "El DBA es responsable de planificar, configurar el acceso, proteger y realizar copias de seguridad de los datos de la base de datos."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "En el contexto de redes informáticas, ¿cuál es la diferencia clave entre una conexión Ethernet y una Wi-Fi según el temario?",
"options": [
"Ethernet es para servidores y Wi-Fi es solo para smartphones.",
"Ethernet es una red cableada y Wi-Fi es una red inalámbrica.",
"Wi-Fi es más rápida que Ethernet por definición.",
"Ethernet no requiere una Tarjeta de Interfaz de Red (NIC)."
],
"answer": "Ethernet es una red cableada y Wi-Fi es una red inalámbrica.",
"hint": "Se refiere al medio físico o señal que conecta los dispositivos.",
"explanation": "El temario clasifica los tipos de redes en Cableado (cable Ethernet) e Inalámbrico (señal Wi-Fi)."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Qué documento de la fase de Diseño contiene descripciones funcionales detalladas y descripciones de la interfaz de usuario para ser revisadas antes de la construcción?",
"options": [
"Especificación de Requisitos de Software (SRS)",
"Plan de Proyecto",
"Documento de Especificaciones de Diseño",
"Caso de Prueba de Aceptación"
],
"answer": "Documento de Especificaciones de Diseño",
"hint": "Contiene el enfoque de diseño propuesto para el proyecto.",
"explanation": "En la fase de Diseño se crea este documento que propone enfoques de arquitectura, descripciones funcionales y de interfaz."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Si una aplicación se ejecuta en un dispositivo especializado conectado a Internet para realizar tareas automáticas, ¿qué tipo de aplicación es?",
"options": [
"Aplicación Web",
"Aplicación Móvil",
"Aplicación de Escritorio",
"Aplicación de Internet de las Cosas (IoT)"
],
"answer": "Aplicación de Internet de las Cosas (IoT)",
"hint": "Se ejecuta en dispositivos especializados.",
"explanation": "Las aplicaciones de IoT se caracterizan por ejecutarse en dispositivos especializados conectados a Internet."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "La tecnología fundamental que permite crear máquinas virtuales en una computadora física y que es clave para la informática en la nube se llama:",
"options": [
"Virtualización del hardware",
"Sistema Operativo (OS)",
"Interfaz de Línea de Comandos (CLI)",
"Reducción de Latencia"
],
"answer": "Virtualización del hardware",
"hint": "Es una tecnología que maximiza el uso de una sola computadora física.",
"explanation": "El temario indica que la virtualización del hardware permite crear máquinas virtuales y es una tecnología fundamental en la nube."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cuál es la métrica correcta para medir el rendimiento de una unidad de almacenamiento, ya sea HDD o SSD?",
"options": [
"Gigabits por segundo (Gbps)",
"Megabytes por segundo (MB/s) o IOPS",
"Gigabytes (GB) de capacidad total",
"Número de núcleos del procesador"
],
"answer": "Megabytes por segundo (MB/s) o IOPS",
"hint": "Se refiere a la velocidad de acceso a los datos o número de operaciones de entrada/salida.",
"explanation": "El rendimiento de las unidades de almacenamiento se mide en MB/s o por el número de operaciones de E/S por segundo (IOPS)."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Según las prácticas para equipos de software eficaces, ¿qué herramienta se utiliza para realizar un seguimiento de los cambios en el código?",
"options": [
"Software de control de versiones",
"Interfaz de usuario gráfica (GUI)",
"Especificación de requisitos de software (SRS)",
"Sistema Operativo Amazon Linux 2"
],
"answer": "Software de control de versiones",
"hint": "Permite documentar y rastrear cada modificación realizada por el equipo.",
"explanation": "El temario recomienda utilizar software de control de versiones para realizar un seguimiento de los cambios en equipos de desarrollo eficaces."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Un equipo decide agregar una nueva funcionalidad para mejorar la experiencia del usuario en una aplicación que ya funciona correctamente. Según las categorías de mantenimiento del SDLC, ¿cómo se clasifica esta acción?",
"options": [
"Mantenimiento Correctivo",
"Mantenimiento Adaptativo",
"Mantenimiento Perfectivo",
"Mantenimiento Preventivo"
],
"answer": "Mantenimiento Perfectivo",
"hint": "Se trata de mejorar o añadir requisitos a una aplicación existente.",
"explanation": "El mantenimiento perfectivo se refiere a los cambios realizados en los requisitos de las aplicaciones para mejorar su funcionamiento o añadir nuevas características."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "En el contexto de los componentes de una computadora, ¿qué elemento actúa como el puente de comunicación entre la CPU, la memoria y los puertos de entrada/salida?",
"options": [
"La Unidad de Estado Sólido (SSD)",
"La Placa Madre (PCB)",
"El Adaptador de Red",
"La Unidad de Procesamiento"
],
"answer": "La Placa Madre (PCB)",
"hint": "Es la placa de circuito impreso que mantiene todo unido.",
"explanation": "La placa Madre (PCB) es la que conecta directa o indirectamente todos los componentes esenciales como la CPU, memoria, almacenamiento y puertos."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cuál es la responsabilidad principal del Analista de Negocios durante la fase de Análisis del SDLC?",
"options": [
"Escribir el código siguiendo los estándares de la organización.",
"Definir el propósito del proyecto y recopilar requisitos de los interesados.",
"Contratar personal para desempeñar los roles del equipo.",
"Configurar el acceso a los datos y realizar copias de seguridad."
],
"answer": "Definir el propósito del proyecto y recopilar requisitos de los interesados.",
"hint": "Este rol a veces se llama analista de requisitos.",
"explanation": "El analista define el propósito de cada proyecto y recopila requisitos del liderazgo, clientes y usuarios para organizar las tareas."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Se desea reducir la probabilidad de fallos futuros en un sistema mediante la revisión proactiva del código. ¿Qué tipo de mantenimiento se está ejecutando?",
"options": [
"Mantenimiento Preventivo",
"Mantenimiento Correctivo",
"Mantenimiento Adaptativo",
"Mantenimiento de Producción"
],
"answer": "Mantenimiento Preventivo",
"hint": "Su objetivo es evitar que aparezcan errores antes de que ocurran.",
"explanation": "El mantenimiento preventivo se realiza específicamente para la prevención de la aparición de errores en el futuro."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Qué componente de software es responsable de compartir y coordinar el uso de los recursos de hardware (CPU, RAM, Red) entre las diferentes aplicaciones de usuario?",
"options": [
"La Interfaz de Línea de Comandos (CLI)",
"El Sistema Operativo (SO)",
"La Especificación de Requisitos de Software (SRS)",
"La Unidad Central de Procesamiento (CPU)"
],
"answer": "El Sistema Operativo (SO)",
"hint": "Ejemplos de esto son Windows, macOS o Amazon Linux 2.",
"explanation": "El Sistema Operativo administra el hardware y el software, coordinando el uso de la CPU, memoria, almacenamiento y red por parte de las aplicaciones."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "En el SDLC, ¿en qué fase se evalúan diferentes arquitecturas y se consideran las limitaciones de riesgo, presupuesto y tiempo para seleccionar el enfoque más adecuado?",
"options": [
"Análisis",
"Planificación",
"Diseño",
"Implementación"
],
"answer": "Diseño",
"hint": "Es donde se crean los planos o esquemas de cómo se va a crear la solución.",
"explanation": "En la fase de diseño se evalúan diferentes arquitecturas y se revisan las opciones de diseño frente a riesgos, presupuesto y tiempo."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Si una empresa necesita medir qué tan rápido su servidor puede leer y escribir grandes volúmenes de datos, ¿en qué métricas debería enfocarse según el temario?",
"options": [
"Gigabits por segundo (Gbps)",
"Megahertz (MHz) y núcleos de CPU",
"MB por segundo (MB/s) o IOPS",
"Gigabytes (GB) de RAM"
],
"answer": "MB por segundo (MB/s) o IOPS",
"hint": "Estas métricas miden el rendimiento de la unidad de almacenamiento.",
"explanation": "El rendimiento de la unidad de almacenamiento se mide por su velocidad de acceso en MB/s o por el número de operaciones de E/S por segundo (IOPS)."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Dentro de un equipo de software, ¿quién es el responsable de documentar los pasos exactos para replicar un error y entregarlos al desarrollador?",
"options": [
"El Administrador de Bases de Datos",
"El Gerente de Proyecto",
"El Analista de Requisitos",
"El rol de Control de Calidad (QA)"
],
"answer": "El rol de Control de Calidad (QA)",
"hint": "Este miembro del equipo ejecuta las pruebas e investiga fallos.",
"explanation": "El equipo de QA documenta los pasos para replicar errores o problemas en la aplicación para que el desarrollador pueda corregirlos."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Una aplicación de compras de Amazon que se ejecuta en un smartphone es un ejemplo de:",
"options": [
"Software de Sistema",
"Software de Aplicación móvil",
"Hardware de Red",
"Sistema Operativo de escritorio"
],
"answer": "Software de Aplicación móvil",
"hint": "Se accede a ella desde un dispositivo móvil.",
"explanation": "Según el temario, una aplicación móvil se ejecuta y se accede a ella desde un dispositivo móvil, como el ejemplo de la aplicación de Amazon."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Durante la fase de Prueba del SDLC, ¿cómo se denomina al proceso en el que se escribe código específicamente para verificar el funcionamiento de otro código?",
"options": [
"Mantenimiento Correctivo",
"Pruebas Automatizadas",
"Análisis de Requisitos",
"Codificación de Producción"
],
"answer": "Pruebas Automatizadas",
"hint": "Es una forma eficiente de realizar pruebas unitarias o de integración.",
"explanation": "El temario define las pruebas automatizadas como el proceso donde se escribe código para probar otro código."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Qué rol en el equipo de desarrollo tiene la tarea de proporcionar actualizaciones constantes a la alta gerencia sobre el estado del proyecto?",
"options": [
"Desarrollador de Software",
"Administrador de Bases de Datos",
"Gerente de Proyecto",
"Analista de Negocios"
],
"answer": "Gerente de Proyecto",
"hint": "Es quien lidera y administra el equipo y el cronograma.",
"explanation": "El Gerente de Proyecto es responsable de liderar el equipo y proporcionar actualizaciones del progreso a la alta gerencia."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cuál es la función principal de la Memoria RAM en relación con la CPU?",
"options": [
"Almacenar archivos de forma permanente para que no se pierdan al apagar el equipo.",
"Contener las instrucciones y datos del programa para que la CPU los ejecute rápidamente.",
"Proporcionar conexión inalámbrica a través de señales Wi-Fi.",
"Realizar las operaciones aritméticas de la computadora."
],
"answer": "Contener las instrucciones y datos del programa para que la CPU los ejecute rápidamente.",
"hint": "Es un almacenamiento temporal que la CPU usa para recuperar datos e instrucciones.",
"explanation": "La memoria (RAM) contiene las instrucciones y datos del programa para que la CPU los recupere, ejecute y utilice de forma temporal."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "En el SDLC, ¿cuándo se considera que una aplicación ha pasado a la etapa de 'producción'?",
"options": [
"Cuando el desarrollador termina de escribir el código.",
"Cuando se identifica el primer defecto en la fase de prueba.",
"Cuando se lanza y comienza a ser utilizada por el cliente final.",
"Cuando el analista termina el documento SRS."
],
"answer": "Cuando se lanza y comienza a ser utilizada por el cliente final.",
"hint": "Ocurre después de la aprobación y firma del cliente en la fase de implementación.",
"explanation": "En la fase de implementación, una vez que el cliente aprueba la finalización, la aplicación se lanza y se utiliza en producción."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cuál de las siguientes es una práctica recomendada para que los equipos de software sean eficaces al manejar cambios constantes?",
"options": [
"Evitar la documentación para ahorrar tiempo.",
"Utilizar software de control de versiones.",
"No permitir la retroalimentación bidireccional.",
"Asignar todas las tareas a un solo miembro del equipo."
],
"answer": "Utilizar software de control de versiones.",
"hint": "Sirve para realizar un seguimiento de los cambios y colaborar mejor.",
"explanation": "El uso de software de control de versiones es una pauta clave para el seguimiento de cambios y una colaboración eficaz en equipos de software."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Un dispositivo especializado que monitorea la temperatura de una fábrica y envía los datos a la nube es un ejemplo de:",
"options": [
"Aplicación de escritorio",
"Servidor de aplicaciones",
"Aplicación de Internet de las Cosas (IoT)",
"Sistema Operativo Amazon Linux 2"
],
"answer": "Aplicación de Internet de las Cosas (IoT)",
"hint": "Se trata de un dispositivo especializado conectado a Internet.",
"explanation": "Las aplicaciones de IoT se ejecutan en dispositivos especializados conectados a Internet para realizar tareas específicas."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Una empresa desea migrar a la nube para evitar el 'Gasto de Capital' (CapEx) inicial en servidores físicos. ¿A qué ventaja específica de la informática en la nube se refiere este cambio financiero?",
"options": [
"Aumentar la velocidad y la agilidad.",
"Cambiar los gastos de capital por gastos variables.",
"Aprovechar las economías de escala masivas.",
"Dejar de adivinar la capacidad."
],
"answer": "Cambiar los gastos de capital por gastos variables.",
"hint": "Se trata de pagar solo por lo que se consume en lugar de invertir en hardware por adelantado.",
"explanation": "La nube permite pagar por uso (gasto variable) en lugar de realizar grandes inversiones iniciales en centros de datos y servidores físicos (CapEx)."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "En el modelo de 'Infraestructura como Servicio' (IaaS), ¿cuál de los siguientes componentes es responsabilidad de administración del CLIENTE?",
"options": [
"Virtualización",
"Servidores físicos",
"Sistema Operativo (SO)",
"Almacenamiento físico"
],
"answer": "Sistema Operativo (SO)",
"hint": "En IaaS, el proveedor gestiona el hardware y la capa de virtualización.",
"explanation": "En IaaS, el proveedor de nube administra la red, el almacenamiento, los servidores y la virtualización, mientras que el cliente es responsable del SO, middleware, datos y aplicaciones."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Un desarrollador utiliza un servicio de nube donde no tiene control sobre el Sistema Operativo ni el Middleware, pero puede desplegar sus aplicaciones y gestionar sus datos. ¿Qué modelo de servicio está utilizando?",
"options": [
"Infraestructura como servicio (IaaS)",
"Software como servicio (SaaS)",
"Plataforma como servicio (PaaS)",
"Nube privada"
],
"answer": "Plataforma como servicio (PaaS)",
"hint": "El usuario solo se preocupa por la aplicación y los datos.",
"explanation": "En PaaS, el proveedor administra el SO, el middleware y el tiempo de ejecución (runtime), permitiendo que el usuario se enfoque solo en las aplicaciones y los datos."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cómo logra un proveedor de nube como AWS ofrecer precios de pago por uso más bajos que los que una empresa podría obtener por su cuenta?",
"options": [
"Mediante la predicción de picos máximos.",
"A través de economías de escala masivas.",
"Eliminando la necesidad de personal de TI.",
"Mediante el uso de nubes privadas."
],
"answer": "A través de economías de escala masivas.",
"hint": "El costo se reduce al agregar el consumo de cientos de miles de clientes.",
"explanation": "Al tener una enorme cantidad de clientes, los proveedores de nube logran economías de escala que se traducen en precios de pago por uso más bajos para el consumidor final."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Si una organización decide mantener una parte de sus datos sensibles en sus propios servidores locales y migrar sus aplicaciones web a AWS, ¿qué modelo de implementación está utilizando?",
"options": [
"Nube pública",
"Nube híbrida",
"Nube privada",
"Infraestructura como software"
],
"answer": "Nube híbrida",
"hint": "Combina recursos locales (on-premises) con recursos en la nube.",
"explanation": "El modelo híbrido conecta la infraestructura existente en las instalaciones (on-premises) con los recursos de la nube."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cuál es la principal desventaja del modelo de informática tradicional (hardware físico) mencionada en el temario cuando las necesidades del negocio cambian repentinamente?",
"options": [
"Falta de seguridad física.",
"Dificultad para escalar de forma rápida y rentable.",
"Exceso de personal técnico.",
"Dependencia total de Internet."
],
"answer": "Dificultad para escalar de forma rápida y rentable.",
"hint": "Cambiar el hardware requiere tiempo, esfuerzo y costos elevados.",
"explanation": "A diferencia del software, el hardware físico es rígido y requiere planificación, inversión y tiempo para ser modificado ante cambios en la demanda."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Una empresa de software utiliza una aplicación de gestión de correo electrónico alojada íntegramente por un tercero a través de Internet. ¿A qué modelo de servicio corresponde esto?",
"options": [
"IaaS",
"PaaS",
"SaaS",
"Nube híbrida"
],
"answer": "SaaS",
"hint": "El cliente no administra nada, solo consume el software.",
"explanation": "En el modelo SaaS (Software como Servicio), el proveedor administra toda la pila tecnológica, desde el hardware hasta la aplicación final."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Qué concepto describe la capacidad de aprovisionar recursos de TI en minutos en lugar de semanas?",
"options": [
"Economías de escala",
"Aumento de la velocidad y la agilidad",
"Alcance global",
"Infraestructura como hardware"
],
"answer": "Aumento de la velocidad y la agilidad",
"hint": "Se reduce el tiempo entre querer un recurso y tenerlo.",
"explanation": "La agilidad en la nube permite que los desarrolladores obtengan recursos casi instantáneamente, reduciendo los tiempos de semanas a solo minutos."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Al utilizar la nube, una empresa deja de preocuparse por el 'apilamiento y alimentación de los servidores'. ¿Qué beneficio describe mejor esta situación?",
"options": [
"Dejar de adivinar la capacidad.",
"Dejar de gastar dinero en la ejecución y el mantenimiento de los centros de datos.",
"Convertirse en una empresa global en cuestión de minutos.",
"Aprovechar las economías de escala."
],
"answer": "Dejar de gastar dinero en la ejecución y el mantenimiento de los centros de datos.",
"hint": "Permite a la empresa concentrarse en sus clientes y proyectos de negocio.",
"explanation": "Al delegar el mantenimiento físico (racking, stacking, power) al proveedor, la empresa puede enfocar sus recursos en la innovación y sus clientes."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Cuando una aplicación experimenta un pico de tráfico inesperado y el sistema ajusta automáticamente sus recursos para satisfacer la demanda, se está resolviendo el problema de:",
"options": [
"Inversión de capital inicial.",
"Predicción de la capacidad.",
"Seguridad física de los datos.",
"Falta de habilidades interpersonales."
],
"answer": "Predicción de la capacidad.",
"hint": "Evita tener capacidad subestimada o sobrestimada.",
"explanation": "La nube permite el escalado bajo demanda, eliminando la necesidad de adivinar si los recursos serán suficientes para los picos máximos de uso."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Qué modelo de implementación en la nube suele requerir una gran inversión inicial y mantenimiento constante de parches por parte de la organización?",
"options": [
"Nube pública",
"Nube híbrida",
"Nube privada (On-premises)",
"Software como servicio"
],
"answer": "Nube privada (On-premises)",
"hint": "Es la TI tradicional gestionada internamente.",
"explanation": "La nube privada o en las instalaciones conlleva costos de capital altos, ciclos de actualización y administración manual de sistemas."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Un arquitecto de soluciones necesita desplegar una aplicación en múltiples regiones del mundo para reducir la latencia de los usuarios. ¿Qué ventaja de AWS facilita esto?",
"options": [
"Convertirse en una empresa global en cuestión de minutos.",
"Aumento de la experimentación.",
"Infraestructura como hardware.",
"Uso de habilidades interpersonales."
],
"answer": "Convertirse en una empresa global en cuestión de minutos.",
"hint": "Se refiere al despliegue en múltiples ubicaciones geográficas rápidamente.",
"explanation": "AWS permite desplegar aplicaciones en cualquier parte del mundo con solo unos clics, proporcionando baja latencia y alcance global inmediato."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Qué término describe las habilidades no técnicas, como la comunicación y las habilidades sociales, que son cruciales para los roles en la nube?",
"options": [
"Habilidades de aprovisionamiento",
"Habilidades interpersonales (Soft skills)",
"Habilidades de virtualización",
"Habilidades de infraestructura"
],
"answer": "Habilidades interpersonales (Soft skills)",
"hint": "Permiten trabajar bien con los demás.",
"explanation": "Según el temario, las habilidades interpersonales son esenciales para los roles en la nube para facilitar la colaboración y la comunicación efectiva."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "En el modelo de informática en la nube, ¿cuál es la ventaja de ver la infraestructura como 'software' en lugar de 'hardware'?",
"options": [
"El software nunca requiere mantenimiento.",
"El software puede cambiar de forma más rápida, fácil y rentable.",
"El software no requiere conexión a Internet.",
"El software elimina la necesidad de sistemas operativos."
],
"answer": "El software puede cambiar de forma más rápida, fácil y rentable.",
"hint": "Flexibilidad vs rigidez física.",
"explanation": "Tratar la infraestructura como software permite realizar cambios dinámicos y automáticos que serían imposibles o muy costosos con hardware físico."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "Si una empresa tiene capacidad de servidor sobrestimada (ociosa) en su centro de datos local, ¿qué impacto financiero tiene según el modelo tradicional?",
"options": [
"Ahorro de costos por economías de escala.",
"Desperdicio de inversión y recursos no utilizados.",
"Aumento de la agilidad operativa.",
"Mejora automática del rendimiento de la CPU."
],
"answer": "Desperdicio de inversión y recursos no utilizados.",
"hint": "El hardware físico se paga aunque no se use.",
"explanation": "En el modelo tradicional, si se sobrestima la capacidad, se gasta dinero en recursos que permanecen inactivos, afectando la rentabilidad."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Quién administra el 'Tiempo de ejecución' (Runtime) y el 'Middleware' en un modelo de implementación On-premises (en las instalaciones)?",
"options": [
"El proveedor de servicios de nube",
"El cliente (usted)",
"AWS",
"El Administrador de Base de Datos únicamente"
],
"answer": "El cliente (usted)",
"hint": "En local, el usuario es dueño de toda la pila tecnológica.",
"explanation": "En las instalaciones (On-premises), el cliente es responsable de gestionar absolutamente todo, desde las redes hasta las aplicaciones."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "La capacidad de realizar experimentación rápida y de bajo costo para probar nuevas ideas de negocio es una característica de:",
"options": [
"Aumento de la velocidad y la agilidad",
"Mantenimiento preventivo",
"Inversión de capital (CapEx)",
"Capacidad de servidor fija"
],
"answer": "Aumento de la velocidad y la agilidad",
"hint": "Permite probar configuraciones sin riesgos financieros significativos.",
"explanation": "La agilidad en la nube fomenta la innovación al permitir fallar rápido y barato a través de la experimentación constante."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Cuál es un caso de uso común mencionado en el temario para la informática en la nube?",
"options": [
"Fabricación de hardware físico.",
"Alojamiento de aplicaciones y copias de seguridad.",
"Contratación de personal de seguridad física únicamente.",
"Reducción de la velocidad de entrega de contenido."
],
"answer": "Alojamiento de aplicaciones y copias de seguridad.",
"hint": "Servicios relacionados con datos y TI empresarial.",
"explanation": "La nube se utiliza habitualmente para alojamiento web, almacenamiento, copias de seguridad, bases de datos y entrega de contenido."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "En el modelo de responsabilidad de la nube, ¿quién administra la capa de 'Virtualización' en una solución de Software como Servicio (SaaS)?",
"options": [
"El cliente",
"Otros (el proveedor)",
"El equipo de desarrollo interno",
"El analista de negocios"
],
"answer": "Otros (el proveedor)",
"hint": "En SaaS, el cliente no gestiona la infraestructura subyacente.",
"explanation": "En SaaS, todas las capas (desde la red hasta la aplicación) son administradas por el proveedor del servicio."
},
{
"subjectId": "clf",
"topicId": "clf-0",
"question": "¿Qué factor permite que la nube tenga un 'costo acumulable bajo' en comparación con la infraestructura en las instalaciones?",
"options": [
"La falta de parches de seguridad.",
"La ausencia de inversión inicial y la capacidad flexible.",
"El uso exclusivo de hardware obsoleto.",
"La limitación de regiones geográficas."
],
"answer": "La ausencia de inversión inicial y la capacidad flexible.",
"hint": "Se relaciona con no pagar por hardware que no se usa.",
"explanation": "La nube pública ofrece flexibilidad y elimina la inversión inicial pesada, lo que resulta en costos operativos más eficientes y bajos."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un cliente utiliza AWS CloudFormation para desplegar una arquitectura compleja. ¿Cuál de las siguientes afirmaciones describe correctamente el costo asociado exclusivamente al uso del servicio CloudFormation?",
"options": [
"AWS cobra una tarifa fija por cada plantilla de CloudFormation ejecutada.",
"No hay un cargo adicional por usar CloudFormation, pero se paga por los recursos de AWS que este cree.",
"CloudFormation es gratuito solo durante los primeros 12 meses de la Capa Gratuita.",
"El servicio tiene un costo basado en la cantidad de líneas de código en la plantilla JSON/YAML."
],
"answer": "No hay un cargo adicional por usar CloudFormation, pero se paga por los recursos de AWS que este cree.",
"hint": "Diferencia entre el servicio de orquestación y los recursos finales (EC2, RDS).",
"explanation": "Según el temario, servicios como AWS CloudFormation, IAM y Auto Scaling no tienen cargo adicional, sin embargo, los recursos subyacentes que estos servicios aprovisionan (como instancias EC2) sí generan costos."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Bajo el Modelo de Responsabilidad Compartida, si un cliente decide ejecutar una base de datos Oracle sobre una instancia de Amazon EC2, ¿quién es el responsable de aplicar parches al motor de la base de datos?",
"options": [
"AWS, porque Oracle es un socio tecnológico de AWS.",
"El cliente, ya que se trata de un modelo de Infraestructura como Servicio (IaaS).",
"AWS, ya que gestiona la infraestructura subyacente de EC2.",
"Tanto AWS como el cliente comparten la responsabilidad de parchear el software de la aplicación."
],
"answer": "El cliente, ya que se trata de un modelo de Infraestructura como Servicio (IaaS).",
"hint": "En EC2, el cliente gestiona todo desde el sistema operativo hacia arriba.",
"explanation": "Cuando Oracle se ejecuta en EC2, el cliente tiene control total y responsabilidad sobre el SO y las aplicaciones. Si se usara Amazon RDS (PaaS), AWS sería responsable del parcheado del motor."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En el marco del AWS Cloud Adoption Framework (CAF), ¿qué perspectiva se centra específicamente en reducir la brecha entre los equipos de TI y los equipos comerciales para garantizar el valor del negocio?",
"options": [
"Perspectiva de Personas",
"Perspectiva de Empresas",
"Perspectiva de Gobernanza",
"Perspectiva de Operaciones"
],
"answer": "Perspectiva de Empresas",
"hint": "Busca alinear la estrategia de TI con las metas del negocio.",
"explanation": "La perspectiva de Empresas (Business) asegura que la TI se alinee con las necesidades comerciales y que las inversiones en TI tengan un resultado comercial sólido."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un desarrollador quiere implementar una aplicación 'Hello World' sin servidor utilizando el tutorial oficial de AWS. Según la documentación, ¿qué combinación de servicios se requiere para este flujo básico?",
"options": [
"AWS Lambda y Amazon EC2",
"AWS Lambda y Amazon CloudWatch",
"Amazon S3 y AWS Elastic Beanstalk",
"AWS Lambda y Amazon RDS"
],
"answer": "AWS Lambda y Amazon CloudWatch",
"hint": "Revisa los componentes mencionados en la 'Búsqueda del tesoro' de la documentación.",
"explanation": "El tutorial específico de 'Hello World' sin servidor mencionado en el material instruye al usuario a utilizar AWS Lambda para la ejecución y Amazon CloudWatch para el monitoreo/logs."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Al realizar un análisis de TCO (Costo Total de Propiedad), ¿cuál de los siguientes es un costo indirecto que a menudo se olvida en las instalaciones físicas (On-premises) pero que AWS ayuda a reducir?",
"options": [
"El precio de compra de los servidores físicos.",
"El costo de administración de la red y mano de obra de TI.",
"La licencia anual del Sistema Operativo.",
"El cargo por transferencia de datos de entrada a AWS."
],
"answer": "El costo de administración de la red y mano de obra de TI.",
"hint": "Piensa en las personas necesarias para mantener el hardware.",
"explanation": "El TCO incluye costos directos (hardware) e indirectos como la administración, refrigeración, electricidad y el personal necesario para mantener la infraestructura física."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de los siguientes lenguajes NO es mencionado explícitamente en la Referencia de API de AWS Lambda como compatible mediante herramientas estándar según la actividad de búsqueda en la documentación?",
"options": [
"Node.js",
"PowerShell",
"Go",
"C++"
],
"answer": "C++",
"hint": "La lista incluye Node.js, Java, C#, Python, Ruby, Go y PowerShell.",
"explanation": "Los lenguajes listados en la documentación básica son Node.js, Java, C#, Python, Ruby, Go y PowerShell. C++ no figura en esa lista."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En el contexto de los beneficios de la nube, ¿cómo define AWS la 'Economía de Escala'?",
"options": [
"La capacidad de pagar por los servicios solo cuando se usan.",
"La capacidad de AWS de reducir precios tras adquirir grandes volúmenes de recursos debido a su masiva cantidad de clientes.",
"La posibilidad de escalar verticalmente una instancia EC2 a un tamaño mayor.",
"El ahorro generado al usar únicamente servicios gratuitos como IAM."
],
"answer": "La capacidad de AWS de reducir precios tras adquirir grandes volúmenes de recursos debido a su masiva cantidad de clientes.",
"hint": "Muchos clientes = Menos costo para el proveedor = Ahorros transferidos.",
"explanation": "AWS transfiere los ahorros obtenidos por las economías de escala a los clientes."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un cliente desea saber quién es responsable del aislamiento de instancias en la infraestructura de virtualización. Según el modelo de responsabilidad compartida, esta tarea corresponde a:",
"options": [
"El cliente, mediante la configuración de Grupos de Seguridad.",
"AWS, como parte de la seguridad 'de' la nube.",
"El proveedor del software del hipervisor únicamente.",
"Ambos, bajo un modelo de gestión de parches compartido."
],
"answer": "AWS, como parte de la seguridad 'de' la nube.",
"hint": "La virtualización es parte de la infraestructura básica gestionada por el proveedor.",
"explanation": "AWS es responsable de la infraestructura de virtualización, lo que incluye asegurar que las instancias de diferentes clientes estén aisladas entre sí a nivel de hardware/hipervisor."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es la principal diferencia entre la Calculadora de precios de AWS y el análisis de TCO (Total Cost of Ownership)?",
"options": [
"La calculadora es solo para S3 y el TCO es para EC2.",
"La calculadora estima costos mensuales de AWS; el TCO compara costos On-premises frente a la nube de AWS.",
"La calculadora es gratuita y el TCO es un servicio de pago.",
"No hay diferencia, son el mismo servicio con nombres distintos."
],
"answer": "La calculadora estima costos mensuales de AWS; el TCO compara costos On-premises frente a la nube de AWS.",
"hint": "Uno proyecta gastos futuros en la nube, el otro justifica la migración comparando con lo actual.",
"explanation": "La Calculadora de precios ayuda a estimar la factura mensual en AWS. El TCO es una estimación financiera para comparar el costo de infraestructura propia frente a la nube."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "De acuerdo con el AWS Cloud Adoption Framework (AWS CAF), ¿qué perspectiva se encarga de la gestión de parches de bases de datos y la recuperación de desastres en un modelo PaaS?",
"options": [
"Perspectiva de Operaciones",
"Perspectiva de Plataforma",
"Perspectiva de Seguridad",
"AWS gestiona esto, no forma parte de una perspectiva para el cliente."
],
"answer": "AWS gestiona esto, no forma parte de una perspectiva para el cliente.",
"hint": "En PaaS, el cliente se libera de la infraestructura subyacente.",
"explanation": "En servicios PaaS (como RDS o Beanstalk), AWS gestiona el SO y los parches. El cliente se enfoca en administrar el código o los datos, delegando la administración operativa de la plataforma a AWS."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "AWS describe a Trusted Advisor como un servicio de tipo:",
"options": [
"IaaS (Infraestructura como Servicio)",
"PaaS (Plataforma como Servicio)",
"SaaS (Software como Servicio)",
"Híbrido"
],
"answer": "SaaS (Software como Servicio)",
"hint": "Es una aplicación alojada por AWS a la que se accede por navegador o API.",
"explanation": "Trusted Advisor, junto con Amazon Chime y AWS Shield, son ejemplos de SaaS en el ecosistema de AWS, ya que el cliente no gestiona la infraestructura que soporta el servicio."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un administrador de red desea configurar el firewall para una instancia EC2. Según el modelo de responsabilidad compartida, ¿cuál es su herramienta principal?",
"options": [
"El acceso físico al centro de datos.",
"La configuración de Grupos de Seguridad (Security Groups).",
"La actualización del microcódigo del procesador.",
"La auditoría del sistema operativo del anfitrión (Host OS)."
],
"answer": "La configuración de Grupos de Seguridad (Security Groups).",
"hint": "Es la responsabilidad del cliente 'en' la nube.",
"explanation": "La configuración de firewalls (como los Security Groups o firewalls del SO invitado) es responsabilidad del cliente para proteger sus instancias."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿En qué situación un servicio que normalmente no tiene cargo adicional podría generar costos para el cliente?",
"options": [
"Cuando se usa IAM para crear más de 10 usuarios.",
"Cuando AWS Elastic Beanstalk despliega instancias EC2 y buckets de S3.",
"Cuando se utiliza la Calculadora de precios de AWS más de una vez al mes.",
"Cuando se accede a la documentación de AWS desde una región distinta."
],
"answer": "Cuando AWS Elastic Beanstalk despliega instancias EC2 y buckets de S3.",
"hint": "El servicio 'orquestador' es gratuito, los 'recursos' no.",
"explanation": "Servicios como Beanstalk o CloudFormation son gratuitos, pero los recursos que crean (servidores, bases de datos) se cobran según las tarifas estándar."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Según el material, ¿qué recurso de documentación se recomienda específicamente para preparar el examen AWS Cloud Practitioner?",
"options": [
"La guía de referencia de comandos de la CLI de S3.",
"El documento técnico 'Cómo funcionan los precios de AWS'.",
"El manual de usuario de Oracle Database.",
"La referencia de API de Amazon CloudWatch."
],
"answer": "El documento técnico 'Cómo funcionan los precios de AWS'.",
"hint": "Se mencionan 4 documentos técnicos clave.",
"explanation": "Los documentos recomendados son: Información general de AWS, Diseño de arquitecturas, Cómo funcionan los precios de AWS y El costo total de la (no) propiedad."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Si un cliente transfiere datos desde un bucket de S3 a una instancia EC2 dentro de la misma región de AWS, ¿cuánto se le cobrará por esa transferencia de datos específica?",
"options": [
"Se cobra la tarifa estándar de transferencia de datos de salida.",
"No se le cobrará nada.",
"Se cobra solo si el bucket es público.",
"Se cobra un 50% de la tarifa normal por estar en la misma región."
],
"answer": "No se le cobrará nada.",
"hint": "Revisa los aprendizajes clave sobre transferencia de datos.",
"explanation": "No se cobra por la transferencia de datos entrantes ni por la transferencia de datos entre servicios de la misma región de AWS."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué es AWS Cloud9?",
"options": [
"Un servicio de almacenamiento en la nube de alta disponibilidad.",
"Un entorno de desarrollo integrado (IDE) basado en la nube.",
"Un servicio de firewall administrado para VPC.",
"Un sistema de bases de datos relacionales sin servidor."
],
"answer": "Un entorno de desarrollo integrado (IDE) basado en la nube.",
"hint": "Se usa para escribir, ejecutar y depurar código.",
"explanation": "AWS Cloud9 permite a los desarrolladores escribir y depurar código directamente desde un navegador sin instalar un IDE local."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es la duración estándar de la Capa Gratuita de AWS para clientes nuevos en la mayoría de sus servicios?",
"options": [
"6 meses",
"1 año",
"2 años",
"Indefinidamente para todos los servicios"
],
"answer": "1 año",
"hint": "Es el periodo promocional para obtener experiencia práctica.",
"explanation": "La Capa Gratuita de AWS suele durar 12 meses (1 año) para los clientes nuevos que deseen probar productos y servicios."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En el modelo de responsabilidad compartida, ¿quién es responsable de la seguridad física del centro de datos?",
"options": [
"El cliente",
"AWS",
"La empresa de seguridad privada local",
"Es una responsabilidad compartida al 50%"
],
"answer": "AWS",
"hint": "AWS protege la infraestructura global.",
"explanation": "AWS se encarga de la seguridad física de las instalaciones, incluyendo el acceso controlado y basado en necesidades a los centros de datos."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Dentro de las perspectivas del AWS CAF, ¿cuál se encarga de la gestión de habilidades y el cambio organizacional?",
"options": [
"Perspectiva de Personas",
"Perspectiva de Gobernanza",
"Perspectiva de Operaciones",
"Perspectiva de Empresas"
],
"answer": "Perspectiva de Personas",
"hint": "Se enfoca en el capital humano.",
"explanation": "La perspectiva de Personas proporciona guías para el desarrollo de habilidades, la gestión del cambio y la formación de los equipos para la nube."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de estos NO es un componente del TCO para infraestructura tradicional?",
"options": [
"Electricidad",
"Refrigeración",
"Configuración de AWS IAM",
"Hardware de red (Switches)"
],
"answer": "Configuración de AWS IAM",
"hint": "IAM es un servicio de la nube, no de un centro de datos tradicional.",
"explanation": "Los costos de infraestructura tradicional (On-premises) incluyen hardware, racks, electricidad, espacio y personal, pero no servicios nativos de nube como IAM."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Según el temario, ¿cuántas veces AWS ha bajado el prercio hasta noviembre de 2023?",
"options": [
"26 veces",
"68 veces",
"96 veces",
"137 veces"
],
"answer": "76 veces",
"hint": "Es un dato histórico mencionado para ilustrar las economías de escala.",
"explanation": "Desde su lanzamiento en 2006, AWS ha reducido sus precios 76 veces (dato actualizado a noviembre de 2019)."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es un beneficio clave del uso de AWS CAF?",
"options": [
"Proporciona plantillas de código para AWS Lambda.",
"Estructura el trabajo en conjunto de los equipos comerciales y de TI.",
"Es un servicio que autoconfigura el TCO.",
"Permite descargar gratis el sistema operativo de AWS."
],
"answer": "Estructura el trabajo en conjunto de los equipos comerciales y de TI.",
"hint": "Se trata de un marco de trabajo (framework) organizativo.",
"explanation": "AWS CAF proporciona una estructura que permite que los equipos de negocio y tecnología trabajen coordinadamente en la adopción de la nube."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En la documentación de AWS, ¿dónde encontraría información sobre cómo crear un bucket de S3 paso a paso?",
"options": [
"Referencia de API únicamente",
"Guía de introducción de S3",
"Manual de hardware de AWS",
"Documento técnico de TCO"
],
"answer": "Guía de introducción de S3",
"hint": "Es el punto de partida para tareas básicas.",
"explanation": "La Guía de introducción (Getting Started Guide) de Amazon S3 contiene el tutorial 'Create a Bucket'."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Bajo el modelo PaaS, ¿qué responsabilidad recae sobre el cliente?",
"options": [
"Instalación del Sistema Operativo.",
"Mantenimiento físico de los servidores.",
"Administración de datos y código.",
"Configuración del sistema de refrigeración."
],
"answer": "Administración de datos y código.",
"hint": "En PaaS, AWS gestiona la plataforma subyacente.",
"explanation": "En el modelo de Plataforma como Servicio, el cliente puede desentenderse de la infraestructura y el SO para centrarse exclusivamente en sus datos y aplicaciones."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué servicio se menciona como una opción sin cargo pero que gestiona identidades y accesos?",
"options": [
"Amazon RDS",
"AWS IAM",
"AWS Lambda",
"Amazon VPC"
],
"answer": "AWS IAM",
"hint": "Identity and Access Management.",
"explanation": "AWS Identity and Access Management (IAM) es un servicio que no tiene cargo adicional para los clientes de AWS."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un cliente quiere comparar el costo de su centro de datos actual frente a AWS. ¿Qué herramienta o concepto debería usar?",
"options": [
"API Reference",
"TCO (Costo Total de Propiedad)",
"VM Import/Export",
"AWS Cloud9"
],
"answer": "TCO (Costo Total de Propiedad)",
"hint": "Ayuda a construir el caso empresarial para el traslado a la nube.",
"explanation": "El TCO permite comparar los costos de ejecutar una carga de trabajo en las instalaciones frente a hacerlo en la nube de AWS."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué lenguaje de programación soporta AWS Lambda?",
"options": [
"PHP",
"Ruby",
"Swift",
"Rust"
],
"answer": "Ruby",
"hint": "Está en la lista junto a Python y Go.",
"explanation": "Según la documentación citada, Ruby es uno de los lenguajes soportados oficialmente listados en la Referencia de API."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Si AWS retira un disco duro del almacenamiento, ¿quién es responsable de asegurarse de que los datos sean destruidos físicamente de forma segura?",
"options": [
"El cliente, cifrando los datos antes.",
"AWS",
"El fabricante del disco duro.",
"Es una responsabilidad compartida."
],
"answer": "AWS",
"hint": "Seguridad 'de' la nube.",
"explanation": "AWS es responsable de la infraestructura de hardware, lo que incluye la retirada y destrucción segura de dispositivos de almacenamiento."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué perspectiva del CAF se ocupa de la protección de los datos y el cumplimiento normativo?",
"options": [
"Gobernanza",
"Seguridad",
"Plataforma",
"Personas"
],
"answer": "Seguridad",
"hint": "Una de las seis perspectivas principales.",
"explanation": "La perspectiva de Seguridad en el AWS CAF se centra en garantizar que la arquitectura y los procesos cumplan con los estándares de protección y cumplimiento."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es una ventaja de la infraestructura de autoservicio en la nube frente a la tradicional?",
"options": [
"Contratos a largo plazo obligatorios.",
"Paga por lo que utiliza.",
"Mayor plazo de comercialización.",
"Configuración manual de racks."
],
"answer": "Paga por lo que utiliza.",
"hint": "Flexibilidad financiera.",
"explanation": "A diferencia de la infraestructura tradicional que requiere inversiones de capital upfront, la nube permite un modelo de pago por uso."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de los siguientes es un servicio administrado por AWS (modelo PaaS/SaaS)?",
"options": [
"Amazon EC2",
"Amazon EBS",
"Amazon RDS",
"Instancia de Oracle en EC2"
],
"answer": "Amazon RDS",
"hint": "AWS gestiona los parches del motor de la base de datos.",
"explanation": "Amazon RDS es un servicio administrado donde AWS se encarga de las tareas comunes de administración de bases de datos."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Dónde se pueden encontrar guías para desarrolladores y referencias de API?",
"options": [
"Solo en el blog de AWS.",
"En la documentación de AWS.",
"En el panel de facturación.",
"Únicamente solicitándolas por ticket de soporte."
],
"answer": "En la documentación de AWS.",
"hint": "Es el recurso principal para obtener ayuda técnica.",
"explanation": "La documentación de AWS es el sitio central para encontrar guías de usuario, referencias de API y tutoriales."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un cliente quiere automatizar el escalado de sus instancias EC2. ¿Qué servicio sin cargo adicional debería usar?",
"options": [
"AWS Trusted Advisor",
"Amazon EC2 Auto Scaling",
"AWS Shield Advanced",
"Amazon CloudFront"
],
"answer": "Amazon EC2 Auto Scaling",
"hint": "Aparece en la lista de servicios sin cargo del temario.",
"explanation": "Amazon EC2 Auto Scaling es un servicio gratuito (sin cargo adicional), aunque se paga por las instancias EC2 que este añada automáticamente."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué término describe el traspaso de ahorros de AWS a los clientes debido a su gran volumen de operación?",
"options": [
"Escalabilidad vertical",
"Economías de escala",
"TCO reducido",
"Agilidad empresarial"
],
"answer": "Economías de escala",
"hint": "Permite bajar los precios constantemente.",
"explanation": "Gracias a las economías de escala, AWS puede adquirir recursos a menor costo y transferir esos ahorros a los usuarios reduciendo precios."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un arquitecto de soluciones está diseñando una red en AWS y crea una VPC. Luego, procede a crear varias subredes. ¿Cuál es el alcance geográfico (scope) correcto para estos recursos?",
"options": [
"La VPC es a nivel de Zona de Disponibilidad y la subred es a nivel de Región.",
"Tanto la VPC como las subredes son recursos globales.",
"La VPC es a nivel de Región y la subred es a nivel de Zona de Disponibilidad.",
"La VPC y la subred son recursos que existen únicamente a nivel de punto de presencia (Edge Location)."
],
"answer": "La VPC es a nivel de Región y la subred es a nivel de Zona de Disponibilidad.",
"hint": "Recuerda los resultados de la actividad práctica 'AWS Management Console en un solo clic'.",
"explanation": "Según la actividad práctica, las VPC existen a nivel de región, mientras que las subredes se crean específicamente dentro de una Zona de Disponibilidad (AZ)."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de las siguientes afirmaciones describe con precisión una característica de los centros de datos de AWS mencionada en el temario?",
"options": [
"Algunos centros de datos se mantienen en 'modo espera' (cold standby) para emergencias.",
"Cada centro de datos contiene exactamente 100,000 servidores físicos.",
"Todos los centros de datos se encuentran en línea y ninguno se encuentra inactivo.",
"AWS utiliza hardware estándar de consumo masivo sin personalización para reducir costos."
],
"answer": "Todos los centros de datos se encuentran en línea y ninguno se encuentra inactivo.",
"hint": "Busca la sección 'Centros de datos de AWS' en la infraestructura global.",
"explanation": "El temario especifica que todos los centros de datos de AWS están en línea; no hay centros de datos inactivos o que no se estén utilizando."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Amazon CloudFront utiliza puntos de presencia para entregar contenido. Según el material, ¿qué componente se utiliza específicamente para el contenido al que se accede con poca frecuencia?",
"options": [
"Ubicaciones de borde (Edge Locations)",
"Zonas de disponibilidad locales",
"Cachés de borde regionales",
"Regiones secundarias"
],
"answer": "Cachés de borde regionales",
"hint": "Revisa la sección de 'Puntos de presencia'.",
"explanation": "El temario indica que las 'cachés de borde regionales' se utilizan para contenido con acceso poco frecuente, mientras que las ubicaciones de borde estándar manejan el tráfico más frecuente."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Al elegir una región de AWS, un cliente debe considerar varios factores. ¿Cuál de los siguientes NO es uno de los cuatro factores principales mencionados en el temario?",
"options": [
"Gobernanza de datos y requisitos legales.",
"Proximidad con los clientes (latencia).",
"Cantidad de centros de datos por Zona de Disponibilidad.",
"Costos (que varían según la región)."
],
"answer": "Cantidad de centros de datos por Zona de Disponibilidad.",
"hint": "Los factores de selección de región están en la diapositiva 10.",
"explanation": "Los factores enumerados son: Gobernanza/Requisitos legales, Latencia, Disponibilidad de servicios y Costos. La cantidad de centros de datos internos no es un factor de selección expuesto para el cliente."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "De acuerdo con la clasificación de servicios de AWS, ¿en qué categoría se encuentra específicamente AWS Fargate?",
"options": [
"Servicios de cómputo",
"Servicios de contenedores",
"Servicios de redes y entrega de contenido",
"Servicios de administración y gobernanza"
],
"answer": "Servicios de contenedores",
"hint": "Fargate permite ejecutar contenedores sin gestionar servidores.",
"explanation": "AWS Fargate aparece clasificado bajo la 'Categoría de servicios de contenedores' junto con Amazon ECS y Amazon EKS."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de los siguientes servicios de seguridad e identidad se considera un 'Servicio Global' según la actividad práctica del temario?",
"options": [
"Amazon EC2",
"AWS Lambda",
"AWS Identity and Access Management (IAM)",
"Amazon VPC"
],
"answer": "AWS Identity and Access Management (IAM)",
"hint": "Los servicios globales no requieren que selecciones una región específica en la consola.",
"explanation": "Según la respuesta de la Pregunta 5 de la actividad práctica, IAM y Route 53 son servicios globales, a diferencia de EC2 y Lambda que son regionales."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un cliente necesita una conexión de red dedicada y privada desde su centro de datos local hacia AWS. ¿Qué servicio de la categoría 'Redes y entrega de contenido' debe utilizar?",
"options": [
"AWS VPN",
"Amazon CloudFront",
"AWS Direct Connect",
"AWS Transit Gateway"
],
"answer": "AWS Direct Connect",
"hint": "Es una conexión física directa, no a través de la internet pública.",
"explanation": "AWS Direct Connect es el servicio de red que proporciona una conexión dedicada desde las instalaciones del cliente hacia AWS."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "AWS recomienda la replicación de datos entre zonas de disponibilidad para lograr resiliencia. ¿Qué característica de las AZ permite que esta replicación sea eficiente y rápida?",
"options": [
"El uso de la internet pública con cifrado de grado militar.",
"La interconexión mediante enlaces privados de alta velocidad.",
"Que todas las AZ de una región comparten el mismo edificio físico.",
"El uso de satélites para la sincronización de datos."
],
"answer": "La interconexión mediante enlaces privados de alta velocidad.",
"hint": "Revisa la sección 'Zonas de disponibilidad de AWS'.",
"explanation": "Las AZ están interconectadas mediante enlaces privados de alta velocidad, lo que permite una replicación de baja latencia necesaria para la alta disponibilidad."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En la infraestructura de red de AWS, ¿qué componente se describe como hardware personalizado de origen de varios ODM (fabricante de diseño original)?",
"options": [
"Los puntos de presencia de CloudFront.",
"Los equipos de red dentro de los centros de datos.",
"Las instancias de Amazon EC2 de los clientes.",
"Las consolas de administración física."
],
"answer": "Los equipos de red dentro de los centros de datos.",
"hint": "Es parte de la infraestructura que AWS gestiona para la seguridad 'de' la nube.",
"explanation": "El temario menciona que los centros de datos contienen equipos de red personalizados de AWS, incluyendo hardware de varios ODM y una pila de protocolo de red propia."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿A qué categoría de servicio pertenece 'AWS Cost Explorer' según el material proporcionado?",
"options": [
"Administración y gobernanza",
"Implementación y administración",
"Administración de costos de AWS",
"Servicios para aplicaciones"
],
"answer": "Administración de costos de AWS",
"hint": "Se agrupa con AWS Budgets y AWS Cost and Usage Report.",
"explanation": "AWS Cost Explorer se clasifica explícitamente dentro de la 'Categoría de servicios de administración de costos de AWS'."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Para cumplir con requisitos de cumplimiento que exigen que los datos no salgan de un área geográfica específica, ¿qué elemento de la infraestructura global debe controlar el cliente?",
"options": [
"La selección de la Región de AWS.",
"La selección de la Zona de Disponibilidad.",
"La cantidad de ubicaciones de borde.",
"La configuración del AWS Direct Connect."
],
"answer": "La selección de la Región de AWS.",
"hint": "Las regiones son áreas geográficas independientes.",
"explanation": "AWS permite al cliente habilitar y controlar la replicación de datos entre regiones para satisfacer requisitos de gobernanza de datos y legales."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es la diferencia clave entre la 'Tolerancia a errores' y la 'Alta disponibilidad' según el diagrama de la infraestructura elástica?",
"options": [
"La tolerancia a errores es automática, la alta disponibilidad es manual.",
"La alta disponibilidad garantiza rendimiento operativo con tiempos de inactividad reducidos; la tolerancia a errores permite el funcionamiento correcto en presencia de un error.",
"La alta disponibilidad se aplica a regiones y la tolerancia a errores a puntos de presencia.",
"No hay diferencia, son sinónimos en el marco de AWS."
],
"answer": "La alta disponibilidad garantiza rendimiento operativo con tiempos de inactividad reducidos; la tolerancia a errores permite el funcionamiento correcto en presencia de un error.",
"hint": "Revisa las definiciones en la diapositiva 12.",
"explanation": "El material define la Alta disponibilidad por su rendimiento y reducción de downtime, mientras que la Tolerancia a errores se enfoca en que el sistema siga operando a pesar de que un componente falle."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿En qué categoría de servicios encontraría la herramienta 'AWS Well-Architected Tool'?",
"options": [
"Seguridad, identidad y conformidad",
"Servicios para aplicaciones",
"Administración y gobernanza",
"Servicios de plataforma"
],
"answer": "Administración y gobernanza",
"hint": "Ayuda a revisar arquitecturas siguiendo las mejores prácticas.",
"explanation": "AWS Well-Architected Tool está listada bajo la categoría de 'Servicios de administración y gobernanza de AWS'."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de los siguientes servicios NO pertenece a la categoría de 'Bases de datos' según el temario?",
"options": [
"Amazon DynamoDB",
"Amazon Redshift",
"Amazon Aurora",
"Amazon Cognito"
],
"answer": "Amazon Cognito",
"hint": "Cognito se utiliza para la identidad de los usuarios en aplicaciones móviles y web.",
"explanation": "Amazon Cognito pertenece a la categoría de 'Seguridad, identidad y conformidad', no a la de bases de datos."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un cliente desea utilizar un servicio de red que funcione como un centro de conectividad (hub) para conectar sus VPC y redes locales de forma centralizada. ¿Qué servicio debe elegir?",
"options": [
"Amazon Route 53",
"AWS Transit Gateway",
"Elastic Load Balancing",
"AWS VPN"
],
"answer": "AWS Transit Gateway",
"hint": "Busca en la lista de servicios de redes.",
"explanation": "AWS Transit Gateway es el servicio diseñado para simplificar la conectividad de red actuando como un hub para conectar múltiples VPC y redes on-premises."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Si un servicio de AWS permite el escalado dinámico de la capacidad para adaptarse a la carga, se dice que la infraestructura es:",
"options": [
"Resiliente",
"Escalable",
"Elástica",
"Global"
],
"answer": "Elástica",
"hint": "Adaptación dinámica vs. Crecimiento.",
"explanation": "Según el material, una infraestructura 'Elástica' es aquella que permite la adaptación dinámica de la capacidad, mientras que 'Escalable' se refiere a la capacidad de crecer."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es el propósito principal de 'AWS Artifact'?",
"options": [
"Almacenar plantillas de recursos de CloudFormation.",
"Proporcionar acceso bajo demanda a informes de cumplimiento y seguridad de AWS.",
"Cifrar los datos en reposo utilizando claves maestras.",
"Gestionar el análisis de aplicaciones móviles."
],
"answer": "Proporcionar acceso bajo demanda a informes de cumplimiento y seguridad de AWS.",
"hint": "Está en la categoría de Seguridad, identidad y conformidad.",
"explanation": "AWS Artifact es el portal donde los clientes pueden descargar los informes de auditoría y certificaciones de cumplimiento de AWS."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué servicio de AWS se utiliza para el registro y monitoreo de la actividad de las cuentas y el historial de llamadas a la API?",
"options": [
"Amazon CloudWatch",
"AWS Config",
"AWS CloudTrail",
"AWS Trusted Advisor"
],
"answer": "AWS CloudTrail",
"hint": "Rastrea quién hizo qué en la cuenta de AWS.",
"explanation": "AWS CloudTrail es el servicio encargado del seguimiento del uso y el registro de las acciones realizadas a través de la API o la consola."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Al crear una aplicación de alta disponibilidad, AWS recomienda utilizar múltiples Zonas de Disponibilidad. ¿Por qué las AZ están separadas físicamente?",
"options": [
"Para aumentar la latencia entre los centros de datos.",
"Para garantizar que un desastre en una zona no afecte a las demás (aislamiento de errores).",
"Para permitir que cada AZ esté en un país diferente.",
"Para cumplir con el modelo SaaS."
],
"answer": "Para garantizar que un desastre en una zona no afecte a las demás (aislamiento de errores).",
"hint": "Es un concepto clave de la infraestructura global.",
"explanation": "Cada AZ está diseñada para el aislamiento de errores, teniendo alimentación, redes y conectividad independientes para evitar puntos únicos de fallo."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿En qué categoría se encuentra el servicio que permite gestionar múltiples cuentas de AWS de forma centralizada?",
"options": [
"Administración y gobernanza",
"Implementación y administración",
"Seguridad, identidad y conformidad",
"Servicios para aplicaciones"
],
"answer": "Seguridad, identidad y conformidad",
"hint": "El servicio es AWS Organizations.",
"explanation": "AWS Organizations, que permite la gestión centralizada de cuentas, se clasifica en la 'Categoría de servicios de seguridad, identidad y conformidad'."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Una empresa desea reducir el tiempo que transcurre entre la experimentación de una idea y su implementación tecnológica. ¿Qué beneficio específico de la nube describe mejor esta capacidad?",
"options": [
"Elasticidad",
"Agilidad",
"Alta disponibilidad",
"Economías de escala"
],
"answer": "Agilidad",
"hint": "Se refiere a la velocidad para innovar y lanzar recursos rápidamente.",
"explanation": "La agilidad en AWS se define como la capacidad de reducir el tiempo necesario para desplegar recursos, permitiendo que los equipos experimenten e innoven más rápido sin las barreras de la infraestructura física."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Dentro del AWS Well-Architected Framework, ¿cuál de los siguientes pilares se centra en la capacidad de recuperar una carga de trabajo tras una interrupción del servicio o de la infraestructura?",
"options": [
"Excelencia operativa",
"Seguridad",
"Fiabilidad (Reliability)",
"Eficiencia del rendimiento"
],
"answer": "Fiabilidad (Reliability)",
"hint": "Busca la capacidad de auto-recuperación y mitigación de interrupciones.",
"explanation": "El pilar de Fiabilidad se enfoca en asegurar que una carga de trabajo realice su función correctamente y se recupere rápidamente de los fallos para satisfacer la demanda."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué servicio de AWS utiliza el aprendizaje automático (Machine Learning) para analizar continuamente los registros de eventos de CloudTrail y el tráfico de red con el fin de detectar amenazas maliciosas?",
"options": [
"AWS Shield",
"Amazon Inspector",
"Amazon GuardDuty",
"AWS WAF"
],
"answer": "Amazon GuardDuty",
"hint": "Es un servicio de detección de amenazas inteligente.",
"explanation": "Amazon GuardDuty es un servicio de detección de amenazas que monitorea continuamente en busca de actividades maliciosas o comportamientos no autorizados para proteger cuentas y cargas de trabajo."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un administrador desea evaluar las instancias de Amazon EC2 en busca de vulnerabilidades de software y desviaciones de las mejores prácticas de seguridad. ¿Qué servicio es el más adecuado para esta tarea específica?",
"options": [
"Amazon GuardDuty",
"Amazon Inspector",
"AWS Security Hub",
"AWS Shield"
],
"answer": "Amazon Inspector",
"hint": "Se enfoca en escaneos de vulnerabilidades dentro de las instancias y contenedores.",
"explanation": "Amazon Inspector es un servicio automatizado de gestión de vulnerabilidades que analiza continuamente las instancias EC2 y las imágenes de contenedores en busca de vulnerabilidades de red y software."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En el marco de Well-Architected, ¿qué pilar incluye el principio de diseño de 'Realizar operaciones como código'?",
"options": [
"Excelencia operativa",
"Seguridad",
"Eficiencia del rendimiento",
"Optimización de costos"
],
"answer": "Excelencia operativa",
"hint": "Se trata de automatizar procesos y mejorar continuamente.",
"explanation": "El pilar de Excelencia Operativa se centra en ejecutar y supervisar sistemas, y en mejorar constantemente los procesos. Definir la infraestructura y las operaciones como código es un principio fundamental."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Usted necesita una vista centralizada de todas sus alertas de seguridad y el estado de cumplimiento de sus servicios de AWS. ¿Qué servicio debería utilizar para agregar estos hallazgos?",
"options": [
"Amazon GuardDuty",
"AWS Security Hub",
"AWS Trusted Advisor",
"Amazon CloudWatch"
],
"answer": "AWS Security Hub",
"hint": "Es un panel de control centralizado para la seguridad.",
"explanation": "AWS Security Hub recopila hallazgos de seguridad de varios servicios de AWS (como GuardDuty e Inspector) y de terceros para proporcionar una vista centralizada y verificaciones de cumplimiento."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es la principal ventaja de utilizar la infraestructura global de AWS para una aplicación que tiene usuarios en varios continentes?",
"options": [
"Mayor elasticidad en el almacenamiento de objetos.",
"Reducción de la latencia para los usuarios finales (Alcance Global).",
"Acceso automático a la capa gratuita de AWS.",
"Cifrado automático de todos los datos en tránsito."
],
"answer": "Reducción de la latencia para los usuarios finales (Alcance Global).",
"hint": "Piensa en la cercanía física entre el servidor y el cliente.",
"explanation": "El alcance global de AWS permite desplegar aplicaciones en múltiples regiones cercanas a los usuarios, lo que reduce drásticamente la latencia y mejora la experiencia del usuario."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Todos los clientes de AWS reciben protección automática y gratuita contra los ataques de denegación de servicio distribuido (DDoS) más comunes en las capas 3 y 4 de la red. ¿Cómo se llama este servicio?",
"options": [
"AWS Shield Advanced",
"AWS Shield Standard",
"AWS WAF",
"Amazon GuardDuty"
],
"answer": "AWS Shield Standard",
"hint": "Es el nivel básico que viene activado por defecto.",
"explanation": "AWS Shield Standard proporciona protección automática contra ataques DDoS para todos los clientes de AWS sin costo adicional."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un arquitecto decide cambiar una arquitectura de servidores físicos a una arquitectura 'Serverless' con AWS Lambda. ¿A qué pilar del Well-Architected Framework contribuye principalmente este cambio para optimizar el uso de recursos?",
"options": [
"Seguridad",
"Eficiencia del rendimiento",
"Excelencia operativa",
"Fiabilidad"
],
"answer": "Eficiencia del rendimiento",
"hint": "Se refiere al uso eficaz de los recursos informáticos para cumplir los requisitos.",
"explanation": "El pilar de Eficiencia del Rendimiento fomenta el uso de soluciones de 'tecnología avanzada' como las arquitecturas serverless para delegar la gestión de la infraestructura a AWS y ganar eficiencia."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "La capacidad de aumentar o disminuir los recursos informáticos para que coincidan con la demanda cambiante de manera automática se conoce como:",
"options": [
"Agilidad",
"Elasticidad",
"Alta disponibilidad",
"Tolerancia a errores"
],
"answer": "Elasticidad",
"hint": "Es la relación directa entre demanda y suministro de recursos.",
"explanation": "La elasticidad permite que la infraestructura crezca o se contraiga dinámicamente según la carga de trabajo, evitando el aprovisionamiento excesivo o insuficiente."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de los siguientes es el pilar más reciente añadido al marco de AWS Well-Architected para abordar el impacto ambiental?",
"options": [
"Optimización de costos",
"Sostenibilidad",
"Excelencia operativa",
"Fiabilidad"
],
"answer": "Sostenibilidad",
"hint": "Se enfoca en minimizar el impacto ambiental de las cargas de trabajo.",
"explanation": "El pilar de Sostenibilidad se añadió para ayudar a las organizaciones a comprender y minimizar el impacto ambiental de sus recursos en la nube mediante modelos de responsabilidad compartida."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En la propuesta de valor de AWS, ¿qué significa cambiar los gastos de capital (Capex) por gastos variables (Opex)?",
"options": [
"Pagar por adelantado por toda la infraestructura que se planea usar en 5 años.",
"Pagar solo por los recursos informáticos que consume, cuando los consume.",
"Eliminar por completo los costos de licencias de software.",
"Reducir la seguridad para ahorrar dinero en hardware."
],
"answer": "Pagar solo por los recursos informáticos que consume, cuando los consume.",
"hint": "Evita grandes inversiones iniciales en centros de datos físicos.",
"explanation": "Uno de los beneficios de la nube es el gasto variable; en lugar de invertir en centros de datos físicos antes de saber cómo los usará, paga solo por lo que usa."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un cliente quiere asegurarse de que su arquitectura pueda soportar la caída de una zona de disponibilidad completa sin afectar a los usuarios. ¿Qué concepto de diseño está aplicando?",
"options": [
"Elasticidad",
"Alta disponibilidad",
"Agilidad",
"Economía de escala"
],
"answer": "Alta disponibilidad",
"hint": "Asegura que el sistema permanezca operativo a pesar de fallos locales.",
"explanation": "La alta disponibilidad implica diseñar sistemas redundantes que sigan funcionando incluso si fallan componentes críticos, como una zona de disponibilidad."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál de los siguientes principios de diseño pertenece al pilar de Seguridad del marco de Well-Architected?",
"options": [
"Dimensionar correctamente (Right-sizing).",
"Aplicar seguridad en todas las capas.",
"No adivinar las necesidades de capacidad.",
"Permitir la trazabilidad."
],
"answer": "Aplicar seguridad en todas las capas.",
"hint": "Es parte del enfoque de defensa en profundidad.",
"explanation": "El pilar de Seguridad recomienda aplicar controles en cada capa (red, host, aplicación, datos) en lugar de proteger solo el perímetro."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué pilar del Well-Architected Framework se enfoca en evitar gastos innecesarios y analizar el retorno de inversión?",
"options": [
"Eficiencia del rendimiento",
"Optimización de costos",
"Sostenibilidad",
"Fiabilidad"
],
"answer": "Optimización de costos",
"hint": "Busca el sistema más económico que cumpla los requisitos.",
"explanation": "El pilar de Optimización de Costos se centra en evitar gastos innecesarios, seleccionar los servicios adecuados y escalar según las necesidades del negocio para maximizar el valor."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Una empresa utiliza AWS para lanzar rápidamente una flota de servidores en cuestión de minutos, lo cual antes les tomaba semanas en sus propios centros de datos. ¿Qué beneficio de la infraestructura global destaca aquí?",
"options": [
"Alcance global",
"Velocidad de implementación",
"Fiabilidad",
"Seguridad de los datos"
],
"answer": "Velocidad de implementación",
"hint": "Se relaciona con el tiempo de aprovisionamiento de nuevos recursos.",
"explanation": "La infraestructura global de AWS permite a los clientes desplegar recursos casi instantáneamente a nivel mundial, acelerando el tiempo de salida al mercado."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es un beneficio clave de realizar pruebas de recuperación ante desastres con frecuencia, según el pilar de Fiabilidad?",
"options": [
"Reduce el costo mensual de S3.",
"Valida que los procedimientos de recuperación funcionan y reduce el riesgo de fallos reales.",
"Permite eliminar el uso de grupos de seguridad.",
"Garantiza que AWS pague por las pérdidas de datos."
],
"answer": "Valida que los procedimientos de recuperación funcionan y reduce el riesgo de fallos reales.",
"hint": "La práctica hace la perfección en escenarios de fallo.",
"explanation": "El pilar de Fiabilidad recomienda 'Probar los procedimientos de recuperación' para garantizar que el personal sepa actuar y que la automatización funcione ante un evento real."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Qué servicio de seguridad de AWS proporciona una capa de defensa contra ataques web comunes como la inyección SQL o el cross-site scripting (XSS)?",
"options": [
"AWS Shield",
"AWS WAF (Web Application Firewall)",
"Amazon Inspector",
"AWS KMS"
],
"answer": "AWS WAF (Web Application Firewall)",
"hint": "Es un firewall diseñado para aplicaciones en la capa 7.",
"explanation": "AWS WAF protege las aplicaciones web mediante reglas que bloquean patrones de ataque comunes a nivel de aplicación (Capa 7)."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En el contexto de 'Agilidad', ¿cómo ayuda AWS a que los desarrolladores fallen rápido y con bajo costo?",
"options": [
"Obligando a usar solo instancias de Spot.",
"Permitiendo el desmantelamiento rápido de entornos de prueba sin penalizaciones por inversión de hardware.",
"Proporcionando acceso gratuito de por vida a todas las bases de datos.",
"Eliminando la necesidad de escribir código."
],
"answer": "Permitiendo el desmantelamiento rápido de entornos de prueba sin penalizaciones por inversión de hardware.",
"hint": "La nube permite probar y borrar recursos sin haberlos comprado físicamente.",
"explanation": "La agilidad permite crear y destruir entornos rápidamente, lo que reduce el costo de los fallos y permite una mayor experimentación e innovación."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "El principio de 'Permitir la trazabilidad' es parte de qué pilar de Well-Architected?",
"options": [
"Fiabilidad",
"Eficiencia del rendimiento",
"Seguridad",
"Excelencia operativa"
],
"answer": "Seguridad",
"hint": "Implica saber quién hizo qué y cuándo en tu entorno.",
"explanation": "La trazabilidad (monitorear, alertar y auditar cambios) es un principio de diseño crítico del pilar de Seguridad para investigar incidentes y mejorar la postura de seguridad."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Una empresa planea migrar 100 TB de datos desde su centro de datos local a AWS. Tienen una conexión a Internet limitada y el tiempo es un factor crítico. ¿Qué estrategia de migración física es la más adecuada según el temario?",
"options": [
"Utilizar AWS Direct Connect para una transferencia dedicada.",
"Utilizar la familia de servicios AWS Snowball.",
"Cargar los datos a través de una VPN de sitio a sitio.",
"Implementar AWS DataSync sobre la conexión a Internet existente."
],
"answer": "Utilizar la familia de servicios AWS Snowball.",
"hint": "Se trata de una migración de datos a gran escala 'fuera de banda' o física.",
"explanation": "AWS Snowball es ideal para transferencias masivas de datos (terabytes o petabytes) donde el ancho de banda de Internet es insuficiente o el tiempo de transferencia en línea sería prohibitivo."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En el marco de AWS Cloud Adoption Framework (AWS CAF), ¿cuál de los siguientes se considera un beneficio relacionado con la 'reducción del riesgo empresarial'?",
"options": [
"Aumentar el número de lanzamientos de productos por mes.",
"Mejorar la resiliencia de la infraestructura y la postura de ciberseguridad.",
"Reducir el costo de las licencias de bases de datos relacionales.",
"Automatizar la creación de informes financieros mensuales."
],
"answer": "Mejorar la resiliencia de la infraestructura y la postura de ciberseguridad.",
"hint": "El riesgo empresarial suele estar ligado a interrupciones o brechas de seguridad.",
"explanation": "El AWS CAF identifica que la migración a la nube reduce el riesgo empresarial al mejorar la fiabilidad (resiliencia) y proporcionar herramientas de seguridad avanzadas para proteger los activos."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cómo ayuda el 'Dimensionamiento correcto' (Right-sizing) a la economía de la nube antes y después de una migración?",
"options": [
"Asegura que todos los servidores tengan el mismo tamaño para facilitar la gestión.",
"Selecciona el tipo y tamaño de instancia que mejor se adapte a los requisitos de rendimiento al menor costo posible.",
"Elimina la necesidad de utilizar Grupos de Seguridad.",
"Permite que las instancias de Spot nunca sean interrumpidas por AWS."
],
"answer": "Selecciona el tipo y tamaño de instancia que mejor se adapte a los requisitos de rendimiento al menor costo posible.",
"hint": "Se trata de no pagar por capacidad que no se utiliza.",
"explanation": "El dimensionamiento correcto es el proceso de ajustar los recursos de infraestructura para que coincidan con la carga de trabajo real, evitando el desperdicio de costos por sobreaprovisionamiento."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es un costo 'oculto' u olvidado típicamente asociado con los entornos en las instalaciones (On-premises) que AWS elimina o reduce?",
"options": [
"El costo de las solicitudes PUT en Amazon S3.",
"La gestión de la refrigeración y el mantenimiento físico de las instalaciones.",
"La tarifa por hora de las instancias EC2.",
"El costo de transferencia de datos entrante a la nube."
],
"answer": "La gestión de la refrigeración y el mantenimiento físico de las instalaciones.",
"hint": "Son gastos operativos de un centro de datos físico.",
"explanation": "Al mover cargas a AWS, el cliente ya no tiene que preocuparse por los costos inmobiliarios, la electricidad, la refrigeración ni el mantenimiento del hardware físico."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "De acuerdo con el AWS Cloud Adoption Framework (CAF), ¿qué beneficio se alinea con la mejora de los criterios Ambientales, Sociales y de Gobernanza (ESG)?",
"options": [
"Aumento de los ingresos brutos anuales.",
"Reducción de la huella de carbono mediante el uso de infraestructura en la nube eficiente.",
"Migración de bases de datos de Oracle a Amazon Aurora.",
"Uso de AWS Snowball para transferencias locales."
],
"answer": "Reducción de la huella de carbono mediante el uso de infraestructura en la nube eficiente.",
"hint": "ESG se enfoca en la responsabilidad corporativa y sostenibilidad.",
"explanation": "AWS CAF ayuda a las organizaciones a mejorar sus métricas ESG al aprovechar la mayor eficiencia energética de los centros de datos de AWS en comparación con los tradicionales."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "¿Cuál es la principal ventaja financiera de las 'Economías de Escala' para un cliente de AWS?",
"options": [
"El cliente puede comprar servidores más baratos directamente de los proveedores de AWS.",
"AWS puede bajar los precios de sus servicios a medida que crece el número de clientes y el volumen de hardware gestionado.",
"AWS permite que el cliente pague facturas mensuales fijas sin importar el uso.",
"Garantiza que el cliente nunca pague por la transferencia de datos saliente."
],
"answer": "AWS puede bajar los precios de sus servicios a medida que crece el número de clientes y el volumen de hardware gestionado.",
"hint": "A mayor volumen de compra de AWS, menores costos para todos.",
"explanation": "Debido a que AWS gestiona millones de clientes, logra costos de adquisición más bajos y eficiencia operativa, trasladando esos ahorros a los clientes mediante reducciones de precios."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "Un director financiero (CFO) está preocupado por los gastos de capital (CapEx). ¿Cómo aborda la nube de AWS esta preocupación?",
"options": [
"Aumentando el CapEx para asegurar hardware de última generación.",
"Cambiando el CapEx por gastos variables u operativos (OpEx).",
"Eliminando todos los gastos, tanto fijos como variables.",
"Obligando al pago por adelantado de todos los servicios mediante Instancias Reservadas."
],
"answer": "Cambiando el CapEx por gastos variables u operativos (OpEx).",
"hint": "Pasar de comprar activos a pagar por el servicio consumido.",
"explanation": "La nube permite evitar grandes inversiones iniciales en infraestructura (CapEx) y optar por un modelo de pago por uso (OpEx), lo que mejora el flujo de caja."
},
{
"subjectId": "clf",
"topicId": "clf-1",
"question": "En el contexto de la migración, ¿cuál es un beneficio directo de la automatización según el temario?",
"options": [
"Aumenta la necesidad de intervención manual para garantizar la seguridad.",
"Reduce errores humanos y mejora la eficiencia operativa.",
"Garantiza que las licencias BYOL sean siempre gratuitas.",
"Permite que AWS Snowball se sincronice en tiempo real con S3."
],
"answer": "Reduce errores humanos y mejora la eficiencia operativa.",
"hint": "La automatización acelera procesos y minimiza fallos.",
"explanation": "La automatización de despliegues y operaciones reduce la carga de trabajo manual, disminuye el riesgo de errores y permite que los equipos se centren en tareas de mayor valor."
}

	
  ],

};
