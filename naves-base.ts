
class NaveBase {
    constructor(public propulsor: string) { }
    
    entrarNoEspaco() {
        console.log(`Entrando no espaço com o propulsor ${this.propulsor}`)
    }
}

interface NaveDeCarga {
    quantidadeCompartimento: number
}

export { NaveBase, NaveDeCarga }
