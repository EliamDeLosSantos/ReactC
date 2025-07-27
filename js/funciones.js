//Functions
UnaFuncion();
// holaMundo(); 

// Las expressiones de función no se pueden llamar antes de ser declaradas
// Las funciones declaradas se pueden llamar antes de ser declaradas
function UnaFuncion(){
    console.log("Hola Mundo");
}

const holaMundo = function(){
    console.log("Adios Mundo");
}

const aroo = ()=>"Esto es un aro function";

holaMundo(); 
console.log(aroo());