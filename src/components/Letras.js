import App from "../App";

export default function Letras({alfabeto, habLetra, disabled, letraClicada, selecionados, contaErro, corFinal}){
    return (
    <div className="area-letras-pai">
        <div className="area-letras">
            {alfabeto.map(l => <Letra key={l+letraClicada} valor={l} habLetra={habLetra === true && "letra"} disabled={disabled} letraClicada={letraClicada} selecionados={selecionados} contaErro={contaErro} corFinal={corFinal}/>)}
        </div>
    </div>
        
    );
}

function Letra({habLetra, disabled, valor, letraClicada, selecionados, contaErro, corFinal}){
    return (
        <div className={habLetra === false ? (selecionados.includes(valor) ? "letra" : "letra letra-habilitada") : "letra"} onClick={() => letraClicada(valor)} disabled={selecionados.includes(valor) ? disabled : (corFinal.includes("vermelho") || corFinal.includes("verde")) && true} data-test="letter">{valor}</div>
        
    )
}