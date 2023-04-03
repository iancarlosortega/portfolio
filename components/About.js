import Image from 'next/image';
import { Title } from './Title';

export const About = () => {
	return (
		<div className='bg-gradient-to-b md:bg-gradient-to-br from-teal-600 to-teal-800 custom-clip'>
			<section
				id='about'
				className='max-w-[1110px] mx-auto px-4 md:px-12 lg:px-0 pt-24 lg:pt-48 lg:pb-48 lg:mt-24'>
				<Title text='Sobre mi' color='white' />
				<div className='flex flex-col md:flex-row gap-6 items-center md:items-start justify-center pb-24'>
					<Image
						className='md:basis-1/2 w-[250px] md:max-w-[300px] lg:max-w-[350px] md:mx-auto rounded-full drop-shadow-lg'
						src='/images/iancarlosortega.jpg'
						alt='Foto de Perfil'
						width={400}
						height={400}
					/>
					<div className='flex flex-col gap-4 items-center text-center text-white text-sm lg:text-lg my-8 md:my-0 px-8 md:px-4 md:basis-1/2'>
						<p>
							Soy un apasionado desarrollador web con más de 2 años de
							experiencia en la creación de sitios web y aplicaciones. Desde el
							principio de mi carrera, he estado enfocado en ofrecer soluciones
							tecnológicas innovadoras que sean fáciles de usar y altamente
							funcionales para los usuarios finales.
						</p>
						<p>
							Mi formación en informática me proporcionó una base sólida en la
							teoría y las habilidades prácticas necesarias para desarrollar
							software de alta calidad.
						</p>
						<p className='mb-4'>
							Además, en mis tiempos libres me gusta escuchar música, jugar
							videojuegos, pasar tiempo con mi familia o amigos y sacar a pasear
							a mi mascota &#128054;
						</p>
						<a
							href='https://drive.google.com/file/d/1RZUQ5Zct4BA9uYxNqWSipNos6uC7YDw9/view?usp=sharing'
							target='_blank'
							className='btn btn-secondary'>
							<span>Descargar CV</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};
