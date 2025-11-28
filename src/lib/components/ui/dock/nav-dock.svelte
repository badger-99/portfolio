<script lang='ts'>
  import NavBarData from '$lib/data/nav-bar';
  import { Icon } from 'svelte-awesome';
  import * as Tooltip from "$lib/components/ui/tooltip";
  import Dock from "./dock.svelte";
  import DockIcon from "./dock-icon.svelte";
</script>

  <div>
    <Dock
      direction="middle"
      class="relative max-md:w-70 justify-between"
      let:mouseX
      let:distance
      let:magnification
    >
      {#each NavBarData.items as item}
      <a href={item.href}>
        <DockIcon {mouseX} {magnification} {distance}>
          <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger
              class="hover:bg-zinc-900/80 transition-all duration-200 rounded-full p-3 mx-0"
            >
              <!-- <svelte:component this={item.icon} size={22} strokeWidth={1.2} /> -->
              <Icon data={item.icon} />
            </Tooltip.Trigger>
            <Tooltip.Content sideOffset={8}>
              <p>{item.title}</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        </DockIcon>
      </a>
      {/each}
    </Dock>
  </div>

