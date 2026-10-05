const { Component } = require("react");

class DibujosComplejosRender extends Component {

    /* NECESITAMOS UN ARRAY EN STATE PARA
    IR GENERANDO NUEVOS ELEMENTOS AL PULSAR UN BOTON */
    state = {
        nombres: ["diana", "antonia", "Adrian", "Lucia"]
    }

    generarNombre = () => { 
        /* PODEMOS UTILIZAR DIRECTAMENTE EL METODO DEL ARRAY push 
        SI ES UN OBJETO SIMPLE (string, int) NO PODEMOS ASIGNAR*/
        this.state.nombres.push("NUEVO NOMBRE")
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return(
            <div>
                <h1>Dibujos complejos render</h1>
                <button onClick={this.generarNombre}>Generar nombre</button>
                {
                    this.state.nombres.map((nombre, index) => {
                        // ESTE CODIGO NECESITA UN RETURN PARA EL RENDER
                        return(<h4 style={{color:"blue"}}>
                            {nombre}
                        </h4>)
                    })
                }
            </div>
        )
    }
}

export default DibujosComplejosRender