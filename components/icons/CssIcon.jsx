export const CssIcon = ({ className = 'w-20 h-20' }) => {
	return (
		<svg viewBox='0 0 600 700' className={className}>
			<g clipPath='url(#clip0_1_2)'>
				<path d='M50 625L0 0H600L550 625L300 700L50 625Z' fill='#1172B8' />
				<path d='M550 50H300V662.5L500 600L550 50Z' fill='#33AADD' />
				<path
					d='M387.5 362.5H137.5L125 275L325 212.5H125L112.5 137.5H500L487.5 225L325 287.5H475L450 525L300 575L150 525L137.5 400H212.5L225 462.5L300 487.5L375 462.5L387.5 362.5Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_2'>
					<rect width='600' height='700' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};
