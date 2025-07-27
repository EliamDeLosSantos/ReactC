const heading = document.querySelector(".heading");
const enlances = document.querySelectorAll("#output a");



heading.addEventListener('dblclick', () =>{
    heading.textContent += "More";
});

enlances.forEach(enlace => {
    //addEventListener toma el nombre del evento y un callback y al callback le pasa el evento efectuado
    enlace.addEventListener('mouseenter', (e) => e.target.textContent = "herou")
    enlace.addEventListener('mouseleave', (e) => e.target.textContent = "Adios")
})