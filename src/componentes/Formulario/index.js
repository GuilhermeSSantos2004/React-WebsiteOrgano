import CampoTexto from '../CampoTexto'
import './Formulario.css'

export const Formulario = () => {

    return (
        <selection className='formulario'>
            <form>
                <h2>Preencher os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoTexto label="imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </selection>
    )
}

export default Formulario