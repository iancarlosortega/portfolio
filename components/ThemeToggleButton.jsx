import { useEffect, useState } from 'react';
import { MoonIcon, SunnyIcon } from './icons';

const themes = ['light', 'dark'];

export const ThemeToggleButton = () => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		const t = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', t);
		setTheme(t);
	};

	useEffect(() => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return setTheme(localStorage.getItem('theme'));
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return setTheme('dark');
		}
		setTheme('light');
	}, [setTheme]);

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'light') {
			root.classList.remove('dark');
		} else {
			root.classList.add('dark');
		}
	}, [theme]);

	return (
		<div className='flex items-center p-[1px] rounded-3xl bg-primary dark:bg-zinc-600'>
			{themes.map(t => {
				const checked = t === theme;
				return (
					<button
						key={t}
						className={`${
							checked ? 'bg-white text-secondary' : 'text-white'
						} cursor-pointer rounded-3xl p-2`}
						onClick={toggleTheme}
						aria-label='Toggle theme'>
						{t === 'light' ? <SunnyIcon /> : <MoonIcon />}
					</button>
				);
			})}
		</div>
	);
};
