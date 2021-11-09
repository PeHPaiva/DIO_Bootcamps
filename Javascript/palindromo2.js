function palindromo(texto){
    let caracteres = [' ', ',','.','?','!'];
    let arr = texto.split("");
    let saida = [];
    let saida1;
    for(let i = 0; i < arr.length; i++){
        if(caracteres.includes(arr[i])) continue;
        else saida.push(arr[i]);
    }
    console.log(saida);
    saida1 = saida.join("");
    return saida1 === saida.reverse().join("");      
}

console.log(palindromo(("jogue bola")))