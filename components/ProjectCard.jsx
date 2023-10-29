import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GithubIcon, PreviewIcon } from './icons';

export const ProjectCard = ({
	title,
	description,
	stack,
	demoUrl,
	codeUrl,
	imageUrl,
}) => {
	const [isHovering, setIsHovering] = useState(false);
	const { t: translate } = useTranslation('projects');

	return (
		<article className='bg-white dark:bg-zinc-800 rounded-xl max-w-[500px] mx-auto'>
			<header
				className='relative'
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}>
				<Image
					src={imageUrl}
					alt={title}
					width={600}
					height={400}
					className='w-full aspect-video object-cover rounded-t-xl'
				/>
				{isHovering && (
					<div className='absolute top-0 left-0 z-10 backdrop-blur-[2px] bg-black/50 w-full h-full flex justify-center items-center gap-4'>
						<a
							title='Live Demo'
							href={demoUrl}
							target='_blank'
							className='border p-3 border-white text-white rounded-full hover:text-primary hover:border-primary transition-colors duration-200 hover:bg-white'>
							<PreviewIcon />
						</a>
						<a
							title={translate('code')}
							href={codeUrl}
							target='_blank'
							className='border p-3 border-white text-white rounded-full hover:text-primary hover:border-primary transition-colors duration-200 hover:bg-white'>
							<GithubIcon />
						</a>
					</div>
				)}
			</header>
			<div className='p-4 md:p-8'>
				<h5 className='text-center text-2xl text-primary dark:text-light font-bold border-b pb-4 border-dashed border-primary dark:border-light'>
					{title}
				</h5>
				<p className='my-6 text-gray-500 dark:text-gray-100 font-light'>
					{translate(description)}
				</p>
				<ul className='my-12 md:my-6 flex flex-wrap justify-center gap-4'>
					{stack.map(s => (
						<li
							key={s}
							className='px-4 py-2 bg-secondary dark:bg-zinc-900 text-white font-medium text-sm'>
							{s}
						</li>
					))}
				</ul>
				<footer className='flex flex-col lg:hidden md:flex-row items-center justify-center gap-4'>
					<a href={demoUrl} target='_blank' className='btn'>
						<span>
							Demo <PreviewIcon />
						</span>
					</a>
					<a href={codeUrl} target='_blank' className='btn'>
						<span>
							{translate('code')} <GithubIcon />
						</span>
					</a>
				</footer>
			</div>
		</article>
	);
};
