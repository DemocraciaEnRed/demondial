const groundSpeed = 80;

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
        askNumber, askText, 
        textAnswerA, textAnswerB, textAnswerC, textAnswerD
    ].forEach(p => p.setText(""));
    answerFondoClip.gotoAndStop(1);
};
hideOptions();

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

    alemania:{name: 'Alemania', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía Representativa', false], ['República federal parlamentaria', true], ['República federal presidencialista', false], ['Democracia representativa', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1956, false], [1919, true], [1943, false], [1960, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['1 año', false], ['2 años', false], ['4 años', true], ['6 años', false]]}], 'clip': 'BBA'},
    arabia_saudita:{name: 'Arabia Saudita', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República Islámica', false], ['Monarquía Representativa', false], ['Monarquía Absoluta Islámica', true], ['Democracia representativa', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [['Aún no pueden votar', false], [2015, true], [2003, false], [1996, false]]}, {text: '¿Desde que año Salmán bin Abdulaziz Al Saúd es el rey de Arabia Sadita?', options: [[1956, false], [2015, true], [1984, false], [1996, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['1 año', false], ['2 años', false], ['4 años', true], ['6 años', false]]}], 'clip': 'MVA'},
    argentina:{name: 'Argentina', asks: [{text: '¿Cuándo se sancionó la Ley de Paridad de Género en Ámbitos de Representación Política (Ley 27.412)?', options: [[2022, false], [2017, true], [1930, false], [1991, false]]}, {text: '¿Cuantos habitantes tiene Argentina?', options: [[39456126, false], [109742, false], [350786, false], [47327407, true]]}, {text: '¿Que forma de gobierno tiene?', options: [['República federal presidencialista', true], ['República ', false], ['Democracia representativa', false], ['República unitaria parlamentaria', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1930, false], [1945, false], [1947, true], [1950, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'MCU'},
    australia:{name: 'Australia', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República de Estado unitario', false], ['Monarquía constitucional', true], ['República presidencialista ', false], ['Monarquía parlamentaria', false]]}, {text: 'El voto en Australia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1932, false], [1922, false], [1912, false], [1902, true]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['6 años', false], ['5 años', false], ['4 años', false], ['3 años', true]]}, {text: '¿Qué documentación es necesaria para votar en Australia?', options: [['Pasaporte', false], ['Documento de Indentificación personal (ID)', false], ['Certificación impositiva', false], ['Ninguno', true]]}], 'clip': 'MAA'},
    belgica:{name: 'Bélgica', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional federal', true], ['Monarquía parlamentaria ', false], ['República presidencialista', false], ['República semipresidencialista', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1919, false], [1933, false], [1945, false], [1948, true]]}, {text: 'El voto en XXX es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['6 años', false]]}], 'clip': 'BRB'},
    brasil:{name: 'Brasil', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República presidencialista', false], ['República parlamentaria', false], ['República federativa', true], ['Democracia representativa', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1902, false], [1932, true], [145, false], [1961, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['6 años', false], ['8 años', true]]}], 'clip': 'NAE'},
    camerun:{name: 'Camerún', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República de Estado Unitario', true], ['República presidencialista', false], ['Monarquía absoluta ', false], ['Monarquía constitucional ', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1946, true], [1970, false], [1990, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['5 años', true], ['6 años', false], ['8 años', false]]}], 'clip': 'NVS'},
    canada:{name: 'Canadá', asks: [{text: '¿Cuál es su idioma oficial ?', options: [['Inglés', false], ['Francés', false], ['Canadiense', true], ['Inglés y francés', false]]}, {text: '¿En qué año se unió a la Commonwealth?', options: [[1867, false], [1776, false], [1931, true], [1953, false]]}, {text: '¿Quién es su actual primer ministro?', options: [['Bob Rae', false], ['Justin Trudeau', true], ['David Peterson', false], ['Michael Harris', false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['5 años', false], ['8 años', false]]}], 'clip': 'BRB'},
    catar:{name: 'Catar', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Emirato', true], ['Monarquía absoluta', false], ['Monarquía constitucional', false], ['República federal', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1955, false], [1976, false], [1985, false], [1999, true]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'MRC'},
    corea_del_sur:{name: 'Corea del Sur', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Republica federal', false], ['República presidencialista', true], ['Monarquía constitucional', false], ['República de Estado Unitario', false]]}, {text: 'En qué año se dividió de Korea del Norte? ', options: [[1945, true], [1948, false], [1973, false], [1989, false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1948, true], [1955, false], [1990, false]]}, {text: 'El voto en Corea del Sur es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]]}], 'clip': 'MRC'},
    costa_rica:{name: 'Costa Rica', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República presidencialista', true], ['República parlamentaria', false], ['Democracia directa', false], ['Protectorado', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1948, true], [1965, false], [1985, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2  años', false], ['4 años', true], ['5 años', false], ['8 años', false]]}], 'clip': 'MRC'},
    croacia:{name: 'Croacia', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Republica parlamentaria ', false], ['República presidencialista ', true], ['República semipresidencialista ', false], ['Monarquía constitucional', false]]}, {text: '¿Desde que año Croacia es un estado soberano e independiente?', options: [[1991, true], [1930, false], [1985, false], [2005, false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1945, true], [1918, false], [1985, false], [1989, false]]}, {text: 'El voto en Croacia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]]}], 'clip': 'MRC'},
    dinamarca:{name: 'Dinamarca', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía absoluta', false], ['Monarquía constitucional', true], ['República semipresidencialista', false], ['República federal', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1915, true], [1930, false], [1945, false], [1960, false]]}, {text: 'El voto en Dinamarca es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BRB'},
    ecuador:{name: 'Ecuador', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República plurinacional federal democrática descentralizada\u200b presidencialista', true], ['República parlamentaria', false], ['República plurinacional unitaria democrática descentralizada\u200b presidencialista', false], ['República semipresidencialista unitaria', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1976, false], [1240, false], [1956, false], [1929, true]]}, {text: 'El voto en XXX es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'NAE'},
    espana:{name: 'España', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional', false], ['República semipresidencialista unitaria', false], ['República presidencialista', false], ['Monarquía parlamentaria', true]]}, {text: '¿Quién es el actual rey de España?', options: [['Felipe VI', true], ['Felipe V', false], ['Carlos III', false], ['Juan Carlos I', false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BRB'},
    estados_unidos:{name: 'Estados Unidos', asks: [{text: '¿Quién es el presidente actual?', options: [['Donald Trump', false], ['Hillary Clinton', false], ['Joe Biden', true], ['Kamala Harris', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1919, true], [1929, false], [1933, false]]}, {text: '¿Que forma de gobierno tiene?', options: [['República federal presidencialista', true], ['República semipresidencialista unitaria', false], ['Monarquía parlamentaria', false], ['Monarquía constitucional', false]]}, {text: '¿Cuantas estrellas tiene su bandera? ', options: [[45, false], [53, false], [49, false], [50, true]]}, {text: '¿En qué año declararon su independencia?', options: [[1776, true], [1780, false], [1810, false], [1692, false]]}, {text: '¿El consumo de marihuana es legal?', options: [['Si', false], ['No', false], ['Depende de cada Estado', true], ['Si, pero cada Estado lo regula de manera independiente. ', false]]}], 'clip': 'BBA'},
    francia:{name: 'Francia', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Democracia representativa', false], ['República semipresidencialista unitaria', true], ['Monarquía constitucional', false], ["nan", false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1912, false], [1944, true], [1950, false], [1965, false]]}, {text: 'El voto en Francia es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]]}], 'clip': 'NAF'},
    gales:{name: 'Gales', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República presidencialista', false], ['República semipresidencialista unitaria', false], ['Monarquía parlamentaria', false], ['Monarquía constitucional', true]]}, {text: '¿Forma parte del Reino Unido?', options: [['Si', true], ['No', false], ["nan", false], ["nan", false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1918, true], [1929, false], [1945, false], [1950, false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]]}, {text: 'El voto en Gales es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BRB'},
    ghana:{name: 'Ghana', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional', false], ['Monarquía parlamentaria', false], ['República presidencialista', true], ['República semipresidencialista unitaria', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1944, false], [1954, true], [1966, false], [1992, false]]}, {text: 'El voto en Ghana es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años ', false], ['8 años', false]]}], 'clip': 'NBG'},
    inglaterra:{name: 'Inglaterra', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional', true], ['República parlamentaria', false], ['Monarquía parlamentaria', false], ['Democracia representativa', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1918, true], [1929, false], [1945, false], [1950, false]]}, {text: 'El voto en Inglaterra es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', false], ['5 años', true], ['8 años', false]]}], 'clip': 'BBA'},
    iran:{name: 'Irán', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', true], ['Democracia representativa', false], ['Monarquía constitucional', false], ['Monarquía parlamentaria', false]]}, {text: 'El voto en Irán es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'MBI'},
    japon:{name: 'Japón', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Monarquía constitucional', false], ['Monarquía parlamentaria', true], ['República parlamentaria', false], ['Democracia representativa', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1946, true], [1955, false], [1974, false], [1980, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BAJ'},
    marruecos:{name: 'Marruecos', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', false], ['Democracia representativa', false], ['Monarquía constitucional', true], ['Monarquía parlamentaria', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1953, false], [1963, true], [1983, false], [1993, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['3 años', false], ['5 años', true], ['6 años', false], ['8 años', false]]}], 'clip': 'BRB'},
    mexico:{name: 'México', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', false], ['República federal', true], ['República presidencialista', false], ['República semipresidencialista', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1934, false], [1946, false], [1953, true], [1965, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BVM'},
    paises_bajos:{name: 'Países Bajos', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', false], ['Democracia representativa', false], ['Monarquía constitucional', true], ['Monarquía Absoluta', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1902, false], [1919, true], [1946, false], [1950, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BNP'},
    polonia:{name: 'Polonia', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República parlamentaria', true], ['Monarquía constitucional', false], ['Democracia representativa', false], ['República unitaria semipresidencialista', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1902, false], [1917, true], [1954, false], [1975, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]]}], 'clip': 'BBA'},
    portugal:{name: 'Portugal', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República unitaria semipresidencialista', true], ['Monarquía constitucional', false], ['República federal semipresidencialista', false], ['República parlamentaria', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1906, false], [1931, true], [1946, false], [1961, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['2 años', false], ['4 años', true], ['6 años', false], ['8 años', false]]}], 'clip': 'BRB'},
    senegal:{name: 'Senegal', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República semipresidencialista', true], ['Democracia representativa', false], ['Monarquía constitucional', false], ['República parlamentaria', false]]}, {text: '¿Cuantas mujeres tiene en el gobierno?', options: [['Menos de 5', false], ['Ninguna', false], ['entre 10 y 15', true], ['entre 15 y 20', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1945, true], [1964, false], [1977, false], [1995, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}, {text: '¿Cuánto dura el mandato de un-a parlamentario-a?', options: [['3 años', false], ['5 años', true], ['6 años', false], ['8 años', false]]}], 'clip': 'NVS'},
    serbia:{name: 'Serbia', asks: [{text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BRB'},
    suiza:{name: 'Suiza', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República federal presidencialista', false], ['Monarquía Absoluta', false], ['Democracia representativa directa', true], ['Monarquía constitucional', false]]}, {text: '¿Desde cuando votan las mujeres en Suiza a nivel federal?', options: [[1959, true], [1910, false], [1987, false], [1870, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BRB'},
    tunez:{name: 'Túnez', asks: [{text: '¿Que forma de gobierno tiene?', options: [['República semipresidencialista', true], ['Democracia representativa directa', false], ['República parlamentaria', false], ['Monarquía constitucional', false]]}, {text: '¿Que tipo de parlamento tiene?', options: [['No tiene', false], ['Parlamento unicameral ', true], ["nan", false], ["nan", false]]}, {text: '¿En qué año se independizaron de Francia?', options: [[1956, true], [1960, false], [1897, false], [1918, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', true], ['Obligatorio', false], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'BRB'},
    uruguay:{name: 'Uruguay', asks: [{text: '¿Que forma de gobierno tiene?', options: [['Democracia representativa directa', false], ['Monarquía constitucional', false], ['República unitaria presidencialista', true], ['Monarquía Absoluta', false]]}, {text: '¿En qué año se habilitó el voto femenino?', options: [[1910, false], [1948, true], [1932, false], [1905, false]]}, {text: 'El voto en XXX es ...', options: [['Optativo', false], ['Obligatorio', true], ['Obligatorio sólo para categoría presidencial', false], ['Censitario', false]]}], 'clip': 'MCU'},
    

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
        this.currentA = null;
        this.currentB = null;
        this.currentC = null;
        this.currentD = null;
    }
    
    setNumber(number, country) {
        askNumber.setText("Pregunta #" + number + " - " + data[country].name);
    }
    
    prepareOptions() {
        askText.setText(this.currentAsk.text);
        textAnswerA.setText(this.currentA);
        textAnswerB.setText(this.currentB);
        textAnswerC.setText(this.currentC);
        textAnswerD.setText(this.currentD);
        answerFondoClip.gotoAndStop(2);
        answerA.x = answerB.x = answerC.x = answerD.x = 535;
        answerA.y = 358;
        answerB.y = 443;
        answerC.y = 527;
        answerD.y = 616;
    }
    
    
    nextAsk() {
        this.i += 1;
        this.currentAsk = this.asks[this.i];
        this.currentSuccess = this.currentAsk.options.find(o => o[1] === true)[0];
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
        showButtonsPlayers();
        this.player = null;
        this.defensor = null;
        this.defensorFromTo = null;
        this.countryPlayer = null;
        this.countryDefensor = null;
        this.festejanding = false;
        this.gameOver = false;
        this.win = false;
        this.stoped = true;
        this.askNumber = 0;
        this.askOpen = false;
        this.askManager = null;
        this.successAnswers = 0;
        this.errorAnswers = 0;
        this.remainingCountries = [...Object.keys(data)];
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
            hidePlayers();
            const notaFinal = Math.round(10 * this.successAnswers / 15)
            if (this.win) {
                askNumber.setText("Ganaste! te sacaste un: " + notaFinal);
            } else {
                askNumber.setText("Perdiste! te sacaste un: " + notaFinal);
            }
            this.init();
        }
    }
    
    checkAnswer(word) {
        const attr = 'current' + word;
        if (this.askManager[attr] === this.askManager.currentSuccess) {
            this.successAnswer();
            hideOptions();
        } else {
            this.askNumber += 1;
            this.askManager.setNumber(this.askNumber, this.countryDefensor);
            this.errorAnswer();
        }
    }
    
    successAnswer() {
        hideOptions();
        this.successAnswers += 1;
        this.countryDefensor = null;
        this.festejanding = true;
        if (this.successAnswers % 5 === 0) {
            this.player.patear();
            this.defensor.clip.gotoAndStop(3);
        } else {
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
    
    errorAnswer() {
        this.errorAnswers += 1;
        if (this.askManager.i >= 2 || this.askNumber >= 15) {
            this.gameOver = true;
            this.win = false;
        } else {
            this.askManager.nextAsk();
        }
    }
    
    
    selectPlayer(clip, country){
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