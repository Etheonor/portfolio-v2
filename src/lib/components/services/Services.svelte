<script lang="ts">
	import FadeInObserver from '$lib/utilities/FadeInObserver.svelte';
	import ServicesCard from './ServicesCard.svelte';
	import WebBuilding from '$lib/assets/images/web-building.svelte';
	import WebUpdate from '$lib/assets/images/web-update.svelte';
	import WebHosting from '$lib/assets/images/web-hosting.svelte';
</script>

<FadeInObserver>
	<div
		id="services"
		class="flex flex-col justify-center lg:justify-between space-y-7 max-w-lg lg:max-w-full m-auto animate scroll-my-24"
	>
		<h2 class="text-5xl lg:text-center">
			Mes <span class="text-mountain-meadow-500">services</span> de développement web
		</h2>
		<div
			class="flex flex-wrap flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 m-auto"
		>
			<FadeInObserver treshold={0.8}
				><ServicesCard>
					<div class="mx-auto"><WebBuilding /></div>
					<h3 class="text-xl font-semibold">Conception de site web</h3>
					<p class="text-sm">
						Je conçois avec vous, de A à Z, le site qu’il vous faut. Des premières discussions
						jusqu’à la mise en ligne, je m’assure que toutes les étapes soient les plus claires et
						les plus simples possibles pour vous.
					</p>
				</ServicesCard></FadeInObserver
			>
			<FadeInObserver treshold={0.8}>
				<ServicesCard>
					<div class="mx-auto"><WebUpdate /></div>
					<h3 class="text-xl font-semibold">Refonte et mise à jour</h3>
					<p class="text-sm">
						Vous avez déjà un site Internet, mais il est trop vieux, plus à votre goût ?
						J’interviens à votre demande pour mettre à jour, techniquement et visuellement, des
						sites ayant besoin d’une seconde jeunesse !
					</p>
				</ServicesCard>
			</FadeInObserver>
			<FadeInObserver treshold={0.8}>
				<ServicesCard>
					<div class="mx-auto"><WebHosting /></div>
					<h3 class="text-xl font-semibold">Hébergement web</h3>
					<p class="text-sm">
						Votre site doit être hébergé quelque part ! Je vous propose un hébergement sur mesure,
						adapté à vos besoins, pour que votre site soit toujours en ligne, rapide et sécurisé.
					</p>
				</ServicesCard>
			</FadeInObserver>
		</div>
	</div>
</FadeInObserver>
