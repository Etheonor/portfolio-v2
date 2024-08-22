<!-- ContactPopUp.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function closePopup() {
		dispatch('close');
	}
</script>

<div
	class="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
>
	<div class="bg-silver-100 p-5 rounded-lg text-black shadow-lg">
		<h2 class="text-2xl text-center mb-2">Message envoyé !</h2>
		<p class="font-light text-center">
			Merci de m'avoir contacté, je vous répondrai dans les plus brefs délais
		</p>
		<button
			class="w-full mt-5 border border-mountain-meadow-500 text-mountain-meadow-500 py-2 px-4 rounded-md hover:bg-mountain-meadow-500 hover:text-white transition-all ease-in duration-100"
			on:click={closePopup}
		>
			Fermer
		</button>
	</div>
</div>
