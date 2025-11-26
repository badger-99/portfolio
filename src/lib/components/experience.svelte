<script lang="ts">
	import ExperienceCard from '$lib/components/ui/custom-cards/experience-card.svelte';
	import Icon from 'svelte-awesome';
	import ExperienceData from '$lib/data/experience';
	import dotCircleO from 'svelte-awesome/icons/dotCircleO';
	import TitledPage from '$lib/components/titled-page.svelte';

	let experiences = ExperienceData.items;
</script>

<TitledPage title={ExperienceData.title}>
	<div class="flex flex-col gap-6 lg:gap-0">
		{#each experiences as experience, index (experience.slug)}
			<div class={`flex ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
				<div class="flex flex-1 flex-col justify-center lg:py-[50px]">
					<ExperienceCard {experience} />
				</div>
				<div class="hidden h-[full] min-w-0 shrink-0 flex-col items-center lg:flex">
					<div class="w-px flex-1 bg-muted-foreground"></div>
					<div class="my-2 text-foreground">
						<Icon data={dotCircleO} />
					</div>
					<div class="w-px flex-1 bg-muted-foreground"></div>
				</div>
				<div class="hidden min-w-0 flex-1 shrink-0 flex-row lg:flex"></div>
			</div>
		{/each}
	</div>
</TitledPage>
