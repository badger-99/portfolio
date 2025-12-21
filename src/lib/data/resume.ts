import { resolve } from '$app/paths';

const title = 'Resumé';
const base = resolve('/');
const resume = `${base}pdf/resume.pdf`;
const ResumeData = { title, resume };

export default ResumeData;