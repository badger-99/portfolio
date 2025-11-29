<script lang='ts'>
  import NavBarData from '$lib/data/nav-bar';
  import { Icon } from 'svelte-awesome';
  import Dock from "../ui/dock/dock.svelte";
  import { page } from '$app/state';
	import Button from '../ui/button/button.svelte';
</script>

<div class="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto flex h-full max-h-14 origin-bottom bg-linear-to-t from-black from-15% to-transparent">
  <div class="fixed inset-x-0 bottom-3 h-13 w-full ">
    <Dock
      direction="middle"
      class="pointer-events-auto relative z-50 mx-auto flex flex-row h-full min-h-full transform-gpu items-center gap-7 sm:gap-8 md:gap-9 justify-between rounded-full bg-background/15 backdrop-blur-md"
    >
      {#each NavBarData.items as item}
      <a href={item.href} class={`rounded-full ${page.url.pathname === item.href ? 'bg-white text-background': ''}`}>
        <Button size='icon' variant='outline' class='rounded-full border-none dark:bg-transparent'>
        <Icon data={item.icon} />
      </Button>
      </a>
      {/each}
    </Dock>
  </div>
</div>
