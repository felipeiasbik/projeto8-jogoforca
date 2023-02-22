import App from "../App";

export default function Jogo({botaoIniciar, palavraDoJogoArray, imagemForca, corFinal}){
    
    return (
        <div className="container">
            <div className="area-jogo">
                <img src={imagemForca} data-test="game-image"/>
            </div>
            <div className="area-escolher-palavra">
                <div className="botao"><button onClick={botaoIniciar} data-test="choose-word">Escolher Palavra</button></div>
                <div className={`palavra-serrilhada ${corFinal}`} data-test="word">{palavraDoJogoArray}</div>
            </div>
        </div>
    );
}