import { ProjectCard } from './ProjectCard';

export const Projects = () => {
	return (
		<section id='projects' className='max-w-[1110px] mx-auto px-4 lg:px-0'>
			<h3 className='text-[40px] text-secondary text-center font-bold uppercase pt-24 mb-16'>
				Proyectos
			</h3>
			<div className='pb-32'>
				<ProjectCard
					title='FreeMove &#128692;'
					description='FreeMove es un sitio web enfocado en ciclistas, donde los mismos podrán revisar las rutas que han generado mediante el aplicativo móvil disponible tanto para Android como IOs. Además, la aplicación les mostrará información más detallada a manera de gráficas como cuántas calorías han quemado, los kilómetros recorridos, entre otros.'
					stack={['Angular', 'Firebase', 'Mapbox']}
					demoUrl='https://freemove-aa0c5.web.app/'
					projectImg='/projects/freemove.jpg'
				/>
				<ProjectCard
					title='UTPL Play &#127909;'
					description='La aplicación de UTPLPlay permite a sus usuarios encontrar un contenido educativo proveído por la Universidad Técnica Particular de Loja de una manera más amena y organizada según las distintas facultades y materias impartidas en las mismas. De esta manera, los estudiantes se podrán preparar de una mejor manera para sus clases o repasar algunos temas de su interés.'
					stack={['Angular', 'Firebase']}
					demoUrl='https://play.liidutpl.ec/'
					codeUrl='https://github.com/iancarlosortega/utplPlay'
					projectImg='/projects/utpl-play.jpg'
					order={true}
				/>
				<ProjectCard
					title='Teslo Shop &#128085;'
					description='Con un diseño simple pero minimalista, Teslo busca incrementar sus ventas mediante una plataforma en línea que distribuye su ropa en 3 categorías: hombre, mujer y unisexo. Con funcionalidades necesarias como el carrito de compras y pasarela de pagos tanto para Paypal como para tarjetas de crédito.'
					stack={['Next.Js', 'Node.Js', 'MongoDB', 'Docker']}
					demoUrl='https://teslo-shop-topaz.vercel.app/'
					codeUrl='https://github.com/Curso-NextJs/teslo-shop'
					projectImg='/projects/teslo-shop.jpg'
				/>
				<ProjectCard
					title='Creando Cariño &#127873;'
					description='Creando Cariño es una tienda online que vende regalos personalizados según las preferencias del usuario que se puede contactar con el personal mediante WhatsApp o solicitar algún regalo que se muestre ya en el catálogo de la plataforma, la cual tiene una gran diversidad de tipos de regalos para diferentes momentos especiales.'
					stack={['Angular', 'Firebase']}
					demoUrl='https://creando-carino.web.app/'
					codeUrl='https://github.com/iancarlosortega/creandoCarino'
					projectImg='/projects/creando-carino.jpg'
					order={true}
				/>
				<ProjectCard
					title='Arch Studio &#127961;'
					description='Arch Studio es un sitio web el cual tiene como objetivo mostrar los servicios y proyectos realizados por un arquitecto, para lograr aumentar el número de sus clientes y así poder generar más ingresos. El sitio web cuenta con un diseño minimalista y moderno, además de que se ha utilizado el framework Astro para la generación de sitios estáticos.'
					stack={['Astro', 'React', 'TailwindCSS']}
					demoUrl='https://arch-studio-iota.vercel.app/'
					codeUrl='https://github.com/iancarlosortega/astro-studio'
					projectImg='/projects/arch-studio.jpg'
				/>
			</div>
		</section>
	);
};
