let nomeHeroi = prompt("Digite o nome do herói:");
let qtdExperiencia = Number(prompt("Digite a quantidade de experiência (XP):"));
var nivel;
switch (qtdExperiencia) {
    case (qtdExperiencia < 1000):
        nivel = "Ferro";
        break;
    case (qtdExperiencia >= 1001 && qtdExperiencia < 2000):
        nivel = "Bronze";
        break;
    case (qtdExperiencia >= 2001 && qtdExperiencia < 5000):
        nivel = "Prata";
        break;
    case (qtdExperiencia >= 5001 && qtdExperiencia < 7000):
        nivel = "Ouro";
        break;
    case (qtdExperiencia >= 7001 && qtdExperiencia < 8000):
        nivel = "Platina";
        break;
    case (qtdExperiencia >= 8001 && qtdExperiencia < 9000):
        nivel = "Ascendente";
        break;
    case (qtdExperiencia >= 9001 && qtdExperiencia < 10000):
        nivel = "Imortal";
        break;
    case (qtdExperiencia >= 10001):
        nivel = "Radiante";
        break;

}
console.log("O herói " + nomeHeroi + "está no nível de " + nivel);
