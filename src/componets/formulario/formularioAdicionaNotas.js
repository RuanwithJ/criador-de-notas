import React, { Component } from 'react'
import "./style.css"
export default class FormulatioAdicionarNotas extends Component{
    constructor(props){
        super();
        this.titulo = '';
        this.texto = '';
        this.categoria = 'Sem categoria';
        this.input = {};
        this.textArea = {};
    }
    componentDidMount(){
        this.props.categorias.inscrever(this.categorias.bind(this));
    }
    categorias(){
        this.setState({categorias:this.props.categorias.listaCategorias});
    }
    mudancaDeTitulo(event){
       this.titulo = event.target.value;
       event.stopPropagation();
    }
    mudancaDeTexto(event){
        this.texto = event.target.value;
        event.stopPropagation();
    }
    mudancaDeCategoria(e){
        this.categoria = e.target.value;
        console.log(this.categoria);
        e.stopPropagation();
    }
    criaNota(event){
        event.preventDefault();
        this.props.criaNota(this.titulo, this.texto, this.categoria);
        this.reseta();
    }
    reseta(){   
       this.input.value = '';
       this.textArea.value = '';
    }
    
    render(){
        return(
        <form onSubmit={this.criaNota.bind(this)}  className='adicionaNotas'>
            <select onChange={this.mudancaDeCategoria.bind(this)}>
            <option>Sem categoria</option>)
                {
                    this.props.categorias.listaCategorias.map((categoria, indice) =>{
                        return(<option key={indice}>{categoria}</option>);
                    })
                }
            </select>
            <input onChange={this.mudancaDeTitulo.bind(this)} ref={ref => this.input = ref} placeholder='titulo' type='text'/>
            <textarea onChange={this.mudancaDeTexto.bind(this) } ref={ref => this.textArea= ref} rows={15} placeholder='Escreva sua nota'/>
            <button  type='submit'>Adicionar nota</button>
      </form>
        );
    }
}