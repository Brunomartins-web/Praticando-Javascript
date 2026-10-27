function calcular() {
    let number = document.getElementById("numero")

    let conversao = Number(number.value)

    let resultado = document.getElementById("resultado")

    if (number.value.trim() === "") {
        resultado.innerText = "Digite um numero!"
        return
    }

    if (conversao > 0) {
        resultado.innerText = `O valor é positivo, `
    } else if (conversao < 0) {
        resultado.innerText = `O valor é negativo, `
    } else {
        resultado.innerText = `O valor é zero, `
    }


    if (conversao % 2 === 0) {
        resultado.innerHTML += `O número ${conversao} é par!`
    } else {
        resultado.innerHTML += `O número ${conversao} é Impar!`
    }
}