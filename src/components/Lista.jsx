import { useEffect, useState } from "react";

const lista = [
    { id: '1', title: 'Carregando...' },
];

export default function Lista() {

    const [lista2, setLista2] = useState(lista);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        /* async function buscarDados() {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos');
            const finalResult = await result.json();
            return finalResult;
        }
        buscarDados().then(res => setLista2(res)); */
        
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(res => setLista2(res));
    }, []);

    useEffect(() => {
        if (!pesquisa) {
            setLista2(lista);
            return;
        }
        setLista2(
            lista.filter((elemento) => elemento.name.toLowerCase().includes(pesquisa.toLowerCase()))
        );
    }, [pesquisa]);

    return (
        <>
            <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                type="text"
                name="pesquisa"
                id="pesquisa"
            />
            {
                lista2.map((elemento) => {
                    return (
                        <li key={elemento.id}>{elemento.title}
                        {elemento.completed ? ' - Tarefa Concluída' : null}
                        </li>
                    )
                })}
        </>
    );

}