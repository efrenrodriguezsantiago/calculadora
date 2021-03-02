const _private = new WeakMap()//nos esta ocultando las propiedades titulo autor precio


document.write("-----------Bienvenido---------");
class Book{
    constructor(titulo,autor,precio){
        // si tienen _ no deberia de modificarse porque son privadas
        const propiedades = {
        _titulo: titulo,
        _autor: autor,
        _precio: precio
        }
    
    _private.set(this,{propiedades});//colocamos propiedaddes como privadas
    }

}


class Seller{
    //titulo autor precio
}
//instancia de objetos
const book1 = new Book('1985','george urwell',300);
const book2 = new Book('frankeisten','M. S',200);

//imprime en pantalla
console.log(book1._titulo);

console.log(book1._precio);

