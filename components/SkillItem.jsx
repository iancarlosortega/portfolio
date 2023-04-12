import Image from 'next/image';

export const SkillItem = ({
	imagePath,
	alt,
	icon,
	width = 70,
	height = 70,
}) => {
	return (
		<li className='flex flex-col items-center gap-2'>
			{imagePath ? (
				<Image
					className='cursor-pointer h-full transition-transform duration-300 ease hover:scale-110'
					src={imagePath}
					alt={alt}
					width={width}
					height={height}
				/>
			) : (
				icon
			)}
			<p className='text-sm text-black dark:text-light font-medium'>{alt}</p>
		</li>
	);
};
