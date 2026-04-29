import Immagini from "$lib/content/immagini";

export const load = () => {
	return { categorie: Immagini.byCategoria() };
}
