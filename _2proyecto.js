document.write("-----------Bienvenido---------");
class Book{
    //metodo constructor
    constructor(titulo,autor,precio){
        this._titulo = titulo;
        this._autor = autor;
        this._precio = precio;
    }

}
//instancia de objetos
const book1 = new Book('1985','george urwell',300);
const book2 = new Book('frankeisten','M. S',200);

//imprime en pantalla
document.write(book1._titulo);
document.write(book1._autor);
document.write(book1._precio);

//imprime en pantalla
document.write(book2._titulo);
document.write(book2._autor);
document.write(book2._precio);
