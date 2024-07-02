class Usuario {
  #nombre;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `Hola, soy ${this.#nombre}`;
  }
}

const lisa = new Usuario("Lisa", 8);
console.log(lisa.edad);
console.log(lisa.nombre);
console.log(lisa.saludar());
