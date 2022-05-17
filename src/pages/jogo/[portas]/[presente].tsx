import { useState, useEffect } from "react";
import { Porta } from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/porta";
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jogo() {
  const router = useRouter();
  const [ portas, setPortas] = useState([])
  const [ valido, setValido] = useState(false)

  useEffect(() => {
    const portas = +router.query.portas;
    const presente = +router.query.presente;

    const qtdePortasValida = portas >= 3 && portas <= 100;
    const presenteValido = presente >= 1 && presente <= portas;

    setValido(qtdePortasValida && presenteValido)

  },[portas,router.query.portas,router.query.presente])

  useEffect(() => {
    const portas = +router.query.portas;
    const presente = +router.query.presente;

    setPortas(criarPortas(portas,presente));

  },[router?.query])

  function renderizarPortas(){
    return (
      portas.map(porta => {
        return (
          <Porta key={porta.numero} value = {porta} onChange = {novaPorta => setPortas(atualizarPortas(portas,novaPorta))}/>
        )
      })
    )
  }

  return (
      <div id={styles.jogo}>
        <div className={styles.portas}>
          { valido ?
            renderizarPortas():
            <h1>Valores inválidos</h1>
            }
        </div>
        <div className={styles.botao}>
          <Link href="/">
            <button>Reiniciar jogo</button>
          </Link>
        </div>
      </div>
    
  )
}
