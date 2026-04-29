<script>
	import Icon from "./Icon.svelte";

	const { data: immagine } = $props();
</script>

<article>
	<div class="thumbnail">
		<div class="veil"></div>
		<img src={immagine.src} alt="" />
	</div>

	<header>
		<hgroup>
			<h3>{immagine.descrizione}</h3>
		</hgroup>

		<div class="arrow">
			<Icon name="arrow-up-right" />
		</div>
	</header>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);

		@media (hover: hover) {
			&:hover {
				.veil {
					opacity: 1;
				}

				.arrow {
					transform: translateY(0);
				}
			}
		}
	}

	.thumbnail {
		position: relative;
		aspect-ratio: 16/10;
		overflow: hidden;
		border-radius: 16px;

		.veil {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: var(--color-link);
			mix-blend-mode: soft-light;
			transition: opacity 0.75s var(--ease-out-quart);
			opacity: 0;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);
		overflow: clip;
	}

	hgroup {
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}

	.arrow {
		transition: transform 0.75s var(--ease-out-quart);
		transform: translateY(100%);
	}
</style>