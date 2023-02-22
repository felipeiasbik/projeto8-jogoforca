import App from "../App";

export default function Letras({alfabeto, habLetra, disabled, letraClicada, selecionados}){
    return (
    <div className="area-letras-pai">
        <div className="area-letras">
            {alfabeto.map(l => <Letra key={l+letraClicada} valor={l} habLetra={habLetra === true && "letra"} disabled={disabled} letraClicada={letraClicada} selecionados={selecionados}/>)}
        </div>
    </div>
        
    );
}

function Letra({habLetra, disabled, valor, letraClicada, selecionados}){
    return (
        <div className={habLetra === false ? (selecionados.includes(valor) ? "letra" : "letra letra-habilitada") : "letra"} onClick={() => letraClicada(valor)} disabled={selecionados.includes(valor) ? disabled : true} >{valor}</div>
        
    )
}