<script>
	import Project from '$lib/components/project/Project.svelte';
	import geovadrouille from '$lib/assets/images/geovadrouille.png?enhanced';
	import multy from '$lib/assets/images/multy.png?enhanced';
	import travelogue from '$lib/assets/images/travelogue.png?enhanced';
	import OtherProject from '$lib/components/project/otherProject.svelte';
</script>

<div class="flex grow flex-col space-y-44">
	<Project title="Géo Vadrouille" image={geovadrouille} url="https://www.geovadrouille.com">
		<div class="flex space-y-3 flex-col text-lg">
			<p>
				Géo Vadrouille est une application mobile de balades ludiques et éducatives. Je suis
				co-fondateur de l'entreprise et suis en charge de l'aspect technique, à savoir la mise en
				place du site web, de son serveur, de la base de données, et de la création de
				l'application.
			</p>
			<p>
				Notre but est de rendre la découverte du patrimoine culturel et naturel accessible à tous et
				de manière ludique. Plusieurs balades sont déjà disponibles sur l'application, et de
				nouvelles sont en cours de création.
			</p>
		</div>
	</Project>
	<div class="flex flex-col space-y-8">
		<h2 class="text-5xl text-center font-medium tracking-wide">Mes autres réalisations</h2>
		<div class="flex flex-row justify-center space-x-8">
			<OtherProject title="Multy" image={multy} slug="multy" />
			<OtherProject title="Travelogue" image={travelogue} slug="travelogue" />
		</div>
	</div>
</div>
