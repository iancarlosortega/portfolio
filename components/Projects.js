import { ProjectCard } from './ProjectCard';

export const Projects = () => {
	return (
		<section id='projects' className='max-w-[1110px] mx-auto px-4 lg:px-0'>
			<h3 className='text-[40px] text-secondary text-center font-bold uppercase pt-24 mb-16'>
				Proyectos
			</h3>
			<div className='pb-32'>
				<ProjectCard
					title='FreeMove &#128692;'
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
					demoUrl='https://freemove-aa0c5.web.app/'
					projectImg='/projects/freemove.png'
				/>
				<ProjectCard
					title='UTPL Play &#127909;'
					description='Consequat labore nulla nisi sunt ullamco aliqua in anim. Esse anim et
					velit velit incididunt Lorem quis incididunt magna tempor pariatur
					est. Cillum aliqua mollit amet ut dolor aliqua adipisicing
					reprehenderit reprehenderit occaecat ex irure. Ut deserunt elit dolore
					commodo ullamco Lorem ullamco non non. Voluptate consequat Lorem
					labore irure irure. Occaecat anim irure dolor pariatur anim id
					incididunt dolore enim laboris dolore eiusmod cupidatat. Lorem
					pariatur ad consectetur ex ipsum exercitation Lorem aliqua sunt velit
					aliqua consectetur sit.'
					stack={['Angular', 'Firebase']}
					demoUrl='https://play.liidutpl.ec/'
					codeUrl='https://github.com/iancarlosortega/utplPlay'
					projectImg='/test.jpg'
					order={true}
				/>
				<ProjectCard
					title='Teslo Shop &#128085;'
					description='Consequat labore nulla nisi sunt ullamco aliqua in anim. Esse anim et
					velit velit incididunt Lorem quis incididunt magna tempor pariatur
					est. Cillum aliqua mollit amet ut dolor aliqua adipisicing
					reprehenderit reprehenderit occaecat ex irure. Ut deserunt elit dolore
					commodo ullamco Lorem ullamco non non. Voluptate consequat Lorem
					labore irure irure. Occaecat anim irure dolor pariatur anim id
					incididunt dolore enim laboris dolore eiusmod cupidatat. Lorem
					pariatur ad consectetur ex ipsum exercitation Lorem aliqua sunt velit
					aliqua consectetur sit.'
					stack={['Next.Js', 'React', 'Material UI', 'MongoDB', 'Docker']}
					demoUrl='#'
					codeUrl='https://github.com/Curso-NextJs/teslo-shop'
					projectImg='/test.jpg'
				/>
				<ProjectCard
					title='Creando Cariño &#128154;'
					description='Consequat labore nulla nisi sunt ullamco aliqua in anim. Esse anim et
					velit velit incididunt Lorem quis incididunt magna tempor pariatur
					est. Cillum aliqua mollit amet ut dolor aliqua adipisicing
					reprehenderit reprehenderit occaecat ex irure. Ut deserunt elit dolore
					commodo ullamco Lorem ullamco non non. Voluptate consequat Lorem
					labore irure irure. Occaecat anim irure dolor pariatur anim id
					incididunt dolore enim laboris dolore eiusmod cupidatat. Lorem
					pariatur ad consectetur ex ipsum exercitation Lorem aliqua sunt velit
					aliqua consectetur sit.'
					stack={['Angular', 'Firebase']}
					demoUrl='#'
					codeUrl='https://github.com/iancarlosortega/creandoCarino'
					projectImg='/test.jpg'
					order={true}
				/>
				<ProjectCard
					title='Arch Studio &#127961;'
					description='Consequat labore nulla nisi sunt ullamco aliqua in anim. Esse anim et
					velit velit incididunt..'
					stack={['Astro', 'React', 'TailwindCSS']}
					demoUrl='https://arch-studio-iota.vercel.app/'
					codeUrl='https://github.com/iancarlosortega/astro-studio'
					projectImg='/test.jpg'
				/>
			</div>
		</section>
	);
};
