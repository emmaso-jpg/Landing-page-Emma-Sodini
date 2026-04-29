<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
	<Link title="H&S" ref="/" />

	<nav>
		<a class="about" href="#">
			<span class="icon">+</span>
			About
		</a>
		<Link
			title="@hardandsoft"
			ref="https://www.instagram.com/hardandsoft"
		/>
	</nav>
</header>

<style>
	header {
		padding-block: var(--size-6);
		display: flex;
		gap: var(--size-8);
		justify-content: space-between;
		align-items: center;
	}

	nav {
		display: flex;
		gap: var(--size-6);
		align-items: center;
	}

	.about {
		display: inline-flex;
		align-items: center;
		gap: var(--size-1);
		color: inherit;
		text-decoration: none;
		transition: color 0.75s var(--ease-out-quart);

		&:hover {
			color: var(--color-link);

			.icon {
				transform: rotate(-90deg);
			}
		}
	}

	.icon {
		display: inline-block;
		transition: transform 0.5s var(--ease-out-quart);
		font-size: 1.2em;
		line-height: 1;
	}
</style>