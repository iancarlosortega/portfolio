import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { classNames } from '../utils';
import { Title } from './';
import { DownloadIcon } from './icons';

export const About = () => {
	const { t: translate } = useTranslation(['common', 'about']);

	return (
		<div className='custom-clip-shadow'>
			<div
				className={classNames(
					'bg-gradient-to-b  md:bg-gradient-to-br from-teal-600  to-teal-800',
					'dark:bg-gradient-to-br dark:from-teal-800 dark:to-zinc-800 custom-clip'
				)}>
				<section
					id='about'
					className='max-w-[1110px] mx-auto px-4 md:px-12 lg:px-0 pt-24 lg:pt-48 lg:pb-48 lg:mt-24'>
					<Title text={translate('about:title')} color='white' />
					<div className='flex flex-col md:flex-row gap-6 items-center md:items-start justify-center pb-24'>
						<Image
							className='md:basis-1/2 w-[250px] md:max-w-[300px] lg:max-w-[350px] md:mx-auto rounded-full drop-shadow-lg'
							src='/images/iancarlosortega.jpg'
							alt='Foto de Perfil'
							width={400}
							height={400}
						/>
						<div
							className={classNames(
								'flex md:basis-1/2 flex-col gap-4 items-center text-center text-white',
								'text-sm lg:text-lg my-8 md:my-0 px-8 md:px-4'
							)}>
							<p>{translate('about:description.firstParagraph')}</p>
							<p>{translate('about:description.secondParagraph')}</p>
							<p className='mb-4'>
								{translate('about:description.thirdParagraph')}&#128054;
							</p>
							<a
								className='btn btn-secondary'
								href={translate('cv-link')}
								target='_blank'
								rel='noreferrer noopener'>
								<span>
									{translate('about:download')} <DownloadIcon />
								</span>
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
