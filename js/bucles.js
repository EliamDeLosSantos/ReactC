const names = ["eliam", "maria", "pedro", "yeica"];
console.log("Este es el bucle for");

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("Este es el bucle forEach");

names.forEach((name) => {
    console.log(name);
});

console.log("Este es el bucle for of");
for(let name of names) {
    console.log(name);
}

console.log("Este es el Map");

//Diferenca entre forEach y map que el map devuelve un nuevo array
const namesMap = names.map((name)=>{
    console.log(name);
    return name.toUpperCase();
});

console.log(namesMap);