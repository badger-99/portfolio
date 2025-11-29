<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Project } from '$lib/data/types';
	import { ellipsify } from '@riadh-adrani/utils';
	import ButtonLink from '$lib/components/ui/custom-components/button-link.svelte';
	import SkillBadge from '$lib/components/ui/custom-components/skill-badge.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import FancyCard from '$lib/components/ui/custom-components/fancy-card.svelte';
	import Icon from 'svelte-awesome';
	import cubes from 'svelte-awesome/icons/cubes';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Muted from '$lib/components/typography/muted.svelte';

	const { project }: { project: Project } = $props();
</script>

<FancyCard color={project.color} class="flex h-full flex-col">
	<CardHeader class="flex w-full flex-col gap-4 space-y-1.5 p-6 pb-0">
		<Avatar.Root class="size-10">
			<Avatar.Fallback>
				<img src={Assets.Unknown} alt={project.name} />
			</Avatar.Fallback>
			<Avatar.Image src={project.logo} />
		</Avatar.Root>
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger
							class="w-full truncate overflow-x-hidden overflow-y-auto text-left text-nowrap text-ellipsis"
						>
							{project.name}
						</Tooltip.Trigger>
						<Tooltip.Content>{project.name}</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</CardTitle>
			{#each project.links as link (link.to)}
				<ButtonLink {link} />
			{/each}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4 p-6">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon data={cubes} />
			<Muted>{project.type}</Muted>
		</Muted>
		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]"
			>{ellipsify(project.shortDescription, 100)}</Muted
		>
		<Separator />
		<Muted>Stack:</Muted>
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each project.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>
	</CardContent>
</FancyCard>
