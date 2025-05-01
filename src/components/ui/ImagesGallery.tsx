"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

interface ImageGalleryProps {
	images?: string[];
	autoplayInterval?: number;
	initialAutoplay?: boolean;
}

export const ImageGallery = ({
	images = [],
	autoplayInterval = 3000,
	initialAutoplay = true,
}: ImageGalleryProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(initialAutoplay);
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState(0);
	const [dragOffset, setDragOffset] = useState(0);
	const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const hasImages = Array.isArray(images) && images.length > 0;

	const goToNext = () => {
		if (!hasImages) return;
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const goToPrevious = () => {
		if (!hasImages) return;
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const startAutoplay = () => {
		if (!hasImages) return;
		if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
		autoplayTimerRef.current = setInterval(goToNext, autoplayInterval);
	};

	const stopAutoplay = () => {
		if (autoplayTimerRef.current) {
			clearInterval(autoplayTimerRef.current);
			autoplayTimerRef.current = null;
		}
	};

	useEffect(() => {
		if (isAutoplay && hasImages && !isDragging) {
			startAutoplay();
		} else {
			stopAutoplay();
		}

		return () => stopAutoplay();
	}, [isAutoplay, hasImages, isDragging]);

	useEffect(() => {
		if (hasImages && currentIndex >= images.length) {
			setCurrentIndex(0);
		}
	}, [images]);

	const handleThumbnailClick = (index: number) => {
		setCurrentIndex(index);
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true);
		setDragStart(e.clientX);
		setDragOffset(0);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (isDragging) {
			const offset = e.clientX - dragStart;
			setDragOffset(offset);
		}
	};

	const handleMouseUp = (e: React.MouseEvent) => {
		if (isDragging) {
			const offset = e.clientX - dragStart;
			if (offset < -50) {
				goToNext();
			} else if (offset > 50) {
				goToPrevious();
			}
			setIsDragging(false);
			setDragOffset(0);
		}
	};

	const handleMouseLeave = () => {
		if (isDragging) {
			setIsDragging(false);
			setDragOffset(0);
		}
		setIsAutoplay(initialAutoplay);
	};

	// Render placeholder if no images
	if (!hasImages) {
		return (
			<div className="w-full max-w-4xl mx-auto p-4">
				<div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
					<p className="text-gray-500">No images to display</p>
				</div>
			</div>
		);
	}

	// Calculate the x position for the carousel
	const getCarouselTransform = () => {
		const width = containerRef.current?.offsetWidth || 0;
		let position = -currentIndex * width;

		if (isDragging) {
			position += dragOffset;
		}

		return position;
	};

	return (
		<div className="w-full max-w-4xl mx-auto">
			{/* Main Image Container */}
			<div
				className="relative overflow-hidden bg-default-900 rounded-lg h-[300px] lg:h-[550px] mb-4 cursor-grab active:cursor-grabbing"
				onMouseEnter={() => setIsAutoplay(false)}
				onMouseLeave={handleMouseLeave}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				ref={containerRef}>
				<div
					className="flex h-full transition-transform duration-300 ease-out"
					style={{
						transform: `translateX(${getCarouselTransform()}px)`,
						transition: isDragging ? "none" : "transform 300ms ease-out",
						width: `${images.length * 100}%`,
					}}>
					{images.map((image, index) => (
						<div
							key={index}
							className="h-full flex-shrink-0 flex items-center justify-center"
							style={{ width: `${100 / images.length}%` }}>
							<Image
								src={image}
								alt={`Gallery image ${index + 1}`}
								width={1500}
								height={1200}
								loading="lazy"
								className="w-full h-full object-contain border rounded-md"
								draggable="false"
							/>
						</div>
					))}
				</div>

				{/* Navigation Controls - Only show if multiple images */}
				{images.length > 1 && (
					<div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none z-10">
						<button
							onClick={goToPrevious}
							className="bg-black bg-opacity-50 text-white p-2 rounded-full pointer-events-auto hover:bg-opacity-70 transition-colors"
							aria-label="Previous image">
							<ArrowLeftIcon />
						</button>

						<button
							onClick={goToNext}
							className="bg-black bg-opacity-50 text-white p-2 rounded-full pointer-events-auto hover:bg-opacity-70 transition-colors"
							aria-label="Next image">
							<ArrowRightIcon />
						</button>
					</div>
				)}

				{/* Image Counter - Only show if multiple images */}
				{images.length > 1 && (
					<div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm z-10">
						{currentIndex + 1} / {images.length}
					</div>
				)}
			</div>

			{/* Thumbnails - Only show if multiple images */}
			{images.length > 1 && (
				<div className="w-full overflow-x-auto p-2">
					<div className="flex space-x-2 min-w-max">
						{images.map((image, index) => (
							<div
								key={index}
								onClick={() => handleThumbnailClick(index)}
								className={`cursor-pointer w-20 h-16 overflow-hidden rounded-md border-2 transition-all duration-200 ${
									index === currentIndex
										? "border-primary-500 scale-105"
										: "border-transparent"
								}`}>
								<Image
									src={image}
									alt={`Thumbnail ${index + 1}`}
									className="w-full h-full object-cover border"
									width={80}
									height={80}
									loading="lazy"
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
