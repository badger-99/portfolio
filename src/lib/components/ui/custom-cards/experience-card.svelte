<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Experience } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import SkillBadge from '$lib/components/ui/badge/skill-badge.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge';
	import { CardContent, CardTitle } from '$lib/components/ui/card';
	import FancyCard from '$lib/components/ui/custom-cards/fancy-card.svelte';
	import Icon from 'svelte-awesome';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Muted from '$lib/components/typography/muted.svelte';
	import building from 'svelte-awesome/icons/building';
	import mapMarker from 'svelte-awesome/icons/mapMarker';
	import hourglass from 'svelte-awesome/icons/hourglass';
	import calendarO from 'svelte-awesome/icons/calendarO';
	import clockO from 'svelte-awesome/icons/clockO';

	const { experience }: { experience: Experience } = $props();

	const exactDuration = computeExactDuration(experience.period.from, experience.period.to);

	let from = $derived(getMonthAndYear(experience.period.from));
	let to = $derived(getMonthAndYear(experience.period.to));

	let period = $derived(`${from} - ${to}`);

	let badges = $derived([
		{ label: experience.company, icon: building, tooltip: 'Company' },
		{ label: experience.location, icon: mapMarker, tooltip: 'Location' },
		{ label: experience.contract, icon: hourglass, tooltip: 'Contract Type' }
	] as const);
</script>

<FancyCard color={experience.color}>
	<CardContent class="p-6 flex flex-col gap-8 sm:flex-row">
		<Avatar.Root class='size-10'>
			<Avatar.Fallback>
				<img src={Assets.Unknown} alt={experience.name} />
			</Avatar.Fallback>
			<Avatar.Image class='aspect-square h-full w-full block' src={experience.logo} />
		</Avatar.Root>
		<div class="flex flex-col gap-4">
			<CardTitle>{experience.name}</CardTitle>
			<div class="flex flex-row flex-wrap gap-1">
				{#each badges as badge (badge.icon)}
					<Tooltip.Provider delayDuration={300}>
						<Tooltip.Root>
							<Tooltip.Trigger>
								<Badge variant="secondary" class="flex flex-row items-center gap-1">
									<Icon class='shrink-0' data={badge.icon} />
									<!-- <i class={`shrink-0 ${badge.icon}`}></i> -->
									{badge.label}
								</Badge>
								<Tooltip.Content>{badge.tooltip}</Tooltip.Content>
							</Tooltip.Trigger>
						</Tooltip.Root>
					</Tooltip.Provider>
				{/each}
			</div>
			<Tooltip.Provider delayDuration={300}>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<Muted className="flex flex-row items-center gap-2">
							<Icon class='shrink-0' data={calendarO} />
							<div>{period}</div>
						</Muted>
					</Tooltip.Trigger>
					<Tooltip.Content>Date range</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
			<Tooltip.Provider delayDuration={300}>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<Muted className="flex flex-row items-center gap-2">
							<Icon class='shrink-0' data={clockO} />
							<div>{exactDuration}</div>
						</Muted>
						<Tooltip.Content side="bottom">Exact duration</Tooltip.Content>
					</Tooltip.Trigger>
				</Tooltip.Root>
			</Tooltip.Provider>
			<div class="py-2 text-sm text-muted-foreground">
				{ellipsify(experience.shortDescription, 150)}
			</div>
			<div class="flex flex-row flex-wrap gap-2">
				{#each experience.skills as skill (skill.slug)}
					<SkillBadge {skill} />
				{/each}
			</div>
		</div>
	</CardContent>
</FancyCard>
