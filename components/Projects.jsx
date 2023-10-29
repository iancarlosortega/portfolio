import { useTranslation } from 'next-i18next';
import { ProjectCard, Title } from './';
import { projects } from '../constants/projects';

export const Projects = () => {
	const { t: translate } = useTranslation('projects');

	return (
		<section
			id='projects'
			className='max-w-[1110px] mx-auto px-4 xl:px-0 py-24 md:pt-[12rem]'>
			<Title text={translate('title')} color='secondary' />
			<div className='grid lg:grid-cols-2 gap-4 md:gap-8'>
				{projects.map(
					({ title, description, stack, demoUrl, codeUrl, imageUrl }) => (
						<ProjectCard
							key={title}
							title={title}
							description={description}
							stack={stack}
							demoUrl={demoUrl}
							codeUrl={codeUrl}
							imageUrl={imageUrl}
						/>
					)
				)}
			</div>
		</section>
	);
};
