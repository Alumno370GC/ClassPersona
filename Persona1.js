function Persona(nombre) {
    this.nombre = nombre;

    this.saludar = function() {
        return `${this.nombre} dice hola!`;
    };
}

Persona.prototype.saludarIngles = function() {
    return `${this.nombre} says hi!`;
};

const personaUno = new Persona("Ignacio");
console.log(personaUno.saludarIngles());