<script>
	import ContactButton from './ContactButton.svelte';
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';
</script>

<nav>
	<Logo />
	<Menu />
	<ContactButton />
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 2em;
		margin: -1em -1em 0 -1em;
	}
</style>
