import { classNames } from '../utils';
import { AtSignIcon, GithubIcon, LinkedInIcon } from './icons';

export const Footer = () => {
	return (
		<footer
			className={classNames(
				'flex flex-col md:flex-row md:justify-between gap-6 p-8 mt-4',
				'bg-gray-100 dark:bg-zinc-800 border-t-2 border-light dark:border-zinc-600'
			)}>
			<div className='flex justify-center gap-12'>
				<a
					className='transition-transform duration-200 ease-in hover:-translate-y-1'
					href='https://github.com/iancarlosortega'
					target='_blank'>
					<GithubIcon className='text-primary dark:text-light' />
				</a>
				<a
					className='transition-transform duration-200 ease-in hover:-translate-y-1'
					href='https://www.linkedin.com/in/ian-carlos-ortega-05a3a0270/'
					target='_blank'>
					<LinkedInIcon className='text-primary dark:text-light' />
				</a>
			</div>
			<div className='flex flex-col md:flex-row justify-center items-center gap-4'>
				<div className='flex items-center gap-2'>
					<AtSignIcon />
					<p className='font-medium text-sm text-primary dark:text-light'>
						iancarlosortegaleon@gmail.com
					</p>
				</div>
			</div>
		</footer>
	);
};
