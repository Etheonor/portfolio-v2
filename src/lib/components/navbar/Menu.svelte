<script>
	import { page } from '$app/stores';
</script>

<ul class="lg:flex space-x-7 hidden">
	<li>
		<a
			href="/"
			class="{$page.url.hash == '' ? 'text-white' : 'text-silver-300'} hover:text-white transition"
			>Accueil</a
		>
	</li>
	<li>
		<a
			href="#about"
			class="{$page.url.hash == '#about'
				? 'text-white'
				: 'text-silver-300'} hover:text-white transition">À propos</a
		>
	</li>
	<li>
		<a
			href="#work"
			class="{$page.url.hash == '#work'
				? 'text-white'
				: 'text-silver-300'} hover:text-white transition">Réalisations</a
		>
	</li>
	<li>
		<a
			href="#services"
			class="{$page.url.hash == '#services'
				? 'text-white'
				: 'text-silver-300'} hover:text-white transition">Services</a
		>
	</li>
</ul>
