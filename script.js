// ===============================
// Animación al hacer scroll
// ===============================

const elementos = document.querySelectorAll("section");

elementos.forEach(section => {
    section.classList.add("fade");
});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

elementos.forEach(section => observer.observe(section));


// ===============================
// Cuenta regresiva
// ===============================

const fechaSorteo = new Date("August 15, 2026 18:00:00").getTime();

const contador = document.createElement("div");

contador.id = "contador";

contador.style.marginTop = "35px";
contador.style.fontSize = "22px";
contador.style.fontWeight = "bold";
contador.style.color = "#FFD166";

document.querySelector("header .container").appendChild(contador);

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaSorteo - ahora;

    if(diferencia <= 0){

        contador.innerHTML = "🎉 ¡El sorteo ha llegado!";

        return;
    }

    const dias = Math.floor(diferencia / (1000*60*60*24));

    const horas = Math.floor(
        (diferencia % (1000*60*60*24))
        /(1000*60*60)
    );

    const minutos = Math.floor(
        (diferencia % (1000*60*60))
        /(1000*60)
    );

    const segundos = Math.floor(
        (diferencia % (1000*60))
        /1000
    );

    contador.innerHTML =
        `⏳ Faltan ${dias} días ${horas} h ${minutos} min ${segundos} s`;
}

actualizarContador();

setInterval(actualizarContador,1000);
