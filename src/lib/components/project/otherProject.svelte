<script>
	export let title;
	export let image;
	export let slug;
</script>

<div class="flex flex-col space-y-4 max-w-sm">
	<enhanced:img src={image} alt={title} class=" rounded-sm" />
	<a
		href={'/' + slug}
		class="text-2xl text-center tracking-wider text-mountain-meadow-300 hover:text-mountain-meadow-500 transition"
	>
		{title}
	</a>
</div>
