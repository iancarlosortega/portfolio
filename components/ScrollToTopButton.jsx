import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpIcon } from './icons';
import { classNames } from '../utils';

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
						<ArrowUpIcon className='w-6 h-6 stroke-2' />
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
