import BaseData from './base';
import type { IconType } from 'svelte-awesome/components/Icon.svelte';
  import at from 'svelte-awesome/icons/at';
	import github from 'svelte-awesome/icons/github';
	import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: IconType }>;
} = {
	title: `${BaseData.fullName}`,
	description:
		'Self-made Software Engineer passionate about pushing boundaries and bridging ideas and reality',
	links: [
		{ label: 'GitHub', href: 'https://github.com/badger-99', icon: github },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/alfredmkg/', icon: linkedinSquare },
		{ label: 'Email', href: 'mailto:alpeter91@gmail.com', icon: at }
	]
};

const HomeData = {
	title,
	hero,
};

export default HomeData;
