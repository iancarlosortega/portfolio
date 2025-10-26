"use client";

import { useRef, FC } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Title } from "@/components/ui/Title";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experience } from "@/constants/experience";

export const Experience: FC = () => {
	const t = useTranslations("experience");
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

	// For scroll-based line animation
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	// Transform the scroll progress to height percentage
	const lineHeight = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"]);

	return (
		<section
			id="experience"
			ref={sectionRef}
			className="max-w-6xl mx-auto px-4 py-24 overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<Title text={t("title")} color="secondary" />
			</motion.div>

			<div className="flex flex-col gap-6 relative py-8">
				<div className="w-1 h-full absolute top-0 left-2 md:left-1/2 mx-auto bg-gray-200 dark:bg-gray-700 rounded-sm">
					<motion.div
						style={{ height: lineHeight }}
						className="w-full absolute top-0 left-0 bg-light dark:bg-secondary rounded-sm origin-top"
					/>
				</div>

				{experience.map((item, index) => (
					<ExperienceCard
						key={index}
						item={item}
						index={index}
						inView={isInView}
					/>
				))}
			</div>
		</section>
	);
};
