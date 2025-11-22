<script lang="ts">
	import './layout.css';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { ThemeToggle } from '$lib/components';
	import favicon from '$lib/assets/favicon.ico';
	import logo from '$lib/assets/w-LogoHeader1.png';

	let { children } = $props();
</script>

<svelte:head>
	<title>Alfred M.</title>
	<meta name="description" content="Software Engineer & Developer." />
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="fixed top-0 left-0 flex h-14 w-full flex-row items-center px-4 pt-2">
	<div>
		<a href="#hero">
			<img alt="header logo" src={logo} width="64" />
		</a>
	</div>
	<div class="mx-auto flex flex-row gap-2">
		<a href="#hero" class="hover:underline">Home</a>
		<a href="#about" class="hover:underline">About</a>
		<a href="#projects" class="hover:underline">Projects</a>
		<a href="#contact" class="hover:underline">Contact</a>
	</div>
	<!-- <ThemeToggle /> -->
</nav>

<ModeWatcher defaultMode="system" />
{@render children()}
