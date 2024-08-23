<script>
	export let title;
	export let price;
	export let subtitle;
</script>

<div class="bg-cardColor max-w-80 p-5 border-2 border-mountain-meadow-500 rounded-xl">
	<div class="text-center flex flex-col space-y-2 mb-5">
		<h3 class="text-3xl font-semibold">
			{title}
		</h3>
		<hr class="border-mountain-meadow-500" />
		<p class="text-5xl font-semibold">
			{price}
		</p>
		<p class="text-xs font-extralight">
			{subtitle}
		</p>
	</div>

	<slot />
</div>
