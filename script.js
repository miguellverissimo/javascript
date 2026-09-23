function mostraralerta() {
    alert("bom dia turma do 1°ADM!")
}

function pedirnome() {
    let nome = prompt("informe o seu nome:")
    alert("bom dia, "+ nome)
}

function somarNumero() {
    let primeirovalor = Number (prompt ("informe o primeiro numero"))
    let segundovalor = Number (prompt("informe o segundo numero"))
    let soma = primeirovalor + segundovalor
    alert("a soma dos numeros é: " + soma)
}

function mudarFormatacao() {
    let resultado = document.getElementById("resultado")
    let nome = prompt("informe o seu nome")
    resultado.textContent = "bom dia! " + nome
    resultado.style.background = "pink"
}