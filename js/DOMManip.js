const heading = document.querySelector(".heading");
const enlances = document.querySelectorAll("#output a");

const nombresEnlaces = ["Home", "About", "Services", "Contact Us"];

heading.textContent += " Agregado";
heading.id = "headingID";
heading.removeAttribute("id");

for(let i = 0; i < enlances.length; i++){
    enlances[i].textContent = nombresEnlaces[i]
}