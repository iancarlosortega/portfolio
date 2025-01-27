"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@/components/icons";
import { cn } from "@/utils/classNames";
import { getFlagFromLanguage } from "@/utils/getFlagFromLanguage";
import type { Locale } from "@/constants/i18n";

export const LanguageSwitcher = () => {
	const [isPending, startTransition] = useTransition();
	const currentLocale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const translate = useTranslations("languages");

	const handleOnChange = (value: Locale) => {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: value, scroll: false }
			);
		});
	};

	return (
		<Listbox
			defaultValue={currentLocale}
			onChange={handleOnChange}
			disabled={isPending}>
			<div className="relative z-10 mt-1">
				<ListboxButton
					className={cn(
						"relative w-40 py-2 pl-3 pr-10 text-left sm:text-sm shadow-sm cursor-pointer rounded-lg bg-white",
						"border border-primary focus:outline-none dark:border-zinc-700 dark:bg-zinc-600  dark:shadow-gray-500"
					)}>
					<span className="flex items-center gap-2 capitalize">
						{getFlagFromLanguage(currentLocale)}
						{translate(currentLocale)}
					</span>
					<span className="absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon className="text-primary dark:text-light" />
					</span>
				</ListboxButton>
				<ListboxOptions
					transition
					className={cn(
						"absolute w-40 mt-2 max-h-60 rounded-md text-base sm:text-sm bg-white z-40",
						"border border-primary dark:border-zinc-700 dark:bg-zinc-600 dark:shadow-gray-500",
						"ring-1 ring-black ring-opacity-5 focus:outline-none shadow-sm",
						"transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
					)}>
					{routing.locales.map((locale) => (
						<ListboxOption
							key={locale}
							className={({ selected }) =>
								`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
									selected && "bg-light dark:bg-zinc-700"
								}`
							}
							value={locale}>
							{({ selected }) => (
								<>
									<span
										className={`block truncate capitalize ${
											selected ? "font-medium" : "font-normal"
										}`}>
										{translate(locale)}
									</span>
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										{getFlagFromLanguage(locale)}
									</span>
								</>
							)}
						</ListboxOption>
					))}
				</ListboxOptions>
			</div>
		</Listbox>
	);
};
