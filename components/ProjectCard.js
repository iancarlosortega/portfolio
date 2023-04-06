import Image from 'next/image';

export const ProjectCard = ({
	title,
	description,
	stack,
	demoUrl,
	codeUrl,
	projectImg,
	order,
}) => {
	return (
		<div className='bg-white max-w-[60rem] md:min-h-[50rem] lg:min-h-[30rem] flex flex-col gap-10 lg:flex-row my-16 mx-auto py-8 px-6 md:px-16 shadow shadow-gray-400 drop-shadow-4xl'>
			<div
				className={`${
					order ? 'lg:order-2' : ''
				} scroll-image shadow drop-shadow-2xl lg:basis-1/2`}>
				<Image src={projectImg} alt={title} width={600} height={400} />
			</div>
			<div className='lg:basis-1/2'>
				<h5 className='text-center text-2xl text-primary font-bold'>{title}</h5>
				<p className='my-6 text-sm text-center text-gray-500 font-light leading-6'>
					{description}
				</p>
				{/* Stack */}
				<ul className='my-12 md:my-6 flex flex-wrap justify-center gap-4'>
					{stack.map(s => (
						<li
							key={s}
							className='px-4 py-2 bg-secondary text-white font-bold text-sm'>
							{s}
						</li>
					))}
				</ul>
				<div className='flex flex-col md:flex-row items-center justify-center gap-4'>
					<a href={demoUrl} target='_blank' className='btn'>
						<span>Live Demo</span>
					</a>
					{codeUrl && (
						<a href={codeUrl} target='_blank' className='btn'>
							<span>Código</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
