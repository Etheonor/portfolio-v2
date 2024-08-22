<script lang="ts">
	import FadeInObserver from '$lib/utilities/FadeInObserver.svelte';
	import design from '$lib/assets/images/design.png?enhanced';
	import performance from '$lib/assets/images/performance.png?enhanced';
</script>

<FadeInObserver>
	<div
		class="flex flex-col justify-center lg:justify-between space-y-7 max-w-lg lg:max-w-full m-auto animate"
	>
		<h2 class="text-5xl lg:text-center">
			Ma <span class="text-mountain-meadow-500">vision</span> du développement web
		</h2>
		<div class="flex flex-col space-y-4">
			<p class="lg:text-lg">
				Je suis là pour vous aider à mettre en avant votre entreprise sur Internet. Mon travail,
				au-delà de réaliser un site qui saura répondre à vos attentes, c’est de vous faire gagner du
				temps en m’occupant de tout.
			</p>
			<p class="lg:text-lg">
				Achat et gestion du nom de domaine, hébergement du site, maintenance : vous n’aurez plus à
				vous soucier de votre présence en ligne.
			</p>
		</div>
		<div>
			<enhanced:img
				src={design}
				alt="Illustration d'une tablette avec une équerre et un crayon"
				class="m-auto"
			/>
		</div>
		<div class="flex flex-col space-y-4 max-w-2xl m-auto">
			<p class="lg:text-lg">
				Savez-vous que plus de 51 % du trafic Internet en France provient d’un téléphone mobile ?
				C’est un aspect essentiel à prendre en compte lorsque l’on réalise un site Internet.
			</p>
			<p class="lg:text-lg">
				Je m’assure que votre site soit 100 % compatible sur mobile et je conçois pour toutes vos
				pages un design adaptatif, permettant une lecture aussi bien sur un téléphone que sur un
				écran plus grand !
			</p>
		</div>
		<div>
			<enhanced:img src={performance} alt="Illustration d'un compteur de vitesse" class="m-auto" />
		</div>
		<div class="flex flex-col space-y-4 max-w-2xl m-auto">
			<p class="lg:text-lg">
				Un site lent, c’est un site qui déçoit aussi bien les utilisateurs que Google.
			</p>
			<p class="lg:text-lg">
				L’optimisation de votre site fait partie intégrante de ma mission, afin d’offrir une
				expérience de navigation fluide et agréable. Les visiteurs sont peut-être vos futurs
				clients, mettons-les dans de bonnes conditions !
			</p>
		</div>
	</div>
</FadeInObserver>
