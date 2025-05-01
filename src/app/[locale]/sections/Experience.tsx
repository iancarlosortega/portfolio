"use client";

import { useRef, FC, ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Title } from "@/components/ui/Title";
import { SuitCaseIcon, BookIcon } from "@/components/icons";

type ExperienceType = "job" | "education";

type ExperienceItem = {
	type: ExperienceType;
	titleKey: string;
	dateKey: string;
	itemKeys: string[];
};

interface ExperienceCardProps {
	item: ExperienceItem;
	index: number;
	inView: boolean;
}

interface RichTextProps {
	chunks: ReactNode;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ item, index, inView }) => {
	const t = useTranslations("experience");
	const cardRef = useRef<HTMLDivElement>(null);
	const cardInView = useInView(cardRef, { once: true, amount: 0.2 });
	const isEven = index % 2 === 0;

	const cardVariants = {
		hidden: {
			opacity: 0,
			x: isEven ? -50 : 50,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				delay: 0.2 + index * 0.1,
			},
		},
	};

	const iconVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20,
				delay: 0.3 + index * 0.1,
			},
		},
	};

	const listVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.5 + index * 0.1,
			},
		},
	};

	const listItemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
			},
		},
	};

	const getIcon = (type: ExperienceType) => {
		return type === "job" ? (
			<SuitCaseIcon className="w-8 h-8 text-white dark:text-zinc-200" />
		) : (
			<BookIcon className="w-8 h-8 text-white dark:text-zinc-200" />
		);
	};

	return (
		<motion.div
			ref={cardRef}
			initial="hidden"
			animate={cardInView ? "visible" : "hidden"}
			variants={cardVariants}
			className={`rounded-md bg-white dark:bg-zinc-800 shadow-md py-6 px-8 relative w-[90%] md:w-[calc(50%-2rem)] self-end ${
				isEven && "md:self-start"
			}`}>
			<motion.div
				variants={iconVariants}
				className={`bg-primary rounded-full w-12 h-12 p-2 flex items-center justify-center absolute top-2 left-[-52px] ${
					isEven && "md:left-auto md:right-[-56px]"
				}`}>
				{getIcon(item.type)}
			</motion.div>
			<h3 className="font-bold text-lg leading-tight text-primary dark:text-light">
				{t(item.titleKey)}
			</h3>
			<p className="text-xs font-bold text-gray-500 dark:text-gray-300 italic">
				{t(item.dateKey)}
			</p>
			<motion.ul
				variants={listVariants}
				className="mt-3 pl-3 text-gray-500 dark:text-gray-100 list-disc">
				{item.itemKeys.map((itemKey, itemIndex) => (
					<motion.li key={itemIndex} variants={listItemVariants}>
						{t.rich(itemKey, {
							b: (chunks: ReactNode) => <b>{chunks}</b>,
							a: (chunks: ReactNode) => (
								<a
									href="https://www.ciat.org/"
									target="_blank"
									rel="noreferrer"
									className="text-primary dark:text-light underline">
									{chunks}
								</a>
							),
						})}
					</motion.li>
				))}
			</motion.ul>
		</motion.div>
	);
};

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

	const items: ExperienceItem[] = [
		{
			type: "job",
			titleKey: "thirdJob.title",
			dateKey: "thirdJob.date",
			itemKeys: [
				"thirdJob.item1",
				"thirdJob.item2",
				"thirdJob.item3",
				"thirdJob.item4",
				"thirdJob.item5",
			],
		},
		{
			type: "job",
			titleKey: "secondJob.title",
			dateKey: "secondJob.date",
			itemKeys: [
				"secondJob.item1",
				"secondJob.item2",
				"secondJob.item3",
				"secondJob.item4",
				"secondJob.item5",
			],
		},
		{
			type: "job",
			titleKey: "firstJob.title",
			dateKey: "firstJob.date",
			itemKeys: [
				"firstJob.item1",
				"firstJob.item2",
				"firstJob.item3",
				"firstJob.item4",
			],
		},
		{
			type: "education",
			titleKey: "education.title",
			dateKey: "education.date",
			itemKeys: [
				"education.item1",
				"education.item2",
				"education.item3",
				"education.item4",
			],
		},
	];

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

				{items.map((item, index) => (
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
