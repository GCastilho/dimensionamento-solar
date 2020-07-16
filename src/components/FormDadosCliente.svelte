<script>
	import cliente from '../stores/cliente'
	import { next } from '../stores/slide'
	import FancyInput from './FancyInput.svelte'

	function handleSubmit(event) {
		$cliente = {
			name: event.target.name.value,
			email: event.target.email.value,
			telefone: event.target.telefone.value
		}
		next()
	}
</script>

<style>
	form {
		max-width: 500px;
		margin: 0 auto;
		border: 1px solid blue;
		padding: 20px;
		border-radius: 6px;
		box-shadow: 0px 5px 50px 0px rgba(18, 89, 93, 0.15);
	}

	button {
		display: block;
		width: 100%;
		border-radius: 4px;
		border: none;
		background-color: #133980;
		color: #ffffff;
		text-transform: uppercase;
		height: 50px;
		line-height: 50px;
		font-size: 14px;
		letter-spacing: .13em;
		text-align: center;
		margin-bottom: 5px;
	}
</style>

<h2>Parabéns! Você está a poucos passos de saber como economizar energia</h2>
<form on:submit|preventDefault={handleSubmit}>
	<h3>Por favor digite abaixo o seu email e o seu telefone</h3>
	<p>
		Após apertar o botão "Enviar" você vai visualizar o relatório produzido
		pelo simulador aqui na tela e vai receber no seu email uma cópia deste
		relatório e um guia sobre instalação de energia solar com tudo o que você
		precisa saber para contratar uma empresa de energia solar
		com toda a segurança!
	</p>

	<FancyInput required type="text" id="name">Informe seu nome</FancyInput>
	<FancyInput required type="email" id="email">Informe seu email</FancyInput>
	<FancyInput required type="tel" id="telefone">Informe seu telefone</FancyInput>

	<button type="submit">Enviar</button>
</form>
