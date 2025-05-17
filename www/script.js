let jogada
let jogadacomputador
let jogos = 0
let vitorias = 0
let derrotas = 0
let empates = 0
function pedra() {
    jogada = "PEDRA"
    jogadacomputador = (Math.random() * (3 - 1) + 1).toFixed()
    jogos = jogos + 1
    document.getElementById("jogos").innerHTML = "Jogos = " + jogos
    document.getElementById("suajogada").innerHTML = "Sua jogada = Pedra"
    
     if(jogadacomputador == 1) {
        document.getElementById('jogada').innerHTML = "Máquina = Pedra"
        document.getElementById('resultado').innerHTML = "EMPATE"
        empates = empates + 1
        document.getElementById("empates").innerHTML = "Empates = " + empates
    } else if(jogadacomputador == 2) {
        document.getElementById('jogada').innerHTML = "Máquina = Papel"
        document.getElementById('resultado').innerHTML = "DERROTA"
        derrotas = derrotas + 1
        document.getElementById("derrotas").innerHTML = "Derrotas = " + derrotas
    } else {
        document.getElementById('jogada').innerHTML = "Máquina = Tesoura"
        document.getElementById('resultado').innerHTML = "VITORIA"
        vitorias = vitorias + 1
        document.getElementById("vitorias").innerHTML = "Vitórias = " + vitorias
    }
}

function papel() {
    jogada = "PAPEL"
    jogadacomputador = (Math.random() * (3 - 1) + 1).toFixed()
    jogos = jogos + 1
    document.getElementById("jogos").innerHTML = "Jogos = " + jogos
    document.getElementById("suajogada").innerHTML = "Sua jogada = Papel"
    
     if(jogadacomputador == 1) {
        document.getElementById('jogada').innerHTML = "Máquina = Pedra"
        document.getElementById('resultado').innerHTML = "VITÓRIA"
        vitorias = vitorias + 1
        document.getElementById("vitorias").innerHTML = "Vitórias = " + vitorias
    } else if(jogadacomputador == 2) {
        document.getElementById('jogada').innerHTML = "Máquina = Papel"
        document.getElementById('resultado').innerHTML = "EMPATE"
        empates = empates + 1
        document.getElementById("empates").innerHTML = "Empates = " + empates
    } else {
        document.getElementById('jogada').innerHTML = "Máquina = Tesoura"
        document.getElementById('resultado').innerHTML = "DERROTA"
        derrotas = derrotas + 1
        document.getElementById("derrotas").innerHTML = "Derrotas = " + derrotas
    }
}

function tesoura() {
    jogada = "TESOURA"
    jogadacomputador = (Math.random() * (3 - 1) + 1).toFixed()
    jogos = jogos + 1
    document.getElementById("jogos").innerHTML = "Jogos = " + jogos
    document.getElementById("suajogada").innerHTML = "Sua jogada = Tesoura"
    
     if(jogadacomputador == 1) {
        document.getElementById('jogada').innerHTML = "Máquina = Pedra"
        document.getElementById('resultado').innerHTML = "DERROTA"
        derrotas = derrotas + 1
        document.getElementById("derrotas").innerHTML = "Derrotas = " + derrotas
    } else if(jogadacomputador == 2) {
        document.getElementById('jogada').innerHTML = "Máquina = Papel"
        document.getElementById('resultado').innerHTML = "VITORIA"
        vitorias = vitorias + 1
        document.getElementById("vitorias").innerHTML = "Vitórias = " + vitorias
    } else {
        document.getElementById('jogada').innerHTML = "Máquina = Tesoura"
        document.getElementById('resultado').innerHTML = "EMPATE"
        
        empates = empates + 1
        document.getElementById("empates").innerHTML = "Empates = " + empates
        
    }
}

function reset() {
    jogos = 0
    vitorias = 0
    derrotas = 0
    empates = 0
    document.getElementById("jogos").innerHTML = "Jogos = "
    document.getElementById("empates").innerHTML = "Empates = "
    document.getElementById("vitorias").innerHTML = "Vitórias = "
    document.getElementById("derrotas").innerHTML = "Derrotas = "
}

function gerarestatisticas() {
    let percentualvit = 0
    let percentualder = 0
    let percentualemp =  0

    percentualvit = ((vitorias/jogos) * 100).toFixed()
    percentualder = ((derrotas/jogos) * 100).toFixed()
    percentualemp = ((empates/jogos) * 100).toFixed()

    document.getElementById("percentualvit").innerHTML = "Porcentual de Vitórias: " + percentualvit + "%"
    document.getElementById("percentualder").innerHTML = "Porcentual de Derrotas: " + percentualder + "%"
    document.getElementById("percentualemp").innerHTML = "Porcentual de Empates: " + percentualemp + "%"
}

