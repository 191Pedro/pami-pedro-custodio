// Função Básica

function Msg1(msg) {
    console.log(msg)
}

Msg1("Olá!")
Msg1("Tudo bem?\n")

function Msg2(msg) {
    let message = msg
    return message
}

console.log(Msg2("Oie!"))
console.log(Msg2("Tô bem, e você?\n"))

function Soma(n1, n2) {
    return n1 + n2
}

console.log(Soma(10, 10))

// Arrow Function ou Função Anônima

const Potencia = (n, p) => {
    return Math.pow(n, p)
}

console.log(Potencia(4, 2) + "\n")

// Lógica básica

const Media = (nota1, nota2) => {
    let NotaFinal = (nota1 + nota2) / 2

    if (NotaFinal < 4.00) {
        return "Reprovado"
    }

    if (NotaFinal >= 6.00) {
        return "Aprovado"
    }

    return "Recuperação"
}

console.log(Media(6, 6))