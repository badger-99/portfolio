<script>
	import TitledPage from '$lib/components/ui/custom-components/titled-page.svelte';
	import ProjectsData from '$lib/data/projects';
	import Projectcard from '$lib/components/ui/custom-components/project-card.svelte';
</script>

<TitledPage title={ProjectsData.title}>
	<div class="grid grid-cols-1 gap-4 max-md:max-w-lg max-md:mx-auto md:grid-cols-2 lg:grid-cols-3">
		{#each ProjectsData.items as item}
			<Projectcard project={item} />
		{/each}
	</div>
</TitledPage>
