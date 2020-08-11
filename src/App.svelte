<script>
	import { onMount } from 'svelte'
	import * as slide from './stores/slide'
	import BoasVindas from './slides/SeletorLocal/index.svelte'
	import SeletorConcessionaria from './slides/SeletorConcessionaria.svelte'
	import SeletorPreco from './slides/SeletorPreco.svelte'
	import FormDadosCliente from './slides/FormDadosCliente.svelte'
	import Resultado from './slides/Resultado.svelte'

	let div // Referência a div wrapper do slideshow
	const slides = [
		BoasVindas,
		SeletorConcessionaria,
		SeletorPreco,
		FormDadosCliente,
		Resultado
	]

	/**
	 * Resolve depois de um tempo suficiente para o elemento ter sua posição
	 * atualizada
	 */
	function cssUpdateTime() {
		return new Promise(resolve => setTimeout(resolve, 10))
	}

	/** Resolve quando o evento 'transitionend' da div for emitido */
	function transitionend() {
		return new Promise(resolve => {
			function resolveAndCleanup() {
				div.removeEventListener('transitionend', resolveAndCleanup)
				resolve()
			}
			div.addEventListener('transitionend', resolveAndCleanup)
		})
	}

	let slidable = true
	async function slideToTheSide(side) {
		const percentage = side == 'left' ? -110 : 110
		div.style.left = percentage + '%'
		await transitionend()
		slidable = false
		div.style.left = -1 * percentage + '%'
		await cssUpdateTime()
		slidable = true
	}

	let fowardable = false
	let slideCounter = $slide
	onMount(() => {
		slide.subscribe(async v => {
			fowardable = slide.getSlidesVisited() > v
			if (v > slideCounter) {
				await slideToTheSide('left')
			} else if (v < slideCounter) {
				await slideToTheSide('right')
			}
			slideCounter = v
			div.style.left = null
		})
	})
</script>

<style>
	div {
		text-align: center;
		position: relative;
		left: 0;
	}

	.slidable {
		transition: left 0.25s;
	}

	button {
		font-size: 30px;
		background-color: unset;
		border: unset;
		border-radius: 5px;
	}

	button:active {
		background-color: #66ccff10;
	}
</style>

<button on:click="{slide.previous}" class:hidden={!$slide}>&lt;</button>
<div bind:this={div} class:slidable>
	<svelte:component this={slides[slideCounter]} />
</div>
<button
	on:click="{slide.next}"
	class:hidden={$slide + 1 >= slides.length}
	disabled={!fowardable}
>&gt;</button>
