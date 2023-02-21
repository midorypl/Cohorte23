class Persona {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }
    get apellido() {
        return this._apellido;
    }
    nombreCompleto() {
        return this._nombre + ' ' + this.apellido;
    }
    //sobreescribir el método de la clase Padre Objecta
    toString() {
        return this.nombreCompleto()
    }

}

class Empleado extends Persona {
    constructor(departamento) {
        this._departamento = departamento;
    }
    set departamento(departamento) {
        this._departamento = this.departamento;
    }
    get departamento() {
        return this._departamento;
    }
    //sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ' , ' + this._departamento;
    }
}

let persona1 = new Persona('Arturo', 'Chávez');
console.log(persona1.toString());

let empelado1 = new Empleado('María', 'Pérez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.toString());













/* let persona3 = new Persona('Johnny', 'Depp');
persona3.nombre = 'Johnny';
console.log(persona3.nombre);
persona3.apellido = 'Jimenez';
console.log(persona3.apellido);

let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1.nombre);
console.log(persona1.apellido);
let persona2 = new Persona('María', 'Jimenez');
console.log(persona2); */