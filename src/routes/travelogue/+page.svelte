<script>
	import Project from '$lib/components/project/Project.svelte';
	import geovadrouille from '$lib/assets/images/geovadrouille.png?enhanced';
	import multy from '$lib/assets/images/multy.png?enhanced';
	import travelogue from '$lib/assets/images/travelogue.png?enhanced';
	import OtherProject from '$lib/components/project/otherProject.svelte';
</script>

<div class="flex grow flex-col space-y-44">
	<Project title="Travelogue" image={travelogue} url="https://travelogue.vercel.app/">
		<div class="flex space-y-3 flex-col text-lg">
			<p>
				Travelogue est une application web de partage de carnets de voyage. Elle permet de créer des
				carnets de voyage, de les partager, et de les consulter sur une carte interactive.
			</p>
		</div>
	</Project>
	<div class="flex flex-col space-y-8">
		<h2 class="text-5xl text-center font-medium tracking-wide">Mes autres réalisations</h2>
		<div class="flex flex-row justify-center space-x-8">
			<OtherProject title="Géo Vadrouille" image={geovadrouille} slug="geovadrouille" />
			<OtherProject title="Travelogue" image={travelogue} slug="travelogue" />
		</div>
	</div>
</div>
