
let message: string = "Hello"
console.log(message)

console.log();

let episodio: number = 4
console.log(`Número do episódio: ${episodio}`)
episodio++;
console.log(`Número do episódio: ${episodio}`)

console.log();

let nomeDoLivro // IGUAL a let nomeDoLivro: any
nomeDoLivro = "OpenGL Programming Guide";
console.log(`Nome do livro é: ${nomeDoLivro}`);
nomeDoLivro = 10;
console.log(`Nome do livro é: ${nomeDoLivro}`);

console.log();

let isMaiorQueZero = function(numero: number) : boolean {
    return numero > 0
}
let num: number = 9066666
console.log(`O número ${num} é maior que zero? ${isMaiorQueZero(num) ? 'SIM' : 'NÃO'}`) 

let chamar = (nome: string) => console.log(`Olá ${nome}!`)
chamar('Saulo')

function inscrementar(numero: number, incremento: number = 1): number {
    return numero + incremento
}
console.log(`inscrementar(4) = ${inscrementar(4)}`)
console.log(`inscrementar(4, 2) = ${inscrementar(4, 2)}`)

//-------------------------------------------------------------------------------------------------

console.log()
console.log()
console.log()

class NaveBase {
    constructor(public propulsor: string) { }
    
    entrarNoEspaco() {
        console.log(`Entrando no espaço com o propulsor ${this.propulsor}`)
    }
}

let nave = new NaveBase('hyperdrive')
nave.entrarNoEspaco()

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

let falcon = new MileniumFalcon()
falcon.entrarNoEspaco()

interface NaveDeCarga {
    quantidadeCompartimento: number
}

let fnBoaParaOTrabalho = ( nave: NaveDeCarga ) => console.log(`Nave boa para o trabalho? ${nave.quantidadeCompartimento > 5 ? 'SIM' : 'NÃO'}`)

fnBoaParaOTrabalho(falcon)

