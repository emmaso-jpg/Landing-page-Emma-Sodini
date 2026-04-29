<script>
	import favicon from '$lib/assets/favicon.svg';

	import "$lib/styles/reset.css";
	import "$lib/styles/tokens.css";
	import "$lib/styles/base.css";
	import "$lib/styles/utilities.css";

	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Jost font -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
</svelte:head>

<Header />

{@render children()}

<Footer />