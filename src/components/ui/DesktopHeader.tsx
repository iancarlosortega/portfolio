"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";
import { LinkedInIcon, GithubIcon, DocumentIcon } from "@/components/icons";
import { cn } from "@/utils/classNames";

export const DesktopHeader = () => {
	const translate = useTranslations("contact");
	const [isInTargetSection, setIsInTargetSection] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const aboutSection = document.getElementById("about");
			if (!aboutSection) return;
			const rect = aboutSection.getBoundingClientRect();
			setIsInTargetSection(rect.top <= -10 && rect.bottom >= 140);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="hidden md:flex max-w-6xl mx-auto items-center justify-between relative">
			<LanguageSwitcher />
			<nav>
				<ul className="flex items-center justify-center gap-16 absolute top-2 left-0 right-0 mx-auto">
					<li className="cursor-pointer transition-transform duration-200 ease-in hover:-translate-y-1">
						<a
							title="LinkedIn"
							href="https://www.linkedin.com/in/ian-carlos-ortega-05a3a0270/"
							target="_blank"
							rel="noreferrer noopener">
							<LinkedInIcon
								className={cn("text-primary transition-colors", {
									"text-white": isInTargetSection,
								})}
							/>
						</a>
					</li>
					<li className="cursor-pointer transition-transform duration-200 ease-in hover:-translate-y-1">
						<a
							title="Github"
							href="https://github.com/iancarlosortega"
							target="_blank"
							rel="noreferrer noopener">
							<GithubIcon
								className={cn("text-primary transition-colors", {
									"text-white": isInTargetSection,
								})}
							/>
						</a>
					</li>
					<li className="cursor-pointer transition-transform duration-200 ease-in hover:-translate-y-1">
						<a
							title="CV"
							href={translate("cv-link")}
							target="_blank"
							rel="noreferrer noopener">
							<DocumentIcon
								className={cn("text-primary transition-colors", {
									"text-white": isInTargetSection,
								})}
							/>
						</a>
					</li>
				</ul>
			</nav>
			<ThemeToggleButton />
		</div>
	);
};
