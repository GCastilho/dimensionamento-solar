import { writable } from 'svelte/store'

/** Store que armazena em qual slide do app estamos */
const { subscribe, set, update } = writable(0)

/** Exporta o subscribe para esse módulo ser uma store */
export { subscribe }

/** Incrementa o contador de slides */
export const next = () => update(v => v + 1)

/** Decrementa o contador de slides */
export const previous = () => update(v => v - 1)

/** Reseta o contador de slides */
export const reset = () => set(0)

subscribe(v => {
	console.log('slide counter updated:', v)
})
