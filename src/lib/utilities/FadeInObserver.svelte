<!-- FadeInObserver.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	let observer: IntersectionObserver;
	let target: HTMLElement | null = null;
	let isVisible = false;
	export let treshold = 0.15;
	const dispatch = createEventDispatcher();

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						dispatch('visible', { visible: true });
					} else {
						isVisible = false;
						dispatch('visible', { visible: false });
					}
				});
			},
			{
				threshold: treshold // 20% de la div doit être visible
			}
		);

		if (target) {
			observer.observe(target);
		}

		return () => {
			if (target) {
				observer.unobserve(target);
			}
		};
	});
</script>

<div bind:this={target} style="opacity: {isVisible ? 1 : 0}; transition: opacity 0.9s;">
	<slot />
</div>
