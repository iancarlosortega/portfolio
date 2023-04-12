export const ScrollToTopButton = () => {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='sticky bottom-5 z-40 w-full flex justify-end pr-4 mt-8'>
			<button
				onClick={handleClick}
				className='rounded-full p-5 bg-teal-700 hover:bg-teal-600 transition duration-200 ease-in shadow shadow-teal-800 drop-shadow-2xl'>
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
