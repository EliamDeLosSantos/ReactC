const names = ["eliam", "maria", "pedro","yeica"];
const numeros = [1,2,3,4,5];

//Filter
const filteredNumbers = numeros.filter(numero => numero > 2);
const filteredNames = names.filter(name => name !== "yeica");
const arreglosJuntos = [...filteredNames, ...filteredNames];
console.log(filteredNumbers);
console.log(filteredNames);

const arrayIncludesValue = names.includes("eliam");
console.log(`Array includes value ${arrayIncludesValue}`);

//Si al menos 1 cumple la condicion
const arraySome = numeros.some(numero => numero>2);
console.log(`Algunos numeros son mayor a 2 ${arraySome}`);

//Encuentra y retorna el primer elemento
const arrayFindNumber = numeros.find(numero => numero > 1);
console.log(`Primer elemento que cumple la condicion ${arrayFindNumber}`);

//Si todos cumplen la condicion
const arrayEvery = numeros.every(numero => numero > 0);
console.log(`Todos los numeros son mayor que 0 ${arrayEvery}`);

//Retorna un acumulado del total
const arrayReduce = numeros.reduce((total, numero) => numero + total, 0);
console.log(arrayReduce);