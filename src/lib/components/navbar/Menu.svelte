<script>
	import { page } from '$app/stores';

	// Fonction pour déterminer si on est sur la page d'accueil sans ancre
	$: isHomePage = $page.url.pathname === '/' && !$page.url.hash;
</script>

<ul class="lg:flex space-x-7 hidden">
	<li>
		<a href="/" class="{isHomePage ? 'text-white' : 'text-silver-300'} hover:text-white transition"
			>Accueil</a
		>
	</li>
	<li>
		<a
			href={isHomePage ? '#about' : '/#about'}
			class="{$page.url.hash == '#about'
				? 'text-white'
				: 'text-silver-300'} hover:text-white transition">À propos</a
		>
	</li>
	<li>
		<a
			href={isHomePage ? '#work' : '/#work'}
			class="{$page.url.hash == '#work'
				? 'text-white'
				: 'text-silver-300'} hover:text-white transition">Réalisations</a
		>
	</li>
	<li>
		<a
			href={isHomePage ? '#services' : '/#services'}
			class="{$page.url.hash == '#services'
				? 'text-white'
				: 'text-silver-300'} hover:text-white transition">Services</a
		>
	</li>
	<li>
		<a
			href="/offres"
			class="{$page.url.pathname == '/offres'
				? 'text-white'
				: 'text-silver-300'} hover:text-white transition">Offres</a
		>
	</li>
</ul>
