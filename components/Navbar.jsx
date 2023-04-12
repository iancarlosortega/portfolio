import { classNames } from '../utils';
import { DropdownMenu, LanguageSwitcher, ThemeToggleButton } from './';
import { DocumentIcon, GithubIcon, LinkedInIcon, YoutubeIcon } from './icons';

export const Navbar = () => {
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
			<div className='hidden md:flex max-w-[1110px] mx-auto items-center justify-between animate-right-left'>
				<LanguageSwitcher />
				<ul className='flex items-center justify-center gap-16'>
					<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
						<a
							href='https://www.linkedin.com/in/ian-carlos-ortega-05a3a0270/'
							target='_blank'>
							<LinkedInIcon className='text-primary dark:text-light' />
						</a>
					</li>
					<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
						<a href='https://github.com/iancarlosortega' target='_blank'>
							<GithubIcon className='text-primary dark:text-light' />
						</a>
					</li>
					<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
						<a href='https://www.youtube.com/' target='_blank'>
							<YoutubeIcon className='text-primary dark:text-light' />
						</a>
					</li>
					<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
						<a
							href='https://drive.google.com/file/d/1RZUQ5Zct4BA9uYxNqWSipNos6uC7YDw9/view?usp=sharing'
							target='_blank'>
							<DocumentIcon className='text-primary dark:text-light' />
						</a>
					</li>
				</ul>
				<ThemeToggleButton />
			</div>
		</nav>
	);
};
