import Sor from "./Sor.js";
export default class TablazatMegjelenit {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.szuloElem.empty()
    this.tablazatKiir();
    this.tbody = $(".sorok");
    this.sorokLetrehoz();
  }

  tablazatKiir() {
    this.szuloElem.append(`<table class = "table table-stripped">
                    <thead>
                        <tr>
                            <th>Szakdolgozat lépés</th>
                            <th>Határidő</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="sorok">
                        
                    </tbody>
                </table>`);
  }

  sorokLetrehoz() {
    this.#lista.forEach((elem,index) => {
        elem.id=index;
      new Sor(elem, this.tbody);
    });
  }
}
