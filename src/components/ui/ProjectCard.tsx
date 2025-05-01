import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { PreviewIcon, GithubIcon } from "@/components/icons";

// Project types
export interface ProjectProps {
	title: string;
	description: string;
	stack: string[];
	demoUrl: string;
	codeUrl: string;
	imageUrl: string;
}

interface ProjectCardProps extends ProjectProps {
	index: number;
	onClick: () => void;
	size: "small" | "medium" | "large";
}

export const ProjectCard: FC<ProjectCardProps> = ({
	title,
	description,
	stack,
	demoUrl,
	codeUrl,
	imageUrl,
	index,
	onClick,
	size,
}) => {
	const [isHovering, setIsHovering] = useState(false);
	const translate = useTranslations("projects");

	// Define size classes
	const sizeClasses = {
		small: "md:row-span-1 md:col-span-1",
		medium: "md:row-span-1 md:col-span-2",
		large: "md:row-span-2 md:col-span-2",
	};

	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: index * 0.1,
			},
		},
	};

	return (
		<motion.article
			className={`bg-white dark:bg-zinc-800 shadow-md rounded-xl overflow-hidden cursor-pointer transition-all duration-300 aspect-square md:aspect-auto ${sizeClasses[size]}`}
			variants={cardVariants}
			initial="hidden"
			animate="visible"
			onClick={onClick}
			whileHover={{
				boxShadow:
					"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
				transition: {
					duration: 0.3,
					ease: "easeOut",
				},
			}}
			whileTap={{ scale: 0.98 }}>
			<div
				className="relative h-full"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}>
				<Image
					src={imageUrl}
					alt={title}
					width={1600}
					height={1200}
					className={`w-full h-full object-cover transition-transform duration-500 ${isHovering ? "scale-110" : "scale-100"}`}
				/>

				{/* Action buttons - animated on hover */}
				<div className="absolute top-3 right-3 flex gap-2 z-20">
					<a
						title="Live Demo"
						href={demoUrl}
						target="_blank"
						rel="noreferrer"
						className="p-2 bg-white/90 hover:bg-white text-neutral-600 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
						onClick={(e) => e.stopPropagation()}>
						<PreviewIcon className="w-5 h-5" />
					</a>
					<a
						title={translate("code")}
						href={codeUrl}
						target="_blank"
						rel="noreferrer"
						className="p-2 bg-white/90 hover:bg-white text-neutral-600 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
						onClick={(e) => e.stopPropagation()}>
						<GithubIcon className="w-5 h-5" />
					</a>
				</div>

				{/* Project info overlay - simplified without tech stack icons */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 flex flex-col justify-end"
					initial={{ opacity: 0 }}
					animate={{
						opacity: isHovering ? 1 : 0,
						transition: { duration: 0.3 },
					}}>
					<motion.h3
						className="text-xl font-bold text-white"
						initial={{ y: 20, opacity: 0 }}
						animate={{
							y: isHovering ? 0 : 20,
							opacity: isHovering ? 1 : 0,
						}}
						transition={{ duration: 0.3 }}>
						{title}
					</motion.h3>
					<motion.p
						className="text-white/90 mt-1 line-clamp-2 text-sm"
						initial={{ y: 15, opacity: 0 }}
						animate={{
							y: isHovering ? 0 : 15,
							opacity: isHovering ? 1 : 0,
						}}
						transition={{ duration: 0.3, delay: 0.1 }}>
						{translate(description)}
					</motion.p>
				</motion.div>
			</div>
		</motion.article>
	);
};
