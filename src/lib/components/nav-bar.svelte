<script>
  import { ThemeToggle } from '$lib/components';
	import logo from '$lib/assets/w-LogoHeader1.png';
</script>

<nav class="fixed top-0 left-0 flex h-14 w-full flex-row items-center px-4 pt-2">
	<div class="invert dark:invert-0">
		<a href="/">
			<img alt="header logo" src={logo} width="64" />
		</a>
	</div>
	<div class="mx-auto flex flex-row gap-2">
		<a href="/" class="hover:underline">Home</a>
		<a href="#projects" class="hover:underline">Projects</a>
		<a href="#contact" class="hover:underline">Contact</a>
	</div>
	<ThemeToggle />
</nav>