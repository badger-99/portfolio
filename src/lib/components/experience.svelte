<script lang="ts">
	import ResponsiveContainer from '$lib/components/responsive-container.svelte';
	import H1 from '$lib/components/typography/h1.svelte';
	import ExperienceCard from '$lib/components/ui/custom-cards/experience-card.svelte';
	import Icon from 'svelte-awesome';
	import ExperienceData from '$lib/data/experience';
	import dotCircleO from 'svelte-awesome/icons/dotCircleO';
	import Title from '$lib/components/title.svelte';

	let experiences = ExperienceData.items;
</script>

<Title title={ExperienceData.title} />
<div class="mt-[50px] flex flex-1 flex-col">
	<ResponsiveContainer className="flex flex-col flex-1 pb-8">
		<H1 className="text-center py-16">{ExperienceData.title}</H1>
		<div class="flex flex-1 flex-col gap-5 px-4">
			<div class="flex flex-col gap-6 lg:gap-0">
				{#each experiences as experience, index (experience.slug)}
					<div class={`flex ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
						<div class="flex flex-1 flex-col justify-center lg:py-[50px]">
							<ExperienceCard {experience} />
						</div>
						<div
							class="hidden h-[full] min-w-0 shrink-0 flex-col items-center lg:flex"

						>
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
		</div>
	</ResponsiveContainer>
</div>
