import { useTranslations } from "next-intl";
import { Title } from "@/components/ui/Title";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/constants/projects";

export const Projects = () => {
	const translate = useTranslations("projects");
	return (
		<section id="projects" className="max-w-6xl mx-auto px-4 xl:px-0 py-24">
			<Title text={translate("title")} color="secondary" />
			<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
				{projects.map(
					({ title, description, stack, demoUrl, codeUrl, imageUrl }) => (
						<ProjectCard
							key={title}
							title={title}
							description={description}
							stack={stack}
							demoUrl={demoUrl}
							codeUrl={codeUrl}
							imageUrl={imageUrl}
						/>
					)
				)}
			</div>
		</section>
	);
};
