const arr = [1,2,3,4,5,6,7,8,9];

console.log(arr.reduce((soma, valor) => soma + valor));

function saldoFinal(array,saldo){
    let valorTotal = array.reduce((soma, valor) => soma + valor);
    return saldo - valorTotal;
};

listaPrecos = [10.50,25.00,17.90,9.65,15.30];

console.log(saldoFinal(listaPrecos,100));