"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PreviewIcon, GithubIcon } from "@/components/icons";

interface Props {
	title: string;
	description: string;
	stack: string[];
	demoUrl: string;
	codeUrl: string;
	imageUrl: string;
}

export const ProjectCard = ({
	title,
	description,
	stack,
	demoUrl,
	codeUrl,
	imageUrl,
}: Props) => {
	const [isHovering, setIsHovering] = useState(false);
	const translate = useTranslations("projects");

	return (
		<article className="bg-white dark:bg-zinc-800 shadow-md rounded-xl mx-auto">
			<header
				className="relative"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}>
				<Image
					src={imageUrl}
					alt={title}
					width={600}
					height={400}
					className="w-full aspect-video object-cover rounded-t-xl"
				/>
				<div
					className={`absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center gap-4 rounded-t-xl transition-all duration-300 ${
						isHovering
							? "opacity-100 backdrop-blur-sm bg-black/50"
							: "opacity-0 backdrop-blur-none bg-transparent"
					}`}>
					<a
						title="Live Demo"
						href={demoUrl}
						target="_blank"
						rel="noreferrer"
						className="border p-3 border-white text-white rounded-full hover:text-primary hover:border-primary transition-colors duration-200 hover:bg-white">
						<PreviewIcon />
					</a>
					<a
						title={translate("code")}
						href={codeUrl}
						target="_blank"
						rel="noreferrer"
						className="border p-3 border-white text-white rounded-full hover:text-primary hover:border-primary transition-colors duration-200 hover:bg-white">
						<GithubIcon className="size-6" />
					</a>
				</div>
			</header>
			<div className="px-4 py-6 md:px-8">
				<h3 className="text-center text-2xl text-primary dark:text-light font-bold border-b pb-4 border-dashed border-primary dark:border-light">
					{title}
				</h3>
				<p className="my-6 text-gray-500 dark:text-gray-100 font-light">
					{translate(description)}
				</p>
				<ul className="my-6 flex flex-wrap justify-center gap-2">
					{stack.map((tech) => (
						<li
							key={tech}
							className="px-4 py-2 bg-secondary dark:bg-zinc-900 text-white rounded-3xl font-medium text-sm">
							{tech}
						</li>
					))}
				</ul>
				{/* Links on Mobile */}
				<footer className="flex flex-col lg:hidden md:flex-row items-center justify-center gap-4">
					<a href={demoUrl} target="_blank" rel="noreferrer" className="btn">
						<span>
							Demo <PreviewIcon />
						</span>
					</a>
					<a href={codeUrl} target="_blank" rel="noreferrer" className="btn">
						<span>
							{translate("code")} <GithubIcon className="size-6" />
						</span>
					</a>
				</footer>
			</div>
		</article>
	);
};
