<script>
	import { page } from '$app/stores';
</script>

<ul class="lg:flex space-x-7 hidden">
	<li>
		<a href="/" class={$page.url.hash == '' ? 'text-white' : 'text-silver-300'}>Accueil</a>
	</li>
	<li>
		<a href="#about" class={$page.url.hash == '#about' ? 'text-white' : 'text-silver-300'}
			>À propos</a
		>
	</li>
	<li>
		<a href="#work" class={$page.url.hash == '#work' ? 'text-white' : 'text-silver-300'}
			>Réalisations</a
		>
	</li>
	<li>
		<a href="#services" class={$page.url.hash == '#services' ? 'text-white' : 'text-silver-300'}
			>Services</a
		>
	</li>
</ul>
