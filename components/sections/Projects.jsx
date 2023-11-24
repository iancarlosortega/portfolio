import { useTranslation } from 'next-i18next';
import { ProjectCard, Title } from '../../components';
import { projects } from '../../constants/projects';

export const Projects = () => {
	const { t: translate } = useTranslation('projects');

	return (
		<section
			id='projects'
			className='max-w-[1110px] mx-auto px-4 xl:px-0 py-24'>
			<Title text={translate('title')} color='secondary' />
			<div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
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
