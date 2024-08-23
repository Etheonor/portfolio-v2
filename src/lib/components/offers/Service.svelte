<script>
	export let img;
	export let title;
</script>

<div class="flex flex-col space-y-4 flex-1 min-w-0">
	<enhanced:img src={img} alt={title} class="m-auto" />
	<p class="m-auto">
		{title}
	</p>
</div>
