<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from 'svelte-awesome';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import type { Link } from '$lib/data/types';

	const { link }: { link: Link } = $props();
</script>

<a href={link.to} target={link.newTab ? '_blank' : undefined}>
	<Tooltip.Provider delayDuration={300}>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button size="icon" variant="outline">
					<Icon data={link.icon} />
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				{link.label}
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
</a>
