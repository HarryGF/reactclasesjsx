import { Component } from "react";

class Hijo extends Component{
    
    sumarNumero = () => {
        this.props.metodo(this.props.numero)
    }

    render() {
        return(
            <div>
                <h3>Numero: {this.props.numero}</h3>
                <button onClick={this.sumarNumero}>Sumar {parseInt(this.props.numero)}</button>
            </div>
            
        )
    }
}

export default Hijo