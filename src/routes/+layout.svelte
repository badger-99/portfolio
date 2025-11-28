<script lang="ts">
	import './layout.css';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/favicon.ico';
	import NavBar from '$lib/components/nav-bar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import DockNavBar from '$lib/components/ui/dock/nav-dock.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Alfred M.</title>
	<meta name="description" content="Software Engineer & Developer." />
  <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="dark" />
<!-- <NavBar /> -->
<DockNavBar />

<Toaster richColors duration={10000} closeButton/>
{@render children()}
