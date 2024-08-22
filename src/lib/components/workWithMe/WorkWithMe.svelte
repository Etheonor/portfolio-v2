<script lang="ts">
	import FadeInObserver from '$lib/utilities/FadeInObserver.svelte';
</script>

<FadeInObserver>
	<div
		class="flex flex-col justify-center lg:justify-between space-y-7 max-w-lg lg:max-w-full m-auto animate"
	>
		<h2 class="text-5xl lg:text-center">
			Pourquoi <span class="text-mountain-meadow-500">travailler</span> avec moi ?
		</h2>
		<div class="flex flex-col space-y-4">
			<p class="lg:text-lg">
				Chaque client est unique, ainsi que ses besoins. La plupart des agences web vont vous
				proposer un site réalisé avec Wordpress ou tout autre générateur de site. En plus de ne pas
				correspondre exactement à vos envies, ces réalisations auront des performances
				catastrophiques, ne seront plus à jour après quelques mois et pourront avoir des failles de
				sécurités critiques.
			</p>
			<p class="lg:text-lg">
				Je travail uniquement avec des technologies modernes, et j’accorde une importance
				particulière à l’optimisation et à la sécurité de vos sites.
			</p>
			<p class="lg:text-lg">
				Google a mis en place un outil pour mesurer les performances des sites internets, <a
					href="https://pagespeed.web.dev/"
					target="_blank"
					class="text-mountain-meadow-200 underline font-medium hover:text-mountain-meadow-500 transition"
					>PageSpeed</a
				>. Vous pouvez tester ce portfolio ainsi que mes autres réalisations. Si vous avez déjà un
				site internet, rentrez son adresse sur PageSpeed, et n’hésitez pas à me contacter par la
				suite !
			</p>
		</div>
	</div>
</FadeInObserver>
