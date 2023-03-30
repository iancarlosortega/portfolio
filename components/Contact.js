export const Contact = () => {
	return (
		<section id='contact' className='max-w-[700px] mx-auto px-4 lg:px-0'>
			<h3 className='text-[40px] text-secondary text-center font-bold uppercase pt-24 mb-16'>
				Contacto
			</h3>
			<form className='flex flex-col gap-8'>
				<input
					className='w-full border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary'
					type='text'
					placeholder='Escribe tu nombre'
				/>
				<input
					className='w-full border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary'
					type='email'
					placeholder='Escribe tu correo'
				/>
				<textarea
					className='w-full h-[10rem] resize-none border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary'
					placeholder='Escribe tu mensaje'
				/>
				<div className='flex justify-center mt-8 mb-16'>
					<button className='btn'>
						<span>Enviar Mensaje</span>
					</button>
				</div>
			</form>
		</section>
	);
};
