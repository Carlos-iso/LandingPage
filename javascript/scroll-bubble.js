const elementoModificado = document.querySelector(".bubble-img");

function modificarElementoNoScroll() {
    if (window.scrollY > 450) {
        elementoModificado.style.top = "-450px";
    } else {
        elementoModificado.style.top = "88px";        
    }
}

window.addEventListener("scroll", modificarElementoNoScroll);