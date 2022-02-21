const BaseBot = require("./baseBot.js");

class Bottle extends BaseBot{

    constructor(){
        super();
        this.gameHistory = [];
        this.score = 0;
    }

    newGeneration(){
        super.newGeneration();
    }

    play(){
        let y = Math.random();
        if (y <= 0.9){
            y = 0;
        } else {
            y= 1;
        }
    }


    memorize(number){
        this.gameHistory.push(number);
    }

}

module.exports = Bottle;



