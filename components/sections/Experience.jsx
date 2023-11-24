import { useTranslation } from 'next-i18next';
import { Title } from '../../components';
import { BookIcon, SuitCaseIcon } from '../../components/icons';

export const Experience = () => {
	const { t: translate } = useTranslation('experience');

	return (
		<section
			id='experience'
			className='max-w-[1110px] mx-auto px-4 xl:px-0 py-24'>
			<Title text={translate('title')} color='secondary' />
			<div className='flex flex-col gap-6 relative py-8'>
				<div className='w-1 h-full absolute top-0 left-0 md:right-0 mx-auto bg-light dark:bg-secondary rounded-sm'></div>
				<div className='rounded-md bg-white dark:bg-zinc-800 shadow-md py-6 px-8 relative w-[90%] md:w-[calc(50%-2rem)] self-end'>
					<div className='bg-primary rounded-full w-12 h-12 p-2 flex items-center justify-center absolute top-2 left-[-56px]'>
						<SuitCaseIcon className='w-8 h-8 text-white dark:text-zinc-200' />
					</div>
					<h4 className='font-bold text-lg leading-tight text-primary dark:text-light'>
						{translate('firstJob.title')}
					</h4>
					<p className='text-xs font-bold text-gray-500 dark:text-gray-300 italic'>
						{translate('firstJob.date')}
					</p>
					<ul className='mt-3 pl-4 text-gray-500 dark:text-gray-100 list-disc'>
						<li>{translate('firstJob.item1')}</li>
						<li>{translate('firstJob.item2')}</li>
						<li>{translate('firstJob.item3')}</li>
					</ul>
				</div>
				<div className='rounded-md bg-white dark:bg-zinc-800 shadow-md py-6 px-8 relative w-[90%] md:w-[calc(50%-2rem)] self-end md:self-start'>
					<div className='bg-primary rounded-full w-12 h-12 p-2 flex items-center justify-center absolute top-2 left-[-56px] md:left-auto md:right-[-56px]'>
						<BookIcon className='w-8 h-8 text-white dark:text-zinc-200' />
					</div>
					<h4 className='font-bold text-lg leading-tight text-primary dark:text-light'>
						{translate('education.title')}
					</h4>
					<p className='text-xs font-bold text-gray-500 dark:text-gray-300 italic'>
						{translate('education.date')}
					</p>
					<ul className='mt-3 pl-4 text-gray-500 dark:text-gray-100 list-disc'>
						<li>{translate('education.item1')}</li>
						<li>{translate('education.item2')}</li>
						<li>{translate('education.item3')}</li>
						<li>{translate('education.item4')}</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
