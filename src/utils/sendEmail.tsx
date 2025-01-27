import type { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(body: ReactNode) {
	const { error } = await resend.emails.send({
		from: "Portfolio <onboarding@resend.dev>",
		to: ["iancarlosortegaleon@gmail.com"],
		subject: "From your portfolio website",
		react: <>{body}</>,
	});

	if (error) {
		console.log(error);
		throw error;
	}
}
