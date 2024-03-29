import './CampoTexto.css'

const CampoTexto = (props) => {

   //console.log(props)    
   //console.log(props.placeholder)

   const placeholderModificada = `${props.placeholder}...` 

   console.log(placeholderModificada)
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto