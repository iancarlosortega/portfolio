interface Props {
	name: string;
	icon: React.ReactNode;
}

export const SkillItem = ({ name, icon }: Props) => {
	return (
		<li className="flex flex-col items-center gap-2 transition-transform duration-300 ease hover:scale-110">
			{icon}
			<p className="text-sm text-black dark:text-light font-medium">{name}</p>
		</li>
	);
};
