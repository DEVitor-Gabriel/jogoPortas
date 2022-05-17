export class PortaModel {
    #numero:number;
    #selecionada:boolean;
    #aberta:boolean;
    #temPresente:boolean;

    constructor(numero:number, selecionada = false, aberta = false, temPresente = false){
        this.#numero = numero;
        this.#selecionada = selecionada;
        this.#aberta = aberta;
        this.#temPresente = temPresente;
    }

    get numero(){
        return this.#numero;
    }

    get selecionada(){
        return this.#selecionada;
    }

    get aberta(){
        return this.#aberta;
    }
    get fechada(){
        return !this.#aberta;
    }

    get temPresente(){
        return this.#temPresente;
    }

    desSelecionar(){
        const selecionada = false;
        return new PortaModel(this.numero, selecionada, this.aberta, this.temPresente)
    }

    alternarSelecao(){
        const selecionada = !this.selecionada;
        return new PortaModel(this.numero, selecionada, this.aberta, this.temPresente)
    }

    abrir(){
        const aberta = true; 
        return new PortaModel(this.numero, this.selecionada, aberta, this.temPresente)
    }
}