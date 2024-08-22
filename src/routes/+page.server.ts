import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const resend = new Resend(env.API_RESEND);

		await resend.emails.send({
			from: 'mail@michaelbreyton.dev',
			to: env.MAIL_TO,
			subject: 'Vous avez reçu un message de ' + data.get('name'),
			html: '<p>' + data.get('message') + '</p> <p>Envoyé par ' + data.get('email') + '</p>'
		});

		return { mailSent: true };
	}
} satisfies Actions;
