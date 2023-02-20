import { useState } from "react";
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let contaErro = 0;
  const [disabled,setDisabled] = useState(true);
  const [habLetra, setHabLetra] = useState("letra");
  const [palavraDoJogoArray, setPalavraDoJogoArray] = useState("");
  const [selecionados, setSelecionados] = useState([...alfabeto]);
  let [letraAtual, setLetraAtual] = useState("");
  const [palavraAtual, setPalavraAtual] = useState([]);
  let [palavraFormada, setPalavraFormada] = useState([]);

  function botaoIniciar(){
    setPalavraFormada([]);
    setSelecionados([]);
    setDisabled(false);
    setHabLetra("letra letra-habilitada");
    const palavraJogo = palavras[Math.floor(Math.random()*palavras.length)].split('');
    setPalavraAtual(palavraJogo);
    let underline = [];
    for (let i = 0; i < palavraJogo.length; i++){
      underline.push("_");
    }
    setPalavraDoJogoArray(underline);
    console.log(underline);
  }

  function exibePalavra(){
    let underline = [...palavraFormada];
    for (let i = 0; i < palavraAtual.length; i++){
      if(palavraAtual[i] === letraAtual){
        underline[i] = letraAtual;
        palavraFormada[i] = letraAtual;
      } else {
        underline[i] = "_";
        if (palavraFormada[i] == null){
          palavraFormada[i] = "_";
        }
      }
    }
    console.log(palavraFormada);
    setPalavraDoJogoArray(palavraFormada);
  }

  function letraClicada(letra){
    setLetraAtual(letraAtual = letra);
    const arraySelecionada = [...selecionados,letra];
    setSelecionados(arraySelecionada);
    setHabLetra(letra ? "letra" : "letra letra-habilitada");
    setDisabled(true);
    console.log(palavraAtual);
    exibePalavra();
  }

  return (
    <>
      <Jogo botaoIniciar={botaoIniciar} palavraDoJogoArray={palavraDoJogoArray}/>
      <Letras alfabeto={alfabeto} habLetra={habLetra} disabled={disabled} letraClicada={letraClicada} selecionados={selecionados}/>
    </>
  );
}
