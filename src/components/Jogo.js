import App from "../App";

export default function Jogo({botaoIniciar, palavraDoJogoArray, imagemForca}){
    
    return (
        <div className="container">
            <div className="area-jogo">
                <img src={imagemForca}/>
            </div>
            <div className="area-escolher-palavra">
                <div className="botao"><button onClick={botaoIniciar}>Escolher Palavra</button></div>
                <div className="palavra-serrilhada ">{palavraDoJogoArray}</div>
            </div>
        </div>
    );
}