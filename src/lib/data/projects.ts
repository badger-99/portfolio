import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'stresstest',
		color: 'cyan',
		description:
			"StressTest is a simple, friendly self-assessment app that helps you understand your stress levels and emotional balance. It's designed to promote awareness, reflection, and well-being — without collecting personal data.",
		shortDescription: 'A mindful check-in for your stress and emotional well-being. ',
		links: [
			{ to: 'https://github.com/', label: 'GitHub' },
			{ to: 'https://stresstest.alfredm.me/', label: 'Website' }
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
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
