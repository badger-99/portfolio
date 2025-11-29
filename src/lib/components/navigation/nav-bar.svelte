<script>
	import { ThemeToggle } from '$lib/components';
	import NavBarData from '$lib/data/nav-bar';
	import { Icon } from 'svelte-awesome';
	import { page } from '$app/state';
</script>

<nav
	class="fixed top-0 left-0 z-50 flex h-14 w-full flex-row items-center bg-background/70 px-4 pt-2 backdrop-blur-lg"
>
	<div class="invert dark:invert-0">
		<a href="/">
			<img alt="header logo" src={NavBarData.left.icon} width="64" />
		</a>
	</div>
	<div class="mx-auto flex flex-row items-center justify-center gap-8">
		{#each NavBarData.items as item}
			<a
				href={item.href}
				class={`relative flex flex-row items-center justify-center gap-2 rounded-2xl p-2 ${page.url.pathname === item.href ? 'bg-foreground text-background' : 'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100'}`}
			>
				<Icon data={item.icon} className="text-xl" />
				<div class="">{item.title}</div>
			</a>
		{/each}
	</div>
	<!-- <ThemeToggle /> -->
</nav>
