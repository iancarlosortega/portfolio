import Head from 'next/head';
import { About, Contact, Footer, Main, Projects, Skills } from '../components';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ian Carlos Ortega | Desarrollador Web</title>
				<meta
					name='description'
					content='Desarrollador Web Full Stack, con experiencia en el desarrollo de aplicaciones web y móviles. Conocimientos en tecnologías como Angular, React, Next.Js, Node.Js, Express, MongoDB, Firebase, Docker, entre otras.'
				/>
				<meta
					name='keywords'
					content='Desarrollador Web, Desarrollador Web Full Stack, Desarrollador Web Angular, Desarrollador Web React, Desarrollador Web Next.Js, Desarrollador Web Node.Js, Desarrollador Web Express, Desarrollador Web MongoDB, Desarrollador Web Firebase'
				/>
				<meta name='author' content='Ian Carlos Ortega' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow' />
				<meta name='google' content='nositelinkssearchbox' />
				<meta name='google' content='notranslate' />
				<meta property='og:url' content='https://iancarlosortega.dev/' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					content='https://iancarlosortega.dev/images/iancarlosortega.jpg'
				/>
				<meta
					property='og:title'
					content='Ian Carlos Ortega | Desarrollador Web'
					key='title'
				/>
				<meta
					property='og:description'
					content='Desarrollador Web Full Stack, con experiencia en el desarrollo de aplicaciones web y móviles. Conocimientos en tecnologías como Angular, React, Next.Js, Node.Js, Express, MongoDB, Firebase, Docker, entre otras.'
				/>
				<meta
					property='og:site_name'
					content='Ian Carlos Ortega | Desarrollador Web'
				/>
				<meta property='og:locale' content='es_ES' />
				<meta property='og:locale:alternate' content='en_US' />
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
