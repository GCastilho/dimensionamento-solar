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
 * @param {number} cidade O objeto da cidade retornado do IBGE
 */
export function setCidade(cidade) {
	const query = {
		format: 'json',
		country: 'BR',
		state: cidade.microrregiao.mesorregiao.UF.sigla,
		city: cidade.nome
	}
	delete cidade.microrregiao // Não será mais utilizado
	fetch(`https://nominatim.openstreetmap.org/search/?${new URLSearchParams(query).toString()}`)
		.then(res => res.json())
		.then(data => {
			cidade.lat = +data[0].lat
			cidade.lon = +data[0].lon
		})
		.finally(() => {
			update(v => Object.assign(v, { cidade }))
			next()
		})
		// Seta os dados de irradiação da cidade de acordo com o Global Solar Atlas
		.then(() => fetch(`https://api.globalsolaratlas.info/data/lta?loc=${cidade.lat},${cidade.lon}`))
		.then(res => res.json())
		.then(data => {
			cidade.irradiacao = data.annual
			cidade.irradiacao.metadata = {
				timelength: 'annual',
				PVOUT_csi: 'kWh/kW',
				DNI: 'kWh/m²',
				GHI: 'kWh/m²',
				DFI: 'kWh/m²',
				GTI_opta: 'kWh/m²',
				OPTA: '°',
				TEMP: '°C',
				ELE: 'm'
			}
		})
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
