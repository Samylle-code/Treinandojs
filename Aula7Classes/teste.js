class Lutador {
    constructor(nome){
        this.nome = nome;

    }
    get nome(){
        return this.nome;
    }
    set nome(n){
        this.nome = n;
    }

}

class Luta extends Lutador {
    constructor(nome){
        super(nome);
    }
    apresentar(){
        console.log("nome:", nome());
    }

}

console.log("Hello World!");
let fulano = [];
fulano[0] = new Lutador("Madruga");
fulano[1] = new Lutador("Florinda");
fulano[2] = new Lutador("Chaves");
fulano[3] = new Lutador("Girafa");
fulano[4] = new Lutador("Quico");

let vamoLutar = new Luta();
vamoLutar.apresentar(fulano[0]);
