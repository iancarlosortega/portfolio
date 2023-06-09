import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import { Menu, Transition } from '@headlessui/react';
import { classNames } from '../utils';
import { LanguageSwitcher } from './';
import {
	DocumentIcon,
	GithubIcon,
	LinkedInIcon,
	MenuIcon,
	YoutubeIcon,
} from './icons';

export const DropdownMenu = () => {
	const { t: translate } = useTranslation('common');

	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button
					className={classNames(
						'inline-flex justify-center px-2 py-2 text-sm font-medium shadow-sm rounded-md border border-zinc-400',
						'focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-100',
						'hover:bg-teal-50 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-all'
					)}
					aria-label='menu'>
					<MenuIcon />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'>
				<Menu.Items
					className={classNames(
						'absolute left-0 z-10 mt-4 px-2 py-4 w-56 origin-top-right rounded-md shadow-xl bg-teal-50 divide-zinc-400',
						'border border-zinc-400 ring-1 ring-black ring-opacity-5 focus:outline-none',
						'dark:bg-zinc-800 dark:border-zinc-700 dark:divide-zinc-700'
					)}>
					<ul className='flex flex-col gap-4'>
						<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
							<a
								className='flex items-center gap-2'
								href='https://www.linkedin.com/in/ian-carlos-ortega-05a3a0270/'
								target='_blank'
								rel='noreferrer noopener'>
								<LinkedInIcon className='text-primary dark:text-light' />
								LinkedIn
							</a>
						</li>
						<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
							<a
								className='flex items-center gap-2'
								href='https://github.com/iancarlosortega'
								target='_blank'
								rel='noreferrer noopener'>
								<GithubIcon className='text-primary dark:text-light' />
								Github
							</a>
						</li>
						{/* TODO: Agregar YT cuando hayan videos */}
						{/* <li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
							<a
								className='flex items-center gap-2'
								href='https://www.youtube.com/'
								target='_blank'
								rel='noreferrer noopener'>
								<YoutubeIcon className='text-primary dark:text-light' />
								Youtube
							</a>
						</li> */}
						<li className='cursor-pointer transition-transform duration-300 ease-in hover:-translate-y-1'>
							<a
								className='flex items-center gap-2'
								href={translate('cv-link')}
								target='_blank'
								rel='noreferrer noopener'>
								<DocumentIcon className='text-primary dark:text-light' />
								Currículum Vitae
							</a>
						</li>
						<li>
							<LanguageSwitcher />
						</li>
					</ul>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};
