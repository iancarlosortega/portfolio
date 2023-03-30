import { AtSignIcon, GithubIcon, LinkedInIcon, PhoneIcon } from './icons';

export const Footer = () => {
	return (
		<footer className='bg-gray-100 border-t border-light flex flex-col lg:flex-row lg:justify-between gap-6 p-8 mt-16'>
			<div className='flex justify-center gap-12'>
				<a
					className='transition-transform duration-300 ease-in hover:-translate-y-1'
					href='https://github.com/iancarlosortega'
					target='_blank'>
					<GithubIcon fillColor='#0E8388' />
				</a>
				<a
					className='transition-transform duration-300 ease-in hover:-translate-y-1'
					href='https://ec.linkedin.com/'
					target='_blank'>
					<LinkedInIcon fillColor='#0E8388' />
				</a>
			</div>
			<div className='flex justify-center items-center gap-4'>
				<div className='flex items-center gap-2'>
					<AtSignIcon fillColor='#0E8388' />
					<p className='font-bold text-sm text-primary'>
						iancarlosortegaleon@gmail.com
					</p>
				</div>
				<div className='w-px h-10 border-r-2 border-light'></div>
				<div className='flex items-center gap-2'>
					<PhoneIcon fillColor='#0E8388' />
					<p className='font-bold text-sm text-primary'>+593 995544833</p>
				</div>
			</div>
		</footer>
	);
};
