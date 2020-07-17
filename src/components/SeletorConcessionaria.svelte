<script>
	import * as dimensionamento from '../stores/dimensionamento'
	import FancyInput from './FancyInput.svelte'

	function setConcessionaria(event) {
		dimensionamento.setConcessionaria(event.target.concessionaria.value)
	}
</script>

<style>
	button {
		display: block;
		width: 100%;
		border-radius: 4px;
		border: none;
		background-color: #0094d9;
		color: #ffffff;
		text-transform: uppercase;
		height: 50px;
		font-size: 14px;
		letter-spacing: .13em;
		text-align: center;
		margin-bottom: 5px;
	}

	.input {
		font-size: larger;
		max-width: 600px;
		margin: auto;
	}
</style>

<h2>Qual é a sua concessionária de energia elétrica?</h2>
<p>Essa informação é importante, mas deixe em branco se você não souber</p>

<div class="input">
	<form on:submit|preventDefault={setConcessionaria}>
		<FancyInput id="concessionaria">
			Insira sua concessionária de energia elétrica
		</FancyInput>

		<button type="submit">Enviar</button>
	</form>
</div>
