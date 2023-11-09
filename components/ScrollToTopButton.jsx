import { useEffect, useState } from 'react';
import { classNames } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleScroll = () => {
		if (window.scrollY > 15) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{
						opacity: '0',
					}}
					animate={{
						opacity: isVisible ? 1 : 0,
					}}
					exit={{
						opacity: '0',
					}}
					transition={{ duration: 0.2 }}
					className='sticky bottom-5 z-40 w-full flex justify-end pr-4 mt-8'>
					<button
						onClick={handleClick}
						className={classNames(
							'rounded-full p-5 bg-teal-700 hover:bg-teal-600 transition duration-200 ease-in',
							'shadow-md dark:shadow-gray-600'
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
				</motion.div>
			)}
		</AnimatePresence>
	);
};
