<script lang="ts">
	import '../app.css';
	import {ModeWatcher} from 'mode-watcher'
	import {ThemeToggle} from '$lib/components'
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class='flex flex-row p-2 borde fixed w-full h-14 top-0 left-0'>
	<ThemeToggle />
</nav>

<ModeWatcher defaultMode='system' />
{@render children()}
