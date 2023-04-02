export const Title = ({ text, color }) => {
	return (
		<div className='flex flex-col items-center mb-16'>
			<h3
				className={`text-[40px] text-${color} text-center font-bold uppercase pt-24 `}>
				{text}
			</h3>
			<div className={`w-16 h-[2px] bg-${color}`}></div>
		</div>
	);
};
