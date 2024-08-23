<script lang="ts">
	import FadeInObserver from '$lib/utilities/FadeInObserver.svelte';
</script>

<FadeInObserver>
	<div
		id="contact"
		class="flex flex-col justify-center lg:justify-between space-y-7 max-w-lg lg:max-w-xl m-auto"
	>
		<h2 class="text-5xl font-semibold">
			Parlez-moi de votre <span class="text-mountain-meadow-500">projet</span>
		</h2>
		<p class="max-w-xl m-auto">
			Vous avez en tête une idée de site ? Vous voulez le réaliser en collaboration avec un
			développeur soucieux de votre réussite ? N’hésitez pas à m’envoyer un message via le
			formulaire ci-dessous !
		</p>

		<form data-static-form-name="contact" method="POST">
			<div class="flex flex-col space-y-5 max-w-xl m-auto">
				<div class="flex justify-between flex-wrap space-y-5 lg:space-y-0">
					<div class="flex flex-col space-y-2 flex-wrap">
						<label for="name">Nom</label>
						<input
							type="text"
							id="name"
							name="name"
							class="border border-silver-300 bg-bgColor text-textColor p-1 rounded-md"
						/>
					</div>
					<div class="flex flex-col space-y-2">
						<label for="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							class="border border-silver-300 bg-bgColor text-textColor p-1 rounded-md"
						/>
					</div>
				</div>

				<div class="flex flex-col space-y-2">
					<label for="message">Message</label>
					<textarea
						id="message"
						name="message"
						class="border border-silver-300 bg-bgColor text-textColor p-1 rounded-md"
						rows="5"
					></textarea>
				</div>
				<button
					type="submit"
					class="bg-mountain-meadow-500 text-white py-2 px-4 rounded-md hover:bg-mountain-meadow-600 transition-all ease-in duration-100"
				>
					Envoyer
				</button>
			</div>
		</form>
	</div>
</FadeInObserver>
