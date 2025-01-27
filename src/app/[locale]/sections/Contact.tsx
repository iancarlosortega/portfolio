"use client";

import Form from "next/form";
import { useActionState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useTranslations } from "next-intl";
import { Title } from "@/components/ui/Title";
import { CircleCheckIcon, InfoIcon, MessageIcon } from "@/components/icons";
import { cn } from "@/utils/classNames";
import { sendContactFormMessage } from "../actions";

type Status = "pristine" | "success" | "error";

export const Contact = () => {
	const translate = useTranslations("contact");
	const translateValidations = useTranslations("validations");

	const [status, formAction, isPending] = useActionState<Status, FormData>(
		async (status: Status, formData: FormData) => {
			const name = formData.get("name") as string;
			const email = formData.get("email") as string;
			const message = formData.get("message") as string;

			const result = await sendContactFormMessage({ name, email, message });

			return result as Status;
		},
		"pristine"
	);

	useEffect(() => {
		if (status === "success") {
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6, x: 0.5 },
			});
		}
	}, [status]);

	return (
		<section
			id="contact"
			className="max-w-2xl mx-auto px-4 lg:px-0 my-8 bg-transparent">
			<Title text={translate("title")} color="secondary" />
			<Form action={formAction} className="flex flex-col gap-8">
				<input
					name="name"
					type="text"
					placeholder={translate("name") ?? ""}
					minLength={3}
					maxLength={50}
					required
					className={cn(
						"w-full py-3 px-6 border-2 border-light text-secondary",
						"focus:border-primary focus:outline-none caret-secondary",
						"dark:bg-secondary dark:text-gray-100  dark:caret-light dark:border-zinc-600 dark:focus:border-primary"
					)}
				/>
				<input
					name="email"
					type="email"
					placeholder={translate("email") ?? ""}
					required
					className={cn(
						"w-full py-3 px-6 border-2 border-light text-secondary",
						"focus:border-primary focus:outline-none caret-secondary",
						"dark:bg-secondary dark:text-gray-100  dark:caret-light dark:border-zinc-600 dark:focus:border-primary"
					)}
				/>
				<textarea
					name="message"
					placeholder={translate("message") ?? ""}
					minLength={3}
					maxLength={250}
					required
					className={cn(
						"w-full h-40 resize-none py-3 px-6 border-2 border-light text-secondary",
						"focus:border-primary focus:outline-none caret-secondary",
						"dark:bg-secondary dark:text-gray-100  dark:caret-light dark:border-zinc-600 dark:focus:border-primary"
					)}
				/>
				{status === "success" && (
					<div>
						<div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
							<CircleCheckIcon className="text-primary dark:text-primary" />
							<span>{translateValidations("send-message")}</span>
						</div>
					</div>
				)}
				{status === "error" && (
					<div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
						<InfoIcon className="text-primary dark:text-primary" />
						<span>{translateValidations("send-error")}</span>
					</div>
				)}
				<div className="flex justify-center mt-8 mb-16">
					<button type="submit" className="btn" disabled={isPending}>
						<span>
							{translate("send")} <MessageIcon />
						</span>
					</button>
				</div>
			</Form>
		</section>
	);
};
