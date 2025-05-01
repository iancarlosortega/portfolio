"use client";

import { useTranslations } from "next-intl";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Title } from "@/components/ui/Title";
import {
	backendTechnologies,
	frontendTechnologies,
	tools,
} from "@/constants/technologies";
import { SkillItem } from "@/components/ui/SkillItem";
import { cn } from "@/utils/classNames";

export const Skills = () => {
	const translate = useTranslations("skills");
	const categories = ["Frontend", "Backend", translate("tools")];
	return (
		<div className="relative">
			<section
				id="skills"
				className={cn(
					"h-full overflow-hidden relative flex flex-col items-center py-24 lg:py-48",
					"before:absolute before:-z-20 before:h-[300px] before:w-[380px] before:rounded-full before:bg-gradient-to-br before:opacity-40",
					'before:from-primary before:to-secondary before:blur-2xl before:content-[""] before:translate-x-1/2 before:-translate-y-10',
					"after:absolute after:-z-20 after:h-[280px] after:w-[440px] after:rounded-full after:bg-gradient-to-br after:opacity-40",
					'after:from-primary after:to-secondary after:blur-2xl after:content-[""] after:-translate-x-[10%] md:after:-translate-x-[30%] after:translate-y-[15rem]',
					"before:dark:from-teal-300 before:dark:to-teal-100 before:dark:opacity-10",
					"after:dark:from-teal-300 after:dark:to-teal-100 after:dark:opacity-10"
				)}>
				<Title text={translate("title")} color="secondary" />
				<TabGroup>
					<TabList className="flex flex-wrap justify-center gap-4 md:flex-row z-20">
						{categories.map((category) => (
							<Tab
								key={category}
								className={({ selected }) =>
									cn(
										"md:mx-4 py-2.5 px-8 font-bold",
										"focus:outline-none transition duration-300 ease drop-shadow-lg",
										selected
											? "bg-primary text-white dark:bg-white dark:text-primary"
											: "bg-white  text-primary hover:bg-gray-100 dark:bg-white/[0.12] dark:text-white dark:hover:bg-white/[0.2]"
									)
								}>
								{category}
							</Tab>
						))}
					</TabList>
					<TabPanels className="mt-16 mb-32 md:mb-0 z-20">
						<TabPanel>
							<ul className="max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center animate-fade-in mx-auto">
								{frontendTechnologies.map(({ name, icon }) => (
									<SkillItem key={name} name={name} icon={icon} />
								))}
							</ul>
						</TabPanel>
						<TabPanel>
							<ul className="max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center animate-fade-in mx-auto">
								{backendTechnologies.map(({ name, icon }) => (
									<SkillItem key={name} name={name} icon={icon} />
								))}
							</ul>
						</TabPanel>
						<TabPanel>
							<ul className="max-w-[30rem] h-[25rem] md:h-[15rem] flex gap-12 flex-wrap justify-center animate-fade-in mx-auto">
								{tools.map(({ name, icon }) => (
									<SkillItem key={name} name={name} icon={icon} />
								))}
							</ul>
						</TabPanel>
					</TabPanels>
				</TabGroup>
			</section>
		</div>
	);
};
