const immagini = [
	{ src: "/foto landing/foto1.png",      categoria: "Incisions", descrizione: "Pain doily" },
	{ src: "/foto landing/foto2.jpg",      categoria: "Incisions", descrizione: "\"The Self-Tormenter\" C. Baudelaire" },
	{ src: "/foto landing/foto3.jpg",      categoria: "Incisions", descrizione: "Crochet gun" },
	{ src: "/foto landing/foto4.jpg",      categoria: "Incisions", descrizione: "Glass rose" },
	{ src: "/foto landing/foto5.jpg",      categoria: "Incisions", descrizione: "Fuck doily" },
	{ src: "/foto landing/foto6.jpg",      categoria: "Incisions", descrizione: "Eye embroidery" },
	{ src: "/foto landing/foto7.jpg",      categoria: "Incisions", descrizione: "Lace flask" },
	{ src: "/foto landing/foto8.jpg",      categoria: "Incisions", descrizione: "Broken porcelain doll head" },
	{ src: "/foto landing/foto9.jpg",      categoria: "Incisions", descrizione: "Consumed silk bow" },
	{ src: "/foto landing/foto10.jpg",     categoria: "Incisions", descrizione: "Harm doily" },
	{ src: "/foto landing/foto11.jpg",     categoria: "Incisions", descrizione: "Particular corset" },
	{ src: "/foto landing/foto12.jpg",     categoria: "Incisions", descrizione: "Hurt doily" },
	{ src: "/foto landing/foto1-inst.jpg", categoria: "Instincts", descrizione: "Poor little deer" },
	{ src: "/foto landing/foto1.pres.jpg", categoria: "Presences", descrizione: "\"Rest Energy\" M. Abramovich" },
	{ src: "/foto landing/foto2-pres.jpg", categoria: "Presences", descrizione: "Violent femmes" },
];

export default class Immagini {
	static byCategoria() {
		const categorie = ["Incisions", "Instincts", "Presences"];
		return categorie.map(cat => ({
			nome: cat,
			immagini: immagini.filter(img => img.categoria === cat)
		}));
	}
}
