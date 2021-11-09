function teste(a,b){
    let r1,r2,r3,soma;
    r1 = a===b ?"são" : "não são";
    soma = a + b;
    r2 = soma>10 ? "maior" : "menor";
    r3 = soma>20 ? "maior" : "menor";
    return`Os números ${a} e ${b} ${r1} iguais.Sua soma é ${soma} que é ${r2} que 10 e ${r3} que 20`;
}
console.log(teste(15,6))