const carro = {
    marca: "Toyota",
    activo: true,
    fecha: 2020,
};
//Para que sea inmutable
// Object.freeze(carro);

// No se pueden agregar, eliminar o modificar propiedades
Object.seal(carro);
carro.activo = false;

delete carro.fecha; // No se eliminará porque está sellado

console.table(carro);