import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { locales } from "@/constants/i18n";

export const routing = defineRouting({
	locales: locales,
	defaultLocale: "es",
	localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing);
