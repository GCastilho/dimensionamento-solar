<script>
	import { fade } from 'svelte/transition'
	import * as slide from './stores/slide'
	import BoasVindas from './components/BoasVindas.svelte'
	import SeletorCidade from './components/SeletorCidade.svelte'
	import SeletorConcessionaria from './components/SeletorConcessionaria.svelte'
	import SeletorPreco from './components/SeletorPreco.svelte'
	import FormDadosCliente from './components/FormDadosCliente.svelte'
	import Resultado from './components/Resultado.svelte'

	const scrollIntoView = node => node.scrollIntoView({ behavior: 'smooth' })
	const centerInScreen = node => node.style.marginBottom = `${window.innerHeight / 2}px`
	const slides = [
		BoasVindas,
		SeletorCidade,
		SeletorConcessionaria,
		SeletorPreco,
		FormDadosCliente,
		Resultado
	]
</script>

<style>
	.container {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.container > * {
		margin-bottom: 70px;
	}
</style>

<div class="container" use:centerInScreen>
	<svelte:component this={slides[$slide]} />
</div>
