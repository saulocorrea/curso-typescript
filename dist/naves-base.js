"use strict";
exports.__esModule = true;
var NaveBase = /** @class */ (function () {
    function NaveBase(propulsor) {
        this.propulsor = propulsor;
    }
    NaveBase.prototype.entrarNoEspaco = function () {
        console.log("Entrando no espa\u00E7o com o propulsor " + this.propulsor);
    };
    return NaveBase;
}());
exports.NaveBase = NaveBase;
