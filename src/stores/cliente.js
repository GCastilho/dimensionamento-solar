import { writable } from 'svelte/store'
import { next } from './slide'

/** Store dos dados pessoais do cliente */
const dadosCliente = writable({})

dadosCliente.subscribe(v => {
	if (JSON.stringify(v) == '{}') return
	next()
})

export default dadosCliente
