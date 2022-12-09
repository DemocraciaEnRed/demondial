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
    buttonNext.y = 800;
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

    alemania:{name: 'Alemania', asks: [{text: '¿Qué forma de gobierno tiene Alemania?', options: [['Monarquía Representativa', false], ['República federal parlamentaria', true], ['República federal presidencialista', false], ['Democracia representativa', false]], explanation: 'Tras la derrota en la Segunda Guerra Mundial, la Alemania nazi se dividió en dos Estados separados: la República Federal de Alemania y la República Democrática Alemana, que se reunificaron en 1990.                                                                                                                          '}, {text: '¿En qué año se habilitó el voto femenino en Alemania?', options: [[1956, false], [1919, true], [1943, false], [1960, false]], explanation: 'El 12 de noviembre de 1918 se creó en Alemania, la base legal del sufragio para hombres y mujeres mayores de 20 años. ¡Un hito en la lucha de las mujeres por la igualdad!'}, {text: 'El voto en Alemania es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Las elecciones alemanas, se celebran cada cuatro años y se caracterizan por ser directas, libres, iguales y secretas. Es un derecho consagrado para toda la ciudadanía mayor de 18 años.'}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Alemania?', options: [['1 año', false], ['2 años', false], ['4 años', true], ['6 años', false]], explanation: 'El Bundestag (parlamento alemán) es elegido cada cuatro años por alemanes y alemanas mayores de 18 años. '}], clip: 'BBA'},
    arabia_saudita:{name: 'Arabia Saudita', asks: [{text: '¿Qué forma de gobierno tiene Arabia Saudita?', options: [['República Islámica', false], ['Monarquía Representativa', false], ['Monarquía Absoluta Islámica', true], ['Democracia representativa', false]], explanation: 'El gobierno es una monarquía absoluta y una teocracia basada en una aplicación extremista de los principios del Islam. Actualmente es una de las últimas seis monarquías absolutas del mundo.'}, {text: '¿En qué año se habilitó el voto femenino en Arabia Saudita?', options: [['Aún no pueden votar', false], [2015, true], [2003, false], [1996, false]], explanation: 'Las mujeres votaron por primera vez en Arabia Saudita en las elecciones del 2015. Se inscribieron 979 candidatas y 130.637 mujeres se registraron para votar en las elecciones.'}, {text: '¿Desde qué año Salmán Bin Abdulaziz Al Saúd es el rey de Arabia Sadita?', options: [[1956, false], [2015, true], [1984, false], [1996, false]], explanation: 'Salmán Bin Abdulaziz Al Saúd se convirtió en rey de Arabia Saudita el 23 de enero de 2015, tras el fallecimiento de su medio hermano. \n'}, {text: 'El voto en Arabia Saudita es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'En Arabia Saudita, hay elecciones cada 4 años pero, únicamente para elegir los Consejos Municipales que se encargan del mantenimiento de espacios verdes, calles y recolección de basura.\nSin embargo, hay un Consejo de Ministro, que nombra y dirige el Rey.'}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Arabia Saudita?', options: [['1 año', false], ['2 años', false], ['4 años', true], ['6 años', false]], explanation: 'El Rey designa el Majlis Al-Shura (Consejo Consultivo) por un período de cuatro años. \nSe compone de personalidades destacadas de la sociedad saudí con una cuota femenina del 20% de sus miembros y miembras.'}], clip: 'MVA'},
    argentina:{name: 'Argentina', asks: [{text: 'En qué año se retornó a la democracia en Argentina?', options: [[1982, false], [1983, true], [1985, false], [1990, false]], explanation: 'El 10 de diciembre de 1983, Día Internacional de los Derechos Humanos, Reynaldo Bignone (presidente de facto) entrega a Raúl Ricardo Alfonsín (presidente electo democráticamente) los atributos del mando.'}, {text: '¿Cuántos habitantes tiene Argentina?', options: [[39456126, false], [109742, false], [350786, false], [47327407, true]], explanation: 'Según el Censo Nacional de la Población, Hogares y Viviendas realizado por el INDEC en 2022, hubo un ascenso poblacional del cuál 52,83% son mujeres, 47,05% son varones y el 0,12% optó por otros.'}, {text: '¿Qué forma de gobierno tiene Argentina?', options: [['República federal presidencialista', true], ['República ', false], ['Democracia representativa', false], ['República unitaria parlamentaria', false]], explanation: 'La República Argentina es un estado federal constituido por 23 Provincias y una Ciudad Autónoma.\n\n'}, {text: '¿En qué año se habilitó el voto femenino en Argentina?', options: [[1930, false], [1945, false], [1947, true], [1950, false]], explanation: 'La ley fue impulsada por María Eva Duarte de Perón quién acompañó el movimiento de mujeres iniciado anteriormente por sufragistas como Julieta Lanteri, Elvira Rawson, Cecilia Grierson y Alicia Moreau, entre otras.'}, {text: 'El voto en Argentina es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Las elecciones en la República Argentina se celebran cada dos años para elegir a los cuerpos legislativos (los que se renuevan por mitades, en mandatos de 4 años). El Poder Ejecutivo se elige, desde 1995, cada cuatro años.\nEn todos los casos el voto es universal, secreto y obligatorio para ciudadanos y ciudadanas desde los 16 años de edad.'}], clip: 'MCU'},
    australia:{name: 'Australia', asks: [{text: '¿Qué forma de gobierno tiene Australia?', options: [['República de Estado unitario', false], ['Monarquía constitucional', true], ['República presidencialista ', false], ['Monarquía parlamentaria', false]], explanation: 'El Gobierno de Australia una monarquía constitucional federal parlamentaria. Al igual que otros sistemas de gobierno al estilo de Westminster, el Gobierno australiano está formado por tres poderes: el ejecutivo (el primer ministro, los ministros y los departamentos gubernamentales), el legislativo (el Parlamento de Australia) y el judicial.'}, {text: 'El voto en Australia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El sufragio se convirtió en obligatorio en las elecciones australianas de 1924. Ocurrió en respuesta a la baja participación en elecciones previas. En 1925, un año después de introducir el voto obligatorio, el 91,4% de los australianos registrados votaron.'}, {text: '¿En qué año se habilitó el voto femenino en Australia?', options: [[1932, false], [1922, false], [1912, false], [1902, true]], explanation: 'En 1902 Australia se convirtió en el segundo país del mundo, después de Nueva Zelanda, en extender el derecho de voto a las mujeres y presentarse como candidatas para las elecciones al Parlamento.'}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Australia?', options: [['6 años', false], ['5 años', false], ['4 años', false], ['3 años', true]], explanation: 'Los mandatos en Australia se renuevan cada 3 años.\nAl igual que en países como Nueva Zelanda, El Salvador, Filipinas, México y Nauru quienes eligen su Cámara de Representantes o Cámara baja, por un período de tres años'}, {text: '¿Qué documentación es necesaria para votar en Australia?', options: [['Pasaporte', false], ['Documento de Identificación personal (ID)', false], ['Certificación impositiva', false], ['Ninguno', true]], explanation: 'No se requiere ningún tipo de documento para votar en una elección australiana. A los votantes se les hace tres preguntas antes de que se les entregue la papeleta para votar, "¿cuál es tu nombre completo?" "¿dónde vivís?" y "¿ya has votado en esta elección?"'}], clip: 'MAA'},
    belgica:{name: 'Bélgica', asks: [{text: '¿Qué forma de gobierno tiene Bélgica?', options: [['Monarquía constitucional federal', true], ['Monarquía parlamentaria ', false], ['República presidencialista', false], ['República semipresidencialista', false]], explanation: 'Bélgica es una monarquía constitucional federal.  El rey es el jefe del Estado y el primer ministro, el jefe del Gobierno en un sistema multipartidista. Los poderes de decisión no están centralizados, sino que se reparten entre tres niveles de gobierno.'}, {text: '¿En qué año se habilitó el voto femenino en Bélgica?', options: [[1919, false], [1933, false], [1945, false], [1948, true]], explanation: 'Se otorgó la concesión del derecho al voto a todas las mujeres el 19 de febrero de 1948.\nDurante las elecciones legislativas de 26 de junio de 1949, las mujeres votan por primera vez en las mismas condiciones de edad, nacionalidad y domicilio que los hombres.'}, {text: 'El voto en Bélgica es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'En 1892 se aprobó en Bélgica el sufragio obligatorio no forzado gracias a la iniciativa de los partidos democristianos que temían que el electorado se quedara en casa en vez de ir a votar.'}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Bélgica?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['6 años', false]], explanation: 'Las Cámaras federales son elegidas por 4 años pero pueden disolverse antes de que finalice dicho período. En ese caso, las elecciones deben tener lugar dentro de los 40 días posteriores a la disolución.'}], clip: 'BRB'},
    brasil:{name: 'Brasil', asks: [{text: '¿Qué forma de gobierno tiene Brasil?', options: [['República presidencialista', false], ['República parlamentaria', false], ['República federativa', true], ['Democracia representativa', false]], explanation: 'El gobierno de Brasil es el de una república democrática representativa federal. El presidente de Brasil es jefe de estado como la cabeza del gobierno y de un sistema pluriforme. '}, {text: '¿En qué año se habilitó el voto femenino en Brasil?', options: [[1902, false], [1932, true], [1945, false], [1961, false]], explanation: 'Las mujeres pudieron votar con la aplicación del Código Electoral de 1932, donde se fijaba que "el ciudadano mayor de 21 años, sin distinción de sexo podría votar efectivamente..."  '}, {text: 'El voto en Brasil es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Si bien el voto es obligatorio, es optativo para adolescentes de entre 16 y 17 años, mayores de 70 y analfabetos.  '}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Brasil?', options: [['2 años', false], ['4 años', false], ['6 años', false], ['8 años', true]], explanation: 'Los senadores son elegidos por un mandato de 8 años, mientras que los diputados se eligen por un mandato de 4 años.'}], clip: 'NAE'},
    camerun:{name: 'Camerún', asks: [{text: '¿Qué forma de gobierno tiene Camerún?', options: [['República de Estado Unitario', true], ['República presidencialista', false], ['Monarquía absoluta ', false], ['Monarquía constitucional ', false]], explanation: 'Camerún es un Estado unitario organizado como república en el África central.  Esto significa que el poder político reside en el Gobierno central. El resto del territorio se somete a la legislación y dirección política de este Gobierno.'}, {text: '¿En qué año se habilitó el voto femenino en Camerún?', options: [[1912, false], [1946, true], [1970, false], [1990, false]], explanation: 'Las mujeres pudieron votar por primera vez en 1946.'}, {text: 'El voto en Camerún es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto en Camerún es de tipo optativo para personas de cualquier género y con edad mínima de 20 años.'}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Camerún?', options: [['2 años', false], ['5 años', true], ['6 años', false], ['8 años', false]], explanation: 'El parlamento en Camerún se elige cada 5 años.'}], clip: 'NVS'},
    canada:{name: 'Canadá', asks: [{text: '¿Cuál es su idioma oficial Canadá?', options: [['Inglés', false], ['Francés', false], ['Canadiense', false], ['Inglés y francés', true]], explanation: 'La constitución de Canadá en sí reconoce dos lenguas oficiales, inglés y francés. Todas las actas constitucionales están en ambas lenguas.'}, {text: '¿En qué año se unió a la Commonwealth en Canadá?', options: [[1867, false], [1776, false], [1931, true], [1953, false]], explanation: 'Canadá se unió por primera vez a la Commonwealth británica como estado independiente en 1931. La Commonwealth moderna nació en 1949 con la Declaración de Londres, y Canadá ha desempeñado un papel importante en su evolución.'}, {text: '¿Quién es su actual primer ministro en Canadá?', options: [['Bob Rae', false], ['Justin Trudeau', true], ['David Peterson', false], ['Michael Harris', false]], explanation: 'Tras la victoria por mayoría absoluta del Partido Liberal en las elecciones federales de octubre de 2015, Justin Trudeau es el primer ministro de Canadá.'}, {text: 'El voto en Canadá es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Una de las características del sistema de elección en Canadá es que el voto es voluntario, según lo dictamina la Carta de Derechos y Libertades.\nTodos y todas las canadienses nativos o incluso las y los extranjeros que ya tengan la ciudadanía pueden votar a partir de los 18 años. '}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Canadá?', options: [['2 años', false], ['4 años', true], ['5 años', false], ['8 años', false]], explanation: 'El mandato del parlamento es de 5 años, aunque el primer ministro puede pedir al gobernador general que disuelva el Parlamento y que se celebren nuevas elecciones en cualquier momento.'}], clip: 'BRB'},
    catar:{name: 'Catar', asks: [{text: '¿Qué forma de gobierno tiene Catar?', options: [['Emirato', true], ['Monarquía absoluta', false], ['Monarquía constitucional', false], ['República federal', false]], explanation: 'Catar es una monarquía absoluta o emirato que ha sido gobernada por la familia Al Thani desde mediados del siglo xix.\nEl Emir es el jefe de Estado y, a la vez, el jefe de Gobierno. Aunque tiene un poder ejecutivo, que se llama Consejo de Ministros, y un primer ministro.'}, {text: '¿En qué año se habilitó el voto femenino en Catar?', options: [[1955, false], [1976, false], [1985, false], [1999, true]], explanation: 'Qatar otorgó el voto y la posibilidad de acceder a cargos políticos a las mujeres en 1999. Sin embargo, aún existen muchas actividades que no pueden desempeñar o realizar libremente sin que giren en torno de la aprobación masculina. '}, {text: 'El voto en Catar es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Tanto los hombres como mujeres mayores de 18 años tienen derecho a votar por 30 de los 45 escaños de la Asamblea Consultiva y el resto de los escaños son designados por el Emir.'}], clip: 'MRC'},
    corea_del_sur:{name: 'Corea del Sur', asks: [{text: '¿Qué forma de gobierno tiene Corea del Sur?', options: [['República federal', false], ['República presidencialista', true], ['Monarquía constitucional', false], ['República de Estado Unitario', false]], explanation: 'La forma de gobierno es una república democrática con un sistema presidencialista. El Poder Ejecutivo es dirigido por el Presidente, quien es el jefe de Estado, de Gobierno y Comandante de las Fuerzas Armadas; a su vez nombra al Primer Ministro con la aprobación del Parlamento.'}, {text: 'En qué año se dividió de Corea del Sur de Corea del Norte? ', options: [[1945, true], [1948, false], [1973, false], [1989, false]], explanation: 'En 1948 se crearon formalmente la República de Corea en el sur y la República Popular Democrática de Corea en el norte. La frontera se estableció en el Paralelo 38, que divide por la mitad la península.'}, {text: '¿En qué año se habilitó el voto femenino en Corea del Sur?', options: [[1912, false], [1948, true], [1955, false], [1990, false]], explanation: 'Las mujeres obtuvieron el derecho al voto y a presentarse a las elecciones en 1948. Aunque históricamente aún son subrepresentadas en la política de Corea del Sur.'}, {text: 'El voto en Corea del Sur es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto es optativo, y aunque se considera un deber cívico no se imponen sanciones a los que no votan. Pueden votar las personas de cualquier sexo desde los 19 años.'}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Corea del Sur?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: 'La Asamblea Nacional está compuesta por 299 miembros, elegidos por periodos de cuatro años.'}], clip: 'MRC'},
    costa_rica:{name: 'Costa Rica', asks: [{text: '¿Qué forma de gobierno tiene Costa Rica?', options: [['República presidencialista', true], ['República parlamentaria', false], ['Democracia directa', false], ['Protectorado', false]], explanation: 'Costa Rica es - junto con Uruguay y Chile - el único país de Latinoamérica considerado como una democracia plena, ubicado entre los 20 mejores sistemas democráticos del mundo.'}, {text: '¿En qué año se habilitó el voto femenino en Costa Rica?', options: [[1912, false], [1948, true], [1965, false], [1985, false]], explanation: 'Luego de una lucha iniciada en 1923 por La Liga Feminista de Costa Rica, se logró que la constitución de 1949 otorgará a las mujeres costarricenses el derecho al sufragio.'}, {text: 'El voto en Costa Rica es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto es secreto, universal y obligatorio.'}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Costa Rica?', options: [['2  años', false], ['4 años', true], ['5 años', false], ['8 años', false]], explanation: 'El mandato de un parlamentario en Costa Rica es de 4 años.'}], clip: 'MRC'},
    croacia:{name: 'Croacia', asks: [{text: '¿Qué forma de gobierno tiene Croacia?', options: [['República parlamentaria ', false], ['República presidencialista ', true], ['República semipresidencialista ', false], ['Monarquía constitucional', false]], explanation: 'Desde la adopción en 1990 de la Constitución, Croacia es una república democrática. Entre 1990 y 2000 tuvo un sistema semipresidencial, y desde 2000 tiene un sistema parlamentario.'}, {text: '¿Desde qué año Croacia es un estado soberano e independiente?', options: [[1991, true], [1930, false], [1985, false], [2005, false]], explanation: 'El 8 de octubre de 1991, el Parlamento Croata aprobó la decisión de romper todos los vínculos estatales y jurídicos con la República Socialista Federativa de Yugoslavia. Con esta decisión, la República de Croacia llegó a ser un estado soberano e independiente.\n\n'}, {text: '¿En qué año se habilitó el voto femenino en Croacia?', options: [[1945, true], [1918, false], [1985, false], [1989, false]], explanation: 'En 1945, las mujeres de Yugoslavia (actualmente Croacia) lucharon y ganaron el derecho al voto'}, {text: 'El voto en Croacia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un/a parlamentario/a en Croacia?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: 'El Parlamento croata o el Sabor es el órgano unicameral que ostenta el poder legislativo de la República de Croacia.El Sabor está compuesto por 151 miembros elegidos para un mandato de cuatro años sobre la base del sufragio directo, universal, igualitario y secreto. 140 miembros son elegidos en circunscripciones con varios escaños, 8 de las minorías y 3 de la diáspora croata.'}], clip: 'MRC'},
    dinamarca:{name: 'Dinamarca', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía absoluta', false], ['Monarquía constitucional', true], ['República semipresidencialista', false], ['República federal', false]], explanation: 'Dinamarca es una monarquía constitucional con una lista de monarcas que se ha mantenido de forma continua por un periodo de más de 1.000 años (excepto en un periodo de interregnos entre 1.332 y 1.340).'}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1915, true], [1930, false], [1945, false], [1960, false]], explanation: 'Dinamarca fue pionero en el sufragio femenino, siendo el cuarto país en conceder a las mujeres el derecho al voto.'}, {text: 'El voto en Dinamarca es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'Hay tres tipos de elecciones en Dinamarca: elecciones al parlamento nacional (el Folketing), elecciones locales (a los consejos municipales y regionales) y elecciones al Parlamento Europeo. También convocan referéndums para consultar directamente a la ciudadanía danesa sobre una cuestión de interés nacional.'}], clip: 'BRB'},
    ecuador:{name: 'Ecuador', asks: [{text: '¿Que forma de gobierno tiene Ecuador?', options: [['República plurinacional federal democrática descentralizada\u200b presidencialista', true], ['República parlamentaria', false], ['República plurinacional unitaria democrática descentralizada\u200b presidencialista', false], ['República semipresidencialista unitaria', false]], explanation: 'Ecuador se declaró Estado plurinacional e intercultural en su nueva constitución del 2008. Esto es un reconocimiento importante para las diferentes culturas del país, que cuenta con 14 diferentes nacionalidades y 18 pueblos indígenas'}, {text: '¿En qué año se habilitó el voto femenino en Ecuador?', options: [[1976, false], [1240, false], [1956, false], [1929, true]], explanation: 'El sufragio femenino en Ecuador fue garantizado en la Constitución de 1929, convirtiendo a Ecuador en el primer país de América Latina en dar a las mujeres el derecho al voto'}, {text: 'El voto en Ecuador es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'NAE'},
    espana:{name: 'España', asks: [{text: '¿Que forma de gobierno tiene España?', options: [['Monarquía constitucional', false], ['República semipresidencialista unitaria', false], ['República presidencialista', false], ['Monarquía parlamentaria', true]], explanation: 'El rey es el Jefe del Estado y todos sus actos deben ser refrendados por el Gobierno. '}, {text: '¿Quién es el actual rey de España?', options: [['Felipe VI', true], ['Felipe V', false], ['Carlos III', false], ['Juan Carlos I', false]], explanation: 'Felipe VI fue proclamado rey el 19 de junio de 2014, luego de la adjudicación de su padre Juan Carlos I.'}, {text: 'El voto en España es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El sufragio en españa es optativo pero un 41,1% de los españoles cree que este es obligatorio.Todas y todos los españoles mayores de 18  pueden votar pero, solo si no tienen cargos penales que los inhabiliten.'}], clip: 'BRB'},
    estados_unidos:{name: 'Estados Unidos', asks: [{text: '¿Quién es el presidente actual de Estados Unidos?', options: [['Donald Trump', false], ['Hillary Clinton', false], ['Joe Biden', true], ['Kamala Harris', false]], explanation: ''}, {text: '¿En qué año se habilitó el voto femenino en Estados Unidos?', options: [[1912, false], [1919, true], [1929, false], [1933, false]], explanation: 'Aprobada por el Congreso el 4 de junio de 1919 y ratificado el 18 de agosto de 1920, la Enmienda XIX garantizó a toda mujer americana el derecho a votar. Conseguir este hito demandó una lucha larga y difícil y la victoria tomó décadas de agitación y protesta.'}, {text: '¿Que forma de gobierno tiene Estados Unidos?', options: [['República federal presidencialista', true], ['República semipresidencialista unitaria', false], ['Monarquía parlamentaria', false], ['Monarquía constitucional', false]], explanation: 'El primer gobierno se formó en 1789, cuando entró en vigor su Constitución reemplazando a los Artículos de la Confederación, convirtiendo a los Estados Unidos en la primera república constitucional del mundo, donde el poder se comparte entre el gobierno federal y los gobiernos estatales.'}, {text: '¿Cuantas estrellas tiene su bandera Estados Unidos? ', options: [[45, false], [53, false], [49, false], [50, true]], explanation: 'La bandera actual permanece inalterable desde 1959, cuando se integró el estado de Hawai. Desde entonces, el número de estrellas que tiene la bandera de Estados Unidos es 50, una por cada estado. '}, {text: '¿En qué año declararon la independencia en Estados Unidos?', options: [[1776, true], [1780, false], [1810, false], [1692, false]], explanation: 'La Declaración de Independencia de los Estados Unidos de América\u200b fue presentada en Filadelfia el 4 de julio de 1776.'}, {text: '¿El consumo de marihuana es legal en Estados Unidos?', options: [['Si', false], ['No', false], ['Depende de cada Estado', true], ['Si, pero cada Estado lo regula de manera independiente. ', false]], explanation: 'El 1 de enero de 2017 comenzó la venta legal de marihuana con fines recreativos en el estado de Colorado.\nYa en 2020, en 11 estados se ha legalizado el consumo la marihuana con finalidad recreativa. Sin embargo, la posesión, la compra y la venta siguen siendo ilegales a nivel federal.'}], clip: 'BBA'},
    francia:{name: 'Francia', asks: [{text: '¿Que forma de gobierno tiene Francia?', options: [['Democracia representativa', false], ['República semipresidencialista unitaria', true], ['Monarquía constitucional', false], ['', false]], explanation: 'El sistema político francés es definido como semipresidencial, lo que supone que haya un presidente con importantes poderes, un Ejecutivo dirigido por un primer ministro y un parlamento al que rinde cuentas el Gobierno.'}, {text: '¿En qué año se habilitó el voto femenino en Francia?', options: [[1912, false], [1944, true], [1950, false], [1965, false]], explanation: 'El 21 de abril de 1944, se concede el derecho a voto a las mujeres, lo que quedará confirmado con la ordenanza del 5 de octubre. Este derecho, en cambio, no se hará efectivo hasta las elecciones municipales del 29 de abril de 1945.'}, {text: 'El voto en Francia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Francia?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]], explanation: ''}], clip: 'NAF'},
    gales:{name: 'Gales', asks: [{text: '¿Que forma de gobierno tiene Gales?', options: [['República presidencialista', false], ['República semipresidencialista unitaria', false], ['Monarquía parlamentaria', false], ['Monarquía constitucional', true]], explanation: 'Si bien Gales tiene su propio gobierno y parlamento en la actualidad, . En 1997 se celebró una votación pública y como resultado de esa votación se creó una Asamblea Nacional para Gales y ciertos poderes comenzaron a devolverse a Gales.'}, {text: '¿Gales, forma parte del Reino Unido?', options: [['Si', true], ['No', false], ['', false], ['', false]], explanation: 'Actualmente Gales tiene dos gobiernos: el Gobierno de Gales y el Gobierno del Reino Unido de Gran Bretaña e Irlanda del Norte, cada uno con poder y responsabilidad sobre asuntos diferentes.'}, {text: '¿En qué año se habilitó el voto femenino en Gales?', options: [[1918, true], [1929, false], [1945, false], [1950, false]], explanation: 'En 1918 , en todo el Reino Unido, las mujeres mayores de 30 años obtuvieron el derecho al voto. Finalmente, con la Ley de representación del pueblo de 1928, las mujeres obtuvieron los mismos derechos al voto que los hombres.'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Gales?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]], explanation: 'El Senedd (parlamento galés) está integrado por 60 diputados. Desde 2011, los miembros son elegidos por un periodo de cinco años bajo un sistema de miembros adicionales.'}, {text: 'El voto en Gales es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'BRB'},
    ghana:{name: 'Ghana', asks: [{text: '¿Que forma de gobierno tiene Ghana?', options: [['Monarquía constitucional', false], ['Monarquía parlamentaria', false], ['República presidencialista', true], ['República semipresidencialista unitaria', false]], explanation: 'El gobierno y política de Ghana se basa en un régimen presidencial, en la cual el presidente desempeña a la vez el papel de jefe de estado y de presidente del gobierno. El gobierno ejerce el poder ejecutivo mientras que el poder legislativo es compartido por el parlamento  Unicameral y el gobierno.'}, {text: '¿En qué año se habilitó el voto femenino en Ghana?', options: [[1944, false], [1954, true], [1966, false], [1992, false]], explanation: 'Ghana otorga el voto femenino en 1954. De todos los países que tuvieron en cuenta este derecho durante la década de los 50, la mayoría fueron africanos, como Ghana en 1954, Egipto en 1956 o Túnez en 1959.'}, {text: 'El voto en Ghana es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Ghana?', options: [['2 años', false], ['4 años', true], ['6 años ', false], ['8 años', false]], explanation: 'El Parlamento es la autoridad legislativa y está compuesto por una sola cámara, siendo integrado por 275 miembros\u200b elegidos por sufragio universal cada cuatro años.\n'}], clip: 'NBG'},
    inglaterra:{name: 'Inglaterra', asks: [{text: '¿Que forma de gobierno tiene Inglaterra?', options: [['Monarquía constitucional', true], ['República parlamentaria', false], ['Monarquía parlamentaria', false], ['Democracia representativa', false]], explanation: 'En 1689 Inglaterra abandona la monarquía absoluta, al finalizar el reinado de los Estuardo. Es entonces cuando Guillermo de Orange, jura la Declaración de Derechos la cual limita sus poderes y obliga a someter algunas de sus decisiones al Parlamento.'}, {text: '¿En qué año se habilitó el voto femenino en Inglaterra?', options: [[1918, true], [1929, false], [1945, false], [1950, false]], explanation: 'En 1918 , en todo el Reino Unido, las mujeres mayores de 30 años obtuvieron el derecho al voto, seguido de la Ley de representación del pueblo (igualdad de derecho al voto ) de 1928, en la que las mujeres obtuvieron los mismos derechos al voto que los hombres.'}, {text: 'El voto en Inglaterra es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto en Inglaterra es optativo, bajo un sistema electoral británico de tipo mayoritario uninominal, llamado informalmente "el primero que pase el poste", que favorece el bipartidismo.'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Inglaterra?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]], explanation: 'La Cámara de los Comunes es una cámara electa con elecciones a 650 distritos electorales de un solo miembro que se llevan a cabo cada cinco años bajo el sistema de mayoría simple. '}], clip: 'BBA'},
    iran:{name: 'Irán', asks: [{text: '¿Que forma de gobierno tiene Irán?', options: [['República parlamentaria', true], ['Democracia representativa', false], ['Monarquía constitucional', false], ['Monarquía parlamentaria', false]], explanation: 'El gobierno de Irán se divide en poder ejecutivo, legislativo y judicial y celebra elecciones presidenciales, parlamentarias y para funcionarios locales. Pero el país también es gobernado por la jerarquía de clérigos islámicos que supervisa la gestión civil.\n'}, {text: 'El voto en Irán es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto en Irán es optativo y las elecciones son supervisadas por el Consejo de Guardianes. En la actualidad el Poder Ejecutivo y el Poder Legislativo son elegidos por sufragio y el Poder Judicial es elegido por el líder supremo quien se elige por Consejo de Expertos, los cuales son elegidos por sufragio.'}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Irán?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: 'El parlamento iraní, La Asamblea Consultiva Islámica, está conformada por 290 miembros, elegidos para un periodo de cuatro años.\u200b Estos son elegidos por voto directo y secreto, en candidaturas individuales.'}], clip: 'MBI'},
    japon:{name: 'Japón', asks: [{text: '¿Que forma de gobierno tiene Japón?', options: [['Monarquía constitucional', false], ['Monarquía parlamentaria', true], ['República parlamentaria', false], ['Democracia representativa', false]], explanation: 'Es una monarquía parlamentaria que limita el poder del Emperador relegandolo principalmente a deberes ceremoniales. Al igual que en otros países, el Estado está dividido en tres poderes: el Poder Ejecutivo, el Poder Legislativo y el Poder Judicial.'}, {text: '¿En qué año se habilitó el voto femenino en Japón?', options: [[1946, true], [1955, false], [1974, false], [1980, false]], explanation: 'La primera elección por sufragio universal sin distinción de sexo se celebró en 1946, pero no fue hasta 1947, cuando entró en vigor la constitución para el Japón de la posguerra, que estableció el sufragio universal en Japón.'}, {text: 'El voto en Japón es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}], clip: 'BAJ'},
    marruecos:{name: 'Marruecos', asks: [{text: '¿Que forma de gobierno tiene Marruecos?', options: [['República parlamentaria', false], ['Democracia representativa', false], ['Monarquía constitucional', true], ['Monarquía parlamentaria', false]], explanation: 'Marruecos, de conformidad con la Constitución, es una monarquía constitucional, con legislatura bicameral y un sistema multipartidista con sufragio universal. El rey Mohammed VI de Marruecos es jefe de Estado.'}, {text: '¿En qué año se habilitó el voto femenino en Marruecos?', options: [[1953, false], [1963, true], [1983, false], [1993, false]], explanation: 'Las mujeres obtuvieron tanto el derecho al voto como el derecho a presentarse a las elecciones en mayo de 1963. La asunción del liderazgo por parte de las mujeres es histórica y se considera una gran victoria para las mujeres marroquíes. '}, {text: 'El voto en Marruecos es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Marruecos?', options: [['3 años', false], ['5 años', true], ['6 años', false], ['8 años', false]], explanation: 'La Cámara de Representantes es elegida por sufragio universal, libre, directo y secreto entre todas y todos los ciudadanos inscritos en el censo por un período de cinco años. '}], clip: 'BRB'},
    mexico:{name: 'México', asks: [{text: '¿Que forma de gobierno tiene México?', options: [['República parlamentaria', false], ['República federal', true], ['República presidencialista', false], ['República semipresidencialista', false]], explanation: 'México es una República Federal que proclamó su Independencia de España el 16 de Septiembre de 1810. El régimen republicano democrático representativo federal se estableció con la Constitución de 1824.'}, {text: '¿En qué año se habilitó el voto femenino en México?', options: [[1934, false], [1946, false], [1953, true], [1965, false]], explanation: ''}, {text: 'El voto en México es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El artículo 36 constitucional establece que votar en las elecciones y en las consultas populares es parte de las obligaciones de la ciudadanía; sin embargo, no existe ninguna sanción para quienes no cumplen con esta obligación.'}], clip: 'BVM'},
    paises_bajos:{name: 'Países Bajos', asks: [{text: '¿Que forma de gobierno tiene Países Bajos?', options: [['República parlamentaria', false], ['Democracia representativa', false], ['Monarquía constitucional', true], ['Monarquía Absoluta', false]], explanation: 'Los Países Bajos son una monarquía parlamentaria constitucional con un jefe de Gobierno (el primer ministro) y un jefe del Estado (el monarca). Un consejo de ministros ostenta el poder ejecutivo'}, {text: '¿En qué año se habilitó el voto femenino en Países Bajos?', options: [[1902, false], [1919, true], [1946, false], [1950, false]], explanation: 'En 1919 las mujeres de los Países Bajos consiguieron pleno derecho al sufragio: el derecho a presentarse a las elecciones y el derecho a votar.'}, {text: 'El voto en Países Bajos es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto obligatorio fue abolido en 1970 dando paso a un sistema de voto optativo que se mantiene en la actualidad. '}], clip: 'BNP'},
    polonia:{name: 'Polonia', asks: [{text: '¿Que forma de gobierno tiene Polonia?', options: [['República parlamentaria', true], ['Monarquía constitucional', false], ['Democracia representativa', false], ['República unitaria semipresidencialista', false]], explanation: 'Polonia es una república parlamentaria con un jefe del Gobierno (el primer ministro) y un jefe del Estado (el presidente). La estructura de gobierno se centra en el Consejo de Ministros. \nLa autoridad administrativa a nivel provincial la comparten un gobernador, una asamblea regional, y un ejecutivo.'}, {text: '¿En qué año se habilitó el voto femenino en Polonia?', options: [[1902, false], [1917, true], [1954, false], [1975, false]], explanation: 'El sufragio femenino se promulgó en 1918/9. Polonia fue uno de los primeros países en otorgar derechos legales a las mujeres. Justo después de que el país recuperara la independencia.'}, {text: 'El voto en Polonia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Polonia?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: 'Polonia cuenta con un sistema bicameral: tanto el senado (cámara alta) como el Sejm  (cámara baja) cuenta con mandatos de 4 años. '}], clip: 'BBA'},
    portugal:{name: 'Portugal', asks: [{text: '¿Que forma de gobierno tiene Portugal?', options: [['República  semipresidencialista', true], ['Monarquía constitucional', false], ['Monarquía absoluta', false], ['República parlamentaria', false]], explanation: 'Portugal es una república semipresidencialista con un jefe del Gobierno (el primer ministro) y un jefe del Estado (el presidente), que tiene el poder de nombrar al primer ministro y a otros miembros del gobierno. '}, {text: '¿En qué año se habilitó el voto femenino en Portugal?', options: [[1906, false], [1931, true], [1946, false], [1961, false]], explanation: 'Las mujeres pudieron votar por primera vez en Portugal a partir del referéndum constitucional portugués de 1933. Sin embargo, hasta 1976 no se ajustaron varias desigualdades entre hombres y mujeres, y otros requisitos que limitaban mucho su participación.'}, {text: 'El voto en Portugal es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Portugal?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]], explanation: 'La legislatura tiene una duración de cuatro años, convocando elecciones una vez terminado ese plazo, salvo que el Presidente de la República disuelva la cámara y convoque elecciones anticipadas.'}], clip: 'BRB'},
    senegal:{name: 'Senegal', asks: [{text: '¿Que forma de gobierno tiene Senegal?', options: [['República presidencialista', true], ['Democracia representativa', false], ['Monarquía constitucional', false], ['República parlamentaria', false]], explanation: 'Senegal adoptó como forma de estado una república unitaria laica con un sistema de gobierno presidencialista y multipartidista luego de su independencia de Francia el 20 de junio de 1960.'}, {text: '¿Cuantas mujeres tiene en el gobierno de Senegal?', options: [['Menos de 5', false], ['Ninguna', false], ['entre 10 y 15', true], ['entre 15 y 20', false]], explanation: 'En Senegal, una ley de 2010 exige la "paridad absoluta de género" en todas las instituciones electivas, con listas de candidatos que alternan hombres y mujeres. Pero estos avances a nivel político contrastan con la realidad de las mujeres del país, desde los derechos de reproducción hasta la violencia doméstica.'}, {text: '¿En qué año se habilitó el voto femenino en Senegal?', options: [[1944, true], [1964, false], [1977, false], [1995, false]], explanation: 'El sufragio femenino en Francia se otorgó en 1944 cuando Senegal todavía estaba bajo ocupación francesa. Sin embargo, sólo las mujeres de etnia francesa tenían derecho a votar. En 1945 se extendió el voto a las mujeres senegalesas.'}, {text: 'El voto en Senegal es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a en Senegal?', options: [['3 años', false], ['5 años', true], ['6 años', false], ['8 años', false]], explanation: 'La Asamblea Nacional está compuesta por 165 escaños ocupados durante cinco años.'}], clip: 'NVS'},
    serbia:{name: 'Serbia', asks: [{text: 'El voto en Serbia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: ''}, {text: '¿En qué año Serbia se separó de Montenegro?', options: [[1990, false], [2001, false], [2006, true], [2010, false]], explanation: 'A través de un referéndum hecho el 3 de junio de 2006, Montenegro proclamó su independencia de Serbia.  '}, {text: '¿Qué forma de gobierno tiene Serbia?', options: [['República parlamentaria', true], ['Monarquía Absoluta', false], ['Monarquía constitucional', false], ['Democracia representativa directa', false]], explanation: 'La forma de gobierno de la República de Serbia es, desde su separación de Montenegro en 2006, la república parlamentaria.\u200b El 30 de octubre de 2006, la ciudadanía aprobó una nueva Constitución, que tenía el objetivo de garantizar "la consolidación de la democracia y del Estado de derecho en Serbia".'}], clip: 'BRB'},
    suiza:{name: 'Suiza', asks: [{text: '¿Que forma de gobierno tiene Suiza?', options: [['República federal presidencialista', false], ['Monarquía Absoluta', false], ['Democracia representativa directa', true], ['Monarquía constitucional', false]], explanation: 'La política de Suiza tiene lugar en el marco de una república democrática parlamentaria federal pluripartidista, donde el Consejo Federal actúa como jefe colegiado de Gobierno.'}, {text: '¿Desde cuando votan las mujeres en Suiza a nivel federal?', options: [[1959, true], [1910, false], [1987, false], [1870, false]], explanation: 'Las mujeres suizas obtuvieron oficialmente el derecho al voto a nivel federal el 7 de febrero de 1971. El país fue uno de los últimos de Europa en otorgar a las mujeres el derecho al voto. '}, {text: 'El voto en Suiza es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto es optativo, y para votar la persona debe contar necesariamente con un pasaporte suizo. '}], clip: 'BRB'},
    tunez:{name: 'Túnez', asks: [{text: '¿Que forma de gobierno tiene Túnez?', options: [['República semipresidencialista', true], ['Democracia representativa directa', false], ['República parlamentaria', false], ['Monarquía constitucional', false]], explanation: 'Bajo la constitución actual, Túnez es una república semipresidencialista y unitaria que adopta la democracia representativa como forma de gobierno. Es considerado por diversas organizaciones de derechos humanos como el único país sinceramente democrático del Mundo Árabe.'}, {text: '¿Que tipo de parlamento tiene Túnez?', options: [['No tiene', true], ['Parlamento unicameral ', false], ['Parlamento bicameral', false], ['', false]], explanation: 'A pesar de ser una democracia modelo en el mundo árabe, en marzo de 2022 el actual presidente Kais Said decidió disolver el parlamento, luego de haber suspendido sus actividades 8 meses antes.'}, {text: '¿En qué año se independizó Túnez de Francia?', options: [[1956, true], [1960, false], [1897, false], [1918, false]], explanation: 'En 1955 Túnez consiguió el autogobierno y, en 1956, la independencia como una monarquía constitucional. En 1957, se derrocó la monarquía proclamándose la República, con Bourguiba como Presidente'}, {text: 'El voto en Túnez es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'El voto en Túnez es optativo y libre, pueden votar toda persona con mayoría de edad de 18 años.'}], clip: 'BRB'},
    uruguay:{name: 'Uruguay', asks: [{text: '¿Que forma de gobierno tiene Uruguay?', options: [['Democracia representativa directa', false], ['Monarquía constitucional', false], ['República unitaria presidencialista', true], ['Monarquía Absoluta', false]], explanation: 'Uruguay es un Estado unitario democrático y descentralizado de carácter presidencialista. Es considerado el país más plenamente democrático de Sudamérica, ubicado en el puesto 15 sobre un total de 167. (Según un informe publicado por la revista británica The Economist)'}, {text: '¿En qué año se habilitó el voto femenino en Uruguay?', options: [[1910, false], [1948, true], [1932, false], [1905, false]], explanation: 'El 3 de julio de 1927 aprobó el Voto femenino. Así Uruguay se convirtió en el primer país latinoamericano en donde las mujeres pudieron votar, en un plebiscito local. \n'}, {text: 'El voto en Uruguay es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]], explanation: 'A pesar de su obligatoriedad, la regulación encuentra dificultades en la aplicación práctica, siendo difícil sancionar a quienes no cumplen con estos deberes. Luego de varios proyectos se aprobó una ley en 1971 estableciendo sanciones para quien no vote.'}], clip: 'MCU'},


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
        answerA.x = answerB.x = answerC.x = answerD.x = 640;
        answerA.y = 420;
        answerB.y = 530;
        answerC.y = 640;
        answerD.y = 750;
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
            //const asks = dummyAsks;
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
            const notaFinal = Math.round(100 * this.successAnswers / 15);
            if (this.win) {
                askNumber.setText("Ganaste! acertaste un: " + notaFinal + "%");
                this.player.clip.gotoAndStop(6);
                if (!this.finalSound) {
                    playSound("ganamo.mp3")
                    this.finalSound = true;
                }
            } else {
                askNumber.setText("Perdiste! acertaste un: " + notaFinal + "%");
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
                this.checkWin();
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
    
    checkWin() {
        this.gameOver = true;
        if (Math.round(100 * this.successAnswers / 15) >= 65){
            this.win = true;
        } else {
            this.win = false;
        }
    }
    
    errorAnswer() {
        this.errorAnswers += 1;
        if (this.askManager.i >= 2 || this.askNumber >= 15) {
            this.checkWin();
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