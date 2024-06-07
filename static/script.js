var clicado = 0;
var quantidade = document.getElementById("quantidade").value
var pontos = 0

function sorteando_numeros() {
    fetch('/sortear').then(response => response.text()).then(numero_sorteado => {
        var numero_digitado = document.getElementById("numero").value
        if (numero_sorteado == numero_digitado) {
            pontos+=3
            document.getElementById("alert").innerHTML = "Parabéns, você acertou"
        } else {
            pontos-=1
            document.getElementById("alert").innerHTML = `O número sorteado foi ${numero_sorteado} infelizmente você digitou ${numero_digitado}`
            if (pontos < 0) {
                pontos = 0;
            };
        }
        document.getElementById("numero").value = ""
        atualizarPlacar();
    })
}

function sortear() {
    if (document.getElementById("numero").value < 1 || document.getElementById("numero").value > 10){
        alert("Escolha um número de 1 à 10, por favor!")
        document.getElementById("numero").value = ""        
    } else{
        clicado += 1;
        if (clicado < quantidade) {
            sorteando_numeros()
        }
    
        if (clicado == quantidade) {
            sorteando_numeros()
            const input_element = document.getElementById("numero");
            input_element.hidden = true;
    
            const button_element = document.getElementById("action");
            button_element.remove();

            document.getElementById("desc").innerHTML = ""

            atualizarPlacar()
            
            document.getElementById("score").innerHTML = `Você ganhou o total de: ${pontos} ponto(s)`
        }
        const alert = document.getElementById("alert");
        alert.hidden = false
        
    }
    
}

function atualizarPlacar() {
    const input_element = document.getElementById("numero");
    if(input_element.hidden) {
        document.getElementById("score").innerHTML = `Você ganhou o total de: ${pontos} ponto(s)`;
        const score = document.getElementById("score");
        score.hidden = false
    }
}

