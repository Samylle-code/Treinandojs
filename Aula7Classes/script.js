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
    getNome(){
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
    setNome(n){
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
        console.log("nome:", super.getNome(), 'idade:', super.getIdade() , "altura:", super.getAltura() , "peso:", super.getPeso(), "categoria:", super.getCategoria(),
        "vitorias:", super.getVitorias(), "derrotas:", super.getDerrotas(), "empates:", super.getEmpates());
    }
    status(){
        console.log("o Lutador:", nome, "vitorias:", vitorias, "derrotas:", derrotas, "empates:", empates)

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

let novaluta= new Luta([]);
novaluta[0] = new Lutador()