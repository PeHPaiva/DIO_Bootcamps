class ContaBancaria{
   constructor(agencia,numero,tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
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
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero)
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'conta corrente'
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    cconstructor(agencia,numero){
        super(agencia,numero)
        this.tipo ='conta poupança'
    }
}

class ContaUniversitaria extends ContaBancaria{
    cconstructor(agencia,numero){
        super(agencia,numero)
        this.tipo ='conta universitaria'
    }
    sacar(valor){
        if(this_saldo > valor && valor <= 500){
            this._saldo -= valor;
            return 'Operação realizada com sucesso';
        } else return 'Saldo Insuficiente';
    }
}