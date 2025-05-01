import { FC } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectProps } from "./ProjectCard";
import { PreviewIcon, GithubIcon, CloseIcon } from "@/components/icons";
import { getTechIcon } from "@/utils/getTechIcon";
import { ImageGallery } from "./ImagesGallery";
interface ProjectModalProps {
	project: ProjectProps | null;
	isOpen: boolean;
	onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({
	project,
	isOpen,
	onClose,
}) => {
	const translate = useTranslations("projects");

	const generateImages = (folder: string) => {
		const images: string[] = [];
		for (let i = 1; i <= 5; i++) {
			images.push(`/images/projects/${folder}/${i}.png`);
		}
		return images;
	};

	if (!project) return null;

	const images = generateImages(project.description);
	console.log({ images });

	const modalVariants = {
		hidden: {
			opacity: 0,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			scale: 0.95,
			transition: {
				duration: 0.2,
			},
		},
	};

	const overlayVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.3 },
		},
		exit: {
			opacity: 0,
			transition: { duration: 0.2 },
		},
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={overlayVariants}>
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-black/80 backdrop-blur-md"
						onClick={onClose}
					/>

					{/* Modal Content - Responsive layout with mobile-first approach */}
					<motion.div
						className="bg-white dark:bg-zinc-800 w-full h-full md:h-auto md:max-h-[90vh] md:w-[95vw] overflow-auto relative z-10 rounded-md"
						variants={modalVariants}>
						{/* Close button - positioned absolutely */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-20">
							<CloseIcon className="w-6 h-6" />
						</button>

						{/* Reorganized container - mobile: stacked (info first), desktop: side-by-side */}
						<div className="flex flex-col xl:flex-row h-full">
							{/* Project details - Shows first on mobile */}
							<div className="flex-1 p-6 md:p-8 order-1 md:order-2">
								<h2 className="text-3xl font-bold text-primary dark:text-light mb-6 border-b pb-4 border-dashed border-primary dark:border-light">
									{project.title}
								</h2>

								<p className="text-gray-600 dark:text-gray-200 mb-8 text-lg">
									{translate(project.description)}
								</p>

								{/* Tech Stack with icons */}
								<div className="mb-8">
									<h3 className="text-xl font-semibold mb-4 text-primary dark:text-light">
										{translate("techStack")}
									</h3>
									<div className="flex flex-wrap gap-4">
										{project.stack.map((tech) => (
											<div
												key={tech}
												className="flex items-center gap-2 bg-secondary/10 dark:bg-zinc-700 py-2 px-3 rounded-xl">
												{getTechIcon(tech)}
												<span className="text-gray-700 dark:text-gray-200 font-medium text-sm">
													{tech}
												</span>
											</div>
										))}
									</div>
								</div>

								{/* Links */}
								<div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
									<a
										href={project.demoUrl}
										target="_blank"
										rel="noreferrer"
										className="btn !w-full flex items-center justify-center gap-2">
										<span>
											{translate("liveDemo")} <PreviewIcon />
										</span>
									</a>
									<a
										href={project.codeUrl}
										target="_blank"
										rel="noreferrer"
										className="btn !w-full flex items-center justify-center gap-2">
										<span>
											{translate("code")} <GithubIcon className="w-6 h-6" />
										</span>
									</a>
								</div>
							</div>

							{/* Image Gallery - Shows second on mobile */}
							<div className="w-full p-4 order-2 md:order-1 xl:max-w-[900px]">
								<ImageGallery images={images} initialAutoplay={false} />
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
