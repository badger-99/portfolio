import logo from '$lib/assets/w-LogoHeader1.png';
import user from 'svelte-awesome/icons/user';
import cube from 'svelte-awesome/icons/cube';
import cubes from 'svelte-awesome/icons/cubes';
import briefcase from 'svelte-awesome/icons/briefcase';
import envelopeO from 'svelte-awesome/icons/envelopeO';
// import fileTextO from 'svelte-awesome/icons/fileTextO';
import type { IconData } from 'svelte-awesome/components/Icon.svelte';


const left = { icon: logo } as const;

const items: Array<{
	title: string;
	icon: Record<string, IconData>;
	href: string;
}> = [
	{ title: 'Home', icon: user, href: '/' },
	{ title: 'Skills', icon: cubes, href: '/skills' },
	{ title: 'Experience', icon: briefcase, href: '/experience' },
	{ title: 'Projects', icon: cube, href: '/projects' },
	{ title: 'Contact Me', icon: envelopeO, href: '/contact' },
	// { title: 'Resumé', icon: fileTextO, href: '/resume' }
];

const NavBarData = { left, items };

export default NavBarData;
