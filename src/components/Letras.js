import App from "../App";

export default function Letras({alfabeto, habLetra, disabled, letraClicada, selecionados}){
    return (
    <div className="area-letras-pai">
        <div className="area-letras">
            {alfabeto.map(l => <Letra key={l+letraClicada} valor={l} habLetra={habLetra} disabled={disabled} letraClicada={letraClicada} selecionados={selecionados}/>)}
        </div>
    </div>
        
    );
}

function Letra({habLetra, disabled, valor, letraClicada, selecionados}){
    return (
        <div className={`${habLetra} ${selecionados.includes(valor) ? "letra" : "letra-habilitada"}`} onClick={() => letraClicada(valor)} disabled={disabled} >{valor}</div>
        
    )
}