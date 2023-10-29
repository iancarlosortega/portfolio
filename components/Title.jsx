export const Title = ({ text, color }) => {
	return (
		<div className='flex flex-col items-center gap-2 mb-16 drop-shadow-[0_0_0.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70]'>
			<h3
				className={`text-[40px] text-${color} dark:text-gray-100 text-center font-bold uppercase`}>
				{text}
			</h3>
			<div className={`w-20 h-[2px] bg-${color} dark:bg-gray-100`}></div>
		</div>
	);
};
