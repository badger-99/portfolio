import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod4 } from 'sveltekit-superforms/adapters';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod4(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod4(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const resend = new Resend(RESEND_API_KEY);
		const name = form.data.name;
		const email = form.data.email;
		const subject = form.data.subject
			? form.data.subject
			: `Portfolio ContactMe message from ${name}`;
		const message = form.data.message;

		try {
			const { data, error } = await resend.emails.send({
				from: `${name} <my-portfolio@alfredm.me>`,
				to: ['contact@alfredm.me'],
				replyTo: `${email}`,
				subject: `${subject}`,
				html: `<div>${message}</div>`
			});

			if (error) {
				return Response.json({ error }, { status: 500 });
			}

			return Response.json({ data });
		} catch (error) {
			return Response.json({ error }, { status: 500 });
		}
	}
};
