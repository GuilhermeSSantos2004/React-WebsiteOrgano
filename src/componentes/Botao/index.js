import './Botao.css'

const Botao = (props) => {
    return ( 
        <button className='botao'>
            {props.clildren}
        </button>
    )
}

export default Botao