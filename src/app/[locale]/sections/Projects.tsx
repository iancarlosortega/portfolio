"use client";

import { useState, useRef, FC } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Title } from "@/components/ui/Title";
import { ProjectCard, ProjectProps } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects } from "@/constants/projects";

export const Projects: FC = () => {
	const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
		null
	);
	const [modalOpen, setModalOpen] = useState(false);
	const translate = useTranslations("projects");
	const projectsRef = useRef<HTMLDivElement>(null);

	// Define project sizes for the bento grid layout - balanced design with emphasis on real projects
	const projectSizes: ("small" | "medium" | "large")[] = [
		"large",
		"medium",
		"large",
		"medium",
		"large",
		"medium",
		"large",
		"small",
		"small",
	];

	const handleOpenModal = (project: ProjectProps) => {
		setSelectedProject(project);
		setModalOpen(true);
		document.body.style.overflow = "hidden"; // Prevent background scrolling
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		document.body.style.overflow = "auto"; // Re-enable scrolling
	};

	const titleVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	return (
		<section id="projects" className="max-w-7xl mx-auto px-4 py-24">
			<motion.div variants={titleVariants} initial="hidden" animate="visible">
				<Title text={translate("title")} color="secondary" />
			</motion.div>

			<motion.div
				ref={projectsRef}
				className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-4 md:gap-6 mt-8"
				variants={containerVariants}
				initial="hidden"
				animate="visible">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.title}
						{...project}
						index={index}
						onClick={() => handleOpenModal(project)}
						size={projectSizes[index] || "small"}
					/>
				))}
			</motion.div>

			<ProjectModal
				project={selectedProject}
				isOpen={modalOpen}
				onClose={handleCloseModal}
			/>
		</section>
	);
};
