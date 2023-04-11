import { useTranslation } from 'next-i18next';
import { ProjectCard } from './ProjectCard';
import { Title } from './Title';

export const Projects = () => {
	const { t: translate } = useTranslation('projects');

	return (
		<section
			id='projects'
			className='max-w-[1110px] mx-auto px-4 lg:px-0 py-24'>
			<Title text={translate('title')} color='secondary' />
			<ProjectCard
				title='FreeMove &#128692;'
				description={translate('freeMove')}
				stack={['Angular', 'Firebase', 'Mapbox']}
				demoUrl='https://freemove-aa0c5.web.app/'
				projectImg='/projects/freemove.jpg'
			/>
			<ProjectCard
				title='UTPL Play &#127909;'
				description={translate('utplPlay')}
				stack={['Angular', 'Firebase']}
				demoUrl='https://play.liidutpl.ec/'
				codeUrl='https://github.com/iancarlosortega/utplPlay'
				projectImg='/projects/utpl-play.jpg'
				order={true}
			/>
			<ProjectCard
				title='Teslo Shop &#128085;'
				description={translate('tesloShop')}
				stack={['Next.Js', 'Node.Js', 'MongoDB', 'Docker']}
				demoUrl='https://teslo-shop-topaz.vercel.app/'
				codeUrl='https://github.com/Curso-NextJs/teslo-shop'
				projectImg='/projects/teslo-shop.jpg'
			/>
			<ProjectCard
				title='Creando Cariño &#127873;'
				description={translate('creandoCarino')}
				stack={['Angular', 'Firebase']}
				demoUrl='https://creando-carino.web.app/'
				codeUrl='https://github.com/iancarlosortega/creandoCarino'
				projectImg='/projects/creando-carino.jpg'
				order={true}
			/>
			<ProjectCard
				title='Arch Studio &#127961;'
				description={translate('archStudio')}
				stack={['Astro', 'React', 'TailwindCSS']}
				demoUrl='https://arch-studio-iota.vercel.app/'
				codeUrl='https://github.com/iancarlosortega/astro-studio'
				projectImg='/projects/arch-studio.jpg'
			/>
		</section>
	);
};
