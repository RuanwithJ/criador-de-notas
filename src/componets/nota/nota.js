import React, {Component} from 'react'
import "./style.css"
import trash from '../../assets/trash.svg'
export default class Nota extends Component{
    constructor(props){
        super();
        this.notas = props.notas[props.indice];
        this.removeNota = this.removeNota.bind(this)
    }
    removeNota(event){
        console.log("remove");
        this.props.removeNota(this.props.indice);
        event.stopPropagation();
    }
    render(){
        return(
                <section  className='nota'>
                      <img src={trash} onClick={this.removeNota}/> 
                    <header>
                        <h3>{this.notas.titulo}</h3>
                    </header>
                    <p>{this.notas.texto}</p>
                    <h4>{this.notas.categoria}</h4>
                    <div></div>
                </section>
        );
    }
}