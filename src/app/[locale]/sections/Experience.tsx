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

export const Experience = () => {
	const t = useTranslations("experience");

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

	const getIcon = (type: ExperienceType) => {
		return type === "job" ? (
			<SuitCaseIcon className="w-8 h-8 text-white dark:text-zinc-200" />
		) : (
			<BookIcon className="w-8 h-8 text-white dark:text-zinc-200" />
		);
	};

	return (
		<section id="experience" className="max-w-6xl mx-auto px-4 xl:px-0 py-24">
			<Title text={t("title")} color="secondary" />
			<div className="flex flex-col gap-6 relative py-8">
				<div className="w-1 h-full absolute top-0 left-0 md:left-1/2 mx-auto bg-light dark:bg-secondary rounded-sm" />
				{items.map((item, index) => (
					<div
						key={index}
						className={`rounded-md bg-white dark:bg-zinc-800 shadow-md py-6 px-8 relative w-[90%] md:w-[calc(50%-2rem)] ${
							index % 2 === 0 ? "md:self-start" : "self-end"
						}`}>
						<div
							className={`bg-primary rounded-full w-12 h-12 p-2 flex items-center justify-center absolute top-2 ${
								index % 2 === 0
									? "left-[-56px] md:left-auto md:right-[-56px]"
									: "left-[-56px]"
							}`}>
							{getIcon(item.type)}
						</div>
						<h3 className="font-bold text-lg leading-tight text-primary dark:text-light">
							{t(item.titleKey)}
						</h3>
						<p className="text-xs font-bold text-gray-500 dark:text-gray-300 italic">
							{t(item.dateKey)}
						</p>
						<ul className="mt-3 pl-3 text-gray-500 dark:text-gray-100 list-disc">
							{item.itemKeys.map((itemKey, itemIndex) => (
								<li key={itemIndex}>
									{t.rich(itemKey, {
										b: (chunks) => <b>{chunks}</b>,
										a: (chunks) => (
											<a
												href="https://www.ciat.org/"
												target="_blank"
												rel="noreferrer"
												className="text-primary dark:text-light underline">
												{chunks}
											</a>
										),
									})}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};
