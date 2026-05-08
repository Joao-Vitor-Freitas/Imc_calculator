const btnEscreve = document.getElementById("btnAlerta");

btnEscreve.addEventListener("click", () => {

    let peso = parseFloat(document.getElementById("Peso").value);
    let altura = parseFloat(document.getElementById("Altura").value);

    let imc = peso / (altura * altura);

    imc = imc.toFixed(2);

    document.getElementById("IMC").innerHTML = "Seu IMC é " + imc;

    // MOSTRA A TABELA
    document.getElementById("tabela-imc").style.display = "block";

    // REMOVE DESTAQUE ANTIGO
    let linhas = document.querySelectorAll("tbody tr");

    linhas.forEach((linha) => {
        linha.classList.remove("ativo");
    });

    // CLASSIFICAÇÃO

    if (imc < 18.5) {

        document.getElementById("classificacao").innerHTML =
        "<div class='alert alert-primary'>Você está abaixo do peso.</div>";

        document.getElementById("baixo").classList.add("ativo");

    } else if (imc >= 18.5 && imc <= 24.9) {

        document.getElementById("classificacao").innerHTML =
        "<div class='alert alert-success'>Seu peso é normal.</div>";

        document.getElementById("normal").classList.add("ativo");

    } else if (imc >= 25 && imc <= 29.9) {

        document.getElementById("classificacao").innerHTML =
        "<div class='alert alert-warning'>Você está com sobrepeso.</div>";

        document.getElementById("sobrepeso").classList.add("ativo");

    } else if (imc >= 30 && imc <= 34.9) {

        document.getElementById("classificacao").innerHTML =
        "<div class='alert alert-warning'>Você está com Obesidade I.</div>";

        document.getElementById("obesidade1").classList.add("ativo");

    } else if (imc >= 35 && imc <= 39.9) {

        document.getElementById("classificacao").innerHTML =
        "<div class='alert alert-warning'>Você está com Obesidade II.</div>";

        document.getElementById("obesidade2").classList.add("ativo");

    } else if (imc >= 40) {

        document.getElementById("classificacao").innerHTML =
        "<div class='alert alert-danger'>Você está com Obesidade III.</div>";

        document.getElementById("obesidade3").classList.add("ativo");

    } else {

        document.getElementById("IMC").innerHTML =
        "Ocorreu um erro.";
    }

});