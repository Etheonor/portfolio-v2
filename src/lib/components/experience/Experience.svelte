<script lang="ts">
	import Image from './Image.svelte';
	import Text from './Text.svelte';
	import Title from './Title.svelte';
	import FadeInObserver from '$lib/utilities/FadeInObserver.svelte';
</script>

<FadeInObserver>
	<div
		class="flex flex-col lg:flex-row justify-center lg:justify-between space-y-7 animate scroll-my-16"
		id="about"
	>
		<Image />
		<div class="max-w-lg flex flex-col space-y-7 m-auto lg:m-0">
			<Title />
			<Text />
		</div>
	</div>
</FadeInObserver>
