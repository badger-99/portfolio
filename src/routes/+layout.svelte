<script lang="ts">
	import './layout.css';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/favicon.ico';
	import NavBar from '$lib/components/nav-bar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import DockNavBar from '$lib/components/ui/dock/nav-dock.svelte';
	import NavBarData from '$lib/data/nav-bar';

	let { children } = $props();
</script>

<svelte:head>
	<title>Alfred M.</title>
	<meta name="description" content="Software Engineer & Developer." />
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="dark" />
<Toaster richColors duration={10000} closeButton position={'top-center'}  />
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
	<div class="hidden lg:block"><NavBar /></div>
	<div class="block lg:hidden fixed top-0 left-0 w-full z-30 pt-2 px-2 bg-linear-to-b from-black from-30% to-transparent">
		<div class="invert dark:invert-0">
		<a href="/">
			<img alt="header logo" src={NavBarData.left.icon} width="60" />
		</a>
	</div></div>
	<div class="mt-[50px] flex flex-1 flex-col">{@render children()}</div>
	<div class="block lg:hidden"><DockNavBar /></div>
</div>
<!-- bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] -->
