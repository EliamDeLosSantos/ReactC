const carro = {
    nombre: "Toyota",
    activo: true,
    fecha: 2020,
};

const persona = {
    nombre: "Eliam",
    premium: true,
    hijos:{
        nombre: "Liam",
        color: "negro",
    }
};

const {nombre, activo} = carro;
const {nombre: nombrePersona, hijos:{nombre:nombreHijo}} = persona;

console.log(`Nombre ${nombrePersona}, Hijo: ${nombreHijo} `);