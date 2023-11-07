function player(vitorias, derrotas){
    let saldo = vitorias - derrotas
    let dic = [saldo, vitorias]
    return dic
}
let result = player(25, 90)

let saldo = result[0]
let vitorias = result[1]


if (vitorias <= 10){
    ranking = 'Ferro'
}else if (vitorias > 10 && vitorias <=20){
    ranking = 'Bronze'
}else if (vitorias > 20 && vitorias <=50){
    ranking = 'Prata'
}else if (vitorias > 50 && vitorias <=80){
    ranking = 'Ouro'
}else if (vitorias > 80 && vitorias <=90){
    ranking = 'Diamante'
}else if (vitorias > 90 && vitorias <=100){
    ranking = 'Lendário'
}else if (vitorias > 100){
    ranking = 'Imortal'
}


console.log(`O Herói tem saldo de ${saldo} e está no nível ${ranking}`)