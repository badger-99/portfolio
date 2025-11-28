<script lang='ts'>
	import TitledPage from '$lib/components/ui/custom-components/titled-page.svelte';
	import Muted from '$lib/components/typography/muted.svelte';
	import FancyCard from '$lib/components/ui/custom-components/fancy-card.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { CardContent, CardTitle } from '$lib/components/ui/card';
	import SkillsData, { groupByCategory } from '$lib/data/skills';

	const groups = groupByCategory('');
</script>

<TitledPage title={SkillsData.title}>
	<div class="flex flex-col gap-14">
		{#each groups as group (group.category.slug)}
			<div class="flex flex-col gap-6">
				<div class="flex flex-row items-center gap-2">
					<Separator data-slot={'horizontal'} class="data-[orientation=horizontal]:w-[50px]" />
					<Muted>{group.category.name}</Muted>
					<Separator data-slot={'horizontal'} class="flex-1" />
				</div>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each group.items as item (item.slug)}
						<FancyCard bgImg={item.logo} color={item.color}>
							<CardContent class='p-6'>
								<CardTitle>{item.name}</CardTitle>
							</CardContent>
						</FancyCard>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</TitledPage>
