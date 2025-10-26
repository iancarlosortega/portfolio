import { FC, ReactNode, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { BookIcon, SuitCaseIcon } from "../icons";
import { ExperienceItem, ExperienceType } from "@/constants/experience";

interface ExperienceCardProps {
	item: ExperienceItem;
	index: number;
	inView: boolean;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ item, index }) => {
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
				duration: 0.3,
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
