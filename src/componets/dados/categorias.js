class Categorias{
    constructor(){
        this.listaCategorias = [];
        this.inscritos = [];
    }
    inscrever(func){
        this.inscritos.push(func);
    }
    adicionaCategoria(novaCategoria){
        this.listaCategorias.push(novaCategoria);
        this.notificar();
    }
    notificar(){
        this.inscritos.forEach(func => {
                func(this.listaCategorias);
            }
        );
    }
}
export default Categorias;