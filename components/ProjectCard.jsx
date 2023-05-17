import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { classNames } from '../utils';
import { GithubIcon, PreviewIcon } from './icons';

export const ProjectCard = ({
	title,
	description,
	stack,
	demoUrl,
	codeUrl,
	projectImg,
	order,
}) => {
	const { t: translate } = useTranslation('projects');

	return (
		<div
			className={classNames(
				'flex flex-col gap-10 bg-white  max-w-[60rem] md:min-h-[50rem]',
				'my-16 mx-auto py-8 px-6 md:px-16 lg:flex-row lg:min-h-[30rem]',
				'shadow shadow-gray-400 drop-shadow-4xl dark:bg-zinc-800 dark:shadow-gray-600'
			)}>
			<div
				className={`${
					order ? 'lg:order-2' : ''
				} scroll-image shadow drop-shadow-2xl lg:basis-[45%]`}>
				<Image src={projectImg} alt={title} width={600} height={400} />
			</div>
			<div className='lg:basis-[55%]'>
				<h5 className='text-center text-2xl text-primary dark:text-light font-bold border-b pb-4 border-dashed border-primary dark:border-light'>
					{title}
				</h5>
				<p className='my-6 text-center text-gray-500 dark:text-gray-100 font-light leading-6'>
					{description}
				</p>
				{/* Stack */}
				<ul className='my-12 md:my-6 flex flex-wrap justify-center gap-4'>
					{stack.map(s => (
						<li
							key={s}
							className='px-4 py-2 bg-secondary dark:bg-zinc-900 text-white font-bold text-sm'>
							{s}
						</li>
					))}
				</ul>
				<div className='flex flex-col md:flex-row items-center justify-center gap-4'>
					<a href={demoUrl} target='_blank' className='btn'>
						<span>
							Live Demo <PreviewIcon />
						</span>
					</a>
					{codeUrl && (
						<a href={codeUrl} target='_blank' className='btn'>
							<span>
								{translate('code')} <GithubIcon />
							</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
