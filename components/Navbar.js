import { DocumentIcon, GithubIcon, LinkedInIcon, YoutubeIcon } from './icons';

export const Navbar = () => {
	return (
		<nav className='p-8 animate-right-left'>
			<ul className='flex items-center justify-center gap-16 md:justify-end'>
				<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
					<a
						href='https://www.linkedin.com/in/ian-carlos-ortega-05a3a0270/'
						target='_blank'>
						<LinkedInIcon fillColor='#0E8388' />
					</a>
				</li>
				<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
					<a href='https://github.com/iancarlosortega' target='_blank'>
						<GithubIcon fillColor='#0E8388' />
					</a>
				</li>
				<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
					<a href='https://www.youtube.com/' target='_blank'>
						<YoutubeIcon fillColor='#0E8388' />
					</a>
				</li>
				<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
					<a href='' target='_blank'>
						<DocumentIcon fillColor='#0E8388' />
					</a>
				</li>
			</ul>
		</nav>
	);
};
