
import './App.css';
import ListaDeNotas from './componets/listaNotas/listaDeNotas'
import FormulatioAdicionarNotas from './componets/formulario/formularioAdicionaNotas';
import ListaDeCategorias from './componets/categorias/listaDeCategorias';
import { Component } from 'react';
import  Categorias  from './componets/dados/categorias'
import Notas from './componets/dados/notas'
class App extends Component{
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }
  render(){
    return (
      <main>
        <section className='principal'>
          <FormulatioAdicionarNotas categorias={this.categorias} criaNota={this.notas.adicionaNota.bind(this.notas)}/>
          <div className='divisao'></div>
          <ListaDeCategorias adicionaCategoria={this.categorias.adicionaCategoria.bind(this.categorias)}
                            categorias={this.categorias}/>
          <ListaDeNotas notas={this.notas} removeNota={this.notas.removeNota.bind(this.notas)}/>
        </section>
      </main>
    );
  }
}

export default App;
