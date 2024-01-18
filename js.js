const svoff = document.querySelector(".switch");
const svon = document.querySelector(".switchon");
const body = document.querySelector("body");



svoff.addEventListener("click", function (){
    body.style.background = "#000";
    svoff.style = "display: none;";
    svon.classList.remove("on");
});

svon.addEventListener("click", function () {
    body.style.background = "#fff";
    svoff.style = "display: block;";
    svoff.classList.add("black");
    svon.classList.add("on");
});