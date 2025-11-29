import { resolve } from '$app/paths';

const base = resolve('/')
const url = (file: string) => `${base}logos/${file}`;

const asset = (filename: string) => {
	return url(filename);
};

const Assets = {
	CSS: asset('css.svg'),
	FastApi: asset('fastapi.svg'),
	Flask: asset('flask.svg'),
	Git: asset('git.svg'),
	Go: asset('go.svg'),
	HTML: asset('html.svg'),
	JavaScript: asset('javascript.svg'),
	Jest: asset('jest.svg'),
	Laravel: asset('laravel.svg'),
	LightrayTechnologies: asset('lightray-tech.png'),
	Microverse: asset('microverse.png'),
	NextJs: asset('nextjs.svg'),
	Php: asset('php.svg'),
	PostgreSQL: asset('postgresql.svg'),
	Python: asset('python.svg'),
	Rails: asset('rails.svg'),
	React: asset('react.svg'),
	Redux: asset('redux.svg'),
	RSpec: asset('rspec.svg'),
	Ruby: asset('ruby.svg'),
	Sass: asset('sass.svg'),
	StressTest: asset('stresstest.png'),
	Supabase: asset('supabase.svg'),
	Svelte: asset('svelte.svg'),
	Swagger: asset('swagger.svg'),
	TailwindCSS: asset('tailwindcss.svg'),
	TypeScript: asset('typescript.svg'),
	Unknown: asset('no-img.svg'),
	Vercel: asset('vercel-white.svg')
};

export default Assets;
