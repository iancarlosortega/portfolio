import { useRef } from 'react';
import { useTranslation } from 'next-i18next';
import confetti from 'canvas-confetti';
import { Title } from '../../components';
import { classNames } from '../../utils';
import { MessageIcon } from '../../components/icons';

export const Contact = () => {

	const formRef = useRef(null)
	const { t: translate } = useTranslation('contact');

	const handleSubmit = async (event) => {
		event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
    })

		const { error } = await response.json()

		if (error) {
			console.error(error)
			return
		}

		formRef.current.reset()
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6, x: 0.5 },
		});

	}

	return (
		<section
			id='contact'
			className='max-w-[700px] mx-auto px-4 lg:px-0 my-8 bg-transparent'>
			<Title text={translate('title')} color='secondary' />
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className='flex flex-col gap-8'>
				<input
					className={classNames(
						'w-full py-3 px-6 border-2 border-light text-secondary',
						'focus:border-primary focus:outline-none caret-secondary',
						'dark:bg-secondary dark:text-gray-100  dark:caret-light dark:border-zinc-600 dark:focus:border-primary'
					)}
					name='name'
					type='text'
					placeholder={translate('name')}
					minLength={3}
					maxLength={50}
					required
				/>
				<input
					className={classNames(
						'w-full py-3 px-6 border-2 border-light text-secondary',
						'focus:border-primary focus:outline-none caret-secondary',
						'dark:bg-secondary dark:text-gray-100  dark:caret-light dark:border-zinc-600 dark:focus:border-primary'
					)}
					name='email'
					type='email'
					placeholder={translate('email')}
					required
				/>
				<textarea
					className={classNames(
						'w-full h-[10rem] resize-none py-3 px-6 border-2 border-light text-secondary',
						'focus:border-primary focus:outline-none caret-secondary',
						'dark:bg-secondary dark:text-gray-100  dark:caret-light dark:border-zinc-600 dark:focus:border-primary'
					)}
					name='message'
					placeholder={translate('message')}
					minLength={3}
					required
				/>
				<div className='flex justify-center mt-8 mb-16'>
					<button type='submit' className='btn'>
						<span>
							{translate('send')} <MessageIcon />
						</span>
					</button>
				</div>
			</form>
		</section>
	);
};
