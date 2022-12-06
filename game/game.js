const groundSpeed = 80;

const hideButtonDeNuevo = () => {
    deNuevoButton.x = 0;
    deNuevoButton.y = -400;
};
hideButtonDeNuevo();

const hideButtonNext = () => {
    buttonNext.x = 0;
    buttonNext.y = -400;
};
const showButtonNext = () => {
    buttonNext.x = 1200;
    buttonNext.y = 750;
};
const showButtonDeNuevo = () => {
    deNuevoButton.x = 1000;
    deNuevoButton.y = 650;
};
const hideButtonPlayers = () => {
    [
        messiButton, neymarButton, suarezButton, 
        vegaButton, valenciaButton
    ].forEach(p => {
        p.x = 0;
        p.y = -400;
    });
    choiceTitle.x = 800;
    choiceTitle.y = -400;
}

const showButtonsPlayers = () => {
    messiButton.x = neymarButton.x = suarezButton.x = vegaButton.x = valenciaButton.x = choiceTitle.x = 957;
    choiceTitle.y = 230;    
    messiButton.y = 345;
    neymarButton.y = 485;
    suarezButton.y = 625;
    valenciaButton.y = 765;
    vegaButton.y = 905;
}

const hidePlayers = () => {
    [
        messiClip, neymarClip, valenciaClip, 
        vegaClip, suarezClip, pelotaClip, arqueroClip, defensoresClip
        
    ].forEach(p => p.gotoAndStop(1));    
};
hidePlayers();

const hideOptions = () => {
    [
        answerA, answerB, answerC, answerD
    ].forEach(p => {
        p.x = -400;
        p.y = -400;
    });
    [
        textAnswerA, textAnswerB, textAnswerC, textAnswerD,
        textAnswerCorrect, textAnswerExplanation 
    ].forEach(p => p.setText(""));
};
hideOptions();

const hideTitles = () => {
    [
        askNumber, askText,
    ].forEach(p => p.setText(""));
};
hideTitles();

const hideFondoClip = () => {
    answerFondoClip.gotoAndStop(1);
};
hideFondoClip();

const barajar = (array) => {
  array.sort(() => Math.random() - 0.5);
}

const dummyAsks = [{
    text: "En qué año sucedió que bla bla bla bla bla bla bla bla bla? \n bla bla bla bla bla bla bla bla \n bla bla bla bla bla bla bla bla???",
    options: [["1964", true],['ayer', false],["Mil novecientossss seesenta y 4", false],["Diez veces cien + seesenta con 4", false]],
}, {
    text: "Quién fue el presidente del coso del cosito que bla bla bla bla bla? \n bla bla bla bla bla bla bla bla bla bla bla bla???",
    options: [["Perón", true],["Alfonsín", false],["Bombita Rodriguez", false],["Ghadafi", false]],
}, {
    text: "Quién mató a un policia motorizado una vez cundo bla bla bla? \n bla bla bla bla bla bla bla bla \n bla bla bla bla bla bla???",
    options: [["Yo", true],["Tu", false],["El", false],["VosotrosNosotrosEllos", false]],
}, {
    text: "Desde cuando como qué hasta donde de bla bla bla bla bla bla bla bla bla? \n bla bla bla bla bla bla bla bla??",
    options: [["Mañana", true],["Hoy", false],["El pasado", false],["El futuro pluscuamperfecto", false]],
}, {
    text: "Quién fue el amigo del amigo del amigo de bla bla bla bla bla bla bla bla bla? \n bla bla bla bla bla bla bla bla?",
    options: [["Pedro", true],["Pietro", false],["Patoruzú", false],["PaquidermoDeLux", false]],
    
}, {
    text: "Qué le pasó al amigo del amigo del amigo que bla bla bla bla bla bla bla bla bla? \n bla bla bla bla bla bla bla bla??",
    options: [["Ganó", true],["Pensó", false],["Jugó", false],["Ayer", false]],
}];

