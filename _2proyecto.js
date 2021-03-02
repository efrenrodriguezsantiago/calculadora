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

// obtiene el titulo de un libroo
    get title(){
        return _private.get(this).propiedades['_titulo'];
    }
// modifica el titulo de un libro
    set title(newtitulo){
        return _private.get(this).propiedades['_titulo'] = newtitulo;
    }
}


class Seller{
    //titulo autor precio
}
//instancia de objetos
const book1 = new Book('1984','george urwell',300);
const book2 = new Book('frankeisten','M. S',200);

//imprime en pantalla
book1.title = 'mil novecientos ochenta y cuatro'
console.log(book1.title);//se pone en ingles esto
