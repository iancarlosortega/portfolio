import { useForm } from 'react-hook-form';

export const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => console.log(data);

	return (
		<section id='contact' className='max-w-[700px] mx-auto px-4 lg:px-0'>
			<h3 className='text-[40px] text-secondary text-center font-bold uppercase pt-24 mb-16'>
				Contacto
			</h3>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
				<div className='grid gap-2'>
					<input
						className={`
							w-full border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary 
							${errors.name && 'border-red-600 focus:border-red-600 placeholder:text-red-500'}
						`}
						type='text'
						placeholder='Escribe tu nombre'
						{...register('name', {
							required: 'Campo requerido',
							minLength: {
								value: 3,
								message: 'Debe tener por lo menos 3 caracteres',
							},
							maxLength: {
								value: 100,
								message: 'Debe tener máximo 100 caracteres',
							},
						})}
					/>
					{errors.name && (
						<p className='text-red-600 font-bold text-[12px] md:text-sm'>
							{errors.name?.message}
						</p>
					)}
				</div>
				<div className='grid gap-2'>
					<input
						className={`
							w-full border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary 
							${
								errors.email &&
								'border-red-600 focus:border-red-600 placeholder:text-red-500'
							}
						`}
						type='email'
						placeholder='Escribe tu correo'
						{...register('email', {
							required: 'Campo requerido',
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Por favor, ingrese un email válido',
							},
							maxLength: {
								value: 100,
								message: 'Debe tener máximo 100 caracteres',
							},
						})}
					/>
					{errors.email && (
						<p className='text-red-600 font-bold text-[12px] md:text-sm'>
							{errors.email?.message}
						</p>
					)}
				</div>
				<div className='grid gap-2'>
					<textarea
						className={`
							w-full h-[10rem] resize-none border-2 border-light py-3 px-6 text-secondary focus:border-primary focus:outline-none caret-secondary 
							${
								errors.message &&
								'border-red-600 focus:border-red-600 placeholder:text-red-500'
							}
						`}
						placeholder='Escribe tu mensaje'
						{...register('message', {
							required: 'Campo requerido',
							minLength: {
								value: 3,
								message: 'Debe tener por lo menos 3 caracteres',
							},
						})}
					/>
					{errors.message && (
						<p className='text-red-600 font-bold text-[12px] md:text-sm'>
							{errors.message?.message}
						</p>
					)}
				</div>
				<div className='flex justify-center mt-8 mb-16'>
					<button className='btn'>
						<span>Enviar Mensaje</span>
					</button>
				</div>
			</form>
		</section>
	);
};