const data = {

    alemania:{name: 'Alemania', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía Representativa', false], ['República federal parlamentaria', true], ['República federal presidencialista', false], ['Democracia representativa', false]], explanation: 'Tras la Segunda Guerra Mundial, cuando la Alemania nazi fue derrotada por los aliados, Alemania fue dividida en dos Estados separados a lo largo de las líneas de ocupación aliada en 1949; los Estados resultantes fueron la República Federal de Alemania y la República Democrática Alemana, que se reunificaron en 1990.\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1956, false], [1919, true], [1943, false], [1960, false]], explanation: 'En 1917 el Kaiser Guillermo II presentó reformas democráticas, entre ellas al derecho al voto, pero no para las mujeres. Fue hasta el 12 de noviembre de 1918 que se creó la base legal del sufragio para hombres y mujeres, mayores de 20 años. Un hito para el movimiento femenino.'}, {text: 'El voto en Alemania es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El sistema electoral federal alemán se caracteriza por la combinación del principio de la representación proporcional, que determina la composición del Parlamento, con la regla decisoria de la mayoría relativa, que rige para la mitad de los escaños, en función de un voto personal.'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['1 año', false], ['2 años', false], ['4 años', true], ['6 años', false]], explanation: 'El Bundestag (parlamento alemán) es elegido cada cuatro años por todos los ciudadanos alemanes mayores de 18 años.4\u200b Las elecciones utilizan un sistema de representación proporcional mixta que combina los escaños elegidos mediante escrutinio mayoritario uninominal y con una lista proporcional de partidos para garantizar que su composición refleje el voto popular nacional. '}], clip: 'BBA'},
    arabia_saudita:{name: 'Arabia Saudita', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República Islámica', false], ['Monarquía Representativa', false], ['Monarquía Absoluta Islámica', true], ['Democracia representativa', false]], explanation: 'El Estado saudí moderno comenzó en 1932 y el gobierno ha sido una monarquía absoluta y una teocracia desde sus comienzos, basada en una aplicación extremista de los principios del islam. Hoy en día representa una de las últimas seis monarquías absolutas del mundo.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [['Aún no pueden votar', false], [2015, true], [2003, false], [1996, false]], explanation: 'En las elecciones del 2015, las mujeres votaron por primera vez en Arabia Saudita. \u200bEn las elecciones se inscribieron 130.600 mujeres en las listas electorales que podrán ser electoras y candidatas políticas, miembros del Consejo de la Shura el órgano que se ocupa de asesorar a la monarquía'}, {text: '¿Desde que año Salmán bin Abdulaziz Al Saúd es el rey de Arabia Sadita?', options: [[1956, false], [2015, true], [1984, false], [1996, false]], explanation: ' El 23 de enero de 2015, tras el fallecimiento de su medio hermano,Salmán bin Adulaziz, el hijo conocido número 25 del primer rey de Arabia Saudí y considerado el fundador del Estado Moderno Saudí, se convirtió en Rey de Arabia Saudita. '}, {text: 'El voto en Arabia Saudita es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Arabia Saudí es una monarquía basada en las reglas que gobiernan una sociedad islámica en una interpretación estricta. Carece de Parlamento propiamente dicho, y los\npartidos políticos y sindicatos están prohibidos. El Poder Ejecutivo reside en\nel Rey, quien nombra y dirige el Consejo de Ministros. Sin embargo existen concejos municipales que se encargan del mantenimiento de espacios verdes, calles y recolecciòn de basura. \n'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['1 año', false], ['2 años', false], ['4 años', true], ['6 años', false]], explanation: 'El Majlis Al-Shura (Consejo Consultivo) se compone de 150 miembros, designados libremente por el Rey por un periodo de cuatro años entre personalidades destacadas de la sociedad saudí, pretendiendo reflejar su diversidad\ny distintas sensibilidades. 30 de sus miembros son mujeres, desde que el\ndifunto rey Abdallah introdujera por Decreto Real en enero de 2013 una\ncuota femenina del 20% de sus miembros'}], clip: 'MVA'},
    argentina:{name: 'Argentina', asks: [{text: 'En qué año se retornó a la democracia en Argentina?', options: [[1982, false], [1983, true], [1985, false], [1990, false]], explanation: 'El 10 de diciembre de 1983, Día Internacional de los Derechos Humanos, una multitud acompañó al recientemente presidente electo Raúl Ricardo Alfonsín desde el Congreso -allí había hablado ante la Asamblea Legislativa- hasta la Casa Rosada, donde el presidente de facto Reynaldo Bignone le entregaría los atributos del mando.'}, {text: '¿Cuantos habitantes tiene Argentina?', options: [[39456126, false], [109742, false], [350786, false], [47327407, true]], explanation: ''}, {text: '¿Que forma de gobierno tiene?', options: [['República federal presidencialista', true], ['República ', false], ['Democracia representativa', false], ['República unitaria parlamentaria', false]], explanation: 'La República Argentina es un estado federal constituido por 23 Provincias y una Ciudad Autónoma.\n\nCada provincia y la ciudad de Buenos Aires elige por sufragio directo a sus gobernantes y legisladores; asimismo, los estados provinciales organizan y sostienen su administración de Justicia'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1930, false], [1945, false], [1947, true], [1950, false]], explanation: 'La ley, un hito en la historia, fue impulsada por María Eva Duarte de Perón, que, con un arduo trabajo, acompañó el movimiento de mujeres iniciado anteriormente por sufragistas como Julieta Lanteri, Elvira Rawson, Cecilia Grierson y Alicia Moreau, entre otras.'}, {text: 'El voto en Argentina es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'MCU'},
    australia:{name: 'Australia', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República de Estado unitario', false], ['Monarquía constitucional', true], ['República presidencialista ', false], ['Monarquía parlamentaria', false]], explanation: 'Australia obtuvo independencia legislativa del Parlamento del Reino Unido mediante el Estatuto de Westminster de 1931. Esto entró en vigor en Australia en 1942, pero se remonta al 3 de septiembre de 1939. Con la Ley de Estilo y Títulos Reales de 1953, el Parlamento australiano otorgó a la reina Isabel II del Reino Unido el título de reina de Australia. En 1973, su título australiano ya no incluía su condición de reina del Reino Unido ni defensora de la Fe.'}, {text: 'El voto en Australia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El sufragio se convirtió en obligatorio en las elecciones australianas de 1924. Ocurrió en respuesta a la baja participación en elecciones previas. En 1925, un año después de introducir el voto obligatorio, el 91,4% de los australianos registrados votaron.\n'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1932, false], [1922, false], [1912, false], [1902, true]], explanation: 'En 1902 Australia se convirtió en el segundo país del mundo, después de Nueva Zelanda, en extender el derecho de voto a las mujeres y presentarse como candidatas para las elecciones al Parlamento.'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['6 años', false], ['5 años', false], ['4 años', false], ['3 años', true]], explanation: 'Solo Australia, Nueva Zelanda, El Salvador, Filipinas, México y Nauru eligen su Cámara de Representantes o Cámara baja, por un período de tres años'}, {text: '¿Qué documentación es necesaria para votar en Australia?', options: [['Pasaporte', false], ['Documento de Indentificación personal (ID)', false], ['Certificación impositiva', false], ['Ninguno', true]], explanation: 'No se requiere ningún tipo de documento para votar en una elección australiana. A los votantes se les hace tres preguntas antes de que se les entregue la papeleta para votar, "¿cuál es tu nombre completo?" "¿dónde vivís?" y "¿ya has votado en esta elección?"'}], clip: 'MAA'},
    belgica:{name: 'Bélgica', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional federal', true], ['Monarquía parlamentaria ', false], ['República presidencialista', false], ['República semipresidencialista', false]], explanation: 'Bélgica es una monarquía constitucional federal en la que el rey es el jefe del Estado y el primer ministro, el jefe del Gobierno en un sistema multipartidista. Los poderes de decisión no están centralizados, sino que se reparten entre tres niveles de gobierno: el Gobierno Federal, tres comunidades lingüísticas (de lengua flamenca, francesa y alemana) y tres regiones (Flandes, Valonia y Bruselas-Capital).'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1919, false], [1933, false], [1945, false], [1948, true]], explanation: 'Sin embargo, la concesión del derecho al voto a todas las mujeres en 1948, sim embargo, no condujo a la feminización de las asambleas legislativas y del gobierno. En las elecciones legislativas de 1949, de los 212 diputados, seis eran mujeres. No fue hasta 1965 que Marguerite De Riemaecker-Legot fue la primera mujer nombrada Ministra y en 1985 Miet Smet fue la primera mujer Secretaria de Estado.'}, {text: 'El voto en Bélgica es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'En 1892 se aprobaba en Bélgica el sufragio obligatorio no forzado gracias a la iniciativa de los partidos democristianos temiendo que, debido al auge del socialismo y a su capacidad de mover a las masas, su electorado se quedara en casa en vez de ir a votar.'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['6 años', false]], explanation: 'El Parlamento Federal, denominación con que la constitución belga se refiere al parlamento bicameral que ejerce en este reino el poder legislativo a nivel federal, está compuesto por una Cámara de Representantes (cámara baja) y un Senado (cámara alta). Cuando ambas cámaras co-legisladoras se convocan conjuntamente (en las situaciones constitucionalmente previstas, siempre para resolver cuestiones relativas al Trono) se constituyen en Cámaras Reunidas del Parlamento federal.'}], clip: 'BRB'},
    brasil:{name: 'Brasil', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República presidencialista', false], ['República parlamentaria', false], ['República federativa', true], ['Democracia representativa', false]], explanation: 'La organización político administrativa comprende la Unión, los estados, el Distrito Federal y los municipios, todos autónomos en los términos de la Constitución. Los territorios federales integran la Unión, y su creación, transformación en estado o reintegración al estado de origen es regulada por ley complementaria. Cada estado dicta su propia constitución y se encuentra regido por un gobernador. La nación está subdividida en la capital y 26 estados y 5.570 municipalidades.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1902, false], [1932, true], [145, false], [1961, false]], explanation: 'Con la aplicación del Código Electoral de 1932, donde se fijaba que "el ciudadano mayor de 21 años, sin distinción de sexo podría votar efectivamente..." las mujeres pudieron votar. La primera en hacerlo fue Celina Guimarães Viana'}, {text: 'El voto en Brasil es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Si bien el voto es obligatorio, es optativo para adolescentes de entre 16 y 17 años, mayores de 70 y analfabetos.  (Constitución art. 14, inciso 1)'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['6 años', false], ['8 años', true]], explanation: 'Los senadores son elegidos por un mandato de ocho años habiendo elecciones cada cuatro años, renovándose primero un tercio y cuatro años después el resto. Las elecciones se realizan desde 1994 al mismo tiempo que las presidenciales y las estatales.'}], clip: 'NAE'},
    camerun:{name: 'Camerún', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República de Estado Unitario', true], ['República presidencialista', false], ['Monarquía absoluta ', false], ['Monarquía constitucional ', false]], explanation: 'Un Estado unitario es en política, una forma de Estado donde el poder existe en un solo centro de autoridad que extiende su accionar a lo largo de todo el territorio del respectivo Estado.1\u200b '}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1946, true], [1970, false], [1990, false]], explanation: 'https://en.wikipedia.org/wiki/Women%27s_suffrage#Africa'}, {text: 'El voto en Camerún es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El Parlamento de Camerún es el órgano que ejerce el poder legislativo en Camerún. Se trata de un órgano bicameral, compuesto del Senado y de la Asamblea Nacional.'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['5 años', true], ['6 años', false], ['8 años', false]], explanation: ''}], clip: 'NVS'},
    canada:{name: 'Canadá', asks: [{text: '¿Cuál es su idioma oficial ?', options: [['Inglés', false], ['Francés', false], ['Canadiense', false], ['Inglés y francés', true]], explanation: 'El bilingüismo oficial en sus diversas formas se remonta a 1867, en tiempos de la Confederación Canadiense, cuando los Actos de la América del Norte Británica permitieron tanto el francés como el inglés en los debates parlamentarios y en los juicios de las cortes federales.\nDe acuerdo con el censo 2001, de 29,6 millones de canadienses (33 millones en junio de 2006), los anglófonos representan alrededor del 59,3 % (17,3 millones) y los francófonos 22,9 % (6,7 millones) de la población respectivamente. El 11,6 % (5,2 millones) tenían otra lengua materna. Otros 380 000 tenían más de una lengua materna.'}, {text: '¿En qué año se unió a la Commonwealth?', options: [[1867, false], [1776, false], [1931, true], [1953, false]], explanation: 'La Commonwealth es una organización compuesta por 54 países soberanos independientes y semiindependientes que, con la excepción de Mozambique y Ruanda,1\u200b comparten lazos históricos con el Reino Unido. \n\nSu principal objetivo es la cooperación internacional en el ámbito político y económico, y desde 1950 la pertenencia a ella no implica sumisión alguna a la Corona británica, aunque se respeta la figura del monarca del Reino Unido. '}, {text: '¿Quién es su actual primer ministro?', options: [['Bob Rae', false], ['Justin Trudeau', true], ['David Peterson', false], ['Michael Harris', false]], explanation: 'Tras la victoria por mayoría absoluta del Partido Liberal en las elecciones federales de octubre de 2015, Justin Trudeau es el primer ministro de Canadá.'}, {text: 'El voto en Canadá es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['5 años', false], ['8 años', false]], explanation: 'Antes, los términos senatoriales eran vitalicios, pero esta tradición fue disuelta por el Acta de la Norteamérica británica de 1965, cuando se instituyó la edad máxima de jubilación en 75 años para todos los senadores. Aquellos elegidos antes de la vigencia de esta acta, estaban exentos.\n\nLos escaños senatoriales se declaran automáticamente vacantes si el senador falta a dos asambleas parlamentarias consecutivas. Además, si el senador es declarado culpable de traición o de cualquier crimen que conlleve imputación es declarado en quiebra, causando que sea retirado de su posición, por no cumplir con los requisitos senatoriales.'}], clip: 'BRB'},
    catar:{name: 'Catar', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Emirato', true], ['Monarquía absoluta', false], ['Monarquía constitucional', false], ['República federal', false]], explanation: 'Un emirato (árabe: إمارة imāra, plural: إمارات imārāt) es un territorio político bajo la administración de un emir,1\u200b siendo un tipo de monarquía característica de Oriente Medio y el Mundo Árabe. En árabe, el término puede ser generalizado a una provincia o país que es administrado por un miembro de la clase dominante.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1955, false], [1976, false], [1985, false], [1999, true]], explanation: 'Qatar fue el primer país del Golfo en otorgar a las mujeres en 1999 el derecho al voto del que ya disfrutaban los hombres, aunque siguen siendo una exigua minoría las que ocupan cargos públicos.'}, {text: 'El voto en Catar es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Las elecciones generales de Catar de 2021 se realizaron el 2 de octubre de 2021, y fueron las primeras elecciones generales para la Asamblea Consultiva, con una participación electoral del 63,5%'}], clip: 'MRC'},
    corea_del_sur:{name: 'Corea del Sur', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Republica federal', false], ['República presidencialista', true], ['Monarquía constitucional', false], ['República de Estado Unitario', false]], explanation: 'La Constitución establece una república democrática con un sistema presidencialista. El Poder Ejecutivo es dirigido por el Presidente, quien es el jefe de Estado, de Gobierno y Comandante de las Fuerzas Armadas; a su vez nombra al Primer Ministro con la aprobación del Parlamento. Recibe la asistencia de 7 consejos independientes, nombra a los 17 ministros y dirige la Agencia Nacional de Inteligencia y la Junta de Audición e Inspección. '}, {text: 'En qué año se dividió de Korea del Norte? ', options: [[1945, true], [1948, false], [1973, false], [1989, false]], explanation: 'Al finalizar la Segunda Guerra Mundial en 1945, la península de Corea fue liberada de la ocupación japonesa. El norte quedó bajo la influencia comunista de la Unión Soviética (URSS), mientras que el sur estaba dominado por los Estados Unidos. En 1948 se crearon formalmente la República de Corea en el sur y la República Popular Democrática de Corea en el norte. La frontera entre las dos Coreas se estableció en el Paralelo 38, que dividía por la mitad la península.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1948, true], [1955, false], [1990, false]], explanation: 'El sufragio femenino en Corea del Sur se incluyó en el artículo 11 de la constitución nacional en 1948. La constitución dice que "todos los ciudadanos serán iguales ante la ley, y no habrá discriminación en la vida política, económica, social o cultural por razón de sexo, religión o condición social”'}, {text: 'El voto en Corea del Sur es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: ''}], clip: 'MRC'},
    costa_rica:{name: 'Costa Rica', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República presidencialista', true], ['República parlamentaria', false], ['Democracia directa', false], ['Protectorado', false]], explanation: 'Según el índice de democracia elaborado por The Economist que incluyó a 167 países, Costa Rica es -junto con Uruguay y Chile - el único país de Latinoamérica considerado como una democracia plena, ubicado entre los 20 mejores sistemas democráticos de todo el planeta y alcanzando elevadas puntuaciones en varios rubros del estudio, superiores a los de la mayoría de países de la Unión Europea.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1948, true], [1965, false], [1985, false]], explanation: 'Luego de una lucha iniciada en 1923 por La Liga Feminista de Costa Rica, se logró que la constitución de 1949 otorgara a las mujeres costarricenses el derecho al sufragio.'}, {text: 'El voto en Costa Rica es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ' El voto es secreto, universal y (al menos teóricamente) obligatorio como lo establece el artículo 93 de la Constitución, si bien esa obligatoriedad no se implementa en la práctica, ya que no se sanciona su no emisión y de hecho el abstencionismo es relativamente alto, normalmente oscilando en el 30%'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2  años', false], ['4 años', true], ['5 años', false], ['8 años', false]], explanation: 'Con la Guerra Civil de Costa Rica de 1948 que depuso el gobierno de Teodoro Picado Michalski se rompió el orden constitucional y asumió el mando la Junta Fundadora de la Segunda República. Allí se convocó a una asamblea constituyente y se promulgó la Constitución Política de 1949, vigente en 2022. En esta constitución se mantiene el sistema unicameral de 1871 y se fija el número de diputados en 45, con la disposición de que al superar la población 1.350.000 habitantes, se elegiría un nuevo diputado por cada 30 000 o residuo. También se disponía que cada tres diputados propietarios, se elegiría un suplente. Posteriormente, mediante la Ley N°2741 de 12 de mayo de 1961 se reformó el texto constitucional para dejar fijo el número de diputados en 57'}], clip: 'MRC'},
    croacia:{name: 'Croacia', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Republica parlamentaria ', false], ['República presidencialista ', true], ['República semipresidencialista ', false], ['Monarquía constitucional', false]], explanation: ' En 1990, tras el colapso del partido comunista que lideraba la RFS Yugoslavia, Croacia adoptó su constitución actual y organizó sus primeras elecciones multipartidistas.86\u200b Declaró su independencia el 8 de octubre de 1991, con lo que desintegró a Yugoslavia y obtuvo el reconocimiento internacional por parte de la ONU en 1992.\u200b Bajo su constitución de 1990, Croacia operó con un sistema semipresidencial hasta 2000, cuando adoptó el sistema parlamentario actual.'}, {text: '¿Desde que año Croacia es un estado soberano e independiente?', options: [[1991, true], [1930, false], [1985, false], [2005, false]], explanation: 'Para 1990 Croacia era todavía parte de Yugoslavia o simplemente la Segunda Yugoslavia, un estado fundado tras la Segunda Guerra Mundial que reunía a Bosnia y Herzegovina, Eslovenia, Macedonia, Montenegro y Serbia.\u200b\u200b El 8 de octubre de 1991, en pleno auge de la Guerra Patria, el Parlamento Croata aprobó la decisión de romper todos los vínculos estatales y jurídicos con la República Socialista Federativa de Yugoslavia.\n\nCon esta decisión la República de Croacia llegó a ser un estado soberano e independiente que este octubre cumplirá apenas 27 años de existencia.\n\n'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1945, true], [1918, false], [1985, false], [1989, false]], explanation: 'En 1945, las mujeres de Yugoslavia (actualmente Croacia) lucharon y ganaron el derecho al voto'}, {text: 'El voto en Croacia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: 'La Constitución de Croacia exige que el parlamento esté formado por no menos 100 miembros y por no más de 160, elegidos por votación secreta directa por períodos de cuatro años. Las elecciones parlamentarias se celebran dentro de los 60 días siguientes al vencimiento del plazo o la disolución parlamentaria (esta última se realiza con un voto de censura o si el parlamento no aprueba un presupuesto estatal dentro de 120 días después de que el gobierno lo aprueba), y el nuevo parlamento debe convocarse dentro de los 20 días posteriores a las elecciones.'}], clip: 'MRC'},
    dinamarca:{name: 'Dinamarca', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía absoluta', false], ['Monarquía constitucional', true], ['República semipresidencialista', false], ['República federal', false]], explanation: 'Dinamarca es una monarquía constitucional con una lista de monarcas que se ha mantenido de forma continua por un periodo de más de 1000 años (excepto en un periodo de interregnos entre 1332 y 1340).'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1915, true], [1930, false], [1945, false], [1960, false]], explanation: 'Dinamarca fue pionero en el sufragio femenino, siendo el cuarto país en conceder a las mujeres el derecho al voto'}, {text: 'El voto en Dinamarca es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Hay tres tipos de elecciones en Dinamarca: elecciones al parlamento nacional (el Folketing), elecciones locales (a los consejos municipales y regionales) y elecciones al Parlamento Europeo. También se pueden convocar referéndums para consultar directamente a la ciudadanía danesa sobre una cuestión de interés nacional.'}], clip: 'BRB'},
    ecuador:{name: 'Ecuador', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República plurinacional federal democrática descentralizada\u200b presidencialista', true], ['República parlamentaria', false], ['República plurinacional unitaria democrática descentralizada\u200b presidencialista', false], ['República semipresidencialista unitaria', false]], explanation: 'Ecuador se declaró Estado plurinacional e intercultural en su nueva constitución del 2008. Esto es un reconocimiento importante para las diferentes culturas del país, que cuenta con 14 diferentes nacionalidades y 18 pueblos indígenas'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1976, false], [1240, false], [1956, false], [1929, true]], explanation: 'El sufragio femenino en Ecuador fue garantizado en la Constitución de 1929, convirtiendo a Ecuador en el primer país de América Latina en dar a las mujeres el derecho al voto'}, {text: 'El voto en Ecuador es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'NAE'},
    espana:{name: 'España', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional', false], ['República semipresidencialista unitaria', false], ['República presidencialista', false], ['Monarquía parlamentaria', true]], explanation: ' En España, el rey es el Jefe del Estado y todos sus actos deben ser refrendados por el Gobierno, de acuerdo con lo establecido en la Constitución en su Título II dedicado a la Corona. De igual manera, no tiene iniciativa propia en sus actos políticos, dado que no es responsable de ellos y siempre deben estar refrendados por la autoridad política competente.'}, {text: '¿Quién es el actual rey de España?', options: [['Felipe VI', true], ['Felipe V', false], ['Carlos III', false], ['Juan Carlos I', false]], explanation: 'Luego de la adjudicación de su padre Juan Carlos I, Felipe VI fue proclamado rey el 19 de junio de 2014.'}, {text: 'El voto en España es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Hay cuatro tipos principales de elecciones en España: elecciones generales en las que se elige a los miembros del Congreso de los Diputados y del Senado de España, elecciones autonómicas en las que se elige a los miembros de los Parlamentos autonómicos, elecciones municipales en las que se elige a los miembros de los ayuntamientos y elecciones europeas en las que se elige a los europarlamentarios españoles.'}], clip: 'BRB'},
    estados_unidos:{name: 'Estados Unidos', asks: [{text: '¿Quién es el presidente actual?', options: [['Donald Trump', false], ['Hillary Clinton', false], ['Joe Biden', true], ['Kamala Harris', false]], explanation: ''}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1919, true], [1929, false], [1933, false]], explanation: 'Aprobada por el Congreso el 4 de junio de 1919 y ratificado el 18 de agosto de 1920, la Enmienda XIX garantizó a toda mujer americana el derecho a votar. Conseguir este hito demandó una lucha larga y difícil y la victoria tomó décadas de agitación y protesta.'}, {text: '¿Que forma de gobierno tiene?', options: [['República federal presidencialista', true], ['República semipresidencialista unitaria', false], ['Monarquía parlamentaria', false], ['Monarquía constitucional', false]], explanation: 'El primer gobierno se formó en 1789, cuando entró en vigor su Constitución remplazando a los Artículos de la Confederación, convirtiendo a los Estados Unidos en la primera república constitucional del mundo, que se basa en los principios del federalismo y el republicanismo, en los cuales el poder se comparte entre el gobierno federal y los gobiernos estatales. La interpretación y ejecución de estos principios, incluidos los poderes que debe tener el gobierno federal y cómo se pueden ejercer esos poderes, se han debatido desde la adopción de la Constitución. Algunos defienden los poderes federales expansivos, mientras que otros abogan por un papel más limitado para el gobierno central en relación con los individuos, los estados u otras entidades reconocidas.'}, {text: '¿Cuantas estrellas tiene su bandera? ', options: [[45, false], [53, false], [49, false], [50, true]], explanation: 'La bandera actual permanece inalterable desde 1959, cuando se integró el estado de Hawai. Desde entonces, el número de estrellas que tiene la bandera de Estados Unidos es 50, una por cada estado. '}, {text: '¿En qué año declararon su independencia?', options: [[1776, true], [1780, false], [1810, false], [1692, false]], explanation: 'La Declaración de Independencia de los Estados Unidos de América\u200b fue presentada en Filadelfia el 4 de julio de 1776, proclamando que las Trece Colonias norteamericanasc\u200b -entonces en guerra con el Reino de Gran Bretaña- se habían autodefinido como trece nuevos Estados soberanos e independientes y ya no reconocían el dominio británico;, formando en su lugar a los Estados Unidos.'}, {text: '¿El consumo de marihuana es legal?', options: [['Si', false], ['No', false], ['Depende de cada Estado', true], ['Si, pero cada Estado lo regula de manera independiente. ', false]], explanation: 'El 1 de enero de 2017 comenzó la venta legal de marihuana con fines recreativos en el estado de Colorado, que se convirtió en el primer mercado público de marihuana de Estados Unidos.\nYa en 2020, en 11 estados se ha legalizado el consumo la marihuana con finalidad recreativa. En las elecciones generales del 3 de noviembre de 2020, cuatro estados más aprobaron por votación popular la legalización del uso recreativo de la marihuana. Sin embargo, la posesión, la compra y la venta siguen siendo ilegales a nivel federal. '}], clip: 'BBA'},
    francia:{name: 'Francia', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Democracia representativa', false], ['República semipresidencialista unitaria', true], ['Monarquía constitucional', false], ['', false]], explanation: 'El sistema político francés es definido como semipresidencial, lo que supone que haya un presidente con importantes poderes, un Ejecutivo dirigido por un primer ministro y un parlamento al que rinde cuentas el Gobierno.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1944, true], [1950, false], [1965, false]], explanation: 'El 21 de abril de 1944, el Comité français de la Libération nationale concede el derecho a voto a las mujeres, lo que quedará confirmado con la ordenanza del 5 de octubre bajo el Gobierno provisional de la República. Este derecho, en cambio, no se hará efectivo hasta las elecciones municipales del 29 de abril de 1945 y, más tarde, en octubre del mismo año, durante las elecciones a la Asamblea constituyente.'}, {text: 'El voto en Francia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]], explanation: ''}], clip: 'NAF'},
    gales:{name: 'Gales', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República presidencialista', false], ['República semipresidencialista unitaria', false], ['Monarquía parlamentaria', false], ['Monarquía constitucional', true]], explanation: 'Si bien Gales tiene su propio gobierno y parlamento en la actualidad, desde principios del siglo XVIII hasta finales de los noventa Gales estaba regida por la ley por el gobierno del Reino Unido. En 1997 se celebró una votación pública en Gales para determinar si debería tener más control sobre sus propias leyes y políticas gubernamentale, y como resultado de esa votación se creó una Asamblea Nacional para Gales y ciertos poderes comenzaron a trasladarse (o devolverse) de Westminster a Gales.'}, {text: '¿Forma parte del Reino Unido?', options: [['Si', true], ['No', false], ['', false], ['', false]], explanation: 'Actualmente Gales tiene dos gobiernos: el Gobierno de Gales y el Gobierno del Reino Unido de Gran Bretaña e Irlanda del Norte, cada uno con poder y responsabilidad sobre cosas diferentes.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1918, true], [1929, false], [1945, false], [1950, false]], explanation: 'En 1918 , en todo el Reino Unido, las mujeres mayores de 30 años obtuvieron el derecho al voto, seguido de la Ley de representación del pueblo (igualdad de derecho al voto ) de 1928, en la que las mujeres obtuvieron los mismos derechos al voto que los hombres.\n\n'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]], explanation: 'El Senedd (parlamento galés) está integrado por 60 diputados. Desde 2011, los miembros son elegidos por un periodo de cinco años bajo un sistema de miembros adicionales, en el que 40 MS representan divisiones geográficas más pequeñas conocidas como "circunscripciones" y son elegidos por mayoría absoluta, y 20 MS representan cinco "regiones electorales" utilizando el método D\'Hondt de representación proporcional. Por lo general, el partido más grande del Senedd forma el Gobierno de Gales.'}, {text: 'El voto en Gales es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'BRB'},
    ghana:{name: 'Ghana', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional', false], ['Monarquía parlamentaria', false], ['República presidencialista', true], ['República semipresidencialista unitaria', false]], explanation: 'El gobierno y política de Ghana se basa en un régimen presidencial, en la cual el presidente desempeña a la vez el papel de jefe de estado y de presidente del gobierno. El gobierno ejerce el poder ejecutivo mientras que el poder legislativo es compartido por el parlamento (sistema de una sola cámara) y el gobierno.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1944, false], [1954, true], [1966, false], [1992, false]], explanation: 'De todos los países que tuvieron en cuenta este derecho durante la década de los 50, la mayoría fueron africanos (como Ghana en 1954, Egipto en 1956 o Túnez en 1959), mientras que Asia, América y la Europa mediterránea también se movieron en la misma dirección.'}, {text: 'El voto en Ghana es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años ', false], ['8 años', false]], explanation: 'El Parlamento es la autoridad legislativa y está compuesto por una sola cámara, siendo integrado por 275 miembros\u200b elegidos por sufragio universal cada cuatro años.\nEl Vicepresidente o los ministros que no conforman el Parlamento tienen derecho a participar de las deliberaciones producidas en el mismo, y gozan de todos los privilegios de un miembro del Parlamento con excepción que no pueden votar u ocupar un cargo dentro del mismo.'}], clip: 'NBG'},
    inglaterra:{name: 'Inglaterra', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional', true], ['República parlamentaria', false], ['Monarquía parlamentaria', false], ['Democracia representativa', false]], explanation: 'Inglaterra fue el primer país europeo en abandonar la monarquía absoluta, esto ocurrió en el año 1689, al finalizar el reinado de los Estuardo. Es entonces cuando el nuevo monarca, Guillermo de Orange, jura la Declaración de Derechos (The Bill of Rights), la cual limita sus poderes y obliga a someter algunas de sus decisiones al Parlamento.\n'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1918, true], [1929, false], [1945, false], [1950, false]], explanation: 'En 1918 , en todo el Reino Unido, las mujeres mayores de 30 años obtuvieron el derecho al voto, seguido de la Ley de representación del pueblo (igualdad de derecho al voto ) de 1928, en la que las mujeres obtuvieron los mismos derechos al voto que los hombres.\n\n'}, {text: 'El voto en Inglaterra es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto en Inglaterra es optativo, bajo un sistema electoral británico de tipo mayoritario uninominal, llamado informalmente "el primero que pase el poste": en cada una de las 650 circunscripciones (distritos electorales), gana una banca sólo el candidato con más votos y a nivel nacional, el partido con más escaños. Es decir, sacar la mayor cantidad de votos no implica ganar las elecciones. Este sistema favorece el bipartidismo y es rechazado por los partidos más pequeños, que exigen una reforma política para ganar más oportunidades.'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]], explanation: 'La Cámara de los Comunes es una cámara electa con elecciones a 650 distritos electorales de un solo miembro que se llevan a cabo  cada cinco años bajo el sistema de mayoría simple. '}], clip: 'BBA'},
    iran:{name: 'Irán', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', true], ['Democracia representativa', false], ['Monarquía constitucional', false], ['Monarquía parlamentaria', false]], explanation: 'El gobierno de Irán se divide en poder ejecutivo, legislativo y judicial y celebra elecciones presidenciales, parlamentarias y para funcionarios locales. Pero el país también es gobernado por la jerarquía de clérigos islámicos que supervisa la gestión civil.\n\nGran parte del poder de la jerarquía recae en el Consejo Guardián o Consejo de Guardianes, un grupo de 12 hombres. La mitad de ellos son clérigos nombrados por el líder supremo y la mitad son abogados elegidos por el Parlamento y recomendados por el líder del poder judicial, quien también es nombrado por el líder supremo. El Consejo revisa todas las leyes que pasan por el Parlamento y aprueba a todos los candidatos presidenciales, lo que le confiere un enorme control.'}, {text: 'El voto en Irán es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto en Irán es optativo, y las elecciones en Irán son supervisadas por el Consejo de Guardianes. En la actualidad y según la Constitución de la República Islámica, el Poder Ejecutivo y el Poder Legislativo son elegidos por sufragio, y el Poder Judicial es elegido por el líder supremo quien se elige por Consejo de Expertos, los cuales son elegidos por sufragio.'}], clip: 'MBI'},
    japon:{name: 'Japón', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional', false], ['Monarquía parlamentaria', true], ['República parlamentaria', false], ['Democracia representativa', false]], explanation: 'El gobierno de Japón es una monarquía parlamentaria en la cual el poder del Emperador está limitado y es relegado principalmente a deberes ceremoniales. Al igual que en otros países, el Estado está dividido en tres poderes: el Poder Ejecutivo, el Poder Legislativo y el Poder Judicial.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1946, true], [1955, false], [1974, false], [1980, false]], explanation: 'La primera elección por sufragio universal sin distinción de sexo se celebró en 1946, pero no fue hasta 1947, cuando entró en vigor la constitución para el Japón de la posguerra, que estableció el sufragio universal en Japón.'}, {text: 'El voto en Japón es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'BAJ'},
    marruecos:{name: 'Marruecos', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', false], ['Democracia representativa', false], ['Monarquía constitucional', true], ['Monarquía parlamentaria', false]], explanation: 'Marruecos, de conformidad con la Constitución, es una monarquía constitucional, con legislatura bicameral y un sistema multipartidista con sufragio universal. El rey Mohammed VI de Marruecos es jefe de Estado.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1953, false], [1963, true], [1983, false], [1993, false]], explanation: 'Las mujeres obtuvieron tanto el derecho al voto como el derecho a presentarse a las elecciones en la misma fecha en mayo de 1963. La asunción del liderazgo por parte de las mujeres es histórica y se considera una gran victoria para las mujeres marroquíes. Bassima Hakkaoui, líder política velada, está ahora a cargo del Ministerio de Solidaridad, Mujer, Familia y Desarrollo Social. Siendo la primera mujer con velo en ocupar este cargo.'}, {text: 'El voto en Marruecos es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['3 años', false], ['5 años', true], ['6 años', false], ['8 años', false]], explanation: 'El Parlamento de Marruecos está compuesto de dos cámaras: la Cámara de Representantes y la Cámara de Consejeros. Al parlamento corresponde el poder legislativo y el control del gobierno. La Cámara de Representantes es elegida por sufragio universal, libre, directo y secreto entre todos los ciudadanos inscritos en el censo por un período de cinco años. La Cámara de Consejeros es un cámara de segunda lectura o cámara alta que representa a las regiones y municipios de Marruecos por un sistema de representación de segundo grado.'}], clip: 'BRB'},
    mexico:{name: 'México', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', false], ['República federal', true], ['República presidencialista', false], ['República semipresidencialista', false]], explanation: 'México es una República Federal que proclamó su Independencia de España el 16 de Septiembre de 1810. El régimen republicano democrático representativo federal se estableció con la Constitución de 1824.'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1934, false], [1946, false], [1953, true], [1965, false]], explanation: 'Cuando el 17 de octubre de 1953 se concedió a la mujer mexicana el derecho al voto y a ser votada a cargos de elección popular en México, se había llevado a cabo un largo proceso que inició hacia fines del siglo XIX, entre 1884 y 1887, cuando la revista “Violetas del Anáhuac” demanda el derecho al sufragio femenino.'}, {text: 'El voto en México es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'En México, el artículo 36 constitucional establece que votar en las elecciones y en las consultas populares es parte de las obligaciones de la ciudadanía; sin embargo, no existe ninguna sanción para quienes no cumplen con esta obligación.'}], clip: 'BVM'},
    paises_bajos:{name: 'Países Bajos', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', false], ['Democracia representativa', false], ['Monarquía constitucional', true], ['Monarquía Absoluta', false]], explanation: ''}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1902, false], [1919, true], [1946, false], [1950, false]], explanation: ''}, {text: 'El voto en Países Bajos es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'BNP'},
    polonia:{name: 'Polonia', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', true], ['Monarquía constitucional', false], ['Democracia representativa', false], ['República unitaria semipresidencialista', false]], explanation: ''}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1902, false], [1917, true], [1954, false], [1975, false]], explanation: ''}, {text: 'El voto en Polonia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: ''}], clip: 'BBA'},
    portugal:{name: 'Portugal', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República unitaria semipresidencialista', true], ['Monarquía constitucional', false], ['República federal semipresidencialista', false], ['República parlamentaria', false]], explanation: ''}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1906, false], [1931, true], [1946, false], [1961, false]], explanation: ''}, {text: 'El voto en Portugal es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: ''}], clip: 'BRB'},
    senegal:{name: 'Senegal', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República semipresidencialista', true], ['Democracia representativa', false], ['Monarquía constitucional', false], ['República parlamentaria', false]], explanation: ''}, {text: '¿Cuantas mujeres tiene en el gobierno?', options: [['Menos de 5', false], ['Ninguna', false], ['entre 10 y 15', true], ['entre 15 y 20', false]], explanation: ''}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1945, true], [1964, false], [1977, false], [1995, false]], explanation: ''}, {text: 'El voto en Senegal es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['3 años', false], ['5 años', true], ['6 años', false], ['8 años', false]], explanation: ''}], clip: 'NVS'},
    serbia:{name: 'Serbia', asks: [{text: 'El voto en Serbia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'BRB'},
    suiza:{name: 'Suiza', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República federal presidencialista', false], ['Monarquía Absoluta', false], ['Democracia representativa directa', true], ['Monarquía constitucional', false]], explanation: ''}, {text: '¿Desde cuando votan las mujeres en Suiza a nivel federal?', options: [[1959, true], [1910, false], [1987, false], [1870, false]], explanation: ''}, {text: 'El voto en Suiza es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'BRB'},
    tunez:{name: 'Túnez', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República semipresidencialista', true], ['Democracia representativa directa', false], ['República parlamentaria', false], ['Monarquía constitucional', false]], explanation: ''}, {text: '¿Que tipo de parlamento tiene?', options: [['No tiene', false], ['Parlamento unicameral ', true], ['', false], ['', false]], explanation: ''}, {text: '¿En qué año se independizaron de Francia?', options: [[1956, true], [1960, false], [1897, false], [1918, false]], explanation: ''}, {text: 'El voto en Túnez es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'BRB'},
    uruguay:{name: 'Uruguay', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Democracia representativa directa', false], ['Monarquía constitucional', false], ['República unitaria presidencialista', true], ['Monarquía Absoluta', false]], explanation: ''}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1910, false], [1948, true], [1932, false], [1905, false]], explanation: ''}, {text: 'El voto en Uruguay es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'MCU'},    

};

window.Scroller = class {
    constructor(clip){
        this.clip = clip;
        this.initX = this.clip.x;
    }
    
    update() {
        if (this.clip.x <= 750) {
            this.clip.x = this.initX;
        } else {
            this.clip.x -= groundSpeed;
        }
    }
    
};

window.Player = class {
    constructor(clip, country){
        this.clip = clip;
        this.clip.x = 290;
        this.clip.y = 720;
        this.country = country;
        this.pelota = pelotaClip;
    }
    
    correr() {
        this.clip.gotoAndStop(3);
        this.chutiMover();
    }
    stoped() {
        this.clip.gotoAndStop(2);
        this.chutiStoped();        
    }
    
    festejito() {
        this.clip.gotoAndStop(4);
        this.chutiStoped();        
    }
    
    patear() {
        this.clip.gotoAndStop(5);
        this.chutiGol();        
    }
    
    chutiMover() {
        this.pelota.x = 360;
        this.pelota.y = 550;        
        this.pelota.gotoAndStop(3);
    }
    
    chutiGol() {
        this.pelota.x = 360;
        this.pelota.y = 550;
        this.pelota.gotoAndStop(4);    
    }
    
    chutiStoped() {
        this.pelota.x = 260;
        this.pelota.y = 530;       
        this.pelota.gotoAndStop(2);
    }
};

window.Defensor = class {
    constructor(){
        this.clip = null;
    }
    
    initialize(country) {
        this.clip = this.getClip(country);
        if (country !== "arquero") {
            this.clip.gotoAndStop(data[country]['clip']);    
        } else {
            this.clip.scaleY = 1.9;
            this.clip.scaleX = 1.9;
            this.clip.gotoAndStop(2);
        }
        this.clip.x = 3900;
        this.clip.y = 720;
    }
    
    getClip(country) {
        switch (country) {
            case 'arquero':
                return arqueroClip;
            default:
                arqueroClip.x = -1500;
                return defensoresClip;
        }
    }

    
    update(fromTo) {
        if (this.fromTo === fromTo) {
            if (this.clip.x <= fromTo[0] && this.clip.x > fromTo[1]) {
                this.clip.x -= groundSpeed;
            } else {
                this.clip.x = fromTo[1];
            }
        } else {
            this.fromTo = fromTo;
            this.clip.x = fromTo[0];
        }
        
    }    
    
    stoped() {
        this.clip.gotoAndStop(2);
    }
}

window.Ask = class {
    constructor(asks){
        this.asks = asks;
        this.i = -1;
        this.currentAsk = null;
        this.currentSuccess = null;
        this.currentExplanation = null;
        this.currentA = null;
        this.currentB = null;
        this.currentC = null;
        this.currentD = null;
    }
    
    setNumber(number, country) {
        askNumber.setText("Pregunta #" + number + " - " + data[country].name);
    }
    
    prepareOptions() {
        textAnswerCorrect.setText('');
        textAnswerExplanation.setText('');
        askText.setText(this.currentAsk.text);
        textAnswerA.setText(this.currentA);
        textAnswerB.setText(this.currentB);
        textAnswerC.setText(this.currentC);
        textAnswerD.setText(this.currentD);
        answerFondoClip.gotoAndStop(2);
        answerA.x = answerB.x = answerC.x = answerD.x = 620;
        answerA.y = 470;
        answerB.y = 540;
        answerC.y = 610;
        answerD.y = 680;
    }
    
    showExplanation() {
        textAnswerCorrect.setText(this.currentSuccess);
        if (this.currentExplanation) {
            textAnswerExplanation.setText(this.currentExplanation.replace(/<([^>]+)>/g,"&lt$1&gt").replace(/((\S+\s){7})/g, "$1\n"));
        }
    } 
    
    nextAsk() {
        hideButtonNext();
        this.i += 1;
        this.currentAsk = this.asks[this.i];
        this.currentSuccess = this.currentAsk.options.find(o => o[1] === true)[0];
        this.currentExplanation = this.currentAsk.explanation;
        const opt = [...this.currentAsk.options];
        barajar(opt);
        this.currentA = opt[0][0];
        this.currentB = opt[1][0];
        this.currentC = opt[2][0];
        this.currentD = opt[3][0];
        this.prepareOptions();
    }
};

window.Dice = class {
    constructor() {
        this.currentCountry = null
    }
}

window.GameManager = class {
    constructor(){
        this.grass = new Scroller(pastitoClip);
        this.init();
    }
    
    init() {
        stopAllSounds();
        hideButtonNext();
        playSound('publico.mp3')
        showButtonsPlayers();
        hidePlayers();
        hideButtonDeNuevo();
        this.player = null;
        this.defensor = null;
        this.defensorFromTo = null;
        this.countryPlayer = null;
        this.countryDefensor = null;
        this.festejanding = false;
        this.gameOver = false;
        this.stoped = true;
        this.askNumber = 0;
        this.askOpen = false;
        this.askManager = null;
        this.successAnswers = 0;
        this.errorAnswers = 0;
        this.remainingCountries = [...Object.keys(data)];
        this.finalSound = false;
        barajar(this.remainingCountries);
    }
    
    moverPastito() {
        if (!this.gameOver && !this.stoped) {
            this.grass.update();
        }
    }
    
    modificarDefensor() {
        if (!this.gameOver && !this.stoped && this.defensor && this.countryDefensor && this.defensor.clip.x < -500) {
            if ([4,9,14].includes(this.successAnswers)) {
                this.defensor.initialize('arquero');
            } else {
                this.defensor.initialize(this.countryDefensor);
            }
        }
    }
    
    agitarDefensor(){ 
        if (!this.gameOver && !this.stoped && this.defensor && this.defensorFromTo) {
            this.defensor.update(this.defensorFromTo);
        }
    }
    
    chequearAskManager() {
        if (!this.gameOver && this.stoped && this.askOpen && !this.askManager && this.countryDefensor) {
            const asks = data[this.countryDefensor].asks;
            const explanation = data[this.countryDefensor].explanation;
            barajar(asks);
            // const asks = dummyAsks;
            this.askManager = new Ask(asks);
            this.askManager.setNumber(this.askNumber, this.countryDefensor);
            this.askManager.nextAsk();
        }
    }
    
    chequearCountryDefensor() {
        if (!this.gameOver && this.player && !this.countryDefensor) {
            this.countryDefensor = this.remainingCountries.shift();
        }
    }
    
    chequearStoped() {
        if (!this.gameOver && this.player && this.defensor && JSON.stringify(this.defensorFromTo) === JSON.stringify([3900, 1600])) {
            if (this.defensor.clip.x <= 1600) {
                if (!this.festejanding) {
                    this.player.stoped();
                }
                this.stoped = true;
                this.askOpen = true;
            }
        }
    }

    
    chequearGameOver() {
        if (this.gameOver) {
            hideOptions();
            hideTitles();
            hideFondoClip();
            hidePlayers();
            const notaFinal = Math.round(10 * this.successAnswers / 15);
            if (this.win) {
                askNumber.setText("Ganaste! te sacaste un: " + notaFinal);
                this.player.clip.gotoAndStop(6);
                if (!this.finalSound) {
                    playSound("ganamo.mp3")
                    this.finalSound = true;
                }
            } else {
                askNumber.setText("Perdiste! te sacaste un: " + notaFinal);
                this.player.clip.gotoAndStop(7);
                if (!this.finalSound) {
                    playSound("perdimo.mp3")
                    this.finalSound = true;
                }                
            }
            showButtonDeNuevo();
        }
    }
    
    checkAnswer(word) {
        const attr = 'current' + word;
        if (this.askManager[attr] === this.askManager.currentSuccess) {
            this.successAnswer();
            hideOptions();
            hideTitles();
            hideFondoClip();
        } else {
            this.askNumber += 1;
            this.askManager.setNumber(this.askNumber, this.countryDefensor);
            this.errorAnswer();
        }
    }
    
    successAnswer() {
        hideOptions();
        hideTitles();
        hideFondoClip();
        this.successAnswers += 1;
        this.countryDefensor = null;
        this.festejanding = true;
        if (this.successAnswers % 5 === 0) {
            this.player.patear();
            playSound("gol.mp3")
            this.defensor.clip.gotoAndStop(3);
        } else {
            playSound("aplausos.mp3")
            this.player.festejito();
        }
        setTimeout(() => {
            this.askManager = null;
            this.stoped = false;
            this.askOpen = false;
            this.festejanding = false;
            if (this.askNumber >= 15) {
                this.gameOver = true;
                if (this.successAnswers >= 10) {
                    this.win = true;
                } else {
                    this.win = false;
                }
            } else {
                this.defensorFromTo = [1600, -1500];
                this.goToQuestion();
                this.countryDefensor = null;
            }
        }, 1000);
    }
    
    showCorrect() {
        hideOptions();
        this.askManager.showExplanation();
        showButtonNext();
    }
    
    errorAnswer() {
        this.errorAnswers += 1;
        if (this.askManager.i >= 2 || this.askNumber >= 15) {
            this.gameOver = true;
            this.win = false;
        } else {
            playSound("bu.mp3")
            this.showCorrect();
        }
    }
    
    
    selectPlayer(clip, country){
        playSound("silbato.mp3")
        this.stoped = false;
        this.countryPlayer = country;
        hideButtonPlayers();
        this.player = new Player(clip, country);
        this.defensor = new Defensor();
        this.remainingCountries = this.remainingCountries.filter(c => c !== country)
        this.countryDefensor = this.remainingCountries.shift();
        this.defensor.initialize(this.countryDefensor);
        this.goToQuestion();
    }
    
    
    goToQuestion() {
        this.player.correr();
        setTimeout(() => this.defensorFromTo = [3900, 1600], 2000);
        this.askNumber += 1;        
    }
    
    
    
}; 

window.GM = new GameManager();