<script lang="ts">
	import FadeInObserver from '$lib/utilities/FadeInObserver.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import Multy from '$lib/assets/images/multy.png?enhanced';
	import Travelogue from '$lib/assets/images/travelogue.png?enhanced';
	import Geo from '$lib/assets/images/geovadrouille.png?enhanced';
</script>

<FadeInObserver>
	<div
		id="work"
		class="flex flex-col justify-center lg:justify-between space-y-7 max-w-lg lg:max-w-full m-auto animate scroll-my-24"
	>
		<h2 class="text-5xl lg:text-center">
			Mes dernières <span class="text-mountain-meadow-500">réalisations</span>
		</h2>
		<div class="flex flex-row sm:space-x-4 space-y-6 justify-center items-end flex-wrap">
			<ProjectCard projectImage={Geo} projectName="Géo Vadrouille" />
			<ProjectCard projectImage={Multy} projectName="Multy" />
			<ProjectCard projectImage={Travelogue} projectName="Travelogue" />
		</div>
	</div>
</FadeInObserver>
