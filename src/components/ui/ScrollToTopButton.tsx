"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "../icons";
import { cn } from "@/utils/classNames";

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;
			const scrollHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

			setScrollProgress(progress);
			setIsVisible(scrollTop > 300); // Show button after scrolling 300px
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={cn(
				"fixed bottom-5 z-40 w-full flex justify-end pr-4 transition-opacity duration-200",
				{
					"opacity-100": isVisible,
					"opacity-0 pointer-events-none": !isVisible,
				}
			)}>
			<button
				onClick={scrollToTop}
				className="flex h-10 w-10 bg-white items-center justify-center rounded-full bg-background shadow-lg transition-all duration-300 hover:shadow-xl md:right-8 md:bottom-8"
				style={{
					boxShadow: "0 4px 12px rgba(0,0,0,0.30)",
				}}>
				<svg className="absolute h-12 w-12" viewBox="0 0 48 48">
					<circle
						cx="24"
						cy="24"
						r="20"
						fill="none"
						stroke="#eaeaea"
						strokeWidth="2"
					/>
					<circle
						cx="24"
						cy="24"
						r="20"
						fill="none"
						stroke="#0E8388"
						strokeWidth="2"
						strokeDasharray="126"
						strokeDashoffset={126 - (126 * scrollProgress) / 100}
						transform="rotate(-90 24 24)"
						strokeLinecap="round"
					/>
				</svg>

				<ArrowUpIcon className="z-10 h-4 w-4 text-black stroke-2" />
			</button>
		</div>
	);
};
