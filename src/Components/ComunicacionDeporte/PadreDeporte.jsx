import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeporte extends Component{

    deportes = ["Futbol", "Basket", "Petanca"]

    state = {
        favorito: ""
    }

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render(){
        return(
            <div>
                <h1>Padre deportes</h1>
                {
                    this.deportes.map((sport, index) => {
                        return(<HijoDeporte nombre={sport} key ={index} metodo={this.mostrarFavorito}/>)
                    })
                }
                <h3>Deporte favorito: {this.state.favorito}</h3>
            </div>
        )
    }
}

export default PadreDeporte