var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Hello";
console.log(message);
console.log();
var episodio = 4;
console.log("N\u00FAmero do epis\u00F3dio: " + episodio);
episodio++;
console.log("N\u00FAmero do epis\u00F3dio: " + episodio);
console.log();
var nomeDoLivro; // IGUAL a let nomeDoLivro: any
nomeDoLivro = "OpenGL Programming Guide";
console.log("Nome do livro \u00E9: " + nomeDoLivro);
nomeDoLivro = 10;
console.log("Nome do livro \u00E9: " + nomeDoLivro);
console.log();
var isMaiorQueZero = function (numero) {
    return numero > 0;
};
var num = 9066666;
console.log("O n\u00FAmero " + num + " \u00E9 maior que zero? " + (isMaiorQueZero(num) ? 'SIM' : 'NÃO'));
var chamar = function (nome) { return console.log("Ol\u00E1 " + nome + "!"); };
chamar('Saulo');
function inscrementar(numero, incremento) {
    if (incremento === void 0) { incremento = 1; }
    return numero + incremento;
}
console.log("inscrementar(4) = " + inscrementar(4));
console.log("inscrementar(4, 2) = " + inscrementar(4, 2));
//-------------------------------------------------------------------------------------------------
console.log();
console.log();
console.log();
var NaveBase = /** @class */ (function () {
    function NaveBase(propulsor) {
        this.propulsor = propulsor;
    }
    NaveBase.prototype.entrarNoEspaco = function () {
        console.log("Entrando no espa\u00E7o com o propulsor " + this.propulsor);
    };
    return NaveBase;
}());
var nave = new NaveBase('hyperdrive');
nave.entrarNoEspaco();
var MileniumFalcon = /** @class */ (function (_super) {
    __extends(MileniumFalcon, _super);
    function MileniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.quantidadeCompartimento = 10;
        return _this;
    }
    MileniumFalcon.prototype.entrarNoEspaco = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.entrarNoEspaco.call(this);
        }
        else {
            console.log("Falha ao entrar no espa\u00E7o.");
        }
    };
    return MileniumFalcon;
}(NaveBase));
var falcon = new MileniumFalcon();
falcon.entrarNoEspaco();
var fnBoaParaOTrabalho = function (nave) { return console.log("Nave boa para o trabalho? " + (nave.quantidadeCompartimento > 5 ? 'SIM' : 'NÃO')); };
fnBoaParaOTrabalho(falcon);
