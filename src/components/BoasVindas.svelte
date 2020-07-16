<script>
	import * as dimensionamento from '../stores/dimensionamento'
	import Mapa from './mapa.svelte'
</script>

<h1>Olá! Bem-vindo(a) ao simulador do Canal Solar</h1>
<p>Nós vamos te ajudar a economizar na sua conta de energia. Nossa ferramenta gratuita vai analisar sua conta de energia e dimensionar o sistema de energia solar ideal para você.</p>
<h2 style="margin-top: 30px;">Qual o seu estado?</h2>
<Mapa on:click="{event => dimensionamento.setEstado(event.detail.id)}" />
