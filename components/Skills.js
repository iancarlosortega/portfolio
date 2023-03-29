import { Tab } from '@headlessui/react';
import { classNames } from '../utils';
import { SkillItem } from './SkillItem';

const categories = ['Front End', 'Back End', 'Herramientas'];

export const Skills = () => {
	return (
		<section
			id='skills'
			className='h-[100%] min-h-screen flex flex-col justify-center items-center skill-bg'>
			<h3 className='text-[40px] text-white font-bold uppercase mt-32 mb-16 md:mt-0'>
				Habilidades
			</h3>
			<Tab.Group>
				<Tab.List className='flex flex-wrap justify-center gap-4 md:flex-row'>
					{categories.map(category => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									'md:mx-4 py-2.5 px-8 font-bold',
									'focus:outline-none transition duration-200 ease',
									selected
										? 'bg-white drop-shadow-lg text-primary'
										: 'bg-white/[0.12] text-white hover:bg-white/[0.2]'
								)
							}>
							{category}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className='mt-16 mb-32 md:mb-0'>
					<Tab.Panel>
						<ul className='max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center'>
							<SkillItem imagePath='/icons/html.svg' alt='HTML 5' />
							<SkillItem imagePath='/icons/css3.svg' alt='CSS 3' />
							<SkillItem imagePath='/icons/javascript.svg' alt='JavaScript' />
							<SkillItem imagePath='/icons/typescript.svg' alt='TypeScript' />
							<SkillItem imagePath='/icons/reactjs.svg' alt='ReactJS' />
							<SkillItem imagePath='/icons/nextdotjs.svg' alt='Next.Js' />
							<SkillItem imagePath='/icons/angular.svg' alt='Angular' />
						</ul>
					</Tab.Panel>
					<Tab.Panel>
						<ul className='max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center'>
							<SkillItem imagePath='/icons/nodejs.svg' alt='Node JS' />
							<SkillItem imagePath='/icons/express.svg' alt='Express' />
							<SkillItem imagePath='/icons/mongo.svg' alt='MongoDB' />
							<SkillItem imagePath='/icons/typescript.svg' alt='TypeScript' />
							<SkillItem imagePath='/icons/nestjs.svg' alt='NestJS' />
							<SkillItem imagePath='/icons/postgres.svg' alt='PostgreSQL' />
							<SkillItem imagePath='/icons/firebase.svg' alt='Firebase' />
						</ul>
					</Tab.Panel>
					<Tab.Panel>
						<ul className='max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center'>
							<SkillItem imagePath='/icons/git.svg' alt='Git' />
							<SkillItem imagePath='/icons/postman.svg' alt='Postman' />
							<SkillItem imagePath='/icons/vscode.svg' alt='Vscode' />
							<SkillItem imagePath='/icons/scrum.svg' alt='Scrum' />
							<SkillItem imagePath='/icons/webpack.svg' alt='Webpack' />
							<SkillItem imagePath='/icons/heroku.svg' alt='Heroku' />
							<SkillItem imagePath='/icons/vercel.svg' alt='Vercel' />
						</ul>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};
