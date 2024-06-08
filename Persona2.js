class Perona{
constructor(nombre, libros){
this.nombre = nombre;
this.libros =libros   || [];

}

set setLibro(libro){    //set pueden recibir parametros
this.libros.push(libro);

}


get getLibros(){        //Get no reciben parametros

    return this.libros;
}


 buscarLibroPorTitulo(titulo){

 return this.libros.find((item)=> item.titulo ===titulo);


 }


}


//creando nuestro objeto
const personaUno= new Persona ("Ignacio");   //new se crea una nueva instancia, nuestro objeto
personaUno.setLibro ={ titulo: "Papeluchu", author: "Marcelo Paz"};

personaUno.setLibro={

    titulo: "El principito",
    author: "Antoine de saint-Exupery",

};

console.log(personaUno.buscarLibroPorTitulo("Papelucho"));
console.log(personaUno.getLibros);