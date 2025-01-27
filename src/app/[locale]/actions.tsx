"use server";

import { EmailTemplate } from "@/emails/EmailTemplate";
import { sendEmail } from "@/utils/sendEmail";

interface Params {
	name: string;
	email: string;
	message: string;
}

export const sendContactFormMessage = async ({
	name,
	email,
	message,
}: Params) => {
	try {
		await sendEmail(
			<EmailTemplate email={email} name={name} message={message} />
		);
		return "success";
	} catch (error) {
		console.log(error);
		return "error";
	}
};
