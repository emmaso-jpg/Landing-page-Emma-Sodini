<script>
	import Filter from "$lib/components/Filter.svelte";
	import Project from "$lib/components/Project.svelte";

	const { data } = $props();

	let currentCategoria = $state(data.categorie[0].nome);

	let immagini = $derived.by(() => {
		return data.categorie.find(cat => cat.nome === currentCategoria).immagini;
	});
</script>

<section class="safe-area hero">
	<h1>
		Hard and Soft non è una contraddizione.
		È una creatura a due pelli, una cosa che mentre si lascia toccare mostra i
		denti. È il punto in cui la grazia smette di essere innocente, e la durezza
		rinuncia a essere soltanto brutale. Non si tratta di mettere insieme due
		opposti come si affiancano due oggetti su un tavolo; si tratta piuttosto di
		accorgersi che certe immagini nascono già così, con una febbre doppia
		nelle vene: delicate e feroci, remissive solo in apparenza, pronte a cedere e
		invece capaci di resistere.
		L'archivio raccoglie e organizza riferimenti visivi accomunati dalla
		compresenza di qualità formali e simboliche contrastanti, con l'obiettivo
		di mettere a fuoco un'estetica fondata su tensione, ambiguità e coesistenza.
	</h1>
</section>

<nav class="safe-area filters">
	{#each data.categorie as cat}
		<Filter bind:group={currentCategoria} value={cat.nome} />
	{/each}
</nav>

<section class="safe-area projects">
	{#each immagini as img}
		<Project data={img} />
	{/each}
</section>

<style>
	.hero {
    padding-block: var(--size-11);

    h1 {
        font-size: var(--size-7);
        max-width: 35ch;
        font-family: var(--font-secondary);

        @media (max-width: 600px) {
            font-size: var(--size-5);
        }
    }
}

	.filters {
		display: flex;
		align-items: center;
		gap: var(--size-5);
	}

	.projects {
	padding-block: var(--size-7);
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--size-5);

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
}
</style>