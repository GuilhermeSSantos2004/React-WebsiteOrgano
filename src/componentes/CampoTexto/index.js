import './CampoTexto.css'

const CampoTexto = (props) => {

   //console.log(props)    
   //console.log(props.placeholder)

   const placeholderModificada = `${props.placeholder}...` 

   let valor = ``

   const aoDigitado = (evento) => {
    valor = evento.target.value
    console.log(valor)
   }

   console.log(placeholderModificada)
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto