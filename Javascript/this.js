const pessoa1 = {
    nome:"João",
    idade:35
};

const pessoa2 = {
    nome:"Bob",
    idade:20
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

console.log(calculaIdade.call(pessoa2, 15));

console.log(calculaIdade.apply(pessoa1, [20]));