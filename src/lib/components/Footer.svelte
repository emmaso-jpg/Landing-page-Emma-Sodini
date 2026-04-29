<script>
	import logo from "$lib/assets/logorosa.png";
</script>

<footer class="safe-area">
	<p>this project was curated by</p>
	<img src={logo} alt="Logo" />
</footer>

<style>
	footer {
		padding-block: var(--size-6);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--size-3);
		text-align: center;
	}

	p {
		font-size: 20px;
	}

	img {
		height: var(--size-9);
	}
</style>