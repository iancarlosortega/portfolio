import { Navbar, Skills } from '../components';

export default function Home() {
	return (
		<>
			<main className='h-min-[100%] h-screen flex flex-col'>
				<Navbar />
				<div className='flex-1 flex flex-col items-center justify-center p-8'>
					<h2 className='uppercase text-4xl text-secondary font-bold tracking-wide text-center'>
						Hola, soy <span className='text-primary'>Ian Carlos.</span> <br />
						Desarrollador Frontend.
					</h2>
					<div className='flex flex-col gap-4 md:flex-row mt-[5rem]'>
						<a href='#skills' className='btn'>
							<span>Habilidades</span>
						</a>
						<a className='btn'>
							<span>Proyectos</span>
						</a>
						<a className='btn'>
							<span>Sobre mi</span>
						</a>
						<a className='btn'>
							<span>Contacto</span>
						</a>
					</div>
				</div>
			</main>
			<Skills />
		</>
	);
}
