<script>
	export let projectName;
	export let projectImage;
	import ArrowLink from '$lib/assets/images/arrow-link.svelte';
</script>

<div class="w-80 flex flex-col justify-top align-middle space-y-3">
	<enhanced:img src={projectImage} alt={projectName} class="border border-silver-300 rounded-md" />

	<h3 class="text-center text-lg font-medium">
		<a href="/${projectName}" class=" max-w-sm text-lg font-bold leading-tight">
			<span
				class="text-mountain-meadow-200 underline font-medium hover:text-mountain-meadow-500 transition"
			>
				{projectName}
				<ArrowLink />
			</span>
		</a>
	</h3>
</div>
