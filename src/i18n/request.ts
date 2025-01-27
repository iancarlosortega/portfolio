import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/constants/i18n";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale || !routing.locales.includes(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../locales/${locale}.json`)).default,
	};
});
