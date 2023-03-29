import { ProjectCard } from './ProjectCard';

export const Projects = () => {
	return (
		<section id='projects' className='max-w-[1110px] mx-auto px-8 md:px-0'>
			<h3 className='text-[40px] text-secondary text-center font-bold uppercase mt-32 mb-16'>
				Proyectos
			</h3>
			<div>
				<ProjectCard
					title='FreeMove'
					description='Consequat labore nulla nisi sunt ullamco aliqua in anim. Esse anim et
					velit velit incididunt Lorem quis incididunt magna tempor pariatur
					est. Cillum aliqua mollit amet ut dolor aliqua adipisicing
					reprehenderit reprehenderit occaecat ex irure. Ut deserunt elit dolore
					commodo ullamco Lorem ullamco non non. Voluptate consequat Lorem
					labore irure irure. Occaecat anim irure dolor pariatur anim id
					incididunt dolore enim laboris dolore eiusmod cupidatat. Lorem
					pariatur ad consectetur ex ipsum exercitation Lorem aliqua sunt velit
					aliqua consectetur sit.'
					stack={['Angular', 'Firebase', 'Mapbox']}
					demoUrl='#'
					codeUrl='#'
					projectImg='/test.jpg'
				/>
				<ProjectCard
					title='FreeMove'
					description='Consequat labore nulla nisi sunt ullamco aliqua in anim. Esse anim et
					velit velit incididunt Lorem quis incididunt magna tempor pariatur
					est. Cillum aliqua mollit amet ut dolor aliqua adipisicing
					reprehenderit reprehenderit occaecat ex irure. Ut deserunt elit dolore
					commodo ullamco Lorem ullamco non non. Voluptate consequat Lorem
					labore irure irure. Occaecat anim irure dolor pariatur anim id
					incididunt dolore enim laboris dolore eiusmod cupidatat. Lorem
					pariatur ad consectetur ex ipsum exercitation Lorem aliqua sunt velit
					aliqua consectetur sit.'
					stack={['Angular', 'Firebase', 'Mapbox']}
					demoUrl='#'
					codeUrl='#'
					projectImg='/test.jpg'
				/>
				<ProjectCard
					title='FreeMove'
					description='Consequat labore nulla nisi sunt ullamco aliqua in anim. Esse anim et
					velit velit incididunt Lorem quis incididunt magna tempor pariatur
					est. Cillum aliqua mollit amet ut dolor aliqua adipisicing
					reprehenderit reprehenderit occaecat ex irure. Ut deserunt elit dolore
					commodo ullamco Lorem ullamco non non. Voluptate consequat Lorem
					labore irure irure. Occaecat anim irure dolor pariatur anim id
					incididunt dolore enim laboris dolore eiusmod cupidatat. Lorem
					pariatur ad consectetur ex ipsum exercitation Lorem aliqua sunt velit
					aliqua consectetur sit.'
					stack={['Angular', 'Firebase', 'Mapbox']}
					demoUrl='#'
					codeUrl='#'
					projectImg='/test.jpg'
				/>
			</div>
		</section>
	);
};
