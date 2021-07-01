import React, { Component } from 'react';
import "./style.css"
class ListaDeCategorias extends Component{
    constructor(props){
        super();
        this.state = {};
        this.adicionaCategoria = this.adicionaCategoria.bind(this);
       
    }
    reseta(e){
        e.target.value = '';
    }
    componentDidMount(){
        this.props.categorias.inscrever(this.categorias.bind(this));
    }
    categorias(){
        this.setState({categorias:this.props.categorias.listaCategorias});
    }
    adicionaCategoria(e){
        if(e.key==='Enter'){
            this.props.categorias.adicionaCategoria(e.target.value);
            this.reseta(e);
        }
    }
    render() {
        return (
            <div className='categorias'>
                  <input 
                    type='text' 
                    placeholder='Adicionar categoria'
                    onKeyDown={this.adicionaCategoria}
                ></input>
                <ul>
                    {
                        this.props.categorias.listaCategorias.map((categoria, indice) =>{
                            return( 
                            <li key={indice}>{categoria}</li>
                                );
                        })
                     }
                </ul>
            </div>   
        );
    }
}
export default ListaDeCategorias;