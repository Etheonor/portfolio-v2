<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
</script>

<div id="page" class="bg-bgColor text-textColor flex space-y-48">
	<Navbar />
	<slot />
</div>

<style>
	#page {
		padding: 1em;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
