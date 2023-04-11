export const Title = ({ text, color }) => {
	return (
		<div className='flex flex-col items-center gap-6 mb-16'>
			<h3
				className={`text-[40px] text-${color} dark:text-gray-100 text-center font-bold uppercase`}>
				{text}
			</h3>
			<div className={`w-16 h-[2px] bg-${color} dark:bg-gray-100`}></div>
		</div>
	);
};
