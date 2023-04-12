import { useTranslation } from 'next-i18next';
import { classNames } from '../utils';
import { Navbar } from './';

export const Main = () => {
	const { t: translate } = useTranslation('home');

	return (
		<main className='h-min-[100%] h-screen flex flex-col overflow-hidden'>
			<Navbar />
			<div className='flex-1 flex flex-col items-center justify-center p-8 mt-16 md:mt-20'>
				<div className='drop-shadow-lg shadow-black dark:shadow-white'>
					<h2
						className={classNames(
							'uppercase text-3xl md:text-4xl text-secondary dark:text-gray-100 font-bold tracking-wide text-center',
							'drop-shadow-[0_0_0.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70] animate-left-right'
						)}>
						{translate('title')}{' '}
						<span className='text-primary'>Ian Carlos</span> &#128516; <br />
						{translate('subtitle')}
					</h2>
				</div>
				<div className='flex flex-col gap-4 md:flex-row md:flex-wrap justify-center mt-[5rem] animate-left-right'>
					<a href='#skills' className='btn'>
						<span>{translate('menuItem1')}</span>
					</a>
					<a href='#projects' className='btn'>
						<span>{translate('menuItem2')}</span>
					</a>
					<a href='#about' className='btn'>
						<span>{translate('menuItem3')}</span>
					</a>
					<a href='#contact' className='btn'>
						<span>{translate('menuItem4')}</span>
					</a>
				</div>
			</div>
		</main>
	);
};
