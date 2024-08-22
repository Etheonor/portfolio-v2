<script>
	export let title;
	export let image;
	export let url;
</script>

<div class="flex flex-col space-y-4 max-w-4xl mx-auto">
	<h1 class="text-center text-4xl lg:text-7xl font-bold mb-4">
		{title}
	</h1>
	<enhanced:img src={image} alt={title} class=" rounded-sm" />
	<div class="m-auto max-w-full"><slot /></div>

	<a
		target="_blank"
		href={url}
		class=" bg-mountain-meadow-500 w-fit px-5 py-1 hover:bg-mountain-meadow-700 transition m-auto rounded-sm text-2xl font-bold text-center tracking-wider"
		>Voir le projet
	</a>
</div>
