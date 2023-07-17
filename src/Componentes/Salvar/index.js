import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Salvar.css'

const Salvar = () => {

    const [texto, setTexto] = useState('')

    const Formulario = (evento) => {
        evento.preventDefault()
        console.log("Submetido", texto)
    }

    return (
        <section className='formulario'>
            <form onSubmit={Formulario}>
                <CampoTexto valor={texto} aoAlterado={valor => setTexto(valor)} />
            </form>
        </section>

    )
}

export default Salvar;