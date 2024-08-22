<!-- HamburgerMenu.svelte -->
<script>
	import { fade, fly } from 'svelte/transition';
	export let closeMenu;
</script>

<button
	in:fly={{ x: 300, duration: 300 }}
	out:fade={{ duration: 200 }}
	on:click={closeMenu}
	class="cursor-default absolute top-0 right-0 transition ease-in-out delay-150 duration-100 w-screen h-screen bg-black bg-opacity-30 backdrop-blur-lg z-50 flex flex-col justify-center items-center space-y-7"
>
	<button
		aria-label="Menu de navigation"
		type="button"
		class="absolute top-5 right-5 p-4"
		on:click={closeMenu}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8 text-silver-300"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	</button>
	<ul class="space-y-7 text-center pt-6 drop-shadow-md">
		<li><a href="/" class="text-xl" on:click={closeMenu}>Accueil</a></li>
		<li><a href="#about" class="text-xl" on:click={closeMenu}>À propos</a></li>
		<li><a href="#work" class="text-xl" on:click={closeMenu}>Réalisations</a></li>
		<li><a href="#services" class="text-xl" on:click={closeMenu}>Services</a></li>
	</ul>
</button>

<style>
	/* Ajoutez un flou de fond pour l'effet "verre" */
	.backdrop-blur-lg {
		backdrop-filter: blur(10px);
	}
</style>
