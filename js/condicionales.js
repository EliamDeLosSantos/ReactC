//Condicionales
const auth = false;
!auth ? console.log("No se va registrar"):console.log("registrese venga");

//OPTIONAL CHAINING ?
const persona = {
    nombre: "Eliam",
    apellido: "DLS",
    Edad: "24"
}

console.log(persona.detalles?.peso);

console.log("Ashuda");

//Nullish coalescing ??
console.log(persona.nombre??"Nose")

//Truthy : Todo valor generado que no se haya denominado como falsy (excepciones como NULL, undefined, 0)
//Falsy: Lo contrario

if("null"){
    console.log("Truthy")
}else console.log("Falsy")

"null" && console.log("Hola"); //Si la primera parte es falsy la segunda nunca se va a ejecutar