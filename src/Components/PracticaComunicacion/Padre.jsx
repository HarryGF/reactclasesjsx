import { Component } from "react";
import Hijo from "./Hijo";

class Padre extends Component{

    state = {
        total: 0,
        hijos:[]
    }

    sumar = (x) => {
        this.setState({
            total: this.state.total + parseInt(x)
        })
    } 

    generarNumeros = () => {
        for(let i = 1; i <= 3; i++) {
            var num = parseInt(Math.random() * 10) + 1
            this.state.hijos.push(<Hijo numero={num} key ={i} metodo={this.sumar}/>)
            this.setState({
                hijos: this.state.hijos
            })
        }
    }

    render() {
        return(
            <div>
                <h1>Padre Numeros</h1>
                <h3>La suma es {this.state.total}</h3>
                <button onClick={this.generarNumeros}>Generar numeros</button>
                {   
                    this.state.hijos.map((hijo, index) => {
                        return(hijo)
                    })
                }
            </div>
        )
    }
}

export default Padre