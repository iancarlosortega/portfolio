"use server";

import { EmailTemplate } from "@/emails/EmailTemplate";
import { sendEmail } from "@/utils/sendEmail";

interface Params {
	name: string;
	email: string;
	message: string;
	honeypot?: string;
	timestamp?: number;
}

// Detect gibberish/spam patterns
function isLikelySpam(text: string): boolean {
	// Check for excessive consonants without vowels
	const consonantRatio =
		(text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length / text.length;
	if (consonantRatio > 0.7) return true;

	// Check for repeated characters (e.g., "aaaaaaa")
	if (/([a-z])\1{5,}/i.test(text)) return true;

	// Check for very low vowel count
	const vowelCount = (text.match(/[aeiou]/gi) || []).length;
	if (text.length > 20 && vowelCount < text.length * 0.15) return true;

	// Check for keyboard mashing patterns
	const keyboardPatterns = [
		/asdf|qwer|zxcv|hjkl/gi,
		/[a-z]{15,}/i, // Single word longer than 15 chars (likely gibberish)
	];
	for (const pattern of keyboardPatterns) {
		if (pattern.test(text)) return true;
	}

	return false;
}

export const sendContactFormMessage = async ({
	name,
	email,
	message,
	honeypot,
	timestamp,
}: Params) => {
	try {
		// Honeypot check - if filled, it's a bot
		if (honeypot) {
			console.log("Spam detected: honeypot filled");
			return "error";
		}

		// Time-based check - submission too fast (less than 3 seconds)
		if (timestamp) {
			const timeTaken = Date.now() - timestamp;
			if (timeTaken < 3000) {
				console.log("Spam detected: too fast");
				return "error";
			}
		}

		// Content validation - detect gibberish
		if (isLikelySpam(message) || isLikelySpam(name)) {
			console.log("Spam detected: gibberish content");
			return "error";
		}

		// Check for suspicious email patterns
		const suspiciousEmailPatterns = [
			/@.*\.ru$/i,
			/@.*\.cn$/i,
			/[0-9]{8,}@/i, // Many numbers in email
		];
		for (const pattern of suspiciousEmailPatterns) {
			if (pattern.test(email)) {
				console.log("Spam detected: suspicious email");
				return "error";
			}
		}

		await sendEmail(
			<EmailTemplate email={email} name={name} message={message} />
		);
		return "success";
	} catch (error) {
		console.log(error);
		return "error";
	}
};
