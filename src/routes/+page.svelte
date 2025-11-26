<script>
	import Home from '$lib/components/home.svelte';
</script>

<main class="mt-14 flex h-fit flex-1 snap-y snap-mandatory flex-col px-2">
	<section id="home">
		<Home />
	</section>

	<section id="projects">
		<div>
			<h1>Projects</h1>
		</div>
	</section>

	<section id="contact">
		<div>
			<h1>Contact Me</h1>
		</div>
	</section>
</main>

<style>
	section {
		min-height: calc(100dvh - 3.5rem);
		display: flex;
		align-items: center;
		justify-content: center;
		/* border: 1px solid; */
		scroll-snap-align: start;
		scroll-margin-top: calc(var(--spacing) * 14) /* 3.5rem = 56px */;
	}
</style>
