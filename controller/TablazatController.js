import TablazatModel from "../model/TablazatModel.js";
import TablazatMegjelenit from "../view/TablazatMegjelenit.js";

export default class TablazatController{

    constructor(){

        this.tModel = new TablazatModel()
        const lista = this.tModel.getList();
        this.tMegjelenit = new TablazatMegjelenit(lista, $(".tarolo"))
        this.torlesEsemeny();
    }

    torlesEsemeny(){
        $(window).on("torles",(event)=>{
            let index = event.detail.id
            //át kell adni a modellnek az indexet, a modellnek törölnie kell a listábol az elemet
            //ujra le kell kerdezni az adatokat, ujra meg kell jeleniteni az uj adatokat
            this.tModel.torles(index)
            const lista = this.tModel.getList();
            this.tMegjelenit = new TablazatMegjelenit(lista,$(".tarolo"))
        })
    }
}