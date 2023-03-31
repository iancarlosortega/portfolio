import { Navbar } from './Navbar';

export const Main = () => {
	return (
		<main className='h-min-[100%] h-screen flex flex-col overflow-hidden'>
			<Navbar />
			<div className='flex-1 flex flex-col items-center justify-center p-8'>
				<h2 className='uppercase text-3xl md:text-4xl text-secondary font-bold tracking-wide text-center animate-left-right'>
					Hola, soy <span className='text-primary'>Ian Carlos</span> &#128516;{' '}
					<br />
					Desarrollador Web
				</h2>
				<div className='flex flex-col gap-4 md:flex-row md:flex-wrap justify-center mt-[5rem] animate-left-right'>
					<a href='#skills' className='btn'>
						<span>Habilidades</span>
					</a>
					<a href='#projects' className='btn'>
						<span>Proyectos</span>
					</a>
					<a href='#about' className='btn'>
						<span>Sobre mi</span>
					</a>
					<a href='#contact' className='btn'>
						<span>Contacto</span>
					</a>
				</div>
			</div>
		</main>
	);
};
