let nome = "Eduardo"
let nivel = "10001"

for (let i = 1; i <= 2; i++) {

    if (i == 1) {        

        if (nivel <= 1000) {
            console.log("O herói de nome " + nome + " está no nível Ferro")
        }
        else if (nivel > 1000 && nivel <= 2000) {
            console.log("O herói de nome " + nome + " está no nível Bronze")
        }
        else if (nivel > 2000 && nivel <= 5000) {
            console.log("O herói de nome " + nome + " está no nível Prata")
        }
        else if (nivel > 5000 && nivel <= 7000) {
            console.log("O herói de nome " + nome + " está no nível Ouro")
        }
        else if (nivel > 7000 && nivel <= 8000) {
            console.log("O herói de nome " + nome + " está no nível Platina")
        }
        else if (nivel > 8000 && nivel <= 9000) {
            console.log("O herói de nome " + nome + " está no nível Ascendente")
        }
        else if (nivel > 9000 && nivel <= 10000) {
            console.log("O herói de nome " + nome + " está no nível Imortal")
        }
        else if (nivel >10000) {
            console.log("O herói de nome " + nome + " está no nível Radiante")
        }
    }

    if (i == 2) {
        console.log("REPETINDO!")
        if (nivel <= 1000) {
            console.log("O herói de nome " + nome + " está no nível Ferro")
        }
        else if (nivel > 1000 && nivel <= 2000) {
            console.log("O herói de nome " + nome + " está no nível Bronze")
        }
        else if (nivel > 2000 && nivel <= 5000) {
            console.log("O herói de nome " + nome + " está no nível Prata")
        }
        else if (nivel > 5000 && nivel <= 7000) {
            console.log("O herói de nome " + nome + " está no nível Ouro")
        }
        else if (nivel > 7000 && nivel <= 8000) {
            console.log("O herói de nome " + nome + " está no nível Platina")
        }
        else if (nivel > 8000 && nivel <= 9000) {
            console.log("O herói de nome " + nome + " está no nível Ascendente")
        }
        else if (nivel > 9000 && nivel <= 10000) {
            console.log("O herói de nome " + nome + " está no nível Imortal")
        }
        else if (nivel >10000) {
            console.log("O herói de nome " + nome + " está no nível Radiante")
        }
    }
}