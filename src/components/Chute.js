export default function Chute({chute, setChute, palavraAtual, setCorFinal, setHabLetra, setImagemForca, setDisabled, setPalavraDoJogoArray, imagemForca, forca6, disabledInput, setDisabledInput, setPalavraFormada, setContaErro}){

    function chutar(){
        let palavraAtualString = "";
        for(let i = 0; i < palavraAtual.length; i++){
            palavraAtualString += palavraAtual[i];
        }
        if (palavraAtualString !== ""){
            if (chute === palavraAtualString){
                chuteCerto();
            } else {
                chuteErrado();
            }
        }
        setChute("");
    }

    function chuteCerto(){
        setCorFinal("verde");
        setHabLetra(true);
        setImagemForca(imagemForca);
        setDisabled(true);
        setPalavraDoJogoArray(palavraAtual);
        setDisabledInput(true);
        setPalavraFormada(palavraAtual);
    }

    function chuteErrado(){
        setImagemForca(forca6);
        setCorFinal("vermelho");
        setPalavraDoJogoArray(palavraAtual);
        setHabLetra(true);
        setDisabled(true);
        setDisabledInput(true);
        setContaErro(6);
    }

    return (
        <div className="footer">
            <div className="chute">
                <span>Já sei a palavra!</span>
                <input value={chute} onChange={(e) => setChute(e.target.value)} disabled={disabledInput} data-test="guess-input"></input>
                <button onClick={chutar} data-test="guess-button" disabled={disabledInput} >Chutar</button>
            </div>
        </div>
    )
}