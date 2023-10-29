import { useTranslation } from 'next-i18next';
import { classNames } from '../utils';
import { DropdownMenu, LanguageSwitcher, ThemeToggleButton } from './';
import { DocumentIcon, GithubIcon, LinkedInIcon } from './icons';

export const Navbar = () => {
	const { t: translate } = useTranslation('common');

	return (
		<nav
			className={classNames(
				'fixed w-full p-2 md:px-4 lg:px-16 md:py-4 z-40 bg-white/30',
				'dark:bg-zinc-900/30 backdrop-blur-md border-b border-zinc/30'
			)}>
			{/* Phone Navbar */}
			<ul className='flex items-center justify-between md:hidden'>
				<li>
					<DropdownMenu />
				</li>
				<li>
					<ThemeToggleButton />
				</li>
			</ul>
			{/* Tablet and Desktop Navbar */}
			<div className='hidden md:flex max-w-[1110px] mx-auto items-center justify-between'>
				<LanguageSwitcher />
				<ul className='flex items-center justify-center gap-16'>
					<li className='cursor-pointer transition-transform duration-200 ease-in hover:-translate-y-1'>
						<a
							title='LinkedIn'
							href='https://www.linkedin.com/in/ian-carlos-ortega-05a3a0270/'
							target='_blank'
							rel='noreferrer noopener'>
							<LinkedInIcon className='text-primary dark:text-light' />
						</a>
					</li>
					<li className='cursor-pointer transition-transform duration-200 ease-in hover:-translate-y-1'>
						<a
							title='Github'
							href='https://github.com/iancarlosortega'
							target='_blank'
							rel='noreferrer noopener'>
							<GithubIcon className='text-primary dark:text-light' />
						</a>
					</li>
					<li className='cursor-pointer transition-transform duration-200 ease-in hover:-translate-y-1'>
						<a
							title='CV'
							href={translate('cv-link')}
							target='_blank'
							rel='noreferrer noopener'>
							<DocumentIcon className='text-primary dark:text-light' />
						</a>
					</li>
				</ul>
				<ThemeToggleButton />
			</div>
		</nav>
	);
};
