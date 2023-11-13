import { Fragment, useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Listbox, Transition } from '@headlessui/react';
import { capitalize, classNames, getFlagFromLanguage } from '../utils';
import { ChevronUpDownIcon } from './icons';

export const LanguageSwitcher = () => {
	const router = useRouter();
	const { i18n } = useTranslation();
	const { language: currentLanguage } = i18n;
	const locales = router.locales ?? [currentLanguage];

	const languageNames = useMemo(() => {
		return new Intl.DisplayNames([currentLanguage], {
			type: 'language',
		});
	}, [currentLanguage]);

	const [language, setLanguage] = useState(i18n.language);

	const handleOnChange = useCallback(
		language => {
			setLanguage(language);
			const path = router.asPath;
			return router.push(path, path, { locale: language });
		},
		[router]
	);

	return (
		<Listbox value={language} onChange={handleOnChange}>
			<div className='relative z-10 mt-1'>
				<Listbox.Button
					className={classNames(
						'relative w-[10rem] py-2 pl-3 pr-10 text-left sm:text-sm shadow-sm cursor-pointer rounded-lg bg-white',
						'border border-primary focus:outline-none dark:border-zinc-700 dark:bg-zinc-600  dark:shadow-gray-500'
					)}>
					<span className='flex items-center gap-2'>
						<Image
							src={getFlagFromLanguage(language)}
							alt={`Flag of ${languageNames.of(language)}`}
							width={20}
							height={20}
						/>
						{capitalize(languageNames.of(language) ?? language)}
					</span>
					<span className='absolute inset-y-0 right-0 flex items-center pr-2'>
						<ChevronUpDownIcon className='text-primary dark:text-light' />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<Listbox.Options
						className={classNames(
							'absolute mt-2 max-h-60 w-full overflow-auto rounded-md text-base sm:text-sm bg-white',
							'border border-primary dark:border-zinc-700 dark:bg-zinc-600 dark:shadow-gray-500',
							'ring-1 ring-black ring-opacity-5 focus:outline-none shadow-sm'
						)}>
						{locales.map(locale => (
							<Listbox.Option
								key={locale}
								className={({ active }) =>
									`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
										active && 'bg-light dark:bg-zinc-700'
									}`
								}
								value={locale}>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? 'font-medium' : 'font-normal'
											}`}>
											{capitalize(languageNames.of(locale) ?? locale)}
										</span>
										<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
											<Image
												src={getFlagFromLanguage(locale)}
												alt={`Flag of ${languageNames.of(locale)}`}
												width={20}
												height={20}
											/>
										</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};
