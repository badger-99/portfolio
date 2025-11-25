<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import type { Skill } from '$lib/data/types';

	const { skill }: { skill: Skill } = $props();
</script>

<Tooltip.Provider delayDuration={100}>
  <Tooltip.Root>

    <Tooltip.Trigger class="group">
      <div>
        <Button size="icon" variant="outline">
          <img
					class="size-[18px] grayscale-[0.75] group-hover:grayscale-0"
					src={skill.logo}
					alt={skill.name}
          />
        </Button>
      </div>
    </Tooltip.Trigger>
    <Tooltip.Content>{skill.name}</Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
