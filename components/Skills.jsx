import { useTranslation } from 'next-i18next';
import { Tab } from '@headlessui/react';
import { classNames } from '../utils';
import { SkillItem, Title } from './';
import { ExpressIcon, NextJsIcon, VercelIcon } from './icons';

export const Skills = () => {
	const { t: translate } = useTranslation('skills');
	const categories = ['Front End', 'Back End', translate('tools')];

	return (
		<div className='relative'>
			<section
				id='skills'
				className={classNames(
					'h-[100%] min-h-screen overflow-hidden relative flex flex-col justify-center items-center pt-24 md:pt-0',
					'before:absolute before:-z-20 before:h-[300px] before:w-[380px] before:rounded-full before:bg-gradient-to-br before:opacity-40',
					'before:from-primary before:to-secondary before:blur-2xl before:content-[""] before:translate-x-1/2 before:-translate-y-60 md:before:-translate-y-10',
					'after:absolute after:-z-20 after:h-[280px] after:w-[440px] after:rounded-full after:bg-gradient-to-br after:opacity-40',
					'after:from-primary after:to-secondary after:blur-2xl after:content-[""] after:-translate-x-[10%] md:after:-translate-x-[30%] after:translate-y-[5rem] md:after:translate-y-[15rem]',
					'before:dark:from-teal-300 before:dark:to-teal-100 before:dark:opacity-10',
					'after:dark:from-teal-300 after:dark:to-teal-100 after:dark:opacity-10'
				)}>
				<Title text={translate('title')} color='secondary' />
				<Tab.Group>
					<Tab.List className='flex flex-wrap justify-center gap-4 md:flex-row z-20'>
						{categories.map(category => (
							<Tab
								key={category}
								className={({ selected }) =>
									classNames(
										'md:mx-4 py-2.5 px-8 font-bold',
										'focus:outline-none transition duration-300 ease drop-shadow-lg',
										selected
											? 'bg-primary text-white dark:bg-white dark:text-primary'
											: 'bg-white  text-primary hover:bg-gray-100 dark:bg-white/[0.12] dark:text-white dark:hover:bg-white/[0.2]'
									)
								}>
								{category}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className='mt-16 mb-32 md:mb-0 z-20'>
						<Tab.Panel>
							<ul className='max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center animate-fade-in'>
								<SkillItem imagePath='/icons/html.svg' alt='HTML 5' />
								<SkillItem imagePath='/icons/css3.svg' alt='CSS 3' />
								<SkillItem imagePath='/icons/javascript.svg' alt='JavaScript' />
								<SkillItem imagePath='/icons/typescript.svg' alt='TypeScript' />
								<SkillItem imagePath='/icons/reactjs.svg' alt='ReactJS' />
								<SkillItem
									icon={<NextJsIcon className='text-black dark:text-white' />}
									alt='NextJS'
								/>
								<SkillItem imagePath='/icons/angular.svg' alt='Angular' />
							</ul>
						</Tab.Panel>
						<Tab.Panel>
							<ul className='max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center animate-fade-in'>
								<SkillItem imagePath='/icons/nodejs.svg' alt='Node JS' />
								<SkillItem
									icon={<ExpressIcon className='text-black dark:text-white' />}
									alt='Express'
								/>
								<SkillItem imagePath='/icons/mongo.svg' alt='MongoDB' />
								<SkillItem imagePath='/icons/typescript.svg' alt='TypeScript' />
								<SkillItem imagePath='/icons/nestjs.svg' alt='NestJS' />
								<SkillItem imagePath='/icons/postgres.svg' alt='PostgreSQL' />
								<SkillItem imagePath='/icons/firebase.svg' alt='Firebase' />
							</ul>
						</Tab.Panel>
						<Tab.Panel>
							<ul className='max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center animate-fade-in'>
								<SkillItem imagePath='/icons/git.svg' alt='Git' />
								<SkillItem imagePath='/icons/postman.svg' alt='Postman' />
								<SkillItem imagePath='/icons/vscode.svg' alt='Vscode' />
								<SkillItem imagePath='/icons/scrum.svg' alt='Scrum' />
								<SkillItem imagePath='/icons/webpack.svg' alt='Webpack' />
								<SkillItem imagePath='/icons/heroku.svg' alt='Heroku' />
								<SkillItem
									icon={<VercelIcon className='text-black dark:text-white' />}
									alt='Vercel'
								/>
							</ul>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</section>
		</div>
	);
};
