import BaseData from './base';
import type { IconType } from 'svelte-awesome/components/Icon.svelte';
// import at from 'svelte-awesome/icons/at';
import github from 'svelte-awesome/icons/github';
import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: IconType }>;
} = {
	title: `Hi, I'm ${BaseData.firstName}!`,
	description:
		'Full-stack Software Developer, passionate about bridging ideas and reality.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/badger-99', icon: github },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/alfredmkg', icon: linkedinSquare },
		// { label: 'Email', href: 'mailto:contact@alfredm.me.com', icon: at }
	]
};

const initials = BaseData.initials;

const HomeData = {
	title,
	hero,
	initials,
};

export default HomeData;
