<script>
	import Header from '$lib/components/header/Header.svelte';
	import Experience from '$lib/components/experience/Experience.svelte';
	import WorkWithMe from '$lib/components/workWithMe/WorkWithMe.svelte';
	import Vision from '$lib/components/vision/Vision.svelte';
	import LastWork from '$lib/components/lastWork/LastWork.svelte';
	import Services from '$lib/components/services/Services.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
</script>

<div class="flex flex-col max-w-[1024px] w-full mx-auto space-y-36 lg:space-y-48">
	<Header />
	<Experience />
	<WorkWithMe />
	<Vision />
	<LastWork />
	<Services />
	<Contact />
</div>
