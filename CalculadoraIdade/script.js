
let idade = document.getElementById('idade');


let btn = document.getElementById('btn');
let resultado = document.getElementById('resultado');
function clicar() {
    let sexo = document.querySelector('input[name="txtsex"]:checked');
    let convidade = Number(idade.value);



    if (sexo == null) {
        window.alert("[ERRO] Campo sexo vazio! Escolha uma opção.");
        return;
    }

    //ano
    let date = new Date();
    let ano = date.getFullYear();

    convidade = ano - convidade;

    if (idade.value.trim() == "" || convidade > ano || convidade < 0) {
        window.alert("[ERRO] Dados invalidos");
        return;
    } else if (convidade == 0) {
        resultado.innerHTML = `<br> Você tem ${convidade} anos`
    } else if (convidade <= 1) {
        resultado.innerHTML = `<br> Você tem ${convidade} ano de idade`
    } else {
        resultado.innerHTML = `<br> Você tem ${convidade} anos de idade`
    }

    if(convidade >= 0 && convidade <= 12 ){
        resultado.innerHTML += `<br> Você é uma Criança`
    }else if (convidade <= 17){
        resultado.innerHTML += `<br> Você é Adolescente`
    } else if (convidade <= 59){
        resultado.innerHTML += `<br> Você é Adulto`
    } else{
        resultado.innerHTML += `<br> Você é Idoso`
    }


    if (sexo.value == "Masculino") {
        resultado.innerHTML += "<br> Sexo: Masculino"
    } else {
        resultado.innerHTML += "<br> Sexo: Feminino"
    }

}