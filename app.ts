import { NaveBase, NaveDeCarga } from "./naves-base";
import { MileniumFalcon } from "./naves-guerra";

import * as _ from 'lodash'

console.log(_.pad("NAVES DE GUERRA", 50, '*'))

let nave = new NaveBase('hyperdrive')
nave.entrarNoEspaco()

let falcon = new MileniumFalcon()
falcon.entrarNoEspaco()

let fnBoaParaOTrabalho = ( nave: NaveDeCarga ) => console.log(`Nave boa para o trabalho? ${nave.quantidadeCompartimento > 5 ? 'SIM' : 'NÃO'}`)

fnBoaParaOTrabalho(falcon)

