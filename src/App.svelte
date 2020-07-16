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
	.container {
		text-align: center;
		margin: 0 auto;
	}

	.container > * {
		margin-bottom: 70px;
	}
</style>

<div class="container">
	<svelte:component this={slides[$slide]} />
</div>
