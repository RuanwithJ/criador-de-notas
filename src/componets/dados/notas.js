class Notas{
    constructor(){
        this.listaNotas = [];
        this.inscritos = [];
    }
    inscrever(func){
        this.inscritos.push(func);
    }
    notificar(){
        this.inscritos.forEach(func => {
                func(this.listaNotas);
            }
        );
    }
    adicionaNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.listaNotas.push(novaNota);
        this.notificar();
    }
    removeNota(posi){
        this.listaNotas.splice(posi, 1);
        this.notificar();
    }
}
class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}
export default Notas;