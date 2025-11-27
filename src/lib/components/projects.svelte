<script>
	import TitledPage from '$lib/components/titled-page.svelte';
	import H1 from '$lib/components/typography/h1.svelte';
	import ProjectsData from '$lib/data/projects';
	import Projectcard from './ui/custom-cards/project-card.svelte';
</script>

<TitledPage title={ProjectsData.title}>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each ProjectsData.items as item}
		<Projectcard project={item} />
		{/each}
	</div>
</TitledPage>
