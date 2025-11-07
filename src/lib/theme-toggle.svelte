<script>
  import {toggleMode, mode, userPrefersMode} from 'mode-watcher'
  import {Sun, Moon} from 'lucide-svelte'

  let isDark = $derived( userPrefersMode.current === 'dark' ||
    (userPrefersMode.current === 'system' && mode.current === 'dark'))

</script>

<button
onclick={toggleMode}
class="p-1 transition-colors duration-200 rounded-md cursor-pointer ml-auto"
aria-label='Toggle Theme'>
  {#if isDark}
  <Moon
  class=" h-[1.2rem] w-[1.2rem]"
  />
  {:else}
  <Sun
      class="h-[1.2rem] w-[1.2rem]"
    />
  {/if}
</button>