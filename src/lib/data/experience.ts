import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'lightray-tech',
		company: 'Lightray-Technologies',
		description: 'Creating financial ai tools',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date('2024-03-01'), to: new Date("2025-09-30") },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Lead (solo) Developer',
		color: 'silver',
		links: [],
		logo: Assets.LightrayTechnologies,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'microverse',
		company: 'Microverse',
		description: 'Hands-on remote software development academy',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date('2023-05-01'), to: new Date('2024-02-10') },
		skills: getSkills('ts', 'js'),
		name: 'Full-stack Developer',
		color: 'purple',
		links: [],
		logo: Assets.Microverse,
		shortDescription: 'Creating awesome tools for developers.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
