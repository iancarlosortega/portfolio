import Image from 'next/image';

export const ProjectCard = ({
	title,
	description,
	stack,
	demoUrl,
	codeUrl,
	projectImg,
}) => {
	return (
		<div className='grid bg-white gap-10 md:grid-cols-[40%_60%] my-16 py-8 px-6 md:px-16 shadow shadow-gray-400 drop-shadow-4xl'>
			<div>
				<h5 className='text-center text-2xl text-primary font-bold'>{title}</h5>
				<p className='my-6 text-sm text-center md:text-left text-gray-500 font-light leading-6'>
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
			<div className='order-first md:order-2 relative'>
				<Image className='object-cover' src={projectImg} alt='FreeMove' fill />
			</div>
		</div>
	);
};
