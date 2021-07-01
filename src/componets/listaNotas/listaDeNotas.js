import React, { Component } from 'react'
import Nota from '../nota/nota'
import "./style.css"
export default class ListaDeNotas extends Component {
    constructor(props){
        super();
        this.removeNota = this.removeNota.bind(this);
    }
    componentDidMount(){
        this.props.notas.inscrever(this.notas.bind(this));
    }
    notas(){
        this.setState({notas:this.props.notas.listaNotas});
    }
    removeNota(i){
        this.props.removeNota(this.props.notas);
    }
    render() {
        return ( 
        <ul className='listaNotas'> 
            {
               this.props.notas.listaNotas.map((nota, indice) => {
                    return(
                        <li key={indice}>
                            <Nota ref={ref => this.nota = ref} 
                            notas={this.props.notas.listaNotas} 
                            indice={indice} 
                            removeNota={this.removeNota.bind(this)}/>
                        </li>
                    );
                })

            }
        </ul>
        );
    }
}