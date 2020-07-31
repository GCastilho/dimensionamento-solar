<script>
	import { setDistribuidora, getDistribuidora, getEstado } from '../stores/dimensionamento'

	const { distribuidoras } = getEstado()
	let distribuidora = getDistribuidora()
</script>

<style>
	form {
		font-size: larger;
		max-width: 600px;
		margin: auto;
	}

	select {
		display: block;
		width: 100%;
	}

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
</style>

<h2>Qual é a sua concessionária de energia elétrica?</h2>
<p>Essa informação é importante, mas deixe em branco se você não souber</p>

<form on:submit|preventDefault={setDistribuidora(distribuidora)}>
	<select bind:value={distribuidora}>
		<option value=""></option>
		{#each distribuidoras as distribuidora}
			<option value={distribuidora}>{distribuidora}</option>
		{/each}
	</select>

	<button type="submit">Enviar</button>
</form>
