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
		class="border-2 px-4 py-1 rounded-full border-mountain-meadow-500 lg:flex hidden hover:bg-mountain-meadow-500
     hover:text-white transition-all ease-in duration-100 w-fit m-auto tracking-wider text-xl"
		>Voir le projet
	</a>
</div>
