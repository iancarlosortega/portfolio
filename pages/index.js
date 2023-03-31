import Head from 'next/head';
import { About, Contact, Footer, Main, Projects, Skills } from '../components';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ian Carlos Ortega | Portafolio</title>
				<meta
					property='og:title'
					content='Ian Carlos Ortega | Portafolio'
					key='title'
				/>
			</Head>
			<Main />
			<Skills />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</>
	);
}
