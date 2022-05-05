class controleSeuRemoto {
    constructor(){
        this.volume = 50;
        this.ligado = false;
        this.tocando = false;
    }
    getLigado(){
        return this.ligado;
    }
    getTocando(){
        return this.tocando;
    }
    getVolume(){
        return this.volume; 
    }
    setLigado(l){
        this.ligado = l;
    }
    setTocando(t){
        this.tocando = t;
    }
    setVolume(v){
        this.volume = v;
    }
}

class ControlaVolume extends controleSeuRemoto{
    ligar(){
        super.setLigado(true);
        super.setTocando(true);
    }
    desligar(){
        super.setTocando(false);
        super.setLigado(false);
    }
    abrirMenu(){
        console.log(super.getLigado());
        console.log(super.getVolume());
        for (let i = 0; i < super.getVolume(); i = i + 10) {
            console.log("_")
        }
        console.log("Está tocando?", (super.getTocando()));
    }

    fecharMenu(){
        console.log("fechando menu")
    }
    maisVolume(){
        if (super.getLigado(true)){
            super.setVolume(super.getVolume() + 1);
            console.log(super.getVolume());
        }
    }
    menosVolume(){
        if (super.getLigado()){
            super.setVolume(super.getVolume() - 1);
            console.log(super.getVolume());
        }
    }
    ligarMudo(){
        if (super.getLigado(true) == super.getVolume() > 0){
            super.setVolume(0);
            super.setTocando(false);
            console.log(super.getVolume());
        }
    }
    desligarMudo(){
        if (super.getLigado(true) == super.getVolume() == 0){
            super.setVolume(50);
            super.setTocando(true);
            console.log(super.getVolume());
        }
    }
    play(){
        if (super.getLigado(true) & super.getTocando(false)){
            console.log("tocando");
        }
    }
    pause(){
        if (super.getLigado(true) & super.getTocando(true)){
            console.log("pausei");
        }
    }
}
const x = new ControlaVolume();
x.ligar();
x.abrirMenu();