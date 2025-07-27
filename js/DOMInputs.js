const inputNombre = document.querySelector("#nombre");
const inputClave = document.querySelector("#clave");
inputNombre.addEventListener('input', (e)=> {
    console.log(e.target.value);
});

inputClave.addEventListener('input', ClaveHandler);

function ClaveHandler(){
    inputClave.type = "text";
    setTimeout(()=>{
        inputClave.type = "password";
    }, 500);
}