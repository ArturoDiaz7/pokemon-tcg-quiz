const examData = [
    // Sección I: Conceptos Básicos (1-10)
    {
        section: "I. Conceptos Básicos",
        question: "¿Cuál es el objetivo principal en el juego de cartas Pokémon?",
        options: [
            "Derrotar a todos los Pokémon del rival",
            "Agrupar la mayor cantidad de cartas de energía",
            "Ser el primero en tomar seis cartas de premio",
            "Tener la mayor cantidad de Pokémon en la banca"
        ],
        correct: 2,
        explanation: "El objetivo principal del juego es ganar tomando las seis cartas de premio, lo cual se hace derrotando los Pokémon activos del rival."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Cuántas cartas debe tener un mazo estándar en el juego de cartas Pokémon?",
        options: [
            "40 cartas",
            "60 cartas",
            "50 cartas",
            "70 cartas"
        ],
        correct: 1,
        explanation: "Un mazo debe tener exactamente 60 cartas para ser legal en un juego estándar."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Cuántas copias de una misma carta (excepto cartas especiales) puedes tener en un mazo?",
        options: [
            "2 copias",
            "3 copias",
            "4 copias",
            "Ilimitadas"
        ],
        correct: 2,
        explanation: "Puedes incluir hasta 4 copias de la misma carta (excepto las especiales como radiantes o spec) en tu baraja para asegurar consistencia."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Qué son los Pokémon básicos, y cómo se diferencian de otras fases de Pokémon?",
        options: [
            "Son Pokémon que tienen la mayor cantidad de PS",
            "Son Pokémon que pueden atacar directamente al rival",
            "Son las formas iniciales, que no evolucionan de otros Pokémon",
            "Son Pokémon que siempre dan dos cartas de premio al ser derrotados"
        ],
        correct: 2,
        explanation: "Los Pokémon básicos son la forma base de la cadena evolutiva, listas para entrar en juego."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Qué representan los PS (Puntos de Salud) en una carta de Pokémon?",
        options: [
            "El número de ataques que puede usar un Pokémon por turno",
            "La cantidad de daño que puede recibir antes de ser derrotado",
            "La cantidad de energía que puede tener un Pokémon",
            "El nivel de evolución de un Pokémon"
        ],
        correct: 1,
        explanation: "Los Puntos de Salud (PS) indican cuántos puntos de daño puede recibir un Pokémon antes de ser derrotado."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Qué son las cartas de energía y cuál es su función?",
        options: [
            "Son cartas que curan a los Pokémon",
            "Son cartas que permiten robar más cartas",
            "Son cartas necesarias para usar los ataques de los Pokémon",
            "Son cartas que aumentan los PS de los Pokémon"
        ],
        correct: 2,
        explanation: "Las cartas de energía son necesarias para poder usar los ataques de tus Pokémon."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Cuántas cartas de energía puedes unir a un Pokémon por turno?",
        options: [
            "2 cartas",
            "Tantas como quieras",
            "1 carta",
            "Depende de la habilidad del Pokémon"
        ],
        correct: 2,
        explanation: "Solo puedes unir una carta de energía por turno a uno de tus Pokémon."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Qué es el puesto de Pokémon activo y cuántos Pokémon pueden estar en él a la vez?",
        options: [
            "Es donde se colocan los Pokémon en la banca y puede tener hasta 5 Pokémon",
            "Es donde se colocan los Pokémon que han sido derrotados, solo se coloca uno a la vez",
            "Es la zona donde se colocan los Pokémon para ser evolucionados, máximo 1 por turno",
            "Es donde el Pokémon que ataca y solo puede haber uno a la vez"
        ],
        correct: 3,
        explanation: "El Pokémon activo es el único que puede atacar en tu turno y solo puede haber uno por turno."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Qué es la banca y cuántos Pokémon pueden estar en ella?",
        options: [
            "Es la zona de descarte, tiene espacio ilimitado",
            "Es donde el Pokémon activo ataca, solo hay un espacio",
            "Es donde se colocan los Pokémon en espera y puede tener hasta 5",
            "Es la zona donde se colocan las cartas de premios, son 6 espacios"
        ],
        correct: 2,
        explanation: "La banca te permite tener Pokémon en reserva para entrar en juego."
    },
    {
        section: "I. Conceptos Básicos",
        question: "¿Cómo se usan los contadores de daño?",
        options: [
            "Para llevar un conteo de las energías que un Pokémon ha utilizado",
            "Para registrar la cantidad de cartas en la mano de un jugador",
            "Para contabilizar las cartas de premios que ya se han tomado",
            "Para registrar el daño que ha recibido un Pokémon"
        ],
        correct: 3,
        explanation: "Los contadores de daño se utilizan para indicar la cantidad de daño que ha recibido el Pokémon."
    },

    // Sección II: Tipos de Cartas (11-20)
    {
        section: "II. Tipos de Cartas",
        question: "Menciona los diferentes tipos de cartas que existen en el juego de cartas Pokémon.",
        options: [
            "Pokémon, Entrenador, Objeto, Estadio",
            "Pokémon, Energía, Objeto, Herramienta",
            "Pokémon, Energía, Entrenador (Objetos, Partidarios, Estadios y Herramientas)",
            "Pokémon, Energía, Partidario, Estadio"
        ],
        correct: 2,
        explanation: "Las cuatro categorías principales son Pokémon, Energía y Entrenador (que incluye Objetos, Partidarios, Estadios y Herramientas)."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Qué son las cartas de entrenador y cómo se dividen?",
        options: [
            "Son cartas que aumentan los PS, se dividen en Pokémon y Objetos",
            "Son cartas de apoyo, se dividen en Objetos, Partidarios, Estadios y Herramientas",
            "Son cartas de apoyo que pueden evolucionar Pokémon, se dividen en Básicos, fase 1 y fase 2",
            "Son cartas de apoyo que solo pueden usar una vez en la partida, se dividen en cartas V, cartas ex, y cartas especiales"
        ],
        correct: 1,
        explanation: "Las cartas de entrenador ofrecen apoyo estratégico y se dividen en Objetos, Partidarios, Estadios y Herramientas."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Cuál es la función de las cartas de objeto?",
        options: [
            "Curar a los Pokémon",
            "Aumentar el daño de los ataques",
            "Proporcionar efectos beneficiosos, como buscar Pokémon o recuperar energías",
            "Permitir atacar dos veces en un turno"
        ],
        correct: 2,
        explanation: "Las cartas de objeto permiten efectos como buscar cartas específicas o recuperar energías."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Cuántas cartas de objeto puedes jugar por turno?",
        options: [
            "1 carta",
            "2 cartas",
            "3 cartas",
            "Tantas como quieras"
        ],
        correct: 3,
        explanation: "No hay límite para jugar cartas de objeto en un turno."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Cuál es la función de las cartas de partidario?",
        options: [
            "Causar daño directo al oponente",
            "Proporcionar efectos poderosos, pero solo se puede usar una por turno",
            "Aumentar la cantidad de cartas en la mano",
            "Permitir colocar más Pokémon en la banca"
        ],
        correct: 1,
        explanation: "Los Partidarios tienen efectos poderosos pero están limitados a uno por turno."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Cuántas cartas de partidario puedes jugar por turno?",
        options: [
            "2 cartas",
            "1 carta",
            "Tantas como quieras",
            "Depende de la habilidad del Pokémon activo"
        ],
        correct: 1,
        explanation: "Solo puedes jugar una carta de partidario por turno."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Cuál es la función de las cartas de estadio?",
        options: [
            "Aumentar el daño de los ataques de un solo jugador",
            "Afectar a ambos jugadores mientras estén en juego",
            "Curar a todos los Pokémon en juego",
            "Permitir robar más cartas"
        ],
        correct: 1,
        explanation: "Las cartas de Estadio afectan a ambos jugadores mientras permanecen en juego."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Cuál es la función de las cartas de herramienta?",
        options: [
            "Permitir atacar dos veces en un turno",
            "Aumentar los PS de un Pokémon",
            "Unirse a un Pokémon y darle un efecto beneficioso",
            "Aumentar la cantidad de cartas en la mano"
        ],
        correct: 2,
        explanation: "Las Herramientas se adjuntan a Pokémon para otorgar efectos especiales."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Qué son las cartas de Pokémon radiante y cuántas puedes tener en tu baraja?",
        options: [
            "Son cartas de Pokémon que se pueden evolucionar, y puedes tener hasta 4",
            "Son cartas de Pokémon que solo puedes usar una vez por partida, solo puedes tener hasta 2",
            "Son cartas de Pokémon que solo pueden estar en la banca, no hay límite en tu baraja",
            "Son versiones especiales que puedes tener una en tu baraja"
        ],
        correct: 3,
        explanation: "Solo puedes incluir una carta Radiante en tu mazo."
    },
    {
        section: "II. Tipos de Cartas",
        question: "¿Qué son las cartas Pokémon V, VMax, y ex, y cómo se diferencian de los Pokémon normales?",
        options: [
            "Son versiones de Pokémon que solo pueden atacar una vez por partida",
            "Son versiones de Pokémon con menos PS, y son más fáciles de derrotar",
            "Son versiones más poderosas de los Pokémon, con más PS y ataques más fuertes, que dan más cartas de premio",
            "Son versiones de Pokémon que se utilizan solo en la banca"
        ],
        correct: 2,
        explanation: "Estas versiones especiales son más fuertes pero otorgan más cartas de premio al ser derrotadas."
    },
  // Sección III: Mecánicas de Juego (21-30)
{
    section: "III. Mecánicas de Juego",
    question: "¿Cómo se decide quién empieza la partida?",
    options: [
        "El jugador con el mazo más grande",
        "El jugador con más cartas de energía",
        "Lanzando una moneda, el ganador decide quién empieza",
        "El jugador que haya jugado más partidas de Pokémon"
    ],
    correct: 2,
    explanation: "El inicio se decide por un lanzamiento de moneda donde el ganador elige quién comienza."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Cuántas cartas roba cada jugador al inicio de la partida?",
    options: [
        "5 cartas",
        "6 cartas",
        "7 cartas",
        "8 cartas"
    ],
    correct: 2,
    explanation: "Cada jugador roba 7 cartas al inicio para formar su mano inicial."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Qué se hace si un jugador no tiene un Pokémon básico en su mano inicial?",
    options: [
        "Pierde la partida automáticamente",
        "Roba una carta adicional",
        "Muestra su mano al oponente, baraja de nuevo y roba 7 cartas nuevas, y el rival roba una carta extra",
        "Coloca una carta de premio en el descarte"
    ],
    correct: 2,
    explanation: "Se realiza un 'mulligan': el jugador muestra su mano, baraja y roba 7 nuevas, mientras el oponente roba 1 carta extra."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Qué es un 'mulligan' y cuándo se realiza?",
    options: [
        "Una jugada especial para robar más cartas",
        "Una acción para cambiar las cartas de premio",
        "Una acción para ver las cartas del rival",
        "Cuando no se tiene Pokémon básico en la mano inicial"
    ],
    correct: 3,
    explanation: "El mulligan ocurre cuando un jugador no tiene Pokémon básicos en su mano inicial."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Cuántas cartas de premio se colocan al inicio de la partida?",
    options: [
        "4 cartas",
        "5 cartas",
        "6 cartas",
        "7 cartas"
    ],
    correct: 2,
    explanation: "Se colocan 6 cartas de premio al inicio, que representan los Pokémon a derrotar."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Cómo se obtienen las cartas de premio?",
    options: [
        "Al robar las primeras cartas del mazo",
        "Al usar una carta de partidario",
        "Al derrotar al Pokémon activo del rival",
        "Al colocar una carta de estadio"
    ],
    correct: 2,
    explanation: "Cada vez que derrotas un Pokémon activo rival, tomas una carta de premio."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Cuándo un jugador gana la partida?",
    options: [
        "Al tener más Pokémon en la banca",
        "Al tomar todas sus cartas de premio, dejar al rival sin Pokémon, o que el rival se quede sin cartas",
        "Al tener la mayor cantidad de cartas de energía",
        "Al tener la menor cantidad de cartas en la mano"
    ],
    correct: 1,
    explanation: "Hay tres formas de ganar: tomar todas tus cartas de premio, dejar al rival sin Pokémon activos, o que el rival no pueda robar cartas."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Qué significa la debilidad en una carta de Pokémon?",
    options: [
        "El Pokémon es inmune a ese tipo de ataque",
        "El Pokémon recibe la mitad de daño",
        "El Pokémon recibe el doble de daño",
        "El Pokémon se recupera"
    ],
    correct: 2,
    explanation: "La debilidad hace que el Pokémon reciba el doble de daño de tipos específicos."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Qué significa la resistencia en una carta de Pokémon?",
    options: [
        "El Pokémon recibe el doble de daño",
        "El Pokémon es inmune a ataques",
        "El Pokémon recibe menos daño",
        "El Pokémon hace más daño"
    ],
    correct: 2,
    explanation: "La resistencia reduce el daño recibido de ciertos tipos de ataques."
},
{
    section: "III. Mecánicas de Juego",
    question: "¿Qué significa el coste de retirada en una carta de Pokémon?",
    options: [
        "La cantidad de daño que hace al retirarse",
        "La cantidad de cartas a descartar",
        "La energía necesaria para retirarlo a la banca",
        "Las cartas que debes robar"
    ],
    correct: 2,
    explanation: "El coste de retirada indica la energía requerida para mover al Pokémon a la banca."
},
// Sección IV: Combate y Ataque (31-35)
{
    section: "IV. Combate y Ataque",
    question: "¿Qué necesita un Pokémon para poder atacar?",
    options: [
        "Una carta de entrenador",
        "Una carta de herramienta",
        "Suficientes cartas de energía del tipo correcto unidas a él",
        "Una condición especial favorable"
    ],
    correct: 2,
    explanation: "Un Pokémon necesita la cantidad y tipo de energía especificados en el costo del ataque."
},
{
    section: "IV. Combate y Ataque",
    question: "¿Qué representan los símbolos de energía en el coste de un ataque?",
    options: [
        "La cantidad de daño que hará el ataque",
        "La probabilidad de que el ataque sea efectivo",
        "El tipo y la cantidad de energía necesaria para usar el ataque",
        "La cantidad de cartas que se deben descartar"
    ],
    correct: 2,
    explanation: "Cada símbolo indica un tipo y cantidad específica de energía requerida."
},
{
    section: "IV. Combate y Ataque",
    question: "¿Cómo se aplica el daño de un ataque?",
    options: [
        "Se roban cartas equivalentes al daño",
        "Se descartan cartas equivalentes al daño",
        "Se retira energía equivalente al daño",
        "Se restan PS del Pokémon rival"
    ],
    correct: 3,
    explanation: "El daño se refleja colocando contadores sobre el Pokémon afectado, reduciendo sus PS."
},
{
    section: "IV. Combate y Ataque",
    question: "¿Qué son los efectos de los ataques, y cómo pueden afectar a los Pokémon?",
    options: [
        "Son efectos que solo benefician al jugador",
        "Son efectos que solo afectan a cartas de energía",
        "Pueden causar daño adicional, aplicar condiciones especiales o dar beneficios",
        "Son efectos que modifican las cartas de premio"
    ],
    correct: 2,
    explanation: "Los efectos pueden incluir quemaduras, parálisis, robo de cartas o cambios en el campo."
},
{
    section: "IV. Combate y Ataque",
    question: "¿Qué ocurre cuando un Pokémon recibe daño igual o superior a sus PS?",
    options: [
        "Se cura completamente",
        "Pasa a la banca",
        "Queda fuera de combate y va al descarte",
        "Evoluciona automáticamente"
    ],
    correct: 2,
    explanation: "El Pokémon es derrotado y se envía al montón de descartes junto con sus cartas unidas."
},
  // Sección V: Condiciones Especiales (36-40)
{
    section: "V. Condiciones Especiales",
    question: "Menciona algunas condiciones especiales que pueden afectar a un Pokémon.",
    options: [
        "Aumentado, Decrecido, Doble",
        "Curado, Paralizado, Recuperado",
        "Quemado, Dormido, Paralizado, Confundido y Envenenado",
        "Aturdido, Atrapado, Congelado"
    ],
    correct: 2,
    explanation: "Las condiciones principales son: Quemado, Dormido, Paralizado, Confundido y Envenenado."
},
{
    section: "V. Condiciones Especiales",
    question: "¿Cómo afecta la condición de quemado a un Pokémon?",
    options: [
        "El Pokémon se cura en cada turno",
        "El Pokémon recibe daño adicional en el chequeo Pokémon. Se lanza una moneda para ver si se cura",
        "El Pokémon no puede atacar",
        "El Pokémon no puede retirarse"
    ],
    correct: 1,
    explanation: "El quemado causa daño cada turno, y se requiere un lanzamiento de moneda para eliminarlo."
},
{
    section: "V. Condiciones Especiales",
    question: "¿Cómo afecta la condición de dormido a un Pokémon?",
    options: [
        "El Pokémon se cura en cada turno",
        "El Pokémon recibe daño adicional",
        "El Pokémon no puede atacar ni retirarse. Se lanza una moneda para ver si se despierta",
        "El Pokémon roba una carta extra"
    ],
    correct: 2,
    explanation: "El Pokémon dormido queda inactivo hasta que una moneda determine si despierta."
},
{
    section: "V. Condiciones Especiales",
    question: "¿Cómo afecta la condición de confusión a un Pokémon?",
    options: [
        "El Pokémon se cura en cada turno",
        "El Pokémon no puede atacar",
        "El Pokémon tiene probabilidad de hacerse daño al atacar",
        "El Pokémon no puede retirarse"
    ],
    correct: 2,
    explanation: "El Pokémon confundido puede fallar ataques o autolesionarse al intentarlos."
},
{
    section: "V. Condiciones Especiales",
    question: "¿Cómo se eliminan las condiciones especiales?",
    options: [
        "Solo con cartas de estadio",
        "Solo con cartas de objeto",
        "Evolucionando al Pokémon, retirándolo a la banca, o con cartas especiales",
        "Descartando cartas de la mano"
    ],
    correct: 2,
    explanation: "Las condiciones se eliminan evolucionando, moviendo al Pokémon a la banca, o usando efectos de cartas."
},
  // Sección VI: Estrategias y Consejos (41-50)
{
    section: "VI. Estrategias y Consejos",
    question: "¿Qué es el 'meta' en el juego de cartas Pokémon?",
    options: [
        "Las reglas básicas del juego",
        "Los mazos y estrategias más populares y exitosas en un momento dado",
        "La lista de cartas prohibidas",
        "Los torneos más importantes del juego"
    ],
    correct: 1,
    explanation: "El 'meta' se refiere a las estrategias dominantes y mazos más efectivos en el entorno competitivo actual."
},
{
    section: "VI. Estrategias y Consejos",
    question: "¿Dónde puedes encontrar información sobre los mazos más competitivos?",
    options: [
        "En los manuales de reglas del juego",
        "En los foros de discusión de Pokémon",
        "En páginas como Limitless TCG y PokeStats",
        "En las tiendas de cartas de Pokémon"
    ],
    correct: 2,
    explanation: "Estas plataformas ofrecen datos actualizados sobre torneos, estadísticas y mazos populares."
},
{
    section: "VI. Estrategias y Consejos",
    question: "¿Qué tipo de productos son recomendables para empezar a jugar?",
    options: [
        "Sobres sueltos",
        "Cartas promocionales",
        "Mazos preconstruidos, especialmente los 'League Battle Decks'",
        "Cajas de colección"
    ],
    correct: 2,
    explanation: "Los mazos preconstruidos ofrecen una base sólida y equilibrada para principiantes."
},
{
    section: "VI. Estrategias y Consejos",
    question: "¿Cuál es la función de un 'proxy' en el juego de cartas Pokémon?",
    options: [
        "Es una carta especial con habilidades únicas",
        "Es una carta que te da un turno extra",
        "Es una copia de una carta para probar mazos antes de comprar las originales",
        "Es una carta que permite recuperar cartas del descarte"
    ],
    correct: 2,
    explanation: "Los proxies permiten probar estrategias sin invertir en cartas costosas."
},
{
    section: "VI. Estrategias y Consejos",
    question: "¿Qué es el Pokémon TCG Live y cuál es su utilidad?",
    options: [
        "Una aplicación para coleccionar cartas virtuales",
        "Un juego de mesa basado en Pokémon",
        "La plataforma oficial para jugar en línea y practicar",
        "Una tienda de cartas de Pokémon"
    ],
    correct: 2,
    explanation: "TCG Live permite jugar partidas online, probar mazos y competir globalmente."
},
{
    section: "VI. Estrategias y Consejos",
    question: "¿Qué es el Pokémon TCG Pocket y en qué se diferencia del TCG tradicional?",
    options: [
        "Una versión más avanzada del TCG",
        "Un juego con las mismas reglas del TCG tradicional",
        "Una versión simplificada para móviles",
        "Un simulador online del TCG tradicional"
    ],
    correct: 2,
    explanation: "TCG Pocket está diseñado para partidas rápidas y sencillas en dispositivos móviles."
},
{
    section: "VI. Estrategias y Consejos",
    question: "¿Por qué es importante la sinergia entre las cartas en un mazo?",
    options: [
        "Para que el mazo sea más barato",
        "Para que las cartas tengan mejor apariencia",
        "Para crear combinaciones poderosas y estrategias efectivas",
        "Para incluir más tipos de cartas"
    ],
    correct: 2,
    explanation: "La sinergia asegura que las cartas trabajen juntas para un objetivo común."
},
{
    section: "VI. Estrategias y Consejos",
    question: "¿Qué se recomienda para empezar a armar un mazo?",
    options: [
        "Comenzar por los Pokémon más poderosos",
        "Comenzar por cartas de partidario y objeto con sinergias",
        "Comenzar por cartas de energía de todos los tipos",
        "Comenzar por cartas de estadio"
    ],
    correct: 1,
    explanation: "Una base sólida de cartas de apoyo facilita la construcción de estrategias."
},
{
    section: "VI. Estrategias y Consejos",
    question: "¿Qué se debe tener en cuenta al jugar en torneos?",
    options: [
        "Usar el mazo más caro",
        "Conocer el meta, practicar y ser consistente",
        "Usar cartas raras",
        "Incluir muchas cartas de energía"
    ],
    correct: 1,
    explanation: "El éxito en torneos requiere adaptarse al meta y dominar tu mazo."
},
{
    section: "VI. Estrategias y Consejos",
    question: "Menciona algunos consejos generales para mejorar en el juego.",
    options: [
        "Coleccionar muchas cartas",
        "Comprar cartas caras",
        "Practicar con mazos sencillos y unirse a comunidades",
        "Jugar solo en línea"
    ],
    correct: 2,
    explanation: "La práctica constante y el aprendizaje colaborativo son clave para mejorar."
}
];