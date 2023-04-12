import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggleButton } from './ThemeToggleButton';
import { DocumentIcon, GithubIcon, LinkedInIcon, YoutubeIcon } from './icons';

export const Navbar = () => {
	return (
		<nav className='max-w-[1110px] w-full mx-auto p-8 md:px-16 flex items-center justify-between animate-right-left'>
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
		</nav>
	);
};
