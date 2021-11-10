class ContaBancaria{
   constructor(agencia,numero,tipo,saldo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
   }
  get saldo(){
      return this._saldo;
  }
  set saldo(valor){
      this._saldo = valor;
  }
  sacar(valor){
      if(this_saldo > valor) {
        this._saldo -= valor;
        return 'Operação realizada com sucesso';
      } else return 'Saldo Insuficiente';   
  }
  depositar(valor){
      this._saldo += valor;
      return this._saldo;
  } 
}

class ContaCorrente extends ContaBancaria{
    constructor(cartaoCredito){
        super()
    }
}