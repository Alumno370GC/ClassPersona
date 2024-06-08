class Animales {
constructor (nombre, edad){

this.nombre =nombre;
this.edad =edad;

}

canta(){

return `${this.nombre} puede cantar`;

}

baila(){

    return `${this.nombre} puede bailar`;

}

}


class Gatos extends Animales {
constructor (nombre, edad, colorBigotes){

super(nombre, edad);
this.colorBigotes =colorBigotes;

}



bigotes(){


return ` tengo bigotes color  ${this.colorBigotes}`;



}



}

let clara = new Gatos ("Clara",33, "indigo");