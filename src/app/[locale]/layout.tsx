import type { Metadata } from "next/types";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { routing } from "@/i18n/routing";
import { dmSans } from "@/config/fonts";
import { Header } from "@/components/ui/Header";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { Footer } from "@/components/ui/Footer";
import type { Locale } from "@/constants/i18n";
import "./globals.css";

interface Params {
	params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "seo" });
	return {
		title: t("title"),
		description: t("description"),
		keywords: t("keywords"),
		creator: "Ian Carlos Ortega",
		metadataBase: new URL(
			process.env.BASE_URL || "https://iancarlosortega.com"
		),
	};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

interface Props {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!routing.locales.includes(locale as Locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html suppressHydrationWarning lang={locale}>
			<body
				className={`${dmSans.className} bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 transition-colors duration-500`}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider defaultTheme="light" attribute="class" enableSystem>
						<Header />
						{children}
						<ScrollToTopButton />
						<Footer />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
