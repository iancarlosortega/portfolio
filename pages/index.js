import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Footer, ScrollToTopButton } from '../components';
import {
	About,
	Contact,
	Experience,
	Main,
	Projects,
	Skills,
} from '../components/sections';

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export default function Home() {
	const { t: translate } = useTranslation('common');

	return (
		<>
			<Head>
				<title>{translate('title')}</title>
				<meta name='description' content={translate('description')} />
				<meta name='keywords' content={translate('keywords')} />
				<meta name='author' content='Ian Carlos Ortega' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />

				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow' />
				<meta name='google' content='nositelinkssearchbox' />
				<meta name='google' content='notranslate' />

				<meta name='og:url' content='https://iancarlosortega.com/' />
				<meta name='og:type' content='website' />
				<meta name='og:image' content={`${origin}/images/banner.jpg`} />
				<meta name='og:title' content={translate('title')} />
				<meta name='og:description' content={translate('description')} />
				<meta name='og:site_name' content={translate('title')} />
				<meta name='og:locale' content='es_ES' />
				<meta name='og:locale:alternate' content='en_US' />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={translate('title')} />
				<meta name="twitter:description" content={translate('description')} />
				<meta name="twitter:image" content={`${origin}/images/banner.jpg`} />
			</Head>
			<Main />
			<Experience />
			<Projects />
			<About />
			<Skills />
			<Contact />
			<ScrollToTopButton />
			<Footer />
		</>
	);
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'es', [
			'common',
			'home',
			'skills',
			'projects',
			'experience',
			'about',
			'contact',
		])),
	},
});
