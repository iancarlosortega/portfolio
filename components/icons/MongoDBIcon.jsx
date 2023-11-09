export const MongoDBIcon = ({ className = 'w-20 h-20' }) => {
	return (
		<svg className={className} viewBox='0 0 32 32'>
			<defs>
				<linearGradient
					id='a'
					x1='-645.732'
					y1='839.188'
					x2='-654.59'
					y2='839.25'
					gradientTransform='matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0.231' stopColor='#999875' />
					<stop offset='0.563' stopColor='#9B9977' />
					<stop offset='0.683' stopColor='#A09F7E' />
					<stop offset='0.768' stopColor='#A9A889' />
					<stop offset='0.837' stopColor='#B7B69A' />
					<stop offset='0.896' stopColor='#C9C7B0' />
					<stop offset='0.948' stopColor='#DEDDCB' />
					<stop offset='0.994' stopColor='#F8F6EB' />
					<stop offset='1' stopColor='#FBF9EF' />
				</linearGradient>
				<linearGradient
					id='b'
					x1='-644.287'
					y1='823.405'
					x2='-657.028'
					y2='845.476'
					gradientTransform='matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0' stopColor='#48A547' />
					<stop offset='1' stopColor='#3F9143' />
				</linearGradient>
				<linearGradient
					id='c'
					x1='-643.386'
					y1='839.485'
					x2='-652.418'
					y2='833.417'
					gradientTransform='matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)'
					gradientUnits='userSpaceOnUse'>
					<stop offset='0' stopColor='#41A247' />
					<stop offset='0.352' stopColor='#4BA74B' />
					<stop offset='0.956' stopColor='#67B554' />
					<stop offset='1' stopColor='#69B655' />
				</linearGradient>
			</defs>
			<path
				d='M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z'
				fill='url(#a)'
			/>
			<path
				d='M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z'
				fill='url(#b)'
			/>
			<path
				d='M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z'
				fill='url(#c)'
			/>
		</svg>
	);
};
