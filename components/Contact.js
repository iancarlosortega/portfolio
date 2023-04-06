import { Title } from './Title';

export const Contact = () => {
	return (
		<section id='contact' className='max-w-[700px] mx-auto px-4 lg:px-0 pt-24'>
			<Title text='Contacto' color='secondary' />
			<form
				action='https://formsubmit.co/iancarlosortegaleon@gmail.com'
				method='POST'
				className='flex flex-col gap-8'>
				<input
					className='w-full border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary'
					name='name'
					type='text'
					placeholder='Nombres y Apellidos'
					minLength={3}
					maxLength={50}
					required
				/>
				<input
					className='w-full border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary'
					name='email'
					type='email'
					placeholder='Correo Electrónico'
					required
				/>
				<textarea
					className='w-full h-[10rem] resize-none border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary'
					name='message'
					placeholder='¡Hola! ¿En qué puedo ayudarte?'
					minLength={3}
					required
				/>
				<div className='flex justify-center mt-8 mb-16'>
					<button type='submit' className='btn'>
						<span>Enviar Mensaje</span>
					</button>
				</div>
			</form>
		</section>
	);
};
