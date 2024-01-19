class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atack(tipo) {
        if (tipo == "mago") {
            let tipoAtack = "magia";
            console.log(`O ${tipo} atacou usando ${tipoAtack}.`);
        } else if (tipo == "guerreiro") {
            let tipoAtack = "espada";
            console.log(`O ${tipo} atacou usando ${tipoAtack}.`);
        } else if (tipo == "monge") {
            let tipoAtack = "artes marciais";
            console.log(`O ${tipo} atacou usando ${tipoAtack}.`);
        } else if (tipo == "ninja") {
            let tipoAtack = "shuriken";
            console.log(`O ${tipo} atacou usando ${tipoAtack}.`); 
        } else console.log("Digite um dos quatro tipos de classe: mago, guerreiro, monge ou ninja");
    }
}

let hero1 = new hero("Victor", 20, "ninja");
let hero2 = new hero("Victor", 21, "guerreiro");
let hero3 = new hero("Victor", 22, "monge");
let hero4 = new hero("Victor", 23, "mago");

console.log(hero1, hero2, hero3, hero4)

hero1.atack("ninja");
hero2.atack("guerreiro");
hero3.atack("monge");
hero4.atack("mago");