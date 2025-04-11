var setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top: 150%"
    card.style = "margin-left: 50px;"
    card.style = "width: 600px;"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none; margin-top: 150%"
    setadireita.esquerda
}