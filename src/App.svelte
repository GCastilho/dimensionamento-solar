<script>
	import { fade } from 'svelte/transition'
	import * as slide from './stores/slide'
	import BoasVindas from './components/SeletorLocal/index.svelte'
	import SeletorConcessionaria from './components/SeletorConcessionaria.svelte'
	import SeletorPreco from './components/SeletorPreco.svelte'
	import FormDadosCliente from './components/FormDadosCliente.svelte'
	import Resultado from './components/Resultado.svelte'

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

<button class:hidden={!$slide} on:click="{slide.previous}">&lt;</button>
<div>
	<svelte:component this={slides[$slide]} />
</div>
