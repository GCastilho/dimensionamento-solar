<script>
	import { setPreco } from '../stores/dimensionamento'
	export let ultimaConta

	function handleSubmit(event) {
		ultimaConta = event.target.ultimaConta.value
		setPreco(1)
	}
</script>

<style>
	form > * {
		height: 40px;
		margin-left: 5px;
		margin-top: 5px;
		font-size: larger;
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
	}
</style>

<h2>Seu custo atual:</h2>

<p>
	Verificamos nosso banco de dados e percebemos que você paga R$ 1,00/kWh (ou seja, R$1,00 por cada quilowatt-hora consumido na sua residência). Isso é muito dinheiro! Se você tiver sua conta de luz em mãos, verifique se o valor que encontramos em nosso banco de dados está correto. Se você preferir, digite no campo abaixo o valo atualizado com sua última conta de luz.
</p>

<form on:submit|preventDefault={handleSubmit}>
	<label for="ultimaConta">Valor da sua última conta:</label>
	<input type="text" id="ultimaConta">

	<button>Enviar</button>
</form>
