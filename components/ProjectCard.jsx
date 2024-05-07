import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { GithubIcon, PreviewIcon } from './icons';
import { AnimatePresence, motion } from 'framer-motion';

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
		<article className='bg-white dark:bg-zinc-800 shadow-md rounded-xl mx-auto'>
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
				<AnimatePresence>
					{isHovering && (
						<motion.div
							initial={{
								opacity: '0',
								backdropFilter: 'blur(0px)',
								backgroundColor: 'transparent',
							}}
							animate={{
								opacity: isHovering ? 1 : 0,
								backdropFilter: isHovering ? 'blur(2px)' : 'blur(0px)',
								backgroundColor: isHovering
									? 'rgb(0 0 0 / 0.5)'
									: 'transparent',
							}}
							exit={{
								opacity: '0',
								backdropFilter: 'blur(0px)',
							}}
							transition={{ duration: 0.3 }}
							className='absolute top-0 left-0 z-10 rounded-t-xl w-full h-full flex justify-center items-center gap-4'>
							<a
								title='Live Demo'
								href={demoUrl}
								target='_blank'
								rel='noreferrer'
								className='border p-3 border-white text-white rounded-full hover:text-primary hover:border-primary transition-colors duration-200 hover:bg-white'>
								<PreviewIcon />
							</a>
							<a
								title={translate('code')}
								href={codeUrl}
								target='_blank'
								rel='noreferrer'
								className='border p-3 border-white text-white rounded-full hover:text-primary hover:border-primary transition-colors duration-200 hover:bg-white'>
								<GithubIcon />
							</a>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
			<div className='px-4 py-6 md:px-8'>
				<h3 className='text-center text-2xl text-primary dark:text-light font-bold border-b pb-4 border-dashed border-primary dark:border-light'>
					{title}
				</h3>
				<p className='my-6 text-gray-500 dark:text-gray-100 font-light'>
					{translate(description)}
				</p>
				<ul className='my-6 flex flex-wrap justify-center gap-2'>
					{stack.map(stack => (
						<li
							key={stack}
							className='px-4 py-2 bg-secondary dark:bg-zinc-900 text-white rounded-3xl font-medium text-sm'>
							{stack}
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
