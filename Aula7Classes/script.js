class Lutador {
    constructor(nome, idade, altura, peso, vitorias, derrotas, empates){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.empates = empates;
    }
    get nome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    getNacionalidade(){
        return this.nacionalidade;
    }
    getAltura(){
        return this.altura;
    }

    getPeso(){
        return this.peso;
    }

    getCategoria(){
        return this.categoria;
    }

    getVitorias(){
        return this.vitorias;
    }

    getDerrotas(){
        return this.derrotas;
    }

    getEmpates(){
        return this.empates;
    }
    set nome(n){
        this.nome = n; 
    }

    setIdade(i){
        this.idade = i;
    }

    setNacionalidade(nl){
        this.nacionalidade = nl;
    }    
    setAltura(a){
        this.altura = a;
    }

    setPeso(p){
        this.peso = p;
        this.setCategoria();
    }
    setCategoria(){
       
        if(this.peso < 52.2){
            this.categoria = "inválido";
        } else if (this.peso <= 70.3){
            this.categoria = "Leve";
        } else if(this.peso <= 83.9)
        {
            this.categoria = "médio";
        } else if (this.peso <= 120.2){
            this.categoria = "Pesado";
        } else {
            this.categoria = "Inválido";
        }
        
    }
    setVitorias(v){
        this.vitorias = v;
    }
    setDerrotas(d){
        this.derrotas = d;
    }
    setEmpates(e){
        this.empates = e;
    }

    
}

class Luta extends Lutador {

    apresentar(){
        console.log("nome:", super.nome(), 'idade:', super.getIdade() , "altura:", super.getAltura() , "peso:", super.getPeso(), "categoria:", super.getCategoria(),
        "vitorias:", super.getVitorias(), "derrotas:", super.getDerrotas(), "empates:", super.getEmpates());
    }
    status(){
        console.log("o Lutador:", nome, "vitorias:", vitorias, "derrotas:", derrotas, "empates:", empates);

    }
    ganharLuta(){
        super.setVitorias(super.getVitorias() + 1);
    }
    perderLuta(){
        super.setDerrotas(super.getDerrotas() +1);
    }
    empatarLuta(){
        super.setEmpates(super.getEmpate()+ 1);
    }
}


console.log("Hello World!");
let fulano = [];
fulano[0] = new Lutador("Madruga", 31, 1.75, 78.5, 13, 2, 4);
fulano[1] = new Lutador("Florinda", 31, 1.65, 68.5, 13, 2, 4);
fulano[2] = new Lutador("Chaves", 31, 1.75, 68.5, 13, 2, 4);
fulano[3] = new Lutador("Girafa", 31, 1.85, 68.5, 13, 2, 4);
fulano[4] = new Lutador("Quico", 31, 1.75, 68.5, 13, 2, 4);

let vamoLutar = new Luta();
vamoLutar.apresentar(fulano[0]);
