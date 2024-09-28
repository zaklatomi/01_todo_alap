import { TODOLIST2 } from "../model/adatok.js";

export default class TablazatModel{

    #lista=[];
    constructor(){
        this.#lista= TODOLIST2
    }

    getList(){
        // controllerből getterrel érhetem el a listát
        return this.#lista;
    }

    torles(index){
        //a listabol az adott indexu helyrol torol egy elemet
        this.#lista.splice(index,1)
    }
}