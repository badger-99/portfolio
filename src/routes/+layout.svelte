<script lang="ts">
	import '../app.css';
	import {ModeWatcher} from 'mode-watcher'
	import {ThemeToggle} from '$lib/components'
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Alfred M</title>
  <meta name="description" content="Software Engineer & Developer." />
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class='flex flex-row p-2 fixed w-full h-14 top-0 left-0 justify-between items-center'>
	<div><a href="#hero">{"<A/>"}</a></div>
	<div class="flex flex-row gap-2">
		<a href="#hero" class="hover:underline">Home</a>
		<a href="#about" class="hover:underline">About</a>
		<a href="#projects" class="hover:underline">Projects</a>
		<a href="#contact" class="hover:underline">Contact</a>
	</div>
	<ThemeToggle />
</nav>

<ModeWatcher defaultMode='system' />
{@render children()}
