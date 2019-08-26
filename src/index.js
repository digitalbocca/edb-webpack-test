'use strict'

// import Sorteio from './edb-modules/edb-sorteio'
import Entity from './edb-modules/edb-entity-creator'
require('./css/style.sass')

console.log('Webpack 4 - Funcionamento Correto')

for (let i = 0; i <= 10; i++) {
  let entity = Entity.criar()
  let div = document.createElement('div')
  let divId = `nameDiv${i}`
  document.getElementById('app').appendChild(div).setAttribute('id', divId)

  let h1 = document.createElement('h1')
  let h1Id = `nameId${i}`
  document.getElementById(divId).appendChild(h1).setAttribute('id', h1Id)
  document.getElementById(h1Id).innerText = `${entity.nome} ${entity.sobrenome}`
}

document.addEventListener('click', element => {
  console.log(element.target.id)
  let estaComparacao = new RegExp('nameID.')
  element.target.id === estaComparacao ? alert(element.target.id) : console.log('false')
})
