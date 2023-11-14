import { useTranslation } from 'next-i18next';
import { classNames } from '../../utils';
import { Navbar } from '../../components';
import Image from 'next/image';
import {
	ComputerIcon,
	NestJsIcon,
	NextJsIcon,
	ReactIcon,
	TypeScriptIcon,
} from '../../components/icons';

export const Main = () => {
	const { t: translate } = useTranslation('home');

	return (
		<main className='h-min-[100%] h-screen flex flex-col overflow-hidden'>
			<Navbar />
			<div className='flex-1 flex flex-col items-center justify-center p-8 mt-16 md:mt-20'>
				<div className='drop-shadow-lg shadow-black dark:shadow-white md:mt-16'>
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

				<div className='flex flex-col gap-4 md:flex-row md:flex-wrap justify-center mt-8 md:mt-32 animate-left-right relative'>
					<a href='#experience' className='btn'>
						<span>{translate('menuItem1')}</span>
						<ComputerIcon className='absolute hidden md:block w-32 bottom-[40px] left-auto md:left-5 xl:left-auto z-20 drop-shadow-lg text-[#F2F2F2] dark:text-neutral-800' />
					</a>
					<a href='#projects' className='btn'>
						<span>{translate('menuItem2')}</span>
					</a>
					<a href='#about' className='btn'>
						<span>{translate('menuItem3')}</span>
					</a>
					<a href='#contact' className='btn'>
						<span>{translate('menuItem4')}</span>
						<Image
							width={200}
							height={200}
							src='/images/ilustration-person.svg'
							alt='Person ilustration'
							className='absolute hidden md:block w-32 right-[-70px] -bottom-28 z-20 drop-shadow-lg'
						/>
					</a>
				</div>
				<div className='mt-16'>
					<p className='text-sm text-center font-bold text-secondary dark:text-gray-100 uppercase tracking-widest animate-right-left'>
						{translate('stack')}
					</p>
					<div className='flex justify-center gap-4 my-4 [&>*]:cursor-pointer [&>*]:transition-transform [&>*]:duration-300 [&>*]:ease animate-right-left'>
						<TypeScriptIcon className='w-10 h-10 hover:scale-110' />
						<ReactIcon className='w-10 h-10 hover:scale-110' />
						<NextJsIcon className='w-10 h-10 hover:scale-110' />
						<NestJsIcon className='w-10 h-10 hover:scale-110' />
					</div>
				</div>
			</div>
		</main>
	);
};
