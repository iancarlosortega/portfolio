import { FC, JSX } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { PreviewIcon, GithubIcon } from "@/components/icons";
import { ProjectProps } from "./ProjectCard";

// Helper function to get technology icons
const getTechIcon = (tech: string) => {
	const iconMap: Record<string, JSX.Element> = {
		React: <ReactIcon className="w-6 h-6 text-[#61DAFB]" />,
		"Next.Js": <NextJsIcon className="w-6 h-6 dark:text-white" />,
		"Node.js": <NodeJsIcon className="w-6 h-6 text-[#68A063]" />,
		TypeScript: <TypeScriptIcon className="w-6 h-6" />,
		TailwindCSS: <TailwindIcon className="w-6 h-6" />,
		MongoDB: <MongoDBIcon className="w-6 h-6" />,
		PostgreSQL: <PostgresIcon className="w-6 h-6" />,
		Postgresql: <PostgresIcon className="w-6 h-6" />,
		Angular: <AngularIcon className="w-6 h-6" />,
		Firebase: <FirebaseIcon className="w-6 h-6" />,
		Supabase: <SupabaseIcon className="w-6 h-6" />,
		NestJS: <NestJSIcon className="w-6 h-6" />,
		JavaScript: <JavaScriptIcon className="w-6 h-6" />,
		Express: <ExpressIcon className="w-6 h-6" />,
		HTML: <HtmlIcon className="w-6 h-6" />,
		CSS: <CssIcon className="w-6 h-6" />,
		Zustand: <ZustandIcon className="w-6 h-6" />,
		Mapbox: <MapboxIcon className="w-6 h-6" />,
		Docker: <DockerIcon className="w-6 h-6" />,
	};

	return (
		iconMap[tech] || (
			<div className="w-6 h-6 bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-200 text-xs flex items-center justify-center rounded-full">
				{tech.charAt(0)}
			</div>
		)
	);
};

// Import all icons
import {
	ReactIcon,
	NextJsIcon,
	NodeJsIcon,
	TypeScriptIcon,
	TailwindIcon,
	MongoDBIcon,
	PostgresIcon,
	AngularIcon,
	FirebaseIcon,
	SupabaseIcon,
	NestJSIcon,
	JavaScriptIcon,
	ExpressIcon,
	HtmlIcon,
	CssIcon,
	ZustandIcon,
	MapboxIcon,
	DockerIcon,
} from "@/components/icons";

// Close Icon component
export const CloseIcon = ({ className = "w-6 h-6" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);

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

	if (!project) return null;

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

					{/* Modal Content - fullscreen with better layout */}
					<motion.div
						className="bg-white dark:bg-zinc-800 w-full h-full md:h-auto md:max-h-[90vh] md:w-[95vw] max-w-6xl overflow-auto relative z-10"
						variants={modalVariants}>
						{/* Close button - now positioned absolutely */}
						<button
							onClick={onClose}
							className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-20">
							<CloseIcon className="w-6 h-6" />
						</button>

						<div className="flex flex-col md:flex-row h-full">
							{/* Left side - Image */}
							<div className="relative">
								<Image
									src={project.imageUrl}
									alt={project.title}
									width={600}
									height={400}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							</div>

							{/* Right side - Project details */}
							<div className="md:w-1/2 p-6 md:p-8 overflow-auto">
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
									<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
										{project.stack.map((tech) => (
											<div
												key={tech}
												className="flex items-center gap-2 bg-secondary/10 dark:bg-zinc-700 p-3 rounded-xl">
												{getTechIcon(tech)}
												<span className="text-gray-700 dark:text-gray-200 font-medium">
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
										className="btn flex items-center justify-center gap-2">
										<span>
											{translate("liveDemo")} <PreviewIcon />
										</span>
									</a>
									<a
										href={project.codeUrl}
										target="_blank"
										rel="noreferrer"
										className="btn flex items-center justify-center gap-2">
										<span>
											{translate("code")} <GithubIcon className="w-6 h-6" />
										</span>
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
