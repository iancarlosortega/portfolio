"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/utils/classNames";
import { ArrowUpIcon } from "@/components/icons";

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleScroll = useCallback(() => {
		setIsVisible(window.scrollY > 15);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<div
			className={cn(
				"sticky bottom-5 z-40 w-full flex justify-end pr-4 mt-8 transition-opacity duration-200",
				{
					"opacity-100": isVisible,
					"opacity-0 pointer-events-none": !isVisible,
				}
			)}>
			<button
				type="button"
				onClick={handleClick}
				className={cn(
					"rounded-full p-5 bg-teal-700 hover:bg-teal-600 transition duration-200 ease-in",
					"shadow-md dark:shadow-gray-600"
				)}>
				<ArrowUpIcon className="w-6 h-6 stroke-2" />
			</button>
		</div>
	);
};
