import { PortaModel } from "../models/Porta";

export function criarPortas(qtde:number, portaSelecionada:number):PortaModel[] {
    return Array.from({ length: qtde }, (_,i) => {
        const numero = i + 1;
        const temPresente = numero === portaSelecionada;
        return new PortaModel(numero, false, false, temPresente)
    })
}

export function atualizarPortas(portas:PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero

        if (igualAModificada){
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desSelecionar()
        }
    })
    
}