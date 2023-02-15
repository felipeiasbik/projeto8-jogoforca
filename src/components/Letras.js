export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
    <div class="area-letras-pai">
        <div class="area-letras">
            {alfabeto.map(l => <Letra valor={l}/>)}
        </div>
    </div>
        
    );
}

function Letra(props){
    return (
        <div class="letra">{props.valor}</div>
    )
}