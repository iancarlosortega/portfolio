import Image from 'next/image';

export const About = () => {
	return (
		<div className='bg-gradient-to-b md:bg-gradient-to-br from-teal-600 to-teal-400 custom-clip'>
			<section
				id='about'
				className='max-w-[1110px] mx-auto px-4 md:px-12 lg:px-0 lg:py-24'>
				<h3 className='text-[40px] text-white text-center font-bold uppercase pt-24 mb-16'>
					Sobre Mi
				</h3>
				<div className='flex flex-col md:flex-row gap-6 items-center md:items-start justify-center pb-16'>
					<Image
						className='md:basis-1/2 w-[250px] max-w-[300px] md:mx-auto rounded-full drop-shadow-lg'
						src='/test.png'
						alt='Foto de Perfil'
						width={80}
						height={80}
					/>
					<div className='flex flex-col gap-4 items-center text-center text-white text-sm lg:text-base my-8 md:my-0 px-8 md:px-4 md:basis-1/2'>
						<p>
							Consequat labore nulla nisi sunt ullamco aliqua in anim. Esse anim
							et velit velit incididunt Lorem quis incididunt magna tempor
							pariatur est.
						</p>
						<p>
							Cillum aliqua mollit amet ut dolor aliqua adipisicing
							reprehenderit reprehenderit occaecat ex irure. Ut deserunt elit
							dolore commodo ullamco Lorem ullamco non non. Voluptate consequat
							Lorem labore irure irure.
						</p>
						<p>
							Occaecat anim irure dolor pariatur anim id incididunt dolore enim
							laboris dolore eiusmod cupidatat. Lorem pariatur ad consectetur ex
							ipsum exercitation Lorem aliqua sunt velit aliqua consectetur sit.
						</p>
						<button className='px-6 py-2 mt-8 mb-16 border border-white text-white font-bold'>
							Descargar CV
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};
