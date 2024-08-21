<script>
	export let projectName;
	export let projectImage;
</script>

<div class="h-96 w-80 flex flex-col justify-top align-middle space-y-3">
	<enhanced:img src={projectImage} alt={projectName} class="border border-silver-300 rounded-md" />

	<h3 class="text-center text-lg font-medium">{projectName}</h3>
</div>
