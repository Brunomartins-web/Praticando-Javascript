function calcular(){
    let number = document.getElementById("numero")

    let conversao = Number(number.value)

    let resultado = document.getElementById("resultado")

    if (conversao % 2 === 0){
       resultado.innerHTML = `O número ${conversao} é par!`
    } else {
        resultado.innerHTML = `O número ${conversao} é Impar!`
    }
}

document.body.style.backgroundcolor = "#0000"