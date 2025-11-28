import type { Skill, SkillCategory } from './types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'html',
		color: 'orange',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		logo: Assets.React,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'redux',
		color: 'violet',
		logo: Assets.Redux,
		name: 'Redux Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'jest',
		color: 'mediumpurple',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'royalblue',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'ruby',
		color: 'darkred',
		logo: Assets.Ruby,
		name: 'Ruby',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rails',
		color: 'darkred',
		logo: Assets.Rails,
		name: 'Ruby on Rails',
		category: 'framework'
	}),
	defineSkill({
		slug: 'rspec',
		color: 'cyan',
		logo: Assets.RSpec,
		name: 'RSpec',
		category: 'test'
	}),
	defineSkill({
		slug: 'swagger',
		color: 'lime',
		logo: Assets.Swagger,
		name: 'Swagger',
		category: 'framework'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'tailwindcss',
		color: 'blue',
		logo: Assets.TailwindCSS,
		name: 'TailwindCSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'silver',
		logo: Assets.NextJs,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'supabase',
		color: 'lightgreen',
		logo: Assets.Supabase,
		name: 'Supabase',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vercel',
		color: 'white',
		logo: Assets.Vercel,
		name: 'Vercel',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
