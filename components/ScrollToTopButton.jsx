import { useEffect, useState } from 'react';
import { classNames } from '../utils';

export const ScrollToTopButton = () => {
	
	const [showScrollButton, setShowScrollButton] = useState(false);
	
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleScroll = () => {
		if(window.pageYOffset > 15) {
			setShowScrollButton(true);
		} else {
			setShowScrollButton(false)
		}
	}

	useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

	if(!showScrollButton) return;

	return (
		<div className='sticky bottom-5 z-40 w-full flex justify-end pr-4 mt-8 animate-fade-in-faster'>
			<button
				onClick={handleClick}
				className={classNames(
					'rounded-full p-5 bg-teal-700 hover:bg-teal-600 transition duration-200 ease-in',
					'drop-shadow-[0_0_0.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
				)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='#fff'
					className='w-6 h-6'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
					/>
				</svg>
			</button>
		</div>
	);
};
