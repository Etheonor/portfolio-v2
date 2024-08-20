<script>
	import Image from './Image.svelte';
	import Text from './Text.svelte';
	import Title from './Title.svelte';
</script>

<header class="flex justify-around flex-wrap">
	<div class="order-1 md:order-2 md:ml-4">
		<Title />
		<Text />
	</div>
	<Image />
</header>
