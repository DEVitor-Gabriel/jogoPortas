import { Cartao } from "../components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import { EntradaNumerica } from "../components/EntradaNumerica"
import { useState } from "react"

export default function Formulario() {
  const [numeroPortas, setNumeroPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor='#c0392c'>
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text='Qtde portas?' value={numeroPortas} onchange={novoValue => setNumeroPortas(novoValue)}></EntradaNumerica>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text='Porta com presente?' value={comPresente} onchange={novoValue => setComPresente(novoValue)}></EntradaNumerica>
        </Cartao>
        <Cartao bgcolor='#28a085'>
          <Link href={`/jogo/${numeroPortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}