import { Component } from "react";

class HijoDeporte extends Component{

    favorito = () => {
        this.props.metodo(this.props.nombre)
    }
    
    render() {
        return(
            <div>
                <h3>{this.props.nombre}</h3>
                <button onClick={this.favorito}>Seleccionar Favorito</button>
                
            </div>
        )
    }
}

export default HijoDeporte