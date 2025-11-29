<script lang='ts'>
  import NavBarData from '$lib/data/nav-bar';
  import { Icon } from 'svelte-awesome';
  import * as Tooltip from "$lib/components/ui/tooltip";
  import Dock from "./dock.svelte";
  import DockIcon from "./dock-icon.svelte";
  import { page } from '$app/state';
</script>

<div class="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto flex h-full max-h-14 origin-bottom bg-linear-to-t from-black from-15% to-transparent">
  <div class="fixed inset-x-0 bottom-3 h-13 w-full ">
    <Dock
      direction="middle"
      class="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center gap-0.5 rounded-full bg-background/15 backdrop-blur-md px-1 sm:gap-3 md:gap-4"
      let:mouseX
      let:distance
      let:magnification 
    >
      {#each NavBarData.items as item}
      <a href={item.href} class={`rounded-full ${page.url.pathname === item.href ? 'bg-radial from-white from-10% to-transparent to-55% text-background': ''}`}>
        <DockIcon {mouseX} {magnification} {distance} class={``}>
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
</div>
