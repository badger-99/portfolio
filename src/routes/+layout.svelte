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

<nav class='mb-4 flex flex-row'>
	<ThemeToggle />
</nav>

<ModeWatcher defaultMode='system' />
{@render children()}
