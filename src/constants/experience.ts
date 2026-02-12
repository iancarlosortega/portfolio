export type ExperienceType = "job" | "education";

export interface ExperienceItem {
	type: ExperienceType;
	titleKey: string;
	dateKey: string;
	itemKeys: string[];
}

export const experience: ExperienceItem[] = [
	{
		type: "job",
		titleKey: "fourthJob.title",
		dateKey: "fourthJob.date",
		itemKeys: [
			"fourthJob.item1",
			"fourthJob.item2",
			"fourthJob.item3",
			"fourthJob.item4",
			"fourthJob.item5"
		],
	},
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
