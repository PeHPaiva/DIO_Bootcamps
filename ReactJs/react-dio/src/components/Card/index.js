import { useState } from "react";
import Buttom from "../Buttom";

const Card = () =>{
    
    const [valor, setValor] = useState(0);

    function Adicionar(){
        setValor(valor + 1)
    };

    function Remover(){
        setValor(valor - 1)
    };

    return(
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <Buttom className="btn btn-success" onClick={Adicionar}>
                    Adicionar
                </Buttom>
                <Buttom className="btn btn-danger" onClick={Remover}>
                    Remover
                </Buttom>
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;