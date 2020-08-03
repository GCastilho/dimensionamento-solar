<script>
	import Chart from 'svelte-frappe-charts'

	let data = {
		labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		datasets: [
			{
				values: [10, 12, 3, 9, 8, 15, 9, 2, 7, 2, 8, 7]
			}
		]
	}
</script>

<style>
	div {
		max-width: 600px;
		margin: auto;
		border: 1px solid blue;
		border-radius: 10px;
		box-shadow: 0px 5px 50px 0px rgba(18, 89, 93, 0.15);
	}
</style>

<div>
	<h2>Resultado</h2>
	<h3>
		Recomendamos para você um sistema de energia solar com as
		seguintes características básicas
	</h3>
	<p>
		Produção mensal: xxxxxxx kWh/mês<br>
		Potência instalada: XXXXXX kWp<br>
		Quantidade aproximada de painéis solares: XX<br>
		Número aproximado de inversores: XX<br>
		<br>
		Economia anual: R$ xxxxxxxxx<br>
		Retorno do investimento: XX anos<br>
		Área mínima XX m²
	</p>
</div>

<Chart data={data} type="bar" />
