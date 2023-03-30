import {
	About,
	Contact,
	Footer,
	Navbar,
	Projects,
	Skills,
} from '../components';

export default function Home() {
	return (
		<>
			<main className='h-min-[100%] h-screen flex flex-col'>
				<Navbar />
				<div className='flex-1 flex flex-col items-center justify-center p-8'>
					<h2 className='uppercase text-3xl md:text-4xl text-secondary font-bold tracking-wide text-center'>
						Hola, soy <span className='text-primary'>Ian Carlos</span> &#128516;{' '}
						<br />
						Desarrollador Web
					</h2>
					<div className='flex flex-col gap-4 md:flex-row md:flex-wrap justify-center mt-[5rem]'>
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
			<Skills />
			<div className='bg-gray-50'>
				<Projects />
			</div>
			<About />
			<Contact />
			<Footer />
		</>
	);
}
