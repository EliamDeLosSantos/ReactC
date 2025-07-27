const otroArray = ["eliam", "maria", "pedro","yeica"];
const [miPrimerNombre] = otroArray;
console.log(miPrimerNombre); 

const [,,,yeica] = otroArray;
console.log(yeica);

console.log(`Pero esto es mas facil: ${otroArray[0]} y ${otroArray[otroArray.length - 1]}`);