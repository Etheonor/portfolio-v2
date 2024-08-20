<script>
	import Image from './Image.svelte';
	import Text from './Text.svelte';
	import Title from './Title.svelte';
</script>

<header>
	<div>
		<Title />
		<Text />
	</div>
	<Image />
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}
	header > div {
		order: 0; /* Par défaut, le texte est en deuxième position */
	}
	header > :global(img) {
		order: 0; /* Par défaut, l'image est en première position */
	}

	@media (min-width: 800px) {
		header {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		header > div {
			order: 1; /* Réinitialiser l'ordre pour les écrans plus larges */
		}
		header > div {
			order: 2; /* Par défaut, le texte est en deuxième position */
		}
	}
</style>
