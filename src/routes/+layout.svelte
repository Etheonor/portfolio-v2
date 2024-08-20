<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
</script>

<div id="page">
	<Navbar />
	<slot />
</div>

<style>
	#page {
		display: flex;
		padding: 1em;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
