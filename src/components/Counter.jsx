import { useState } from "react";
import styles from './counter.module.css';

export default function Counter() {
    const [valor, setValor] = useState(0);

    function aumentar() {
        setValor(valor + 1);
    }

    function diminuir() {
        setValor(valor - 1);
    }

    if (valor >= 5) {
        return (
            <div className={styles.counterBig}>
                <h2>{valor}</h2>
                <span>Valor muito alto! Hehe!</span>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </div>
        );
    }

    return (
        <div className={styles.counter}>
            <h2>{valor}</h2>
            {/* {
                valor >= 5 ? 
                <span>Valor muito alto! Hehe!</span> : null
            } */}
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    );
}