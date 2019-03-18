import { NaveBase, NaveDeCarga } from "./naves-base";

class MileniumFalcon extends NaveBase implements NaveDeCarga {
    
    quantidadeCompartimento: number;
    
    constructor() {
        super('hyperdrive');
        this.quantidadeCompartimento = 10;
    }
    
    entrarNoEspaco() {
        if (Math.random() >= 0.5) {
            super.entrarNoEspaco()
        } else {
            console.log(`Falha ao entrar no espaço.`)
        }
    }
}

export { MileniumFalcon }
