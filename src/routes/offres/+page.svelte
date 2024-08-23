<script>
	import Design from '$lib/assets/images/offres/design.png?enhanced';
	import Dev from '$lib/assets/images/offres/dev.png?enhanced';
	import Security from '$lib/assets/images/offres/security.png?enhanced';
	import Server from '$lib/assets/images/offres/server.png?enhanced';
	import Card from '$lib/components/offers/Card.svelte';
	import Service from '$lib/components/offers/Service.svelte';
</script>

<div class="flex grow flex-col mx-auto tracking-wider space-y-20 max-w-5xl mt-0">
	<div class="flex flex-col space-y-4">
		<enhanced:img src={Dev} alt="Design" class="m-auto" />
		<h1 class="text-center font-bold text-6xl">Mes offres</h1>
		<p class="max-w-3xl m-auto font-light">
			Je tiens à être totalement transparent sur les tarifs de mes prestations. Une réalisation
			complexe, avec des fonctionnalités uniques, demandera forcément un devis spécifique.
			Néanmoins, les besoins de la majorité des clients sont simples et permettent d’anticiper les
			coûts.
		</p>
	</div>
	<div class="flex flex-col space-y-2">
		<div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 m-auto">
			<Card title="Basique" price="900€ TTC" subtitle="+9€/mois de frais de gestion">
				<ul class="list-disc font-light p-5 flex flex-col space-y-5">
					<li>1 page principale</li>
					<li>Formulaire de contact</li>
					<li>Édition de contenu illimitée pendant un an</li>
				</ul>
			</Card>
			<Card title="Complète" price="1950€ TTC" subtitle="+15€/mois de frais de gestion">
				<ul class="list-disc font-light p-5 flex flex-col space-y-5">
					<li>Tout le contenu de l’offre basique</li>
					<li>5 pages uniques</li>
					<li>Édition du site via un CMS*</li>
				</ul>
			</Card>
			<Card title="Abonnement" price="150€/Mois" subtitle="Minimum 12 mois">
				<ul class="list-disc font-light p-5 flex flex-col space-y-5">
					<li>Equivalent de l’offre complète</li>
					<li>Ajout de pages illimité</li>
				</ul>
			</Card>
		</div>
		<p class="max-w-sm m-auto lg:m-0 text-xs lg:max-w-4xl font-extralight">
			* Un CMS est un outil vous permettant d’éditer vous-même certaines parties de votre site web.
			Vous serez donc autonome sur votre contenu !
		</p>
	</div>
	<div class="flex flex-col space-y-10">
		<h2 class="text-3xl font-bold text-center">Services inclus dans toutes les offres</h2>
		<div class="flex justify-evenly flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
			<Service title="Hébergement du site" img={Server} />
			<Service title="Design unique" img={Design} />
			<Service title="Mises à jour de sécurité" img={Security} />
		</div>
	</div>
	<div class="max-w-3xl m-auto flex space-y-3 flex-col font-light">
		<p>
			Tarif unique ou abonnement : vous avez le choix ! L’abonnement vous permet un investissement
			initial très faible et comprend une offre tout-en-un (site et frais de gestion). Les offres
			basique et complète demandent un investissement initial plus important, mais les coûts
			mensuels sont ensuite moindres.
		</p>
		<p>
			Intéressé par une prestation ? N’hésite pas à me contacter via le <a
				href="/#contact"
				class="text-mountain-meadow-200 underline hover:text-mountain-meadow-500 transition"
				>formulaire dédié !</a
			>
		</p>
	</div>
</div>
