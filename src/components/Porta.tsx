import { PortaModel } from '../models/Porta';
import styles from '../styles/Porta.module.css';
import { Presente } from './Presente';

interface PortaProps {
    value: PortaModel;
    onChange: (novaPorta: PortaModel) => void;
}

export function Porta(props: PortaProps){
    const porta = props.value;
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    function alternarSelecao(e) {
        props.onChange(porta.alternarSelecao())
    }

    function abrirPorta(e){
        e.stopPropagation();
        props.onChange(porta.abrir())
    }

    function renderizarPorta(){
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrirPorta}></div>
            </div>
        )
    }

    return(
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ?  renderizarPorta()
                    : porta.temPresente ? <Presente />
                        : ''}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}