const { Component } = require("react");

class Contador extends Component {
    
    numero = 0

    incrementar = () => {
        this.numero += 1
        console.log(this.numero)
    }

    //LAS VARIABLES STATE SE DECLARAN EN UN OBJETO DE LA CLASE
    state = {
        valor: parseInt(this.props.inicio)
    }

    incrementarValor = () => {
        {/*PARA MODIFICAR EL VALOR DE CUALQUIER ELEMENTO DEL 
            STATE SE UTILIZA setState Y NOS PERMITE MODIFICAR UNA 
            O VARIA VARIABLE A LA VEZ*/}
        this.setState({
            valor: this.state.valor + 1
        })
    }

    /*LA SINTAXIS DE LA LLAMADA A LOS METODOS HA 
    CAMBIADO EN RENDER
    PUEDO LLAMAR DIRECTAMENTE AL METODO EN 
    ONCLICK (sin lambda) Y SIN PARENTESIS*/
    render() {
        return (
            <div>
                <h1>Contador JSX</h1>
                <h3 style={{color:"red"}}>Valor: {this.state.valor}</h3>
                <button onClick={this.incrementarValor}>Incrementar valor</button>
                {/*<h3>Contador: {this.numero}</h3>*/}
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={ () => {
                    this.incrementar();
                }}>Incrementar lambda</button>

            </div>
        )
    }
}

export default Contador;