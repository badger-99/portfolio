const url = (file: string) => `/src/lib/assets/logos/${file}`;

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
	Ruby: asset('ruby.svg'),
	Sass: asset('sass.svg'),
	Supabase: asset('supabase.svg'),
	Svelte: asset('svelte.svg'),
	TailwindCSS: asset('tailwindcss.svg'),
	TypeScript: asset('typescript.svg'),
	Unknown: asset('no-img.svg'),
	Vercel: asset('vercel.svg')
};

export default Assets;
