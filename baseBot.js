
class BaseBot{

    constructor(){
        this._points = 0;
    }

    get points(){
        return this._points;
    }

    set points(value){
        this._points = value;
    }

    static play(){
    }

    static newGame(){
    }

    static newGeneration(){
        this._points = 0;
    }

    static memorize(number){
    }


}