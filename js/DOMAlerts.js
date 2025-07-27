const form = document.querySelector(".form");
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const clave = document.querySelector("#clave").value;
    const alertPrev = document.querySelector('.alert');
    alertPrev?.remove();
    const alert = document.createElement('DIV');
    alert.classList.add('alert', 'text-black', 'indent');
    if(nombre === '' || clave === ''){
        alert.textContent ='Todos los campos son obligatorios';
    }
    else{
        alert.textContent ='Todo lit!';
    }
    form.appendChild(alert);
    setTimeout(()=>{
        alert.remove()
    },2000);
});