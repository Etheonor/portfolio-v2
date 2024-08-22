<script>
	import Project from '$lib/components/project/Project.svelte';
	import geovadrouille from '$lib/assets/images/geovadrouille.png?enhanced';
	import multy from '$lib/assets/images/multy.png?enhanced';
	import travelogue from '$lib/assets/images/travelogue.png?enhanced';
	import OtherProject from '$lib/components/project/otherProject.svelte';
</script>

<div class="flex grow flex-col space-y-44">
	<Project title="Multy" image={multy} url="https://www.multy.me">
		<div class="flex space-y-3 flex-col text-lg">
			<p>
				Multy est un site web de partage de liens. Il permet de regrouper tous ses liens en un seul
				endroit, et de les partager facilement. J'ai créé ce site web de A à Z, de la conception à
				la mise en ligne, en passant par le développement.
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
