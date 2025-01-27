import { DropdownMenu } from "@/components/ui/DropDownMenu";
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";

export const PhoneHeader = () => {
	return (
		<ul className="flex items-center justify-between md:hidden">
			<li>
				<DropdownMenu />
			</li>
			<li>
				<ThemeToggleButton />
			</li>
		</ul>
	);
};
