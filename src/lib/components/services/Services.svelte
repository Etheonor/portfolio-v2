<script lang="ts">
	import FadeInObserver from '$lib/utilities/FadeInObserver.svelte';
	import ServicesCard from './ServicesCard.svelte';
</script>

<FadeInObserver>
	<div
		id="services"
		class="flex flex-col justify-center lg:justify-between space-y-7 max-w-lg lg:max-w-full m-auto animate scroll-my-24"
	>
		<h2 class="text-5xl lg:text-center">
			Mes <span class="text-mountain-meadow-500">services</span> de développement web
		</h2>
		<div class="flex flex-wrap flex-col space-y-5">
			<FadeInObserver treshold={0.8}
				><ServicesCard>
					<h3 class="text-3xl m-auto">Conception de site web</h3>
					<p class=" max-w-lg m-auto">
						Je conçois avec vous, de A à Z, le site qu’il vous faut. Des premières discussions sur
						son contenu jusqu’à la mise en ligne, je m’assure que toutes les étapes soient les plus
						claires et les plus simples possibles pour vous.
					</p>
				</ServicesCard></FadeInObserver
			>
			<FadeInObserver treshold={0.8}>
				<ServicesCard>
					<h3 class="text-3xl m-auto">Refonte et mise à jour</h3>
					<p class="max-w-lg m-auto">
						Vous avez déjà un site Internet, mais il est trop vieux, plus à votre goût ?
						J’interviens à votre demande pour mettre à jour, techniquement et visuellement, des
						sites ayant besoin d’une seconde jeunesse !
					</p>
				</ServicesCard>
			</FadeInObserver>
			<FadeInObserver treshold={0.8}>
				<ServicesCard>
					<h3 class="text-3xl m-auto">Application mobile</h3>
					<p class=" max-w-lg m-auto">
						Je peux créer des applications mobiles (iOS et Android) permettant de mettre votre
						marque en valeur autrement.
					</p>
				</ServicesCard>
			</FadeInObserver>
		</div>
	</div>
</FadeInObserver>
