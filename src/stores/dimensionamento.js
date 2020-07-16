import { writable } from 'svelte/store'
import { next } from './slide'

const { subscribe, update } = writable({})

/** Exporta o subscribe para esse módulo ser uma store */
export { subscribe }

/**
 * Seta um novo valor para o estado
 * @param {number} estado O ID do estado segundo o IBGE
 */
export function setEstado(estado) {
	update(v => Object.assign(v, { estado }))
}

/**
 * Seta um novo códulo para a cidade
 * @param {number} cidade O código da cidade segundo o IBGE
 */
export function setCidade(cidade) {
	update(v => Object.assign(v, { cidade }))
	next()
}

/**
 * Seta um novo valor para a concessionária
 * @param {string} concessionaria O nome da concessionária
 */
export function setConcessionaria(concessionaria) {
	update(v => Object.assign(v, { concessionaria }))
	next()
}

/**
 * Seta um novo valor para o preço da conta de energia do cliente
 * @param {string} preco O preço da conta
 */
export function setPreco(preco) {
	update(v => Object.assign(v, { preco }))
	next()
}

subscribe(v => {
	console.log('store updated:', v)
})
