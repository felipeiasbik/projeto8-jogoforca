import { useState } from "react";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [contaErro,setContaErro] = useState (0);
  const [disabled,setDisabled] = useState(true);
  const [habLetra, setHabLetra] = useState(false);
  const [palavraDoJogoArray, setPalavraDoJogoArray] = useState("");
  const [selecionados, setSelecionados] = useState([...alfabeto]);
  let [letraAtual, setLetraAtual] = useState("");
  const [palavraAtual, setPalavraAtual] = useState([]);
  let [palavraFormada, setPalavraFormada] = useState([]);
  let [imagemForca,setImagemForca] = useState(forca0);
  const [corFinal,setCorFinal] = useState("");
  const [chute, setChute] = useState("");
  let [palavraAtualString, setPalavraAtualString] = useState("");
  const [disabledInput, setDisabledInput] = useState(true);

  function botaoIniciar(){
    setDisabledInput(false);
    setHabLetra(false);
    setCorFinal("");
    setContaErro(0);
    setImagemForca(forca0);
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
  }

  function exibePalavra(){
    for (let i = 0; i < palavraAtual.length; i++){
      if(palavraAtual[i] === letraAtual){
        palavraFormada[i] = letraAtual;
      } else {
        if (palavraFormada[i] == null){
          palavraFormada[i] = "_";
        }
      }
    }
    setPalavraDoJogoArray(palavraFormada);
  }

  function formaImagem(){
    if (!palavraFormada.includes(letraAtual) && contaErro === 0){
      setImagemForca(forca1);
      setContaErro(contaErro + 1);
    } else if (!palavraFormada.includes(letraAtual) && contaErro === 1){
      setImagemForca(forca2);
      setContaErro(contaErro + 1);
    } else if (!palavraFormada.includes(letraAtual) && contaErro === 2){
      setImagemForca(forca3);
      setContaErro(contaErro + 1);
    } else if (!palavraFormada.includes(letraAtual) && contaErro === 3){
      setImagemForca(forca4);
      setContaErro(contaErro + 1);
    } else if (!palavraFormada.includes(letraAtual) && contaErro === 4){
      setImagemForca(forca5);
      setContaErro(contaErro + 1);
    } else if (!palavraFormada.includes(letraAtual) && contaErro === 5){
      setImagemForca(forca6);
      setCorFinal("vermelho");
      setPalavraDoJogoArray(palavraAtual);
      setHabLetra(true);
      setDisabled(true);
      setDisabledInput(true);
    } else {
      setImagemForca(imagemForca);      
    }
  }

  function fimDeJogo(){
    console.log(palavraAtual);
    console.log(palavraFormada);
    console.log(contaErro);
    if(!palavraFormada.includes("_")){
      setCorFinal("verde");
      setHabLetra(true);
      setImagemForca(imagemForca);
      setDisabled(true);
      setDisabledInput(true);
    }
  }

  function letraClicada(letra){
    setLetraAtual(letraAtual = letra);
    const arraySelecionada = [...selecionados,letra];
    if (corFinal === ""){
      if(!selecionados.includes(letra) && contaErro < 6){
        setSelecionados(arraySelecionada);
        setHabLetra(letra ? "letra" : "letra letra-habilitada");
        setDisabled(true);
        exibePalavra();
        formaImagem();
        fimDeJogo();
      }
    }

  }

  return (
    <>
      <Jogo botaoIniciar={botaoIniciar} palavraDoJogoArray={palavraDoJogoArray} imagemForca={imagemForca} corFinal={corFinal}/>
      <Letras alfabeto={alfabeto} habLetra={habLetra} disabled={disabled} letraClicada={letraClicada} selecionados={selecionados} contaErro={contaErro} corFinal={corFinal}/>
      <Chute chute={chute} setChute={setChute} palavraAtual={palavraAtual} setCorFinal={setCorFinal} setHabLetra={setHabLetra} forca6={forca6} imagemForca={imagemForca} setImagemForca={setImagemForca} setDisabled={setDisabled} setPalavraDoJogoArray={setPalavraDoJogoArray} palavraAtualString={palavraAtualString} setPalavraAtualString={setPalavraAtualString} disabledInput={disabledInput} setDisabledInput={setDisabledInput} setPalavraFormada={setPalavraFormada} setContaErro={setContaErro}/>
    </>
  );
}
