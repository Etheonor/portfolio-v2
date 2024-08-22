<script>
	export let projectName;
	export let projectImage;
	export let slug;
</script>

<div class="w-80 flex flex-col justify-top align-middle space-y-3">
	<enhanced:img src={projectImage} alt={projectName} class=" rounded-sm" />

	<h3 class="text-center text-lg font-medium">
		<a href="/{slug}" class=" max-w-sm text-lg font-bold leading-tight">
			<span class="text-mountain-meadow-200 font-medium hover:text-mountain-meadow-500 transition">
				{projectName}
			</span>
		</a>
	</h3>
</div>
