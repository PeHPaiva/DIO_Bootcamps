function media (){
    let notas = arguments
    let media = 0
    for(let i= 0; i < notas.length; i++){
        media+=notas[i];
    }
    return media / notas.length;
}

console.log(media(10,5,9,10,5,8))