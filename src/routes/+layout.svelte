<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<div id="page" class="bg-bgColor text-textColor space-y-48 flex">
	<div class="sticky top-0 z-50 bg-bgColor"><Navbar /></div>
	<slot />
	<Footer />
</div>

<style>
	#page {
		padding: 1em;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
