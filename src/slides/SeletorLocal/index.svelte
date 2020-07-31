<script>
	import { fade } from 'svelte/transition'
	import * as dimensionamento from '../../stores/dimensionamento'
	import Mapa from './mapa.svelte'
	import SeletorCidade from './SeletorCidade.svelte'
</script>

<style>
	.seletor-local > div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.seletor-local > div > div {
		margin-left: 15px;
		margin-right: 15px;
	}
</style>

<div class="seletor-local" transition:fade>
	<h1>Olá! Bem-vindo(a) ao simulador do Canal Solar</h1>
	<p>Nós vamos te ajudar a economizar na sua conta de energia. Nossa ferramenta gratuita vai analisar sua conta de energia e dimensionar o sistema de energia solar ideal para você.</p>
	<div>
		<div>
			<h2>Qual o seu estado?</h2>
			<Mapa on:click="{event => dimensionamento.setEstado(event.detail)}" />
		</div>
		{#if $dimensionamento.estado}
			<div>
				<SeletorCidade />
			</div>
		{/if}
	</div>
</div>
