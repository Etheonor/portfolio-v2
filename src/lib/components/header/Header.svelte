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

	@media (min-width: 800px) {
		header {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
