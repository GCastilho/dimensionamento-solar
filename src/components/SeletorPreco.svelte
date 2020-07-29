<script>
	import { setPreco } from '../stores/dimensionamento'
	import FancyInput from './FancyInput.svelte'

	let unit = 'reais'
	$: inputMessage = unit == 'reais' ?
		'Valor da sua última conta' : 'Quantos kWh quer gerar?'

	function handleSubmit(event) {
		console.log(event.target.ultimaConta.value)
		setPreco(1)
	}
</script>

<style>
	form {
		max-width: 600px;
		margin: auto;
		display: grid;
		grid-template-columns: 8fr 2fr;
		margin-bottom: 20px;
	}

	form > * {
		height: 40px;
		margin-left: 5px;
		margin-top: 5px;
		font-size: larger;
	}

	div {
		margin: auto;
	}

	button {
		min-width: 150px;
		border-radius: 4px;
		border: none;
		background-color: #0094d9;
		color: #ffffff;
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: .13em;
		text-align: center;
		grid-column-start: 1;
		grid-column-end: 3;
		margin: auto;
	}
</style>

<h2>Seu custo atual:</h2>

<p>
	Verificamos nosso banco de dados e percebemos que você paga R$ 1,00/kWh (ou seja, R$1,00 por cada quilowatt-hora consumido na sua residência). Isso é muito dinheiro! Se você tiver sua conta de luz em mãos, verifique se o valor que encontramos em nosso banco de dados está correto. Se você preferir, digite no campo abaixo o valo atualizado com sua última conta de luz.
</p>

<form on:submit|preventDefault={handleSubmit}>
	<FancyInput id="ultimaConta">{inputMessage}</FancyInput>
	<div>
		<input type="radio" id="reais" bind:group={unit} value="reais">
		<label for="reais">R$</label>
		<input type="radio" id="kwh" bind:group={unit} value="kwh">
		<label for="kwh">KWh</label>
	</div>

	<button>Enviar</button>
</form>
