const carro = {
    nombre: "Toyota",
    activo: true,
    fecha: 2020,
};

const persona = {
    nombre: "Eliam",
    premium: true,
};

const compra = {
    precio: 100,
    ...persona // Esto se llama "spread operator" y permite combinar objetos
};

const objectAsKeys = {
    carro,
    persona
};

//Esto es lo mismo que el assign
const objectUnion = {
    ...carro,
    ...persona
};
//Esto es lo mismo que el union con spread operator
const objectWithAssign = Object.assign(carro, persona);
//Si los nombre de las propiedades son iguales, se sobreescriben
console.table(objectWithAssign);