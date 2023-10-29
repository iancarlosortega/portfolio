import { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '../next-i18next.config';

export default function Document() {
	const currentLocale = i18nextConfig.i18n.defaultLocale;

	return (
		<Html lang={currentLocale}>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='bg-gray-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-300 transition-colors duration-500'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
