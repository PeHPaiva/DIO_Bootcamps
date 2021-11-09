function palindromo(texto){
    let arr = [];
    let saida = [];
    let saida1;
    arr = texto.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != " ") saida.push(arr[i]);
    }
    saida1 = saida.join("");
    return saida1 === saida.reverse().join("");      
}

console.log(palindromo(("roma me tem amor")))