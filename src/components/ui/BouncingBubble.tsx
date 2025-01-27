"use client";

import { useState, useEffect } from "react";

const NUM_BUBBLES = 5;

interface Bubble {
	id: number;
	size: number;
	x: number;
	y: number;
	image: string;
}

export const BubbleEffect = () => {
	const [bubbles, setBubbles] = useState<Bubble[]>([]);

	useEffect(() => {
		const newBubbles = Array.from({ length: NUM_BUBBLES }, (_, i) => ({
			id: i,
			size: Math.floor(Math.random() * 100) + 50, // Random size between 50 and 150
			x: Math.random() * 100,
			y: Math.random() * 100,
			image: `https://source.unsplash.com/random/150x150?sig=${i}`,
		}));
		setBubbles(newBubbles);
	}, []);

	return (
		<div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
			{bubbles.map((bubble) => (
				<div
					key={bubble.id}
					className="absolute rounded-full overflow-hidden animate-float"
					style={{
						width: `${bubble.size}px`,
						height: `${bubble.size}px`,
						left: `${bubble.x}%`,
						top: `${bubble.y}%`,
						animationDuration: `${Math.random() * 10 + 10}s`, // Random duration between 10s and 20s
						animationDelay: `${Math.random() * -20}s`, // Random delay to stagger animations
					}}>
					<img
						src={bubble.image || "/placeholder.svg"}
						alt={`Bubble ${bubble.id}`}
						className="w-full h-full object-cover"
					/>
				</div>
			))}
		</div>
	);
};
