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
    alemania: {
        name: 'Alemania',
        asks: dummyAsks,
        clip: "BBA"
    },
    arabia_saudita: {
        name: 'Arabia Saudita',
        asks: dummyAsks,
        clip: "MVA"
    },
    argentina: {
        name: 'Argentina',
        asks: dummyAsks,
        clip: "MCU"
    },
    australia: {
        name: 'Australia',
        asks: dummyAsks,
        clip: "MAA"
    },
    belgica: {
        name: 'Bélgica',
        asks: dummyAsks,
        clip: "BRB"
    },
    brasil: {
        name: 'Brasil',
        asks: dummyAsks,
        clip: "NAE"
    },
    camerun: {
        name: 'Camerún',
        asks: dummyAsks,
        clip: "NVS"
    },
    canada: {
        name: 'Canadá',
        asks: dummyAsks,
        clip: "BRB"
    },
    catar: {
        name: 'Catar',
        asks: dummyAsks,
        clip: "MRC"
    },
    corea_del_sur: {
        name: 'Corea del Sur',
        asks: dummyAsks,
        clip: "MRC"
    },
    costa_rica: {
        name: 'Costa Rica',
        asks: dummyAsks,
        clip: "MRC"
    },
    croacia: {
        name: 'Croacia',
        asks: dummyAsks,
        clip: "MRC"
    },
    dinamarca: {
        name: 'Dinamarca',
        asks: dummyAsks,
        clip: "BRB"
    },
    ecuador: {
        name: 'Ecuador',
        asks: dummyAsks,
        clip: "NAE"
    },
    espana: {
        name: 'España',
        asks: dummyAsks,
        clip: "BRB"
    },
    estados_unidos: {
        name: 'Estados Unidos',
        asks: dummyAsks,
        clip: "BBA"
    },
    francia: {
        name: 'Francia',
        asks: dummyAsks,
        clip: "NAF"
    },
    gales: {
        name: 'Gales',
        asks: dummyAsks,
        clip: "BRB"
    },
    ghana: {
        name: 'Ghana',
        asks: dummyAsks,
        clip: "NBG"
    },
    inglaterra: {
        name: 'Inglaterra',
        asks: dummyAsks,
        clip: "BBA"
    },
    iran: {
        name: 'Irán',
        asks: dummyAsks,
        clip: "MBI"
    },
    japon: {
        name: 'Japón',
        asks: dummyAsks,
        clip: "BAJ"
    },
    marruecos: {
        name: 'Marruecos',
        asks: dummyAsks,
        clip: "BRB"
    },
    mexico: {
        name: 'México',
        asks: dummyAsks,
        clip: "BVM"
    },
    paises_bajos: {
        name: 'Países Bajos',
        asks: dummyAsks,
        clip: "BNP"
    },
    polonia: {
        name: 'Polonia',
        asks: dummyAsks,
        clip: "BBA"
    },
    portugal: {
        name: 'Portugal',
        asks: dummyAsks,
        clip: "BRB"
    },
    senegal: {
        name: 'Senegal',
        asks: dummyAsks,
        clip: "NVS"
    },
    serbia: {
        name: 'Serbia',
        asks: dummyAsks,
        clip: "BRB"
    },
    suiza: {
        name: 'Suiza',
        asks: dummyAsks,
        clip: "BRB"
    },
    tunez: {
        name: 'Túnez',
        asks: dummyAsks,
        clip: "BRB"
    },
    uruguay: {
        name: 'Uruguay',
        asks: dummyAsks,
        clip: "MCU"
    }
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
        this.chutiMover();        
    }
    
    chutiMover() {
        this.pelota.x = 360;
        this.pelota.y = 550;        
        this.pelota.gotoAndStop(3);    
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
        this.gameOver = false;
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

    
    chequearGameOver() {
        if (this.gameOver) {
            alert("perdimooo!")
            hideOptions();
            hidePlayers();
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
        if (this.successAnswers % 5 === 0) {
            this.player.patear();
        } else {
            this.player.festejito();    
        }
        setTimeout(() => {
            this.askManager = null;
            this.stoped = false;
            this.askOpen = false;
            if (this.askNumber >= 15) {
                this.gameOver = true;
            } else {
                this.defensorFromTo = [1600, -1000];
                this.goToQuestion();
                this.countryDefensor = null;
            }
        }, 1000);
    }
    
    errorAnswer() {
        this.errorAnswers += 1;
        if (this.askManager.i >= 5 || this.askNumber >= 15) {
            this.gameOver = true;
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
        setTimeout(() => {
            this.defensorFromTo = [3900, 1600];
        }, 2000);
        
        setTimeout(() => {
            this.player.stoped();
            this.stoped = true;
            this.askNumber += 1;
            this.askOpen = true;
        }, 3000);
    }
    
    
    
}; 

window.GM = new GameManager();