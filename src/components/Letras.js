import App from "../App";

export default function Letras({alfabeto, habLetra, disabled, letraClicada, selecionados, contaErro}){
    return (
    <div className="area-letras-pai">
        <div className="area-letras">
            {alfabeto.map(l => <Letra key={l+letraClicada} valor={l} habLetra={habLetra} disabled={disabled} letraClicada={letraClicada} selecionados={selecionados} contaErro={contaErro}/>)}
        </div>
    </div>
        
    );
}

function Letra({habLetra, disabled, valor, letraClicada, selecionados, contaErro}){
    return (
        <div className={`${selecionados.includes(valor) ? "letra" : "letra letra-habilitada"}`} onClick={() => letraClicada(valor)} disabled={selecionados.includes(valor) && disabled} >{valor}</div>
        
    )
}