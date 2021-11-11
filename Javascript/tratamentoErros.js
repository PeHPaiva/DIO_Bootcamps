function validaArray(vetor,numero){
    try {
        if(!vetor || !numero) throw new ReferenceError('Envie os parâmetros')

        if(typeof vetor !== 'object' || typeof numero !== 'number') throw new TypeError('O array deve ser do tipo object e o número deve ser do tipo number.');
    
        if(vetor.length !== numero) throw new RangeError('O tamanho do array é diferente do número.');
    
        if(vetor.length === numero) return true; 
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log(`${error.name}: ${error.message}`)
        }
        if(error instanceof TypeError){
            console.log(`${error.name}: ${error.message}`)
        }
        if(error instanceof RangeError){
            console.log(`${error.name}: ${error.message}`)
        }
    }   
}
 console.log(validaArray(5,5))