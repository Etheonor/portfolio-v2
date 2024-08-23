<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Experience from '$lib/components/experience/Experience.svelte';
	import WorkWithMe from '$lib/components/workWithMe/WorkWithMe.svelte';
	import Vision from '$lib/components/vision/Vision.svelte';
	import LastWork from '$lib/components/lastWork/LastWork.svelte';
	import Services from '$lib/components/services/Services.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import type { ActionData } from './$types';
	import ContactPopUp from '$lib/components/contact/ContactPopUp.svelte';
	import OgData from '$lib/components/ogData.svelte';
	export let form: ActionData;
	let displayMessage = true;

	function handleClose() {
		displayMessage = false;
	}
</script>

<svelte:head>
	<title>Michaël BREYTON - Portfolio</title>
	<meta
		name="description"
		content="Bienvenue sur mon portfolio ! N'hésitez pas à me contacter si vous voulez réaliser un site web avec moi."
	/>
	<meta name="keywords" content="Michaël Breyton, portfolio, freelance, webdesign" />
	<meta name="author" content="Michaël Breyton" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<OgData />
</svelte:head>

{#if form?.mailSent && displayMessage}
	<ContactPopUp on:close={handleClose} />
{/if}

<div class="flex flex-col max-w-[1024px] w-full mx-auto space-y-36 lg:space-y-48 font-light">
	<Header />
	<Experience />
	<WorkWithMe />
	<Vision />
	<LastWork />
	<Services />
	<Contact />
</div>
