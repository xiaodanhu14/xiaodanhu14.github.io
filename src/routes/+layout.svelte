<script>
	import '../app.css';
	import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation />

<main class="main">
	<div class="container">
		<slot />
	</div>
</main>
