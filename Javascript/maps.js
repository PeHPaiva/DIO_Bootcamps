const membros = new Map();
membros.set("Pedro","Admin");
membros.set("Luiza","Admin");
membros.set("Gustavo","User");
membros.set("Douglas","User");
membros.set("Natalia","Admin");

function getAdmin(map){
    let saida = [];
    for([nome,funcao] of map){
        if(funcao === "Admin") saida.push(nome)
    }
    return saida;
};

console.log(getAdmin(membros))