import styles from '../styles/EntradaNumerica.module.css'

interface EntradaNumericaProps {
    text: string
    value: number;
    onchange: (novoValue: number) => void;
}

export function EntradaNumerica(props:EntradaNumericaProps){

    const inc = () => props.onchange(props.value + 1)
    const dec = () => props.onchange(props.value - 1)

    return(
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}