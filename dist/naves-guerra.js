"use strict";
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
exports.__esModule = true;
var naves_base_1 = require("./naves-base");
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
}(naves_base_1.NaveBase));
exports.MileniumFalcon = MileniumFalcon;
