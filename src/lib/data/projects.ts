import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import github from 'svelte-awesome/icons/github';
import globe from 'svelte-awesome/icons/globe';

const items: Array<Project> = [
	{
		slug: 'stresstest',
		color: '#3b82f6',
		description:
			"StressTest is a simple, friendly self-assessment app that helps you understand your stress levels and emotional balance. It's designed to promote awareness, reflection, and well-being — without collecting personal data.",
		shortDescription: 'A mindful check-in for your stress and emotional well-being. ',
		links: [
			{
				to: 'https://github.com/badger-99/stress_test',
				label: 'Source Code',
				newTab: true,
				icon: github
			},
			{ to: 'https://stresstest.alfredm.me/', label: 'Website', newTab: true, icon: globe }
		],
		logo: Assets.StressTest,
		name: 'StressTest',
		skills: getSkills('ts', 'nextjs', 'tailwindcss', 'supabase'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'screen 1',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-1.png'
			},
			{
				label: '2',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-2.png'
			},
			{
				label: '3',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-3.png'
			},
			{
				label: '4',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-4.png'
			}
		]
	},
	{
		slug: 'svelte-portfolio',
		color: 'orange',
		description:
			"Personal Portfolio",
		shortDescription: 'This portolio website - incase you like it and want to make your one based on it! :)',
		links: [
			{
				to: 'https://github.com/badger-99/svelte-portfolio',
				label: 'Source Code',
				newTab: true,
				icon: github
			}
		],
		logo: Assets.Svelte,
		name: 'Svelte Portfolio',
		skills: getSkills('svelte', 'ts'),
		type: 'Website',
		screenshots: [
			{
				label: 'screen 1',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-1.png'
			},
			{
				label: '2',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-2.png'
			},
			{
				label: '3',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-3.png'
			},
			{
				label: '4',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-4.png'
			}
		]
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
