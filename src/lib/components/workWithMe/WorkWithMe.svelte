<script lang="ts">
	import FadeInObserver from '$lib/utilities/FadeInObserver.svelte';
</script>

<FadeInObserver>
	<div
		class="flex flex-col justify-center lg:justify-between space-y-7 max-w-lg lg:max-w-full m-auto animate"
	>
		<h2 class="text-5xl lg:text-center font-semibold">
			Pourquoi <span class="text-mountain-meadow-500">travailler</span> avec moi ?
		</h2>
		<div class="flex flex-col space-y-4">
			<p class="lg:text-lg">
				Chaque projet est unique, avec ses propres besoins et objectifs. C'est pourquoi je propose
				des solutions sur mesure, en utilisant des technologies modernes qui garantissent des
				performances optimales et une sécurité renforcée. Mon approche vise à créer des sites
				rapides, stables et parfaitement adaptés aux exigences de mes clients.
			</p>

			<p class="lg:text-lg">
				L'optimisation est un aspect central de mon travail. <a
					href="https://pagespeed.web.dev/"
					target="_blank"
					class="text-mountain-meadow-200 underline font-medium hover:text-mountain-meadow-500 transition"
				>
					Google PageSpeed</a
				>, par exemple, est un outil précieux pour évaluer les performances d'un site. Je vous
				invite à tester ce portfolio et à explorer mes autres réalisations pour voir concrètement
				les résultats que l'on peut obtenir. Si vous avez déjà un site en ligne, je suis à votre
				disposition pour l'analyser et identifier les pistes d'amélioration possibles !
			</p>
		</div>
	</div>
</FadeInObserver>
