const miArray = [10, 20, true, "hola"];
console.table(miArray);


//Para modificar el primer y ultimo elemento del array

const otroArray = ["eliam", "maria", "pedro","yeica"];
// otroArray.push("juan");

console.table(otroArray);

//pero en react es mejor no usar metodos mutables. Por ejemplo, no usar push, pop, shift, unshift, splice, etc.
//Ve a doesitmutate.xyz para ver si un metodo muta
const otroArray2 = [...otroArray, "Freddy"]; //esto es como el push

//Esto es como el unshift
const otroArray3 = ["Jhosue", ...otroArray]

console.table(otroArray2);
console.table(otroArray3);


//Para eliminar un elemento en un array
const arrayElementoEliminado = otroArray.filter(nombre => {
    if(nombre !== "pedro"){
        return nombre;
    }
});

console.table(arrayElementoEliminado);

//Para modificar un elemento en un array
const arrayElementoModificado = otroArray.map(name=>{
    if(name === "yeica")return "yesica";
    else return name;
});

console.table(arrayElementoModificado);