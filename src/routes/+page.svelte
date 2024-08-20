<script>
	import Header from '$lib/components/header/Header.svelte';
	import Experience from '$lib/components/experience/Experience.svelte';
</script>

<div class="content">
	<Header />
	<Experience />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12em;
		max-width: 1100px;
		width: 100%;
		margin: 0 auto;
	}
</style>
