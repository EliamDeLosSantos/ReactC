const form = document.querySelector(".form");
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const clave = document.querySelector("#clave").value;
    if(nombre === '' || clave === ''){
        console.log('Todos los campos son obligatorios')
    }
    else{
        console.log('Enviando Formulario...')
    }
});