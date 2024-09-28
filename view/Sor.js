export default class Sor {
  #elem = {};
  constructor(elem, szuloElem) {
    this.#elem = elem;
    this.szuloElem  = szuloElem;
    this.sorMegjelenit()
    this.kukaElem=$(".torol:last")
    this.kukaElem.on("click", ()=>{
        console.log(this.#elem.id)
        //sajat esemeny letrehozasa es ablakhoz rendelese
        const e= new CustomEvent("torles",{detail:this.#elem})
        window.dispatchEvent(e)
    })
  }

  


  sorMegjelenit(){
    this.szuloElem.append(`<tr>
                            <td>${this.#elem.tevekenyseg}</td>
                            <td>${this.#elem.hatarido}</td>
                            <td class ="torol">❌</td>
                        </tr>`)
  }
}
