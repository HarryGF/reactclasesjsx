import { Component } from "react";

class Comic extends Component{

    borrarComic(index) {
        this.props.borrar(index)
    }

    render() {
        return (
            <div>
                <h1 style={{color:"blue"}}>{this.props.comic.titulo}</h1>
                <p>{this.props.comic.descripcion}</p>
                <button onClick={() => {
                    this.props.metodo(this.props.comic)
                }}>Seleccionar favorito </button>
                <button onClick={() => {
                    this.borrarComic(parseInt(this.props.key))
                }}>Borrar comic</button>
                <img src={this.props.comic.imagen}
                style={{width:"70px", height: "90px"}}/>
            </div>
        )
    }

}

export default Comic