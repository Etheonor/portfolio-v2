<script>
	import ContactButton from './ContactButton.svelte';
	import HamburgerMenu from './HamburgerMenu.svelte';
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';
	import HamburgerImg from '$lib/assets/images/hamburger.svelte';
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<nav class="border-b text-silver-300">
	<!-- Menu mobile -->
	{#if isOpen}
		<HamburgerMenu {closeMenu} />
	{/if}
	<Logo />
	<Menu />
	<ContactButton />
	<button class="lg:hidden" on:click={toggleMenu}>
		<HamburgerImg />
	</button>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 2em;
		margin: -1em -1em 0 -1em;
		position: relative;
	}
</style>
