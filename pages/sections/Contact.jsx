import { useTranslation } from 'next-i18next';
import { classNames } from '../../utils';
import { Title } from '../../components';
import { MessageIcon } from '../../components/icons';

export const Contact = () => {
	const { t: translate } = useTranslation('contact');

	return (
		<section
			id='contact'
			className='max-w-[700px] mx-auto px-4 lg:px-0 pt-24 bg-transparent'>
			<Title text={translate('title')} color='secondary' />
			<form
				action='https://formsubmit.co/f0b3e2e3828c69b84ac4a862c955def8'
				method='POST'
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
