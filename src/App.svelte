<script>
	import { fade } from 'svelte/transition'
	import * as slide from './stores/slide'
	import BoasVindas from './components/SeletorLocal/index.svelte'
	import SeletorConcessionaria from './components/SeletorConcessionaria.svelte'
	import SeletorPreco from './components/SeletorPreco.svelte'
	import FormDadosCliente from './components/FormDadosCliente.svelte'
	import Resultado from './components/Resultado.svelte'

	let fowardable = false
	slide.subscribe(v => {
		fowardable = slide.getSlidesVisited() > v
	})

	const slides = [
		BoasVindas,
		SeletorConcessionaria,
		SeletorPreco,
		FormDadosCliente,
		Resultado
	]
</script>

<style>
	div {
		text-align: center;
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
<div>
	<svelte:component this={slides[$slide]} />
</div>
<button on:click="{slide.next}" disabled={!fowardable}>&gt;</button>
