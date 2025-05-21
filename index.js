var setadireita = window.document.getElementById("setadireita");
var Leonardo = window.document.getElementById("Leonardo");
var Samantha = window.document.getElementById("Samantha");
var Bruna = window.document.getElementById("Bruna");
var setaesquerda = window.document.getElementById("setaesquerda");
var cards = window.document.getElementsByClassName("card");

function RolarParaDireita() {
    Leonardo.style = "display: none;";
    Bruna.style = "display: flex; margin-left: 6.5vw;";
    setadireita.style = "display: none;";
    setaesquerda.style = "display: flex;";
    Samantha.style = "margin-left: -5.4vw";
}

function RolarParaEsquerda() {
    Leonardo.style = "display: flex; margin-left: -5vw;";
    Bruna.style = "display: none;";
    Samantha.style = "width: 27vw;";
    setadireita.style = "display: flex; margin-top: 1.6rem;";
    setaesquerda.style = "display: none;";
    Leonardo.style = "margin-left: 12vw";
}
