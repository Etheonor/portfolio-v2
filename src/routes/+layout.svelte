<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="apple-mobile-web-app-title" content="Michaël Breyton" />
	<meta name="application-name" content="Michaël Breyton" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</head>

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
