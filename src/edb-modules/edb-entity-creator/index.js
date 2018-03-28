'use strict'

import Sorteio from './../edb-sorteio'

export default {
  nomes: [
    'Gabriel',
    'Daniel',
    'Rafael',
    'Samuel',
    'Miguel',
    'Joel',
    'Marcel',
    'Paranael',
    'Noel'
  ],
  sobrenomes: [
    'Silva',
    'Sauro',
    'Diniz',
    'Lins'
  ],
  criar () {
    return {
      nome: this.nomes[Sorteio.limite(this.nomes.length) - 1],
      sobrenome: this.sobrenomes[Sorteio.limite(this.sobrenomes.length) - 1],
      idade: Sorteio.limite(90)
    }
  }
}
