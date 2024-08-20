<script>
	import Image from './Image.svelte';
	import Text from './Text.svelte';
	import Title from './Title.svelte';
</script>

<header class="flex flex-col lg:flex-row justify-center lg:justify-between space-y-7">
	<div class="lg:order-2"><Image /></div>

	<div class="max-w-lg flex flex-col space-y-7 m-auto lg:m-0">
		<Title />
		<Text />
	</div>
</header>
