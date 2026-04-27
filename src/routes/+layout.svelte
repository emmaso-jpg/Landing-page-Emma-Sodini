<script>
	import favicon from '$lib/assets/favicon.svg';

	import "$lib/styles/reset.css";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!--Futura font!-->
	<link rel="stylesheet" href="https://use.typekit.net" />
	<link rel="stylesheet" href="https://use.typekit.net/gxk4urz.css">

	<!--EB Garamond font-->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}
