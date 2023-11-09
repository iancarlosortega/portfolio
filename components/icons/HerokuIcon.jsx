export const HerokuIcon = ({ className = 'w-20 h-20' }) => {
	return (
		<svg className={className} viewBox='0 0 512 512' fill='#409'>
			<rect width='512' height='512' rx='15%' />
			<path
				d='M367 99H145c-22 0-30 8-30 30v254c0 22 8 30 30 30h222c22 0 30-8 30-30V129c0-22-9-30-30-30'
				stroke='#FFFFFF'
				strokeWidth='16'
			/>
			<path
				fill='#FFFFFF'
				d='M182 284c56-28 94-31 107-25 9 4 9 15 9 15v99h33V273s-1-32-27-44-62-1-88 6v-95h-34m124 54s22-22 25-54h-34c-5 29-25 54-25 54m-90 178l37-33-37-33'
			/>
		</svg>
	);
};
